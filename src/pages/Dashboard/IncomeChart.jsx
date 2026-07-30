import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function IncomeChart({ data }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#111827", color: "white", minHeight: 360 }}>
            <h3>Ingresos Semanales</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 24, right: 24, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Bar dataKey="ingresos" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
