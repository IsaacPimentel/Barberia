export default function UpcomingAppointments({ appointments }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#111827", color: "white", marginTop: 24 }}>
            <h3>Próximas reservas</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", padding: 12, color: "#94a3b8" }}>Hora</th>
                        <th style={{ textAlign: "left", padding: 12, color: "#94a3b8" }}>Cliente</th>
                        <th style={{ textAlign: "left", padding: 12, color: "#94a3b8" }}>Servicio</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item) => (
                        <tr key={`${item.time}-${item.client}`}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{item.time}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{item.client}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{item.service}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
