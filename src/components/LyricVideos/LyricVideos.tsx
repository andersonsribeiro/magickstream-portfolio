import { Videos } from "../data/Videos";

export default function Content() {
  const videos = Videos;
  return (
    <section
      id="lv"
      className="text-center flex flex-col justify-center max-w-screen-lg m-auto  "
    >
      <h2 className="mb-6">LYRIC VIDEOS</h2>
      <iframe
        className="[aspect-ratio:16/9] w-full"
        src="https://www.youtube.com/embed/W3aeFCgF3RQ?controls=0"
        title=""
        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
    </section>
  );
}
