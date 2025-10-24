import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { valueContext } from "../../Component/Layout/RootLayout";

export default function CarDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const { user } = useContext(valueContext);
  const navigate = useNavigate();

  const singleCar = data.find((item) => item.vehicle.id === parseInt(id));

  if (!singleCar) {
    return (
      <div className="text-center mt-10 text-xl font-semibold text-red-500">
        Car not found!
      </div>
    );
  }

  const { company, vehicle } = singleCar;

  useEffect(() => {
    if (!user || !user?.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Car Image */}
        <div className="md:w-1/2">
          <img
            src={vehicle.photo}
            alt={vehicle.model}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Car Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-gray-600 mb-4">Type: {vehicle.type}</p>
            <p className="text-gray-600 mb-4">Year: {vehicle.year}</p>
            <p className="text-gray-600 mb-4">
              Daily Rate: ${vehicle.daily_rate}
            </p>
            <p className="text-gray-600 mb-4">Company: {company.name}</p>
          </div>

          {/* Company Logo */}
          <div className="mt-4 flex items-center gap-2">
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-medium">{company.name}</span>
          </div>

          {/* Actions */}
          <div className="mt-6">
            <button className="btn bg-pink-500 text-white w-full md:w-auto">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
