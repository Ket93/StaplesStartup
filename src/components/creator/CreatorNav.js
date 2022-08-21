import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./CreatorNav.css";
import { Stack, Divider } from "@mui/material";

export const CreatorNav = (props) => {
  const navItems = props.navItems;
  // const navItems = [
  //   {"text": "hello0", "link":"https://google.com"},
  //   {"text": "hello1", "link":"https://google.com"},
  //   {"text": "hello2", "link":"https://google.com"},
  //   {"text": "hello3", "link":"https://google.com"},
  //   {"text": "hello3", "link":"https://google.com"}, 
  // ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bigNavbar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Staples Startup</Typography>
            
            {navItems && navItems.map((item, i) => {
              return (
                <Button href={item.link} color="inherit">{item.text}</Button>
              )
            })}
          </Stack>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
