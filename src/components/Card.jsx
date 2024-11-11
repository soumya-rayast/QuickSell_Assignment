import React from 'react';
import dotMenu from "../assets/icons_FEtask/3_dot_menu.svg";
import '../styles/Card.css';
import User from './User';
import { getStatusIcon } from '../utils/icon';

const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
    return (
        <div className='card-item'>
            <div className='header-container'>
                <div className='ticket-id'>{ticket.id}</div>
                {!hideProfileIcon && <User name={userData.name} available={userData.available} />}
            </div>
            <div className="content-container">
                {!hideStatusIcon && getStatusIcon(ticket.status)}
                <div className='title'>{ticket.title}</div>
            </div>
            <div className='footer-container'>
                <div className='more-options-container'>
                    <img src={dotMenu} alt="" />
                </div>
                {ticket.tag.map(tag => (
                    <div key={tag} className='tag-container'>
                        <div className='tag-icon'></div>
                        <div className='tag-text'>{tag}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;