import { useState } from "react";

export function BigText(props) {
  return (
    <span className={props.className} style={{ fontSize: "48px" }}>
      {props.Text}
    </span>
  );
}

export function SmallText(props) {
  return (
    <p className={props.className} style={{ color: "rgba(0, 0, 0, 0.46)" }}>
      {props.Text}
    </p>
  );
}

export function Image(props) {
  const [scale, setScale] = useState(0);

  function Mousein() {
    setScale(1);
  }

  function MouseOut() {
    setScale(0);
  }

  return (
    <div className="container">
      <img
        src={props.src}
        alt={props.alt}
        onMouseEnter={Mousein}
        onMouseLeave={MouseOut}
        className={scale ? "hover":""}
        // width={props.width}
        // height={props.height}
      />
    </div>
  );
}
