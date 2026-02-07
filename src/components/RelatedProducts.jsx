import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = (props) => {
  const { products } = useContext(ShopContext);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const pageItem = products.find((item) => item.id === props.productId);

  useEffect(() => {
    const filter = products.filter(
      (item) =>
        pageItem.category === item.category ||
        pageItem.subcategory === item.subcategory,
    );

    setFilteredProduct(filter);
  }, []);
  console.log(filteredProduct);

  return (
    <div className="flex sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 overflow-x-scroll mt-20">
      {filteredProduct.map((item, index) => {
        return (
          <div className="shrink-0">
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RelatedProducts;
