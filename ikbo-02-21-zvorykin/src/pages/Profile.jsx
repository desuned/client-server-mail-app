import React from "react";
import Header from "../components/header/Header";
import '../styles/profile/Profile.css';
import './jett.jpg'
import AddButton from "../components/buttons/AddButton";
import { currentuser } from "../database/current-user";

function Profile() {
    return(
        <div className="App">
            <Header></Header>
            <div className="main-profile">
                <div className="container-user-profile">
                    <div className="title-profile">Личные данные</div>
                    <div className="user-profile">
                        <div className="name-profile">Ваше имя: {currentuser[0].name}</div>
                        <div className="surname-profile">Ваша фамилия: {currentuser[0].surname}</div>
                        <div className="nickname-profile">Ваш никнейм: {currentuser[0].nickname}</div>
                        <div className="address-profile">Ваш почтовый адрес: {currentuser[0].address}</div>
                        <div className="sex-profile">Ваш пол: {currentuser[0].sex}</div>
                        <div className="birthday-profiel">Ваша дата рождения: {currentuser[0].birthday}</div>
                    </div>
                </div>
                <div className="container-change-profile">
                    <div className="title-change-profile">Изменить личные данные</div>
                    <div className="change-user-profile">
                        <div className="img-profile">
                            <img src={require('./jett.jpg')} alter="image-profile"></img>
                            <AddButton name="Изменить фото"></AddButton>
                        </div>
                        <form className="form-change-profile">
                            <div className="name-change-profile">
                                <i>Имя</i>
                                <input type="text" size="20" placeholder="Ваше имя" required></input>
                            </div>
                            <div className="surname-change-profile">
                                <i>Фамилия</i>
                                <input type="text" size="20" placeholder="Ваша фамилия" required></input>
                            </div>
                            <div className="nickname-change-profile">
                                <i>Никнейм</i>
                                <input type="text" size="20" placeholder="Никнейм" required></input>
                            </div>
                            <div className="birthday-change-profile">
                                <i>День рождения</i>
                                <input type="text" size="20" placeholder="20.10.2003" required></input>
                            </div>
                            <div className="sex-change-profile">
                                <i>Ваш пол</i>
                                <div>
                                    <div className="sex">
                                        <input type="radio" name="browser" value="male"></input>
                                        <i>Мужской</i>
                                    </div>
                                    <div className="sex">
                                        <input type="radio" name="browser" value="female"></input>
                                        <i>Женский</i>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-profile">
                                <input type="submit" value="Отправить"/>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default Profile;