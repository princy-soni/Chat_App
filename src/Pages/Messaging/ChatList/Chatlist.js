import React, { Fragment, useEffect } from "react";
import Chatitem from "./Chatitem";
// import Profile from "../../../Assets/Avatars/profile.png";
import { Search } from "react-ionicons";
import useGetUsers from "../../../Hooks/getUsers";
import { useSelector } from "react-redux";
import avatar from "../../../Assets/Avatars/profile.png";
import "./Chatlist.css";

const Chatlist = () => {
  const { getList, Users } = useGetUsers();
  const myState = useSelector((state) => state.UserUpdate);

  useEffect(() => {
    let UserData = {
      name: myState.name,
      email: myState.email,
    };
    getList(UserData);
  }, []);
  // console.log(Users);
  const allChatUsers = [
    {
      name: "Priyansh",
      id: "dsdsd",
      isOnline: true,
      active: "fsf",
      image: avatar,
    },
    {
      name: "Aryaman",
      id: "dsdsd",
      isOnline: true,
      active: "fsf",
      image: avatar,
    },
    {
      name: "Abhay",
      id: "dsdsd",
      isOnline: true,
      active: "fsf",
      image: avatar,
    },
    {
      name: "Aayushi",
      id: "dsdsd",
      isOnline: true,
      active: "fsf",
      image: avatar,
    },
    {
      name: "Sonal",
      id: "dsdsd",
      isOnline: true,
      active: "fsf",
      image: avatar,
    },
  ];

  return (
    <Fragment>
      <div>
        <div className="chatlist__heading">
          <h2>Users Available</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Find People" required />
            <button className="search-btn">
              <Search
                color={"#00000"}
                title="Find People"
                height="25px"
                width="25px"
              />
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {allChatUsers.map((item, index) => {
            return (
              <Chatitem
                name={item.name}
                id={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Chatlist;
