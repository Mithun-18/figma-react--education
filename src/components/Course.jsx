import { BigText, Image } from "./Text";
import './style.css';

export default function Course() {
  return (
    <div className="Course">
      <div style={{ width: "50%", overflow: "hidden", display: "flex" }}>
        <Image src="image 3.png" alt="img" width="480px" height="379px"/>
      </div>
      <div style={{ width: "50%", textAlign: "initial" }}>
        <BigText
          Text={"Welcome to the \n online centers"}
          className="Text"
        />
        <ul
          className="Text"
          style={{
            fontSize: "24px",
            fontWeight: 400,
            padding: "initial",
            display: "flex",
            flexDirection: "column",
            height: " 112px",
            justifyContent: "space-between",
          }}
        >
          <li key={'1'}>Start learning from your experience</li>
          <li key={'2'}>Enhance your skills with us now</li>
          <li key={'3'}>Do your favorite course</li>
        </ul>
      </div>
    </div>
  );
}
