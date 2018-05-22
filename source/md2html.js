/**
 * Markdown to HTML module class
 */
export class Md2HtmlConverter {
    rawData;
    constructor(rawData) {
        this.rawData = rawData;
    }

    /** default tag constant */
    tag = {
        p_o: "<p>", p_c: "</p>",
        br: "<br>",
        h1_o: "<h1>", h1_c: "</h1>",
        h2_o: "<h2>", h1_c: "</h2>",
        h3_o: "<h3>", h1_c: "</h3>",
        h4_o: "<h4>", h1_c: "</h4>",
        h5_o: "<h5>", h1_c: "</h5>",
        h6_o: "<h6>", h1_c: "</h6>",
        line: "<hr>",
        ol_o: "<ol>", ol_c: "</ol>",
        ul_o: "<ul>", ul_c: "</ul>",
        li_o: "<li>", li_c: "</li>",
        b_o: "<b>", b_c: "</b>",
        i_o: "<i>", i_c: "</i>",
        u_o: "<u>", u_c: "</u>",
        bq_o: "<blockquote>", bq_c: "</blockquote>",
        pre_o: "<pre>", pre_c: "</pre>"
    }

    /**
     * Set raw data.
     * @param {string} data 
     */
    setRawData(data) {
        this.rawData = data;
    }

    /**
     * Convert this instance's rawData to HTML.
     * @returns {string} Converted HTML string
     */
    toHTML() {
        
    }
}