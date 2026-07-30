const purchases = [
    { id: 1, date: "2026-07-28", supplier: "Distribuidora A", total: "S/ 380" },
    { id: 2, date: "2026-07-26", supplier: "Proveedor B", total: "S/ 210" }
];

function Compras() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#111827" }}>
            <h2>Compras</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Fecha</th>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Proveedor</th>
                        <th style={{ padding: 12, textAlign: "right", color: "#94a3b8" }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr key={purchase.id}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{purchase.date}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{purchase.supplier}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155", textAlign: "right" }}>{purchase.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Compras;
