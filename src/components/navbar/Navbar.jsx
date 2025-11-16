import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const leftLinks = ["Home", "About", "Contact"];
const rightLinks = ["Galaxies", "Solar System", "Earth"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* TOP NAV */}
      <AppBar
        position="fixed"
        sx={{
          background: "transparent",
          boxShadow: "none",
          px: { xs: 2, md: 8 },
          py: 1.5,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT LINKS – Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {leftLinks.map((txt) => (
              <Button
                key={txt}
                sx={{
                  color: "white",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20.02px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  padding: 0,
                  margin: 0,
                }}
              >
                {txt}
              </Button>
            ))}
          </Box>

          {/* BRAND */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "0px",
              padding: 0,
              margin: 0,
            }}
          >
            METEORA
          </Typography>

          {/* RIGHT LINKS – Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {rightLinks.map((txt) => (
              <Button
                key={txt}
                sx={{
                  color: "white",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20.02px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  padding: 0,
                  margin: 0,
                }}
              >
                {txt}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#0a0a0a",
            color: "white",
            p: 3,
          }}
        >
          {/* Close button */}
          <IconButton sx={{ color: "white" }} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>

          <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
            {[...leftLinks, ...rightLinks].map((txt) => (
              <Button
                key={txt}
                sx={{
                  color: "white",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20.02px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  padding: 0,
                  margin: 0,
                  justifyContent: "flex-start",
                }}
              >
                {txt}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
