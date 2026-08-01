import { useState } from "react";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";
import useServicios from "../../hooks/useServicios";
import ServiciosCarousel from "../../components/servicios/ServiciosCarousel";
import ServicioModal from "../../components/servicios/ServicioModal";

function Servicios() {
    const { servicios, loading, error, addServicio, editServicio, removeServicio } = useServicios();
    const [modalOpen, setModalOpen] = useState(false);
    const [editingServicio, setEditingServicio] = useState(null);

    function handleOpenNew() {
        setEditingServicio(null);
        setModalOpen(true);
    }

    function handleOpenEdit(servicio) {
        setEditingServicio(servicio);
        setModalOpen(true);
    }

    async function handleSubmitServicio(data) {
        if (editingServicio) {
            await editServicio(editingServicio.id, data);
        } else {
            await addServicio(data);
        }
        setModalOpen(false);
    }

    async function handleDelete(servicio) {
        if (window.confirm(`Eliminar servicio ${servicio.name}?`)) {
            await removeServicio(servicio.id);
        }
    }

    return (
        <Layout>
            <Box sx={{ width: "100%", maxWidth: "100%", mx: "auto", bgcolor: "background.paper", borderRadius: 4, p: { xs: 2, md: 4 }, boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)", display: "grid", gap: 3 }}>
                <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" sx={{ mb: 2, gap: 2 }}>
                    <div>
                        <Typography variant="h4" sx={{ color: "text.primary", fontWeight: 700 }}>
                            Servicios
                        </Typography>
                        <Typography sx={{ color: "#475569" }}>
                            Administra los servicios con duración, comisión, categoría y requisitos de reserva.
                        </Typography>
                    </div>
                    <Button variant="contained" onClick={handleOpenNew} sx={{ px: 3, py: 1.25, fontSize: 14 }}>
                        Nuevo servicio
                    </Button>
                </Stack>

                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                        <CircularProgress color="inherit" />
                    </Box>
                ) : error ? (
                    <Typography sx={{ color: "#f87171" }}>Error al cargar servicios.</Typography>
                ) : (
                    <ServiciosCarousel servicios={servicios} onEdit={handleOpenEdit} onDelete={handleDelete} />
                )}

                <ServicioModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleSubmitServicio}
                    servicio={editingServicio}
                />
            </Box>
        </Layout>
    );
}

export default Servicios;
