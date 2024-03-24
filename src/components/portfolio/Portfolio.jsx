import { useRef } from "react";
import  "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id:1,
    title:"React Commerce",
    img: "https://images.pexels.com/photos/18714721/pexels-photo-18714721/free-photo-of-boardwalk-in-a-green-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Pexels for pexels Come come Como ",
  },
  {
    id:2,
    title:"Next.js Commerce",
    img: "https://images.pexels.com/photos/20590867/pexels-photo-20590867/free-photo-of-travel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Coded Next for the Pexels for pexels Come come Como ",
  },
  {
    id:3,
    title:"Vanilla JS App",
    img: "https://images.pexels.com/photos/20386572/pexels-photo-20386572/free-photo-of-hojas-del-bosque.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Vanilla JS world for Pexels for pexels Come come Como ",
  },
  {
    id:4,
    title:"Music App",
    img: "https://images.pexels.com/photos/20142050/pexels-photo-20142050/free-photo-of-cherry-blossom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc:"Music Jams for the Pexels for pexels Come come Como ",
  },
];

const Single = ({item}) =>{

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref, 
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer"  style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
