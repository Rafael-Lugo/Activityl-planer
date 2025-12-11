import { SWRConfig } from "swr";
import GlobalStyle from "./styles";
import { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/index";

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
    <SessionProvider session={session}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Header />        
        <TopRightLogin />
        <Component
          {...pageProps}
          toggleLiked={toggleLiked}
          likedActivityIds={likedActivityIds}
        />
        <Navigation />
      </SWRConfig>
    </SessionProvider>
  );
}
