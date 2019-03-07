import React, { useState } from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
import moment from "moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import Downshift from "downshift";
import NProgress from "nprogress";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  InputLabel,
  Paper,
  MenuItem
} from "@material-ui/core";
//QM
import User from "../Queries/User";
import { LOCATION_SUGGESTION_QUERY } from "../Queries/LocationSuggestion";
import { UPDATE_USER_MUTATION } from "../Mutations/updateUser";
//components
import ImageUpload from "../Settings/ImageUpload";
//styled components
import Input from "../../styledComponents/CustomInput/CustomInput";
import Button from "../../styledComponents/CustomButtons/Button";
//styles
import Styles from "../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

const NewUser = ({ classes }) => {
  const [showing, setShowing] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [genderPref, setGenderPref] = useState(["FEMALE"]);
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);
  const [gender, setGender] = useState("MALE");

  const handleDateChange = date => {
    setSelectedDate(date.format());
  };

  const handleLocationChange = selectedItem => {
    setLocation(selectedItem.slice(0, -5));
  };

  return (
    <User>
      {({ data: { currentUser } }) => (
        <Mutation
          mutation={UPDATE_USER_MUTATION}
          variables={{
            gender: gender,
            dob: selectedDate,
            location: location,
            genderPrefs: genderPref
          }}
          onCompleted={() => {
            NProgress.done();
            setUpdated(true);
          }}
          onError={() => NProgress.done()}
        >
          {(updateUser, { client }) => {
            return (
              <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                classes={{
                  root: classes.modalRoot,
                  paper: classes.modal
                }}
                fullWidth
                open={showing}
                //TransitionComponent={Transition}
                //keepMounted
                onClose={() => setShowing(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  {/* <Button
							simple
							className={classes.modalCloseButton}
							key='close'
							aria-label='Close'
							onClick={() => setShowing(false)}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button> */}
                  <h4
                    style={{ textAlign: "center" }}
                    className={classes.modalTitle}
                  >
                    Hello {currentUser.firstName}! Tell us about yourself...
                  </h4>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={`${classes.modalBody} ${
                      classes.newUserContainer
                    }`}
                  >
				  <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>

                    <ImageUpload />{" "}
                    <FormControl style={{ marginBottom: '10px' }}>
                      <div
                        style={{
                          display: "flex",
                          width: " 100%",
                          alignItems: "flex-end"
                        }}
                      >
                        <p style={{ margin: "0 5px 4px" }}>I am a </p>
                        {/* <InputLabel htmlFor='simple-select'>
													Select your gender
												</InputLabel> */}
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={gender}
                          onChange={e => setGender(e.target.value)}
                          inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          {" "}
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="MALE"
                          >
                            Man
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="FEMALE"
                          >
                            Woman
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="OTHER"
                          >
                            Other
                          </MenuItem>
                        </Select>
                        <p style={{ margin: "0 10px 4px" }}> interested in </p>
                        <Select
                          multiple
                          value={genderPref}
                          onChange={e => setGenderPref(e.target.value)}
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
                      </div>
                    </FormControl>
                      <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                          label="Date of birth"
                          value={selectedDate}
                          disableFuture
                          minDate={moment().subtract(100, "years")}
                          maxDate={moment().subtract(18, "years")}
                          clearable
                          openTo="year"
                          format="MM/DD/YYYY"
                          views={["year", "month", "day"]}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>

                      <Downshift
                        inputValue={location}
                        onChange={handleLocationChange}
                        onInputValueChange={async e => {
                          setLocation(e);
                          const { data } = await client.query({
                            query: LOCATION_SUGGESTION_QUERY,
                            variables: { city: e }
                          });

                          setItems(data.locationSearch);
                        }}
                      >
                        {({ getInputProps, getItemProps, isOpen }) => (
                          <div className={classes.downshiftContainer}>
                            <Input
                              inputProps={{
                                placeholder: "Search for a city name...",
                                ...getInputProps()
                              }}
                              formControlProps={{
                                style: {
                                  paddingTop: "12px",
                                  width: "80%"
                                }
                              }}
                            />

                            {isOpen ? (
                              <Paper className={classes.downshiftPaper}>
                                {items.map((result, index) => {
                                  return (
                                    <MenuItem
                                      key={index}
                                      {...getItemProps({
                                        item: result.city
                                      })}
                                    >
                                      {result.city}
                                    </MenuItem>
                                  );
                                })}
                              </Paper>
                            ) : null}
                          </div>
                        )}
                      </Downshift>
				  </div>
                  </DialogContent>
                </DialogTitle>
                <DialogActions>
                  {!updated ? (
                    <Button
                      color="primary"
                      disabled={!selectedDate || !location || !gender}
                      onClick={() => {
                        NProgress.start();
                        updateUser();
                      }}
                    >
                      Save
                    </Button>
                  ) : (
                    <div>
                      <Link href="/home">
                        <Button color="primary">Start Browsing Dates</Button>
                      </Link>{" "}
                      Or{" "}
                      <Link href="/profile">
                        <Button color="primary">
                          Continue customizing your profile
                        </Button>
                      </Link>
                    </div>
                  )}
                </DialogActions>
              </Dialog>
            );
          }}
        </Mutation>
      )}
    </User>
  );
};

export default withStyles(Styles)(NewUser);
