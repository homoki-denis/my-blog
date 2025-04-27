import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ComputerIcon from "@mui/icons-material/Computer";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <ComputerIcon fontSize="large" />
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, pl: 1 }}
              >
                Homoki Denis
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
