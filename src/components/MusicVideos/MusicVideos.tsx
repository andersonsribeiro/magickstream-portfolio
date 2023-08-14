export default function Content() {
  return (
    <section
      id="mv"
      className="text-center flex flex-col justify-center max-w-screen-lg m-auto mb-14"
    >
      <h2 className="mb-6">MUSIC VIDEOS</h2>
      <iframe
        className="[aspect-ratio:16/9] w-full"
        src="https://www.youtube.com/embed/LDHTRnymN6Y?modestbranding=1&autohide=1&showinfo=0&controls=0"
        title=""
        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
      ></iframe>
    </section>
  );
}
