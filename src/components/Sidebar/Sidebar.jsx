import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return <div className={s.sidebar}>{props.sidebar}</div>
    
}

export default Sidebar;