import { useNavigate } from "react-router";
import { CheckCircle2, Search, TrendingUp } from "lucide-react";

export function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-white p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-64 mb-8 relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
          <div className="absolute inset-8 bg-blue-200 rounded-full flex items-center justify-center">
            <div className="bg-blue-500 rounded-2xl p-6 shadow-lg transform -rotate-12">
              <Search className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
            <CheckCircle2 className="w-12 h-12 text-green-500 absolute -bottom-2 -right-2 bg-white rounded-full" />
            <TrendingUp className="w-10 h-10 text-blue-600 absolute -top-2 -left-2 bg-white rounded-full p-2" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Cek Kerusakan Laptop<br />Lebih Mudah
        </h2>

        <p className="text-gray-600 text-center text-lg px-4 leading-relaxed">
          Pilih gejala yang dialami laptop, lalu sistem akan memberikan hasil diagnosa awal.
        </p>
      </div>

      <button
        onClick={() => navigate("/home")}
        className="w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        Mulai Diagnosa
      </button>
    </div>
  );
}
