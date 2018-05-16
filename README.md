# Pork Your Markdown
[![Build Status](https://travis-ci.org/Porkstewdio/pork_your_markdown.svg?branch=master)](https://travis-ci.org/Porkstewdio/pork_your_markdown)
[![Build Status](https://travis-ci.org/Porkstewdio/pork_your_markdown.svg?branch=develop)](https://travis-ci.org/Porkstewdio/pork_your_markdown)

Pork Your Markdown(이하 pumd)는 Github에 있는 Markdown 파일을 다른 Blog(html 형식으로 되어있는 어느 곳이든!)에 올릴 수 있게 도와주는 라이브러리 입니다. 

## How to use
1. js를 html에 삽입한다. (pumd.js, pumd.css, jquery)
2. MD문서가 들어갈 위치에 div를 넣는다.
3. div의 클래스를 pumd로 설정한다. (div.pumd)
4-1. div의 url속성에 MD파일의 url 전체 주소를 입력한다.
4-2. 혹은, div의 다른 속성에 정보를 입력한다.

## DIV 속성 정보
- url : full url. 이 속성이 있을 경우 다른 속성을 모두 무시
- from : 불러올 online repository service
- username : MD파일이 있는 프로젝트가 소속된 Username 혹은 Organization
- project : MD파일이 있는 프로젝트명
- branch : Branch 이름
- path : MD파일의 경로(Branch 밑으로)

## Example
`<div class="pumd" url="https://raw.githubusercontent.com/Porkstewdio/pork_your_markdown/master/README.md"></div>`<br>
또는<br>
`<div class="pumd" username="Porkstewdio" project="pork_your_markdown" branch="master" path="README.md" from="github"></div>`

## 지원 온라인 repository service
 - GitHub : github
