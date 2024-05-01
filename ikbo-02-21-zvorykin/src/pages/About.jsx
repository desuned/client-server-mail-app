import React from "react";
import Header from "../components/header/Header";
import '../styles/about/About.css';

function About() {
    return(
        <div className="App">
            <Header></Header>
            <div className="about">
                <h3 className="about-theme">Курсовая работа на тему "Разработка клиент-серверного фуллстек-приложения для реализации почтового сервиса с использованием Mailgun API."</h3>
                <div className="about-student">Выполнил студент группы ИКБО-02-21 Зворыкин Г.И.</div>
            </div> 
        </div>
    )
}

export default About;