import {
  container,
  coloredShadow,
  title,
  cardTitle,
  description,
  mlAuto,
  infoColor,
  roseColor
} from "../../../material-kit-pro-react";

import imageStyles from "../../../material-kit-pro-react/imagesStyles";

import rotatingCards from "../../../material-kit-pro-react/rotatingCards";
import { isAbsolute } from "path";

const styles = {
  container,
  coloredShadow,
  title,
  mlAuto,
  cardTitle,
  ...imageStyles,
  ...rotatingCards,
  sectionGray: {
    background: "#E5E5E5"
  },
  sectionWhite: {
    background: "#FFFFFF"
  },
  cardTitleAbsolute: {
    ...cardTitle,
    position: "absolute !important",
    bottom: "15px !important",
    left: "15px !important",
    color: "#fff !important",
    fontSize: "1.125rem !important",
    textShadow: "0 2px 5px rgba(33, 33, 33, 0.5) !important"
  },
  cardTitleWhite: {
    "&, & a": {
      ...title,
      marginTop: ".625rem",
      marginBottom: "0",
      minHeight: "auto",
      color: "#fff !important"
    }
  },
  cardCategory: {
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px"
    }
  },
  cardCategorySocial: {
    marginTop: "10px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategorySocialWhite: {
    marginTop: "10px",
    color: "rgba(255, 255, 255, 0.8)",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategoryWhite: {
    marginTop: "10px",
    color: "rgba(255, 255, 255, 0.7)"
  },
  cardCategoryFullWhite: {
    marginTop: "10px",
    color: "#FFFFFF"
  },
  cardDescription: {
    ...description
  },
  cardDescriptionWhite: {
    color: "rgba(255, 255, 255, 0.8)"
  },
  author: {
    display: "inline-flex",
    "& a": {
      color: "#3C4858"
    }
  },
  authorWhite: {
    display: "inline-flex",
    "& a": {
      color: "rgba(255, 255, 255, 0.8)"
    }
  },
  avatar: {
    width: "30px",
    height: "30px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "5px"
  },
  statsWhite: {
    color: "rgba(255, 255, 255, 0.8)",
    display: "inline-flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  stats: {
    color: "#999999",
    display: "flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  iconWrapper: {
    color: "rgba(255, 255, 255, 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "55px",
      lineHeight: "55px"
    },
    "& svg": {
      width: "55px",
      height: "55px"
    }
  },
  iconWrapperColor: {
    borderColor: "rgba(255, 255, 255, 0.25)"
  },
  iconWhite: {
    color: "#FFFFFF"
  },
  iconRose: {
    color: roseColor
  },
  iconInfo: {
    color: infoColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  textCenter: {
    textAlign: "center"
  },
  marginBottom20: {
    marginBottom: "20px"
  },
  //Additions
  eventBorder: {
    border: "4px solid #4cb5ae",
    borderRadius: "6px",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    backgroundColor: "#fafafa"
  },
  eventBorderBack: {
    border: "4px solid #b2ddf7",
    borderRadius: "6px",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    backgroundColor: "#fafafa"
  },
  gradientBorder: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "20px auto",
    position: "relative",
    padding: "10px",
    boxSizing: "border-box",
    color: "#000",
    background: "#fafafa",
    backgroundClip: "padding-box",
    border: "3px solid transparent",
    borderRadius: "6px",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "-1",
      margin: "-3px",
      borderRadius: "inherit",
      backgroundImage:
        "linear-gradient(to right, #81d6e3, #98ceea, #b1c5e5, #c4bed7, #cabac8)"
    }
  },
  cardFooter: {
    cursor: "pointer",
    display: "flex",

    "& img": {
      width: "30px",
      height: "30px",
      borderRadius: "6px",
      border: "1px solid #cabac8"
    }
  },
  cardBody: {
    padding: "15px",
    borderRadius: "6px",
    width: "100%",
    maxWidth: "100%",
    display: "block"
  },
  cardBodyReverse: {
    padding: "30px",
    borderRadius: "6px",
    width: "100%",
    maxWidth: "100%",
    display: "block"
  },

  cardBodyRotate: {
    overflow: "auto",
    "& .genderPreference": {
      color: "#ff101f"
    },
    "& .agePreference": {
      color: "#00ddff"
    }
  },
  userCard: {
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      backgroundImage:
        "linear-gradient(to right, #81d6e3, #98ceea, #b1c5e5, #c4bed7, #cabac8)",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      "& .gradientBorder": {
        background: "transparent"
      },
      "& p": {
        color: "#fafafa"
      }
    }
  },

  favorite: {
    position: "absolute",
    bottom: "-8px",
    fontSize: "40px",
    left: 0,
    zIndex: 7,
    fill: "url(#favoriteID) #ff101f"
  },

  chat: {
    position: "absolute",
    bottom: "-8px",
    fontSize: "40px",
    right: 0,
    zIndex: 7,
    fill: "url(#chatID) #81d6e3"
  },
  arrow: {
    height: "62px",
    boxShadow: "none !important",
    width: "47px !important",
    height: "60px !important"
  },

  up4Logo: {
    height: "20px !important",
    width: "30px !important",
    border: "none !important"
  },

  cardBodyRotateHeader: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "& button": {
      position: "absolute",
      top: 0,
      left: 0,

      "& svg": {
        position: "relative",
        top: "-8px"
      }
    }
  },
  userCardBorder: {
    paddign: "5px",
    marginBottom: "5px",
    flexDirection: "column"
  },

  up4: {
    display: 'flex',
    justifyContent: 'center',
    height: "55px",
    width: "64px",
    backgroundColor: "#cabac8",
    borderTopRightRadius: '6px',
    borderBottomLeftRadius: '6px',
    // backgroundImage: 'linear-gradient(to right, #81d6e3, #74d2e1, #65cedf, #55cade, #41c6dc, #2dc1e0, #17bbe4, #00b5e8, #00abf1, #00a0f9, #0093fe, #0084ff)',
    position: "absolute",
    top: 0,
    right: 0
  },
  flip: {
    backgroundColor: '#4cb5ae',
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '55px',
    width: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '6px',
    cursor: 'pointer'
  }
};

export default styles;
