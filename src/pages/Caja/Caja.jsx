import { useMemo, useState } from "react";
import Layout from "../../components/layout/Layout";
import AbrirCaja from "./AbrirCaja";
import CerrarCaja from "./CerrarCaja";
import Movimientos from "./Movimientos";
import Historial from "./Historial";

const tabs = [
    { key: "caja", label: "Caja" },
    { key: "abrir", label: "Abrir Caja" },
    { key: "cerrar", label: "Cerrar Caja" },
    { key: "movimientos", label: "Movimientos" },
    { key: "historial", label: "Historial" }
];

const clients = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "Ana Gómez" },
    { id: 3, name: "Luis Díaz" }
];

const products = [
    { id: 1, name: "Shampoo profesional", price: 45 },
    { id: 2, name: "Gel para barba", price: 30 },
    { id: 3, name: "Cera moldeable", price: 25 }
];

const services = [
    { id: 1, name: "Corte clásico", price: 70 },
    { id: 2, name: "Barba", price: 55 },
    { id: 3, name: "Corte + Barba", price: 110 }
];

function Caja() {
    const [activeTab, setActiveTab] = useState("caja");
    const [clientSearch, setClientSearch] = useState("");
    const [productSearch, setProductSearch] = useState("");
    const [serviceSearch, setServiceSearch] = useState("");
    const [selectedClient, setSelectedClient] = useState(null);
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0);

    const filteredClients = useMemo(
        () => clients.filter((client) => client.name.toLowerCase().includes(clientSearch.toLowerCase())),
        [clientSearch]
    );

    const filteredProducts = useMemo(
        () => products.filter((item) => item.name.toLowerCase().includes(productSearch.toLowerCase())),
        [productSearch]
    );

    const filteredServices = useMemo(
        () => services.filter((item) => item.name.toLowerCase().includes(serviceSearch.toLowerCase())),
        [serviceSearch]
    );

    const subtotal = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cart]
    );

    const total = useMemo(
        () => Math.max(0, subtotal - Number(discount)),
        [subtotal, discount]
    );

    const handleAddToCart = (item, type) => {
        setCart((current) => {
            const existing = current.find((cartItem) => cartItem.type === type && cartItem.id === item.id);
            if (existing) {
                return current.map((cartItem) =>
                    cartItem.id === item.id && cartItem.type === type
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...current, { ...item, type, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (item) => {
        setCart((current) => current.filter((cartItem) => cartItem.id !== item.id || cartItem.type !== item.type));
    };

    const handleCharge = () => {
        if (!selectedClient) {
            alert("Selecciona un cliente antes de cobrar.");
            return;
        }
        alert(`Cobrado por S/ ${total.toFixed(2)} a ${selectedClient.name}`);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <Layout>
            <div className="caja-page" style={{ color: "#0F172A" }}>
                <header style={{ marginBottom: 24 }}>
                    <h1 style={{ marginBottom: 8 }}>Caja</h1>
                    <p>Controla apertura, cierre, movimientos e historial de caja.</p>
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
                                background: activeTab === tab.key ? "#2563eb" : "#E2E8F0",
                                color: activeTab === tab.key ? "white" : "#0F172A"
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div>
                    {activeTab === "caja" && (
                        <div style={{ display: "grid", gap: 24 }}>
                            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "2fr 1fr" }}>
                                <section style={{ display: "grid", gap: 16 }}>
                                    <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                                        <h2>Buscar cliente</h2>
                                        <input
                                            value={clientSearch}
                                            onChange={(e) => setClientSearch(e.target.value)}
                                            placeholder="Buscar cliente..."
                                            style={{ width: "100%", padding: 12, borderRadius: 12, background: "#F8FAFC", color: "#0F172A", border: "1px solid #CBD5E1" }}
                                        />
                                        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                                            {filteredClients.map((client) => (
                                                <button
                                                    key={client.id}
                                                    type="button"
                                                    onClick={() => setSelectedClient(client)}
                                                    style={{
                                                        padding: 12,
                                                        textAlign: "left",
                                                        borderRadius: 10,
                                                        background: selectedClient?.id === client.id ? "#2563eb" : "#E2E8F0",
                                                        color: selectedClient?.id === client.id ? "white" : "#0F172A",
                                                        border: "none",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    {client.name}
                                                </button>
                                            ))}
                                        </div>
                                        {selectedClient && (
                                            <div style={{ marginTop: 20, padding: 16, borderRadius: 16, background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                                                <p style={{ margin: 0, color: "#64748B" }}>Cliente seleccionado</p>
                                                <strong>{selectedClient.name}</strong>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                                        <h2>Buscar producto</h2>
                                        <input
                                            value={productSearch}
                                            onChange={(e) => setProductSearch(e.target.value)}
                                            placeholder="Buscar producto..."
                                            style={{ width: "100%", padding: 12, borderRadius: 12, background: "#F8FAFC", color: "#0F172A", border: "1px solid #CBD5E1" }}
                                        />
                                        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                                            {filteredProducts.map((product) => (
                                                <button
                                                    key={product.id}
                                                    type="button"
                                                    onClick={() => handleAddToCart(product, "product")}
                                                    style={{ padding: 12, borderRadius: 10, background: "#E2E8F0", color: "#0F172A", border: "none", cursor: "pointer" }}
                                                >
                                                    {product.name} — S/ {product.price}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                                        <h2>Buscar servicio</h2>
                                        <input
                                            value={serviceSearch}
                                            onChange={(e) => setServiceSearch(e.target.value)}
                                            placeholder="Buscar servicio..."
                                            style={{ width: "100%", padding: 12, borderRadius: 12, background: "#F8FAFC", color: "#0F172A", border: "1px solid #CBD5E1" }}
                                        />
                                        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                                            {filteredServices.map((service) => (
                                                <button
                                                    key={service.id}
                                                    type="button"
                                                    onClick={() => handleAddToCart(service, "service")}
                                                    style={{ padding: 12, borderRadius: 10, background: "#E2E8F0", color: "#0F172A", border: "none", cursor: "pointer" }}
                                                >
                                                    {service.name} — S/ {service.price}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <aside style={{ display: "grid", gap: 16 }}>
                                    <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF" }}>
                                        <h2>Carrito</h2>
                                        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ textAlign: "left", padding: 10, color: "#94a3b8" }}>Item</th>
                                                    <th style={{ textAlign: "right", padding: 10, color: "#94a3b8" }}>Qty</th>
                                                    <th style={{ textAlign: "right", padding: 10, color: "#94a3b8" }}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => (
                                                    <tr key={`${item.type}-${item.id}`}>
                                                        <td style={{ padding: 10, borderTop: "1px solid rgba(15,23,42,0.08)" }}>{item.name}</td>
                                                        <td style={{ padding: 10, borderTop: "1px solid rgba(15,23,42,0.08)", textAlign: "right" }}>{item.quantity}</td>
                                                        <td style={{ padding: 10, borderTop: "1px solid rgba(15,23,42,0.08)", textAlign: "right" }}>S/ {item.price * item.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
                                            <label style={{ display: "grid", gap: 8 }}>
                                                Descuento
                                                <input
                                                    type="number"
                                                    value={discount}
                                                    onChange={(e) => setDiscount(Number(e.target.value))}
                                                    placeholder="0"
                                                    style={{ width: "100%", padding: 12, borderRadius: 12, background: "#F8FAFC", color: "#0F172A", border: "1px solid #CBD5E1" }}
                                                />
                                            </label>
                                            <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B" }}>
                                                <span>Subtotal</span>
                                                <strong>S/ {subtotal.toFixed(2)}</strong>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B" }}>
                                                <span>Total</span>
                                                <strong>S/ {total.toFixed(2)}</strong>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleCharge}
                                                style={{ padding: "14px 20px", borderRadius: 12, border: "none", background: "#16a34a", color: "white", cursor: "pointer" }}
                                            >
                                                Cobrar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handlePrint}
                                                style={{ padding: "14px 20px", borderRadius: 12, border: "none", background: "#2563eb", color: "white", cursor: "pointer" }}
                                            >
                                                Imprimir comprobante
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    )}

                    {activeTab === "abrir" && <AbrirCaja />}
                    {activeTab === "cerrar" && <CerrarCaja />}
                    {activeTab === "movimientos" && <Movimientos />}
                    {activeTab === "historial" && <Historial />}
                </div>
            </div>
        </Layout>
    );
}

export default Caja;
