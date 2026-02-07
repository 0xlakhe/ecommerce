import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = (props) => {
  const { products } = useContext(ShopContext);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const pageItem = products.find((item) => item.id === props.productId);

  useEffect(() => {
    const productsCopy = products.filter(
      (item) =>
        pageItem.category === item.category ||
        pageItem.subcategory === item.subcategory,
    );
    // let productsCopy = products.slice();

    // productsCopy = productsCopy.filter(
    //   (item) => item.category === pageItem.category,
    // );

    // productsCopy = productsCopy.filter(
    //   (item) => item.subcategory === pageItem.subcategory,
    // );

    setFilteredProduct(productsCopy.slice(0, 4));
  }, [pageItem]);

  return (
    <div className="">
      <div className="text-center text-3xl my-15 w-full py-5 border-b border-gray-300">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="flex sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2  mt-20 overflow-x-scroll">
        {filteredProduct.map((item) => {
          return (
            <div className="shrink-0" key={item.id}>
              <ProductItem
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
