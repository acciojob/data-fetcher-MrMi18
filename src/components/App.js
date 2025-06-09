import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
// console.log(data)
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json()) // Convert response to JSON
      .then(json => {
        console.log("API Response:", json);
        if (!json.products || json.products.length === 0) {
          setError("No data found"); // Handle empty response
        } else {
          setData(json);
          setIsLoading(false);
        }
      })
      .catch(err => setError(err.message)); // Catch errors
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <pre>Loading...</pre>;
  if (error) return <pre>{error}</pre>;
  
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
