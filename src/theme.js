import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Typography overrides
  palette: {
    background: {
      default: "black",
    },
  },

  typography: {
    fontFamily: '"Satoshi", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: "Satoshi",
      fontWeight: 700,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Satoshi",
      fontWeight: 600,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "Satoshi",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "27.17px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center"
    },
    subtitle1: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "Satoshi",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "21.73px",
      lineHeight: "100%",
      letterSpacing: "16%",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#BDC5E2B2",
    },
    button: {
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Satoshi",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Satoshi",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },


  },


  // Spacing
  spacing: 8,

  // Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;