import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Content = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[64rem]">
          <div className="grid grid-cols-2 gap-x-16">
            <img src="/image.png" alt="picture" />
            <div className="flex flex-col gap-y-4 pt-16">
              <div className="text-2xl">
                Genesis
              </div>
              <div className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi tortor, posuere sit amet feugiat ut, rhoncus eget mi. Nulla lectus arcu, sodales non arcu faucibus, ornare tempor odio. Fusce efficitur elit non nunc congue luctus. Maecenas ac cursus elit. Phasellus sagittis aliquam accumsan.
              </div>
              <div className="pt-8">
                <Button text='Buy Now' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default Content