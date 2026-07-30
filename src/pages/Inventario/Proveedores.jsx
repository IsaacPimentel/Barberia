const suppliers = [
    { id: 1, name: "Distribuidora A", contact: "987 654 321", email: "contacto@distribuidoraa.com" },
    { id: 2, name: "Proveedor B", contact: "998 521 123", email: "ventas@proveedorb.com" }
];

function Proveedores() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#111827" }}>
            <h2>Proveedores</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Proveedor</th>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Contacto</th>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier) => (
                        <tr key={supplier.id}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{supplier.name}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{supplier.contact}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{supplier.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Proveedores;
