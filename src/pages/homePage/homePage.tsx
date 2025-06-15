import { getAllCentres, type learningCentre } from "@/backend/mockApis"
import type React from "react"
import { useEffect, useState } from "react"
import { CardsComponent } from "../card/cardsComponent"

export const HomePage: React.FC = () => {
    const [learningCentres, setLearningCentres] = useState<Array<learningCentre>>([])

    const fetchAll = async () => {
        setLearningCentres(await getAllCentres())
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <div className="p-5">
            <div className="card-container flex flex-wrap gap-4">
                {learningCentres.map((learningCentres, i) => <CardsComponent learningCentre={learningCentres} key={i} />)}
            </div>
        </div>
    )
}
