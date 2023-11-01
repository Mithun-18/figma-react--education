import {BigText,Image} from "./Text";
import './style.css';


export default function Register() {
  return (
    <div className="Register">
      <div style={{width:"50%",textAlign:"initial"}}>
        <BigText Text={["Start learning by",<br/>," creating free account ",<br/>,"and get register"]} className="Text"/>
      </div>
      <div style={{width:"50%",overflow:"hidden",display:"flex"}}>
            <Image src="image 1.png" alt="img" width="439.314px" height="292.642px"/>
      </div>
    </div>
  );
}
