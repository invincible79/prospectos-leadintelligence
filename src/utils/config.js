/**
 * =============================================================================
 * ProspectOS - Configuration Manager
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This module is the single gateway to ProspectOS configuration.
 *
 * Every module in the application must import configuration from this file
 * instead of reading config/config.json directly.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Load the application configuration.
 * • Validate the required configuration structure.
 * • Prevent runtime modification of configuration.
 * • Export a single immutable configuration object.
 *
 * INPUTS
 * ------
 * ../../config/config.json
 *
 * OUTPUTS
 * -------
 * Immutable configuration object.
 *
 * USED BY
 * -------
 * Every module in ProspectOS.
 *
 * DEPENDENCIES
 * ------------
 * ../../config/config.json
 *
 * DESIGN RULES
 * ------------
 * • Never import config.json directly.
 * • Never modify configuration during runtime.
 * • Every configurable value must originate here.
 * • Fail fast if configuration is invalid.
 *
 * NOTES
 * -----
 * Think of this module as the Configuration Manager.
 *
 * If ProspectOS later migrates to:
 * • Environment variables
 * • Remote configuration
 * • Database configuration
 * • Secret managers
 *
 * only this file should require modification.
 *
 * =============================================================================
 */

const configuration = require("../../config/config.json");

/**
 * ============================================================================
 * Required Configuration Keys
 * ============================================================================
 *
 * Every key listed here must exist before ProspectOS starts.
 * Missing configuration should immediately stop application startup.
 */

const REQUIRED_CONFIGURATION = {
    browser: [
        "headless",
        "timeout",
        "navigationTimeout",
        "executablePath",
        "userDataDir",
        "userAgent",
        "viewport",
        "launchOptions"
    ],

    scraper: [
        "maxRetries",
        "retryDelay",
        "delayBetweenProfiles",
        "concurrency"
    ],

    instagram: [
        "baseUrl",
        "graphqlTimeout"
    ],

    website: [
        "timeout",
        "maxDepth",
        "maxPages",
        "followRedirects"
    ],

    paths: [
        "input",
        "output",
        "logs",
        "browserProfile"
    ],

    output: [
        "directory",
        "prettyPrint"
    ],

    logging: [
        "level",
        "timestamps"
    ]
};

/**
 * ============================================================================
 * Deep Freeze
 * ============================================================================
 *
 * Recursively freezes every object to prevent accidental runtime mutation.
 *
 * @param {Object} object
 * @returns {Object}
 */

function deepFreeze(object) {

    Object.getOwnPropertyNames(object).forEach((property) => {

        const value = object[property];

        if (
            value &&
            typeof value === "object" &&
            !Object.isFrozen(value)
        ) {
            deepFreeze(value);
        }

    });

    return Object.freeze(object);

}

/**
 * ============================================================================
 * Configuration Validation
 * ============================================================================
 *
 * Ensures ProspectOS has every required configuration section and property
 * before startup.
 *
 * @param {Object} config
 */

function validateConfiguration(config) {

    for (const [section, properties] of Object.entries(REQUIRED_CONFIGURATION)) {

        if (!Object.prototype.hasOwnProperty.call(config, section)) {

            throw new Error(
                `Missing configuration section "${section}".`
            );

        }

        for (const property of properties) {

            if (!Object.prototype.hasOwnProperty.call(config[section], property)) {

                throw new Error(
                    `Missing configuration "${section}.${property}".`
                );

            }

        }

    }

}

/**
 * ============================================================================
 * Configuration Initialization
 * ============================================================================
 */

validateConfiguration(configuration);

const config = deepFreeze(configuration);

/**
 * ============================================================================
 * Public API
 * ============================================================================
 */

module.exports = {
    config
};