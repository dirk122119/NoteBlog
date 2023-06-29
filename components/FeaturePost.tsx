import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

interface FeaturedPostProps {
  post: {
    title: string,
    image: string,
    alt: string,
    categories: string[],
    publishedAt: string,
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} sm={4} md={3} >

      <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea component="a" href={`/posts/${post.title}`} sx={{height: '100%'}}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '52.25%',
              backgroundPosition: "top",
              objectFit: "contain"
            }}
            image={post.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom component="h2" variant="h5" sx={{display:"-webkit-box",textOverflow:"ellipsis",overflow:"hidden",width:"100%",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>
              {post.title}
            </Typography>
            
            <Typography variant="subtitle1" >
              {post.publishedAt.split("T")[0]}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}