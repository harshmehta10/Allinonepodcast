import React from "react";
import Hero from "../../../Components/Home/Hero";
import Whyus from "../../../Components/Home/Whyus";
import Friday from "../../../Components/Home/Friday";
import Process from "../../../Components/Home/Process";
import Faq from "../../../Components/Home/Faq";
import Testimonial from "../../../Components/Home/Testimonial";
import Latestpodcast from "../../../Components/Home/Latestpodcast";
import Pricing from "../../../Components/Home/Pricing";
import Loader from "../../Layout/Loader/Loader";

const Home = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Hero />
      <Whyus />
      <Friday />
      <Process />
      <Latestpodcast />
      <Pricing />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
