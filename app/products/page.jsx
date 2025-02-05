import FavouriteBtn from "../content/fav";

import productlist from "../content/product";
export default async function Product() {
  const products = await productlist();

  return (
    <div>
      <div className="flex m-auto justify-center gap-4 mt-3">
        <div className="w-96">
          <input
            type="text"
            placeholder="SEARCH HERE"
            className="p-4 rounded-lg w-full"
          />
        </div>
        <div className="">
          <a href="/addproduct">
            <button
              type="button"
              className="bg-[#F13C3C] text-sm p-3 rounded-md shadow-sm text-white shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2"
            >
              + Add Products
            </button>
          </a>
        </div>
      </div>
      <div className="text-center text-5xl p-6">
        <h1>Product List</h1>
      </div>
      {products.map((product) => {
        const { id, image, title, price, description } = product;
        return (
          <div className="flex relative rounded-md bg-[#FF5757] p-8 gap-8 w-2/4 my-6 items-center m-auto shadow-[#F13C3C] shadow-lg">
            <div>
              <img
                src={product.image}
                alt="Product Images"
                width="150px"
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p>${product.price}</p>
              <p>{product.description.slice(0, 100)}...</p>
              <div className="flex justify-between mt-14">
                <button className="bg-[#F13C3C] p-3 rounded-md shadow-sm shadow-black hover:bg-[#fc2e2e] border-[#444444] border-2">
                  View Detail
                </button>
                <FavouriteBtn />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
