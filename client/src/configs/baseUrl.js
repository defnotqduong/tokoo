const isProd = import.meta.env.PROD

export const BASE_API_URL = isProd ? 'http://localhost:8080' : 'http://localhost:8080'

export const BASE_CMS_URL = isProd ? 'http://localhost:5176' : 'http://localhost:5176'
