import ActionButton from "@/shared/action"
import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import {HomeModernIcon, UserGroupIcon , AcademicCapIcon ,} from "@heroicons/react/24/solid"
import { motion } from "framer-motion" 
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description : "Experience the best in fitness technology and equipment. Our facilities are equipped with cutting-edge gear and staffed by knowledgeable professionals to ensure a safe and effective workout. Upgrade your fitness routine with us today."

    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description : "Discover a world of fitness possibilities with our extensive class offerings. From yoga to strength training, there's something for everyone. Join now and enjoy the benefits of a varied workout regimen."

        
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description : "Achieve your fitness goals with the guidance of our experienced and professional trainers. They'll provide customized plans and support to help you reach new heights. Join now and start your journey with confidence."
        
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren : 0.2}
    }
}


type Props = {

    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={()=>{
        setSelectedPage(SelectedPage.Benefits)
         }}
        >
            {/* HEADER */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden:{opacity:0 , x:-50},
              visible: {opacity: 1, x:0}
            }}
            
            className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your 
                    ultimate fitness goals
                     with ease. We provide true care into each and every member
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView = "visible"
            viewport={{once:true,amount: 0.5}}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
            </motion.div>

            {/* GRAPHIC AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

          
            {/* GRAPHIC */}
            <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            />
            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                          hidden:{opacity:0 , x:50},
                          visible: {opacity: 1, x:0}
                        }}
                        
                        
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {""}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>

                    </div>

                     </div>
                {/* DESCRIPTION */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                  hidden:{opacity:0 , x:50},
                  visible: {opacity: 1, x:0}
                }}
                
                >
                    <p className="my-5">
                    Join a community of success and happiness. Our members come from all walks of life, but they all share the same goal of achieving a better, healthier self. With millions of happy members, we can confidently
                     say that we are the premier destination for fitness and wellness.
                      Our facilities are equipped with the latest technology and staffed
                       by knowledgeable professionals, ensuring a safe and effective workout 
                       every time. Our diverse class offerings and expert trainers provide customized
                        support and guidance, helping each member reach their fitness goals.
                    </p>
                    <p className="mb-5">
                    At our gym, you'll find a welcoming community that supports and motivates
                     each other. Whether you're a seasoned athlete or a beginner, we have everything
                     you need to get fit and feel great. So why wait? Join the millions of happy
                      members getting fit with us today.
                    </p>
                </motion.div>
               {/* BUTTON */}
               <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                        </ActionButton>
                    </div>
               </div>
            </div>
        </div>
        </motion.div>
    </section>
  )
}

export default Benefits