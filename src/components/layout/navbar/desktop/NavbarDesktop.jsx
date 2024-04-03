import { Grid, Typography } from "@mui/material";
import NavbarDrawer from "../NavbarDrawer";
import { Link } from "react-router-dom";

const NavbarDesktop = ({ data }) => {
  const {
    Box,
    Button,
    CssBaseline,
    AppBar,
    Toolbar,
    menuItems,
    IconButton,
    ShoppingCartIcon,
    handleDrawerToggle,
    container,
    mobileOpen,
    drawerWidth,
    drawerData,
    Outlet,
    Drawer,
  } = data;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          height: "100vh",
        }}
      >
        <CssBaseline />

        {/* AppBar === navbar content */}
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            backgroundColor: "background.main",
          }}
          component="nav"
        >
          <Toolbar
            disableGutters
            sx={{
              gap: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid container>
              {/* logo & Cart*/}
              <Grid
                item
                container
                xs={12}
                sx={{
                  height: "60px",
                  borderBottom: "solid thin gray",
                  padding: "0 24px 0 24px",
                }}
              >
                <Grid item xs={1}>
                  {/* used to center basalto (easier with 3 grid cells) */}
                </Grid>
                <Grid item xs={10}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5">BASALTO</Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <ShoppingCartIcon color="secondary" />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>

              {/* navbar buttons */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: {
                      height: "60px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "4rem",
                    },
                  }}
                >
                  {menuItems.map((el) => {
                    return (
                      <Box
                        key={el.id}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Link to={el.path}>
                          <Button variant="text">{el.title}</Button>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
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

        {/* renders the rest of content: home, shop, etc */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 15,
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
};

export default NavbarDesktop;
