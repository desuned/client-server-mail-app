import React from 'react';
import '../styles/categories/Category.css';

function Category(props) {
    return (
        <div className='category'>
            <img src={props.src}></img>
            <li className='categoryText'>{props.name}</li>
        </div>
    );
}

export default Category;