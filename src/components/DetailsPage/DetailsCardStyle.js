import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    display: "inline-block",
    padding: "1rem",
    border: "1px solid #000",
  },
  ulStyle: {
    margin: 0,
    paddingLeft: "2.5rem",
    "& li": {
      margin: "-1rem",
      padding: 0,
      //   lineHeight: "0.1rem",
    },
  },
}));
