import React from 'react'
import Button from './Button'
import arrowRightWhite from '../assets/img/icons/arrow-right-white.png'

const Card = ({ image, header, title, description }) => {
  return (
    <div class="flex flex-col md:flex-row w-full bg-font-lighter rounded-3xl border border-white overflow-hidden max-w-[1000px]">
      <div class="flex-1">
        <img
          src={image}
          alt="Training"
          class=" w-full h-full max-w-full lg:max-w-[450px] min-w-[300px]"
        />
      </div>
      <div class="p-4 lg:p-10 flex flex-col flex-1 gap-4 justify-start text-left">
        <p class="text-xs font-bold">{header}</p>
        <p class="text-xl lg:text-5xl font-bold">{title}</p>
        <p class="text-sm lg:text-base font-bold max-w-[350px]">
          {description}
        </p>
        <Button
          text="Waiting list"
          styles={
            'bg-[#070421] transparent text-sm text-[#FAFAFA] text-left font-bold py-2 px-4 rounded flex flex-row items-center justify-between w-full'
          }
          iconImage={arrowRightWhite}
        />
      </div>
    </div>
  )
}

export default Card
