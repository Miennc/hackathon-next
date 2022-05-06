import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar";
import Slide from "../../components/Slide";
import CheckboxItem from "../../components/CheckboxItem";
import ProductItem from "../../components/ProductItem";
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../actions/product";
import {getCategory} from "../../actions/category";
function Index(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.category.data.data);
    const listProduct = useSelector(state => state.product.product.data.data);
    useEffect(() => {   
      dispatch(getCategory());
      dispatch(getProducts());
    }, []);
    return (    
        <div className="container mx-auto space-y-4">
            <NavBar/>
            <div className="mx-12">
            <Slide page_type={2}/>
            </div>

            <div className="flex flex-no-wrap mx-12">
                {/* Sidebar starts */}
                {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
                <div
                    className="w-64 absolute sm:relative  mt-12 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <ul className="mt-12">
                           {
                            categories?.map((item,index)=>{
                                return (
                                    <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" key={index}>
                                    <div className="flex items-center">
                                        <span className="text-xl font-bold  ml-2 text-black">{item.name}</span>
                                    </div>
                                    <div
                                        className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5
                                    </div>
                                </li>
                                )
                            })
                           }
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    <div
                        className="w-full h-full rounded border-dashed border-2 border-gray-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                           {
                                (listProduct || []).map((item, index) =>
                                    <ProductItem key={index} product={item}/>
                                )
                            }
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;