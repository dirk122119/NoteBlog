"use client"
import '../../styles/globals.css'
import * as React from "react"
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

import {ThemeProvider,createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <Header />
          {children}
          </ThemeProvider>
    </ColorModeContext.Provider>
      </body>
    </html>
  )
}
