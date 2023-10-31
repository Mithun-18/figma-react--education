export function BigText(props){
    return(
            <span className={props.className} style={{fontSize:"48px"}}>{props.Text}</span>
    );
}

export function SmallText(props){
    return(
            <p className={props.className} style={{color: "rgba(0, 0, 0, 0.46)"}}>{props.Text}</p>
    );
}

export function Image(props){
    return <img src={props.src} alt="{props.alt}" width={props.width} height={props.height} />
}