import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Button, Select } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Signup(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="signup">
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullScreen={fullScreen}
      >
        <DialogTitle className="dialog">
          <div className="logo">
            <svg
              height="30px"
              viewBox="-78 0 512 512"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff5864"
            >
              <path d="m178.164062 512c-98.242187 0-178.164062-80.367188-178.164062-179.152344 0-43.050781 14.664062-72.320312 31.648438-106.210937 9.425781-18.820313 19.175781-38.277344 28.179687-63.105469l9.367187-25.832031c13.8125 3.382812 9.132813 2.238281 22.941407 5.621093l-3.632813 27.238282c-2.972656 22.257812 1.089844 47.503906 11.140625 69.261718 4.261719 9.230469 9.40625 17.421876 15.117188 24.230469-1.980469-36.140625 1.722656-70.976562 11.074219-103.9375 9.804687-34.550781 25.535156-66.40625 46.757812-94.6875 26.414062-35.191406 56.75-58.175781 70.816406-60.066406l39.867188-5.359375-26.828125 29.976562c-12.1875 13.613282-18.898438 31.1875-18.898438 49.484376 0 35.367187 21.695313 60.464843 46.8125 89.527343 16.105469 18.628907 34.355469 39.746094 48.179688 65.6875 16.003906 30.03125 23.78125 62.140625 23.78125 98.171875 0 98.785156-79.921875 179.152344-178.160157 179.152344zm0 0" />
            </svg>
          </div>
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="terms-actp">
            By clicking "Create Account", you agree to the Terms of Use and
            Privacy Policy.
          </DialogContentText>
          <div className="signup-l">
            <TextField
              autoFocus
              margin="normal"
              id="email"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              autoFocus
              margin="normal"
              id="fname"
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              autoFocus
              margin="normal"
              id="lname"
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="Mr"
                // onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">Mr</MenuItem>
                <MenuItem value="">Ms</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              variant="outlined"
              margin="normal"
              id="pw"
              label="Password"
              type="password"
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;
