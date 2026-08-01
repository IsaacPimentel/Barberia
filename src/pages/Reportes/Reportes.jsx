import { useMemo, useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";

const barberos = [
    { value: "juan-perez", label: "Juan Pérez" },
    { value: "ana-gomez", label: "Ana Gómez" },
    { value: "luis-diaz", label: "Luis Díaz" }
];

const servicios = [
    { value: "corte", label: "Corte" },
    { value: "barba", label: "Barba" },
    { value: "tintura", label: "Tintura" }
];

const sucursales = [
    { value: "miraflores", label: "Miraflores" },
    { value: "san-isidro", label: "San Isidro" },
    { value: "surquillo", label: "Surquillo" }
];

function Reportes() {
    const [initialDate, setInitialDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [barbero, setBarbero] = useState("");
    const [servicio, setServicio] = useState("");
    const [sucursal, setSucursal] = useState("");

    const summaryText = useMemo(() => {
        const parts = [];
        if (initialDate) parts.push(`Desde ${initialDate}`);
        if (endDate) parts.push(`Hasta ${endDate}`);
        if (barbero) parts.push(`Barbero: ${barberos.find((item) => item.value === barbero)?.label}`);
        if (servicio) parts.push(`Servicio: ${servicios.find((item) => item.value === servicio)?.label}`);
        if (sucursal) parts.push(`Sucursal: ${sucursales.find((item) => item.value === sucursal)?.label}`);
        return parts.length ? parts.join(" · ") : "Sin filtros aplicados";
    }, [initialDate, endDate, barbero, servicio, sucursal]);

    const handleExportPdf = () => {
        alert("Exportando reporte a PDF...");
    };

    const handleExportExcel = () => {
        alert("Exportando reporte a Excel...");
    };

    return (
        <Layout>
            <Box sx={{ color: "text.primary", display: "grid", gap: 3 }}>
                <Typography variant="h4" component="h1">
                    Reportes
                </Typography>
                <Typography sx={{ color: "#94a3b8" }}>
                    Filtra los resultados por rango de fechas, barbero, servicio y sucursal, luego exporta tu reporte.
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        mb: 2
                    }}
                >
                    <TextField
                        label="Fecha Inicio"
                        type="date"
                        value={initialDate}
                        onChange={(e) => setInitialDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
                        label="Fecha Fin"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
                        label="Barbero"
                        select
                        value={barbero}
                        onChange={(e) => setBarbero(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="">Todos</MenuItem>
                        {barberos.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Servicio"
                        select
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="">Todos</MenuItem>
                        {servicios.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Sucursal"
                        select
                        value={sucursal}
                        onChange={(e) => setSucursal(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="">Todas</MenuItem>
                        {sucursales.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                    <Button variant="contained" color="primary" onClick={handleExportPdf}>
                        Exportar PDF
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleExportExcel}>
                        Exportar Excel
                    </Button>
                </Box>

                <Box sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}>
                    <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
                        Filtros aplicados
                    </Typography>
                    <Typography>{summaryText}</Typography>
                </Box>
            </Box>
        </Layout>
    );
}

export default Reportes;
