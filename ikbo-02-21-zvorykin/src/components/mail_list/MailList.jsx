import React from "react";
import MailCard from "./MailCard.jsx";
import {list} from '../../database/mail-list.jsx'
import '../../styles/mail-list/MailList.css'

export default function MailList() {
    return (
        <div className="mail-list">
            {list.map(mail=>(
                <MailCard key={mail.id} reciever={mail.reciever} sender={mail.sender} datetime = {mail.datetime} mailid={mail.id} theme={mail.theme}text={mail.text}></MailCard>
            ))}
        </div>
    )
}

