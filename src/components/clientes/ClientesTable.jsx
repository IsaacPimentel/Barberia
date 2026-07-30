import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ClientesTable({ clientes, onEdit, onDelete }) {
    return (
        <TableContainer component={Paper} sx={{ bgcolor: "#111827", color: "white" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: "#94a3b8" }}>Nombre</TableCell>
                        <TableCell sx={{ color: "#94a3b8" }}>Email</TableCell>
                        <TableCell sx={{ color: "#94a3b8" }}>Teléfono</TableCell>
                        <TableCell sx={{ color: "#94a3b8" }}>Notas</TableCell>
                        <TableCell sx={{ color: "#94a3b8" }}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientes.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                <Typography sx={{ color: "#cbd5e1", py: 4 }}>
                                    No hay clientes registrados.
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ) : (
                        clientes.map((cliente) => (
                            <TableRow key={cliente.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{cliente.name}</TableCell>
                                <TableCell>{cliente.email}</TableCell>
                                <TableCell>{cliente.phone}</TableCell>
                                <TableCell>{cliente.notes}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(cliente)} sx={{ color: "#cbd5e1" }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(cliente)} sx={{ color: "#ef4444" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ClientesTable;
