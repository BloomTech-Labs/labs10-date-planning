import {
  container,
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto
} from "../../../material-kit-pro-react";

const drawerWidth = 240;

const blogsSection = {
  container,
  title,
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    padding: "50px 0"
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0"
    }
  },
  description1: {
    ...description,
    lineHeight: "1.313rem"
  },
  author: {
    "& a": {
      color: "#3C4858",
      textDecoration: "none"
    }
  },
  card: {
    marginBottom: "80px"
  },
  card4: {
    marginBottom: "60px",
    textAlign: "center"
  },

  
};

export default blogsSection;
