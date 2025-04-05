import {toast as toateeee} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = (type: "success" | "error" | "info", message: string) => {
    toateeee[type](message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
    });
}
