import "./style/style.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";
import Login from "./Login.js";

const ColorButton = withStyles((theme) => ({
  root: {
    width: "auto",
    background: "white",
  },
}))(Button);

function Header(props) {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <svg
            fill="white"
            height="40px"
            viewBox="-78 0 512 512"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m178.164062 512c-98.242187 0-178.164062-80.367188-178.164062-179.152344 0-43.050781 14.664062-72.320312 31.648438-106.210937 9.425781-18.820313 19.175781-38.277344 28.179687-63.105469l9.367187-25.832031c13.8125 3.382812 9.132813 2.238281 22.941407 5.621093l-3.632813 27.238282c-2.972656 22.257812 1.089844 47.503906 11.140625 69.261718 4.261719 9.230469 9.40625 17.421876 15.117188 24.230469-1.980469-36.140625 1.722656-70.976562 11.074219-103.9375 9.804687-34.550781 25.535156-66.40625 46.757812-94.6875 26.414062-35.191406 56.75-58.175781 70.816406-60.066406l39.867188-5.359375-26.828125 29.976562c-12.1875 13.613282-18.898438 31.1875-18.898438 49.484376 0 35.367187 21.695313 60.464843 46.8125 89.527343 16.105469 18.628907 34.355469 39.746094 48.179688 65.6875 16.003906 30.03125 23.78125 62.140625 23.78125 98.171875 0 98.785156-79.921875 179.152344-178.160157 179.152344zm0 0" />
          </svg>
          <h1>Matcha</h1>
        </div>
        <Login
          open={props.open}
          handleClickOpen={props.handleClickOpen}
          handleClose={props.handleClose}
        />
        <ColorButton
          variant="contained"
          className="but"
          onClick={props.handleClickOpen}
        >
          <span className="log-but">Log In</span>
        </ColorButton>
      </nav>
    </header>
  );
}

export default Header;
