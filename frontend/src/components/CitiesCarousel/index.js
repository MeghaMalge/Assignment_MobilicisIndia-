import React, { useEffect, useState } from "react";

import { useHttpClient } from "../../hooks/http-hook";
import ErrorModal from "../ErrorModal";
import LoadingSpinner from "../LoadingSpinner";
import Header from "../Header";

import "./CitiesCarousel.css";

export default function CitiesCarousel() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [cities, setCities] = useState();

  useEffect(() => {
    const fetchCities = async () => {
      const data = await sendRequest("http://localhost:5000/api/cities/top10");

      if (!error) {
        setCities(data);
      }
    };
    fetchCities();
  }, [error, sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Header>Our Top Cities</Header>
      {isLoading && (
        <div className="center">
          <LoadingSpinner overlay />
        </div>
      )}
      {!isLoading && cities && cities.map((item) => <div>{item.city}</div>)}
    </>
  );
}
