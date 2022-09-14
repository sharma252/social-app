import React from "react";
import "./categories.styles.scss";
import DirectoryItem from "./directory-item/directory-item.component";

function Categories({ categories }) {
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
