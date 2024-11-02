import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="m-5 text-center">Aman Rohilla</h1>
      <Image
	src="/rohilla.jpg"
	alt="Rohilla"
        width={800}
        height={800}
      />
      <a href="https://rohilla.dev"><h1 className="m-5 text-center">rohilla.dev</h1></a>
    </div>
  )
}

