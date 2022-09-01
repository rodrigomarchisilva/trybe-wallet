import { createTheme } from '@mui/material/styles';
import { amber, grey, indigo, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { main: grey[500] },
    secondary: { main: grey[900] },
    error: { main: red[700] },
    success: { main: indigo[500] },
    warning: { main: amber[500] },
    info: { main: grey[50] }
  }
});

export default theme;
