import Layout from "../../components/layout/Layout";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";

const heroStats = [
    { label: "Clientes nuevos", value: "24" },
    { label: "Reservas hoy", value: "18" },
    { label: "Ingresos", value: "S/ 24,800" }
];

const highlights = [
    { label: "Barberos activos", value: "6" },
    { label: "Servicios premium", value: "14" },
    { label: "Puntos de venta", value: "4" }
];

export default function Dashboard() {
    return (
        <Layout>
            <Box sx={{ color: "white", display: "grid", gap: 4 }}>
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 4,
                        minHeight: 420,
                        background: "radial-gradient(circle at top, rgba(255,215,0,0.16), transparent 35%), linear-gradient(180deg, rgba(15,23,42,0.95), rgba(15,23,42,0.95)), #020203",
                        p: { xs: 4, md: 6 }
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.8))",
                            opacity: 0.7
                        }}
                    />
                    <Stack sx={{ position: "relative", zIndex: 1, height: "100%" }} justifyContent="space-between">
                        <Box>
                            <Typography sx={{ letterSpacing: 2, color: "#d4af37", fontWeight: 700, mb: 1 }}>
                                NOIR BARBERS
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, maxWidth: 640 }}>
                                Precision Cuts for Modern Gentlemen
                            </Typography>
                            <Typography sx={{ color: "#cbd5e1", maxWidth: 640, mb: 4 }}>
                                Premium grooming experience with curated services for the modern man. Create more appointments, increase ticket value, and keep clients returning.
                            </Typography>
                            <Stack direction="row" spacing={2} flexWrap="wrap">
                                <Button variant="contained" sx={{ bgcolor: "#d4af37", color: "#111827", px: 4, textTransform: "none", fontWeight: 700 }}>
                                    Book Now
                                </Button>
                                <Button variant="outlined" sx={{ borderColor: "#d4af37", color: "white", px: 4, textTransform: "none", fontWeight: 700 }}>
                                    Explore Services
                                </Button>
                            </Stack>
                        </Box>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {heroStats.map((item) => (
                                <Grid item xs={12} sm={4} key={item.label}>
                                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                        <Typography sx={{ color: "#94a3b8", mb: 1 }}>{item.label}</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{item.value}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Typography variant="h6" sx={{ mb: 2, color: "#d4af37" }}>
                                Performance summary
                            </Typography>
                            <Typography sx={{ color: "#cbd5e1", mb: 4 }}>
                                Review the latest metrics and insights from the branch operations.
                            </Typography>
                            <Grid container spacing={2}>
                                {highlights.map((item) => (
                                    <Grid item xs={12} sm={4} key={item.label}>
                                        <Box sx={{ p: 3, borderRadius: 3, bgcolor: "#111827" }}>
                                            <Typography sx={{ color: "#94a3b8", mb: 1 }}>{item.label}</Typography>
                                            <Typography variant="h4" sx={{ fontWeight: 700 }}>{item.value}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "#111827", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Typography variant="h6" sx={{ mb: 2, color: "#d4af37" }}>
                                Daily Notes
                            </Typography>
                            <Stack spacing={2}>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.03)" }}>
                                    <Typography sx={{ color: "#cbd5e1", mb: 1 }}>Latest booking</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Corte + Barba para Luis Díaz</Typography>
                                </Box>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.03)" }}>
                                    <Typography sx={{ color: "#cbd5e1", mb: 1 }}>Top performer</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Diego — 24 reservas</Typography>
                                </Box>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.03)" }}>
                                    <Typography sx={{ color: "#cbd5e1", mb: 1 }}>Stock alert</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Shampoo premium bajo</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "#020203", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
                                <div>
                                    <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>Branch network</Typography>
                                    <Typography sx={{ color: "#cbd5e1" }}>Manage your Lima, Surco, San Isidro and Miraflores locations with unified reporting and branch metrics.</Typography>
                                </div>
                                <Button variant="contained" sx={{ bgcolor: "#d4af37", color: "#111827", textTransform: "none" }}>
                                    Ver sucursales
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
}
