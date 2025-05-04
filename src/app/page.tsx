import ElegantFooter from "@/components/footer/Footer";
import Navbar from "@/components/ui/navbar/Navbar";
import Store from "./store/page";

export default function Home() {
  return (
    <main className=" ">
        <Navbar />
        <Store />
        <ElegantFooter />
      </main>
  );
}
