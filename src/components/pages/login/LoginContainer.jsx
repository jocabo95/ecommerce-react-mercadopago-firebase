import Login from "./Login"
import { useState } from "react";
import { googleSignIn, onSignIn } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";



const LoginContainer = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
      email: "",
      showPassword: "",
    });

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
      setUserCredentials({
        ...userCredentials,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let res = await onSignIn(userCredentials);
        console.log(res);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    const SigninGoogle = async () => {
      try {
        let res = await googleSignIn();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    const data={
        showPassword,
        navigate,
        handleClickShowPassword,
        handleChange,
        handleSubmit,
        SigninGoogle
    }

  return (
    <Login data={data}/>
  )
}

export default LoginContainer