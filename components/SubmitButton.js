import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SubmitButton = ({ isLoading, content, full }) => {
  return (
    <button
      type="submit"
      className={cn("btn flex items-center justify-center", full && "w-full")}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : content}
    </button>
  );
};

export default SubmitButton;
