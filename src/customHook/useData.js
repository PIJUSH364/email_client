import axios from "axios";
import React, { useEffect, useState } from "react";

export const useData = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(resourceUrl)
      .then(function (response) {
        setResource(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setIsLoading((prev) => !prev));
  }, [resourceUrl]);
  return { isLoading, resource };
};
