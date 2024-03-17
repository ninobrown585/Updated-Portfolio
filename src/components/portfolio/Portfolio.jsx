import  "./portfolio.scss";

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
  return(
    <section>
      {item.title}
    </section>
  )
}

const Portfolio = () => {
  return (
    <div className="portfolio">
      Portfolio
    </div>
  )
}

export default Portfolio
