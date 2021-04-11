import "./style/style.css";
import axios from "axios";
// import Grid from "@material-ui/core/Grid";
import { Paper, GridList , GridListTile} from "@material-ui/core";
import { useState, useEffect, React } from "react";



function Footer(props) {

  
  return (
    <div className="Footer" >
      <div dangerouslySetInnerHTML={{__html: props.data.text_out}} className="countainer"/>
    </div>
  );
}

export default Footer;
