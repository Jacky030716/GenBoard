import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import TraineeDashboard from "./pages/trainee/TraineeDashboard.tsx";
import TraineeOnboarding from "./pages/trainee/TraineeOnboarding.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";
import TraineeSignUp from "./pages/trainee/TraineeSignUp.tsx";
import TrainerSignUp from "./pages/trainer/TrainerSignUp.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route index element={<App />} /> */}

        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="trainee" element={<RootLayout />}>
          <Route path="signup" element={<TraineeSignUp />} />

          <Route path="dashboard" element={<TraineeDashboard />} />
          <Route path="onboarding" element={<TraineeOnboarding />} />
          <Route path="meetings" element={<TraineeOnboarding />} />
        </Route>

        <Route path="trainer" element={<RootLayout />}>
          <Route path="signup" element={<TrainerSignUp />} />

          <Route path="dashboard" element={<TraineeDashboard />} />
          <Route path="onboarding" element={<TraineeOnboarding />} />
          <Route path="meetings" element={<TraineeOnboarding />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
