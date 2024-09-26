export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to the Scale App
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your personal health tracker!
      </p>
      <button
        onClick={() => (window.location.href = "/gender")}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
}
