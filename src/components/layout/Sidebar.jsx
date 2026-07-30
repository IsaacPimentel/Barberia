import {
Drawer,
List,
ListItemButton,
ListItemIcon,
ListItemText
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import InventoryIcon from "@mui/icons-material/Inventory";

import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar(){

    return(

        <Drawer
        variant="permanent"
        sx={{
            width:drawerWidth,
            flexShrink:0,
            "& .MuiDrawer-paper":{

                width:drawerWidth,
                bgcolor:"#1B1B1B",
                color:"white"

            }
        }}
        >

            <h2
            style={{
                color:"#D4AF37",
                textAlign:"center",
                marginTop:20
            }}
            >

                BARBER

            </h2>

            <List>

                <ListItemButton component={Link} to="/">

                    <ListItemIcon>

                        <DashboardIcon sx={{color:"#D4AF37"}}/>

                    </ListItemIcon>

                    <ListItemText primary="Dashboard"/>

                </ListItemButton>

                <ListItemButton component={Link} to="/clientes">

                    <ListItemIcon>

                        <PeopleIcon sx={{color:"#D4AF37"}}/>

                    </ListItemIcon>

                    <ListItemText primary="Clientes"/>

                </ListItemButton>

                <ListItemButton component={Link} to="/reservas">

                    <ListItemIcon>

                        <CalendarMonthIcon sx={{color:"#D4AF37"}}/>

                    </ListItemIcon>

                    <ListItemText primary="Reservas"/>

                </ListItemButton>

                <ListItemButton component={Link} to="/servicios">

                    <ListItemIcon>

                        <ContentCutIcon sx={{color:"#D4AF37"}}/>

                    </ListItemIcon>

                    <ListItemText primary="Servicios"/>

                </ListItemButton>

                <ListItemButton component={Link} to="/inventario">

                    <ListItemIcon>

                        <InventoryIcon sx={{color:"#D4AF37"}}/>

                    </ListItemIcon>

                    <ListItemText primary="Inventario"/>

                </ListItemButton>

            </List>

        </Drawer>

    )

}