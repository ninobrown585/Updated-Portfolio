import { useRef, useState } from "react";
import "./contact.scss";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
   

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_o2edq1g', 'template_2p35jej', formRef.current, {
            publicKey: 'oKUznNsNQiY5k9gd6',
          })
          .then(
            () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
          );
      };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Want to work together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>Available upon request</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Available upon request</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>Available upon request</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration: 1}}>
      <svg width="800px" height="800px" viewBox="0 0 1024 1024">
        <motion.path 
        strokeWidth={0.2}
        fill="none" 
        initial={{pathLength:0}} 
        whileInView={{pathLength:1}} 
        transition={{duration: 3}}
        d="M79.36 432.256L591.744 944.64a32 32 0 0035.2 6.784l253.44-108.544a32 32 0 009.984-52.032l-153.856-153.92a32 32 0 00-36.928-6.016l-69.888 
        34.944L358.08 394.24l35.008-69.888a32 32 0 00-5.952-36.928L233.152 133.568a32 32 0 00-52.032 10.048L72.512 397.056a32 32 0 
        006.784 35.2zm60.48-29.952l81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 
        41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 01256 256h-64a192 192 0 00-192-192zm0-192V64a448 
        448 0 01448 448h-64a384 384 0 00-384-384z"/></svg></motion.div>
            <motion.form
            ref={formRef} 
            onSubmit={sendEmail}
            initial={{opacity:0}} 
            whileInView={{opacity:1}} 
            transition={{delay:4, duration: 1}}>
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message" />
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact
