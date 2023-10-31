export default function Info() {
  return (
    <div style={{height:"240px"}}>
      <div className="MainInfo">
        <input
          type="text"
          placeholder="Your name"
          className="Info Text"
          style={{ background: "#FFF" }}
        />
        <input
          type="text"
          placeholder="Your email address"
          className="Info Text"
        />
        <button
          className="Info Text"
          style={{ background: "#C24914", color: "#FFF" }}
        >
          Subscribe
        </button>
      </div>  
    </div>
  );
}
