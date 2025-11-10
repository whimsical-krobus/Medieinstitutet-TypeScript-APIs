import "./style.css";

/* =========================================== API =========================================== */
// Use the fetch function to get a list of objects from an API on only 5 rows:
// Add API to a .env file to store it saftely

fetch(import.meta.env.VITE_API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
