const movimientos = [
    { id: 1, type: "Ingreso", amount: "S/ 240", description: "Pago cliente" },
    { id: 2, type: "Egreso", amount: "S/ 120", description: "Compra de productos" },
    { id: 3, type: "Ingreso", amount: "S/ 180", description: "Servicio de barbería" }
];

function Movimientos() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#111827" }}>
            <h2>Movimientos</h2>
            <p style={{ color: "#94a3b8" }}>Registra ingresos y egresos diarios en caja.</p>
            <div style={{ marginTop: 20, display: "grid", gap: 16 }}>
                {movimientos.map((mov) => (
                    <div key={mov.id} style={{ padding: 16, borderRadius: 14, background: "#1f2937" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                            <strong>{mov.type}</strong>
                            <span>{mov.amount}</span>
                        </div>
                        <p style={{ margin: 0, color: "#94a3b8" }}>{mov.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movimientos;
