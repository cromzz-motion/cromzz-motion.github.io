import DeviceCanvas from './DeviceCanvas'
import { motion } from 'framer-motion'

import cromzz from '../assets/img/cromzz.png'

const Hero = () => (
  <>
    <div
      id="home"
      className="bg-hero relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-[80px]"
    >
      <DeviceCanvas />
      <div className="absolute flex items-center right-[1rem] py-8 h-full z-0">
        <img src={cromzz} className="h-3/4 md:h-full" alt={''} />
      </div>
      <div className="absolute bottom-24 xs:bottom-8 w-full flex justify-center items-center">
        <div
          className="z-1"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('about-us').scrollIntoView({
              behavior: 'smooth'
            })
          }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                reapeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero
