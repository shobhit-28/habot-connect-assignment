import { getAllCentres, type learningCentre } from "@/backend/mockApis"
import type React from "react"
import { useEffect, useState } from "react"
import { CardsComponent } from "../card/cardsComponent"

export const HomePage: React.FC = () => {
    const [learningCentres, setLearningCentres] = useState<Array<learningCentre>>([])
    const [searchData, setSearchData] = useState<Array<learningCentre>>([])

    const fetchAll = async () => {
        setLearningCentres(await getAllCentres())
    }

    const searchInstitutes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData(
            [
                ...learningCentres.filter((centre) => centre.name.slice(0, event.target.value.length).toLowerCase() === event.target.value.toLowerCase()),
                ...learningCentres.filter((centre) => centre.name.slice(0, event.target.value.length).toLowerCase() !== event.target.value.toLowerCase())
                    .filter((centre) => centre.name
                        .concat(centre.shortDescription)
                        .concat(centre.location)
                        .concat(centre.longDescription)
                        .concat(centre.specialization)
                        .toLowerCase().includes(event.target.value.toLowerCase()))
            ]
        )
    }

    useEffect(() => {
        fetchAll()
    }, [])

    useEffect(() => {
        setSearchData(learningCentres)
    }, [learningCentres])

    return (
        <div className="p-5">
            <input type="text" name="" id="" placeholder="Search" className="border outline-none py-2 px-4 my-6 w-full rounded-3xl text-center text-lg font-medium" onChange={(event) => searchInstitutes(event)} />
            {/* <div className="card-container flex flex-wrap gap-4">
                {learningCentres.map((learningCentres, i) => <CardsComponent learningCentre={learningCentres} key={i} />)}
            </div> */}
            {searchData.length > 0
                ?
                <div className="flex flex-wrap gap-4">
                    {searchData.map((learningCentres, i) => <CardsComponent learningCentre={learningCentres} key={i} />)}
                </div>
                :
                <div className="w-full h-[55vh] flex justify-center items-center">
                    <p className="text-2xl font-semibold">
                        NOT FOUND
                    </p>
                </div>
            }
        </div>
    )
}
