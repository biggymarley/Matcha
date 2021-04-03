import "./style/style.css";
import axios from "axios";
// import Grid from "@material-ui/core/Grid";
import { Paper, GridList , GridListTile} from "@material-ui/core";
import { useState, useEffect } from "react";



function Footer() {
  
  const [data , setData] = useState(null);
  
  const options = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
    params: {date: '2020-04-01', name: 'Italy'},
    headers: {
      'x-rapidapi-key': 'a6724ce4f3msh8dc6622e8ded0c1p1384e4jsn6689504d9a4b',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(res => {
      console.log(res.data);
      setData(res.data)
    })
  }, []);


  return (
    <div className="Footer">
      {/* <GridList
        // container
        // direction="row"
        // className="countainer"
        // spacing={8}
        // justify="space-between"
        cols={2.5}
      >
        <GridListTile item xs={3} className="rev-footer">
        <Paper>
          d do duis sunt tempor et tempor laborum labore deserunt qui deserunt
          elit minim. Velit Lorem laborum aute tempor occaecat aliquip nostrud.
          Nisi quis ut consectetur do eu anim. Ipsum quis in aute dolor quis ad
          </Paper>
          </GridListTile>
        </GridList> */}
    </div>
  );
}

export default Footer;
