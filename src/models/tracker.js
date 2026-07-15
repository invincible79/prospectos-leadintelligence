/**
 * =============================================================================
 * ProspectOS - Tracking Technology Model
 * =============================================================================
 *
 * PURPOSE
 * -------
 * Defines the canonical structure for every marketing, analytics or tracking
 * technology detected on a website.
 *
 * Examples:
 * • Meta Pixel
 * • Google Analytics
 * • Google Tag Manager
 * • TikTok Pixel
 * • Microsoft Clarity
 * • Hotjar
 *
 * RESPONSIBILITIES
 * ----------------
 * • Represent one detected tracking technology.
 * • Store identifiers and metadata.
 * • Preserve useful evidence for debugging and analysis.
 *
 * INPUTS
 * ------
 * None.
 *
 * OUTPUTS
 * -------
 * Fresh Tracker object.
 *
 * USED BY
 * -------
 * Tracking Detection Engine
 * Marketing Qualification Engine
 * AI Qualification Engine
 *
 * DEPENDENCIES
 * ------------
 * None.
 *
 * DESIGN RULES
 * ------------
 * • Every tracking technology should use this model.
 * • Never use booleans alone.
 * • Preserve identifiers whenever possible.
 * • Keep only normalized information.
 *
 * NOTES
 * -----
 * Tracking technologies are one of ProspectOS's strongest marketing maturity
 * signals. Rich metadata is therefore more valuable than simple true/false
 * detection.
 *
 * =============================================================================
 */

function createTracker() {

    return {

        detected: false,

        ids: [],

        version: "",

        scriptUrls: [],

        notes: [],

        raw: {}

    };

}

module.exports = {
    createTracker
};