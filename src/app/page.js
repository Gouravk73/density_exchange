import Hero from "@/components/Hero/Hero";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Manifesto from "@/components/manifesto/Manifesto";
import SelfAwarenessTest from "@/components/self-awarness/SelfAwarenessTest";

export default function Home() {
  return (
    <main  >
         <Header/>
         <Hero/>
         <Manifesto/>
         <SelfAwarenessTest/>
         <Footer/>
        
       </main>
  )
}
