// import "../js/jquery-3.3.1";
// import "./getMarkdown";
// import 이거.. ES6 module 만드는거같은데..어떻게쓰는거지....

/**
 * Singleton MarkdownGetter
 */
let MarkdownGetter = new function () {

    /**
     * Get Markdown raw text from GitHub
     * @param {string} path path of md file. "username/project/branch/path.md"
     */
    this.getFromGitHub = function (path, callback)
    {
        let fullpath = "https://raw.githubusercontent.com/" + path;
        return this.getMarkdown(fullpath, callback);
    };

    /**
     * get Markdown raw text from fullpath
     * @param {string} fullpath 
     */
    this.getMarkdown = function (fullpath, callback)
    {
        $.ajax({
            url: fullpath,
            crossDomain: true,
            dataType: "text"
        }).done(function(data) {
            callback.push(data);
        });
    };
};

/**
 * mdResultcallback. Pass this as new instance when get something from MarkdownGetter
 * @param {jquery div instance} diletea one of $(div.pumd)
 * @param {String} content markdown raw text
 */
let mdResultCallback = function(diletea) {
    let div = diletea;

    /**
     * Push md raw text content to div which is declared when callback created
     * @param {String} content md raw text
     */
    this.push = function(content) {
        var converter = new showdown.Converter(),
        text = content,
        html = converter.makeHtml(text);
        div.html(html);
    };
    
};

//Document ready. 
$(document).ready(function() {
    //Get all PUMD area
    let areas = $("div.pumd");
    areas.each(function(idx) {
        let path = $(this).attr("path");
        let from = $(this).attr("from");
        let mdraw = "";

        //If path's first letter is slush('/'), remove it to combine path and url
        if(path.charAt(0) == '/') {
            path = path.substring(1, path.length);
        }
        switch(from) {
            case "github" :
                mdraw = MarkdownGetter.getFromGitHub(path, new mdResultCallback($(this)));
            break;
        }
    });
});