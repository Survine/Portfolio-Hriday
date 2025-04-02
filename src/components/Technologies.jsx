import { BiLogoPostgresql } from "react-icons/bi";
import { DiPostgresql, DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TechIcon = ({ icon: Icon, name, color }) => {
  return (
    <div className="group relative p-4 transition-all duration-300 hover:z-10">
      <Icon 
        className={`text-7xl ${color} transition-all duration-300 group-hover:scale-125`} 
      />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div id="tech" className="pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <TechIcon 
          icon={RiReactjsLine} 
          name="React" 
          color="text-cyan-400" 
        />
        <TechIcon 
          icon={TbBrandNextjs} 
          name="Next.js" 
          color="text-black dark:text-white" 
        />
        <TechIcon 
          icon={SiMongodb} 
          name="MongoDB" 
          color="text-green-400" 
        />
        <TechIcon 
          icon={FaPython} 
          name="Python" 
          color="text-blue-700" 
        />
        <TechIcon 
          icon={FaNodeJs} 
          name="Node.js" 
          color="text-green-500" 
        />
        <TechIcon 
          icon={BiLogoPostgresql} 
          name="PostgreSQL" 
          color="text-sky-700" 
        />
      </div>
    </div>
  );
};

export default Technologies;