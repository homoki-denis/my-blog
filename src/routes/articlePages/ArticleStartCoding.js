import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";

const ArticleStartCoding = function () {
  return (
    <Container maxWidth="xl" className="article-coding">
      <div className="article-coding article-center">
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
          variant="h2"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          How I started to code?
        </Typography>

        <Typography variant="h5" gutterBottom component="div">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          dolores accusamus, hic perspiciatis odio omnis! Quos asperiores
          necessitatibus fugit earum, totam optio sit nisi tempora adipisci a
          quisquam saepe, ullam, veritatis soluta dicta. Quisquam blanditiis
          libero, voluptatem similique tempore qui iure! Nesciunt minus
          temporibus obcaecati alias, ab fugiat quibusdam cum?
        </Typography>
      </div>
    </Container>
  );
};

export default ArticleStartCoding;
