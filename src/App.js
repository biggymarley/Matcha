import "./App.css";
import Footer from "./content/Footer.js";
import Header from "./content/Header.js";
import "./content/style/style.css";
import { Button } from "@material-ui/core";
import Login from "./content/Login.js";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight / 2)
      document.querySelector(".swip").style.opacity = 0;
    else if (window.pageYOffset > 100)
      document.querySelector(".swip").style.opacity = 0.5;
    else document.querySelector(".swip").style.opacity = 1;
  });

  return (
    <div className="body">
      <Header />
      <div className="home">
        <div className="swip">
          <span className="swip-left">
            Swip Left<sup>®</sup>
          </span>
          <div className="signup">
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle className="dialog">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText className="terms-actp">
                  By clicking "Create Account", you agree to the Terms of Use
                  and Privacy Policy.
                </DialogContentText>
                <div className="signup-l">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="uname"
                    label="Username"
                    type="text"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    id="pw"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Button
            variant="contained"
            className="create-but"
            onClick={handleClickOpen}
          >
            Create ACCOUNT
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
