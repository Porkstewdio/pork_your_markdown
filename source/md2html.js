/**
 * Markdown to HTML module class
 */
export class Md2HtmlConverter {
    rawData;
    constructor(rawData) {
        this.rawData = rawData;
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