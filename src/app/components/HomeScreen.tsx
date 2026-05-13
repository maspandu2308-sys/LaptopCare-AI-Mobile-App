import { useNavigate } from "react-router";
import { ClipboardList, History, FileText, Info, ChevronRight, Laptop } from "lucide-react";

export function HomeScreen() {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: ClipboardList,
      title: "Mulai Diagnosa",
      description: "Diagnosa kerusakan laptop kamu",
      color: "bg-blue-500",
      path: "/diagnosa",
    },
    {
      icon: History,
      title: "Riwayat Diagnosa",
      description: "Lihat hasil diagnosa sebelumnya",
      color: "bg-green-500",
      path: "/riwayat",
    },
    {
      icon: FileText,
      title: "Daftar Gejala",
      description: "Lihat semua gejala kerusakan",
      color: "bg-purple-500",
      path: "/diagnosa",
    },
    {
      icon: Info,
      title: "Tentang Sistem",
      description: "Informasi aplikasi",
      color: "bg-orange-500",
      path: "/tentang",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-[3rem] p-8 pb-12">
        <h1 className="text-2xl text-white mb-2">Halo, Pengguna 👋</h1>
        <p className="text-blue-100 text-lg">Apa masalah laptop kamu hari ini?</p>
      </div>

      <div className="p-6 -mt-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 rounded-2xl p-6">
              <Laptop className="w-20 h-20 text-blue-500" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-center text-gray-600">
            Sistem pakar diagnosa kerusakan laptop menggunakan metode Forward Chaining
          </p>
        </div>

        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all flex items-center space-x-4 group"
            >
              <div className={`${item.color} rounded-xl p-3`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
