import "../styles/globals.css"
import { PromptProvider } from "../context/PromptContext";
function MyApp({ Component, pageProps }) {
    return(
        <PromptProvider>
            <Component {...pageProps} />;
        </PromptProvider>
    );
}
  

export default MyApp;
