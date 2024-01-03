import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(12, 20),
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#121212",
      color: "#fff"
    },
  
  }));
  export { useStyles };
  