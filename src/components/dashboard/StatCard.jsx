import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value, color }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderLeft: `6px solid ${color}`,
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="subtitle1"
          color="gray"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}