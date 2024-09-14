import { BG_SRCSET, BG_URL } from "../constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchbar from "./GptSearchbar"

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-full h-full -z-10">
        <img
          src={BG_URL}
          srcSet={BG_SRCSET}
          alt="Bg"
          className="w-full h-full object-cover"
        />
        </div>
      <GptSearchbar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch