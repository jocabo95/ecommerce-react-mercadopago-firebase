import CartContainer from "../components/pages/cart/CartContainer";
import ForgotPasswordContainer from "../components/pages/forgotPassword/ForgotPasswordContainer";
import Home from "../components/pages/home/Home";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import ItemListContainer from "../components/pages/shop/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "forgotPassword",
    path: "/forgot-password",
    Element: ForgotPasswordContainer,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
 
];
