import React from 'react';
import Marquee from '@/components/ui/marquee'
import Image from 'next/image'

const companies = [
   { name: 'Skoda', height: 16 },
   { name: 'VW', height: 19 },
   { name: 'Durr', height: 54 },
   { name: 'ABB', height: 44 },
];

export default function Logos() {
   return (
      <section id="logos">
         <div className="container mx-auto px-4 py-12 md:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500">
               TRUSTED BY OUR PARTNERS
            </h3>
            <div className="relative mt-6">
               <Marquee className="max-w-full [--duration:40s]">
                  {companies.map((company, idx) => (
                     <div key={idx} className="flex items-center justify-center h-16 w-28 mx-3">
                        <Image
                           width={112}
                           height={company.height}
                           src={`/img/partners/${company.name}.png`}
                           className={`w-auto h-auto max-h-full opacity-30 grayscale dark:brightness-0 dark:invert`}
                           alt={company.name}
                        />
                     </div>
                  ))}
               </Marquee>
            </div>
         </div>
      </section>
   )
}