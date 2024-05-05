import React from "react";
import Header from "../components/header/Header";
import '../styles/profile/Profile.css';
import AddButton from "../components/buttons/AddButton";
import { user } from "../database/current-user";

function Profile() {
    return(
        <div className="App">
            <Header></Header>
            <div className="main-profile">
                <div className="container-user-profile">
                    <div className="title-profile">Личные данные</div>
                    <div className="user-profile">
                        <div className="name-profile">Ваше имя: {user.name}</div>
                        <div className="surname-profile">Ваша фамилия: {user.surname}</div>
                        <div className="nickname-profile">Ваш никнейм: {user.nickname}</div>
                        <div className="address-profile">Ваш почтовый адрес: {user.address}</div>
                        <div className="sex-profile">Ваш пол: {user.sex}</div>
                        <div className="birthday-profiel">Ваша дата рождения: {user.birthday}</div>
                    </div>
                </div>
                <div className="container-change-profile">
                    <div className="title-change-profile">Изменить личные данные</div>
                    <div className="change-user-profile">
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