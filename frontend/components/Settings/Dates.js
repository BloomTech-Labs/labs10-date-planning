import React from "react";
import Button from "../../styledComponents/CustomButtons/Button";
import User from "../Queries/User";
import Date from "./Date";
import Link from "next/link";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import GridContainer from "../../styledComponents/Grid/GridContainer";
import SnackbarContent from "../../styledComponents/Snackbar/SnackbarContent.jsx";

import '../../styles/Settings/Snackbar.scss'

const Dates = ({ classes }) => {
  return (
    <User>
      {({ data: { currentUser } }) => {
        console.log(currentUser.events, currentUser.permissions);
        return (
          <div style={{ marginLeft: "34px" }} className={classes.container}>
            <GridContainer>
              {currentUser.events.length ? (
                currentUser.events.map(date => (
                  <Date key={date.id} date={date} />
                ))
              ) : (
                <div>
                  <p>You don't have any dates yet!</p>
                </div>
              )}
            </GridContainer>
            {currentUser.permissions[0] === "FREE" && (
              <SnackbarContent
                message={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      {" "}
                      <b>You have <span>{5 - currentUser.events.length} </span>{currentUser.events.length === 1 ? "date left." : "dates left."}
                      </b>
                    </div>
                    <Link href="/billing">
                      <Button className="Snackbar__button">Go Premium?</Button>
                    </Link>
                  </div>
                }
                close
                color="info"
                icon="info_outline"
              />
            )}
          </div>
        );
      }}
    </User>
  );
};

export default withStyles(styles)(Dates);
