import projectClone from '../../assets/imagesTwo/Project_Clone.png';
import musicWeb from '../../assets/imagesTwo/Musicweb.png';
import myLogo from '../../assets/imagesTwo/myLogo.png';

const projects = [
  {
    image: projectClone,
    title: "Project Clone",
    desc: "A meticulously crafted clone project showcasing modern web development techniques and responsive design principles.",
  },
  {
    image: musicWeb,
    title: "Music Web",
    desc: "An immersive music platform built with cutting-edge technologies, featuring a sleek interface and seamless user experience.",
  },
  {
    image: myLogo,
    title: "Brand Identity",
    desc: "Personal brand development project featuring custom logo design and consistent visual identity across platforms.",
  },
];

const ProjectsSection = () => (
  <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#36347b] via-[#423f8c] to-[#36347b] py-16">
    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
      {projects.map((project, i) => (
        <div
          key={i}
          className="flex flex-col items-center w-full md:w-[430px] max-w-[98vw]"
        >
          {/* Image Card with border, shadow, and background */}
          <div className="rounded-2xl border-[7px] border-[#18194a] bg-[#18194a] shadow-2xl overflow-hidden mb-8 transition-transform duration-300 hover:scale-[1.04]">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-[430px] h-[260px] md:w-[430px] md:h-[260px] max-w-full"
              draggable={false}
              style={{ background: "#23245b" }}
            />
          </div>
          {/* Title */}
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center drop-shadow-lg">
            {project.title}
          </h3>
          {/* Description */}
          <p className="text-[#dbdbe7] text-lg md:text-xl text-center font-normal max-w-[98vw]">
            {project.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;