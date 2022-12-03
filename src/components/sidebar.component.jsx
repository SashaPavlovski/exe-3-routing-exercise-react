import { Link } from "react-router-dom";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import ErrorIcon from "@mui/icons-material/Error";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TopicIcon from "@mui/icons-material/Topic";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <Link to="/">
        <HomeIcon></HomeIcon>
        <div className="Home">Home</div>
      </Link>
      <Link to="/about">
        <ErrorIcon></ErrorIcon>
        <div className="About me">About me</div>
      </Link>
      <Link to="/contactus">
        <LocalPhoneIcon></LocalPhoneIcon>
        <div className="Contact-us">Contact us</div>
      </Link>
      <Link to="/movies">
        <TopicIcon></TopicIcon>
        <div className="movies">movies</div>
      </Link>
      <Link to="/games">
        <SmartToyIcon></SmartToyIcon>
        <div className="Games">Games</div>
      </Link>
    </>
  );
};
