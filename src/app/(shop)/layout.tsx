import  { Navbar }   from "@/components/index";

export default function ShopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div >
        <Navbar/>
        {children}
      </div>
    );
  }