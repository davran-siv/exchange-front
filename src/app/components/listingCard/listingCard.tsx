import React from 'react'
import './style.scss'

const ListingCard = (props: any) => {
  return (
    <div className='listing-card'>
      <div className="listing-card__slider">
        <img src="/assets/temporary/listing-item.png" alt="listing-card" className='listing-card__slider__img'/>
      </div>
      <div className="listing-card__inner">
        <div className="listing-card__inner__hints">
          <div className="listing-card__inner__hints__consider-options">
            Рассмотрю варианты
          </div>
          <div className="listing-card__inner__hints__views">153</div>
        </div>
        <div className="listing-card__inner__content">
          <div className="listing-card__inner__content__can">
            <div className="listing-card__inner__content__can__title">МОГУ</div>
            <div className="listing-card__inner__content__can__description">Сделать дизайн для сайта</div>
          </div>
          <div className="listing-card__inner__content__want">
            <div className="listing-card__inner__content__want__title">ХОЧУ</div>
            <div className="listing-card__inner__content__want__description">Разработку сайта, ремонт ходовой части,
              ноутбук
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard