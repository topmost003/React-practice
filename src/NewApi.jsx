import axios from "axios";
import { useEffect, useState } from "react";

const NewApi = () => {
  const [user, setuser] = useState([]);

  const getuserdata = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=2594b313a8dd028dd39fd6439a4b84a7"
    );
    setuser(res.data.results);
  };
 
  useEffect(() => {
    getuserdata();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 p-2 m-2.5 ">
      {user.map((data, i) => (
        <div key={i} className="  ">
          <main>
            <main>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                className="w-[300px] h-[200px]"
              />
            </main>
            <p>{data.original_title}</p>
            <p>{data.popularity}</p>
            <p>{data.overview}</p>
          </main>
        </div>
      ))}
    </div>
  );
};

export default NewApi; 