import { makeStyles } from "@material-ui/core/styles";

export const weatherStyles = makeStyles(() => ({
  block__search: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },

  input__search: {
    width: "100%",
  },

  btn__search: {
    backgroundColor: "coral",
    padding: "10px 20px",
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
