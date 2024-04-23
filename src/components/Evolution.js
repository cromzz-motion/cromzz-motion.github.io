import React from 'react'
import { EvolutionCard } from './EvolutionCard'

import arrowUp from '../assets/img/icons/arrow-up.png'
import control from '../assets/img/icons/control.png'
import smoothness from '../assets/img/icons/smoothness.png'
import endurance from '../assets/img/icons/endurance.png'

const Evolution = () => {
  return (
    <div class="flex flex-col w-full items-center justify-center gap-16 py-10">
      <div class="flex flex-col max-w-[490px] lg:max-w-[1000px] gap-10">
        <p class="font-primary  text-2xl text-center lg:text-3xl lg:text-[42px] font-light tracking-[0.25rem] lg:leading-10">
          Cromzz evolves with YOU
        </p>
        <p class="text-font-lighter text-lg lg:text-2xl	font-light tracking-[0.25rem]">
          Level up your workout game with the secret weapon for quantifiable
          gains and unstoppable progress
        </p>
      </div>
      <div class="flex flex-col md:flex-row justify-center max-w-[1000px] -gap-2 md:gap-2.5">
        <div class="flex flex-col">
          <div
            class={`bg-top-card bg-contain bg-center bg-no-repeat flex flex-col justify-start w-full max-w-[500px] min-h-[200px] lg:min-h-[300px] px-4 pb-2 pt-8 gap-2`}
          >
            <div class="flex flex-row gap-4">
              <img
                src={arrowUp}
                alt="Evolution icon"
                class="object-contain size-5 sm:size-auto"
              />
              <p class="text-lg lg:text-[2rem] font-bold color-[#070421]">
                {'Evolution'}
              </p>
            </div>
            <p class="text-xs lg:text-xl font-light color-[#070421]">
              {
                'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
              }
            </p>
          </div>
          <div
            class={`bg-bottom-card bg-contain bg-center bg-no-repeat flex flex-col justify-center w-full max-w-[500px] min-h-[200px] lg:min-h-[300px] px-4 pb-2 pt-6 gap-2 -mt-[3rem]`}
          >
            <div class="flex flex-row gap-4">
              <img
                src={endurance}
                alt="Evolution icon"
                class="object-contain size-5 sm:size-auto"
              />
              <p class="text-lg lg:text-[2rem] font-bold color-[#070421]">
                {'Endurance'}
              </p>
            </div>
            <p class="text-xs lg:text-xl font-light color-[#070421]">
              {
                'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
              }
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class={`bg-top-card bg-contain bg-center bg-no-repeat flex flex-col justify-start w-full max-w-[500px] min-h-[200px] lg:min-h-[300px] px-4 pb-2 pt-8 gap-2`}
          >
            <div class="flex flex-row gap-4">
              <img
                src={smoothness}
                alt="Evolution icon"
                class="object-contain size-5 sm:size-auto"
              />
              <p class="text-lg lg:text-[2rem] font-bold color-[#070421]">
                {'Smoothness'}
              </p>
            </div>
            <p class="text-xs lg:text-xl font-light color-[#070421]">
              {
                'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
              }
            </p>
          </div>
          <div
            class={`bg-bottom-card bg-contain bg-center bg-no-repeat flex flex-col justify-center w-full max-w-[500px] min-h-[200px] lg:min-h-[300px] px-4 pb-2 pt-6 gap-2 -mt-[3rem]`}
          >
            <div class="flex flex-row gap-4">
              <img
                src={control}
                alt="Evolution icon"
                class="object-contain size-5 sm:size-auto"
              />
              <p class="text-lg lg:text-[2rem] font-bold color-[#070421]">
                {'Control'}
              </p>
            </div>
            <p class="text-xs lg:text-xl font-light color-[#070421]">
              {
                'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evolution
