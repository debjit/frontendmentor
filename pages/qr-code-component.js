import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function qrcodecomponent() {
  return (
    <div>
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
      <main role="main">
        <div role="article" id="cardinfo" className="flex bg-blue-100 h-screen">
          <div className="flex-col bg-gray-100 m-6 rounded-xl shadow-xl md:w-80 md:m-auto">
            <div className="relative p-6 ronded-md">
              <div className="overflow-hidden">
                <Image
                  src="/image-qr-code.png"
                  width={576}
                  height={576}
                  alt="image qr code"
                  className="md:w-full md:h-60 rounded-md"
                />
              </div>
              <h1 className="absolte top-1 m-6 text-2xl text-center font-bold font-mono">
                Challenge by Frontendmentor Coded by Debjit Biswas
              </h1>
              <p
                className="mx-6 mb-10 text-sm text-center text
            -gray-600"
              >
                Project for frontendmentor.io using tailwind and next.js by
                (Debjit Biswas). This is some of the meaningless text.
              </p>
            </div>
          </div>
        </div>
      </main>
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
    </div>
  );
}
