import { SelectedPage , ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from "./Class"

const classes: Array <ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Get strong and have a blast with our fun weight training classes! Led by experienced trainers, you'll learn how to safely and effectively use weights to build muscle, improve your posture, and increase your overall fitness. With a variety of workouts to choose from, you'll never get bored and will always be challenged. And the best part? Our supportive and energetic community will keep you motivated and make your workout experience a fun one. So what are you waiting for? Come lift, laugh, and get strong with us!",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Find inner peace and physical strength in our yoga classes. Our experienced instructors will guide you through a variety of poses, helping you improve flexibility, balance, and breathing. Whether you're a beginner or an advanced practitioner, you'll find a class that's right for you. With a peaceful and supportive environment, our yoga classes offer a respite from the stress of daily life. Come find your zen and enhance your overall wellbeing with us.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Get ready for a strong, toned midsection with our Ab Core Classes! Led by expert trainers, these high-energy classes will focus on building and sculpting your abdominal muscles. You'll use a variety of equipment and exercises to target your abs, obliques, and lower back, resulting in a stronger and more defined core. Whether you're looking to enhance your athletic performance or simply feel confident in a swimsuit, our Ab Core Classes will help you reach your goals. So come join us and get ready for a rock-solid core!",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Get out of the gym and into the great outdoors with our Adventure Classes! Whether it's hiking, rock climbing, or stand-up paddleboarding, these classes offer a unique and exciting workout experience. Led by experienced guides, you'll explore beautiful landscapes and push yourself to new physical and mental limits. With a focus on teamwork and community, our Adventure Classes are a great way to bond with friends and make new ones. So why settle for the same old workout routine? Come join us for an adventure of a lifetime!",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Get fit, have fun, and achieve your goals with our Fitness Classes! Led by expert trainers, these classes offer a full-body workout designed to improve cardiovascular health, increase strength and flexibility, and boost energy levels. With a variety of formats and intensities to choose from, you'll find a class that's just right for you. And with a supportive and motivating environment, you'll enjoy your workout and keep coming back for more. So why wait? Come join us and get on the path to a fitter, healthier you!",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Take your fitness to the next level with our Training Classes! Led by expert trainers, these classes offer a challenging and intense workout designed to help you reach your athletic and fitness goals. Whether you're training for a specific event or simply looking to improve your overall health and wellness, our Training Classes will provide you with the guidance and support you need to succeed. With a focus on proper form and technique, you'll minimize your risk of injury and maximize your results. So why settle for a mediocre workout? Come join us and get the training you deserve!",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value : SelectedPage) => void
}

function OurClasses({setSelectedPage}: Props) {
  return (
    <section  id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2 , duration: 0.5}}
                variants={{
                  hidden:{opacity:0 , x:-50},
                  visible: {opacity: 1, x:0}
                }}
                >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                    Get fit and have fun with our diverse and dynamic class offerings.
                     From yoga and Pilates to strength training and cardio, there's something for 
                     everyone. Our expert instructors will guide you through each class, providing 
                     personalized attention and modifications. Experience a varied and challenging 
                     workout routine, and enjoy the support of a friendly and welcoming community. 
                     Sign up now and start reaching your fitness goals
                    </p>
                </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item,index)=> (
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>

    </section>
  )
}

export default OurClasses