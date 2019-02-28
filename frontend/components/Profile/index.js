import React, { useState } from "react";
import { withApollo, Mutation, Query } from "react-apollo";
import { adopt } from "react-adopt";
import InputRange from "react-input-range";
import { List, State, Map, Value, Toggle } from "react-powerplug";
import classNames from "classnames";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Drawer,
  IconButton,
  Divider
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
//Q&M
import User, { CURRENT_USER_QUERY } from "../Queries/User";
import { UPDATE_USER_MUTATION } from "../Mutations/updateUser";
//components
import Location from "../Settings/Location";
import Dates from "../Settings/Dates";
//styledcomponents
import Button from "../../styledComponents/CustomButtons/Button";
import CustomInput from "../../styledComponents/CustomInput/CustomInput.jsx";
//utils
import getAge from "../../utils/getAge";
//styles
import style from "../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx";
import "../../styles/Profile/index.scss";
const Composed = adopt({
  user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
  genderPref: ({ user, render }) => (
    <List initial={user.data.currentUser.genderPrefs}>{render}</List>
  ),
  agePref: ({ user, render }) => (
    <State
      initial={{
        min: user.data.currentUser.minAgePref || 18,
        max: user.data.currentUser.maxAgePref || 50
      }}
    >
      {render}
    </State>
  ),
  biography: ({ user, render }) => (
    <Value initial={user.data.currentUser.biography || ""}>{render}</Value>
  ),
  updateUser: ({ render }) => (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      onCompleted={() => NProgress.done()}
      onError={() => NProgress.done()}
    >
      {render}
    </Mutation>
  )
});
const Profile = ({ classes, theme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Composed>
      {({
        user: {
          data: { currentUser }
        },
        genderPref,
        agePref,
        biography,
        updateUser
      }) => {
        return (
          <div className="Profile__background">
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={drawerOpen}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                  {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <InputLabel
                htmlFor="multiple-select"
                className={classes.selectLabel}
              >
                Gender preferences
              </InputLabel>
              <Select
                multiple
                value={genderPref.list}
                onChange={e => genderPref.set(e.target.value)}
                MenuProps={{
                  className: classes.selectMenu,
                  classes: { paper: classes.selectPaper }
                }}
                classes={{ select: classes.select }}
                inputProps={{
                  name: "multipleSelect",
                  id: "multiple-select"
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelectedMultiple
                  }}
                  value="MALE"
                >
                  Men
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelectedMultiple
                  }}
                  value="FEMALE"
                >
                  Women
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelectedMultiple
                  }}
                  value="OTHER"
                >
                  Other
                </MenuItem>
              </Select>
              {/* </FormControl> */}
              <Button
                style={{marginBottom: '20px'}}
                onClick={() => {
                  NProgress.start();
                  updateUser({
                    variables: {
                      genderPrefs: genderPref.list
                    }
                  });
                }}
              >
                Set Gender
              </Button>
              <div>
                <InputRange
                  maxValue={100}
                  minValue={18}
                  value={agePref.state}
                  onChange={value => agePref.setState(value)}
                />
              </div>

              <Button
                style={{ marginTop: "30px" }}
                onClick={() => {
                  NProgress.start();
                  updateUser({
                    variables: {
                      minAgePref: agePref.state.min,
                      maxAgePref: agePref.state.max
                    }
                  });
                }}
              >
                set ages
              </Button>
            </Drawer>
            <div className="Profile-Header">
              <IconButton
                // color="inherit"
                aria-label="Open drawer"
                onClick={() => setDrawerOpen(!drawerOpen)}
                className={classNames(
                  classes.menuButton
                )}
              >
                <Menu />
              </IconButton>
              <div className="inner">
                <div
                  className="prof-img"
                  style={{ backgroundImage: `url(${currentUser.imageLarge})` }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2>
                    {currentUser.firstName} | {getAge(currentUser.dob)}
                  </h2>
                  <Location user={currentUser} />
                </div>

                <CustomInput
                  labelText="About"
                  id="textarea-input"
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    value: biography.value,
                    onChange: e => biography.set(e.target.value),
                    placeholder: "About"
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <Dates />
              </div>
              <div>
                {/* <FormControl className={classes.selectFormControl}> */}
              </div>

              {/* </div> */}
              {/* <Dates /> */}
            </div>
          </div>
        );
      }}
    </Composed>
  );
};

export default withStyles(style)(Profile);
