import { useState, useContext, createContext } from "react";

const languageContext = createContext({
  language: "english",
  changeLanguage: () => {}
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  function changeLanguage(e) {
    if (
      language === "english" &&
      e.target.innerText.toLowerCase() === "hindi"
    ) {
      setLanguage("hindi");
    } else {
      if (
        language === "hindi" &&
        e.target.innerText.toLowerCase() === "english"
      ) {
        setLanguage("english");
      }
    }
  }

  return (
    <languageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

let useLanguage = () => useContext(languageContext);

export { useLanguage, LanguageProvider };
