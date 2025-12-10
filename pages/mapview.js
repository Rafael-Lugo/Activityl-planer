import dynamic from "next/dynamic";

const MapViewInner = dynamic(() => import("../components/MapViewInner"), {
  ssr: false,
});

export default function MapView() {
  return <MapViewInner />;
}
