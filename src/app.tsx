import React, { useEffect, useState } from "react";

import axios from "axios";
import { Homepage } from "./containers/homepage";

export const App: React.FC = () => {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/list/all`).then((res) => {
      const dogs = res.data.message;
      setDogs(Object.keys(dogs));
    });
  }, []);

  return <Homepage dogs={dogs} />;
};
