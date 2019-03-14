import React, { useState } from "react";
import Router, { Link } from "next/router";
import NProgress from "nprogress";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { useQuery } from "react-apollo-hooks";
import { ALL_GENRE_QUERY } from "../Queries/Genres";
//import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from "../../styledComponents/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper, Chip } from "@material-ui/core";
import GridItem from "../../styledComponents/Grid/GridItem";
import GridContainer from "../../styledComponents/Grid/GridContainer";
import Accordion from "../../styledComponents/Accordion/Accordion.jsx";
import { MusicNote, LocalActivity, FitnessCenter } from "@material-ui/icons";
import style from "../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx";

const UPDATE_INTERESTS_MUTATION = gql`
  mutation UPDATE_INTERESTS_MUTATION($data: [GenreWhereUniqueInput!]) {
    updateUser(data: { interests: { connect: $data } }) {
      id
      interests {
        id
        name
      }
    }
  }
`;

const Interests = ({ classes }) => {
  const { data } = useQuery(ALL_GENRE_QUERY);
  let [interestedList, setInterestedList] = useState([]);
  // const handleSelect = (value, updateUser) => {
  // 	NProgress.start();
  // 	updateUser({ variables: { gender: value } });
  // };

  const musicChips = (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.genres
        ? data.genres
            .filter(genre => genre.category === "MUSIC")
            .map(genre => {
              let interested = interestedList.find(i => i.id === genre.id);
              return (
                <Chip
                  icon={<MusicNote />}
                  label={genre.name}
                  key={genre.id}
                  clickable
                  className={interested ? classes.interestedChip : classes.chip}
                  onClick={() =>
                    interested
                      ? setInterestedList(
                          interestedList.filter(x => x.id !== genre.id)
                        )
                      : setInterestedList([...interestedList, { id: genre.id }])
                  }
                  color="primary"
                  variant={interested ? "default" : "outlined"}
                />
              );
            })
        : []}
    </div>
  );

  const sportChips = (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.genres
        ? data.genres
            .filter(genre => genre.category === "SPORTS")
            .map(genre => {
              let interested = interestedList.find(i => i.id === genre.id);
              return (
                <Chip
                  key={genre.id}
                  icon={<FitnessCenter />}
                  label={genre.name}
                  clickable
                  className={interested ? classes.interestedChip : classes.chip}
                  color="primary"
                  onClick={() =>
                    interested
                      ? setInterestedList(
                          interestedList.filter(x => x.id !== genre.id)
                        )
                      : setInterestedList([...interestedList, { id: genre.id }])
                  }
                  variant={interested ? "default" : "outlined"}
                />
              );
            })
        : []}
    </div>
  );

  const performingChips = (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.genres
        ? data.genres
            .filter(genre => genre.category === "ARTS_THEATRE")
            .map(genre => {
              let interested = interestedList.find(i => i.id === genre.id);
              return (
                <Chip
                  key={genre.id}
                  icon={<LocalActivity />}
                  label={genre.name}
                  clickable
                  className={interested ? classes.interestedChip : classes.chip}
                  color="primary"
                  onClick={() =>
                    interested
                      ? setInterestedList(
                          interestedList.filter(x => x.id !== genre.id)
                        )
                      : setInterestedList([...interestedList, { id: genre.id }])
                  }
                  variant={interested ? "default" : "outlined"}
                />
              );
            })
        : []}
    </div>
  );

  return (
    <Mutation
      mutation={UPDATE_INTERESTS_MUTATION}
      variables={{ data: interestedList }}
      onCompleted={e => {
        NProgress.done();
        console.log(e);
        Router.push(
          `/welcome?slug=9`,
          `/welcome/goPro`,
          { shallow: true },
          { scroll: false }
        );
      }}
      onError={e => console.log(e)}
    >
      {updateUser => (
        <div
          style={{
            height: "100%",
            width: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              // alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(0,0,0,.6)",

              padding: "90px",

              //   border: '2px solid #ff101f',
              borderRadius: "6px"
            }}
          >
            <h2>I am interested in...</h2>
            <p>Please select at least 3.</p>
            <GridContainer>
              <GridItem md={4} lg={4}>
                <h4 style={{ textAlign: "center" }} className={classes.title}>
                  Music
                </h4>
                {musicChips}
              </GridItem>
              <GridItem md={4} lg={4}>
                <h4 style={{ textAlign: "center" }} className={classes.title}>
                  Sports
                </h4>
                {sportChips}
              </GridItem>
              <GridItem md={4} lg={4}>
                <h4 style={{ textAlign: "center" }} className={classes.title}>
                  Performing Arts
                </h4>
                {performingChips}
              </GridItem>
            </GridContainer>
            <Button
              disabled={interestedList.length < 3}
              color="danger"
              style={{ zIndex: "2", alignSelf: "flex-end" }}
              onClick={() => {
                NProgress.start();
                updateUser();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Mutation>
  );
};

export default withStyles(style)(Interests);
