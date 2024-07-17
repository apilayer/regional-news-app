"use client";
import React, { useEffect, useState } from "react";
import { searchWorldNews } from "./actions";
import NewsCard from "@/components/NewsCard";

type Props = {};

const Home = (props: Props) => {
  const [IpInfo, setIpInfo] = useState({
    ip: "",
    country: "",
    region: "",
    latitude: 0,
    longitude: 0,
    continent: "",
  });
  const [news, setNews] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const ipStackAPIKey = process.env.NEXT_PUBLIC_IPSTACK_API_KEY;

    const fetchUserLocation = async () => {
      try {
        const getIp = await fetch(
          `http://api.ipstack.com/check?access_key=${ipStackAPIKey}`
        );
        const data = await getIp.json();

        if (!isMounted) return;

        const info = {
          ip: data.ip,
          country: data.country_name,
          region: data.region_name,
          latitude: data.latitude,
          longitude: data.longitude,
          continent: data.continent_name,
        };

        setIpInfo(info);

        // Prepare location filter string (latitude, longitude, radius in km)
        const locationFilter = `${info.latitude},${info.longitude},100`;

        // Now fetch news based on location
        const newsData = await searchWorldNews(12, locationFilter);

        if (isMounted) {
          setNews(newsData.news || []);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching user location:", error);
        }
      }
    };

    fetchUserLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="leading-[180%] bg-[#F4F4F5] w-full min-h-screen pt-12">
      <h1 className="text-center mb-6 text-zinc-800 text-4xl font-bold">
        Regional News App
      </h1>
      <div className="w-[90%] md:w-[45%] mx-auto">
        <h4 className="text-center italic text-zinc-600 mb-2">
          Extracting user information from{" "}
          <span className="font-semibold">ip: {IpInfo.ip}</span>:
        </h4>
        <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-zinc-300 font-medium">
          {IpInfo.ip ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "IP Address:", value: IpInfo.ip },
                { label: "Latitude:", value: IpInfo.latitude },
                { label: "Longitude:", value: IpInfo.longitude },
                { label: "Continent:", value: IpInfo.continent },
                { label: "Region:", value: IpInfo.region },
                { label: "Country:", value: IpInfo.country },
              ].map(({ label, value }, index) => (
                <div key={index} className="py-2 md:py-0 rounded">
                  <h3 className="text-blue-600 font-semibold text-sm sm:text-base">
                    {label}
                  </h3>
                  <p className="text-sm sm:text-base break-words">{value}</p>
                </div>
              ))}
            </div>
          ) : (
            "Loading ip details..."
          )}
        </div>

        <h4 className="text-center italic text-zinc-600 mb-3 mt-12">
          Showing top news from{" "}
          <span className="font-semibold">{IpInfo.region}</span>:
        </h4>
      </div>
      <div className="mx-auto w-[90%] md:w-[80%]">
        <div className="flex w-full flex-wrap justify-between gap-y-6">
          {news.length > 0
            ? news.map((item, i) => <NewsCard key={i} data={item} />)
            : "Loading news..."}
        </div>
      </div>
    </div>
  );
};

export default Home;
