import React from "react"

import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session/login/login";

const Home: React.FC = () => {
    const dispatch =useDispatch<AppDispatch>()

    const onLogout = () => {
        dispatch(logout());
    }

    return (<div><button onClick={onLogout}>logout</button></div>)
};

export default Home;