import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/images/agence/Carl_480x640-480x640.jpg",
    "/images/agence/ChantalG_480x640-480x640.jpg",
    "/images/agence/Claire_480x640-480x640.jpg",
    "/images/agence/HugoJoseph_480x640-480x640.jpg",
    "/images/agence/joel_480X640_3-480x640.jpg",
    "/images/agence/Lawrence_480x640-480x640.jpg",
    "/images/agence/MAXIME_480X640_2-480x640.jpg",
    "/images/agence/MEGGIE_480X640_2-480x640.jpg",
    "/images/agence/MEL_480X640-480x640.jpg",
    "/images/agence/Michele_480X640-480x640.jpg",
    "/images/agence/MyleneS_480x640-480x640.jpg",
    "/images/agence/Olivier_480x640-480x640.jpg",
    "/images/agence/SophieA_480x640-480x640.jpg"
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 20%",
        end: "top -185%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex = 1;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    });

    gsap.fromTo(
      imageRef.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        delay: 2.5
      }
    );
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:rounded-3xl rounded-xl lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:top-42 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="w-full h-full object-cover rounded-3xl"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            loading="lazy"
            alt=""
          />
        </div>

        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div id="page2" className="h-screen"></div>
    </div>
  );
};

export default Agence;
