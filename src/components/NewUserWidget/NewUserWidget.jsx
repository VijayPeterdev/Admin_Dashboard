import React, { useEffect, useState } from "react";
import "./NewUserWidget.css";
import NewUser from "./NewUser/NewUser";
import axios from "axios";

const NewUserWidget = () => {
  const [userDetail, setUserDeatil] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/user?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJjMzQ4ZGZhYmQ1MzYxYzMxYzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjE5NzMzMSwiZXhwIjoxNjcyNDU2NTMxfQ.t4ct6ph_HL4rNsC0Sijj-Yu701Wp-nc4eu1BRZEtCfo",
          },
        });

        setUserDeatil(res.data);
        console.log(res.data);
        //  console.log( "DB data :"+userDetail[0])
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  return (
    <div className="newuser_wid">
      <span className="newuser_title">New Users</span>
      <div className="newuser__widget">
        <div className="scroll">
          {userDetail.map((user) => (
            <NewUser
              profilepic={
                user.userimage ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              username={user.username}
              // usersubname="Software Engineer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewUserWidget;
