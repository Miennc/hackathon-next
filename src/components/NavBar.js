import React from 'react';
import Link from 'next/link'

function NavBar(props) {
    return (
        <div className="mt-5">
            <div className="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10 lg:mx-12 mb-10">
                <img className="w-16 h-16 " src="https://cdn.tgdd.vn/GameApp/1357107/anh-logo-nike-8-800x544.jpg" alt="" />
                <div className="flex items-center gap-4">
                    <div className="md:inline-block hidden">
                        <ul className="flex items-center gap-4 ">
                            < Link href="/">
                                <li><a href className="font-bold text-lg cursor-pointer">Home</a></li>
                            </Link>
                            <Link href="/category">
                                <li><a href className="font-bold text-lg cursor-pointer">Danh Muc</a></li>
                            </Link>
                            <li><a href className="font-bold text-lg cursor-pointer">Đăng ký</a></li>
                            <li><a href className="font-bold text-lg cursor-pointer">Đăng nhập</a></li>
                            <li><a href className="font-bold text-lg cursor-pointer">my order</a></li>
                        </ul>
                    </div>

                        <div className="md:hidden inline-block ">
                            <i className="fa-solid fa-bars text-3xl" />
                        </div>
                    <Link href="/cart">
                    <div>
                        <i className="fa-solid fa-cart-arrow-down text-3xl cursor-pointer" />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;