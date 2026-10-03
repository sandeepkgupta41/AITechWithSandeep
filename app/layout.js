import "./globals.css";

export const metadata = {
  title: "AITechWithSandeep — Free AI Chat & Tools",
  description: "A practical AI platform for chat, writing, summarizing and ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
