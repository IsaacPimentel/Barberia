const historial = [
    { id: 1, date: "2026-07-30", event: "Apertura de caja", amount: "S/ 1,200" },
    { id: 2, date: "2026-07-30", event: "Ingreso por servicio", amount: "S/ 240" },
    { id: 3, date: "2026-07-30", event: "Egreso de productos", amount: "S/ 120" },
    { id: 4, date: "2026-07-30", event: "Cierre de caja", amount: "S/ 4,250" }
];

function Historial() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#111827" }}>
            <h2>Historial</h2>
            <p style={{ color: "#94a3b8" }}>Registros históricos de movimientos y cierres de caja.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", padding: 12, color: "#94a3b8" }}>Fecha</th>
                        <th style={{ textAlign: "left", padding: 12, color: "#94a3b8" }}>Evento</th>
                        <th style={{ textAlign: "right", padding: 12, color: "#94a3b8" }}>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((item) => (
                        <tr key={item.id}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{item.date}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{item.event}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155", textAlign: "right" }}>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Historial;
