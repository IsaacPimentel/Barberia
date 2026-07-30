import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function AppointmentsChart({ data }) {
    return (
        <div className="dashboard-card" style={{ padding: 24, borderRadius: 20, background: "#111827", color: "white", minHeight: 360 }}>
            <h3>Citas de la semana</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 24, right: 24, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line type="monotone" dataKey="citas" stroke="#60a5fa" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
