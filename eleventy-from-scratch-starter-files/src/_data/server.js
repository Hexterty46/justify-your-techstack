export default async function () {
    const baseURL = "https://fdnd-agency.directus.app/items/apa_sampling_points"

    const URLParams = new URLSearchParams()

    URLParams.append("fields", "location,city_id.name,measurements.value,measurements.date")
    URLParams.append("deep[measurements][_sort]", "-date")
    URLParams.append("deep[measurements][_limit]", "1")

    const response = await fetch(`${baseURL}?${URLParams}`)

    const data = await response.json()

    return {
        points: data.data
    }
}

