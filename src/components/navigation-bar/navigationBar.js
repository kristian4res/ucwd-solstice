import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <header class="py-6">
            <div class="container flex justify-between items-center mx-auto px-8
                        md:px-14 lg:px-24 w-full">
                <div class="text-lg font-bold">Solstice</div>
                <nav class="hidden md:flex space-x-12 items-center">
                    <Link to="/explore" class="text-selected-text">Explore</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/faq">FAQ</Link>
                    <a href="#">
                        <button class="px-6 py-2 bg-theme font-bold">Profile</button>
                    </a>
                </nav>
                <div class="md:hidden cursor-pointer">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;