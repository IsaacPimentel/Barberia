import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Clientes from "./pages/Clientes/Clientes";
import Barberos from "./pages/Barberos/Barberos.page";
import Servicios from "./pages/Servicios/Servicios";
import Reservas from "./pages/Reservas/Reservas";
import Caja from "./pages/Caja/Caja";
import Inventario from "./pages/Inventario/Inventario";
import Reportes from "./pages/Reportes/Reportes";
import Configuracion from "./pages/Configuracion/Configuracion";
import Login from "./pages/Login/Login";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/clientes" element={<Clientes />} />

            <Route path="/barberos" element={<Barberos />} />

            <Route path="/servicios" element={<Servicios />} />

            <Route path="/reservas" element={<Reservas />} />

            <Route path="/caja" element={<Caja />} />

            <Route path="/inventario" element={<Inventario />} />

            <Route path="/reportes" element={<Reportes />} />

            <Route path="/configuracion" element={<Configuracion />} />

            <Route path="/login" element={<Login />} />

        </Routes>

    );

}

export default App;
