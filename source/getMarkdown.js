/**
 * Singleton MarkdownGetter
 */
var MarkdownGetter = new function () {

    /**
     * Get Markdown raw text from GitHub
     * @param {string} path path of md file. "username/project/branch/path.md"
     */
    this.getFromGitHub = function (path)
    {
        var fullpath = "https://raw.githubusercontent.com/" + path;
        return this.getMarkdown(fullpath);
    };

    /**
     * get Markdown raw text from fullpath
     * @param {string} fullpath 
     */
    this.getMarkdown = function (fullpath)
    {
        $.ajax({
            url: fullpath,
            crossDomain: true,
            dataType: "text"
        }).done(function(data) {
            return data;
        });
    };
};