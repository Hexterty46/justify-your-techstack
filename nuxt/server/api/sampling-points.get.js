export default defineEventHandler(async (city) => {

    const baseURL = 'https://fdnd-agency.directus.app/items/apa_sampling_points'

    const URLParams = new URLSearchParams()

    URLParams.append(
        'fields',
        'location,city_id.name,measurements.value,measurements.date'
    )

    // URLParams.append('filter[city_id][name][_icontains]', city || '')
    URLParams.append('deep[measurements][_sort]', '-date')
    URLParams.append('deep[measurements][_limit]', '1')

    const pointsResponse = await $fetch(`${baseURL}?${URLParams}`)

    return {
        points: pointsResponse.data
    }
})