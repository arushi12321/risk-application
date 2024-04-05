import React from "react";
import { CiHome } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { PiChatsCircle } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import {
  Box,
  ListItem,
  ListItemText,
  List,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
// import Library from './Library';
const Nav = () => {
  // const navItems=["Library","Assessment","Reports","Chats","UserManagement"];
  return (
    <div>
      <Box
        sx={{
          width: "170px",
          height: "900px",
          backgroundColor: "#020854",
          borderRadius: "5px",
          padding: "40px",
        }}
      >
        <List
          component="nav"
          aria-label="main navigation"
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
            gap: "40px",
          }}
        >
          <NavLink to="/home" className="NavLink">
            <ListItem key={"Home"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <CiHome className="icon" />
                <ListItemText
                  primary={"Home"}
                  sx={{ color: "#F2E9E7", fontSize: "44px" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/library" className="NavLink">
            <ListItem key={"library"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <IoMdBook className="icon" />
                <ListItemText primary={"Library"} sx={{ color: "#F2E9E7" }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/assessment" className="NavLink">
            <ListItem key={"Assessment"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <BiEdit className="icon" />
                <ListItemText
                  primary={"Assessment"}
                  sx={{ color: "#F2E9E7" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/reports" className="NavLink">
            <ListItem key={"Reports"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <TbReportAnalytics className="icon" />
                <ListItemText primary={"Reports"} sx={{ color: "#F2E9E7" }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/chats" className="NavLink">
            <ListItem key={"Chats"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <PiChatsCircle className="icon" />
                <ListItemText primary={"Chats"} sx={{ color: "#F2E9E7" }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/user" className="NavLink">
            <ListItem key={"User"} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <CiUser className="icon" />
                <ListItemText primary={"User"} sx={{ color: "#F2E9E7" }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </div>
  );
};

export default Nav;
