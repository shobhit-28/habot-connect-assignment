export interface learningCentre {
    "name": string,
    "specialization": string,
    "location": string,
    "rating": number,
    "longDescription": string,
    "shortDescription": string,
    "contactEmail": string,
    "img": string,
    "phoneNumber": string
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

export async function getCentreByName(name: string): Promise<learningCentre> {
    const data = await loadLearningCentres();
    return data.find(c => c.name.toLowerCase() === name.toLowerCase()) as learningCentre;
}