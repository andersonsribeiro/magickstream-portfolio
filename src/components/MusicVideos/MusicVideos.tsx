import { Videos } from "../data/Videos";

export default function Content() {
  const videos = Videos;
  return (
    <section
      id="mv"
      className="text-center flex flex-col justify-center max-w-screen-lg m-auto mb-14"
    >
      <h2 className="mb-6">MUSIC VIDEOS</h2>
      <iframe
        className="[aspect-ratio:16/9] w-full"
        src="https://www.youtube.com/embed/WNGYALk9IPw?controls=0"
        title=""
        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
    </section>
  );
}
