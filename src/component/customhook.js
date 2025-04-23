import { useState, useEffect } from "react";


function useFetch (url){
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, [url]);

  return [datas];
};

export default useFetch;