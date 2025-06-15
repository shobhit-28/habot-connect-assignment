import type { learningCentre } from '@/backend/mockApis';
import React from 'react'
import './card.css'
import { FaLocationDot } from 'react-icons/fa6';

type CardsComponentProps = {
    learningCentre: learningCentre;
}

export const CardsComponent: React.FC<CardsComponentProps> = ({ learningCentre }) => {


    return (
        <div title={learningCentre.name} className='w-[280px] bg-white rounded-2xl shadow-[0px_3px_10px_rgba(0,0,0,0.15)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.3)] duration-500 cursor-pointer overflow-hidden flex flex-col'>
            <div className="w-full h-[200px] overflow-hidden">
                <img src={learningCentre.img} alt={learningCentre.shortDescription} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="padding flex flex-col gap-3">
                <h1 className="text-lg font-bold text-center text-gray-800">{learningCentre.name.length > 20 ? `${learningCentre.name.slice(0, 20)}...` : learningCentre.name}</h1>
                <p className="text-sm text-gray-600 text-center leading-snug">{learningCentre.longDescription}</p>

                <div className="text-sm text-gray-700 flex mt-2 justify-between">
                    <span className="flex items-center"><FaLocationDot /> {learningCentre.location}</span>
                    <span className="text-yellow-500 font-semibold">{learningCentre.rating} ⭐</span>
                </div>
            </div>
        </div>


    )
}
