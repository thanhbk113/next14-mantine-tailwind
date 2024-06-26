import "./globals.css";

import { MantineProvider, createTheme } from "@mantine/core";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { appConfig } from "./config/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quản lý",
};

const theme = createTheme({
  colors: {
    primary: [
      appConfig.colors.primary[50],
      appConfig.colors.primary[100],
      appConfig.colors.primary[200],
      appConfig.colors.primary[300],
      appConfig.colors.primary[500],
      appConfig.colors.primary[600],
      appConfig.colors.primary[700],
      appConfig.colors.primary[800],
      appConfig.colors.primary[900],
      appConfig.colors.primary[950],
    ],
  },
  fontFamily: "inherit",
  primaryColor: "primary",
  primaryShade: 4,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-mantine-color-scheme="light" lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>

      <body className={font.className}>
        <MantineProvider theme={theme}>
          <ToastContainer />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
