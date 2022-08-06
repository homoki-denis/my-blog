import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";

const ArticleMyFirstGf = function () {
  return (
    <div>
      <Container maxWidth="md">
        <div className="article">
          <CardMedia
            component="img"
            height="400"
            image="https://images.unsplash.com/photo-1591711696773-c4b7fe4d3d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="green iguana"
            sx={{ maxWidth: 1000 }}
          />
          <div className="card-footer article-footer">
            <div className="card-avatar">
              <Avatar alt="Homoki Denis" src={logo} />
              <p>Denis</p>
            </div>

            <div className="card-time">2022.05.07</div>
          </div>

          <Typography
            variant="h4"
            component="div"
            className="cards-heading"
            sx={{ fontWeight: "bold" }}
          >
            My First GF Omg
          </Typography>

          <Typography variant="h5" gutterBottom component="div">
            It was a strange year for me. I start programming again and even
            finish college. It was really tough, but in the end it was rewarding
            nonetheless. Well I fell in love with a girl. 😱
          </Typography>

          <img
            src="https://media.giphy.com/media/x28cIQSn19Tbi/giphy.gif"
            alt=""
            className="gif"
          />

          <Typography variant="h5" gutterBottom component="div">
            I know, I know. I wont be speaking in this article much about
            programming. 😂 But I think I can say a few things about what I have
            learned. Well with work and more work, you need rest. I mean, I
            worked hard but at times I felt really weak. I can't even have the
            power to code anymore. I was just a slave to programming. Well, I
            met this girl at my college I was at. And she taught me, how to
            love, care, be there for someone and how to be a best friend. I
            mean, what could i ask for right? Well, when I really feel
            exhausted, and wanted to take a day off, I just message her and
            spend the day with her. It's really nice.
          </Typography>

          <img
            src="https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif"
            alt=""
            className="gif"
          />

          <Typography variant="h5" gutterBottom component="div">
            And obviously she's a goofball. Like myself. I love her. 💖
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default ArticleMyFirstGf;
