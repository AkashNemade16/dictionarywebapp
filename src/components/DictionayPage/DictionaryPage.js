import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./DictionaryPage.sass";
import { UserContext } from "../../UserContext/UserContext";
const DictionaryPage = () => {
  const { apiData,font, error } = useContext(UserContext);
  const [data] = apiData?.data.map((item) => item.meanings) || [];
  const [phonetic] = apiData?.data.map((item) => item.phonetic) || [];
  const [sourceUrls] = apiData?.data.map((item) => item.sourceUrls) || [];
  const [word] = apiData?.data.map((item) => item.word) || [];
  const [phonetics] = apiData?.data.map((item) => item.phonetics) || [];
  const [phoneticsRefractored] =
    phonetics?.filter((obj) => obj.audio !== "")?.map((item) => item.audio) ||
    [];
    let audio = new Audio(phoneticsRefractored)
  console.log(phoneticsRefractored);
const onPlay =()=>{
    audio.play()
}
console.log(error?.response.data)
  return (
        !error?<div className={`dictionary-page ${font}`}>
      <div className="word">
        <div className="searched-Word-text">
          <div className="searchedWord">
            <div className="word-tag">{word}</div>
          </div>
          <div className="text">{phonetic}</div>
        </div>
        {apiData?<div className="play-button">
          <button onClick={onPlay}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
        </div>:null}
      </div>
      {data?.map((item) => (
        <div className="info">
          <div className="part-of-speech">{item.partOfSpeech}</div>
          {item.partOfSpeech && item.definitions
            ? item.definitions.map((item) => (
                <div className="definitions">{item.definition}</div>
              ))
            : null}
          {item.synonyms && item.partOfSpeech
            ? item.synonyms.map((item) => (
                <div className="synonyms">{item}</div>
              ))
            : null}
        </div>
      ))}
      <div className="sourceUrl">{sourceUrls}</div>
    </div>:<div className="error-page">
      <div className="title">
      {error?.response?.data?.title}
      </div>
      <div className="message">
              {error?.response?.data?.message?.concat(" "+error?.response?.data?.resolution)}
      </div>
    </div>
  );
};

export default DictionaryPage;
