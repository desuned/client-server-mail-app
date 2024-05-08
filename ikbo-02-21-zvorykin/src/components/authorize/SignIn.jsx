import React from "react";
import '../../styles/authorize/SignIn.css'

export default function SignIn() {
    return (
        <div className="sign-in-container">
            <form>
                <div className="sign-in-title-container">Авторизация</div>
                <div className="sign-in-mail-container">
                    <div>Введите почту:</div>
                    <input type="text" size="20" placeholder=" Ваша почта" required></input>
                </div>
                <div className="sign-in-password-container">
                    <div>Введите пароль:</div>
                    <input type="text" size="20" placeholder=" Ваш пароль" required></input>
                </div>   
                <div className="sign-in-submit-profile">
                    <input type="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
}