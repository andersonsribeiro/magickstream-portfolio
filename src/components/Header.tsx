import sigil from "../assets/fav_sigil.svg";

export default function Header() {
  return (
    <header className="text-center flex flex-col gap-12 mt-20 mb-20">
      {/* <p className="">
        <img src={sigil} width="140" alt="" className=" mx-auto" />
      </p> */}
      <p>
        <h1 className="text-6xl text-red-600 font-light [text-shadow: 0px 0px 10px rgba(255, 0, 0, 0.5)]">
          MAGICK STREAM
        </h1>
        <small className="font-serif italic text-4xl">art by</small>
        <h2 className=" text-6xl text-red-600 font-light [text-shadow: 0px 0px 10px rgba(255, 0, 0, 0.5)]">
          Anderson Ribeiro
        </h2>
      </p>
      <p className=" font-sans text-xl">
        <a
          className=" hover:text-red-600 underline"
          href="mailto:magickstream@gmail.com"
        >
          magickstream@gmail.com
        </a>
        {" | "}
        <a
          className=" hover:text-red-600 underline"
          href="https://instagram.com/magickstream"
        >
          @magickstream
        </a>
        {" | "}
        <a
          className=" hover:text-red-600 underline"
          href="https://www.youtube.com/@magickstream"
        >
          youtube.com/@magickstream
        </a>
      </p>
    </header>
  );
}
