import { Button, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";
import "./NewUserCreate.css";

const NewUserCreate = () => {
  return (
    <div className="newuser__holder">
      <span>New User</span>
      <form action="">
        <div className="newuser_grid">
          <TextField
            id="outlined-basic"
            size="small"
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Fullname"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="email"
            size="small"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="password"
            size="small"
            label="Password"
            variant="outlined"
          />
          <MuiTelInput value="+918610570243" />
          <TextField
            id="outlined-basic"
            size="small"
            label="Address"
            variant="outlined"
          />
          <div className="checkbox__holder">
            <label> Gender</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male"> Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female"> Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other"> Other</label>
          </div>

          <div className="newuser__status">
            <label> Active</label>

            <select  className="selection" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>

            </select>
          </div>
        </div>
      </form>

      <Button className="create_btn" variant="contained">Create</Button>
    </div>
  );
};

export default NewUserCreate;
