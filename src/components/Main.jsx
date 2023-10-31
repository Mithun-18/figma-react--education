import {BigText,SmallText,Image} from "./Text";
import './style.css';


export default function Main() {
  return (
    <div className="Main">
      <div style={{width:"50%",textAlign:"initial"}} className="LeftMain">
        <BigText Text={["Start learning", <br/>," with us now"]} className="Text"></BigText>
        <SmallText
          Text={["Lorem ipsum dolor sit amet consectetur adipisicing elit.",<br/>,"Ipsa laboriosam  voluptates sed beatae?"]} 
          className="Text"></SmallText>
        <button className="MainButton Text" style={{color:"#FFF"}}>Start Learning</button>
      </div>
      <div style={{width:"50%",overflow:"hidden",display:"flex"}}>
            <Image src="5437683 1.png" alt="img" width="487px" height="487px"></Image>
      </div>
    </div>
  );
}
