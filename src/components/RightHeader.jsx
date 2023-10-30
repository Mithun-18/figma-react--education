function Menu(props){
    return <span className="Text">{props.item}</span>
}

export default function RightHeader(){
    return(
        <div className="RightHeader">
            <Menu item="Home"></Menu>
            <Menu item="About"></Menu>
            <div>
                <Menu item="Courses    "></Menu>
                <img src="Vector.svg" alt="img" />
            </div>
            <div>
                <Menu item="Blog    "></Menu>
                <img src="Vector.svg" alt="img" />
            </div>
            <button className="Text" style={{color:"#FFF"}}>contact us</button>
        </div>
    );
}