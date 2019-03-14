import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto
} from "../../../material-kit-pro-react";

import customCheckboxRadioSwitch from "../../../material-kit-pro-react/customCheckboxRadioSwitchStyle";

import tooltipsStyle from "../../../material-kit-pro-react/tooltipsStyle";

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginBottom: "0px !important"
  },
  cardDescription: {
    color: "#999",
    textAlign: "center"
  },
  container: {
    ...container
  },
  description: {
    color: "#999"
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: "#9a9a9a"
  },
  pullRight: {
    float: "right"
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none"
    },
    "& a": {
      display: "block"
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important"
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block"
    }
  },
  priceSlider: {
    fontWeight: "500"
  },
  refineButton: {
    margin: "-3px 0"
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  textLeft: {
    textAlign: "left"
  },
  //Additions

  background: {
    paddingTop: "40px",
    height: "100%",
    minHeight: "100vh",
    backgroundImage: `url("https://www.transparenttextures.com/patterns/shattered-dark.png")`,
    backgroundColor: "#000"
  },
  drawer: {
    padding: "0 20px",
    width: "250p"
  },
  drawerContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2e2e2e",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/dark-fish-skin.png")'
  },
  metaDrawer: {
    backgroundColor: "#2e2e2e",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/dark-fish-skin.png")',
    "& div": {
      backgroundColor: "#2e2e2e",
      backgroundImage:
		'url("https://www.transparenttextures.com/patterns/dark-fish-skin.png")',
		borderBottom: 'none !important',
    },
    '& svg': {
    	color: '#fafafa',
    	borderColor: '#fafafa'
    },
    "& ::after": {
      borderBottomColor: "#b2ddf7"
    },
    "& label": {
      color: "#fafafa !important"
    },
    "& p": {
      color: "#fafafa"
    },
    "& h4": {
      color: "#fafafa"
	},
	'& button': {
		backgroundColor: '#ff101f'
	}
  },
  transparentButton: {
	  backgroundColor: 'transparent !important'
  }

};

export default styles;
