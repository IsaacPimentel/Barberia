export default function BestBarber({ barbers }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", color: "#0F172A", border: "1px solid #E2E8F0" }}>
            <h3>Top Barberos</h3>
            <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {barbers.map((barber) => (
                    <div key={barber.name} style={{ display: "flex", justifyContent: "space-between", padding: 16, background: "#F8FAFC", borderRadius: 12 }}>
                        <span>{barber.name}</span>
                        <strong>{barber.revenue}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
