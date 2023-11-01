import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import './style.css';
export default function Header(){
    return (
        <div className="Header">
            <LeftHeader/> 
            <RightHeader/>
        </div>
    );
}