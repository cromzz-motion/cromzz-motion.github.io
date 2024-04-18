import React from 'react'

export const EvolutionCard = ({ title, description, icon }) => {
  return (
    <div class="flex flex-col max-w-[490px] bg-font-lighter rounded-xl px-4 py-8 gap-3">
      <div class="flex flex-row gap-4">
        <img src={icon} alt="Evolution icon" class="object-contain" />
        <p class="text-[2rem] font-bold color-[#070421]">{title}</p>
      </div>
      <p class="text-base font-light color-[#070421]">{description}</p>
    </div>
  )
}
