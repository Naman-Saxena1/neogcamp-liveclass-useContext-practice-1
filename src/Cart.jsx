import { useCart } from "./cart-context";
import { languageLib } from "./languageLib";
import { useLanguage } from "./language-context";

export function Cart() {
  const { language } = useLanguage();
  const { cartCount } = useCart();

  return <h1>{`${languageLib[language]["cart"]} ${cartCount}`}</h1>;
}
