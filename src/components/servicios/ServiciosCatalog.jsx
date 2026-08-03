import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";

function ServiciosCatalog({ servicios }) {
    const catalogItems = servicios || [];

    if (catalogItems.length === 0) {
        return (
            <Box sx={{ width: "100%", textAlign: "center", py: 8, bgcolor: "background.default", borderRadius: 3 }}>
                <Typography sx={{ color: "text.secondary" }}>No hay elementos para el catálogo.</Typography>
            </Box>
        );
    }

    const categories = catalogItems.reduce((acc, item) => {
        const category = item.category || "Otros";
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
    }, {});

    return (
        <Box sx={{ width: "100%", maxWidth: 1180, mx: "auto", display: "flex", flexDirection: "column", gap: 5 }}>
            <Box>
                <Typography variant="h5" sx={{ color: "text.primary", fontWeight: 700 }}>
                    Catálogo de inspiración
                </Typography>
                <Typography sx={{ color: "#475569" }}>
                    Descubre modelos de cortes, estilos de barba y opciones de barbería por categoría.
                </Typography>
            </Box>

            {Object.entries(categories).map(([category, items]) => (
                <Box key={category} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                        <Box>
                            <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 700 }}>
                                {category}
                            </Typography>
                            <Typography sx={{ color: "#475569", fontSize: 14 }}>
                                {items.length} opción{items.length === 1 ? "" : "es"} disponibles
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={3}>
                        {items.map((item) => (
                            <Grid key={item.id} item xs={12} sm={6} md={4}>
                                <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 4, boxShadow: "0 20px 50px rgba(15,23,42,0.08)" }}>
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.name}
                                            sx={{ width: "100%", height: 180, objectFit: "cover" }}
                                        />
                                        <Box sx={{ position: "absolute", top: 16, left: 16, bgcolor: "rgba(0,0,0,0.65)", px: 2, py: 0.5, borderRadius: 2 }}>
                                            <Typography variant="caption" sx={{ color: "#fff", fontWeight: 700, textTransform: "uppercase" }}>
                                                {item.category}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                                        <Stack spacing={1}>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                                                {item.name}
                                            </Typography>
                                            <Typography sx={{ color: "text.secondary", fontSize: 14, minHeight: 44 }}>
                                                {item.description}
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ color: "text.secondary", fontSize: 13, mt: "auto" }}>
                                            Duración: {item.duration} min · Precio: S/ {item.price.toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}

export default ServiciosCatalog;
