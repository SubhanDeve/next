import React from "react";

const addproduct = () => {
  return (
    <div>
      <div className="h-[63vh] bg-[#FF5757] m-auto w-2/4 py-6">
        <p className="text-center text-4xl font-semibold text-white">
          Thank you For Being a Part of US
        </p>
        <form className="grid gap-3 w-1/2 m-auto py-6">
          <label className="font-bold text-white">Product Name :</label>
          <input type="text" name="product_name" className="p-2 rounded-lg" />
          <label className="font-bold text-white">Price of the Product :</label>
          <input type="text" name="price" className="p-2 rounded-lg" />
          <label className="font-bold text-white">
            How much Stock You Have?
          </label>
          <input type="text" name="stock" className="p-2 rounded-lg" required />
          <label className="font-bold text-white">
            Write a Description for product :
          </label>
          <textarea
            name="description"
            id=""
            className="p-2 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F13C3C] w-1/2 m-auto p-3 rounded-md shadow-sm text-white shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2"
          >
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
};

export default addproduct;
