import { Badge } from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const NavbarMobile = ({ data }) => {
  const {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Link,
    IconButton,
    ShoppingCartIcon,
    handleDrawerToggle,
    MenuIcon,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,
  } = data;

  const { cart } = useContext(CartContext);

  let cartBadgeNumber = cart.length;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "background.main",
        }}
        component="nav"
      >
        {/* Toolbar === navbar content */}
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          {/* menu icon */}
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="medium" color="secondary" />
          </IconButton>

          {/* logo */}
          <Link to="/login">
            <img alt="BASALTO STUDIO" src="src\images\logo.webp" />
          </Link>

          {/* CART */}
          <Link to={"/cart"}>
            <Badge
              badgeContent={cartBadgeNumber}
              color="primary"
              overlap="circular"
            >
              <IconButton>
                <ShoppingCartIcon color="secondary" />
              </IconButton>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>

      {/* NAVBAR DRAWER */}
      <Box component="nav" aria-label="mailbox folders">
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            anchor={"left"}
            transitionDuration={300}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "100vh",
              },
            }}
          >
            <NavbarDrawer data={drawerData} />
          </Drawer>
        </nav>
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
};

export default NavbarMobile;
