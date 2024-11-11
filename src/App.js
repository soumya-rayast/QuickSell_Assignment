import React, {  useEffect, useState } from 'react';

import { loadGrid, mapUsersByUserId } from './utils/app.js';
import { API_LINK } from './utils/api.js';
import './App.css';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState(localStorage.getItem("grouping") || "status");
  const [ordering, setOrdering] = useState(localStorage.getItem("ordering") || "priority");

  useEffect(() => {
    fetch(API_LINK)
      .then((resp) => resp.json())
      .then((res) => {
        setTickets(res.tickets);
        setUserData(mapUsersByUserId(res.users));
      })
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []);

  useEffect(() => {
    if (tickets.length) setGridData(loadGrid(tickets, grouping, ordering));
  }, [grouping, ordering, tickets]);

  const handleSettingChange = (type, value) => {
    type === "grouping" ? setGrouping(value) : setOrdering(value);
    localStorage.setItem(type, value);
  };

  return (
    <div className="App">
      <Navbar grouping={grouping} setGrouping={(value) => handleSettingChange("grouping", value)}
        ordering={ordering} setOrdering={(value) => handleSettingChange("ordering", value)} />
      <Main gridData={gridData} grouping={grouping} userIdToData={userData} />
    </div>
  );
}

export default App;
