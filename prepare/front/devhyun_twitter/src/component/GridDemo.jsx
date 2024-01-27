"use client";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function GridDemo({ onGifClick }) {
  const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 10 });
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={800}
        columns={8}
        gutter={6}
      />
    </>
  );
}

export default GridDemo;
