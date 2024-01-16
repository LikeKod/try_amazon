import { instance } from "../api/api.intersepter"



const STATISTICS = 'statistics'

export type TypeStatisticsResponse = {
    name: string,
    value: number
}

export const StatisticsService = {
    async getMsin() {
        return instance<TypeStatisticsResponse>({
            url: `${STATISTICS}/main`,
            method: 'GET'
        })
    },
}