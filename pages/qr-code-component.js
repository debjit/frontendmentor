import React from "react";

export default function qrcodecomponent() {
  return (
    <>
      <div className="flex bg-blue-100 h-screen">
        <div className="flex-col bg-gray-100 m-6 rounded-xl shadow-xl md:w-80 md:m-auto">
          <div className="relative p-6 ronded-md">
            <div className="overflow-hidden">
              <img
                src="image-qr-code.png"
                alt=""
                className="md:w-full md:h-60 rounded-md"
              ></img>
            </div>
            <h3 className="absolte top-1 m-6 text-2xl text-center font-bold font-mono">
              This is some title text
            </h3>
            <p className="mx-6 mb-10 text-sm text-center text-gray-600">
              This is some of the meaningless text. This is some of the
              meaningless text. This is some of the meaningless text.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}