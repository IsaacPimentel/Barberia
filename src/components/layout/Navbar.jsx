import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
    { label: "Dashboard", to: "/" },
    { label: "Clientes", to: "/clientes" },
    { label: "Reservas", to: "/reservas" },
    { label: "Servicios", to: "/servicios" },
    { label: "Inventario", to: "/inventario" },
    { label: "Reportes", to: "/reportes" },
    { label: "Configuración", to: "/configuracion" }
];

export default function Navbar() {

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: "background.paper",
                boxShadow: "none",
                borderBottom: "1px solid rgba(15,23,42,0.08)",
                py: 1
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="h6" sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: 1 }}>
                        BARBER
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", flex: 1 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.to}
                            component={Link}
                            to={item.to}
                            sx={{
                                color: "text.primary",
                                textTransform: "none",
                                fontWeight: 500,
                                px: 2,
                                py: 1,
                                minWidth: 0,
                                '&:hover': {
                                    bgcolor: 'rgba(212,175,55,0.15)'
                                }
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
