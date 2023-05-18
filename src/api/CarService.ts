import axios, { AxiosResponse } from 'axios';

const API_URL: string = 'https://test.tspb.su/test-task/vehicles';

export const fetchCars = async (): Promise<any[]> => {
    try {
        const response: AxiosResponse = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};