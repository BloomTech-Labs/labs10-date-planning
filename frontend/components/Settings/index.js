import React from "react";
import Sidebar from "./Sidebar";
import GridContainer from "../../styledComponents/Grid/GridContainer";
import GridItem from "../../styledComponents/Grid/GridItem";
import Dates from "./Dates";
import withStyles from "@material-ui/core/styles/withStyles";
import blogsStyle from "../../static/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import Drawer from "@material-ui/core/Drawer";

import "../../styles/Settings/index.scss";

const Settings = ({ classes }) => {
  return (
    <div>
      <Drawer anchor="left" variant="persistent" open={false} className="drawer">
        <Sidebar />
      </Drawer>

      <Dates />
    </div>
  );
};

export default withStyles(blogsStyle)(Settings);
