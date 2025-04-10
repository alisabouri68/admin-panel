import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Modal from "./component/modal/Modal";
import Alerts from "./component/alert/Alerts";
import Header from "./component/header/Header";
import ThemeMode from "./component/darklight/ThemeMode";
import MiniDrawer from "./component/sidebar/MiniDrawer"
import { Container, Grid } from "@mui/material";
import Footer from "./component/footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeMode >
          <Grid container spacing={3} paddingRight={3}>
          <Grid size="auto">
              <MiniDrawer/>
          </Grid>
          <Grid container direction={"column"} size="grow">
          <Header />
          {children}
          <Footer/>
          </Grid>
          </Grid>
          <Alerts />
          <Modal />
        </ThemeMode>
        
      </body>
    </html>
  );
}
