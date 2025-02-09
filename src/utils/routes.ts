export const dubaiUrl = process.env.NEXT_PUBLIC_DUBAI_URL ?? "";
export const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "";
export const mcpUrl = process.env.NEXT_PUBLIC_MCP_URL ?? "";
export const b2cURL = process.env.NEXT_PUBLIC_B2C_URL ?? "";
export const jobsRoute = `${b2cURL}/jobs`;
export const jobsPublicRoute = `${b2cURL}/jobs/public`;
export const companiesPublicRoute = `${b2cURL}/companies/public`;
export const companiesRoute = `${b2cURL}/companies`;

export const ENV = process.env.NEXT_PUBLIC_ENV ?? "";

export const trustedDomains: string[] = [".mirantes.io"];