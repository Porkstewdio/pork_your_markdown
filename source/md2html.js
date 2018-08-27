/** regex pattern */
const pattern = [
    [/^#{1}[ ?]/, "<h1>", "</h1>"],
    [/^#{2}[ ?]/, "<h2>", "</h2>"],
    [/^#{3}[ ?]/, "<h3>", "</h3>"],
    [/^#{4}[ ?]/, "<h4>", "</h4>"],
    [/^#{5}[ ?]/, "<h5>", "</h5>"],
    [/^#{6}[ ?]/, "<h6>", "</h6>"],
]

/**
 * Markdown to HTML module class
 */
export class Md2HtmlConverter {
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
        let converter = new showdown.Converter(),
            htmlstr = converter.makeHtml(this.rawData);
        /**
         *       우선은 좀 바쁘고 해서..md2html 직접 만들기전에 showdown.js로 대체  
        //1. Split data line by line.
        let arrStr = this.rawData.split("\n");

        //2. Find pattern using regex.
        //3. If found pattern is one-line-pattern, replace
        let i;
        for(i=0; i<arrStr.length; i++) {
            let line = arrStr[i];
            pattern.forEach(function(ptnArr) {
                let regexRes = ptnArr[0].exec(line);
                if(regexRes !== undefined &&  regexRes !== null) {
                    line = line.replace(ptnArr[0], "");
                    line = ptnArr[1] + line + ptnArr[2];
                }
            });
            arrStr[i] = line;
        }

        //4. join
        let str = arrStr.join("");

        //5. If fount pattern is multi-line-pattern, find end of pattern.

         */

        return htmlstr;
    }
}