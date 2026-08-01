import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ServicioCard({ servicio, onEdit, onDelete }) {
    return (
        <Card sx={{ background: "background.paper", color: "text.primary", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 10px 30px rgba(15,23,42,0.12)" }}>
            {servicio.image ? (
                <CardMedia component="img" height="180" image={servicio.image} alt={servicio.name} />
            ) : (
                <Box sx={{ height: 180, bgcolor: "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "text.primary" }}>
                    <Typography variant="h6">Sin imagen</Typography>
                </Box>
            )}
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {servicio.name}
                    </Typography>
                    <Box
                        sx={{
                            bgcolor: servicio.active ? "#16a34a" : "rgba(255,255,255,0.08)",
                            color: servicio.active ? "white" : "#94a3b8",
                            borderRadius: 1,
                            px: 1.5,
                            py: 0.5,
                            fontSize: 12
                        }}
                    >
                        {servicio.active ? "Activo" : "Inactivo"}
                    </Box>
                </Stack>
                <Typography sx={{ color: "text.secondary", mb: 1 }}>{servicio.category}</Typography>
                <Typography sx={{ mb: 2, color: "text.secondary" }}>{servicio.description}</Typography>
                <Grid container spacing={1} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            Precio
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>S/ {servicio.price.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            Duración
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>{servicio.duration} min</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            Comisión
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>
                            {servicio.commissionType === "amount" ? `S/ ${servicio.commissionValue.toFixed(2)}` : `${servicio.commissionValue}%`}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            Requiere cita
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }}>{servicio.requiresAppointment ? "Sí" : "No"}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <Stack direction="row" spacing={1}>
                    <Button
                        size="small"
                        startIcon={<EditIcon />}
                        onClick={() => onEdit(servicio)}
                        sx={{ color: "text.primary", borderColor: "rgba(15,23,42,0.12)", borderWidth: 1, borderStyle: "solid" }}
                    >
                        Editar
                    </Button>
                    <Button
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={() => onDelete(servicio)}
                        sx={{ color: "#ef4444", borderColor: "rgba(239,68,68,0.25)", borderWidth: 1, borderStyle: "solid" }}
                    >
                        Eliminar
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
}

function ServiciosTable({ servicios, onEdit, onDelete }) {
    if (servicios.length === 0) {
        return (
            <Box sx={{ bgcolor: "background.paper", borderRadius: 2, p: 6, textAlign: "center" }}>
                <Typography sx={{ color: "text.secondary" }}>No hay servicios registrados.</Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={3}>
            {servicios.map((servicio) => (
                <Grid item xs={12} sm={6} md={4} key={servicio.id}>
                    <ServicioCard servicio={servicio} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ServiciosTable;
