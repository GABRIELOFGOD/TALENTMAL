import { WhyJoinProp } from '../utils/dummy';

const WhyJoinCard = ({ icon, title, body }: WhyJoinProp) => {
  return (
    <div className='flex flex-col w-full justify-center items-center h-fit'>
      <div className='rounded-full border border-gold border-opacity-30 p-2 bg-gold bg-opacity-5 text-gold'>{icon}</div>
      <p className="py-5 text-[32px] text-center font-medium">{title}</p>
      <p className='md:text-xl text-[16px] font-normal text-center text-light'>{body} </p>
    </div>
  )
}

export default WhyJoinCard