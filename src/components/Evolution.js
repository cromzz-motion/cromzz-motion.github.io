import React from 'react'

import arrowUp from '../assets/img/icons/arrow-up.png'
import control from '../assets/img/icons/control.png'
import smoothness from '../assets/img/icons/smoothness.png'
import endurance from '../assets/img/icons/endurance.png'

const Evolution = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-16 py-10">
      <div className="flex flex-col max-w-[490px] lg:max-w-[1000px] gap-10 px-6">
        <p className="font-primary  text-2xl tracking-[4px] text-center lg:text-[42px] lg:tracking-[7px] font-light tracking-[0.25rem] lg:leading-10">
          Cromzz evolves with YOU
        </p>
        <p className="text-font-lighter text-lg lg:text-2xl	font-light tracking-[0.25rem]">
          Level up your workout game with the secret weapon for quantifiable
          gains and unstoppable progress
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center max-w-[1000px] -gap-2 md:gap-2.5">
        <div className="flex flex-col justify-center">
          <div
            className={`bg-top-card bg-contain bg-center bg-no-repeat flex flex-col justify-start items-center w-full max-w-[500px] min-h-[200px] md:min-h-[225px] lg:min-h-[300px] px-4 pb-2 pt-8 gap-2`}
          >
            <div className="flex flex-col gap-2  max-w-[250px] sm:max-w-[300px]  lg:max-w-[400px] xl:max-w-[500px]">
              <div className="flex flex-row gap-4">
                <img
                  src={arrowUp}
                  alt="Evolution icon"
                  className="object-contain size-5 sm:size-auto"
                />
                <p className="text-lg lg:text-[2rem] font-bold color-[#070421]">
                  {'Evolution'}
                </p>
              </div>
              <p className="text-xs lg:text-base xl:text-lg font-light color-[#070421]">
                {`Evolution compares your current and past performances to indicate the progress you've made. This feedback is designed to help you recognize when it's time for a change in your training routine, preventing plateaus.`}
              </p>
            </div>
          </div>
          <div
            className={`bg-bottom-card bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center  w-full max-w-[500px] min-h-[200px] md:min-h-[225px] lg:min-h-[300px] px-4 pb-2 pt-6 gap-2 -mt-[3rem]`}
          >
            <div className="flex flex-col gap-2  max-w-[250px] sm:max-w-[300px]  lg:max-w-[400px] xl:max-w-[500px]">
              <div className="flex flex-row gap-4">
                <img
                  src={endurance}
                  alt="Evolution icon"
                  className="object-contain size-5 sm:size-auto"
                />
                <p className="text-lg lg:text-[2rem] font-bold color-[#070421]">
                  {'Endurance'}
                </p>
              </div>
              <p className="text-xs lg:text-base xl:text-lg font-light color-[#070421]">
                {
                  'Endurance is about the consistency of your execution speed across repetitions. This metric helps you to identify the right number of repetitions to increase endurance while maintaining proper form.'
                }
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`bg-top-card bg-contain bg-center bg-no-repeat flex flex-col justify-start items-center  w-full max-w-[500px] min-h-[200px] md:min-h-[225px] lg:min-h-[300px] px-4 pb-2 pt-8 gap-2`}
          >
            <div className="flex flex-col gap-2  max-w-[250px] sm:max-w-[300px]  lg:max-w-[400px] xl:max-w-[500px]">
              <div className="flex flex-row gap-4">
                <img
                  src={smoothness}
                  alt="Evolution icon"
                  className="object-contain size-5 sm:size-auto"
                />
                <p className="text-lg lg:text-[2rem] font-bold color-[#070421]">
                  {'Smoothness'}
                </p>
              </div>
              <p className="text-xs lg:text-base xl:text-lg font-light color-[#070421]">
                {
                  'Smoothness measures how precise you perform an exercise. Higher weights lead to more noticeable shaking. This metric helps determine the right weight for your exercises.'
                }
              </p>
            </div>
          </div>
          <div
            className={`bg-bottom-card bg-contain bg-center bg-no-repeat flex flex-col justify-center w-full max-w-[500px] min-h-[200px] md:min-h-[225px] lg:min-h-[300px] px-4 pb-2 pt-6 gap-2 -mt-[3rem]`}
          >
            <div className="flex flex-col gap-2  max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px]">
              <div className="flex flex-row gap-4">
                <img
                  src={control}
                  alt="Evolution icon"
                  className="object-contain size-5 sm:size-auto"
                />
                <p className="text-lg lg:text-[2rem] font-bold color-[#070421]">
                  {'Control'}
                </p>
              </div>
              <p className="text-xs lg:text-base xl:text-lg font-light color-[#070421]">
                {`Control refers to how well you can keep a consistent rhythm between reps. This metric is supported by the device's vibration, helping you select the desired timing based on your goal.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Evolution
