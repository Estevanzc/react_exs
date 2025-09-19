import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loading_icon from "../../../components/images/loading.svg";

function Products_view() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        async function api_fetcher() {
            try {
                let response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setData(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        api_fetcher()
    }, [])
    return (
        <div className="pt-6">
            {loading ? (<div className="w-full h-full flex justify-center items-center text-white"><img className="w-16 h-16" src={loading_icon}></img></div>) : (
                <div className="pt-6">
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                        <img
                            src={data.image}
                            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-[#f0f0f0] sm:text-3xl">{data.title}</h1>
                        </div>
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-[#f0f0f0]">$ {data.price}</p>

                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                    </div>
                                    <p className="sr-only">2 out of 5 stars</p>
                                    <a className="ml-3 text-sm font-medium text-[#cacaca] hover:text-blue-500">
                                        125 reviews
                                    </a>
                                </div>
                            </div>
                            <form className="mt-10">
                                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden">
                                    Add to bag
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-[#f0f0f0]">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Products_view
