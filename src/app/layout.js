import { Rajdhani, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/views/appbars/Navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/views/appbars/Footer/Footer";
import PageLoader from "@/components/PageLoader";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Fitwell - Fitness and Gym",
  description: "Fitness and Gym HTML Template",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${rubik.variable} h-full antialiased`}
    >
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png"></link>
      </head>
      <body className="min-h-full flex flex-col cursor-default">
        <PageLoader />
        <CustomCursor />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}





