export function isAppleMobileDevice() {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor || "";

  return /iPhone|iPad|iPod/i.test(userAgent);
}

export function openGoogleMaps(url) {
  if (!url) return;

  window.open(url, "_blank", "noopener,noreferrer");
}

export function openAppleMaps(url) {
  if (!url) return;

  window.open(url, "_blank", "noopener,noreferrer");
}