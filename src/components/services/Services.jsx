import './services.scss';
import {motion} from "framer-motion";

const Services = () => {
  return (
    <motion.div className='services'>
      <motion.div className="textContainer">
            <p>Creating Quality Fullstack pages while continuously <br /> elevating my technological skills and knowledge</p>
            <hr/>
     </motion.div>
      <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business
                </h1>
                <button>WHat We Do </button>
            </div>
     </motion.div>
      <motion.div className="listContainer">
        <div className="box">
            <h2> Branding </h2>
                <p>
                    Jargon to fill in later
                </p>
            <button>Go</button>
        </div>    
        <div className="box">
            <h2> Branding </h2>
                <p>
                    Jargon to fill in later
                </p>
            <button>Go</button>
        </div>  
        <div className="box">
            <h2> Branding </h2>
                <p>
                    Jargon to fill in later
                </p>
            <button>Go</button>
        </div>  
        <div className="box">
            <h2> Branding </h2>
                <p>
                    Jargon to fill in later
                </p>
            <button>Go</button>
        </div>  
     </motion.div>
    </motion.div>
  )
}

export default Services
