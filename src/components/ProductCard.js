import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" alt={product.name} image={product.image} />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography paddingY="0.5rem" fontWeight="700">
          ${product.cost}
        </Typography>
        <Rating
        name="read-only"
        value={product.rating}
        precision={0.5}
        readOnly
        />
      </CardContent>
      <CardActions className="card-actions">
        <Button
        className="card-button"
        fullWidth
        variant="contained"
        startIcon={<AddShoppingCartOutlined />}
        onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
