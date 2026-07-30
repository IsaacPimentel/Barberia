import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField
} from "@mui/material";

function ClienteModal({ open, onClose, onSubmit, cliente }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (cliente) {
            setName(cliente.name || "");
            setEmail(cliente.email || "");
            setPhone(cliente.phone || "");
            setNotes(cliente.notes || "");
        } else {
            setName("");
            setEmail("");
            setPhone("");
            setNotes("");
        }
    }, [cliente, open]);

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            name,
            email,
            phone,
            notes
        });
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{cliente ? "Editar cliente" : "Nuevo cliente"}</DialogTitle>
            <DialogContent>
                <form id="cliente-form" onSubmit={handleSubmit}>
                    <Stack spacing={2} sx={{ mt: 1 }}>
                        <TextField
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            fullWidth
                        />
                        <TextField
                            label="Teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Notas"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button type="submit" form="cliente-form" variant="contained">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ClienteModal;
