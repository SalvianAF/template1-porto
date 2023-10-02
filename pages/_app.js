import '../styles/global.css';
// import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary:{
      main:"#F9E05B"
    },
    error: {
      main: "#AB0D0E",
    },
  },
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      );
  }