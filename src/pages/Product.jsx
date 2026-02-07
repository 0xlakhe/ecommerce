import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { RiStarFill, RiStarLine } from "@remixicon/react";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        return (setProductData(item), setImage(item.image[0]));
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 h">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full h-auto sm:w-[80%]">
            <img src={image} className="w-full h-auto  object-cover" alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarLine />
            <p className="pl-2">(69)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`py-2 border px-4 cursor-pointer bg-gray-100 ${item === size ? "border-orange-300" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData.id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Chinese product</p>
            <p>Cash on Delivery</p>
            <p>lalallalalalal</p>
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border-t px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            laborum reiciendis provident maiores ullam illum quibusdam harum
            facere consectetur fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            aperiam reiciendis quam officiis nemo unde laudantium reprehenderit
            quaerat totam ex!
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts productId={productId} />
    </div>
  ) : (
    <div className="opacity-100 bg-black h-100 text-white">hello</div>
  );
};

export default Product;
