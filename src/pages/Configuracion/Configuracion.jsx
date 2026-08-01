import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import Layout from "../../components/layout/Layout";

const branches = [
    "Sucursal Lima",
    "Sucursal Surco",
    "Sucursal San Isidro",
    "Sucursal Miraflores"
];

function Configuracion() {
    const [activeBranch, setActiveBranch] = useState(branches[0]);
    const [whatsappEnabled, setWhatsappEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [autoReminders, setAutoReminders] = useState(true);
    const [bookingsConfirmation, setBookingsConfirmation] = useState(true);
    const [cancelationsEnabled, setCancelationsEnabled] = useState(true);
    const [clientPortalEnabled, setClientPortalEnabled] = useState(true);
    const [pointsEnabled, setPointsEnabled] = useState(true);

    return (
        <Layout>
            <Box sx={{ color: "text.primary", display: "grid", gap: 3 }}>
                <Typography variant="h4" component="h1">
                    Configuración del sistema
                </Typography>
                <Typography sx={{ color: "#94a3b8" }}>
                    Administra la configuración de notificaciones, sucursales y el portal de clientes desde un solo lugar.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ bgcolor: "background.paper" }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Fase 10 - Notificaciones
                                </Typography>
                                <Typography sx={{ color: "#94a3b8", mb: 2 }}>
                                    Activa integraciones para enviar mensajes, confirmaciones automáticas y recordatorios.
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={whatsappEnabled}
                                                    onChange={(event) => setWhatsappEnabled(event.target.checked)}
                                                />
                                            }
                                            label="WhatsApp"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={emailEnabled}
                                                    onChange={(event) => setEmailEnabled(event.target.checked)}
                                                />
                                            }
                                            label="Correo electrónico"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={autoReminders}
                                                    onChange={(event) => setAutoReminders(event.target.checked)}
                                                />
                                            }
                                            label="Recordatorios automáticos"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={bookingsConfirmation}
                                                    onChange={(event) => setBookingsConfirmation(event.target.checked)}
                                                />
                                            }
                                            label="Confirmación de reservas"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={cancelationsEnabled}
                                                    onChange={(event) => setCancelationsEnabled(event.target.checked)}
                                                />
                                            }
                                            label="Cancelaciones"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        <Card sx={{ bgcolor: "background.paper", mt: 3 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Fase 11 - Múltiples sucursales
                                </Typography>
                                <Typography sx={{ color: "#94a3b8", mb: 2 }}>
                                    Cada sucursal tendrá su propio conjunto de barberos, caja, inventario, agenda y reportes.
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ color: "#64748B" }}>Sucursal activa</InputLabel>
                                    <Select
                                        value={activeBranch}
                                        label="Sucursal activa"
                                        onChange={(event) => setActiveBranch(event.target.value)}
                                        sx={{ color: "text.primary" }}
                                    >
                                        {branches.map((branch) => (
                                            <MenuItem key={branch} value={branch}>
                                                {branch}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Box sx={{ mt: 3, display: "grid", gap: 1 }}>
                                    <Typography sx={{ color: "#94a3b8" }}>Capacidades disponibles por sucursal:</Typography>
                                    <Typography>• Barberos</Typography>
                                    <Typography>• Caja</Typography>
                                    <Typography>• Inventario</Typography>
                                    <Typography>• Agenda</Typography>
                                    <Typography>• Reportes</Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{ bgcolor: "background.paper", mt: 3 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Fase 12 - Portal para clientes
                                </Typography>
                                <Typography sx={{ color: "#94a3b8", mb: 2 }}>
                                    Puntos clave para el portal de clientes: registro, reservas, historial y promociones.
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={clientPortalEnabled}
                                                    onChange={(event) => setClientPortalEnabled(event.target.checked)}
                                                />
                                            }
                                            label="Portal de clientes activado"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={pointsEnabled}
                                                    onChange={(event) => setPointsEnabled(event.target.checked)}
                                                />
                                            }
                                            label="Sistema de puntos"
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
                                    <Typography>Funcionalidades esperadas:</Typography>
                                    <Typography>• Registrarse e iniciar sesión</Typography>
                                    <Typography>• Reservar, reprogramar y cancelar citas</Typography>
                                    <Typography>• Ver historial y promociones</Typography>
                                    <Typography>• Guardar barbero favorito</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ bgcolor: "background.paper", height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Resumen de configuración
                                </Typography>
                                <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
                                    <Typography sx={{ color: "#94a3b8" }}>
                                        Sucursal activa:
                                    </Typography>
                                    <Typography>{activeBranch}</Typography>
                                    <Typography sx={{ color: "#94a3b8" }}>
                                        Notificaciones activas:
                                    </Typography>
                                    <Typography>
                                        {whatsappEnabled ? "WhatsApp, " : ""}
                                        {emailEnabled ? "Correo electrónico, " : ""}
                                        {autoReminders ? "Recordatorios automáticos, " : ""}
                                        {bookingsConfirmation ? "Confirmación de reservas, " : ""}
                                        {cancelationsEnabled ? "Cancelaciones" : ""}
                                    </Typography>
                                    <Typography sx={{ color: "#94a3b8" }}>
                                        Portal de clientes:
                                    </Typography>
                                    <Typography>{clientPortalEnabled ? "Activo" : "Inactivo"}</Typography>
                                    <Typography sx={{ color: "#94a3b8" }}>
                                        Programa de puntos:
                                    </Typography>
                                    <Typography>{pointsEnabled ? "Activo" : "Inactivo"}</Typography>
                                </Box>
                                <Box sx={{ mt: 4, display: "grid", gap: 2 }}>
                                    <Button variant="contained" color="primary">
                                        Guardar configuración
                                    </Button>
                                    <Button variant="outlined" color="secondary">
                                        Restaurar valores predeterminados
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
}

export default Configuracion;
