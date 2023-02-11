import React, { useEffect, useState } from 'react';
import classes from './Main.module.css'
import NavBarItem from '../NavBarItem/NavBarItem';
import Todo from '../Todo/Todo';
import Dashboard from '../Dashboard/Dashboard';
import SiteDisabler from '../SiteDisabler/SiteDisabler';
import Pomodoro from '../Pomodoro/Pomodoro';
import RoutinePlus from '../RoutinePlus/RoutinePlus';

const Main = () => {
    const [itemClicked,updateItemClicked] = useState("todo");
    let component = <Todo />
    switch(itemClicked){
        case 'dashboard':
            component = <Dashboard />
            break;
        case 'disabler':
            component = <SiteDisabler />
            break;
        case 'todo':
            component = <Todo />
            break;
        case 'pomodoro':
            component = <Pomodoro />
            break;
        case 'routineplus':
            component = <RoutinePlus />
            break;
    }
    useEffect(() => {
        console.log(itemClicked);
    })
    return (
        <div className={classes.main}>
            {/* side navbar vertical */}
            <div className={classes.verticalNavbar}>
                <div className={classes.verticalNavbarItems}><NavBarItem item="Dashboard" onClick={() => {updateItemClicked('dashboard')}} /></div>
                <div className={classes.verticalNavbarItems}><NavBarItem item="Site Disabler" onClick={() => updateItemClicked('disabler')} /></div>
                <div className={classes.verticalNavbarItems}><NavBarItem item="Todo" onClick={() => updateItemClicked('todo')} /></div>
                <div className={classes.verticalNavbarItems}><NavBarItem item="Pomodoro" onClick={() => updateItemClicked('pomodoro')}/></div>
                <div className={classes.verticalNavbarItems}><NavBarItem item="Routine+" onClick={() => updateItemClicked('routineplus')} /></div>
            
            
            
            </div>
            <div className={classes.verticalComponents}>
                {component}
            </div>
            
        </div>
    )
}

export default Main;