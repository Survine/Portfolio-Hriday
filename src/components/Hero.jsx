import profilePic from '../assets/hbprofilepic.jpg'
import { HERO_CONTENT } from '../constants'


const Hero = () => {
    return (
        <div id='hero' className="mt-30  pb-8 lg:mb-36 lg:ml-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePic} alt="Hriday Bardhan" width={500} height={500} className='border border-stone-900 rounded-3xl' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-20'>
                        <h2 className='bg-gradient-to-r from-stone-200 to-violet-800 bg-clip-text text-transparent pb-2 text-4xl tracking-tighter lg:text-7xl'>Hriday Bardhan</h2>
                        <span className='bg-gradient-to-r from-stone-300 to-teal-700 bg-clip-text text-3xl 
                        tracking-tight text-transparent'>Full Stack Developer</span>
                        <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{HERO_CONTENT}</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default Hero