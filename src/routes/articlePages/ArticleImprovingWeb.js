import { Container, Typography, CardMedia } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../../images/1.png";

const ArticleImprovingWeb = function () {
  return (
    <Container maxWidth="md">
      <div className="article">
        <CardMedia
          component="img"
          height="400"
          image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
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
          Improving The Web Since 2021
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="text-left"
        >
          As i said in the last article, I took a break from programming and
          came back a year later with high hopes and determination. 😎 And then
          start learning on my own. It was fun, I was on my own pace and nobody
          was rushing me to do anything. But this technique has a problem.
          People, i did not interact with anybody. I was alone, of course, I
          learn but with who i can compare my code to? With who I can discuss my
          problems? Well this is a different story and I will tell you about it
          in the next article. Now, how I started improving the web? Well, I
          started looking for solutions to the problems. Let's say an app that
          helps people, or makes it eazy for people to do tasks, like my{" "}
          <a href="/">todo app</a>.
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Well i started learning code with some of the free sources out there,
          like:
          <ul className="list">
            <li>
              <a href="https://www.w3schools.com/">W3School</a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
            </li>
            <li>
              <a href="https://www.sololearn.com/">Sololearn</a>
            </li>
          </ul>
        </Typography>
        <img
          src="https://media.giphy.com/media/QuIxFwQo0RMT1tASlV/giphy.gif"
          alt=""
          className="gif"
        />
        <Typography variant="h5" gutterBottom component="div">
          Then I kept learning and learning, and then boom. 💥💥💥 Tutorial
          hell. 😭 I was doing tutorial after tutorial but with no success on
          creating my app on my own. Then I started looking at a tutorial, let's
          say a todo app, then after I watch it, I code it without looking. Well
          it was hard, but manageable. In the end i have a grasp of what I
          should do and I should think when i'm developing an app.
        </Typography>
        <pre>
          <code>
            {`<div className={styles.container}>
      <Head>
        <title>Denis Homoki Blog</title>
        <meta name="description" content="A blog made with React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Denis Homoki</h1>
      </main>
    </div>`}
          </code>
        </pre>

        <Typography variant="h5" gutterBottom component="div">
          I can write code in React omg. 😱
        </Typography>
        <img
          src="https://media.giphy.com/media/CXnj3jCwvETngjy11B/giphy.gif"
          alt=""
          className="gif"
        />
      </div>
    </Container>
  );
};

export default ArticleImprovingWeb;
