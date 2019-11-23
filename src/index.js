// require: CommonJS 스펙의 모듈가져오기
// var _ = require('lodash');

//es6문법
import _ from 'lodash';
import './style.css';
import './hello.scss'

//named import : { }안에 동일한 이름을 명시
import {area, circumference,} from './js/circle' //확장자 생략가능

//default import : { } 없고, 이름변경가능
import cube1 from './js/cube';


function component() {
	let element = document.createElement('div');
	//<div></div>

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!!!!!!'], ' ');
	//_.join() Hello' 'webpack => 문자열 결합

	return element;
} //선언문
console.log(area(5));
console.log(circumference(3)) // ALT+ENTER 단축키로 누르면 insert해주는게 나옴
console.log(cube1.volume(3));
console.log(cube1.mm(2));
document.body.appendChild(component());