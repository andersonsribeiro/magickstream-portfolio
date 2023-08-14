import { content } from "../Illustration/IllustrationContent";

export default function Content() {
  return (
    <section id="illustration" className="text-center mb-14">
      <h2 className="mb-6">ILLUSTRATION</h2>
      <div className="max-w-screen-lg m-auto flex justify-center align-middle flex-wrap gap-8">
        {Object.entries(content.illustrations).map(([key, content]) => {
          return (
            <a href={content.url}>
              <img className="max-h-72" src={content.img} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
