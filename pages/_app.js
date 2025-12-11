import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import "leaflet/dist/leaflet.css";

import { SessionProvider } from "next-auth/react";
import TopRightLogin from "@/components/Login/TopRightLogin";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
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
