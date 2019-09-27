export const CLOSE_LOADER = "CLOSE_LOADER";
export const OPEN_LOADER = "OPEN_LOADER";

export function openLoader() {
  return {
    type: OPEN_LOADER
  };
}

export function closeLoader() {
  return {
    type: CLOSE_LOADER
  };
}
