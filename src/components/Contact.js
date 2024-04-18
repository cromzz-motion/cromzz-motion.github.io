import React from 'react'

const Title = () => {
  return (
    <p class="font-primary text-3xl lg:text-[42px] font-light tracking-[0.17em]">
      Contact us:
    </p>
  )
}

const Text = ({ text }) => {
  return (
    <p class="font-primary text-base lg:text-2xl font-light tracking-[0.17em]">
      {text}
    </p>
  )
}

const TextBold = ({ text }) => {
  return (
    <p class="font-primary text-base lg:text-2xl font-bold tracking-[0.17em]">
      {text}
    </p>
  )
}

const Contact = () => {
  return (
    <div
      id="waiting-list"
      class="flex flex-col w-full items-center justify-center px-4 py-10"
    >
      <div class="flex flex-col md:flex-row w-full max-w-[490px] md:max-w-[1000px] gap-0">
        <div class="flex flex-col gap-10 border border-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none px-4 py-8">
          <Title />

          <div class="w-full flex flex-col gap-4">
            <Text
              text={
                ' Fill in your email if you want to be updated about our release!'
              }
            />
            <input
              type="email"
              placeholder="Your email"
              class="w-full bg-black border-s-[10px] border-e-[10px] border-y-[2px] border-font-ligher rounded px-2 py-1"
            />
          </div>
          <div class="w-full flex flex-col gap-4">
            <Text text={'Let us know if you want to collaborate'} />
            <textarea
              class="w-full bg-black border-s-[10px] border-e-[10px] border-y-[2px] border-font-ligher rounded px-2 py-1"
              placeholder="Your message (optional)"
            ></textarea>
          </div>
          <button class="bg-font-lighter text-black px-4 py-2 rounded">
            Submit
          </button>
        </div>
        <div class="flex flex-col gap-10 border border-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none px-4 py-8">
          <div class="w-full flex flex-col gap-2">
            <Text text={'Mail address:'} />
            <TextBold text={'suport@cromzz.com'} />
          </div>
          <div class="w-full flex flex-col gap-2">
            <Text text={'Phone number:'} />

            <TextBold text={'0773897963'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
