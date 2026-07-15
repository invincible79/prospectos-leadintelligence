/**
 * =============================================================================
 * ProspectOS - Logger
 * =============================================================================
 *
 * PURPOSE
 * -------
 * Centralized logging system for ProspectOS.
 *
 * This module is the only logging interface used throughout the application.
 * No module should directly use console.log(), console.error() or import Pino.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Configure the application logger.
 * • Standardize log formatting.
 * • Provide context-aware logging.
 * • Measure execution times.
 * • Create child loggers for future workers.
 *
 * INPUTS
 * ------
 * Configuration Manager
 *
 * OUTPUTS
 * -------
 * Logger API
 *
 * USED BY
 * -------
 * Every module in ProspectOS.
 *
 * DEPENDENCIES
 * ------------
 * pino
 * ./config
 *
 * DESIGN RULES
 * ------------
 * • Never use console.log().
 * • Never import pino anywhere else.
 * • Every log should have context.
 * • Logging implementation remains isolated here.
 *
 * NOTES
 * -----
 * Think of this as ProspectOS's black box recorder.
 *
 * Future improvements:
 * • File logging
 * • Daily log rotation
 * • Cloud logging
 * • Structured JSON logs
 * • Performance analytics
 *
 * =============================================================================
 */

const pino = require("pino");
const { config } = require("./config");

/**
 * ============================================================================
 * Base Logger
 * ============================================================================
 */

const baseLogger = pino({
    level: config.logging.level,

    timestamp: config.logging.timestamps
        ? pino.stdTimeFunctions.isoTime
        : false
});

/**
 * ============================================================================
 * Timer Storage
 * ============================================================================
 */

const timers = new Map();

/**
 * ============================================================================
 * Internal Context Logger
 * ============================================================================
 *
 * Standardizes logging across every ProspectOS subsystem.
 */

function logContext(level, context, message, data = undefined) {

    const formattedMessage = `[${context.toUpperCase()}] ${message}`;

    if (data !== undefined) {
        baseLogger[level](data, formattedMessage);
        return;
    }

    baseLogger[level](formattedMessage);

}

/**
 * ============================================================================
 * Public Logger API
 * ============================================================================
 */

const logger = {

    info(message, data) {
        baseLogger.info(data, message);
    },

    warn(message, data) {
        baseLogger.warn(data, message);
    },

    error(message, data) {
        baseLogger.error(data, message);
    },

    debug(message, data) {
        baseLogger.debug(data, message);
    },

    success(message, data) {
        logContext("info", "SUCCESS", message, data);
    },

    browser(message, data) {
        logContext("info", "BROWSER", message, data);
    },

    instagram(message, data) {
        logContext("info", "INSTAGRAM", message, data);
    },

    website(message, data) {
        logContext("info", "WEBSITE", message, data);
    },

    tracking(message, data) {
        logContext("info", "TRACKING", message, data);
    },

    linkedin(message, data) {
        logContext("info", "LINKEDIN", message, data);
    },

    output(message, data) {
        logContext("info", "OUTPUT", message, data);
    },

    system(message, data) {
        logContext("info", "SYSTEM", message, data);
    },

    /**
     * ------------------------------------------------------------------------
     * Prints a visual separator.
     * ------------------------------------------------------------------------
     */

    section(title) {

        baseLogger.info("");

        baseLogger.info("=".repeat(70));

        baseLogger.info(title);

        baseLogger.info("=".repeat(70));

    },

    /**
     * ------------------------------------------------------------------------
     * Starts a timer.
     * ------------------------------------------------------------------------
     */

    startTimer(label) {

        timers.set(label, Date.now());

    },

    /**
     * ------------------------------------------------------------------------
     * Ends a timer and logs elapsed time.
     * ------------------------------------------------------------------------
     */

    endTimer(label) {

        if (!timers.has(label)) {

            this.warn(`Timer "${label}" was never started.`);

            return;

        }

        const elapsed = Date.now() - timers.get(label);

        timers.delete(label);

        logContext(
            "info",
            "TIMER",
            `${label} completed in ${elapsed} ms`
        );

    },

    /**
     * ------------------------------------------------------------------------
     * Creates a child logger.
     * ------------------------------------------------------------------------
     */

    child(bindings = {}) {

        return baseLogger.child(bindings);

    }

};

module.exports = {
    logger
};