import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());


export default function App({ Component, pageProps }) {
  const [liked, setLiked] = useState([]);

  function toggleFavorite(_id) {
    setLiked((liked) =>
      liked.includes(_id)
        ? liked.filter((activity) => activity !== _id)
        : [...liked, _id]
    );
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} toggleFavorite={toggleFavorite} liked={liked}/>
      </SWRConfig>
    </>
  );
}
