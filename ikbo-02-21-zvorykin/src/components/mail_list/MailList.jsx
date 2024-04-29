import React from "react";
import MailCard from "./MailCard.jsx";
import {list} from '../../database/mail-list.jsx'
import '../../styles/mail_list/MailList.css'

export default function MailList() {
    return (
        <div className="mail-list">
            {list.map(mail=>(
                <MailCard key={mail.id} name={mail.name} mailid={mail.id} text={mail.text}></MailCard>
            ))}
        </div>
    )
}

