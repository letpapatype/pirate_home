import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="imageContainer">
        <Image
          src="/team.jpeg"
          alt="Pirates Team"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
