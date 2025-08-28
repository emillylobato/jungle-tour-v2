import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ClientePage from "./pages/ClientePage";
import FornecedorPage from "./pages/FornecedorPage";
import EstabelecimentosPage from "./pages/EstabelecimentosPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* público */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* cliente */}
          <Route
            path="/cliente"
            element={
              <PrivateRoute roles={["cliente"]}>
                <ClientePage />
              </PrivateRoute>
            }
          />

          {/* fornecedor */}
          <Route
            path="/fornecedor"
            element={
              <PrivateRoute roles={["fornecedor"]}>
                <FornecedorPage />
              </PrivateRoute>
            }
          />

          {/* público */}
          <Route path="/" element={<EstabelecimentosPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
