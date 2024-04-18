import React from 'react'

import arrowRightWhite from '../assets/img/icons/arrow-right-white.png'

const Card = ({ image, header, title, description }) => {
  return (
    <div class="flex flex-row w-full bg-font-lighter rounded-3xl border border-white overflow-hidden max-w-[1000px]">
      <div class="w-auto">
        <img
          src={image}
          alt="Training"
          class="w-full h-full max-w-[450px] min-w-[300px]"
        />
      </div>
      <div class="p-10 flex flex-col gap-4 justify-start text-left">
        <p class="text-xs font-bold">{header}</p>
        <p class="text-5xl font-bold">{title}</p>
        <p class="text-base font-bold max-w-[350px]">{description}</p>
        <div class="flex flex-row w-full">
          <button class="bg-[#070421] transparent text-sm text-[#FAFAFA] text-left font-bold py-2 pl-4 rounded cut-right">
            Waiting list
          </button>
          <button class=" bg-[#070421] flex align-center justify-end text-smfont-bold py-2 pr-4 rounded cut-left">
            <img src={arrowRightWhite} class="h-4 fill-[#FAFAFA]" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
