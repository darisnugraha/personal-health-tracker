import { useState } from "react";

export default function DateOfBirthPage() {
  const [startdate, setDate] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!startdate) {
      setError(true);
    } else {
      setError(false);
      window.location.href = "/add-body-weight";
      localStorage.setItem("date_of_birth", startdate);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <p className="text-lg text-gray-800 font-semibold mb-2">
        Date Of Birth :
      </p>
      <div className="flex items-center space-x-4">
        <input
          type="date"
          id="dateOfBirth"
          value={startdate}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          Please select a date to proceed.
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 mt-5"
      >
        Next
      </button>
    </div>
  );
}
