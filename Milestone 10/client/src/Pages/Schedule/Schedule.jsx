import { useEffect, useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getSchedule")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScheduleData(data);
      });
  }, []);

  const handleDelete = (id) => {
    // SweetAlert confirmation box
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/scheduleDelete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = scheduleData.filter(
                (schedule) => schedule._id !== id
              );
              setScheduleData(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Schedule has been deleted successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  const handleUpdate = () => {
    console.log("update");
  };

  return (
    <div className="px-20 mt-10">
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Serial</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {scheduleData.map((data, index) => (
              <tr
                key={data._id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{data.title}</td>
                <td className="py-3 px-4">{data.day}</td>
                <td className="py-3 px-4">{data.date}</td>
                <td className="py-3 px-4">{data.time}</td>
                <td className="py-3 flex gap-4 px-4">
                  <Trash2
                    onClick={() => handleDelete(data._id)}
                    className="cursor-pointer text-red-600 hover:text-red-800"
                  />
                  <SquarePen
                    onClick={handleUpdate}
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
