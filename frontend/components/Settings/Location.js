import React, { useState, Fragment } from "react";
import Downshift from "downshift";
import { ApolloConsumer, Mutation } from "react-apollo";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  Paper,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { NearMe, Close, PersonPin, EditLocation } from "@material-ui/icons";
import Danger from "../../styledComponents/Typography/Danger";
//QM
import { CURRENT_USER_QUERY } from "../Queries/User";
import { LOCATION_SUGGESTION_QUERY } from "../Queries/LocationSuggestion";
import { UPDATE_LOCATION_MUTATION } from "../Mutations/updateLocation";
//styled components
import Button from "../../styledComponents/CustomButtons/Button";
import Input from "../../styledComponents/CustomInput/CustomInput";
//styles
import styles from "../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

const Location = ({ user, classes }) => {
  const [modal, showModal] = useState(false);
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const onChange = selectedItem => {
    setInput(selectedItem);
  };

  return (
    <Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg
          style={{ width: 0, height: 0, position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="indexID" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AC9C5" />
            <stop offset="50%" stopColor="#4CB5AE" />
            <stop offset="100%" stopColor="#37C5BC" />
          </linearGradient>
        </svg>
        <Typography
          variant="h5"
          style={{ color: "#fafafa", marginLeft: "6px" }}
        >
          {user.location ? user.location : "Set your default location"}
        </Typography>
        <IconButton
          // justIcon
          simple="true"
          round="true"
          color="primary"
          onClick={() => showModal(true)}
        >
          <EditLocation className={classes.location} />
        </IconButton>
      </div>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={modal}
        // TransitionComponent={Transition}
        //keepMounted
        onClose={() => showModal(false)}
      >
        <DialogTitle
          id="notice-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          {" "}
          <Button
            simple="true"
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={e => {
              e.stopPropagation();
              showModal(false);
            }}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Update Location</h4>
        </DialogTitle>
        <DialogContent>
          <ApolloConsumer>
            {client => (
              <Mutation
                mutation={UPDATE_LOCATION_MUTATION}
                variables={{ city: input.slice(0, -5) }}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                onCompleted={() => showModal(false)}
              >
                {(updateLocation, { error, loading, called }) => {
                  return (
                    <Downshift
                      inputValue={input}
                      onChange={onChange}
                      onInputValueChange={async e => {
                        setInput(e);
                        const { data } = await client.query({
                          query: LOCATION_SUGGESTION_QUERY,
                          variables: { city: e }
                        });

                        setItems(data.locationSearch);
                      }}
                    >
                      {({
                        getInputProps,
                        getItemProps,

                        isOpen,

                        highlightedIndex,
                        selectedItem
                      }) => (
                        <div style={{ width: "100%" }}>
                          <Input
                            inputProps={{
                              placeholder: "Search for a city name...",
                              ...getInputProps()
                            }}
                            formControlProps={{
                              style: {
                                paddingTop: "12px",
                                width: "90%"
                              }
                            }}
                          />
                          <Button
                            // justIcon
                            round='true'
                            disabled={!selectedItem}
                            onClick={() => {
                              updateLocation();
                            }}
                          >
                            <PersonPin />
                          </Button>

                          {isOpen ? (
                            <Paper
                              style={{
                                position: "absolute",
                                zIndex: 2,

                                width: "90%"
                              }}
                            >
                              {items.map((result, index) => {
                                return (
                                  <MenuItem
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
                  );
                }}
              </Mutation>
            )}
          </ApolloConsumer>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default withStyles(styles)(Location);
