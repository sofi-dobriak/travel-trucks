import s from './DetailInfo.module.css';
import type { Camper } from '../../../types/camper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import clsx from 'clsx';

const DetailInfo = (props: Camper) => {
  const reviewsLength = props.reviews?.length || 0;
  const formattedPrice = props.price.toFixed(2);

  return (
    <div>
      <h2 className={s.camperTitle}>{props.name}</h2>

      <div className={s.camperRatingLocationContainer}>
        <div className={s.camperRatingContainer}>
          <svg width={16} height={16} className={s.camperStarIcon}>
            <use href='/images/icons.svg#icon-star'></use>
          </svg>
          <p className={s.reviewCountText}>
            {props.rating}({reviewsLength} Reviews)
          </p>
        </div>

        <div className={s.camperLocationContainer}>
          <svg width={16} height={16} className={s.camperMapIcon}>
            <use href='/images/icons.svg#icon-map'></use>
          </svg>
          <p className={s.locationText}>{props.location}</p>
        </div>
      </div>

      <p className={s.camperPrice}>{formattedPrice}</p>
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        mousewheel={true}
        pagination={true}
        modules={[Pagination, Mousewheel]}
        wrapperTag='ul'
        className={clsx('custom-swiper', s.camperImagesList)}
      >
        {props.gallery.map((image, index) => (
          <SwiperSlide key={index + 1} tag='li' className={clsx(s.yachtsItem)}>
            <img
              src={image.original}
              alt={`${props.name} camper - photo ${index + 1} of ${props.gallery.length}`}
              className={s.camperImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={s.camperDescription}>{props.description}</p>
    </div>
  );
};

export default DetailInfo;
