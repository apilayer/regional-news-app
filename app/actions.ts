"use server";

export const searchWorldNews = async (
  number: number,
  locationFilter: string
) => {
  let worldNewsAPIKey = process.env.WORLD_NEWS_API_KEY || "";
  const baseUrl = "https://api.apilayer.com/world_news/search-news";

  const queryParams = new URLSearchParams({
    number: number.toString(),
    "location-filter": locationFilter,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      apikey: worldNewsAPIKey,
    },
  });

  const result = await response.json();
  return result;
};
