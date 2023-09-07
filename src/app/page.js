import Hero from "@/components/Hero/Hero";
import Emotions from "@/components/emotions/Emotions";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Manifesto from "@/components/manifesto/Manifesto";
import SelfAwarenessTest from "@/components/self-awarness/SelfAwarenessTest";
import WorkMain from "@/components/workwithus/WorkMain";

export default function Home() {
  return (
    <main  >
         <Header/>
         <Hero/>
         <Emotions/>
         <Manifesto/>
         <SelfAwarenessTest/>
         <WorkMain/>
         <Footer/>
        
       </main>
  )
}
