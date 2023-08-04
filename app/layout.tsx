import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Dekho Car",
  description: "Rent a car because we know you cant afford one",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
