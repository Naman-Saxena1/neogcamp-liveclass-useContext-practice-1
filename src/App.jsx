import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { useTheme } from "./theme-context";
import { useLanguage } from "./language-context";
import "./styles.css";

export default function App() {
  let { themeState, changeTheme } = useTheme();
  let { changeLanguage } = useLanguage();

  return (
    <div className={`App ${themeState}`}>
      <button onClick={changeTheme}>Light/Dark Mode</button>
      <h1 className="app-header">eCommerce</h1>
      <button onClick={changeLanguage}>English</button>
      <button onClick={changeLanguage}>Hindi</button>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
