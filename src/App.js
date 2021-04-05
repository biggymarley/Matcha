import './App.css';
import Footer from './content/Footer.js'
import Header from './content/Header.js'
import './content/style/style.css'
import { Button } from '@material-ui/core';
function App() {

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > (window.innerHeight / 2))
    document.querySelector('.swip').style.opacity = 0;
    else if(window.pageYOffset > 100)
      document.querySelector('.swip').style.opacity = 0.5;
    else
    document.querySelector('.swip').style.opacity = 1;
  });


  return (
    <div className="body">
    <Header />
    <div className="home">
      <div className="swip">
      <span className="swip-left">
        Swip Left<sup>®</sup>
        </span>
        <Button variant="contained" className="create-but">
            Create ACCOUNT
        </Button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;