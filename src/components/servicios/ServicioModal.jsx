import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";

const categories = [
    "Cortes de Cabello",
    "Barba",
    "Niños",
    "Cabello",
    "Coloración",
    "Tratamientos",
    "Premium",
    "Facial",
    "Productos"
];

const commissionTypes = [
    { value: "percentage", label: "Porcentaje" },
    { value: "amount", label: "Monto fijo" }
];

function ServicioModal({ open, onClose, onSubmit, servicio }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(30);
    const [commissionValue, setCommissionValue] = useState(20);
    const [commissionType, setCommissionType] = useState("percentage");
    const [color, setColor] = useState("#f59e0b");
    const [image, setImage] = useState("");
    const [active, setActive] = useState(true);
    const [requiresAppointment, setRequiresAppointment] = useState(true);

    useEffect(() => {
        if (servicio) {
            setName(servicio.name || "");
            setCategory(servicio.category || categories[0]);
            setDescription(servicio.description || "");
            setPrice(servicio.price || 0);
            setDuration(servicio.duration || 30);
            setCommissionValue(servicio.commissionValue || 0);
            setCommissionType(servicio.commissionType || "percentage");
            setColor(servicio.color || "#f59e0b");
            setImage(servicio.image || "");
            setActive(servicio.active ?? true);
            setRequiresAppointment(servicio.requiresAppointment ?? true);
        } else {
            setName("");
            setCategory(categories[0]);
            setDescription("");
            setPrice(0);
            setDuration(30);
            setCommissionValue(20);
            setCommissionType("percentage");
            setColor("#f59e0b");
            setImage("");
            setActive(true);
            setRequiresAppointment(true);
        }
    }, [servicio, open]);

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            name,
            category,
            description,
            price: Number(price),
            duration: Number(duration),
            commissionValue: Number(commissionValue),
            commissionType,
            color,
            image,
            active,
            requiresAppointment
        });
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{servicio ? "Editar servicio" : "Nuevo servicio"}</DialogTitle>
            <DialogContent>
                <Box component="form" id="servicio-form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Stack spacing={2}>
                        <TextField
                            label="Nombre del servicio"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            fullWidth
                        />
                        <FormControl fullWidth>
                            <InputLabel>Categoría</InputLabel>
                            <Select value={category} label="Categoría" onChange={(e) => setCategory(e.target.value)}>
                                {categories.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Descripción"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={3}
                            fullWidth
                        />
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 16 }}>
                            <TextField
                                label="Precio"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                inputProps={{ min: 0, step: 0.5 }}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Duración (min)"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                type="number"
                                inputProps={{ min: 1 }}
                                required
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 16 }}>
                            <TextField
                                label="Comisión"
                                value={commissionValue}
                                onChange={(e) => setCommissionValue(e.target.value)}
                                type="number"
                                inputProps={{ min: 0, step: 0.5 }}
                                required
                                fullWidth
                            />
                            <FormControl fullWidth>
                                <InputLabel>Tipo de comisión</InputLabel>
                                <Select value={commissionType} label="Tipo de comisión" onChange={(e) => setCommissionType(e.target.value)}>
                                    {commissionTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 16, alignItems: "center" }}>
                            <TextField
                                label="Color para calendario"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                type="color"
                                fullWidth
                                sx={{ minHeight: 56 }}
                            />
                            <TextField
                                label="URL de imagen"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                            <FormControlLabel
                                control={<Switch checked={active} onChange={(e) => setActive(e.target.checked)} color="success" />}
                                label="Activo"
                            />
                            <FormControlLabel
                                control={<Switch checked={requiresAppointment} onChange={(e) => setRequiresAppointment(e.target.checked)} color="primary" />}
                                label="Requiere cita"
                            />
                        </Box>
                        {image && (
                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                    Vista previa de imagen
                                </Typography>
                                <Box component="img" src={image} alt={name} sx={{ width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 2 }} />
                            </Box>
                        )}
                    </Stack>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button type="submit" form="servicio-form" variant="contained">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ServicioModal;
