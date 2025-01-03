"use client";
import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", path: "/" },
  { name: "Roster", path: "/roster" },
  { name: "Coaches", path: "/coaches" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "flex-start" }}>
          <Box className="header-logo-desktop">
            <img src="/logo.png" alt="Pirates Logo" height={50} width={50} />
          </Box>

          <Box className="mobile-menu-container">
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="mobile-menu"
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.path}
                  passHref
                  className="menu-link"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography>{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box className="desktop-menu">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                passHref
                className="menu-link"
              >
                <Button color="inherit">{page.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
