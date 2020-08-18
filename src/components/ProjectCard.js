import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fullHeightCard: {
    height: "100%",
  },
}));

const ProjectCard = ({ title, img, type, description, github }) => {
  const classes = useStyles();

  return (
    <Card raised className={classes.fullHeightCard} square>
      <CardHeader
        title={title}
        action={
          <IconButton href={github} target="_blank">
            <GitHubIcon />
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
