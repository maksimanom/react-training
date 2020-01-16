import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles(theme => ({
  root: {
    fontFamily: "Lato"
  },
  footer: {
    backgroundColor: "blue",
    color: "#fff",

    "& .footer__item": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    "& .footer__title":{
      fontSize: '28px',
      
    },
    "& .footer__text":{
      fontSize: '16px',
    },
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexBasis: "auto",
    justifyContent: "center",
    "& div": {
      backgroundImage: "url('logo.svg')",
      backgroundRepeat: "no-repeat",
      width: 80,
      height: 80
    },
    "& p": {
      height: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "center",
      letterSpacing: "0.2em",
      marginLeft: 10,
      fontFamily: "Lato",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 20,
      "& span": {
        fontWeight: "normal"
      }
    }
  }
}));

export default styles;
