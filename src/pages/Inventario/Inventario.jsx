import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Productos from "./Productos";
import Compras from "./Compras";
import Proveedores from "./Proveedores";
import Movimientos from "./Movimientos";
import Alertas from "./Alertas";

const tabs = [
    { key: "productos", label: "Productos" },
    { key: "compras", label: "Compras" },
    { key: "proveedores", label: "Proveedores" },
    { key: "movimientos", label: "Movimientos" },
    { key: "alertas", label: "Alertas" }
];

function Inventario() {
    const [activeTab, setActiveTab] = useState("productos");

    return (
        <Layout>
            <div style={{ color: "white" }}>
                <header style={{ marginBottom: 24 }}>
                    <h1>Inventario</h1>
                    <p>Gestiona productos, compras, proveedores, movimientos y alertas.</p>
                </header>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveTab(tab.key)}
                            style={{
                                padding: "12px 18px",
                                borderRadius: 10,
                                border: "none",
                                cursor: "pointer",
                                background: activeTab === tab.key ? "#2563eb" : "#1f2937",
                                color: activeTab === tab.key ? "white" : "#cbd5e1"
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div>
                    {activeTab === "productos" && <Productos />}
                    {activeTab === "compras" && <Compras />}
                    {activeTab === "proveedores" && <Proveedores />}
                    {activeTab === "movimientos" && <Movimientos />}
                    {activeTab === "alertas" && <Alertas />}
                </div>
            </div>
        </Layout>
    );
}

export default Inventario;
