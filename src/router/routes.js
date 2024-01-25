import Home from "../components/pages/home/Home";
import ItemListContainer from "../components/pages/shop/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
 
];
