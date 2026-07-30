import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette:{

        mode:"dark",

        primary:{
            main:"#D4AF37"
        },

        secondary:{
            main:"#1E1E1E"
        },

        background:{
            default:"#121212",
            paper:"#1F1F1F"
        }

    },

    typography:{

        fontFamily:"Roboto"

    }

})

export default theme;