import React from 'react'
import Button from './Button'
import arrowRightBlack from '../assets/img/icons/arrow-right-black.png'

import elipse from '../assets/img/elipse-1.png'

const Title = () => {
  return (
    <p className="font-primary text-2xl tracking-[4px] text-center lg:text-[42px] lg:tracking-[7px] lg:leading-10 font-light">
      Contact us:
    </p>
  )
}

const Text = ({ text }) => {
  return (
    <p className="text-font-lighter text-base lg:text-2xl font-light tracking-[0.17em]">
      {text}
    </p>
  )
}

const TextBold = ({ text }) => {
  return (
    <p className="text-font-lighter text-base lg:text-2xl font-bold tracking-[0.17em]">
      {text}
    </p>
  )
}

const Contact = () => {
  return (
    <div
      id="waiting-list"
      className="flex flex-col w-full items-center justify-center py-10 relative"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[490px] md:max-w-[1000px] gap-0 ">
        <div className="flex flex-col gap-10 border border-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none px-4 py-8 z-10">
          <Title />

          <div className="w-full flex flex-col gap-4">
            <Text
              text={
                ' Fill in your email if you want to be updated about our release!'
              }
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent text-font-lighter border-[2px] border-font-ligher rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <Text text={'Let us know if you want to collaborate'} />
            <textarea
              className="w-full bg-transparent text-font-lighter border-[2px]  border-font-ligher rounded px-2 py-1"
              placeholder="Your message (optional)"
            />
          </div>

          <Button
            text="Submit"
            styles={
              'bg-font-lighter transparent text-sm text-[#070421] text-left font-bold py-2 px-4 rounded flex flex-row items-center justify-between w-full'
            }
            iconImage={arrowRightBlack}
          />
        </div>
        <div className="flex flex-col gap-10 border border-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none px-4 py-8">
          <div className="w-full flex flex-col gap-2">
            <Text text={'Mail address:'} />
            <TextBold text={'cromzz.motion@gmail.com'} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Text text={'Phone number:'} />

            <TextBold text={'0773897963'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
