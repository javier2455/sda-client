import { toast } from "sonner";
import Toast from "../components/Toast/Toast";

export default function showToastMessages({title, description, type, duration = 4000}) {
  return toast.custom((t) => (
    <Toast
      title={title}
      description={description}
      t={t}
      type={type}     
    />
  ), {duration})
}
