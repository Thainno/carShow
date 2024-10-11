import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Car Show",
  description:
    "Descubra o paraíso dos carros com exibições de veículos icônicos. Atualizações regulares, fotos de alta qualidade e informações exclusivas para os amantes de automóveis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
