// HACK: Monkey patch the language so WET widgets work properly.
// WET determines the current language based on the value of
// document.documentElement.lang. It then uses that language to set the text
// in some of its widgets (e.g. the social media Share button and popup)
// since the WET scripts need to run before any VueJS stuff, we need to patch
// the language with a plain JS script called from index.html.

(function () {
  var DEFAULT_LANGUAGE = "en";
  var SUPPORTED_LANGUAGES = ["en", "fr"];
  var LANG_KEY = "lang";

  var ie =
    navigator.userAgent.indexOf("MSIE ") > -1 ||
    navigator.userAgent.indexOf("Trident/") > -1;

  if (ie) {
    alert("This site does not support Internet Explorer.");
  }

  setCurrentLanguage(SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LANG_KEY);

  function setCurrentLanguage(supportedLanguages, fallback, langKey) {
    var userRequestedLanguage =
      getLanguageFromQueryString(langKey) ||
      getLanguageFromPath(supportedLanguages) ||
      getLanguageFromLocalStorage(langKey);

    var currentLanguage = ensureSupportedLanguage(
      userRequestedLanguage,
      supportedLanguages,
      fallback
    ).toLowerCase();

    saveLanguage(currentLanguage, langKey);
  }

  function getLanguageFromQueryString(langKey) {
    var params = {};
    window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (_, key, value) {
        return (params[key] = value);
      }
    );
    return params[langKey];
  }

  function getLanguageFromPath(supportedLanguages) {
    var pathParam = window.location.href.split("/")[3];
    if (isSupportedLanguage(pathParam, supportedLanguages)) {
      return pathParam;
    }
    return null;
  }

  function getLanguageFromLocalStorage(langKey) {
    return window.localStorage.getItem(langKey);
  }

  function ensureSupportedLanguage(language, supportedLanguages, fallback) {
    if (isSupportedLanguage(language, supportedLanguages)) {
      return language;
    }
    return fallback;
  }

  function isSupportedLanguage(language, supportedLanguages) {
    return language == null
      ? false
      : supportedLanguages.some(function (supportedLanguage) {
          return supportedLanguage.toLowerCase() === language.toLowerCase();
        });
  }

  function saveLanguage(language, langKey) {
    document.documentElement.lang = language;
    if (window.localStorage) {
      window.localStorage.setItem(langKey, language);
    }
  }
})();
