import React, { useEffect, useRef, useState } from 'react';
import "../styles/Navbar.css";
import displayIcon from "../assets/icons_FEtask/Display.svg";
import downIcon from "../assets/icons_FEtask/down.svg";

const Dropdown = ({ grouping, setGrouping, ordering, setOrdering }) => {
    const [display, setDisplay] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDisplay = () => {
        setDisplay((prevDisplay) => !prevDisplay);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDisplay(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleSelectChange = (e, callback) => {
        callback(e.target.value);
        e.stopPropagation();
    };

    return (
        <div>
            <div className='dropdown' ref={dropdownRef}>
                <button
                    className="displayButton"
                    onClick={toggleDisplay}
                    aria-expanded={display}
                    aria-controls="dropdown-menu"
                    aria-labelledby="display-dropdown-button"
                >
                    <img src={displayIcon} alt="Display Icon" />
                    <p>Display</p>
                    <img src={downIcon} alt="Toggle Dropdown" />
                </button>
            </div>
            {display && (
                <div className="header" id="dropdown-menu" ref={dropdownRef}>
                    <div className="dropdown">
                        <label htmlFor="grouping-select">Grouping: </label>
                        <select
                            id="grouping-select"
                            value={grouping}
                            onChange={(e) => handleSelectChange(e, setGrouping)}
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <label htmlFor="ordering-select">Ordering: </label>
                        <select
                            id="ordering-select"
                            value={ordering}
                            onChange={(e) => handleSelectChange(e, setOrdering)}
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
