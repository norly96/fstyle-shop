import  { Navbar }   from "@/components/index";
import Footer from "@/components/ui/Footer/Footer";

export default function ShopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div >
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );
  }