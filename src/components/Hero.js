import DeviceCanvas from './DeviceCanvas'

import cromzz from '../assets/img/cromzz.png'

const Hero = () => (
  <>
    <div
      id="home"
      className="bg-hero relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-[70px]"
    >
      <DeviceCanvas />
      <div className="absolute flex items-center right-[1rem] py-8 h-full z-0">
        <img src={cromzz} className="h-3/4 md:h-full" alt={''} />
      </div>
    </div>
  </>
)

export default Hero
