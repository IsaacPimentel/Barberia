import { Box } from "@mui/material";
import Navbar from "./Navbar";

export default function Layout({children}){

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#121212", color: "white" }}>
            <Navbar />
            <Box
                component="main"
                sx={{
                    width: "100%",
                    minHeight: "calc(100vh - 72px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    py: 4,
                    px: 0,
                    bgcolor: "#121212"
                }}
            >
                <Box sx={{ width: "100%", maxWidth: 1280, px: { xs: 2, md: 3 } }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );

}