
import { SocialMedia, Links, Contact } from "./SubFooter";

export default function Footer() {
  return (
    <div style={{height:"320px", background:"#F9E0AE" ,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div className="Footer">
        <div className="LeftHeader">
          <img src="Vector (1).svg" alt="logo" />
          <span className="Heading">Educare</span>
        </div>
        <SocialMedia/>
        <Links/>
        <Contact/>
      </div>
      <p className="Text" style={{fontSize:15,color:" #7D7A74"}}> &copy; All Copyrights reserved</p>
    </div>
  );
}
