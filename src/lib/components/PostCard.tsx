import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Chip } from '@material-ui/core';
import { useStyles } from '../styles/PostCard.styles';
import { IPost } from '../types';

export interface IPostCardProps {
  post: IPost;
}

export const PostCard: React.FC<IPostCardProps> = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Card className={classes.root}>
      <Box className={classes.leftPart}>
        <CardMedia
          className={classes.photo}
          image={post.author?.photo}
          title="doctor"
        />
        <Typography
          className={classes.fullName}
          component="p"
          variant="subtitle2"
          gutterBottom
          align="center"
        >
          {post.author?.firstName} {post.author?.secondName}
        </Typography>
        <Typography component="p" variant="body2" gutterBottom align="center">
          {post.author?.workPlace}
        </Typography>
      </Box>
      <Box className={classes.rightPart}>
        <Box className={classes.chipRoot}>
          <Chip label={post.postType} size="small" />
          <Chip label={post.direction} size="small" color="secondary" />
        </Box>
        <Typography variant="body1" component="p" align="center">
          {post.preview}
        </Typography>
      </Box>
    </Card>
  );
};
