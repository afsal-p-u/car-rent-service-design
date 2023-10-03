import { GoPeople } from 'react-icons/go'
import { LuFuel } from 'react-icons/lu'
import { PiSteeringWheelDuotone } from 'react-icons/pi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

type ItmeProps = {
    image: string,
    name: string,
    year: number,
    seats: string,
    fuel: string,
    km: string,
    type: string,
    rent: number
}

const Item = ({ image, name, year, seats, fuel, km, type, rent }: ItmeProps) => {
  return (
    <div className="bg-slate-100 shadow-xl p-3 w-[310px] rounded-xl">
      <div className="w-full h-[190px] rounded-lg">
        <img src={image} alt="t" className='w-full h-full object-cover rounded-xl' />
      </div>
      <div className="pt-2">
        <div className="flex justify-between">
            <h3 className='font-semibold'>{name}</h3>
            <div className="border-[1px] px-2 border-blue-400 border-dashed rounded-xl">
                <span className="text-xs font-medium">{year}</span>
            </div>
        </div>
        <div className="flex flex-wrap pt-2 gap-2 gap-y-2">
            <p className='w-[45%] text-xs font-medium text-gray-700 flex gap-2 items-center'>
                <GoPeople className="text-blue-700" size={17} />
                {seats}
            </p>
            <p className='w-[45%] text-xs font-medium text-gray-700 flex gap-2 items-center'>
                <LuFuel className="text-blue-700" size={17} />
                {fuel}
            </p>
            <p className='w-[45%] text-xs font-medium text-gray-700 flex gap-2 items-center'>
                <BsSpeedometer2 className="text-blue-700" size={17} />
                {km}
            </p>
            <p className='w-[45%] text-xs font-medium text-gray-700 flex gap-2 items-center'>
                <PiSteeringWheelDuotone className="text-blue-700" size={17} />
                {type}
            </p>
        </div>

        <hr className='border-[1px] border-slate-400/30 mt-3' />

        <div className="flex items-center pt-3 justify-between">
            <div className="flex items-baseline">
                <h1 className='font-semibold text-xl'>${rent}</h1>
                <span className='text-xs font-medium'> / month</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-300">
                    <AiOutlineHeart className="text-blue-700" size={18} />
                </div>
                <button className='text-white px-4 py-2 rounded-xl bg-blue-600 text-xs'>Rent now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
