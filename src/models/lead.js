/**
 * =============================================================================
 * ProspectOS - Canonical Lead Model
 * =============================================================================
 *
 * PURPOSE
 * -------
 * This file defines the canonical Lead object used throughout ProspectOS.
 *
 * Think of this object as the database schema for the entire application.
 * Every intelligence engine receives a Lead object, enriches only the section
 * it owns, and returns the same Lead object.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Create a new Lead object.
 * • Define the application's normalized data structure.
 * • Act as the single source of truth for every collected intelligence.
 *
 * INPUTS
 * ------
 * None.
 *
 * OUTPUTS
 * -------
 * Fresh Lead object.
 *
 * USED BY
 * -------
 * Instagram Engine
 * Website Engine
 * Tracking Engine
 * LinkedIn Engine
 * Google Business Engine
 * AI Qualification Engine
 * Output Writers
 *
 * DEPENDENCIES
 * ------------
 * createPage()
 * createTracker()
 *
 * DESIGN RULES
 * ------------
 * • Never create Lead objects manually.
 * • Always use createLead().
 * • Every module should modify only the section it owns.
 * • Never store temporary scraping data here.
 * • This model contains normalized intelligence only.
 *
 * NOTES
 * -----
 * If the schema changes, it should be changed here first.
 * Every downstream module depends on this contract.
 *
 * =============================================================================
 */

const { createPage } = require("./page");
const { createTracker } = require("./tracker");

function createLead() {
    return {

        instagram: {

            username: "",

            profileUrl: "",

            displayName: "",

            bio: "",

            businessCategory: "",

            followers: 0,

            following: 0,

            isVerified: false,

            profilePicture: "",

            websiteInBio: "",

            bioLinks: [],

            contact: {

                email: "",

                phone: "",

                address: ""

            },

            scrapedAt: null

        },

        website: {

            url: "",

            finalUrl: "",

            domain: "",

            protocol: "",

            status: {

                accessible: false,

                statusCode: null,

                responseTime: null

            },

            technology: {

                platform: "unknown",

                cms: "",

                framework: "",

                hosting: "",

                cdn: "",

                language: "",

                currency: "",

                favicon: "",

                logo: "",

                frontend: [],

                backend: [],

                infrastructure: []

            },

            contacts: {

                emails: [],

                phones: [],

                whatsapp: [],

                address: "",

                socialLinks: [],

                contactForm: ""

            },

            ecommerce: {

                hasProducts: false,

                productCount: 0,

                hasCollections: false,

                collectionCount: 0,

                hasSearch: false,

                hasWishlist: false,

                hasCart: false,

                hasAddToCart: false,

                hasCheckout: false,

                hasPayment: false,

                paymentMethods: [],

                hasCOD: false,

                shippingCountries: [],

                currencies: []

            },

            pages: {

                homepage: createPage(),

                contact: createPage(),

                about: createPage(),

                products: createPage(),

                collections: createPage(),

                faq: createPage(),

                support: createPage(),

                shippingPolicy: createPage(),

                refundPolicy: createPage(),

                returnPolicy: createPage(),

                cancellationPolicy: createPage(),

                privacyPolicy: createPage(),

                termsOfService: createPage(),

                trackOrder: createPage(),

                blogs: createPage(),

                careers: createPage(),

                wholesale: createPage()

            },

            analysis: {

                issues: [],

                warnings: [],

                notes: [],

                scores: {}

            }

        },

        tracking: {

            metaPixel: createTracker(),

            googleAnalytics: createTracker(),

            googleAds: createTracker(),

            googleTagManager: createTracker(),

            pinterestPixel: createTracker(),

            microsoftClarity: createTracker(),

            hotjar: createTracker(),

            mixpanel: createTracker(),

            segment: createTracker(),

            amplitude: createTracker()

        },

        people: {

            decisionMakers: []

        },

        qualification: {

            scores: {},

            tags: [],

            summary: ""

        },

        metadata: {

            source: {

                instagram: false,

                website: false,

                linkedin: false,

                googleBusiness: false

            },

            timings: {

                startedAt: null,

                completedAt: null,

                duration: 0

            },

            worker: {

                id: null,

                retryCount: 0

            },

            version: "1.0.0",

            scraper: "ProspectOS",

            errors: [],

            warnings: []

        }

    };
}

module.exports = {
    createLead
};