const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2 transition-all group relative rounded-none hover:rounded-[50px] overflow-hidden h-full bg-green-900">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-all"
          src={props.image1}
          alt=""
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center">
          <h2 className="uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4 text-white border-white">
            Voir Le Projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 transition-all group relative rounded-none hover:rounded-[50px] overflow-hidden h-full bg-green-900">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-all"
          src={props.image2}
          alt=""
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center">
          <h2 className="uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4 text-white border-white">
            Voir Le Projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
