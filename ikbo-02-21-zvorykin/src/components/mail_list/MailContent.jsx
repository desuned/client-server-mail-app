import React from "react";
import "../../styles/mail-list/MailContent.css"

function MailContent(props) {
    return (
        <div className="mail-content">
            <div className="mail-content-container1">
                <div className="mail-content-theme">{props.content.theme}</div>
                <div className="mail-content-sender">От кого: {props.content.sender}</div>
                <div className="mail-content-receiver">Кому: {props.content.reciever}</div>
                <div className="mail-content-datetime">Дата: {props.content.datetime}</div>
                <div className="mail-content-text">{props.content.text}</div>
            </div>   
        </div>
    )
}

export default MailContent;