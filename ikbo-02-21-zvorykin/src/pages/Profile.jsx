import React from "react";
import Header from "../components/header/Header";
import '../styles/profile/Profile.css';
import './jett.jpg'
import AddButton from "../components/buttons/AddButton";

function Profile() {
    return(
        <div className="App">
            <Header></Header>
            <div className="main-profile">
                <div className="title-profile"><h2>Личные данные</h2></div>
                <div className="user-profile">
                    <div className="img-profile">
                        <img src={require('./jett.jpg')} alter="image-profile"></img>
                        <AddButton name="Изменить фото"></AddButton>
                    </div>
                    <form className="form-profile">
                        <div className="name-profile">
                            <i>Имя</i>
                            <input type="text" size="20" placeholder="Ваше имя" required></input>
                        </div>
                        <div className="surname-profile">
                            <i>Фамилия</i>
                            <input type="text" size="20" placeholder="Ваша фамилия" required></input>
                        </div>
                        <div className="nickname-profile">
                            <i>Никнейм</i>
                            <input type="text" size="20" placeholder="Никнейм" required></input>
                        </div>
                        <div className="birthday-profile">
                            <i>День рождения</i>
                            <input type="text" size="20" placeholder="20.10.2003" required></input>
                        </div>
                        <div className="sex-profile">
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
    )
}

export default Profile;