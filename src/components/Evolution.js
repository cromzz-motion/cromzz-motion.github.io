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
      <div class="flex flex-col md:flex-row justify-center max-w-[1000px] gap-10 md:gap-2.5">
        <div class="flex flex-col">
          <EvolutionCard
            cardType={'card-top'}
            icon={arrowUp}
            title={'Evolution'}
            description={
              'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
            }
          />
          <EvolutionCard
            cardType={'card-bottom'}
            icon={endurance}
            title={'Endurance'}
            description={
              'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
            }
            extraClasses={'-mt-14'}
          />
        </div>
        <div class="flex flex-col">
          <EvolutionCard
            cardType={'card-top'}
            icon={smoothness}
            title={'Smoothness'}
            description={
              'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
            }
          />
          <EvolutionCard
            cardType={'card-bottom'}
            icon={control}
            title={'Control'}
            extraClasses={'-mt-14'}
            description={
              'Cohere offers sophisticated customization (fine-tuning) tools and capabilities that give superior model performance at industry-leading inference cost'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Evolution
