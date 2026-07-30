import { Paper } from "@mui/material";

const citas = [
  {
    cliente: "Carlos",

    hora: "10:00",

    servicio: "Corte",
  },

  {
    cliente: "Miguel",

    hora: "11:30",

    servicio: "Barba",
  },

  {
    cliente: "José",

    hora: "13:00",

    servicio: "Corte + Barba",
  },
];

export default function RecentAppointments() {
  return (
    <Paper
      sx={{
        p: 3,
        bgcolor: "#1F1F1F",
        color: "white",
        height: "100%",
      }}
    >
      <h2
        style={{
          color: "#D4AF37",
        }}
      >
        Reservas de Hoy
      </h2>

      {citas.map((cita, index) => (
        <div
          key={index}
          style={{
            marginBottom: 15,
          }}
        >
          <b>{cita.hora}</b>

          <br />

          {cita.cliente}

          <br />

          {cita.servicio}

          <hr />
        </div>
      ))}
    </Paper>
  );
}
