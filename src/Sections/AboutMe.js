import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFlip, Pagination } from "swiper";
import { H1, H3 } from "../Components/SiteComponents";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { AboutMeData } from "../data/AboutMeData";

import "tachyons";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

const RightArrow = styled(BsChevronDoubleRight)`
  color: #ed8f00;
  font-size: 500%;
  padding-top: 24vw;
  padding-left: 8vw;
`;

const LeftArrow = styled(BsChevronDoubleLeft)`
  color: #ed8f00;
  font-size: 500%;
  padding-top: 24vw;
  padding-left: 8vw;
`;

const SwiperAug = styled(Swiper)`
  background-color: black;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

const AboutMe = forwardRef((props, ref) => {
  const AboutMeCards = AboutMeData.map((user, i) => {
    return (
      <SwiperSlide>
        <img
          src={`${AboutMeData[i].picture_source}`}
          alt="About Me Pic Error"
          key={AboutMeData[i].id}
        />
        <div
          style={{
            backgroundColor: "black",
            paddingBottom: "20%",
            maxHeight: "100%",
          }}
        >
          <H1 className={"pa2"}>{AboutMeData[i].header_text}</H1>
          <H3 className={"pa2"}>{AboutMeData[i].paragraph_text}</H3>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <div ref={ref} className="db fl w-100 pa2">
        <H1>👋🏾 About Me 😁</H1>
      </div>
      <div className="ph3-ns">
        <div className="dtc v-mid tc fl w-third pa2">
          <i className="icon-arrow-long-left review-swiper-button-prev">
            <LeftArrow className="grow" />
          </i>
        </div>
        <div className="fl w-third pa2">
          <SwiperAug
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            style={{ width: "100%", height: "100%" }}
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            loop={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            {AboutMeCards}
          </SwiperAug>
          <br />
          <br />
        </div>
        <div className="dtc v-mid tc fl w-third pa2">
          <i className="dt icon-arrow-long-right review-swiper-button-next">
            <RightArrow className="grow" />
          </i>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
