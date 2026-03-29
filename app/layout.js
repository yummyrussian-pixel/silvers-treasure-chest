export const metadata = {
  title: "Silvers Treasure Chest",
  description: "Luxury Certified Gemstones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        backgroundColor: "#0f0f0f", 
        color: "white",
        fontFamily: "serif"
      }}>
        {children}
      </body>
    </html>
  );
}
