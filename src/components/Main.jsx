import { useState } from "react";
import { BigText, SmallText, Image } from "./Text";
import "./style.css";

export default function Main() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);

  }
  function refresh() {
    setCount(0);
  }

  return (
    <div className="Main">
      <div style={{ width: "50%", textAlign: "initial" }} className="LeftMain">
        <BigText Text={"Start learning \n with us now"} className="Text" />
        <span className="Text">You clicked {count} times</span>
        <button
          onClick={refresh}
          // className="MainButton Text"
          style={{ color: "#FFF",background:"blue" }}
        >
          Refresh
        </button>
        <SmallText
          Text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Ipsa laboriosam  voluptates sed beatae?"
          }
          className="Text"
        />
        <button
          onClick={onClick}
          className="MainButton Text"
          style={{ color: "#FFF" }}
        >
          Start Learning
        </button>

      </div>
      <div style={{ width: "50%", overflow: "hidden", display: "flex",  }}>
        <Image src="5437683 1.png" alt="img" width="487px" height="487px"/>
      </div>
    </div>
  );
}
