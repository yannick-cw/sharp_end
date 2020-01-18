import React from "react";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";

const ContactPage = () => (
  <React.Fragment>
    <Article theme={theme}>
      <header>
        <Headline title="Kontakt" theme={theme} />
      </header>
      <span>
        Mail an uns: <a href="mailto:rotpunktreisen@gmail.com">rotpunktreisen@gmail.com</a>
      </span>
    </Article>
    <Seo pageTitle="Contact" />
  </React.Fragment>
);

ContactPage.propTypes = {};

export default ContactPage;
