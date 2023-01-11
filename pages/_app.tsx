import type { AppProps } from "next/app";
import "normalize.css";
import 'rc-dropdown/assets/index.css';
import "../styles/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContext } from "../context/theme";
import Wrapper from "../components/Wrapper";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    isIncognito: false,
  };
  const themeName = config.isIncognito ? "dark" : "light";
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={themeName}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}
