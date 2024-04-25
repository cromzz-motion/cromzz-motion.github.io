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
import Button from './Button'

import training1 from '../assets/img/training-1.png'
import training2 from '../assets/img/training-2.png'
import elipse from '../assets/img/elipse-1.png'

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
  <div class="flex flex-col gap-4">
    <p class="font-primary text-2xl lg:text-6xl font-light tracking-[4px] lg:tracking-[10.5px]">
      Discover Cromzz
    </p>
    <p class="text-font-lighter text-base tracking-[3.35px]">
      Say hello to precision, goodbye to guesswork!
    </p>
  </div>
)

const Discover = () => {
  return (
    <div
      id="about-us"
      class="flex flex-col relative align-center justify-center text-center w-full md:px-20 py-28 px-6 gap-16 overflow-hidden"
    >
      <Title />
      <div class="w-full flex flex-row justify-center align-center">
        <div class="flex flex-col lg:flex-row gap-10 max-w-[1000px]">
          <div class="flex flex-col w-full lg:w-1/3 gap-4 text-left">
            <p class="font-primary text-lg lg:text-[2rem] lg:leading-9 tracking-[3px] lg:tracking-[5.5px]">
              Designed for You
            </p>
            <p class="text-font-lighter text-base font-bold">
              Cromzz is your ultimate fitness companion. Equip yourself with
              metrics and support for peak performance or unlock invaluable
              client insights if you are a trainer.
            </p>
          </div>
          <div class="flex w-full lg:w-1/3 align-center justify-center">
            <div class="relative">
              <img
                src={phoneImage}
                alt="Cromzz on phone"
                class="object-contain z-1"
              ></img>
              <img
                src={deviceImage}
                alt="Device"
                class="absolute bottom-[-50px] left-[-60px] sm:left-[-75px] md:left-[-100px] object-contain z-1"
              />
            </div>
          </div>
          <div class="flex flex-col gap-4 w-full lg:w-1/3">
            {features.map((feature) => (
              <div class="flex flex-row gap-4">
                <img src={feature.icon} class="h-4 w-auto" alt="Feature" />
                <p class="text-font-lighter  text-sm md:text-base font-bold whitespace-nowrap">
                  {feature.text}
                </p>
              </div>
            ))}
            <Button
              text="Waiting list"
              styles={
                'bg-font-lighter transparent text-sm text-[#070421] text-left font-bold py-2 px-4 rounded flex flex-row w-full items-center justify-between'
              }
              iconImage={arrowRightBlack}
            />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center gap-10">
        <Card
          image={training1}
          header={'PROFESSIONAL'}
          title={'Personal Trainers'}
          description={
            'Connect, track, and simplify with our Personal Trainer app. Seamlessly link trainers with clients, empower trainers to monitor gym activity for improved guidance and progress tracking, while simplifying client management through easy session scheduling.'
          }
        />

        <Card
          image={training2}
          header={'HOBBY'}
          title={'Trainees'}
          description={
            'Empower your fitness journey with personalized metrics for progress tracking and goal setting. Engage in friendly competition with gamification features. Discover the perfect personal trainer matched to your unique fitness aspirations through our app.'
          }
        />
      </div>
      <p class="text-font-lighter text-base font-light	 tracking-[2.7px]">
        Wearable on your equipment for comfort and performance
      </p>
    </div>
  )
}

export default Discover
