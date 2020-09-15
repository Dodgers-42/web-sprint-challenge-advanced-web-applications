import { axiosWithAuth } from '../components/axiosWithAuth'

export default async function fetchColor() {
    return await axiosWithAuth().get('/colors')
}