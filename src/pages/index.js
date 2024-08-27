import { Inter } from "next/font/google";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Category from "./components/Category";
import Brand_Area from "./components/Brand_Area";
import Related_product from "./components/Related_product";
import ProductCarousel from "./components/ProductCarousel";
import ExclusiveDeal from "./components/ExclusiveDeal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
   <Banner/>
   <Features/>
   <Category/>
   <ProductCarousel/>
   <ExclusiveDeal/>
   <Brand_Area/>
   <Related_product/>
     </>
  );
}
