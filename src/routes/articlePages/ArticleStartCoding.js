import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";

const ArticleStartCoding = function () {
  return (
    <Container maxWidth="md">
      <div className="article">
        <CardMedia
          component="img"
          height="400"
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
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
          How I Started To Code?
        </Typography>

        <Typography variant="h5" gutterBottom component="div">
          Well, it was kind of difficult. I started learning HTML and at that
          time, I was so frustrated because I thought it was so hard to learn
          for the first time. But I kept working on myself and improving day by
          day, watching videos and tutorials online. Started with{" "}
          <a href="https://www.w3schools.com/">W3Schools</a> as my first
          interaction with programming in general. With HTML, then CSS, then JS.
          Well it was a blast. 💪
        </Typography>

        <img
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          alt=""
          className="gif"
        />

        <Typography variant="h5" gutterBottom component="div">
          I started to view programming and designing from a different
          perspective. I understand how the code works. 😁 Well at least I think
          that. When i started building my own aplications... Well, it was a
          disaster. 😂 I did not create anything without looking at a tutorial
          or on the internet or something. Well then I became frustrated and
          start to think that programming is not for me. Then I took a break. A
          looong break, like an year or something. In that year I focused more
          on my college. And started again with programming about a year later.
          😎 And I manage again with this and tried my hardest. Taking more
          courses and tutorials online. And at least, well, making this blog in
          React that I am proud of. 💖
        </Typography>

        <img
          src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif"
          alt=""
          className="gif"
        />
      </div>
    </Container>
  );
};

export default ArticleStartCoding;
