import { Box, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ data }) => {
  const {
    menuItems,
    user,
    adminRole,
    isLogged,
    handleLogout,
    handleDrawerToggle,
  } = data;

  const navLinkHeight = "5rem";
  const navLinkFontSize = "1.5rem"

  return (
    <Box sx={{ backgroundColor: "primary.main", height: "100vh" }}>
      <Toolbar />

      {/* logo */}
      <Link to="/login">
        <img alt="BASALTO STUDIO" src="src\images\logo.webp" />
      </Link>

      {/* nav list */}
      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem
                divider="true"
                disablePadding
                sx={{ height: navLinkHeight }}
              >
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <Icon
                      fontSize="large"
                      sx={{ color: "primary.contrastText" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{
                      color: "primary.contrastText",
                      ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === adminRole && (
          <Link to={"/dashboard"}>
            <ListItem
              divider="true"
              disablePadding
              sx={{ height: navLinkHeight }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon
                    fontSize="large"
                    sx={{ color: "primary.contrastText" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{
                    color: "primary.contrastText",
                    ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {isLogged && (
          <ListItem
            divider="true"
            disablePadding
            sx={{ height: navLinkHeight }}
          >
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon
                  fontSize="large"
                  sx={{ color: "primary.contrastText" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Cerrar sesion"}
                sx={{
                  color: "primary.contrastText",
                  ".MuiListItemText-primary": { fontSize: navLinkFontSize },
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default NavbarDrawer;
