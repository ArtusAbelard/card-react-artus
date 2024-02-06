import './Card.css';
import Imgcard from '../Imgcard/Imgcard';
import Imgethereum from './../../img/icon-ethereum.svg'
import sarace from './../../img/image-avatar.png'
import clock from './../../img/icon-clock.svg'

export default function Card(
) {
    return (
        <div className='h-[600px] w-[350px] bg-[#15273F] rounded-2xl flex flex-col justify-center items-center'>
            <Imgcard className="flex flex-col justify-center items-center"></Imgcard>
            <h1 className='text-white font-bold pt-5  text-xl w-[300px] text-start tracking-[1px] active:text-[#1BD7E1]'>Equilibrium #3429</h1>
            <p className='text-[#879DBE] w-[300px] text-lg pt-5 text-start'>Our Equilibrium collection promotes <br />
            balance and calm.</p>
            <div className='w-[340px] h-[130px] '>
                <div className="h-1/2 w-full flex">
                    <div className='w-[50%] h-full  flex items-center justify-center'>
                        <img className='h-[35%]' src={Imgethereum} alt="" />
                        <p className='ps-2 pe-10 text-[#1BD7E1] font-bold'>0.041 ETH</p>
                    </div>
                    <div className='w-[50%] h-full flex justify-end items-center'>
                        <img className='h-[30%] pe-1' src={clock} alt="" />
                        <p className='text-[#879DBE] me-6'>3 days left</p>
                    </div>
                </div>
                <div className='h-[1px] w-[300px] bg-[#879DBE] ms-[18px]'></div>
                <div className="h-1/2 w-full flex items-center justify-center ">
                    <div className='h-[31px] w-[31px] bg-black me-4 rounded-full border-[1px]'>
                        <img src={sarace} alt="" />
                    </div>
                    <p className='text-[#879DBE] me-[19%]'>Creation of <span className='text-[#f1f1f1] active:text-[#1BD7E1]'>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    )
}
