import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto
} from "../../../material-kit-pro-react";

import modalStyle from "../../../material-kit-pro-react/modalStyle";
import tooltipsStyle from "../../../material-kit-pro-react/tooltipsStyle";
import popoverStyles from "../../../material-kit-pro-react/popoverStyles";
import customCheckboxRadioSwitch from "../../../material-kit-pro-react/customCheckboxRadioSwitchStyle";

const javascriptStyles = theme => {
  return {
    container,
    description,
    cardTitle,
    mlAuto,
    mrAuto,
    ...tooltipsStyle,
    ...popoverStyles,
    ...modalStyle(theme),
    ...customCheckboxRadioSwitch,
    section: {
      padding: "70px 0 0"
    },
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    icon: {
      width: "24px",
      height: "24px",
      color: "#495057"
    },
    label: {
      color: "rgba(0, 0, 0, 0.26)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      transition: "0.3s ease all",
      lineHeight: "1.428571429",
      fontWeight: "400",
      paddingLeft: "0"
    },
    textCenter: {
      textAlign: "center"
    },
    cardTitleWhite: {
      ...cardTitle,
      color: "#FFFFFF !important"
    },
    socialLine: {
      marginTop: "1rem",
      textAlign: "center",
      padding: "0"
    },
    socialLineButton: {
      "&, &:hover": { color: "#fff" },
      marginLeft: "5px",
      marginRight: "5px"
    },
    cardLoginHeader: {
      marginTop: "-40px",
      padding: "20px 0",
      width: "100%",
      marginBottom: "15px"
    },
    cardLoginBody: {
      paddingTop: "0",
      paddingBottom: "0"
    },
    justifyContentCenter: {
      WebkitBoxPack: "center !important",
      MsFlexPack: "center !important",
      justifyContent: "center !important"
    },
    infoArea: {
      padding: "0px 0px 20px !important"
    },
    space50: {
      height: "50px",
      display: "block"
    },
    //Additions
    downshiftContainer: {
      width: "100%"
    },
    downshiftPaper: {
      position: "absolute",
      zIndex: 2,
      width: "90%"
    },

    newUserContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    userModalHeader: {
      backgroundImage:
        "linear-gradient(to right, #81d6e3, #98ceea, #b1c5e5, #c4bed7, #cabac8)",
      paddingBottom: "24px"
    },
    liked: {
      "&:hover": {
        "& svg": {
          fill: "#ff101f"
        }
      }
    },
    blocked: {
      "&:hover": {
        "& svg": {
          fill: "#fafafa"
        }
      }
    },
    chatBorder: {
      border: "4px solid #cabac8",
      borderRadius: "6px",
      width: "100%",
      padding: "10px",
      backgroundColor: "#1b1b1b59",
      backgroundImage:
        'url("https://www.transparenttextures.com/patterns/ag-square.png")',
      "& p": {
        color: "#cacaca"
      },
      "& button": {
        backgroundColor: "none !important",
        backgroundImage:
          "linear-gradient(to right, #81d6e3, #71d0df, #5ecadb, #49c3d8, #2dbdd4)"
      },

      "& ::after": {
        borderBottomColor: "#81d6e3"
      }
      // maxWidth: '450px',
    },

    chat: {
      height: "600px",
      overflowY: "scroll",
      borderBottom: "1px solid #c8c8c8"
    },

    messageList: {
      height: "80%",
      overflow: "scroll",
      padding: "20px 10px"
    },
    gradientBox: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      margin: "20px auto",

      position: "relative",
      padding: "10px",
      boxSizing: "border-box",

      color: "#000",
      background: "#fff",
      backgroundClip: "padding-box",
      border: "solid 3px transparent",
      borderRadius: "6px",

      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        margin: "-3px",
        borderRadius: "inherit",
        backgroundImage:
          "linear-gradient(to right, #81d6e3, #98ceea, #b1c5e5, #c4bed7, #cabac8)"
      }
    },
    favorite: {
      fill: "url(#favoriteID) #ff101f"
    },
    dots:{
      '& svg': {
        color: '#fafafa'
      }
    }
  };
};

export default javascriptStyles;
