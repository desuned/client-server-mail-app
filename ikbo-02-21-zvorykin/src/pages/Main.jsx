import React from "react";
import Header from '../components/header/Header.jsx';
import Categories from '../components/categories/Categories.jsx';
import MailList from "../components/mail_list/MailList.jsx";
import MailContent from "../components/mail_list/MailContent.jsx";
import { list, baselist } from "../database/mail-list.jsx";
import {useParams }  from "react-router-dom";
import AddButton from "../components/buttons/AddButton.jsx";

function Main() {
	const {id} = useParams();
	console.log(id);
	if (id === undefined) {
		return (
			<div className="App">
			<Header></Header>
			<div className="mainInterface">
				<div className="categories-and-tags">
					<Categories title="Папки"></Categories>
				</div>
				<div className="mail-list-container">
					<AddButton name="+ Новое письмо"></AddButton>
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
			<div className="mainInterface">
				<div className="categories-and-tags">
					<Categories title="Папки"></Categories>
				</div>
				<div className="mail-list-container">
					<AddButton name="+ Новое письмо"></AddButton>
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
