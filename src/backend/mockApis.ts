export interface learningCentre {
    "name": string,
    "specialization": string,
    "location": string,
    "rating": number,
    "longDescription": string,
    "shortDescription": string,
    "contactEmail": string,
    "img": string,
    "phoneNumber": string,
    "id": string
}

async function loadLearningCentres(): Promise<Array<learningCentre>> {
    const response = await fetch("/assets/learningCentres.json");
    console.log(response)
    return response.json();
}

export async function getAllCentres(): Promise<Array<learningCentre>> {
    const data = await loadLearningCentres();
    return data;
}

export async function getCentreByName(id: string): Promise<learningCentre> {
    const data = await loadLearningCentres();
    return new Promise<learningCentre>((resolve, reject) => {
        try {
            const details: learningCentre | undefined = data.find(c => c.id.toLowerCase() === id.toLowerCase())
            if (details) {
                resolve(details)
            } else {
                reject(`Not Found`)
            }
            
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}