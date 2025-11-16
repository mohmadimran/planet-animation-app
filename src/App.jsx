import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./styles/carousal.css";
import Planet3DScene from "./components/Planet3DScene";
import MainPlanet from "./components/MainPlanet";
import { Box } from "@mui/material";

export default function App() {
  const [bgGradient, setBgGradient] = useState("");

  return (
    <Box
      sx={{
        minHeight: { xs: "100dvh", sm: "100vh", md: "150vh" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: bgGradient,
        transition: "background 0.8s ease-in-out",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          height: "62vh",
          marginTop: "100px",
          position: "relative",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <MainPlanet onPlanetChange={setBgGradient} />
        <Planet3DScene />
      </Box>
    </Box>
  );
}
