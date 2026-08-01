const alerts = [
    { id: 1, product: "Cera moldeable", stock: 7, threshold: 10 },
    { id: 2, product: "Gel para barba", stock: 18, threshold: 20 }
];

function Alertas() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", color: "#0F172A", border: "1px solid #E2E8F0" }}>
            <h2>Alertas</h2>
            <p style={{ color: "#64748B" }}>Productos que requieren reposición o atención inmediata.</p>
            <div style={{ marginTop: 20, display: "grid", gap: 16 }}>
                {alerts.map((alert) => (
                    <div key={alert.id} style={{ padding: 16, borderRadius: 14, background: alert.stock <= alert.threshold ? "#fee2e2" : "#F8FAFC" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                            <strong>{alert.product}</strong>
                            <span>{alert.stock} unidades</span>
                        </div>
                        <p style={{ margin: 0, color: "#fca5a5" }}>Umbral: {alert.threshold}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Alertas;
