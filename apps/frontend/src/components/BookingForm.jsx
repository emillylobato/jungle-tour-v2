import { useState } from "react";
import { createBooking } from "../services/bookingService";

export default function BookingForm({ tourId }) {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    data: "", pessoas: 1, mensagem: ""
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setErr("");
    try {
      await createBooking({ tourId, ...form, pessoas: Number(form.pessoas) });
      setOk(true);
      setForm({ nome:"",email:"",telefone:"",data:"",pessoas:1,mensagem:"" });
    } catch (e) {
      setErr(e?.response?.data?.message || "Falha ao enviar reserva");
    } finally {
      setLoading(false);
    }
  };
}