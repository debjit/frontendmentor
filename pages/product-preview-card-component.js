import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function qrcodecomponent() {
  return (
    <>
      <Head>
        <title>
          Debjit Biswas project for front end mentor using tailwind and next.js
        </title>
        <meta
          name="description"
          content="Debjit Biswas Frontendmentor end mentor using tailwind and next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div role="article" id="cardinfo" className="flex bg-blue-100 h-screen">
          <div className="max-w-md bg-white md:max-w-2xl m-auto overflow-hidden rounded-xl">
            <div className="md:flex">
              <div className="flex-shrink-0">
                <img
                  className="object-cover h-48 w-full md:h-full md:w-60"
                  src="/product-preview-card-component/image-product-desktop.jpg"
                  alt="Shop Image"
                ></img>
              </div>
              <div className="p-6 md:w-60">
                <div className="uppercase tracking-[.3em]">Perfume</div>
                <h1 className="py-4 capitalize font-mono font-extrabold text-3xl">
                  Debjit&#39;s personal Brand
                </h1>
                <p>
                  Hello and thank you for being here, This is an awesome things.
                </p>
                <div className="py-4 font-extrabold font-mono inline-flex text-3xl ">
                  $149.99<span className="pl-2 line-through text-sm">$199</span>
                </div>
                <div className="items-center">
                  <button className="relative inline-flex items-center p-4 bg-green-900 text-white text-sm rounded-xl mx">
                    <img
                      src="/product-preview-card-component/icon-cart.svg"
                      alt="Cart Icon"
                    />
                    <span className="pl-1">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://debjit.in" target="_blank" rel="noopener noreferrer">
            Debjit Biswas
          </a>
          .
        </div>
      </main>
    </>
  );
}
