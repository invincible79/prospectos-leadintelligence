/**
 * =============================================================================
 * ProspectOS - Website Page Model
 * =============================================================================
 *
 * PURPOSE
 * -------
 * Defines the canonical structure for every webpage discovered during website
 * analysis.
 *
 * Every discovered page (Home, About, Contact, Shipping Policy, Refund Policy,
 * FAQ, etc.) must follow this structure.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Create a normalized page object.
 * • Store metadata about a webpage.
 * • Store extracted textual content for future AI analysis.
 *
 * INPUTS
 * ------
 * None.
 *
 * OUTPUTS
 * -------
 * Fresh Page object.
 *
 * USED BY
 * -------
 * Website Fetcher
 * Website Crawler
 * Page Discovery Engine
 * AI Qualification Engine
 *
 * DEPENDENCIES
 * ------------
 * None.
 *
 * DESIGN RULES
 * ------------
 * • Every discovered webpage must use this model.
 * • Never create page objects manually.
 * • Store normalized information only.
 * • Text should contain cleaned content, not raw HTML.
 *
 * NOTES
 * -----
 * Future AI modules will use `text` for summarization, policy analysis,
 * business understanding and qualification.
 *
 * =============================================================================
 */

function createPage() {

    return {

        exists: false,

        crawled: false,

        url: "",

        path: "",

        title: "",

        statusCode: null,

        responseTime: null,

        contentType: "",

        text: "",

        wordCount: 0,

        lastVisited: null

    };

}

module.exports = {
    createPage
};