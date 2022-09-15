import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

function DirectoryItem({ product }) {
  const { route } = product;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      />
      <Body>
        <h2>{product.title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
