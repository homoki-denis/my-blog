import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";
import team from "../../images/team.jpg";

const ArticleMyColleagues = function () {
  return (
    <Container maxWidth="md">
      <div className="article">
        <CardMedia
          component="img"
          height="400"
          image={team}
          alt="green iguana"
          sx={{ maxWidth: 1000 }}
        />
        <div className="card-footer article-footer">
          <div className="card-avatar">
            <Avatar alt="Homoki Denis" src={logo} />
            <p>Denis</p>
          </div>

          <div className="card-time">2023.10.11</div>
        </div>
        <Typography
          variant="h4"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          My first job
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="text-left"
        >
          My first job was more than just a professional starting point—it was
          where I met my first dream team, a group of talented and supportive
          people who helped me grow, learn, and thrive. Together, we didn’t just
          work on projects; we grew as developers and as a team.
        </Typography>
        <Typography
          variant="h5"
          className="text-left"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          There are moments in your career that stay with you forever, and for
          me, that was meeting my first real team. They weren't just coworkers
          passing through my life—they became the foundation upon which I built
          my entire approach to work, growth, and what it means to be part of
          something bigger than yourself.
        </Typography>

        <Typography
          variant="h5"
          className="text-left"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          From the very beginning, they met me not with judgment for what I
          didn't know, but with excitement for what I could learn. When I
          stumbled through my first Vue.js components, they sat beside me. When
          TypeScript's types felt like an impossible puzzle, they untangled the
          confusion without ever making me feel small. What could have been
          intimidating became empowering because of how they taught—not just the
          syntax, but the why behind every decision.
        </Typography>
        <Typography
          variant="h5"
          className="text-left"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          We grew in that beautiful, messy way that only happens when people
          truly care. They celebrated my progress as if it were their own,
          turning small wins into shared victories. The late nights debugging
          weren't burdens but bonding experiences, filled with inside jokes that
          still make me smile. They created an environment where asking "stupid
          questions" wasn't just allowed—it was encouraged, because that's how
          we all improved.
        </Typography>
      </div>
    </Container>
  );
};

export default ArticleMyColleagues;
