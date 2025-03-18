import React, { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {

    const gptQuery = "Act as a movie recommendation system and suggest some moveies for the query" + searchText.current.value + "only give me names of 5 movies comma separated like the example result given ahead, example result:KGF,Animal,Salaar,James Bond,Superman"

    const gptResult = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }]
    });
    console.log(gptResult.choices)
  };



  
  return (
    <div className="pt-[10%] relative z-20">
      <form
        className=" mx-auto w-1/2 text-center bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9 bg-white text-black"
          type="text"
          placeholder="What would you like to watch !"
          ref={searchText}
        />
        <button
          className=" col-span-3 m-4 bg-red-500 cursor-pointer rounded-xl text-white font-bold"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
