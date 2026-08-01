const products = [
    { id: 1, name: "Shampoo profesional", stock: 32, minStock: 10 },
    { id: 2, name: "Gel para barba", stock: 18, minStock: 5 },
    { id: 3, name: "Cera moldeable", stock: 7, minStock: 10 }
];

function Productos() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", color: "#0F172A", border: "1px solid #E2E8F0" }}>
            <h2>Productos</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ padding: 12, textAlign: "left", color: "#94a3b8" }}>Producto</th>
                        <th style={{ padding: 12, textAlign: "right", color: "#94a3b8" }}>Stock</th>
                        <th style={{ padding: 12, textAlign: "right", color: "#94a3b8" }}>Stock mínimo</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td style={{ padding: 12, borderTop: "1px solid #334155" }}>{product.name}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155", textAlign: "right" }}>{product.stock}</td>
                            <td style={{ padding: 12, borderTop: "1px solid #334155", textAlign: "right" }}>{product.minStock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Productos;
