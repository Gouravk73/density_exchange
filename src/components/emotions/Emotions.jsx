"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import EmotionData from "./EmotionData";
import Card from "./Card";
const Emotions = () => {
  return (
    <div  >
       
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {EmotionData.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};



export default Emotions;
 