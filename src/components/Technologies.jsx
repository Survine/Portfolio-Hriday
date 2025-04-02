import { BiLogoPostgresql } from "react-icons/bi"
import { DiPostgresql, DiRedis } from "react-icons/di"
import { FaNodeJs, FaPython } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div id="tech" className="pb-24">
        <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl  text-green-400" />
            </div>
            <div className="p-4">
                <FaPython className="text-7xl text-blue-700" />
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
        </div>
    </div>
  )
}
export default Technologies