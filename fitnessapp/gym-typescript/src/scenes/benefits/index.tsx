import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import {HomeModernIcon, UserGroupIcon , AcademicCapIcon ,} from "@heroicons/react/24/solid"
import { motion } from "framer-motion" 
import Benefit from "./benefit"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description : "Experience the best in fitness technology and equipment. Our facilities are equipped with cutting-edge gear and staffed by knowledgeable professionals to ensure a safe and effective workout. Upgrade your fitness routine with us today."

    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description : "Discover a world of fitness possibilities with our extensive class offerings. From yoga to strength training, there's something for everyone. Join now and enjoy the benefits of a varied workout regimen"

        
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
            <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your 
                    ultimate fitness goals
                     with ease. We provide true care into each and every member
                </p>
            </div>
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
        </motion.div>
    </section>
  )
}

export default Benefits