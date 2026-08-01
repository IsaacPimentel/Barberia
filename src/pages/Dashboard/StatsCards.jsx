import { Grid } from "@mui/material";

export default function StatsCards({ stats }) {
    return (
        <Grid container spacing={3} style={{ marginBottom: 24 }}>
            {stats.map((item) => (
                <Grid item xs={12} md={3} key={item.title}>
                    <div className="stat-card" style={{ padding: 20, borderRadius: 16, background: "#F8FAFC", color: "#0F172A", border: "1px solid #E2E8F0" }}>
                        <p style={{ margin: 0, opacity: 0.75 }}>{item.title}</p>
                        <h2 style={{ margin: "12px 0 0", fontSize: 28 }}>{item.value}</h2>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
