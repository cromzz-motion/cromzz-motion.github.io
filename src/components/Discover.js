import React from 'react'
import phoneImage from '../assets/img/phone-image.png'
import deviceImage from '../assets/img/device-image.png'

import calendar from '../assets/img/icons/calendar.png'
import cloudCheck from '../assets/img/icons/cloud-check.png'
import competition from '../assets/img/icons/competition.png'
import evolution from '../assets/img/icons/evolution.png'
import metrics from '../assets/img/icons/metrics.png'
import personalTrainer from '../assets/img/icons/personal-trainer.png'
import vibration from '../assets/img/icons/vibration.png'
import arrowRightBlack from '../assets/img/icons/arrow-right-black.png'
import Card from './Card'

import training1 from '../assets/img/training-1.png'
import training2 from '../assets/img/training-2.png'

const features = [
  {
    icon: vibration,
    text: 'Vibration for real time feedback'
  },
  {
    icon: cloudCheck,
    text: 'Instant workout summary'
  },
  {
    icon: metrics,
    text: 'Helpful metrics'
  },
  {
    icon: competition,
    text: 'Competition'
  },
  {
    icon: personalTrainer,
    text: 'Find Personal Trainers/Trainees'
  },
  {
    icon: calendar,
    text: 'Easy workout plan management'
  },
  {
    icon: evolution,
    text: 'Evolution tracking'
  }
]

const Title = () => (
  <div class="flex flex-col">
    <p class="font-primary text-6xl font-light">Discover Cromzz</p>
    <p class="font-primary text-base">
      Say hello to precision, goodbye to guesswork!
    </p>
  </div>
)

const Discover = () => {
  return (
    <div
      id="about-us"
      class="flex flex-col relative align-center justify-center text-center w-full px-10 md:px-20 py-10 gap-16 bg-radial overflow-hidden"
    >
      <Title />
      <div class="w-full flex flex-row justify-center align-center">
        <div class="flex flex-col lg:flex-row gap-10 max-w-[1000px]">
          <div class="flex flex-col w-full lg:w-1/3 gap-4 text-left">
            <p class="font-primary text-[2rem]">Designed for You</p>
            <p class="font-primary text-base font-bold">
              Cohere’s Command lets you build powerful chatbots and knowledge
              assistants. Command uses RAG (Retrieval Augmented Generation) to
              deliver accurate conversations grounded by your enterprise data.
            </p>
          </div>
          <div class="flex w-full lg:w-1/3 align-center justify-center">
            <div class="relative">
              <img
                src={phoneImage}
                alt="Cromzz on phone"
                class="object-contain"
              ></img>
              <img
                src={deviceImage}
                alt="Device"
                class="absolute bottom-[-50px] left-[-75px] md:left-[-100px] object-contain"
              />
            </div>
          </div>
          <div class="flex flex-col gap-4 w-full lg:w-1/3">
            {features.map((feature) => (
              <div class="flex flex-row gap-4">
                <img src={feature.icon} class="h-4 w-auto" alt="Feature" />
                <p class="font-primary text-sm md:text-base font-bold whitespace-nowrap">
                  {feature.text}
                </p>
              </div>
            ))}
            <div class="flex flex-row w-full">
              <button class="bg-font-lighter transparent text-[#070421] text-sm font-bold py-2 rounded cut-right">
                Waiting list
              </button>
              <button class="bg-font-lighter flex align-center justify-end text-smfont-bold py-2 pr-4 rounded cut-left">
                <img
                  src={arrowRightBlack}
                  class="h-4 color-[#070421]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center gap-10">
        <Card
          image={training1}
          header={'PROFESSIONAL'}
          title={'Personal Trainers'}
          description={
            'Cohere’s Command lets you build powerful chatbots and knowledge assistants. Command uses RAG (Retrieval Augmented Generation) to deliver accurate conversations grounded by your enterprise data.'
          }
        />

        <Card
          image={training2}
          header={'HOBBY'}
          title={'Trainees'}
          description={
            'Cohere’s Command lets you build powerful chatbots and knowledge assistants. Command uses RAG (Retrieval Augmented Generation) to deliver accurate conversations grounded by your enterprise data.'
          }
        />
      </div>
      <p class="font-primary text-base text-light tracking-[0.25rem]">
        Wearable on your hands and shoes for comfort and performance
      </p>
    </div>
  )
}

export default Discover
