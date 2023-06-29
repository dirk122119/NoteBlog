"use client"
import * as React from 'react';
import { Padding } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import myPortableText from '@/components/PortableTextComponents';
type Props = {
    params: { post: string };
}
export default async function Post({ params }: Props) {
    const slug = decodeURI(params.post)
    const query = `*[_type=='post' && title=="${slug}"][0]{
        ...,
        author->,
        categories[]->
      }{
        title,
        "categories":categories[].title,
          body,
          publishedAt
      }`
    const post: any = await client.fetch(query)
    return (
        <Box sx={{
            display: 'flex',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 0,
            p: 3,
        }}>
            <Container maxWidth="xl">
                <Typography variant="h6" gutterBottom>
                    {post.title}
                </Typography>
                <Divider />
                <PortableText value={post.body} components={myPortableText} />
            </Container>
        </Box>


    )
}
