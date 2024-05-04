import React from "react";
import Header from '../components/header/Header.jsx';
import Categories from '../components/categories/Categories.jsx';
import MailList from "../components/mail_list/MailList.jsx";
import MailContent from "../components/mail_list/MailContent.jsx";
import AddButton from "../components/buttons/AddButton.jsx";
import '../styles/mail-send/MailSend.css'
import { list, baselist } from "../database/mail-list.jsx";
import {useParams }  from "react-router-dom";

function Main() {
	const {id} = useParams();
	console.log(id);
	if (id === undefined) {
		return (
			<div className="App">
			<Header></Header>
			<div className="main-interface">
				<div className="main-interface-left">
					<Categories title="Папки"></Categories>
					<div className="mail-send">
						<form className="mail-send-form">
							<div className="mail-send-receiver">
								<i>Кому</i>
								<input type="text" size="20" placeholder="" required></input>
							</div>
							<div className="mail-send-theme">
								<i>Тема письма</i>
								<input type="text" size="20" placeholder="" required></input>
							</div>
							<div className="mail-send-text">
								<i>Текст письма</i>
								<input type="text" size="200" placeholder="" required></input>
							</div>
						</form>
						<div className="mail-send-buttons">
							<AddButton name="Отправить"></AddButton>
							<AddButton name="Отмена"></AddButton>
						</div>
					</div>
				</div>
				<div>
					<MailList/>
				</div>
				<div>
					<MailContent content={baselist}/>
				</div>
			</div>
		</div>
		)
	}
	else {
		return (
			<div className="App">
			<Header></Header>
			<div className="main-interface">
				<div className="main-interface-left">
					<Categories title="Папки"></Categories>
					<div className="mail-send">
						<form className="mail-send-form">
							<div className="mail-send-receiver">
								<i>Кому</i>
								<input type="text" size="20" placeholder="" required></input>
							</div>
							<div className="mail-send-theme">
								<i>Тема письма</i>
								<input type="text" size="20" placeholder="" required></input>
							</div>
							<div className="mail-send-text">
								<i>Текст письма</i>
								<input type="text" size="20" placeholder="" required></input>
							</div>
						</form>
						<div className="mail-send-buttons">
							<AddButton name="Отправить"></AddButton>
							<AddButton name="Отмена"></AddButton>
						</div>
					</div>
				</div>
				<div>
					<MailList/>
				</div>
				<div>
					<MailContent content={list[parseInt(id) - 1]}/>
				</div>
			</div>
		</div>
		)
	}
}

export default Main;
