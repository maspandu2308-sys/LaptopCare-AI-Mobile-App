import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, AlertCircle, CheckCircle2, Lightbulb, Save, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export function DiagnosisResultScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const symptoms = location.state?.symptoms || [];

  const getDiagnosis = () => {
    if (symptoms.includes("Laptop mati total") || symptoms.includes("Lampu indikator tidak menyala")) {
      return {
        issue: "Adaptor atau Charger Rusak",
        matchedSymptoms: ["Laptop mati total", "Lampu indikator tidak menyala"],
        suggestions: [
          "Periksa kabel charger apakah ada kerusakan fisik",
          "Coba gunakan charger lain untuk memastikan",
          "Cek port charging laptop apakah ada kotoran atau kerusakan",
          "Pastikan stop kontak berfungsi dengan baik",
        ],
      };
    } else if (symptoms.includes("Layar gelap") || symptoms.includes("Laptop menyala tetapi tidak tampil gambar")) {
      return {
        issue: "Kerusakan LCD atau Kabel Fleksibel",
        matchedSymptoms: ["Layar gelap", "Laptop menyala tetapi tidak tampil gambar"],
        suggestions: [
          "Cek brightness layar, mungkin terlalu redup",
          "Sambungkan ke monitor eksternal untuk memastikan VGA berfungsi",
          "Periksa kabel fleksibel LCD",
          "Bawa ke teknisi jika diperlukan penggantian LCD",
        ],
      };
    } else if (symptoms.includes("Laptop cepat panas") || symptoms.includes("Kipas berbunyi keras")) {
      return {
        issue: "Sistem Pendinginan Bermasalah",
        matchedSymptoms: ["Laptop cepat panas", "Kipas berbunyi keras"],
        suggestions: [
          "Bersihkan ventilasi dan kipas dari debu",
          "Gunakan cooling pad untuk membantu sirkulasi udara",
          "Ganti thermal paste processor",
          "Hindari penggunaan di permukaan yang menutup ventilasi",
        ],
      };
    } else {
      return {
        issue: "Kerusakan Umum",
        matchedSymptoms: symptoms.slice(0, 2),
        suggestions: [
          "Restart laptop untuk mengatasi masalah sementara",
          "Update driver dan sistem operasi",
          "Scan antivirus untuk memastikan tidak ada malware",
          "Konsultasikan dengan teknisi untuk pemeriksaan lebih lanjut",
        ],
      };
    }
  };

  const diagnosis = getDiagnosis();

  const handleSave = () => {
    const savedDiagnoses = JSON.parse(localStorage.getItem("diagnoses") || "[]");
    const newDiagnosis = {
      date: new Date().toISOString(),
      symptoms,
      result: diagnosis.issue,
    };
    savedDiagnoses.unshift(newDiagnosis);
    localStorage.setItem("diagnoses", JSON.stringify(savedDiagnoses));
    toast.success("Hasil diagnosa berhasil disimpan!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Hasil Diagnosa</h1>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-start space-x-3 mb-4">
            <div className="bg-red-100 rounded-full p-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Kemungkinan Kerusakan</p>
              <h2 className="text-xl font-bold text-gray-800">{diagnosis.issue}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold text-gray-800">Gejala yang Cocok</h3>
          </div>
          <ul className="space-y-2">
            {diagnosis.matchedSymptoms.map((symptom, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span className="text-gray-600">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md border border-blue-200">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-800">Saran Penanganan</h3>
          </div>
          <ul className="space-y-3">
            {diagnosis.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 bg-white border-t space-y-3">
        <button
          onClick={handleSave}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:bg-green-600 transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Simpan Hasil</span>
        </button>
        <button
          onClick={() => navigate("/diagnosa")}
          className="w-full bg-white border-2 border-blue-500 text-blue-500 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Diagnosa Ulang</span>
        </button>
      </div>
    </div>
  );
}
