import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#D4AF37"
        },
        secondary: {
            main: "#64748B"
        },
        background: {
            default: "#F8FAFC",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#0F172A",
            secondary: "#475569"
        },
        divider: "rgba(15, 23, 42, 0.12)"
    },
    typography: {
        fontFamily: "Roboto"
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    color: "#0F172A",
                    borderBottom: "1px solid rgba(15, 23, 42, 0.08)"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 12
                },
                containedPrimary: {
                    backgroundColor: "#D4AF37",
                    color: "#0F172A",
                    '&:hover': {
                        backgroundColor: "#B78F29"
                    }
                },
                outlinedPrimary: {
                    borderColor: "rgba(15, 23, 42, 0.12)",
                    color: "#0F172A"
                }
            }
        }
    }
});

export default theme;