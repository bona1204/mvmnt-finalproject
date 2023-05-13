import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
export const NewPassword = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { token } = useParams();
    const { store, actions } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        let { respuestaJson, response } = await actions.recover(password, token); // call login action

        if (response.ok) {
            alert("Contraseña cambiada con éxito.")
            const btn = document.getElementById("resetPasswordButton");
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-success");
            btn.textContent = "Contraseña cambiada con éxito.";
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
    };
    return (
        <div>
            <h1>Resetear Contraseña</h1>
            {message && <div className="alert alert-danger">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">Nueva Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingresá nueva contraseña"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Repetir Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Repetir contraseña"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        required
                    />
                </div>

                <button id="resetPasswordButton" type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Reset Password
                <button type="submit" className="btn btn-primary">
                    Resetear Contraseña
                </button>
            </form>
        </div>
    );
};

export default NewPassword;