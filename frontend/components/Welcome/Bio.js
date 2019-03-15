import React, { useState } from "react";

import { withStyles } from "@material-ui/core";

import Router from "next/router";
import NProgress from "nprogress";
import { Mutation } from "react-apollo";
import { InputLabel } from "@material-ui/core";
import CustomInput from "../../styledComponents/CustomInput/CustomInput.jsx";
import { UPDATE_USER_MUTATION } from "../Mutations/updateUser";
import Button from "../../styledComponents/CustomButtons/Button";

import styles from "../../static/jss/Welcome/welcomeStyles";

const Bio = ({ user, classes }) => {
  const [bio, setBio] = useState("");
  const [charsLeft, setCharsLeft] = useState(350 - bio.length);

  const handleInput = ({ target: { value } }) => {
    setBio(value);
    setCharsLeft(350 - value.length);
  };
  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{ biography: bio }}
      onCompleted={() => {
        NProgress.done();
        Router.push(
          `/welcome?slug=8`,
          `/welcome/profile/interests`,
          { shallow: true },
          { scroll: false }
        );
      }}
    >
      {updateUser => (
        <div
          style={{
            height: "100%",
            width: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //alignItems: 'center',
              justifyContent: "center",
              backgroundColor: "rgb(0,0,0,.6)",
              padding: "40px",
              //   border: '2px solid #ff101f',
              borderRadius: "6px",
              zIndex: "1"
            }}
            className={classes.textArea}
          >
            <h2>What I'd like you to know about me is...</h2>
            <CustomInput
              //labelText='About'

              formControlProps={{
                fullWidth: true
              }}
              id="textarea-input"
              inputProps={{
                multiline: true,
                rows: 5,
                value: bio,
                onChange: e => handleInput(e),
                placeholder: "Write a little about yourself",
                value: `${charsLeft > 0 ? bio : bio.slice(0, 350)}`
              }}
            />
            <InputLabel
              style={{
                marginBottom: "10px",
                textAlign: "end",
                color: charsLeft <= 20 ? "red" : "auto"
              }}
              htmlFor="textarea-input"
              className={classes.selectLabel}
            >
              Chars left: {charsLeft}
            </InputLabel>
            <Button
              style={{ zIndex: "2", alignSelf: "center" }}
              color="danger"
              disabled={!bio}
              onClick={() => {
                NProgress.start();
                updateUser();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Mutation>
  );
};

export default withStyles(styles)(Bio);
