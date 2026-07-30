export default function TopServices({ services }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#111827", color: "white" }}>
            <h3>Servicios más vendidos</h3>
            <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {services.map((service) => (
                    <div key={service.name} style={{ display: "flex", justifyContent: "space-between", padding: 16, background: "#1f2937", borderRadius: 12 }}>
                        <span>{service.name}</span>
                        <strong>{service.count}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
