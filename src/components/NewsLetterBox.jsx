import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
    <div className="text-center my-20 ">
      <p className="text-2xl font-medium text-gray-800">Subscribe gara</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        consequatur.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex whitespace-nowrap items-center mx-auto my-6 border pl-3"
      >
        <input
          className="w-full outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white p-4 cursor-pointer"
          type="submit"
        >
          grayo grayo!!
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
