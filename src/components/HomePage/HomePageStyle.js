import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  cardContainer: {
    width: "80%",
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridGap: "2rem",

    //600px
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr",
    },
    // 960px
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    // 1280px
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    // 1920px
    [theme.breakpoints.up("xl")]: {},
  },
}));
