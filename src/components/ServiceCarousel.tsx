'use client'

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const images = [
  "/service-img1.png",
  "/service-img2.png",
  "/service-img3.png",
  "/service-img4.png",
  "/service-img5.png",
  "/service-img1.png",
  "/service-img2.png",
]

export default function Example() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [pages, setPages] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setPages(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        setApi={setApi}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 flex justify-center items-center"
            >
              <Image src={src} alt={`img-${index}`} width={96} height={96} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex space-x-3 mt-2 py-11">
        {Array.from({ length: pages }).map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-5 w-5 rounded-full border-2  ",
              current === idx ? "bg-blue-500" : "bg-transparent"
            )}
          />
        ))}
      </div>
    </div>
  )
}
