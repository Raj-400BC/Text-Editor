// src/SynonymFinder.js
import React, { useState } from "react";
import wordnet from "wordnet-db";

const SynonymFinder = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const findSynonyms = async () => {
    try {
      const results = await wordnet.lookupAsync(word);
      if (results.length > 0) {
        const synonyms = results[0].synonyms();
        setSynonyms(synonyms);
      } else {
        setSynonyms([]);
      }
    } catch (error) {
      console.error("Error finding synonyms:", error);
    }
  };

  return (
    <div>
      <h2>Find Synonyms</h2>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={findSynonyms}>Find Synonyms</button>
      <div>
        <h3>Synonyms:</h3>
        <ul>
          {synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SynonymFinder;
