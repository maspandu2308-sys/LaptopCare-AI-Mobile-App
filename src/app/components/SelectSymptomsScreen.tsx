import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";

const symptoms = [
  "Laptop mati total",
  "Lampu indikator tidak menyala",
  "Baterai tidak mengisi",
  "Layar gelap",
  "Laptop menyala tetapi tidak tampil gambar",
  "Laptop cepat panas",
  "Kipas berbunyi keras",
  "Keyboard tidak berfungsi",
  "Laptop sering restart sendiri",
  "Bunyi beep saat dinyalakan",
];

export function SelectSymptomsScreen() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleProcess = () => {
    if (selectedSymptoms.length > 0) {
      navigate("/hasil", { state: { symptoms: selectedSymptoms } });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 sticky top-0 z-10">
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Pilih Gejala Kerusakan</h1>
        </div>
        <p className="text-blue-100 ml-10">
          Pilih gejala yang dialami laptop kamu
        </p>
      </div>

      <div className="flex-1 p-6">
        <div className="space-y-3">
          {symptoms.map((symptom, index) => (
            <button
              key={index}
              onClick={() => toggleSymptom(symptom)}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center space-x-3 ${
                selectedSymptoms.includes(symptom)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              {selectedSymptoms.includes(symptom) ? (
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
              )}
              <span className={`text-left ${
                selectedSymptoms.includes(symptom)
                  ? "text-blue-700 font-medium"
                  : "text-gray-700"
              }`}>
                {symptom}
              </span>
            </button>
          ))}
        </div>

        {selectedSymptoms.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 font-medium">
              {selectedSymptoms.length} gejala dipilih
            </p>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t sticky bottom-0">
        <button
          onClick={handleProcess}
          disabled={selectedSymptoms.length === 0}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
            selectedSymptoms.length > 0
              ? "bg-blue-500 text-white shadow-lg hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Proses Diagnosa
        </button>
      </div>
    </div>
  );
}
