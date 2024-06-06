import React from "react";
import { Loader2 } from "lucide-react";

const SubmitButton = ({ isLoading, content }) => {
  return (
    <button
      type="submit"
      className="w-full btn flex items-center justify-center"
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : content}
    </button>
  );
};

export default SubmitButton;
