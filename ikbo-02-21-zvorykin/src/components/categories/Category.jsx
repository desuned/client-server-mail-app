import React from 'react';
import '../../styles/categories/Category.css';

function Category(props) {
    return (
        <div className='category'>
            <img alt="" src={props.src}></img>
            <li className='category-text'>{props.name}</li>
        </div>
    );
}

export default Category;