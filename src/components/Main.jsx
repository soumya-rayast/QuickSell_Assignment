import React, { useMemo } from 'react';
import '../styles/Main.css';
import Column from './Column';

const Main = ({ gridData, grouping, userIdToData }) => {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='main'>
            {keys.map((key) => (
                <Column 
                    key={key} 
                    tickets={gridData[key]} 
                    grouping={grouping} 
                    groupBy={key} 
                    userIdToData={userIdToData} 
                />
            ))}
        </div>
    );
};

export default Main;
