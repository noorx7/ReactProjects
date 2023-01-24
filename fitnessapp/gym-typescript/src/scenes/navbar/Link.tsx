import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({
    page,
    selectedPage,
    setSelectedPage,
}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage //REG EX find space replace it with space its telling this line PLEASE think that this has the same format as SelectedPage, AS is a force to break typescripts type checker, dont use it all the time


  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300
  `}
        href={`#${lowerCasePage}`}  //THE # Tells it to go to a class with same div ID as lowercasePage
        onClick={()=> setSelectedPage(lowerCasePage)}  
    >{page}</AnchorLink>
  )
}

export default Link