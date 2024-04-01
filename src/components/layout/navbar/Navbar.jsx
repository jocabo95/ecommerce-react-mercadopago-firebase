// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";

// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import { useContext, useState } from "react";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { menuItems } from "../../../router/navigation";
// import { logout } from "../../../firebaseConfig";
// import { AuthContext } from "../../context/AuthContext";
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { CartContext } from "../../context/CartContext";


// const drawerWidth = 200;

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate()

//   const {user} = useContext(AuthContext)
//   const {clearCart} = useContext(CartContext)
//   const adminRole = import.meta.env.VITE_ADMINROLE

//   const {handleLogoutAuth, isLogged}= useContext(AuthContext)


//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLogout = () =>{
//     logout()
//     handleLogoutAuth()
//     clearCart()
//     navigate("/login")
//   }

//    const drawer = (
//     <div>
//       <Toolbar />

//       <List>
//         {menuItems.map(({ id, path, title, Icon }) => {
//           return (
//             <Link key={id} to={path}>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <Icon sx={{ color: "whitesmoke" }} />
//                   </ListItemIcon>
//                   <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           );
//         })}

//         {
//           user.rol === adminRole && 
//           <Link to={"/dashboard"}>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <DashboardIcon sx={{ color: "whitesmoke" }} />
//               </ListItemIcon>
//               <ListItemText primary={"Dashboard"} sx={{ color: "whitesmoke" }} />
//             </ListItemButton>
//           </ListItem>
//         </Link>
//         }
        
//         {
//           isLogged && 
//           <ListItem disablePadding>
//             <ListItemButton onClick={handleLogout}>
//               <ListItemIcon>
//                 <LogoutIcon sx={{ color: "whitesmoke" }} />
//               </ListItemIcon>
//               <ListItemText
//                 primary={"Cerrar sesion"}
//                 sx={{ color: "whitesmoke" }}
//               />
//             </ListItemButton>
//           </ListItem>
//         }

//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: "100%",
//         }}
//       >
//         <Toolbar
//           sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
//         >
//           <Link to="/" style={{ color: "whitesmoke" }}>
//             <img alt="BASALTO STUDIO" src="src\images\logo.webp" />
//           </Link>
//           <IconButton
//             color="secondary.primary"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon color="secondary.primary" />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav" aria-label="mailbox folders">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           anchor={"right"}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               backgroundColor: "#1976d2",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 4,
//           width: "100%",
//           minHeight: "100vh",
//           px: 2,
//         }}
//       >
//         <Toolbar />

//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { menuItems } from "../../../router/navigation";
import { logout } from "../../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "@mui/material/styles";

//- pending: set color of drawer icons using theme, can i do it? there is color prop for drawer

const drawerWidth = 200;
const navItems =["Home", "About", "Contact"] //! items de navegacion

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme()

  const { user } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const adminRole = import.meta.env.VITE_ADMINROLE;

  const { handleLogoutAuth, isLogged } = useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    handleLogoutAuth();
    clearCart();
    navigate("/login");
  };

  const drawer = (
    <Box sx={{backgroundColor: 'primary.main', height: "100%"}}>
      <Toolbar />

      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: "primary.contrastText" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{ color: "primary.contrastText" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === adminRole && (
          <Link to={"/dashboard"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "primary.contrastText" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ color: "primary.contrastText" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {isLogged && (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "primary.contrastText" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Cerrar sesion"}
                sx={{ color: "primary.contrastText" }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "background.main",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/">
            <img alt="BASALTO STUDIO" src="src\images\logo.webp" />
          </Link>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //! set background color of drawer. cant be done by theme cause drawer hasnt color prop
            },
            backgroundColor: "background.main",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
