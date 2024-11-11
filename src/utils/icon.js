import No_Priority from "../assets/icons_FEtask/No-priority.svg";
import Low from "../assets/icons_FEtask/Img - Low Priority.svg";
import Medium from "../assets/icons_FEtask/Img - Medium Priority.svg";
import High from "../assets/icons_FEtask/Img - High Priority.svg";
import Urgent from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';

import BackLog from '../assets/icons_FEtask/Backlog.svg';
import ToDo from "../assets/icons_FEtask/To-do.svg";
import inProgress from "../assets/icons_FEtask/in-progress.svg";
import done from "../assets/icons_FEtask/Done.svg";
import Cancelled from '../assets/icons_FEtask/Cancelled.svg';

export const getPriorityIcon = (priority) => {
    const priorityIcons = {
        "No priority": No_Priority,
        "Urgent": Urgent,
        "High": High,
        "Medium": Medium,
        "low": Low,
    };
    const altText = {
        "No priority": "No priority icon",
        "Urgent": "Urgent priority icon",
        "High": "High priority icon",
        "Medium": "Medium priority icon",
        "low": "Low priority icon",
    };
    return priorityIcons[priority] ? (
        <img src={priorityIcons[priority]} alt={altText[priority]} />
    ) : null;
};


export const getStatusIcon = (status) => {
    const statusIcons = {
        "Backlog": BackLog,
        "Todo": ToDo,
        "In progress": inProgress,
        "Done": done,
        "Canceled": Cancelled
    };
    const altText = {
        "Backlog": "Backlog status icon",
        "Todo": "To Do status icon",
        "In progress": "In Progress status icon",
        "Done": "Done status icon",
        "Canceled": "Canceled status icon"
    };
    return statusIcons[status] ? (
        <img src={statusIcons[status]} alt={altText[status]} />
    ) : null;
};
