import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // console.log("fetching the data");
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data.products);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  if (isLoading) return <pre>Loading...</pre>;
  return (
    data && (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  );
};

export default App;
