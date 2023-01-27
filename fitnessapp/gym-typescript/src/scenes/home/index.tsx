import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/action"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune  from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Home({ setSelectedPage  }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md: pb-0"
    >
        {/* IMAGE AND MAIN HEADER */}
        <div>
            {/* MAIN HEADER */}
            <div>
                  {/* HEADINGS */}
                  <div>
                    <div>
                        <div>
                          <img alt="home-page-text"  src={HomePageText} />
                        </div>
                      </div>
                      <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the body Shapes that you Dream of.. Get your Dream Body now
                      </p>
                  </div>
                  {/* ACTIONS */}
                  <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                    <AnchorLink 
                    className="text-sm fold-bold text-primary-500 underline hover:text-seconday-500"
                    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    
                    >
                      <p>Learn More</p>

                    </AnchorLink>
                  </div>
            </div>

            {/* IMAGE HEADER */}

            <div>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </div>
        {/* Sponsors */}
        {isAboveMediumScreens &&(
          <div>
            <div>
              <div>
                <img src={SponsorRedBull} alt="redbull-sponsor" />
                <img src={SponsorForbes} alt="forbes-sponsor" />
                <img src={SponsorFortune} alt="fortune-sponsor" />
              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default Home