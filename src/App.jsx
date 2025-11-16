import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./styles/carousal.css";
import Planet3DScene from "./components/Planet3DScene";
import MainPlanet from "./components/MainPlanet";
import { Container, Box } from "@mui/material";

export default function App() {
  const [bgGradient, setBgGradient] = useState("");

  return (
    <Container
      sx={{
        height: "150vh",
        display: "flex",
        flexDirection: "column",
        background: bgGradient,
        transition: "background 0.8s ease-in-out",
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
    </Container>
  );
}
