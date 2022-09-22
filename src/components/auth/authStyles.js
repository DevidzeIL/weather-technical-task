import { makeStyles } from "@material-ui/core/styles";

export const authStyles = makeStyles(() => ({
  root_form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },

  btn: {
    backgroundColor: "coral",
    color: "#FFF",
    border: "1px solid #000",
    cursor: "pointer",
  },

  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },

  circle: {
    position: "inherit",
    display: "flex",
    justifyContent: "center",
  },
}));
