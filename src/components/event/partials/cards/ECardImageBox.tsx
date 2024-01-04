import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  _id: string;
  image: string;
  title: string;
  gHeight?: string;
};

const ECardImageBox = ({ _id, image, title, gHeight }: Props) => {
  return (
    <Link href={`/store/event/${_id}`} style={{ marginBottom: "0.5px" }}>
      <div
        style={{
          width: "300px",
          height: gHeight ? gHeight : "150px",
          position: "relative",
        }}
      >
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className=""
          style={{ borderRadius: "8px" }}
        />
      </div>
    </Link>
  );
};

export default ECardImageBox;
