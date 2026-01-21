import { toast, type ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationType = "success" | "error" | "info" | "warning";

interface NotifyParams {
  message: string;
  type?: NotificationType;
  duration?: number;
  position?: ToastOptions["position"];
}

export const notify = ({
  message,
  type = "info",
  duration = 3000,
  position = "top-right",
}: NotifyParams) => {
  toast[type](message, {
    position,
    autoClose: duration,
    pauseOnHover: true,
    closeOnClick: true,
  });
};
