import React from "react";
import "./categories.styles.scss";
import CategoryContainer from "./category-item/categoryContainer.jsx";

function Categories({ categories }) {
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => {
          return <CategoryContainer key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
