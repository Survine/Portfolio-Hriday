import { FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/hriday-bardhan-resume.pdf"; 
    link.download = "Hriday_Bardhan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-stone-50 ">Resume</h2>
      <p className="text-gray-300 text-center mt-2">
        Explore my professional journey and technical expertise
      </p>
      <p className="text-gray-400 text-sm text-center mt-2">
        Click icon to preview or button to download
      </p>
      <div className="mt-4">
        <FaFilePdf className="text-cyan-400 text-7xl bg-white/10 backdrop-blur-lg p-4 rounded-full border border-white/20 shadow-md hover:scale-110 transition-all cursor-pointer" />
      </div>
      <button
        onClick={handleDownload}
        className="flex items-center gap-3 px-8 py-4 mt-6 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 hover:scale-105 transition-all"
      >
        <FiDownload className="text-xl font-sans" />
        Download Resume
      </button>
      <p className="text-gray-400 text-sm mt-4">
        PDF Format | Last Updated: April 2025
      </p>
    </div>
  );
};

export default Resume;
