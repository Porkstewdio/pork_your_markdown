/**
 * MarkdownGetter
 */
export class MarkdownGetter {
    constructor() {}

    /**
     * Get Markdown raw text from GitHub
     * @param {string} username Github username or orgname who has MD file
     * @param {string} project Project that has MD file
     * @param {string} branch Branch name which contain MD file
     * @param {string} path MD file path in branch
     * @param {mdResultCallback} callback Callback(mdResultCallback) with div to push
     */
    getFromGitHub(username, project, branch, path, callback) {
        let fullpath = [];
        fullpath.push(
            'https://raw.githubusercontent.com/',
            username, '/',
            project, '/', 
            branch, '/', 
            path
        );
        return this.getMarkdown(fullpath.join(''), callback);
    };

    /**
     * get Markdown raw text from fullpath
     * @param {string} fullpath
     */
     getMarkdown (fullpath, callback) {
        $.ajax({
            url: fullpath,
            crossDomain: true,
            dataType: 'text'
        }).done(function (data) {
            callback.push(data);
        });
    };
    
}
;

/**
 * mdResultcallback. Pass this as new instance when get something from MarkdownGetter
 * @param {jquery div instance} divarea one of $(div.pumd)
 */
export class mdResultCallback {
    constructor(divarea) {
        this.div = divarea;
    }

    /**
     * Push md raw text content to div which is declared when callback created
     * @param {String} content md raw text
     */
    push (content) {
        let converter = new showdown.Converter(), text = content, html = converter.makeHtml(text);
        this.div.html(html);
    };
    
}
;
