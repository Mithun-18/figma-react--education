
import { SocialMedia, Links, Contact } from "./SubFooter";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="LeftHeader">
          <img src="Vector (1).svg" alt="logo" />
          <span className="Heading">Educare</span>
        </div>
        <SocialMedia></SocialMedia>
        <Links></Links>
        <Contact></Contact>
      </div>
    </div>
  );
}
