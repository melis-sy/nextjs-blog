import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Date from "./date";
import { v4 as uuidv4 } from "uuid";

function Main(props) {
  const { posts, title } = props;
  console.log(posts);
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div key={uuidv4()}>
          <h1>{post.title}</h1>
          <Date dateString={post.date} />
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <Divider />
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
