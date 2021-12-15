import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <AppBar position="relative" color="primary">
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <h3>Hostel Guru | All Rights Reserved</h3>
        <FacebookIcon sx={{ height: "0.5rem" }} />
      </Container>
    </AppBar>
  );
}
