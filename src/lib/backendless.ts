import Backendless from "backendless";

console.log(import.meta.env.VITE_BACKENDLESS_APP_ID);
console.log(import.meta.env.VITE_BACKENDLESS_API_KEY);

Backendless.initApp(
  import.meta.env.VITE_BACKENDLESS_APP_ID,
  import.meta.env.VITE_BACKENDLESS_API_KEY
);

export default Backendless;