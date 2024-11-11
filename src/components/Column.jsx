import React, { useMemo } from 'react'
import dotMenu from "../assets/icons_FEtask/3_dot_menu.svg";
import add from "../assets/icons_FEtask/add.svg";
import "../styles/Column.css";
import Card from './Card';
import { getPriorityIcon, getStatusIcon } from '../utils/icon.js';
import User from "./User";

const Column = ({ tickets, grouping, groupBy, userIdToData }) => {

    const title = useMemo(() => (
        grouping === "user"
            ? userIdToData[groupBy]?.name || "Unknown User"
            : groupBy
    ), [grouping, groupBy, userIdToData]);

    const icon = useMemo(() => {
        if (grouping === "status") return getStatusIcon(groupBy);
        if (grouping === "priority") return getPriorityIcon(groupBy);
        if (grouping === "user") {
            const user = userIdToData[groupBy] || {};
            return user.name
                ? <User name={user.name} available={user.available} />
                : <div>No User</div>;
        }
    }, [grouping, groupBy, userIdToData]);

    return (
        <div className='column'>
            <div className="column-header">
                <div className="column-left-container">
                    {icon}
                    <div className="column-title">
                        {title}
                        <span className='count'>
                            {tickets.length}
                        </span>
                    </div>
                </div>
                <div className="column-right-container">
                    <img src={add} alt="Add Ticket" />
                    <img src={dotMenu} alt="More Options" />
                </div>
            </div>
            <div className="cards-container">
                <div className="cards-container">
                    {tickets.map(ticket => {
                        const userData = userIdToData?.[ticket.userId] || {};
                        return (
                            <Card
                                key={ticket.id}
                                ticket={ticket}
                                userData={userData}
                                hideStatusIcon={grouping === "status"}
                                hideProfileIcon={grouping === "user"}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    )
}


export default Column