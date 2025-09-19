import { useState } from "react";
import loading_icon from "../../../components/images/loading.svg";
import Products_item from "./Products_item";

function Products_lista({products, is_loading}) {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-[#f0f0f0]">Lista de produtos</h2>

                {is_loading ? (<div className="w-full h-full flex justify-center items-center text-white"><img className="w-16 h-16" src={loading_icon}></img></div>):(
                <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
                    {products.map(product => (
                    <Products_item product={product} />
                    ))}
                </div>)}
            </div>
        </div>
    )
}
export default Products_lista
