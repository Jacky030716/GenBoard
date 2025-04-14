import { FeedbackForm } from "./FeedbackForm";

export const FeedbackMainSection = () => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">
        Give your feedback.
      </h1>

      {/* Feedback Form */}
      <div className="w-full">
        <FeedbackForm />
      </div>
    </div>
  );
};
