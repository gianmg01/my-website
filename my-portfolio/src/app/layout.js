import './globals.css';

export const metadata = {
  title: 'Giancarlo Giannetti - Portfolio',
  description: "Giancarlo Giannetti's personal portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
