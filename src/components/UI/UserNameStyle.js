import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  caption: {
    "&::before": {
      content: '"@"',
    },
    fontStyle: "italic",
    margin: "-0.5rem 0 0.5rem 0",
    color: "#8d8d8d",
  },
}));
