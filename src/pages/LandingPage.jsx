// NPM Packages
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/Logo.png";
import ContentItem from "components/ContentItem";
import JSONContent from "data/landing-content.json";

export default function LandingPage() {
  const Content = JSONContent.map((item) => (
    <ContentItem key={item.id} item={item} />
  ));
  return (
    <div id="landing-page">
      <header>
        <div className="logo">
          {/* <img src={Logo} alt="an icon of an eye and a leaf" /> */}
        </div>
        {/* <h1>OpenEyes e-learning</h1> */}
      </header>
      <section className="content">
        <h2>
        OpenEyes — это бесплатная обучающая онлайн-платформа, которая предлагает курсы по
         разработке и тестированию
        </h2>
        {/* {Content} */}
        <Link to="/login">Начинайте учиться</Link>
      </section>
    </div>
  );
}