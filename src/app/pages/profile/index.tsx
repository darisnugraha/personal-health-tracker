export default function ProfilePage() {
  const categories = [
    { range: [0, 18.5], label: "Underweight", color: "bg-blue-500" },
    { range: [18.5, 22.9], label: "Normal", color: "bg-green-500" },
    { range: [23, 25], label: "Overweight", color: "bg-yellow-500" },
    { range: [25, Infinity], label: "Obesity", color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      {localStorage.getItem("BMI") !== null && (
        <div>
          <h2 className="text-lg font-semibold">
            Your BMI: {Number(localStorage.getItem("BMI"))?.toFixed(3)}
          </h2>
          <div className="w-full h-10 flex">
            {categories.map((category, index) => {
              const isActive =
                Number(localStorage.getItem("BMI")) >= category.range[0] &&
                Number(localStorage.getItem("BMI")) < category.range[1];
              return (
                <div
                  key={index}
                  className={`${category.color} h-full flex-1 ${
                    isActive ? "border-4 border-black" : ""
                  }`}
                  title={category.label}
                >
                  {isActive && (
                    <span className="text-white">{category.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
