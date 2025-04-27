import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MainContent = function () {
  return (
    <div className="main-content">
      <Box className="main">
        <Typography variant="h2" component="div" className="main-heading">
          My Blog
        </Typography>
      </Box>
    </div>
  );
};

export default MainContent;
