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
      class={`${cardType} flex flex-col w-full max-w-[500px] min-h-[300px] bg-font-lighter px-4 py-10 gap-3 ${extraClasses}`}
    >
      <div class="flex flex-row gap-4">
        <img src={icon} alt="Evolution icon" class="object-contain" />
        <p class="text-[2rem] font-bold color-[#070421]">{title}</p>
      </div>
      <p class="text-base font-light color-[#070421]">{description}</p>
    </div>
  )
}
