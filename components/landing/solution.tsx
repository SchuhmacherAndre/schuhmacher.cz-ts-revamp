'use client'

import FlickeringGrid from '@/components/ui/flickering-grid'
import Ripple from '@/components/ui/ripple'
import Safari from '@/components/ui/safari'
import Section from '@/components/ui/section'
import { cn } from '@//lib/utils'
import { motion } from 'framer-motion'

const features = [
   {
      title: 'Precision Automation Systems',
      description:
      'Our solutions leverage advanced control technology to deliver accurate, efficient automation tailored to your business’s unique demands.',
      className: 'hover:bg-red-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <Safari
               src="/img/portfolio/1.png"
               url="schuhmacher.cz"
               className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
            />
         </>
      ),
   },
   {
      title: 'Reliable Control Systems',
      description:
      'We ensure reliable performance with robust, industry-standard control systems that prioritize safety, efficiency, and seamless operation across all processes.',
      className:
      'order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out',
      content: (
         <Safari
            src="/img/portfolio/2.jpg"
            url="schuhmacher.cz"
            className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
         />
      ),
   },
   {
      title: 'Effortless Integration',
      description:
      'Our automation solutions seamlessly integrate into your current systems, ensuring smooth, uninterrupted operations and enhanced productivity.',
      className:
      'md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <FlickeringGrid
               className="absolute inset-0 z-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
               squareSize={4}
               gridGap={6}
               color="#000"
               maxOpacity={0.1}
               flickerChance={0.1}
               height={800}
               width={800}
            />
            <Safari
               src="/img/portfolio/3.jpg"
               url="schuhmacher.cz"
               className="-mb-48 ml-12 mt-16 h-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-x-[-10px]"
            />
         </>
      ),
   },
   {
      title: 'Adaptable Automation',
      description:
      'Customize our automation solutions to fit your exact requirements, ensuring flexibility and maximum efficiency for your unique operations.',
      className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <Ripple className="absolute -bottom-full" />
            <Safari
               src="/img/portfolio/4.jpg"
               url="schuhmacher.cz"
               className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
            />
         </>
      ),
   },
]

export default function Component() {
   return (
      <Section
         subtitle="Optimize Your Operations with Expert Automation"
         description="Generic solutions won't cut it. Our team delivers precision-engineered automation systems designed to streamline and elevate your business processes."
      >
         <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3 xl:grid-rows-2">
            {features.map((feature, index) => (
               <motion.div
                  key={index}
                  className={cn(
                     'group relative items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-800',
                     feature.className,
                  )}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.5,
                     type: 'spring',
                     stiffness: 100,
                     damping: 30,
                     delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
               >
                  <div>
                     <h3 className="mb-2 font-semibold text-primary">
                        {feature.title}
                     </h3>
                     <p className="text-foreground">{feature.description}</p>
                  </div>
                  {feature.content}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900"></div>
               </motion.div>
            ))}
         </div>
      </Section>
   )
}
