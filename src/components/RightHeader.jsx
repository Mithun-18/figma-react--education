import { useState } from "react";



function Menu({item, icon}){
    let [isActive, setIsActive] = useState(false);

    function onMouseEnter(){
        setIsActive(true);
    }

    function onMouseLeave(){
        setIsActive(false);
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <span className={isActive ? "Text TextActive" : "Text"}>{item}&nbsp;&nbsp;</span>
            {icon ? <img className={isActive ? "menuItemIcon menuItemIconHover" : "menuItemIcon"} src={icon} alt="img" /> : <></> }
        </div>
    );
}

export default function RightHeader(){
    return(
        <div className="RightHeader">
            <Menu item="Home"/>
            <Menu item="About"/>
            <Menu item="Course" icon="Vector.svg"/>
            <Menu item="Blog" icon="Vector.svg"/>
            <button className="HeaderButton Text" style={{color:"#FFF"}}>contact us</button>
        </div>
    );
}