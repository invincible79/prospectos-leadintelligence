/**
 * =============================================================================
 * ProspectOS - Shared Constants
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This module contains immutable values shared across multiple ProspectOS
 * modules.
 *
 * Constants centralize common paths, URLs, keywords and identifiers so they
 * never become duplicated throughout the codebase.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Define application-wide constants.
 * • Eliminate duplicated strings.
 * • Provide a single source of truth for reusable values.
 *
 * INPUTS
 * ------
 * None.
 *
 * OUTPUTS
 * -------
 * Immutable constant objects.
 *
 * USED BY
 * -------
 * Browser Engine
 * Instagram Engine
 * Website Engine
 * Tracking Engine
 * Contact Extractor
 * AI Qualification Engine
 *
 * DESIGN RULES
 * ------------
 * • Only immutable values belong here.
 * • No functions.
 * • No business logic.
 * • Group related constants together.
 * • If only one module needs a value, keep it inside that module.
 *
 * NOTES
 * -----
 * Think of this file as ProspectOS's shared knowledge base.
 * Every module should reference these constants instead of duplicating strings.
 *
 * =============================================================================
 */

/**
 * ============================================================================
 * Instagram
 * ============================================================================
 */

const INSTAGRAM = {

    BASE_URL: "https://www.instagram.com"

};

/**
 * ============================================================================
 * Website Paths
 * ============================================================================
 */

const WEBSITE_PATHS = {

    CONTACT: [
        "/contact",
        "/contact-us",
        "/support",
        "/help",
        "/customer-care",
        "/reach-us"
    ],

    ABOUT: [
        "/about",
        "/about-us",
        "/our-story",
        "/company"
    ],

    POLICIES: [
        "/privacy-policy",
        "/refund-policy",
        "/return-policy",
        "/returns",
        "/shipping-policy",
        "/cancellation-policy",
        "/terms",
        "/terms-and-conditions"
    ],

    SHOPIFY_POLICIES: [
        "/policies/privacy-policy",
        "/policies/refund-policy",
        "/policies/return-policy",
        "/policies/shipping-policy",
        "/policies/contact-information",
        "/policies/terms-of-service"
    ],

    BLOG: [
        "/blog",
        "/blogs",
        "/news"
    ],

    CAREERS: [
        "/careers",
        "/jobs"
    ]

};

/**
 * ============================================================================
 * Social Platforms
 * ============================================================================
 */

const SOCIAL_DOMAINS = {

    FACEBOOK: "facebook.com",

    INSTAGRAM: "instagram.com",

    LINKEDIN: "linkedin.com",

    YOUTUBE: "youtube.com",

    TWITTER: "twitter.com",

    X: "x.com",

    TIKTOK: "tiktok.com",

    PINTEREST: "pinterest.com",

    WHATSAPP: "wa.me"

};

/**
 * ============================================================================
 * Tracking Technologies
 * ============================================================================
 */

const TRACKING_TECHNOLOGIES = [

    "Meta Pixel",

    "Google Analytics",

    "Google Tag Manager",

    "Google Ads",

    "TikTok Pixel",

    "Pinterest Pixel",

    "Microsoft Clarity",

    "Hotjar",

    "Mixpanel",

    "Segment",

    "Amplitude"

];

/**
 * ============================================================================
 * Output Formats
 * ============================================================================
 */

const OUTPUT_FORMATS = {

    JSON: "json",

    CSV: "csv"

};

/**
 * ============================================================================
 * HTTP Headers
 * ============================================================================
 */

const HEADERS = {

    USER_AGENT: "User-Agent",

    CONTENT_TYPE: "Content-Type",

    LOCATION: "Location",

    REFERER: "Referer"

};

/**
 * ============================================================================
 * Exports
 * ============================================================================
 */

module.exports = {

    INSTAGRAM,

    WEBSITE_PATHS,

    SOCIAL_DOMAINS,

    TRACKING_TECHNOLOGIES,

    OUTPUT_FORMATS,

    HEADERS

};