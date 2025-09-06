import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <p className="absolute lg:w-[20vw] w-64 lg:right-2 right-5 bottom-16 lg:bottom-32 font-[font1] lg:text-sm text-xs lg:leading-normal leading-relaxed">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div className="border-3 hover:border-primary hover:text-primary h-fit flex items-center border-white rounded-full uppercase">
        <Link
          className="text-[6.5vw] leading-[0.7] px-[0.3em] pt-[0.22em]"
          to="/projets"
        >
          Projets
        </Link>
      </div>
      <div className="border-3 hover:border-primary hover:text-primary h-fit flex items-center border-white rounded-full uppercase">
        <Link
          className="text-[6.5vw] leading-[0.7] px-[0.3em] pt-[0.22em]"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
