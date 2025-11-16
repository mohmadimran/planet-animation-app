import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function PlanetInfo({ info }) {
  return (
    <Box sx={{width: "90%",
          marginLeft: "auto",
          marginRight: "auto",textAlign:"center"}}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "66.67px",
          lineHeight: "100%",
          letterSpacing: "32%",
          background:
            "linear-gradient(101.23deg, #EDEDED 24.07%, #B6B6B6 96.8%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          display: "inline-block",
          width: "100%",
        }}
      >
        {info.name}
      </Typography>

     
      <Grid
  container
  spacing={3}
  sx={{
    mt: 6,
    textAlign: "center",
    width: "100%",

    display: {
      xs: "block",     
      sm: "flex",      
      md: "flex",
    },

    flexDirection: {
      xs: "column",    
      sm: "row",       
      md: "row",
    },

    alignItems: {
      sm: "center",
      md: "center",
    },

    justifyContent: {
      sm: "center",
      md: "center",
    },
  }}
>
  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2">GALAXY</Typography>
    <Typography variant="h6">{info.galaxy}</Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2">DIAMETER</Typography>
    <Typography variant="h6">{info.diameter}</Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2">DAY LENGTH</Typography>
    <Typography variant="h6">{info.day}</Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2">AVG TEMPERATURE</Typography>
    <Typography variant="h6">{info.temperature}</Typography>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2">CLIMATE</Typography>
    <Typography variant="h6">{info.climate}</Typography>
  </Grid>
</Grid>

    </Box>
  );
}
