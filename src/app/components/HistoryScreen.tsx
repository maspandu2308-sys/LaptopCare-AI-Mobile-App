import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, AlertCircle, FileText, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface DiagnosisHistory {
  date: string;
  symptoms: string[];
  result: string;
}

export function HistoryScreen() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<DiagnosisHistory[]>([]);

  useEffect(() => {
    const savedDiagnoses = JSON.parse(localStorage.getItem("diagnoses") || "[]");
    setHistory(savedDiagnoses);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const deleteItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem("diagnoses", JSON.stringify(newHistory));
    toast.success("Riwayat berhasil dihapus");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Riwayat Diagnosa</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-gray-100 rounded-full p-8 mb-4">
              <FileText className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-gray-500 text-center text-lg mb-6">
              Belum ada riwayat diagnosa
            </p>
            <button
              onClick={() => navigate("/diagnosa")}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
            >
              Mulai Diagnosa
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <button
                    onClick={() => deleteItem(index)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Hasil Diagnosa</p>
                    <p className="font-semibold text-gray-800">{item.result}</p>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-xs text-gray-500 mb-2">Gejala Utama:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.symptoms.slice(0, 3).map((symptom, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                    {item.symptoms.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        +{item.symptoms.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
