import "./App.css";
import Footer from "./content/Footer.js";
import Header from "./content/Header.js";
import "./content/style/style.css";
import "./content/style/style.js";
import { Button } from "@material-ui/core";
import Signup from "./content/Signup.js";
import {React, useState, useEffect} from "react";
import axios from "axios";


function App() {
  
  const [open, setOpen] = useState(false);
  const [Textdata ,setTextdata] = useState([]);


useEffect(() => {
  axios.get('http://www.randomtext.me/api/lorem/p-8/20-35')
  .then(function (response) {
    console.log(response.data);
    setTextdata(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}, [])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="body">
      <Header />
      <div className="home">
        <div className="swip">
          <span className="swip-left">
            Swipe Left<sup>®</sup>
          </span>
          <Signup
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          />
          <Button
            variant="contained"
            className="create-but"
            onClick={handleClickOpen}
          >
            Create ACCOUNT
          </Button>
        </div>
      </div>
      <Footer
      data={Textdata}
      />
    </div>
  );
}

export default App;
