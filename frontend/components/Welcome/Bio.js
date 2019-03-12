import React, { useState } from "react";
import {withStyles} from '@material-ui/core'
import Router from "next/router";
import NProgress from "nprogress";
import { Mutation } from "react-apollo";
import CustomInput from "../../styledComponents/CustomInput/CustomInput.jsx";
import { UPDATE_USER_MUTATION } from "../Mutations/updateUser";
import Button from "../../styledComponents/CustomButtons/Button";
import styles from '../../static/jss/Welcome/welcomeStyles';

const Bio = ({ user, classes }) => {
  const [bio, setBio] = useState("");
  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{ biography: bio }}
      onCompleted={() => {
        NProgress.done();
        Router.push(
          `/welcome?slug=8`,
          `/welcome/pro`,
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
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(0,0,0,.6)",
              padding: "40px",
              //   border: '2px solid #ff101f',
              borderRadius: "6px",
              zIndex: "1"
            }}
			className={classes.textArea}
          >
            <h2>Write something about yourself</h2>
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
                onChange: e => setBio(e.target.value),
                placeholder: "Write a little about yourself"
              }}
            />
            <Button
			style={{zIndex:'2'}}
              color="danger"
              disabled={!bio}
              onClick={() => {
                NProgress.start();
                updateUser();
              }}
            >
              Update
            </Button>
          </div>
        </div>
      )}
    </Mutation>
  );
};

export default withStyles(styles)(Bio);
