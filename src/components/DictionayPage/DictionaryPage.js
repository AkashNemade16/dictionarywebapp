import { useEffect, useState, useContext } from "react";
import "./DictionaryPage.sass";
import { UserContext } from "../../UserContext/UserContext";
const DictionaryPage = () => {
  const { apiData } = useContext(UserContext);
  const [data] = apiData?.data.map((item) => item.meanings) || [];
  console.log(data);
  const [sourceUrls] = apiData?.data.map((item)=>item.sourceUrls) || []
  console.log(sourceUrls)
  console.log(apiData?.data)
  return (
    <div className="dictionary-page">
      {data?.map((item) => (
        <div className="info">
          <div className="part-of-speech">{item.partOfSpeech}</div>
          {item.partOfSpeech && item.definitions
            ? item.definitions.map((item) => <div className="definitions">{item.definition}</div>)
            : null}
          {item.synonyms && item.partOfSpeech ? item.synonyms.map((item)=><div className="synonyms">{item}</div>):null}
        </div>
      ))}
      <div className="sourceUrl">{sourceUrls}</div>
    </div>
  );
};

export default DictionaryPage;
