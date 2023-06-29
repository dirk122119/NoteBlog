"use client"
import Link from "next/link";
import Image from "next/image";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from "@/app/(user)/layout";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";


export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <>
            <AppBar position="static" sx={{paddingY:"10px"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1 }}>
                            <IconButton href="/">
                                    <Avatar alt="LOGO" src="/logo.png" />
                            </IconButton>
                        </Box>
                        <Box sx={{ right:"0px" }}>
                            <IconButton onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>

    )
}