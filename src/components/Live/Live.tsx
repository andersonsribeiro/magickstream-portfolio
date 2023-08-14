import { content } from "../Live/LiveContent";

export default function Live() {
  return (
    <section id="live" className="text-center mb-14">
      <h2>Live</h2>
      <div className="max-w-screen-lg m-auto p-5 flex flex-wrap justify-center gap-3">
        {Object.entries(content.live).map(([key, content]) => {
          return (
            <div className=" w-1/4">
              <iframe
                className="[aspect-ratio:16/9] w-full"
                src={
                  "https://www.youtube.com/embed/" + content.id + "?controls=0"
                }
                title=""
                allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
              ></iframe>
            </div>
          );
        })}
      </div>
    </section>
  );
}
