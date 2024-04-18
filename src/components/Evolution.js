import React from 'react'
import { EvolutionCard } from './EvolutionCard'

import arrowUp from '../assets/img/icons/arrow-up.png'
import control from '../assets/img/icons/control.png'
import smoothness from '../assets/img/icons/smoothness.png'
import endurance from '../assets/img/icons/endurance.png'

const Evolution = () => {
  return (
    <div class="flex flex-col w-full items-center justify-center gap-16 px-4 py-10">
      <div class="flex flex-col max-w-[490px] lg:max-w-[1000px] gap-10">
        <p class="font-primary  text-3xl lg:text-[42px] font-light tracking-[0.25rem]">
          Cromzz evolves with YOU
        </p>
        <p class="font-primary text-xl lg:text-2xl	font-light tracking-[0.25rem]">
          Level up your workout game with the secret weapon for quantifiable
          gains and unstoppable progress
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-center max-w-[1000px] gap-2.5">
        <EvolutionCard
          icon={arrowUp}
          title={'Evolution'}
          description={
            'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
          }
        />
        <EvolutionCard
          icon={smoothness}
          title={'Smoothness'}
          description={
            'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
          }
        />
        <EvolutionCard
          icon={endurance}
          title={'Endurance'}
          description={
            'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
          }
        />
        <EvolutionCard
          icon={control}
          title={'Control'}
          description={
            'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
          }
        />
      </div>
    </div>
  )
}

export default Evolution
