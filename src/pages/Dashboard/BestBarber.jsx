export default function BestBarber({ barbers }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#111827", color: "white" }}>
            <h3>Top Barberos</h3>
            <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {barbers.map((barber) => (
                    <div key={barber.name} style={{ display: "flex", justifyContent: "space-between", padding: 16, background: "#1f2937", borderRadius: 12 }}>
                        <span>{barber.name}</span>
                        <strong>{barber.revenue}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
