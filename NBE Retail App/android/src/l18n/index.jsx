import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";

// import { AsyncStorageStatic } from "react-native";
import ar from "./ar.json"
import en from "./en.json"
// const STORAGE_KEY = '@APP:languageCode';

// const languageDetector = {
//     init: Function.prototype,
//     type: 'languageDetector',
//     async: true, // flags below detection to be async
//     detect: async (callback) => {
//         const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
//         const lng = (savedDataJSON) ? savedDataJSON: null;
//         const selectLanguage = lng || locale;
//         console.log('detect - selectLanguage:', selectLanguage);
//         callback(selectLanguage);
//     },
//     cacheUserLanguage: () => {}
// };
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
    // fallbackLng: AsyncStorage.getItem('Languages'),
    fallbackLng: "ar",
    lng:getLocales()[0].languageCode,   // get the local language of the phone
    lng:'en',
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