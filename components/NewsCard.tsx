import React from "react";

type Props = {
  data: {
    title: string;
    summary: string;
    image: string;
    url: string;
  };
};

const NewsCard = ({ data }: Props) => {
  return (
    <div className="md:max-w-[325px] w-full bg-white rounded-xl shadow-2xl shadow-zinc-300 ">
      <img
        src={data.image}
        alt=""
        height={250}
        width={300}
        className="rounded-md rounded-b-none w-full"
      />
      <div className="p-5 w-full">
        <h2 className="font-semibold text-lg mb-3">{data.title}</h2>
        <p className="text-sm text-zinc-500 line-clamp-3">{data.summary}</p>
        <a href={data.url} target="_blank">
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-500 mt-3 px-3 py-1 rounded-full text-sm text-white font-semibold">
            Read More →
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
