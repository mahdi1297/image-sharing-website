import toast from "react-hot-toast";

export async function showSuccessToast(message: string) {
  toast.success(message);
}

export async function showErrorToast(message: string) {
  toast.error(message);
}
