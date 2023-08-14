import { content } from "../Design/DesignContent";

export default function Content() {
  return (
    <section id="design" className="text-center mb-14">
      <h2 className="mb-6">DESIGN</h2>
      <div className="max-w-screen-lg m-auto flex justify-center align-middle flex-wrap gap-8">
        {Object.entries(content.designs).map(([key, content]) => {
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
