import React from "react";
import '../styles/mail_list/MailList.css'
import MailCard from "./MailCard.jsx";


export const baselist = 
    {
        id:0,
        name: null,
        text: "Добро пожаловать!"
    }


export const list = [
    {
        id:1,
        name: "Даня Заикин",
        text: "Привет, пока!"
    },
    {
        id:2,
        name:"Данил Орлов",
        text: "Нужно сделать функционал для файлов!"
    },
    {
        id:3,
        name:"Глеб Зворыкин",
        text: "Понял, посылаю письмо сам себе("
    }
]


function MailList() {
    return (
        <div className="mail-list">
            {list.map(mail=>(
                <MailCard key={mail.id} name={mail.name} mailid={mail.id} text={mail.text}></MailCard>
            ))}
        </div>
    )
}


export default MailList;

