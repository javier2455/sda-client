import { toast } from "sonner";
import Toast from "../components/Toast/Toast";

export default function showToastMessages({title, description, type}) {
  return toast.custom((t) => (
    <Toast
      tittle={title}
      description={description}
      t={t}
      type={type}
    />
  ))
}
