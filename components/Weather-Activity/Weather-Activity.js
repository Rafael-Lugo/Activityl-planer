import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function WeatherActivity(){
    const { data } = useSWR()
    
    return ()
}
