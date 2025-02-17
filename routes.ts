/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are accessible for authentication
 * These routes redirect to logged in users to the landing page
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default login redirect route
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";
