import React from "react";
import "../styles/mail_list/MailContent.css"

function MailContent(props) {
    return (
        <div className="mail-content">
            {props.content.text}
        </div>
    )
}

export default MailContent;