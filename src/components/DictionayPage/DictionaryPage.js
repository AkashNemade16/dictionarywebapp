import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./DictionaryPage.sass";
import { UserContext } from "../../UserContext/UserContext";
const DictionaryPage = () => {
  const { apiData } = useContext(UserContext);
  const [data] = apiData?.data.map((item) => item.meanings) || [];
  const [phonetic] = apiData?.data.map((item) => item.phonetic) || [];
  console.log(apiData?.data)
  console.log(phonetic)
  const [sourceUrls] = apiData?.data.map((item) => item.sourceUrls) || [];
  const [word] = apiData?.data.map((item) => item.word) || [];
  const [phonetics] = apiData?.data.map((item) => item.phonetics) || [];
  const phoneticsRefractored = phonetics
    ?.filter((obj) => obj.audio !== "")
  console.log(phoneticsRefractored);

  return (
    <div className="dictionary-page">
      <div className="word">
        <div className="searched-Word-text">
          <div className="searchedWord">
            <div className="word-tag">{word}</div>
          </div>
          <div className="text">{phonetic}</div>
        </div>
        <div className="play-button">
            <button>
                <FontAwesomeIcon icon={faCirclePlay} />
            </button>
        </div>
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
    </div>
  );
};

export default DictionaryPage;
