import React, { useState } from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
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
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);
  const [gender, setGender] = useState("");

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
          variables={{ gender: gender, dob: selectedDate, location: location }}
          onCompleted={() => {
            NProgress.done();
            setUpdated(true);
          }}
          onError={() => NProgress.done()}
        >
          {(updateUser, { client }) => {
            return (
              <Dialog
                classes={{
                  root: classes.modalRoot,
                  paper: classes.modal
                }}
                open={showing}
                onClose={() => setShowing(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <h4 className={classes.modalTitle}>
                    Welcome {currentUser.firstName}!
                  </h4>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <ImageUpload />
                    <FormControl fullWidth>
                      <InputLabel htmlFor="simple-select">
                        Select your gender
                      </InputLabel>
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
                          Male
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="FEMALE"
                        >
                          Female
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
                    </FormControl>
                    When were you born?
                    <div>
                      <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                          label="Date of birth"
                          value={selectedDate}
                          disableFuture
                          clearable
                          openTo="year"
                          format="MM/DD/YYYY"
                          views={["year", "month", "day"]}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                    Where are you located?
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
