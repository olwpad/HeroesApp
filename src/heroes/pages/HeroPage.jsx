import {useMemo} from "react";

import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
export const HeroPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const hero =  useMemo(() => getHeroById(id), [id]);
  if (!hero) return <Navigate to={"/marvel"} />;

  const back = () => {
    hero.publisher === "DC Comics" ? navigate("/dc") : navigate("/marvel");
  };
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={heroImageUrl} alt="" className="img-thumbnail  animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Pulisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First_appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={back}>
          Back
        </button>
      </div>
    </div>
  );
};
