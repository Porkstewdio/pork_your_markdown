// import "../js/jquery-3.3.1";
// import "./getMarkdown";
// import 이거.. ES6 module 만드는거같은데..어떻게쓰는거지....

/**
 * Singleton MarkdownGetter
 */
var MarkdownGetter = new function () {

    /**
     * Get Markdown raw text from GitHub
     * @param {string} path path of md file. "username/project/branch/path.md"
     */
    this.getFromGitHub = function (path, callback)
    {
        var fullpath = "https://raw.githubusercontent.com/" + path;
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
 * @param {jquery div instance} divArea one of $(div.pumd)
 * @param {String} content markdown raw text
 */
var mdResultCallback = function(divArea) {
    var div = divArea;

    /**
     * Push md raw text content to div which is declared when callback created
     * @param {String} content md raw text
     */
    this.push = function(content) {
        var pre = "<pre>" + content + "</pre>";
        div.html(pre);
    };
    
};

//Document ready. 
$(document).ready(function() {
    //Get all PUMD area
    var areas = $("div.pumd");
    areas.each(function(idx) {
        var path = $(this).attr("path");
        var from = $(this).attr("from");
        var mdraw = "";

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