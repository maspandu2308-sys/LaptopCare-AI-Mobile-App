import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Laptop, Sparkles } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
          <Laptop className="w-20 h-20 text-blue-500" strokeWidth={1.5} />
          <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white mb-3 text-center">
        LaptopCare AI
      </h1>

      <p className="text-blue-100 text-center text-lg px-6">
        Diagnosa Kerusakan Laptop<br />dengan Sistem Pakar
      </p>

      <div className="mt-12 flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
}
