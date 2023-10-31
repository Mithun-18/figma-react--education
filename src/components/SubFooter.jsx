export function SocialMedia() {
  return (
    <div style={{height:"156px"}}>
      <footer className="Text">Follow us</footer>
      <div className="FooterImg">
        <img src="et_twitter.svg" alt="Social media" />
        <img src="et_linkedin.svg" alt="Social media" />
        <img src="circum_facebook.svg" alt="Social media" />
        <img src="bxl_instagram.svg" alt="Social media" />
      </div>
    </div>
  );
}

export function Links() {
  return (
    <div>
      <footer className="Text">Useful links</footer>
      <ul
        className="Text"
        style={{
          padding: "initial",
          height: "110px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          fontSize: "15px",
          color: "#6C6C6C",
          fontWeight: 400,
        }}
      >
        <li>Our Projects</li>
        <li>FAQ’s</li>
        <li>News and Updates</li>
      </ul>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <footer className="Text">Contacts</footer>
      <ul
        className="Text"
        style={{
          listStyle: "none",
          padding: "initial",
          height: "110px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          fontSize: "15px",
          color: "rgba(0, 0, 0, 0.50)",
          fontWeight: 400,
        }}
      >
        <li>Address : 4-5 Main road , Delhi</li>
        <li>Email : educare@gmail.com</li>
        <li>Phone Number : +91 453343326</li>
      </ul>
    </div>
  );
}
