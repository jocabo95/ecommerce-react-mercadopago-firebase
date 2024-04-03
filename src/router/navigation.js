import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShopIcon from '@mui/icons-material/Shop';
export const menuItems = [
    
   
    {
        id: "home",
        path: "/",
        title: "INICIO",
        Icon: HomeIcon
    },
    {
        id: "products",
        path: "/shop",
        title: "TIENDA",
        Icon: StoreIcon
    },
    {
        id: "cart",
        path: "/cart",
        title: "CARRITO",
        Icon: ShoppingCartCheckoutIcon
    },
    {
        id: "userOrders",
        path: "/orders",
        title: "MIS COMPRAS",
        Icon: ShopIcon
    }
]
