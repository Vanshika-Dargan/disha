import Award from '../assets/award.png';
import Confetti from '../assets/confetti.gif'
export const Result = ()=>{
    return (
        <>
        <div className="container flex items-center justify-center">
            <img className='absolute' src={Confetti}/>
            <div className='relative bg-[#FCFAEE] my-10 py-5 rounded-lg max-w-[400px] flex items-center justify-center flex-col'>
            <img src ={Award} width={300}/>
            <h2 className="text-3xl font-semibold text-center">Congratulations!</h2>
            <p className="mt-2 text-gray-700 max-w-100 text-center p-6">You have successfully qualified the quiz!</p>
            <div className="w-40 bg-purple-400 rounded-md p-3 text-center">Share</div>
            </div>
        </div>
        </>
    )
}