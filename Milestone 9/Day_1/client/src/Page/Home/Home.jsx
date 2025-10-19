import React, { useState } from "react";
import Banner from "../../Component/Banner/Banner";
import SingleCar from "../../Component/SingleCar/SingleCar";
import { useLoaderData } from "react-router";

export default function Home() {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const visibleCars = showAll ? data : data.slice(0, 6);

  return (
    <>
      <Banner />

      <div>
        <h1 className="text-center my-6 text-4xl font-semibold">All Cars</h1>

        {/* card grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-20">
          {visibleCars.map((car) => (
            <SingleCar key={car.vehicle?.id || car.id} car={car} />
          ))}
        </div>

        {/* see more / see less button */}
        {data.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn mb-5 bg-pink-500 text-white"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
