import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <section className="mt-10 ">
        <h1 className="text-4xl">Hi, I'm Arden</h1>
        <h3 className="text-lg pb-10">I'm a Web Designer and Developer</h3>
        <div className="flex flex-col items-center">
          <div className="h-80 w-72 overflow-hidden rounded-xl">
            <Image
              src="/me.jpg"
              width={280}
            height={180}
              className="rounded-xl"
              style={{ marginTop: "-30px" }}
              alt="Your Description"
            ></Image>
          </div>
        </div>
      </section>
      <section className="w-62">
        <p className="mt-20 text-xl text-center">Quick Links</p>
        <div className="flex justify-around pb-10 pt-10 w-80">
          <button className="bg-myellow p-2 rounded-lg text-black ">
            Graphic Design
          </button>
          <button className="bg-myellow p-2 rounded-lg text-black ">
            Resume
          </button>
          <button className="bg-myellow p-2 rounded-lg text-black ">
            Web Design
          </button>
        </div>
      </section>
      <div className="bg-lightpurple pb-10 pt-20 w-full">
        <h1>Graphic Design</h1>
      </div>
      <div className=" bg-greenblue pb-10 pt-20 w-full">
        <h1>Web Design</h1>
      </div>
      <div className="bg-myellow pb-10 pt-20 w-full">
        <h1>Resume</h1>
      </div>
    </main>
  );
}
