import React, { useState, useEffect, Fragment } from "react";
import { withApollo, Mutation } from "react-apollo";
import moment from "moment";
import { EVENT_QUERY } from "../Queries/Event";
import { ADD_EVENT_MUTATION } from "../Mutations/addEvent";
import withStyles from "@material-ui/core/styles/withStyles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "../../styledComponents/CustomButtons/Button";
import Close from "@material-ui/icons/Close";
import styles from "../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import { green } from "@material-ui/core/colors";

const EventModal = ({ modal, showModal, classes, id, client }) => {
  const [event, setEvent] = useState(undefined);
  useEffect(() => {
    if (modal === true) {
      getEvent();
    } else {
      setEvent(undefined);
    }
  }, [modal]);

  const getEvent = async () => {
    let { data } = await client.query({
      query: EVENT_QUERY,
      variables: { id }
    });
    console.log(data.getEvent);
    setEvent(data.getEvent);
  };

  const handleClick = async (e, addEvent) => {
    e.stopPropagation();
    addEvent();
  };

  const modalHeader = {
    backgroundColor: "#81d6e3",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    paddingBottom: "15px",
    color: "#fafafa"
  };

  return (
    <Mutation mutation={ADD_EVENT_MUTATION} variables={{ eventId: id }}>
      {(addEvent, { error, loading, called }) => {
        return (
          <Dialog
            classes={{
              root: classes.modalRoot,
              paper: classes.modal
            }}
            open={modal}
            // TransitionComponent={Transition}
            //keepMounted
            onClose={() => showModal(false)}
            aria-labelledby="notice-modal-slide-title"
            aria-describedby="notice-modal-slide-description"
			style={{height: '700px'}}
          >
            {event ? (
              <Fragment>
                <DialogTitle
                  id="notice-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                  style={modalHeader}
                >
                  {" "}
                  <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={e => {
                      e.stopPropagation();
                      showModal(false);
                    }}
                  >
                    {" "}
                    <Close
                      style={{ color: "#fafafa" }}
                      className={classes.modalClose}
                    />
                  </Button>
                  <h4
                    style={{ fontWeight: 700 }}
                    className={classes.modalTitle}
                  >
                    {event.title}
                  </h4>
                </DialogTitle>
                <DialogContent
                  id="notice-modal-slide-description"
                  className={classes.modalBody}
                >
                  <p>
                    {moment(event.times[0]).format("dddd, MMMM Do, h:mm a")}
                  </p>
                  <img src={event.image_url} />
                  <div
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                  <Button onClick={e => handleClick(e, addEvent)}>
                    Add Event
                  </Button>
                </DialogContent>
              </Fragment>
            ) : (
              <div>...loading</div>
            )}
          </Dialog>
        );
      }}
    </Mutation>
  );
};

export default withApollo(withStyles(styles)(EventModal));
