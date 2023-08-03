import { useParams } from "react-router-dom";
import css from "./Cast.module.css";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../Api";
import notfound from "../../images/not-found.JPG";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(()=> {
        getMovieCast(id).then(data=> setCast(data));
    }, [id])

    return (
       <div className={css.cast_wrap}>
        <ul className={css.cast_list}>
            {cast && cast.map(({ profile_path, name, character, cast_id })=> (
                <li className={css.cast_item} key={cast_id}>
                    <img className={css.cast_img} src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : notfound
                }
                alt={name} />
                <p className={css.cast_text}>{name}</p>
                {character && (
                <p className={css.cast_text}>
                  <span className={css.cast_character}>Character: </span>
                  {character}
                </p>
              )}
                </li>
            ))}
        </ul>
       </div>
    )

}

export default Cast;