export function BigText({Text}){
    return(
            <span>{Text}</span>
    );
}

export function SmallText({Text}){
    return(
            <p>{Text}</p>
    );
}

export function Button({Text}){
    return(
        <button>{Text}</button>
    );
}

export function Image(props){
    return <img src={props.src} alt="{props.alt}" width={props.width} height={props.height} />
}