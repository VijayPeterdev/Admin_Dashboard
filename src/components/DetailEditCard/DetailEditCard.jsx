import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import "./DetailEditCard.css";
const DetailEditCard = () => {
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
            variant="outlined"
          />
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="FullName"
            variant="outlined"
          />
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            className="mui_textfield"
            size="small"
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
        </div>
        <div className="edit__right">
          <img
            className="edit__profile"
            src="https://www.pinkvilla.com/imageresize/mehabooba_song_.jpg?width=752&t=pvorg"
            alt=""
          />

          <div className="upload__section">
            <Button  className="button__color" variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEditCard;
