import React from 'react'

export const EvolutionCard = ({
  cardType,
  title,
  description,
  icon,
  extraClasses
}) => {
  return (
    <div
      class={`${cardType} bg-contain bg-center bg-no-repeat flex flex-col justify-center w-full max-w-[500px] min-h-[210px] lg:min-h-[300px] px-4 pb-2 pt-6 gap-2 ${extraClasses}`}
    >
      <div class="flex flex-row gap-4">
        <img
          src={icon}
          alt="Evolution icon"
          class="object-contain size-5 sm:size-auto"
        />
        <p class="text-lg lg:text-[2rem] font-bold color-[#070421]">{title}</p>
      </div>
      <p class="text-xs lg:text-xl font-light color-[#070421]">{description}</p>
    </div>
  )
}
