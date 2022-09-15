import React from "react";
import "./categories.styles.scss";
import DirectoryItem from "./directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shopComponent/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shopComponent/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shopComponent/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shopComponent/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shopComponent/mens",
  },
];

function Categories() {
  return (
    <div>
      <div className="categories-container">
        {categories.map((product) => {
          return <DirectoryItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
