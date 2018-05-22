# Pork Your Markdown
[![Build Status](https://travis-ci.org/Porkstewdio/pork_your_markdown.svg?branch=master)](https://travis-ci.org/Porkstewdio/pork_your_markdown)
[![Build Status](https://travis-ci.org/Porkstewdio/pork_your_markdown.svg?branch=develop)](https://travis-ci.org/Porkstewdio/pork_your_markdown)

Pork Your Markdown(PUMD) is a library that help you insert .md(Markdown) file into HTML page (blog, webpage, etc.)<br>
You can insert .md file using URL address, or load .md from online repository directly such as GitHub.

## How to use
1. Insert js files into html. (pumd.js, pumd.css, jquery)
2. Put \<div\> tag where the .md file would be inserted.
3. Set class of \<div\> tag as pumd (\<div class="pumd"\>)
4. Enter .md file's info into \<div\> tag's attributes.
    * Put .md file's URL address into 'url' attribute.
    * Or, Put .md file's information into other attributes.

## DIV attr info
- url : full url. If this attr is existed, ignore other attrs.
- from : Online repository service to load
- username : Username or Organization which contains .md file
- project : Project name which has .md file
- branch : Branch name
- path : .md file's path(under the branch)

## Example
`<div class="pumd" url="https://raw.githubusercontent.com/Porkstewdio/pork_your_markdown/master/README.md"></div>`<br>
or<br>
`<div class="pumd" username="Porkstewdio" project="pork_your_markdown" branch="master" path="README.md" from="github"></div>`

## Supported online repository
 - GitHub : github
