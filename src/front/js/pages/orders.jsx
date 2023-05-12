import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Orders = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Historial de Pagos</h1>
            <p className="lead">texto texto</p>
            <hr className="my-4" />
        </div>
    </>)
}

export default Orders;