import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectCard from "../components/projects/ProjectCard";

const images = [
  "/images/projets/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  "/images/projets/WS---K72.ca---Thumbnail-1280x960.jpg",
  "/images/projets/OKA_thumbnail-1280x960.jpg",
  "/images/projets/opto_thumbnail2-1280x960.jpg",
  "/images/projets/CF_thumbnail-1280x960.jpg",
  "/images/projets/thumbnailimage_shelton-1280x960.jpg",
  "/images/projets/BEST_site_menu_Thumbnail-1280x960.jpg",
  "/images/projets/thumbnailimage_atable2-1280x960.jpg",
  "/images/projets/thumbnailimage_SollioAg-1280x960.jpg",
  "/images/projets/chalaxeur-thumbnail_img-1280x960.jpg",
  "/images/projets/thumbnail_OSM_1280-1280x960.jpg",
  "/images/projets/100temps_Thumbnail-1280x960.jpg",
  "/images/projets/crisis24_behance_1920X1200_cartes-1280x960.jpg",
  "/images/projets/thumbnailimage_opto-1280x960.jpg",
  "/images/projets/PME-MTL_Thumbnail-1280x960.jpg",
  "/images/projets/Fruite_thumbnail_bbq-1280x960.jpg",
];

const convertToArrayOfPairs = (arr) =>
  arr.reduce((acc, val, i) => {
    if (i % 2 === 0) acc.push({ image1: val, image2: arr[i + 1] });
    return acc;
  }, []);

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: ".lol",
        // markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true
      }
    });
  });

  const projects = convertToArrayOfPairs(images);

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] lg:text-[14vw] text-7xl uppercase">
          Projets
        </h2>
      </div>

      <div className="-lg:mt-18 lol">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
          >
            <ProjectCard image1={project.image1} image2={project.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
