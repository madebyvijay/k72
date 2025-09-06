import Video from "../home/Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-5 text-center mt-60 lg:mt-0">
      <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[11vw]">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex items-start justify-center uppercase lg:leading-[9vw] leading-[11vw]">
        qui
        <div className="lg:h-[7vw] lg:w-[16vw] h-[9vw] w-[19vw] rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[11vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
