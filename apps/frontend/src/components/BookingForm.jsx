import { useState } from "react";
import { createBooking } from "../services/bookingService";

export default function BookingForm({ tourId }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    pessoas: 1,
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    
    try {
      await createBooking({
        tourId,
        ...form,
        pessoas: Number(form.pessoas),
      });
      
      setOk(true);
      // Limpa o formulário após sucesso
      setForm({
        nome: "",
        email: "",
        telefone: "",
        data: "",
        pessoas: 1,
        mensagem: "",
      });
    } catch (e) {
      setErr(e?.response?.data?.message || "Falha ao enviar reserva");
    } finally {
      setLoading(false);
    }
  };

  // ✅ RETORNE O JSX! (isso estava faltando no seu código)
  return (
    <form onSubmit={onSubmit} className="booking-form">
      {ok && <p className="success">Reserva enviada com sucesso!</p>}
      {err && <p className="error">{err}</p>}

      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        value={form.nome}
        onChange={onChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={onChange}
        required
      />

      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={onChange}
        required
      />

      <input
        type="date"
        name="data"
        value={form.data}
        onChange={onChange}
        required
      />

      <input
        type="number"
        name="pessoas"
        min="1"
        placeholder="Número de pessoas"
        value={form.pessoas}
        onChange={onChange}
        required
      />

      <textarea
        name="mensagem"
        placeholder="Observações"
        value={form.mensagem}
        onChange={OnChange}
        rows="4"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar Reserva"}
      </button>
    </form>
  );
}