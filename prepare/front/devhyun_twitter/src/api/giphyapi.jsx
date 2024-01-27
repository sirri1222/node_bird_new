import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
import "isomorphic-fetch";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

export const getServerSideProps = async () => {
  const { data } = await giphyFetch.gif("fpXxIjftmkk9y");
  return {
    props: {
      gif: data,
    },
  };
};
export default function IndexPage({ gif }) {
  return gif ? <Gif gif={gif} width={300} /> : null;
}
