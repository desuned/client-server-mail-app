import React from 'react';
import Category from './Category.jsx';
import '../../styles/categories/Categories.css';

function Categories(props) {
    return (
        <div className="categories">
            <h2 className="title">{props.title}</h2>
            <ul>
                <Category src={require('../../images/send.png')} name="Отправленные"></Category>
                <Category src={require('../../images/get.png')} name="Входящие"></Category>
                <Category src={require('../../images/multi.png')} name="Рассылки"></Category>
                <Category src={require('../../images/archive.png')} name="Архив"></Category>
                <Category src={require('../../images/bucket.png')} name="Корзина"></Category>
            </ul>
        </div>
    )
}

export default Categories;