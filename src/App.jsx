import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./components/context/CartContext";
import AuthContextComponent from "./components/context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AuthContextComponent>
         <AppRouter />
        </AuthContextComponent>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
