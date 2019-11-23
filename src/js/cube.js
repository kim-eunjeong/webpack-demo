//전체 모듈화 => es6 default export
const cube = {
	volume: x => x*x*x,
	mm: (r) => r*r
}
export default cube; //전체 모듈화는 한개만 된다.
