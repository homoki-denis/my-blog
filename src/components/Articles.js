import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import logo from "../images/1.png";

const Articles = function () {
  return (
    <div className="articles">
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          Articles
          <hr className="line" />
        </Typography>

        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item md={4} sm={6} xs={12}>
            <Link className="link" to="/how-i-started-coding">
              <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      How I started to code?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Well, it was kind of difficult. I started learning HTML
                      and at that time, I was so frustrated because I thought it
                      was so hard to learn for the first time. But I kept
                      working on myself and improving...
                    </Typography>
                    <div className="card-footer">
                      <div className="card-avatar">
                        <Avatar alt="Homoki Denis" src={logo} />
                        <p>Denis</p>
                      </div>

                      <div className="card-time">2022.05.07</div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Link className="link" to="/improving-the-web">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Improving the web since 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      As i said in the last article, I took a break from
                      programming and came back a year later with high hopes and
                      determination. 😎 And then start learning on my own. It
                      was fun, I was on my own pace...
                    </Typography>
                    <div className="card-footer">
                      <div className="card-avatar">
                        <Avatar alt="Homoki Denis" src={logo} />
                        <p>Denis</p>
                      </div>

                      <div className="card-time">2022.05.07</div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Link className="link" to="/my-first-gf">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1591711696773-c4b7fe4d3d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      My first GF omg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias tempora, est saepe quod maiores sed quae iste.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <div className="card-footer">
                      <div className="card-avatar">
                        <Avatar alt="Homoki Denis" src={logo} />
                        <p>Denis</p>
                      </div>

                      <div className="card-time">2022.05.07</div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Link className="link" to="/my-colleagues">
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1656877280239-e94807c536cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      How I met my colleagues?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias tempora, est saepe quod maiores sed quae iste.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <div className="card-footer">
                      <div className="card-avatar">
                        <Avatar alt="Homoki Denis" src={logo} />
                        <p>Denis</p>
                      </div>

                      <div className="card-time">2022.05.07</div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Articles;
