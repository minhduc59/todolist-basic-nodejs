import React from "react";

const Footer = (props) => {
  const branding = props.branding;
  return (
    <div className="card text-center text-white bg-dark mt-5">
      <div className="card-header">
        <a
          href="/"
          className="text-decoration-none display-5 font-weight-bold"
          style={{ color: "white" }}
        >
          {branding}
        </a>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  branding: "MyApp",
};

export default Footer;
