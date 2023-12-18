import meta from "../../../../assets/img/Project/metavers.jpg";
import movie from "../../../../assets/img/Project/MovieLand.jpg";
import crypto from "../../../../assets/img/Project/Crypto.jpg";

import "./Card.css";

const data = [
  { imge: meta, title: "MetaVerses", desc: "This Project done with nextJs and Framer motion" ,
_link:'https://github.com/DevTaissirHammouda/metaV'},
  { imge: movie, title: "MovieLand", desc: "This Project done with ReactJs" ,
  _link:'https://github.com/DevTaissirHammouda/MovieLand'},
  { imge: crypto, title: "Crypto Price", desc: "This Project done with Angular" ,
  _link:'https://github.com/DevTaissirHammouda/crypto-web-application'},
];

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center ">
      
      {data.map((item) => (
        <div className="flip-card-container  w-[250px] md:w-[350px]" key={item.title}>
          <div className="flip-card absolute ">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={item.imge} alt={item.title} />
                <figcaption className="text-white font-bold">{item.title}</figcaption>
              </figure>
              <ul>
                <li>{item.desc}</li>
              </ul>
            </div>
            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={item.imge} alt={item.title} />
              </figure>
              <a href={item._link} target="_blank">
              <button>See it in GitHub</button></a>
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
