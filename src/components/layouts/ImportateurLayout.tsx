import ImportateurNavbar from "@/components/ImportateurNavbar";
import Footer from "@/components/Footer";

interface ImportateurLayoutProps {
  children: React.ReactNode;
}

const ImportateurLayout = ({ children }: ImportateurLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ImportateurNavbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ImportateurLayout; 