import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip
} from "recharts";

const data = [

{dia:"Lun",ventas:250},
{dia:"Mar",ventas:500},
{dia:"Mié",ventas:320},
{dia:"Jue",ventas:800},
{dia:"Vie",ventas:900},
{dia:"Sáb",ventas:1200},
{dia:"Dom",ventas:700},

];

export default function SalesChart(){

return(

<div
style={{
background:"#1F1F1F",
padding:20,
borderRadius:15,
height:350
}}
>

<h2
style={{
color:"#D4AF37"
}}
>

Ventas Semanales

</h2>

<ResponsiveContainer width="100%" height="85%">

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="dia"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="ventas"

stroke="#D4AF37"

strokeWidth={4}

/>

</LineChart>

</ResponsiveContainer>

</div>

)

}