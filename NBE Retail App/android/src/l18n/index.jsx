import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import { getLocales } from "react-native-localize";
import ar from "./ar.json"
import en from "./en.json"

const resources = {
    ar: {
        translation: ar,
    },
    en:{
        translation:en,
    }
}
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    //  lng:getLocales()[0].languageCode,   // get the local language of the phone
    lng: I18nManager.isRTL ? "ar": "en",
    resources: resources,
    compatibilityJSON:"v3",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    react: {
        useSuspense:false
    }
  });

  export default i18n;