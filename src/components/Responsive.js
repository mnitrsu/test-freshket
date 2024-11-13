import { freshketPlaces, freshketTags } from "@/const/mock-responsive";

export default function Responsive() {
  return (
    <div className="grid grid-cols-1 gap-6 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {freshketPlaces.map((item) => {
        return (
          <div key={item.id} className="flex flex-col px-6 py-6 bg-white rounded-lg shadow-xl">
            <div className="relative">
              <img className="rounded-lg" src={item.img_url} alt={item.name} />
              <p className="absolute bottom-0 w-5/6 px-4 py-2 font-bold text-center text-white -translate-x-1/2 translate-y-4 bg-black left-1/2">
                {item.name}
              </p>
            </div>
            <p className="flex-1 my-8 text-center">{item.body}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((item) => {
                const tag = freshketTags.find((source) => source.id === item);
                return (
                  <p key={tag.id} className="px-4 py-2 text-xs text-white bg-lime-500 rounded-3xl">
                    {tag.name}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
