function AbrirCaja() {
    return (
        <div style={{ padding: 24, borderRadius: 20, background: "#FFFFFF", color: "#0F172A", border: "1px solid #E2E8F0" }}>
            <h2>Abrir Caja</h2>
            <p style={{ color: "#64748B" }}>Registra la apertura de caja con el monto inicial.</p>
            <form style={{ display: "grid", gap: 16, marginTop: 20 }}>
                <label style={{ display: "grid", gap: 8 }}>
                    Monto inicial
                    <input type="number" placeholder="S/ 0.00" style={{ padding: 12, borderRadius: 12, border: "1px solid #CBD5E1", background: "#F8FAFC", color: "#0F172A" }} />
                </label>
                <label style={{ display: "grid", gap: 8 }}>
                    Observaciones
                    <textarea placeholder="Comentarios adicionales" style={{ padding: 12, borderRadius: 12, border: "1px solid #CBD5E1", background: "#F8FAFC", color: "#0F172A" }} />
                </label>
                <button type="button" style={{ padding: "14px 20px", borderRadius: 12, border: "none", background: "#2563eb", color: "white", cursor: "pointer" }}>
                    Abrir caja
                </button>
            </form>
        </div>
    );
}

export default AbrirCaja;
