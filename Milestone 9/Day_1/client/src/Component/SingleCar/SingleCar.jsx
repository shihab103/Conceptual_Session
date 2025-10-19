import { useNavigate } from "react-router";

export default function SingleCar({ car }) {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-50 w-full object-cover" src={car.vehicle.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.company.name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/cardDetails/${car.vehicle.id}`)}
            className="btn bg-pink-500 text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
