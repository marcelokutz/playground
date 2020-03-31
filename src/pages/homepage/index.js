import React from "react";

import SlideShow from "../../components/slideshow";
import Cards from "../../components/cards";
import BannerAbout from "../../components/banner-about";
import Accordion from "../../components/accordion";
import FormHome from "../../components/form";

import Cards01 from '../../images/card-play-harder.png';
import Cards02 from '../../images/card-simplicity.png';
import Cards03 from '../../images/card-innovation.png';

import BannerAbout01 from '../../images/banner-we-are.jpg';
import BannerAbout02 from '../../images/banner-we-do.jpg';
import BannerAbout03 from '../../images/banner-carrers.jpg';


const HomePage = () => (
  <div>
    <SlideShow></SlideShow>
    <div className="cards">
    	<div className="container">
	      <Cards title="PLAY HARDER" content="Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut." buttonURL="#" imgBackground={Cards01}></Cards>
	      <Cards title="SIMPLICITY" content="Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna." buttonURL="#" imgBackground={Cards02}></Cards>
	      <Cards title="INNOVATION" content="Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus." buttonURL="#" imgBackground={Cards03}></Cards>
    	</div>
    </div>
    <div className="banners-about">
      <BannerAbout name="we-are" layoutColor="black" title="we are." content="Consectetur adipiscing elit. Nulla condimentum tortor sem." buttonName="THE PLAYERS" buttonURL="#" imgBackground={BannerAbout01}></BannerAbout>
      <BannerAbout name="we-do" layoutColor="white" title="we do." content="Consectetur adipiscing elit. Nulla condimentum tortor sem." buttonName="THE PROJECTS" buttonURL="#" imgBackground={BannerAbout02}></BannerAbout>
      <BannerAbout name="careers" layoutColor="black" title="careers." content="Consectetur adipiscing elit. Nulla condimentum tortor sem." buttonName="THE POSITIONS" buttonURL="#" imgBackground={BannerAbout03}></BannerAbout>
    </div>
    <Accordion></Accordion>
    <FormHome></FormHome>
  </div>
);

export default HomePage;

                                                        