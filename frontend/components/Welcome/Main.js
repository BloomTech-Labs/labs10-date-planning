import React from "react";
import Router from "next/router";
import Link from "next/link";
import Button from "../../styledComponents/CustomButtons/Button";
import Logo from "../Header/UpFor";

const Main = ({ user }) => {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', color: 'white'}}>
      <h2 style={{ display: "flex" }}>
        <span style={{marginRight: '6px'}}>Welcome to</span>
        {<Logo />}
        <span style={{marginLeft: '6px'}}>{user.firstName}!</span>
      </h2>
      <h3>Tell us a little about yourself...</h3>
      <Button
	  	color='danger'
        style={{ zIndex: 1 }}
        onClick={() => {
          Router.push(
            `/welcome?slug=1`,
            `/welcome/profile/gender`,
            { shallow: true },
            { scroll: false }
          );
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Main;
