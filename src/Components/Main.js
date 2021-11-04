import { Container } from "@mui/material";
import { Box } from "@mui/system";
import ExpAdderButtons from "./ExpAdderButtons";

export default function Main() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          height: "95vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ExpAdderButtons />
      </Box>
    </Container>
  );
}
