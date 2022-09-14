import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../routes/categories-preview/categories-preview.component";
import CategoryComponent from "../routes/category/category.component";
import "./shop.styles.scss";

export default function ShopComponent() {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
}
