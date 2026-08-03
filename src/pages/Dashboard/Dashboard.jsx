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
            <Box sx={{ color: "text.primary", display: "flex", flexDirection: "column", gap: 4, alignItems: "center", width: "100%" }}>
                <Box
                    sx={{
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 4,
                        minHeight: 420,
                        background: "radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 35%), linear-gradient(180deg, rgba(248,250,252,0.96), rgba(248,250,252,0.96)), #FFFFFF",
                        px: { xs: 2, md: 3 },
                        py: { xs: 4, md: 6 }
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(248,250,252,0.8))",
                            opacity: 0.55
                        }}
                    />
                    <Box sx={{ width: "100%", maxWidth: 1280, mx: "auto", position: "relative", zIndex: 1, height: "100%" }}>
                        <Stack sx={{ height: "100%", alignItems: "center", textAlign: "center" }} justifyContent="space-between">
                            <Box sx={{ width: "100%", maxWidth: 740 }}>
                                <Typography sx={{ letterSpacing: 2, color: "primary.main", fontWeight: 700, mb: 1 }}>
                                    NOIR BARBERS
                                </Typography>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, maxWidth: 640, mx: "auto", color: "text.primary" }}>
                                    Precision Cuts for Modern Gentlemen
                                </Typography>
                                <Typography sx={{ color: "text.secondary", maxWidth: 640, mx: "auto", mb: 4 }}>
                                    Premium grooming experience with curated services for the modern man. Create more appointments, increase ticket value, and keep clients returning.
                                </Typography>
                                <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                                    <Button variant="contained" sx={{ bgcolor: "#d4af37", color: "text.primary", px: 4, textTransform: "none", fontWeight: 700 }}>
                                        Book Now
                                    </Button>
                                    <Button variant="outlined" sx={{ borderColor: "#d4af37", color: "text.primary", px: 4, textTransform: "none", fontWeight: 700 }}>
                                        Explore Services
                                    </Button>
                                </Stack>
                            </Box>

                            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
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
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "background.paper", border: "1px solid rgba(15,23,42,0.08)" }}>
                            <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
                                Performance summary
                            </Typography>
                            <Typography sx={{ color: "text.secondary", mb: 4 }}>
                                Review the latest metrics and insights from the branch operations.
                            </Typography>
                            <Grid container spacing={2}>
                                {highlights.map((item) => (
                                    <Grid item xs={12} sm={4} key={item.label}>
                                        <Box sx={{ p: 3, borderRadius: 3, bgcolor: "background.default" }}>
                                            <Typography sx={{ color: "text.secondary", mb: 1 }}>{item.label}</Typography>
                                            <Typography variant="h4" sx={{ fontWeight: 700 }}>{item.value}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "background.paper", border: "1px solid rgba(15,23,42,0.08)" }}>
                            <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
                                Daily Notes
                            </Typography>
                            <Stack spacing={2}>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "background.default" }}>
                                    <Typography sx={{ color: "text.secondary", mb: 1 }}>Latest booking</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Corte + Barba para Luis Díaz</Typography>
                                </Box>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "background.default" }}>
                                    <Typography sx={{ color: "text.secondary", mb: 1 }}>Top performer</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Diego — 24 reservas</Typography>
                                </Box>
                                <Box sx={{ p: 3, borderRadius: 3, bgcolor: "background.default" }}>
                                    <Typography sx={{ color: "text.secondary", mb: 1 }}>Stock alert</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>Shampoo premium bajo</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ p: 4, borderRadius: 4, bgcolor: "background.paper", border: "1px solid rgba(15,23,42,0.08)" }}>
                            <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
                                <div>
                                    <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>Branch network</Typography>
                                    <Typography sx={{ color: "#cbd5e1" }}>Manage your Lima, Surco, San Isidro and Miraflores locations with unified reporting and branch metrics.</Typography>
                                </div>
                                <Button variant="contained" sx={{ bgcolor: "#d4af37", color: "text.primary", textTransform: "none" }}>
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
