import toast from "react-hot-toast";

export const alert = (message, type) => {
  if (type === "success") {
    return toast.success(message, { duration: 5000 });
  }
  return toast.error(message, { duration: 5000 });
};
