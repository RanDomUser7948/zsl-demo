import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  CssBaseline,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import styles from "./Homepage.module.css";

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((val) => !val);
  };

  return (
    <div className={styles.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar style={{ backgroundColor: "green" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            My Application
          </Typography>
          <Avatar alt="User Name" src="https://via.placeholder.com/40" />
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        className={styles.drawer}
        classes={{ paper: "drawerPaper" }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Typography paragraph>This is the content of the homepage.</Typography>
      </main>
    </div>
  );
};

export default HomePage;
