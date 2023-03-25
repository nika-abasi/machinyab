import React, { useState } from "react";
import "./FeatredProducts.css";
import FeaturedBrandsCard from "./../Cards/FeaturedBrandsCard";

const totalCards = [
  {
    id: 1,
    img: "/images/test2.jfif",
    title: "sprint",
    desc: "losjdbchbjhbcjhcbkhb6666666cbjcbhjbaqcjhbjhbc",
    boxImg1: "/images/test3.jfif",
    boxTitle1: "sprint",
    boxDesc1: "11111111111",
    boxImg2: "/images/test2.jfif",
    boxTitle2: "sprint",
    boxDesc2: "2222222222222222",
    boxImg3: "/images/test4.jfif",
    boxTitle3: "sprint",
    boxDesc3: "333333333333",
  },
  {
    id: 2,
    img: "/images/test3.jfif",
    title: "green",
    desc: "losjdbchbjdergbrdgrd22222222gdrjhbjhbc",
    boxImg1: "/images/test2.jfif",
    boxTitle1: "tooop",
    boxDesc1: "heloooooooooooooooooooooo",
    boxImg2: "/images/test2.jfif",
    boxTitle2: "tiiiik",
    boxDesc2: "heloooooooooooooooooooooo",
    boxImg3: "/images/test2.jfif",
    boxTitle3: "liiiiiii",
    boxDesc3: "heloooooooooooooooooooooo",
  },
  {
    id: 3,
    img: "/images/test4.jfif",
    title: "dell",
    desc: "losjdbchb1111111111cbhjbaqcjhbjhbc",
    boxImg1: "/images/test3.jfif",
    boxTitle1: "sprint",
    boxDesc1: "heloooooooooooooooooooooo",
    boxImg2: "/images/test2.jfif",
    boxTitle2: "sprint",
    boxDesc2: "heloooooooooooooooooooooo",
    boxImg3: "/images/test4.jfif",
    boxTitle3: "sprint",
    boxDesc3: "heloooooooooooooooooooooo",
  },
  {
    id: 4,
    img: "/images/test2.jfif",
    title: "samsung",
    desc: "losjdbchbjdergbrdgrd22222222gdrjhbjhbc",
    boxImg1: "/images/test3.jfif",
    boxTitle1: "sprint",
    boxDesc1: "heloooooooooooooooooooooo",
    boxImg2: "/images/test2.jfif",
    boxTitle2: "sprint",
    boxDesc2: "heloooooooooooooooooooooo",
    boxImg3: "/images/test4.jfif",
    boxTitle3: "sprint",
    boxDesc3: "heloooooooooooooooooooooo",
  },
  {
    id: 5,
    img: "/images/test3.jfif",
    title: "digi",
    desc: "losjdbchb1111111111cbhjbaqcjhbjhbc",
    boxImg1: "/images/test3.jfif",
    boxTitle1: "sprint",
    boxDesc1: "heloooooooooooooooooooooo",
    boxImg2: "/images/test2.jfif",
    boxTitle2: "sprint",
    boxDesc2: "heloooooooooooooooooooooo",
    boxImg3: "/images/test4.jfif",
    boxTitle3: "sprint",
    boxDesc3: "heloooooooooooooooooooooo",
  },
];

export default function FeaturedProducts(title, desc, image) {
  const [cards, setCards] = useState(totalCards);
  const [selectedId, setSelectedId] = useState(cards[0]);

  const handleItemChange = (event, id) => {
    console.log("clicked", id);
    let selectedCard = cards.find((card) => card.id === id);
    setSelectedId(selectedCard);
    console.log(selectedId);
  };

  return (
    <>
      <div className="feature-product_container">
        <div className="row">
          <div className="brand-container">
            {cards.map((card) => (
              <div
                key={card.id}
                className="image-brand-container "
                onClick={(event) => {
                  handleItemChange(event, card.id);
                }}
              >
                <img src={card.img} alt="" />
                <nav>
                  <ul>
                    <li className="item">
                      <span className="underline-container">
                        <a href="#1"></a>
                      </span>
                    </li>
                  </ul>
                </nav>
                <div className="brand-content_containre">
                  <div className="brand-discription ">
                    <h3>{selectedId.title}</h3>
                    <p>{selectedId.desc}</p>
                  </div>
                  <div className="new-item-container">
                    <div className="new-item  item-1 ">
                    <FeaturedBrandsCard
                      image={selectedId.boxImg1}
                      title={selectedId.boxTitle1}
                      desc={selectedId.boxDesc1}
                    />
                  </div>
                  <div className="new-item item-2 ">
                    <FeaturedBrandsCard
                      image={selectedId.boxImg2}
                      title={selectedId.boxTitle2}
                      desc={selectedId.boxDesc2}
                    />
                  </div>
                  <div className="new-item  item-3 ">
                    <FeaturedBrandsCard
                      image={selectedId.boxImg3}
                      title={selectedId.boxTitle3}
                      desc={selectedId.boxDesc3}
                    />
                  </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
