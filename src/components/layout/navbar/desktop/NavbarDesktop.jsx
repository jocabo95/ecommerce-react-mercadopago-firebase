import NavbarDrawer from "../NavbarDrawer";

const NavbarDesktop = ({data}) => {

const{Box,
    Button,
    CssBaseline,
    AppBar,
    Toolbar,
    Link,
    menuItems,
    IconButton,
    ShoppingCartIcon,
    handleDrawerToggle,
    MenuIcon,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,} = data

  return (
    <>
      <h2> DESKTOP </h2>
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
            sx={{
              gap: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* logo */}
            <Link to="/login">
              <img alt="BASALTO STUDIO" src="src\images\logo.webp" />
            </Link>

            {/* navbar buttons */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menuItems.map((el) => {
                return (
                  <Button key={el.id} variant="text">
                    {el.title}
                  </Button>
                );
              })}
            </Box>

            {/* CART */}
            <IconButton>
              <ShoppingCartIcon color="secondary" />
            </IconButton>

            {/* menu icon */}
            <IconButton
              color="secondary.primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none", md: "none" } }}
            >
              <MenuIcon color="secondary.primary" />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* NAVBAR DRAWER */}
        <Box component="nav" aria-label="mailbox folders">
          <nav>
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
    </>
  );
}

export default NavbarDesktop