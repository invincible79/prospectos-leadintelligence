/**
 * =============================================================================
 * ProspectOS - Helper Utilities
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This module provides small, reusable, side-effect-free utility functions
 * used throughout ProspectOS.
 *
 * Helpers should solve generic programming problems and must remain completely
 * independent of business logic, scraping engines or AI workflows.
 *
 * RESPONSIBILITIES
 * ----------------
 * • URL manipulation
 * • Text processing
 * • Validation
 * • Timing utilities
 * • Array utilities
 * • Object utilities
 *
 * INPUTS
 * ------
 * Function specific.
 *
 * OUTPUTS
 * -------
 * Pure values.
 *
 * USED BY
 * -------
 * Every module in ProspectOS.
 *
 * DEPENDENCIES
 * ------------
 * None.
 *
 * DESIGN RULES
 * ------------
 * • Every helper must be pure whenever possible.
 * • No scraping logic.
 * • No Playwright.
 * • No Instagram logic.
 * • No Website logic.
 * • No AI logic.
 * • No side effects.
 *
 * NOTES
 * -----
 * If a helper becomes specific to one module, move it into that module.
 * This file should remain a general-purpose utility library.
 *
 * =============================================================================
 */

/**
 * ============================================================================
 * Sleep
 * ============================================================================
 *
 * Pauses execution for the specified duration.
 *
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */

function sleep(milliseconds) {

    return new Promise(resolve => setTimeout(resolve, milliseconds));

}

/**
 * ============================================================================
 * Normalize URL
 * ============================================================================
 *
 * Converts URLs into a consistent format.
 *
 * @param {string} url
 * @returns {string}
 */

function normalizeUrl(url) {

    if (!url) return "";

    let normalized = url.trim();

    if (!/^https?:\/\//i.test(normalized)) {
        normalized = `https://${normalized}`;
    }

    return removeTrailingSlash(normalized);

}

/**
 * ============================================================================
 * Remove Trailing Slash
 * ============================================================================
 */

function removeTrailingSlash(url) {

    return url.replace(/\/+$/, "");

}

/**
 * ============================================================================
 * Extract Domain
 * ============================================================================
 *
 * @param {string} url
 * @returns {string}
 */

function extractDomain(url) {

    try {

        return new URL(normalizeUrl(url)).hostname;

    }

    catch {

        return "";

    }

}

/**
 * ============================================================================
 * URL Validation
 * ============================================================================
 */

function isValidUrl(url) {

    try {

        new URL(normalizeUrl(url));

        return true;

    }

    catch {

        return false;

    }

}

/**
 * ============================================================================
 * Clean Text
 * ============================================================================
 */

function cleanText(text = "") {

    return text
        .replace(/\s+/g, " ")
        .trim();

}

/**
 * ============================================================================
 * Truncate Text
 * ============================================================================
 */

function truncate(text = "", length = 100) {

    if (text.length <= length) {
        return text;
    }

    return `${text.substring(0, length)}...`;

}

/**
 * ============================================================================
 * Capitalize
 * ============================================================================
 */

function capitalize(text = "") {

    if (!text) return "";

    return text.charAt(0).toUpperCase() + text.slice(1);

}

/**
 * ============================================================================
 * Remove Duplicate Values
 * ============================================================================
 */

function unique(array = []) {

    return [...new Set(array)];

}

/**
 * ============================================================================
 * Chunk Array
 * ============================================================================
 */

function chunk(array = [], size = 1) {

    const chunks = [];

    for (let i = 0; i < array.length; i += size) {

        chunks.push(array.slice(i, i + size));

    }

    return chunks;

}

/**
 * ============================================================================
 * Email Validation
 * ============================================================================
 */

function isValidEmail(email = "") {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/**
 * ============================================================================
 * Phone Validation
 * ============================================================================
 *
 * Validates Indian mobile numbers.
 */

function isValidPhone(phone = "") {

    const digits = phone.replace(/\D/g, "");

    return /^[6-9]\d{9}$/.test(digits);

}

/**
 * ============================================================================
 * Timestamp
 * ============================================================================
 */

function timestamp() {

    return new Date().toISOString();

}

/**
 * ============================================================================
 * Deep Clone
 * ============================================================================
 *
 * Suitable for JSON-compatible objects.
 */

function deepClone(object) {

    return structuredClone(object);

}

/**
 * ============================================================================
 * Public API
 * ============================================================================
 */

module.exports = {

    sleep,

    normalizeUrl,

    removeTrailingSlash,

    extractDomain,

    isValidUrl,

    cleanText,

    truncate,

    capitalize,

    unique,

    chunk,

    isValidEmail,

    isValidPhone,

    timestamp,

    deepClone

};