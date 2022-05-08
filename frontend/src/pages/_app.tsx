import "client/styles/bs-custom.scss";
import "client/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
