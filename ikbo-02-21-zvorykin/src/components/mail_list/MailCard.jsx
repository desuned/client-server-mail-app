import React from "react";
import {Link} from "react-router-dom";

export default function MailCard(props) {
    let path = "/mail/" + props.mailid;
    return (
        <Link to={path}>
            <div>
                <div className="address-datetime-container">
                    <div>Адрес получателя: {props.reciever}</div>
                    <div>Адрес отправителя: {props.sender}</div>
                    <div>Время получения: {props.datetime}</div>
                    <div>Тема письма: {props.theme}</div>
                    <div>Содержание: {props.text}</div>
                </div>
            </div>
        </Link>
    )
}