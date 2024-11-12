import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {en} from "./i18n/en"
import {ro} from "./i18n/ro"

const resources = {
  en,
  ro,
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    lng: "en",

  });

  export default i18n;
