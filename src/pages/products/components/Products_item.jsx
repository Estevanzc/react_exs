import { useState } from "react";
import { Link } from "react-router-dom";

function Products_item({ product }) {
    return (
        <Link key={product.id} to={`/products/${product.id}`} className="group relative bg-[rgba(0,0,0,0.1)] px-2 py-2 rounded-lg transition-all hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
            <img src={product.image} className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between px-1">
                <div>
                    <h3 className="text-sm text-[#f0f0f0] font-semibold">
                        <div>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </div>
                    </h3>
                    <p className="mt-1 text-sm text-white px-1">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-[#dadada]">{product.price}</p>
            </div>
        </Link>
    )
}
export default Products_item
