import { createTheme } from '@mui/material/styles';
import { amber, grey, indigo, red } from '@mui/material/colors';

export default createTheme({
  palette: {
    primary: { main: grey[500] },
    secondary: { main: grey[900] },
    error: { main: red[700] },
    success: { main: indigo[500] },
    warning: { main: amber[500] },
    info: { main: grey[50] }
  },
  breakpoints: {
    values: {
      xs: 0,
      ms: 480,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});