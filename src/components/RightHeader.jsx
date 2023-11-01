function Menu(props){
    return <span className="Text">{props.item}</span>
}

export default function RightHeader(){
    return(
        <div className="RightHeader">
            <Menu item="Home"/>
            <Menu item="About"/>
            <div>
                <Menu item="Courses    "/>
                <img src="Vector.svg" alt="img" />
            </div>
            <div>
                <Menu item="Blog    "/>
                <img src="Vector.svg" alt="img" />
            </div>
            <button className="HeaderButton Text" style={{color:"#FFF"}}>contact us</button>
        </div>
    );
}