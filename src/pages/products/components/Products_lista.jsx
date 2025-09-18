import { useState } from "react";
import loading_icon from "../../../components/images/loading.svg";
import Products_item from "./Products_item";

function Products_lista({products, is_loading}) {
    return (
        <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de produtos</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {is_loading ? (<img src={loading_icon}></img>) : products.map(product => {
                        <Products_item product={product} />
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default Products_lista
