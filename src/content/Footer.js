import "./style/style.css";
import React from "react";

function Footer(props) {
  return (
    <div className="Footer">
      <div
        dangerouslySetInnerHTML={{ __html: props.data.text_out }}
        className="countainer"
      />
    </div>
  );
}

export default Footer;
