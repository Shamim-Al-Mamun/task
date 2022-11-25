import React from "react";

function Hero() {
  return (
    <div>
      {/* small device */}
      <div className="md:hidden">
        <div className="w-2/4 text-center m-auto">
          <div className="text-end font-bold text-h3">React</div>
          <div className="text-end font-bold text-h3">Conference</div>
        </div>
        <div>
          <p className="text-h5 py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-center">
          <button className="bg-yellow hover:bg-blue-700 py-2 px-4 rounded-full">
            But Tickets
          </button>
        </div>
        <div>
          <img
            src="https://growthpitstop.com/wp-content/uploads/2020/05/hello-i-m-nik-73_kRzs9sqo-unsplash-1.jpg"
            alt="hero logo"
            className="rounded-lg my-6"
          />
        </div>
        <div>
          <img
            src="https://virtary.com/wp-content/uploads/2022/03/malte-helmhold-Vy2Y1cCLiT8-unsplash.jpg"
            alt="hero logo"
            className="rounded-lg my-6 w-3/5"
          />
        </div>
      </div>
      {/* large device */}
      <div className="hidden md:block">
        <div>
          <div className="w-3/5 text-center m-auto">
            <div className="text-end font-bold text-h1">React</div>
            <div className="text-end font-bold text-h1">Conference</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              src="https://virtary.com/wp-content/uploads/2022/03/malte-helmhold-Vy2Y1cCLiT8-unsplash.jpg"
              alt="hero logo"
              className="rounded-lg my-6"
            />
          </div>
          <div className="w-1/3 p-6 text-center">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="text-center my-5">
              <button className="bg-yellow hover:bg-blue-700 py-2 px-4 rounded-full">
                But Tickets
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://growthpitstop.com/wp-content/uploads/2020/05/hello-i-m-nik-73_kRzs9sqo-unsplash-1.jpg"
              alt="hero logo"
              className="rounded-lg my-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
