import { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CARD_WIDTH = 380;
const GAP = 24;

function ServiciosCarousel({ servicios, onEdit, onDelete }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = servicios.length;

    function handlePrev() {
        setActiveIndex((current) => (current === 0 ? length - 1 : current - 1));
    }

    function handleNext() {
        setActiveIndex((current) => (current === length - 1 ? 0 : current + 1));
    }

    if (!servicios || servicios.length === 0) {
        return (
            <Box sx={{ width: "100%", textAlign: "center", py: 10, bgcolor: "background.default", borderRadius: 3 }}>
                <Typography sx={{ color: "text.secondary" }}>No hay servicios registrados.</Typography>
            </Box>
        );
    }

    const visibleCount = 3;
    const pages = Math.max(1, Math.ceil(length / visibleCount));
    const pageIndex = Math.floor(activeIndex / visibleCount);
    const startIndex = pageIndex * visibleCount;
    const endIndex = Math.min(startIndex + visibleCount, length);
    const visibleServicios = servicios.slice(startIndex, endIndex);

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Box sx={{ width: "100%", maxWidth: 1180, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, px: { xs: 1, md: 0 } }}>
                <Button
                    onClick={handlePrev}
                    startIcon={<ArrowBackIosNewIcon />}
                    sx={{ color: "text.primary", borderColor: "rgba(15,23,42,0.12)", borderWidth: 1, borderStyle: "solid", minWidth: 140, bgcolor: "background.paper" }}
                >
                    Anterior
                </Button>
                <Typography sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5, fontSize: 12 }}>
                    Mostrando {startIndex + 1}-{endIndex} de {length}
                </Typography>
                <Button
                    onClick={handleNext}
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{ color: "text.primary", borderColor: "rgba(15,23,42,0.12)", borderWidth: 1, borderStyle: "solid", minWidth: 140, bgcolor: "background.paper" }}
                >
                    Siguiente
                </Button>
            </Box>

            <Box sx={{ width: "100%", maxWidth: 1180, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" }, gap: 3, px: { xs: 1, md: 0 } }}>
                {visibleServicios.map((servicio) => (
                    <Card
                        key={servicio.id}
                        sx={{
                            borderRadius: 4,
                            border: "1px solid rgba(15,23,42,0.08)",
                            boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
                            overflow: "hidden",
                            bgcolor: "background.paper"
                        }}
                    >
                        <Box sx={{ p: 2, pt: 2, position: "relative" }}>
                            <Box sx={{ width: "100%", height: 240, overflow: "hidden", borderRadius: 3, mx: "auto" }}>
                                <CardMedia
                                    component="img"
                                    image={servicio.image}
                                    alt={servicio.name}
                                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                            <Box sx={{ position: "absolute", top: 16, left: 16, bgcolor: "rgba(255,255,255,0.85)", px: 2, py: 0.5, borderRadius: 2, boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}>
                                <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700 }}>
                                    {servicio.category}
                                </Typography>
                            </Box>
                        </Box>
                        <CardContent sx={{ px: 3, py: 3 }}>
                            <Stack spacing={2}>
                                <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary" }}>
                                    {servicio.name}
                                </Typography>
                                <Typography sx={{ color: "text.secondary", fontSize: 14, minHeight: 48 }}>
                                    {servicio.description}
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    <Box sx={{ bgcolor: servicio.active ? "#16a34a" : "#e2e8f0", color: servicio.active ? "white" : "#475569", px: 2, py: 0.5, borderRadius: 2, fontSize: 12, fontWeight: 700 }}>
                                        {servicio.active ? "Activo" : "Inactivo"}
                                    </Box>
                                    <Box sx={{ bgcolor: servicio.requiresAppointment ? "#0ea5e9" : "#e2e8f0", color: servicio.requiresAppointment ? "white" : "#475569", px: 2, py: 0.5, borderRadius: 2, fontSize: 12, fontWeight: 700 }}>
                                        {servicio.requiresAppointment ? "Requiere cita" : "Sin cita"}
                                    </Box>
                                </Stack>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <Box sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 3 }}>
                                        <Typography sx={{ color: "text.secondary", mb: 1, fontSize: 12 }}>Precio</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>S/ {servicio.price.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 3 }}>
                                        <Typography sx={{ color: "text.secondary", mb: 1, fontSize: 12 }}>Duración</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>{servicio.duration} min</Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 3 }}>
                                        <Typography sx={{ color: "text.secondary", mb: 1, fontSize: 12 }}>Comisión</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                                            {servicio.commissionType === "amount" ? `S/ ${servicio.commissionValue.toFixed(2)}` : `${servicio.commissionValue}%`}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "space-between", px: 3, pb: 3, pt: 0 }}>
                            <Typography sx={{ color: "#475569", fontWeight: 700 }}>
                                S/ {servicio.price.toFixed(2)}
                            </Typography>
                            <Button onClick={() => onEdit(servicio)} variant="outlined" sx={{ color: "text.primary", borderColor: "rgba(15,23,42,0.12)" }}>
                                Ver
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {Array.from({ length: pages }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: index === pageIndex ? "primary.main" : "divider",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                        }}
                        onClick={() => setActiveIndex(index * visibleCount)}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ServiciosCarousel;
