/**
 * =============================================================================
 * ProspectOS - Models Entry Point
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This file acts as the public entry point for every model.
 *
 * Instead of importing individual files:
 *
 * require("./lead")
 * require("./page")
 * require("./tracker")
 *
 * the rest of the application simply imports:
 *
 * require("../models")
 *
 * WHY?
 * ----
 * This pattern (called a Barrel Export) hides the internal folder structure.
 *
 * If models are renamed or reorganized later,
 * only this file changes.
 *
 * Every other module remains untouched.
 *
 * =============================================================================
 */

const { createLead } = require("./lead");
const { createPage } = require("./page");
const { createTracker } = require("./tracker");

module.exports = {
    createLead,
    createPage,
    createTracker
};