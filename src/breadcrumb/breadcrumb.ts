function getTrail() {
  const here = window.location.href;
  const url = new URL(here);
  return url.pathname?.split("/")?.filter((path) => path.trim() !== "") ?? [];
}
