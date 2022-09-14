import React from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";

export default function CategoryComponent() {
  const { category } = useParams();
  const { categoriesMap } = React.useContext(CategoriesContext);
  const [products, setProducts] = React.useState(categoriesMap[category]);

  React.useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <React.Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </React.Fragment>
  );
}
