import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
