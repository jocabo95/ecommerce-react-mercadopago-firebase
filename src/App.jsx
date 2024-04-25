import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./components/context/CartContext";
import AuthContextComponent from "./components/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#B8A9A0",
        light: "#F5E5C8",
        dark: "#9E6E51",
        contrastText: "#36454F",
      },
      secondary: {
        main: "#36454F",
      },
      background: {
        main: "#FFFFFF",
        light: "#ffffff",
        dark: "#A06348",
      },
      details: {
        main: "#bf3815",
      },
      warning: {
        main: "#D70040",
      },
    },
    typography: {
      fontFamily: ["Raleway", "Playfair", "sans-serif"].join(","),
    },
  });
  

  return (
    // theme prodivder helps customize pallete
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContextComponent>
          <AuthContextComponent>
            <AppRouter />
          </AuthContextComponent>
        </CartContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
