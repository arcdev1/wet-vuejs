const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "fr"] as const;
const LANG_KEY = "lang" as const;

export const languageCodePlacement = {
  QUERYSTRING: "querystring",
  PATH: "path",
} as const;

type Language = typeof SUPPORTED_LANGUAGES[number];
type LanguageCodePlacement = typeof languageCodePlacement[keyof typeof languageCodePlacement]; //"querystring" | "url";
type LanguageKey = typeof LANG_KEY;

/**
 * Gets the ISO639-1 language code of the current page.
 *
 * @export
 * @returns {Language} The ISO639-1 language code of the current page.
 */
export function getCurrentLanguage(): Language {
  // The language of the current page should have been set by the lang-fix.js
  // script referenced from index.html so all we need to do here is return it.
  return window.document.documentElement.lang as Language;
}

/**
 * Gets the URL of the translated version of the current page.
 *
 * @export
 * @param {Language} currentLanguage The ISO639-1 language code
 * of the current page.
 *
 * @returns {string} The URL of the translated version.
 */
export function getTranslatedPage({
  currentLanguage,
  placement,
  supportedLanguages = SUPPORTED_LANGUAGES,
  langKey = LANG_KEY,
}: {
  currentLanguage: Language;
  placement: LanguageCodePlacement;
  supportedLanguages?: Readonly<Language[]>;
  langKey?: LanguageKey;
}): string {
  const toggleLanguage = getOtherOfficialLanguage(currentLanguage);
  return placement === languageCodePlacement.QUERYSTRING
    ? setLanguageViaQuerystring(toggleLanguage, supportedLanguages, langKey)
    : setLanguageViaPath(toggleLanguage, supportedLanguages, langKey);
}

/**
 * Given the ISO639-1 language code of one official language,
 * returns the ISO639-1 language code of the other.
 *
 * @export
 * @param {Language} currentLanguage The ISO639-1 language code
 * of the current page.
 *
 * @returns {Language} The ISO639-1 language code of the other official language.
 */
export function getOtherOfficialLanguage(currentLanguage: Language): Language {
  return currentLanguage === "en" ? "fr" : "en";
}

export function setLanguageViaQuerystring(
  language: Language,
  supportedLanguages: Readonly<Language[]>,
  langKey: LanguageKey
): string {
  const page = new URL(window.location.href);
  const supportedLanguage = ensureSupportedLanguage(
    language,
    supportedLanguages,
    DEFAULT_LANGUAGE
  );
  page.searchParams.set(langKey, supportedLanguage);
  return page.href;
}

// TODO: Refactor this mess.
export function setLanguageViaPath(
  language: Language,
  supportedLanguages: Readonly<Language[]>,
  langKey: LanguageKey
) {
  const page = new URL(window.location.href);
  let pathParams = page.pathname
    .split("/")
    .filter((param) => param.trim() !== "");

  const maybeLang = pathParams[0];

  if (supportedLanguages.includes(maybeLang as Language)) {
    pathParams = pathParams.map((param) =>
      param === maybeLang ? language : param
    );
  } else {
    pathParams = [language, ...pathParams];
  }

  if (page.searchParams.has(langKey)) {
    page.searchParams.delete(langKey);
  }

  return `${page.origin}/${pathParams.join("/")}${page.search}`;
}

function ensureSupportedLanguage(
  language: Language,
  supportedLanguages: Readonly<Language[]>,
  fallback: Language
) {
  return supportedLanguages.includes(language) ? language : fallback;
}
