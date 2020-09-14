import { axiosWithAuth } from '../components/axiosWithAuth'

export default async funtion fetchColor() {
    return await axiosWithAuth().get('/colors')
}