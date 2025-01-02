const isProd = import.meta.env.PROD

export const BASE_API_URL = isProd ? 'http://localhost:8080' : 'http://localhost:8080'
