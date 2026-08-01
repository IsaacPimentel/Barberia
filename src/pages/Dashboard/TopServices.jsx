export default function TopServices({ services }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", color: "#0F172A", border: "1px solid #E2E8F0" }}>
            <h3>Servicios más vendidos</h3>
            <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {services.map((service) => (
                    <div key={service.name} style={{ display: "flex", justifyContent: "space-between", padding: 16, background: "#F8FAFC", borderRadius: 12 }}>
                        <span>{service.name}</span>
                        <strong>{service.count}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
