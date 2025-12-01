import { useState } from "react";
import Image from "next/image";

export default function FavoriteButton({
  liked,
  _id,
  toogleFavorite,
}) {

  return (
    <>
      <button type="button" onClick={toogleFavorite} _id={liked} aria-label={liked ? "unlike" : "like"}>
        <Image src="/assets/flag.svg" width={40} height={40} alt=""/>
      </button>
    </>
  );
}
