import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import "leaflet/dist/leaflet.css";


const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [likedActivityIds, setLikedActivityIds] = useState([]);

  function toggleLiked(_id) {
    setLikedActivityIds((likedActivityIds) =>
      likedActivityIds.includes(_id)
        ? likedActivityIds.filter((activity) => activity !== _id)
        : [...likedActivityIds, _id]
    );
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} toggleLiked={toggleLiked} likedActivityIds={likedActivityIds} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
