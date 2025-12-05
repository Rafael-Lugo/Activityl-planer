import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [liked, setLiked] = useState([]);

  function toggleLiked(_id) {
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
        <Component {...pageProps} toggleLiked={toggleLiked} liked={liked} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
