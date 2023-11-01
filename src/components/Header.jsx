
import { HeaderLayout } from "./HeaderLayout";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import './style.css';
export default function Header({children}){
    return (
        <HeaderLayout>            
            <LeftHeader/>
            <RightHeader/>
        </HeaderLayout>
    );
}