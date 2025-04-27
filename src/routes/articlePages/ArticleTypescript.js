import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";

const ArticleTypescript = function () {
  return (
    <Container maxWidth="md">
      <div className="article">
        <CardMedia
          component="img"
          height="400"
          image="https://cdn.hashnode.com/res/hashnode/image/upload/v1643195053682/FX3QVFNMV.png?auto=compress,format&format=webp"
          alt="green iguana"
          sx={{ maxWidth: 1000 }}
        />
        <div className="card-footer article-footer">
          <div className="card-avatar">
            <Avatar alt="Homoki Denis" src={logo} />
            <p>Denis</p>
          </div>

          <div className="card-time">2025.01.06</div>
        </div>

        <Typography
          variant="h4"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          Typescript
        </Typography>

        <Typography variant="h5" gutterBottom component="div">
          When I first discovered TypeScript, it felt like someone had finally
          turned on the lights in a room where I'd been coding blindfolded. Here
          was JavaScript—the language I knew and loved—but supercharged with
          type safety, better tooling, and scalable architecture patterns. I
          dove in headfirst, eager to unlock its potential.
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          Like many developers, I had a love-hate relationship with JavaScript.
          Its dynamic nature was freeing, but that freedom came at a cost. How
          many times had I lost hours to runtime errors because of a simple typo
          or an undefined variable? How often did I refactor code, only to break
          something in another part of the application because there was no way
          to track dependencies?
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          I was tired of:
          <ul className="list">
            <li>
              Mystery objects – "What properties does this API response actually
              have?"
            </li>
            <li>
              Silent failures – "Why did this function return undefined instead
              of throwing an error?"
            </li>
            <li>
              Documentation guesswork – "Wait, was this parameter supposed to be
              a string or a number?"
            </li>
          </ul>
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          Today, I can’t imagine working without TypeScript. What started as an
          experiment became an essential part of my toolkit. It’s not just about
          preventing errors—it’s about writing code with confidence, knowing
          that if it compiles, it has a fighting chance of working as intended.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          To anyone on the fence: yes, there’s a learning curve. But the
          payoff—cleaner, more maintainable, and self-documenting code—is
          absolutely worth it. TypeScript didn’t just change how I code; it
          changed how I think about coding.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
          }}
        >
          And that’s the real magic of types. ✨
        </Typography>
      </div>
    </Container>
  );
};

export default ArticleTypescript;
