import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  
  const tourId = null; 
  
  return (
    <section className="tours">
      <div className="container">
        <div className="section-title">
          <h2>Solicitar reserva</h2>
          <p>Preencha os dados e retornaremos com confirmação e formas de pagamento.</p>
        </div>
        
        {/* ✅ Passa o tourId para o BookingForm */}
        <BookingForm tourId={tourId} />
      </div>
    </section>
  );
}