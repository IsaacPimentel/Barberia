const movements = [
    { id: 1, date: "2026-07-30", type: "Ingreso", description: "Venta de productos", amount: "S/ 320" },
    { id: 2, date: "2026-07-29", type: "Egreso", description: "Compra de shampoo", amount: "S/ 180" },
    { id: 3, date: "2026-07-28", type: "Ingreso", description: "Ajuste de inventario", amount: "S/ 40" }
];

function Movimientos() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#111827" }}>
            <h2>Movimientos</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Fecha</th>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Tipo</th>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Descripción</th>
                        <th style={{ padding: 12, textAlign: "right", color: "#94a3b8" }}>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {movements.map((movement) => (
                        <tr key={movement.id}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{movement.date}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{movement.type}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{movement.description}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155", textAlign: "right" }}>{movement.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Movimientos;
