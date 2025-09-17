import {useEffect} from "react";
import {GifState} from "../context/gif-context";

import Gif from "../components/gif";
import FilterGif from "../components/filter-gif";

function Home() {
  const {gf, gifs, setGifs, filter} = GifState();

  const fetchTrendingGIFs = async () => {
    const {data: gifs} = await gf.trending({
      limit: 40,
      type: filter,
      rating: "r",
    });
    setGifs(gifs);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div className="">
<img
  src="https://i.pinimg.com/originals/68/ae/bf/68aebf3739f455687a90e871bdc04a98.gif"
  alt="earth banner"
  className="mt-2 rounded w-full h-40 object-cover"
/>


      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;