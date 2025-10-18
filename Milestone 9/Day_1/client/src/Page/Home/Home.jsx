import React from "react";
import Banner from "../../Component/Banner/Banner";
import SingleCar from "../../Component/SingleCar/SingleCar";
import { useLoaderData } from "react-router";

export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner />
      <div>
        <h1 className="text-center my-6 text-4xl font-semibold">All Cards</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-20">
          {data.map((car) => (
            <SingleCar key={car.vehicle.id} car={car}></SingleCar>
          ))}
        </div>
      </div>
    </>
  );
}
