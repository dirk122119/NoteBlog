"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import FeaturedPost from './FeaturePost';
import Grid from '@mui/material/Grid';

const query = groq`*[_type=='post']{
  ...,
  author->,
  categories[]->
}{
  title,
  "image":mainImage.asset->url,
  "alt":mainImage.alt,
  "categories":categories[].title,
    publishedAt
}|order(_createdAt desc)`


interface Post {
  title:string,
  image:string,
  alt:string,
  categories:string[],
  publishedAt:string,
}


const featuredPost = {
    title: 'Featured post',
    date: 'Nov 12',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  }

export default async function TestBox() {

  const posts:Post[] = await client.fetch(query)
  return (
    <Box
      sx={{
        display: 'flex',
        height: "100vh",
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 0,
        p: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" component="h2" sx={{ fontWeight: "700",paddingBottom:"32px" }}>
          文章
        </Typography>
        <Grid container spacing={4}>
            {posts.map((post:Post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
      </Container>
    </Box>
  );
}