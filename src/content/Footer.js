import "./style/style.css";
import axios from "axios";
// import Grid from "@material-ui/core/Grid";
import { Paper, GridList , GridListTile} from "@material-ui/core";
import { useState, useEffect, React } from "react";



function Footer() {
  
  // const [data , setData] = useState([]);
  
  // const options = {
  //   method: 'GET',
  //   url: 'https://loripsum.net/api/10/short'
  // };
  
  // useEffect(() => {
  //   axios.request(options).then(res => {
  //     var parser = new DOMParser();
	//     var doc = parser.parseFromString(res.data, 'text/html');
  //     const fata = [...doc.body.children];
  //     setData(fata);
  //   }).catch(e => {
  //     console.log(e);
  //   })
  // }, []);

  
  return (
    <div className="Footer">
      <GridList className="gridlist" cols={2}> 
      {/* {
        data.map((child) => (
          <GridListTile className="tile" >
            {<p className="rev" >{child.innerHTML}</p>}
          </GridListTile>

        ))} */}
        </GridList>
    </div>
  );
}

export default Footer;
