import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles, GitBranch, Target, Laptop } from "lucide-react";

export function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/home")}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Tentang Aplikasi</h1>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white rounded-2xl p-6">
              <Laptop className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">LaptopCare AI</h2>
          <p className="text-blue-100 text-center">
            Sistem Pakar Diagnosa Kerusakan Laptop
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span>Deskripsi</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Aplikasi ini menggunakan metode <span className="font-semibold text-blue-600">Forward Chaining</span> untuk mencocokkan gejala kerusakan laptop dengan aturan sistem pakar. Sistem akan memproses gejala yang dipilih pengguna dan memberikan diagnosa serta saran penanganan awal.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Tema</p>
              <p className="font-semibold text-gray-800">Sistem Pakar</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-lg p-2">
              <GitBranch className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Metode</p>
              <p className="font-semibold text-gray-800">Forward Chaining</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <Target className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Output</p>
              <p className="font-semibold text-gray-800">Hasil diagnosa dan saran penanganan</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-3">Cara Penggunaan</h3>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Pilih menu "Mulai Diagnosa" dari halaman utama</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <span>Pilih gejala yang dialami laptop Anda</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
              <span>Tekan "Proses Diagnosa" untuk melihat hasil</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
              <span>Simpan hasil diagnosa atau lakukan diagnosa ulang</span>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md text-center">
          <p className="text-sm text-gray-500 mb-1">Versi Aplikasi</p>
          <p className="font-semibold text-gray-800">1.0.0</p>
          <p className="text-xs text-gray-400 mt-3">© 2026 LaptopCare AI</p>
        </div>
      </div>
    </div>
  );
}

function FileText({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}
