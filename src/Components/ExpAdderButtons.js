import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ExpAdderButton = styled(Button)(({ theme }) => ({
  height: "50px",
  width: "200px",
  margin: "10px",
}));

export default function ExpAdderButtons() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContents: "center",
        gap: "5px",
      }}
      item
      direction="column"
    >
      <ExpAdderButton variant="contained" color="secondary">
        increase strenght
      </ExpAdderButton>
      <Typography>Strenght Level: {}</Typography>
      <Typography>Strenght EXP: {}</Typography>

      <ExpAdderButton variant="contained" color="secondary">
        increase endurance
      </ExpAdderButton>
      <Typography>Endurance Level: {}</Typography>
      <Typography>Endurance EXP: {}</Typography>

      <ExpAdderButton variant="contained" color="secondary">
        increase speed
      </ExpAdderButton>
      <Typography>Speed Level: {}</Typography>
      <Typography>Speed EXP: {}</Typography>

      <ExpAdderButton variant="contained" color="secondary">
        increase intelligence
      </ExpAdderButton>
      <Typography>Intelligence Level: {}</Typography>
      <Typography>Intelligence EXP: {}</Typography>

      <ExpAdderButton variant="contained" color="secondary">
        increase luck
      </ExpAdderButton>
      <Typography> Luck Level: {}</Typography>
      <Typography> Luck EXP: {}</Typography>
    </Grid>
  );
}
