/**
 * =============================================================================
 * ProspectOS - Utilities Public API
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This module provides a single entry point for every utility used throughout
 * ProspectOS.
 *
 * Instead of importing individual utility files, modules should import from
 * this directory only.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Re-export configuration.
 * • Re-export logger.
 * • Re-export helper functions.
 * • Re-export shared constants.
 *
 * DESIGN RULES
 * ------------
 * • Every utility should be exported here.
 * • Other modules should avoid importing utility files directly.
 *
 * =============================================================================
 */

const { config } = require("./config");
const { logger } = require("./logger");

const helpers = require("./helpers");
const constants = require("./constants");

module.exports = {

    config,

    logger,

    ...helpers,

    ...constants

};