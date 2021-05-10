export {};

declare global {
  var wb: WetBoew;
}

interface WetBoew extends Record<string, any> {
  lang: "en" | "fr";
}
