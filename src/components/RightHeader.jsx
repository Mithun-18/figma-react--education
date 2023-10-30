function Menu(props){
    return <span className="Text">{props.item}</span>
}

export default function RightHeader(){
    return(
        <div className="RightHeader">
            <Menu item="Home"></Menu>
            <Menu item="About"></Menu>
            <Menu item="Courses"></Menu>
            <Menu item="Blog"></Menu>
            <button className="Text" style={{color:"#FFF"}}>contact us</button>
        </div>
    );
}