import Header from './Header'
import DeviceCanvas from './DeviceCanvas'

import cromzz from '../assets/img/cromzz.png'
import device from '../assets/img/device-image.png'

const Hero = () => (
  <>
    <Header />
    <div
      id="home"
      class="bg-hero relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center  justify-center"
    >
      <DeviceCanvas />
      <div class="absolute flex items-center right-[1rem] py-4 h-full">
        <img src={cromzz} class="h-3/4 md:h-full" />
      </div>
    </div>
  </>
)

export default Hero
