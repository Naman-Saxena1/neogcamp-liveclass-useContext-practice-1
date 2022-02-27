import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cart-context";
import App from "./App";
import { ThemeProvider } from "./theme-context";
import { LanguageProvider } from "./language-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
  rootElement
);
