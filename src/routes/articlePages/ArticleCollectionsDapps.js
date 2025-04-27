import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";
import team from "../../images/team.jpg";

const ArticleCollectionsDapps = function () {
  return (
    <Container maxWidth="md">
      <div className="article">
        <CardMedia
          component="img"
          height="400"
          image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PJiBP-fo3yjeimpuMw59VQ.png"
          alt="green iguana"
          sx={{ maxWidth: 1000 }}
        />
        <div className="card-footer article-footer">
          <div className="card-avatar">
            <Avatar alt="Homoki Denis" src={logo} />
            <p>Denis</p>
          </div>

          <div className="card-time">2024.03.13</div>
        </div>
        <Typography
          variant="h4"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          Scaling The Sandbox NFT Collections dApps
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="text-left"
        >
          The Sandbox is a community-driven creative platform that allows people
          who create games, artwork, and stories to produce, share, own, and
          monetize a wide range of unique content on a decentralized blockchain.
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
          We’ll delve into a segment of The Sandbox platform: NFT collections
          and the process of crafting them.
        </Typography>
        <Typography
          variant="h4"
          className="text-left"
          gutterBottom
          component="div"
          sx={{
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          Creating a Sandbox collection
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
          Designing and integrating the user interface and functionalities for
          new collections is a time-consuming and labor-intensive process. Given
          the perpetual influx of fresh collections, ideas, and adjustments,
          staying current on these developments is crucial for optimal
          performance.
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
          It’s imperative to adhere to accessibility guidelines, craft clean and
          sustainable code, and employ semantic HTML as indispensable norms in
          web development.
        </Typography>
        <Typography
          variant="h4"
          component="div"
          className="cards-heading"
          sx={{ fontWeight: "bold" }}
        >
          Tech stack
        </Typography>
        <Typography
          variant="h5"
          className="text-left"
          gutterBottom
          component="div"
        >
          We use Nuxt, a web framework built on top of Vueand Vite for the
          entire project. It has a straightforward syntax, is simple to use and
          integrate, and performs well, which is exceptionally beneficial for
          the application’s front end.
        </Typography>
        <Typography
          variant="h5"
          className="text-left"
          sx={{
            marginTop: "30px",
          }}
        >
          Making a collection is simple; we have a script that takes care of it,
          but developing one is more complicated. There are two phases to our
          collection: development and production. As mentioned, we use a script
          to generate our collection during development. After the collection
          has been created, we will work on it. This script aids in automating
          the project construction process. We use this script to make our work
          easier because almost every page is the same in some places.
        </Typography>
        <Typography
          variant="h5"
          className="text-left"
          sx={{
            marginTop: "30px",
          }}
        >
          You can find more information about the article{" "}
          <a
            target="_blank"
            href="https://medium.com/qed-builders/scaling-the-sandbox-nft-collections-dapps-ed3005958c6d"
          >
            here
          </a>
          .
        </Typography>
      </div>
    </Container>
  );
};

export default ArticleCollectionsDapps;
