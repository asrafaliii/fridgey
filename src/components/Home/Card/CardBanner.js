import React from "react";

const CardBanner = () => {
  return (
    <div class="hero min-h-screen bg-base-100 rounded-lg shadow-2xl">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://waltonbd.com/image/catalog/category-banner/refrigerator/non-frost-block.jpg"
          class="max-w-lg "
        />
        <div>
          <h1 class="text-5xl font-bold">Our New Product</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
