import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [liked, setLiked] = useState(false);

  function toogleFavorite(_id) {
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
        <Component {...pageProps} toogleFavorite={toogleFavorite} liked={liked}/>
      </SWRConfig>
    </>
  );
}
