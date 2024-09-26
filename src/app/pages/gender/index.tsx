import { useState } from "react";

export default function GenderPage() {
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!gender) {
      setError(true);
    } else {
      setError(false);
      window.location.href = "/date-of-birth";
      localStorage.setItem("gender", gender);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <p className="text-lg text-gray-800 font-semibold mb-2">
        Select Gender :
      </p>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="Wanita"
            checked={gender === "Wanita"}
            onChange={() => setGender("Wanita")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800">Wanita (Female)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="Pria"
            checked={gender === "Pria"}
            onChange={() => setGender("Pria")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800">Pria (Male)</span>
        </label>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          Please select a gender to proceed.
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
