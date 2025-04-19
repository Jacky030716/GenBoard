import "./index.css";
import { StrictMode } from "react";
import { pdfjs } from "react-pdf";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router";

import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import TraineeOnboarding from "./pages/trainee/TraineeOnboarding.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";
import TraineeSignUp from "./pages/trainee/TraineeSignUp.tsx";
import TrainerSignUp from "./pages/trainer/TrainerSignUp.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import TrainerDashboard from "./pages/trainer/TrainerDashboard.tsx";
import TrainerMeeting from "./pages/trainer/TrainerMeeting.tsx";
import TraineeDashboard from "./pages/trainee/TraineeDashboard.tsx";
import TraineeEvaluationPage from "./pages/trainer/TraineeEvaluationPage.tsx";
import TraineeFeedback from "./pages/trainee/TraineeFeedback.tsx";
import TraineeSchedule from "./pages/trainee/TraineeSchedule.tsx";
import { Toaster } from "sonner";
import { Chatbot } from "./features/chatbot/chatbot.tsx";
import TraineeGrade from "./pages/trainee/TraineeGrade.tsx";
import TraineeOnboardingModule from "./pages/trainee/TraineeOnboardingModule.tsx";
import TraineeMeetingSummary from "./pages/trainee/TraineeMeetingSummary.tsx";
import TraineeMeetingSummaryDetail from "./pages/trainee/TraineeMeetingSummaryDetail.tsx";

import Test from "./ni_testing/Test.tsx";
import TraineeStartMeeting from "./pages/trainee/TraineeStartMeeting.tsx";
import TraineeMeetingEvaluation from "./pages/trainee/TraineeMeetingEvaluation.tsx";

export const queryClient = new QueryClient();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors />
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* <Route index element={<App />} /> */}

          <Route element={<AuthLayout />}>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
          </Route>

          <Route path="trainee" element={<RootLayout />}>
            <Route path="signup" element={<TraineeSignUp />} />

            <Route path="dashboard" element={<TraineeDashboard />} />
            <Route path="onboarding" element={<TraineeOnboarding />} />
            <Route path="onboarding/grade" element={<TraineeGrade />} />
            <Route
              path="onboarding/plan/:month"
              element={<TraineeOnboardingModule />}
            />
            <Route
              path="onboarding/plan/:month/:taskId"
              element={<TraineeOnboardingModule />}
            />
            <Route path="schedule" element={<TraineeSchedule />} />
            <Route path="meeting-summary" element={<TraineeMeetingSummary />} />
            <Route
              path="meeting-summary/:meetingId"
              element={<TraineeMeetingEvaluation />}
            />

            <Route path="start-meeting" element={<TraineeStartMeeting />} />
            {/* <Route
              path="start-meeting/:meetingId"
              element={<TraineeMeetingEvaluation />}
            /> */}

            <Route path="feedback" element={<TraineeFeedback />} />
          </Route>

          <Route path="trainer" element={<RootLayout />}>
            <Route path="signup" element={<TrainerSignUp />} />

            <Route path="dashboard" element={<TrainerDashboard />} />
            <Route path="create-meeting" element={<TrainerMeeting />} />
            <Route
              path="evaluation/:traineeId"
              element={<TraineeEvaluationPage />}
            />
          </Route>
        </Routes>
      </Router>
      <Chatbot />
      {/* <BotpressChat /> */}
    </QueryClientProvider>
  </StrictMode>
);
