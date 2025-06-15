import { getCentreByName, type learningCentre } from "@/backend/mockApis"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const InstituteSpecificPage = () => {
  const { instituteId } = useParams()
  const nav = useNavigate();

  const [learningCentre, setLearningCentre] = useState<learningCentre>()

  const getInstituteDetails = async () => {
    try {
      setLearningCentre(await getCentreByName(instituteId as string))
    } catch (err) {
      nav('/')
      console.error(err)
    }
  }

  useEffect(() => {
    getInstituteDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-50 py-6">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 rounded-xl flex flex-col gap-6">

        <button onClick={() => nav('/')} className="self-start px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition pointed">
          ← Back
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img src={learningCentre?.img} alt={learningCentre?.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-evenly font-medium gap-3">
            <p className="text-3xl font-semibold text-gray-800">{learningCentre?.name}</p>
            <p className="text-gray-700">{learningCentre?.longDescription}</p>
            <p className="text-gray-800">{`Specialization: ${learningCentre?.specialization}`}</p>
            <p className="text-gray-800">{`Location: ${learningCentre?.location}`}</p>
            <p className="text-yellow-600 font-semibold">{`Rating: ${learningCentre?.rating} ⭐`}</p>
            <p className="text-gray-700">{`Email: ${learningCentre?.contactEmail}`}</p>
            <p className="text-gray-700">{`Phone: ${learningCentre?.phoneNumber}`}</p>
            <a href={`mailto:${learningCentre?.contactEmail}`} className="mt-2 w-full bg-black text-white p-2 rounded-lg">Contact Now</a>
          </div>
        </div>
      </div>
    </div>

  )
}
