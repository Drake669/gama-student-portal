import toast from "react-hot-toast";

export const alert = (res, type) => {
  let message = "";
  console.log(res);
  if (type === "success") {
    message = res;
    return toast.success(message, { duration: 5000 });
  }
  message = res?.data?.message;
  return toast.error(message, { duration: 5000 });
};
