import React, { useMemo } from 'react';
import '../styles/user.css';

function User({ name, available }) {
    const text = useMemo(() => {
        return name.split(" ").map(item => item[0]).join("");
    }, [name]);

    return (
        <div className='user-icon'>
            <div className='user-icon-text'>{text}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
}

export default User;
