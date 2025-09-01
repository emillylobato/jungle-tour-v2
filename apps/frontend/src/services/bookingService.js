import api from './api'; 

export const createBooking = async (bookingData) => {
  try {
   
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    throw error; 
  }
};
