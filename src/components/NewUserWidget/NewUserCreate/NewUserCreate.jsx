import { Button, TextField } from "@mui/material";

import React, { useContext,  useState } from "react";
import { createNewUser } from "../../../Context/UserContext/UserApi";
import "./NewUserCreate.css";
import { UserContext } from "./../../../Context/UserContext/UserContext";
import storage from "../../../firebase";
import { useNavigate } from "react-router-dom";

const NewUserCreate = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [uploadImg, setUploadImg] = useState("https://content.hostgator.com/img/weebly_image_sample.png");

  const [user, setUser] = useState(null);







  const [uploadCount, setUploadCount] = useState(0);
  const { dispatch } = useContext(UserContext);

  console.log(user);

  const handleChange = (e) => {
    const value = e.target.value;

    setUser({ ...user, [e.target.name]: value });
  };

  const HandleSumbit = (e) => {
    e.preventDefault();

    createNewUser(user, dispatch);


    navigate("/user");
  };

  const upload = (item) => {
    const fileName = new Date().getTime() + item.label + item.file.name;
    const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setUser((prev) => {
            return { ...prev, [item.label]: url };
          });
          
          setUploadCount((prev) => prev + 1);
          setUploadImg(user.userimage);
        });
      }
    );
  };

  const HandleUpload = (e) => {
    e.preventDefault();
    upload({ file: profilePic, label: "userimage" });
   
  };

  return (
    <div className="newuser__holder">
      <span>New User</span>
      <form>
        <div className="newuser_grid">
          <TextField
            id="outlined-basic"
            size="small"
            label="Username"
            name="username"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="email"
            size="small"
            onChange={handleChange}
            label="Email"
            name="email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="password"
            name="password"
            size="small"
            label="Password"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="tel"
            name="phonenumber"
            size="small"
            label="Phone Number"
            onChange={handleChange}
            variant="outlined"
          />
          
          
            <img 
           
              src={uploadImg}
              alt=""
            />
         
          <input
            onChange={(e) => setProfilePic(e.target.files[0])}
            type="file"
            name="userimage"
          />
          <div className="checkbox__holder">
            <label> Gender</label>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              id="male"
              value="male"
            />
            <label htmlFor="male"> Male</label>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              id="female"
              value="female"
            />
            <label htmlFor="female"> Female</label>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              id="other"
              value="other"
            />
            <label htmlFor="other"> Other</label>
          </div>
          <div className="newuser__status">
            <label> Active</label>

            <select
              className="selection"
              onChange={handleChange}
              name="isActive"
              id="active"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </form>

      {uploadCount > 0 ? (
        <Button
          onClick={HandleSumbit}
          className="create_btn"
          variant="contained"
        >
          Create
        </Button>
      ) : (
        <Button
          onClick={HandleUpload}
          className="create_btn"
          variant="contained"
        >
          Upload
        </Button>
      )}
    </div>
  );
};

export default NewUserCreate;
