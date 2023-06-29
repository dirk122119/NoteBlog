"use client"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from "next/image"

export default function Banner() {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 0,
                p: 3,
            }}
        >
            <Container maxWidth="xl">
                {/* <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10 mt-10">
                    <div>
                        <h1 className="text-7xl">Blog to notes</h1>
                        <h2 className="mt-5 md:mt-0">
                            Welcome to{" "}
                            <span className="underline decoration-4">my notes</span>{" "}
                            blog
                        </h2>
                    </div>
                    <Typography variant="body2" component="p" sx={{ color: "text.secondary" }}>
                        h1. Heading
                    </Typography>
                </div> */}
                <Paper elevation={3} sx={{ bgcolor: 'white.200', p: 0, m: 0, borderRadius: 0 }}>
                    <img src="/banner.jpeg" alt="banner" width={1700} height={1200} style={{width:"100%",height:"600px"}}/>
                </Paper>
            </Container>
        </Box>
    )
}