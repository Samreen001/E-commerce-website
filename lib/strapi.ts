const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

export async function fetchFromStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`)
  if (!res.ok) {
    throw new Error(`Strapi API error! status: ${res.status}`)
  }
  const data = await res.json()
  return data
}

