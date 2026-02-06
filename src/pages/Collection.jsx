import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropRightLine } from "@remixicon/react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    //first ma category empty array  huncha, yo if statemend le checkbox ma vako value subCategory ma cha ki chaina check garcha cha vane remove garcha, chaina vane add
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    //yesma category array ma  item ko category cha vane matra include garne vaneko ho

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subcategory),
      );
    }
    setFilterProduct(productsCopy);
  };

  const sortProduct = () => {
    let filterCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(filterCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(filterCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProduct(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter  */}
      <div className="min-w-60">
        <div
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="w-fit"
        >
          <p className="my-2 text-xl flex items-center cursor-pointer">
            FILTERS
            <RiArrowDropRightLine
              size={30}
              className={`${showFilter ? "rotate-90" : ""} sm:hidden text-gray-400`}
            />
          </p>
        </div>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Men"}
                className="w-3"
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Women"}
                className="w-3"
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Kids"}
                className="w-3"
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block `}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Topwear"}
                className="w-3"
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Bottomwear"}
                className="w-3"
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Winterwear"}
                className="w-3"
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Sort */}
          <select
            onChange={(e) => {
              return setSortType(e.target.value);
            }}
            className="border border-gray-400 text-sm px-3 cursor-pointer"
          >
            <option value="relavent">Sort by Relavent</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>
        {/* Mapping */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
