import React from "react";
import {Link} from "react-router-dom";

export default function MailCard(props) {
    let path = "/mail/" + props.mailid;
    return (
        <Link to={path}>
            <div>
                <div className="address-datetime-container">
                    <div>От кого: {props.sender}</div>
                    <div>Кому: {props.reciever}</div>
                    <div>Тема: {props.theme}</div>
                </div>
            </div>
        </Link>
    )
}