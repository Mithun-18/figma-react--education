import {BigText,SmallText,Button,Image} from "./Text";
import './style.css';


export default function Main() {
  return (
    <div className="Main">
      <div style={{width:"50%"}}>
        <BigText Text={["Start learning", <br/>," with us now"]}></BigText>
        <SmallText
          Text={["Lorem ipsum dolor sit amet consectetur adipisicing elit.",<br/>,"Ipsa laboriosam  voluptates sed beatae?"]}
        ></SmallText>
        <Button Text="Start learning"></Button>
      </div>
      <div style={{width:"50%"}}>
            <Image src="5437683 1.png" alt="img" width="487px" height="487px"></Image>
      </div>
    </div>
  );
}
