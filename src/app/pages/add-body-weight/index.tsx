import { useState } from "react";

export default function AddBodyWeightPage() {
  const [errorweight, setErrorWeight] = useState<string>("");
  const [errorheight, setErrorHeight] = useState<string>("");
  const [errorvis, setErrorVis] = useState<string>("");
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    body_fat: "",
    muscle_mass: "",
    visceral_fat: "",
    basal_metabolism: "",
  });

  const normalizeInput2Digits = (input: string) => {
    const normalizedValue = input
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^(\d{2})\d+/g, "$1")
      .replace(/^(\d+)(\.\d{0,2})?.*/, "$1$2");
    return normalizedValue;
  };

  const normalizeInput3Digits = (input: string) => {
    const normalizedValue = input
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^(\d{3})\d+/g, "$1")
      .replace(/^(\d+)(\.\d{0,2})?.*/, "$1$2");
    return normalizedValue;
  };

  const normalizeVisceralFat = (input: string) => {
    const numValue = Number(input);
    if (input === "") {
      setErrorVis("");
      return String(input);
    } else if (
      !isNaN(numValue) &&
      numValue >= 1 &&
      numValue <= 12 &&
      Number.isInteger(numValue)
    ) {
      setErrorVis("");
      return String(numValue);
    } else {
      setErrorVis("Input must be an integer between 1 and 12.");
      return "";
    }
  };

  const normalizeBasal = (input: string) => {
    const normalizedValue = input.replace(/\D/g, "").slice(0, 4);
    return normalizedValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (
      name !== "weight" &&
      name !== "height" &&
      name !== "visceral_fat" &&
      name !== "basal_metabolism"
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: normalizeInput2Digits(value),
      }));
    } else if (name === "weight" || name === "height") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: normalizeInput3Digits(value),
      }));
    } else if (name === "visceral_fat") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: normalizeVisceralFat(value),
      }));
    } else if (name === "basal_metabolism") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: normalizeBasal(value),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.weight && !formData.height) {
      setErrorWeight("This field is required.");
      setErrorHeight("This field is required.");
      return;
    }
    if (!formData.weight) {
      setErrorWeight("This field is required.");
      return;
    }
    if (!formData.height) {
      setErrorHeight("This field is required.");
      return;
    }

    setErrorWeight("");
    setErrorHeight("");
    setErrorVis("");
    localStorage.setItem("profile_data", JSON.stringify(formData));
    const bmi =
      parseFloat(formData.weight) /
      ((parseFloat(formData.height) / 100) *
        (parseFloat(formData.height) / 100));
    localStorage.setItem("BMI", String(bmi));
    window.location.href = "profile";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4 mt-5">
          Fill Your Data Information Below :
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Weight (Kg) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Current Weight"
          />
          {errorweight && <p style={{ color: "red" }}>{errorweight}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Height (Cm) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Current Height"
          />
          {errorheight && <p style={{ color: "red" }}>{errorheight}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body Fat (%) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="body_fat"
            value={formData.body_fat}
            onChange={handleChange}
            placeholder="Current Body Fat"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Muscle Mass (Kg) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="muscle_mass"
            value={formData.muscle_mass}
            onChange={handleChange}
            placeholder="Current Muscle Mass"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Visceral Fat :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="visceral_fat"
            value={formData.visceral_fat}
            onChange={handleChange}
            placeholder="Current Visceral Fat"
          />
          {errorvis && <p style={{ color: "red" }}>{errorvis}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Basal Metabolism (Kcal) :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="numberInput"
            name="basal_metabolism"
            value={formData.basal_metabolism}
            onChange={handleChange}
            placeholder="Current Basal Metabolism"
          />
        </div>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
