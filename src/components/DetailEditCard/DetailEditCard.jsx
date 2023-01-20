
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import storage from "../../firebase";
import "./DetailEditCard.css";
import {  updateUserApi } from './../../Context/UserContext/UserApi';
import { UserContext } from './../../Context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
const DetailEditCard = ({ user }) => {
  const [updateUser, SetUpdateUser] = useState(null);
  const [profilePic, SetProfilePic] = useState(null);
  const [cloudUpload, setCloudUpload] = useState(0);
  const [uploadProcess, setUploadProcess] = useState(null);
  const [error, setError] = useState(false);

  const navigation = useNavigate();
  const {dispatch} = useContext(UserContext);

   

  console.log(updateUser);

  // All Form data same update method
  const handleChange = (e) => {
    const value = e.target.value;
    SetUpdateUser({ ...updateUser, [e.target.name]: value });
  };

  const upload = (item) => {
    const fileName = new Date().getTime() + item.label + item.file.name;
    const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);


     // upload to firebase 

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProcess("Upload is " +  Math.round(progress) + "% done");

     
      },
      (error) => {
        setError(true);
        alert(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          SetUpdateUser((prev) => {
            return {
              ...prev,
              [item.label]: url
            };
          });

          
          setCloudUpload((prev) => prev + 1);
        
        });
      }
    );
  };

  // Firebase Image Upload Method

  const handleUpload = (e) => {
    e.preventDefault();

    upload({
      file: profilePic,
      label: "userimage",
    });
  };

 

  // upload to mongoDB

  const id = user._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    

    updateUserApi(id,updateUser,dispatch)

     navigation("/user");


    


  }


  return (
    <div className="detailedit__card">
      <h3 className="edit__title">Edit</h3>

      <div className="grid__edit">
        <div className="edit__left">
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="Username"
            onChange={handleChange}
            defaultValue={user.username}
            variant="outlined"
            name="username"
          />

          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            onChange={handleChange}
            label="Email"
            defaultValue={user.email}
            name="email"
            variant="outlined"
          />
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="Phone Number"
            defaultValue={user.phonenumber}
            name="phonenumber"
            onChange={handleChange}
            variant="outlined"
          />
           <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="password"
            
            name="password"
            onChange={handleChange}
            variant="outlined"
          />

           <select   onChange={handleChange}  style={{border:" 1px solid gray"}} name="isAdmin" id="isAdmin">
           <option value="false">No</option>
            <option value="true">Yes</option>
            

           </select>
        </div>
        <div className="edit__right">
          <img className="edit__profile" src={user.userimage} alt="" />

          <div className="upload__section">
   
      {uploadProcess ?  <h5>  {uploadProcess} </h5> : "" }
      {error ?  <h5>  Upload Picture Error </h5> : <h5></h5>  }



            <input
              type="file"
              onChange={(e) => SetProfilePic(e.target.files[0])}
              name="userimage"
              id="userimage"
            />
            {cloudUpload > 0 ? (
              <button  className="button"  onClick={handleSubmit} >Update Now</button>
            ) : (
              <button  className="button" onClick={handleUpload} >Upload</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEditCard;
