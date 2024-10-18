import { Brain, Shield, Zap, Bot, Earth } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'
import Section from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { MagicCard, MagicContainer } from '@/components/ui/magic-card'

const problems = [
   {
      title: 'Experience',
      description:
      'With over 25 years of experience in the automation industry, we provide cutting-edge solutions using the most efficient techniques, state-of-the-art hardware, and advanced software, ensuring optimal performance and reliability for every project.',
      icon: Brain,
   },
   {
      title: 'PLC Programming',
      description: (
        <>
          We specialize in industrial automation, offering expertise with PLC systems including
          <span className="font-bold text-gray-300"> Siemens S7</span>, 
          <span className="font-bold text-gray-300"> GE Fanuc Emerson</span>, 
          <span className="font-bold text-gray-300"> Allen-Bradley ControlLogix</span>, 
          <span className="font-bold text-gray-300"> Omron SYSMAC</span>, 
          <span className="font-bold text-gray-300"> Mitsubishi MELSEC</span>, 
          <span className="font-bold text-gray-300"> Schneider Electric Modicon</span>, and more. 
        </>
      ),
      icon: Bot, // Assuming you're using the Zap icon here
   },
   {
      title: 'Worldwide Project Management',
      description:
        'In addition to custom-tailored automation solutions, we offer comprehensive project management services worldwide, ensuring smooth execution and delivery across diverse industries.',
      icon: Earth,
    },
]

export default function Component() {
   return (
      <Section
         subtitle="Complete automation solutions, from A to Z."
      >
         <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
               <BlurFade key={index} delay={0.2 + index * 0.2} inView>
                  <MagicCard className="overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl">
                     <CardContent className="space-y-4 p-6">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                           <problem.icon className="size-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                     </CardContent>
                  </MagicCard>
               </BlurFade>
            ))}
         </div>
      </Section>
   )
}
