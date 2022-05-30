import React from "react";

const MidBanner = () => {
  return (
    <div class="hero min-h-screen rounded-lg shadow-2xl">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://waltonbd.com/image/catalog/category-banner/refrigerator/direct-cool-landing-page.jpg"
          class="max-w-lg"
        />
        <div>
          <h1 class="text-5xl font-bold">New Offer !</h1>
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

export default MidBanner;
