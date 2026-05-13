import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { SplashScreen } from "./components/SplashScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { HomeScreen } from "./components/HomeScreen";
import { SelectSymptomsScreen } from "./components/SelectSymptomsScreen";
import { DiagnosisResultScreen } from "./components/DiagnosisResultScreen";
import { HistoryScreen } from "./components/HistoryScreen";
import { AboutScreen } from "./components/AboutScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: SplashScreen },
      { path: "onboarding", Component: OnboardingScreen },
      { path: "home", Component: HomeScreen },
      { path: "diagnosa", Component: SelectSymptomsScreen },
      { path: "hasil", Component: DiagnosisResultScreen },
      { path: "riwayat", Component: HistoryScreen },
      { path: "tentang", Component: AboutScreen },
    ],
  },
]);
