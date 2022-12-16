//Decodes the text from MathQuill.
class QuillHandle {
	to_decode: string = '';
	_equation: string = '';
	eq_numbs: number[] = [];
	readonly errors = {
		no_eq: 'Equation equals null!',
		no_frac: 'DecodeFrac was called but there is no fraction!',
		no_num: 'There was no number in the equation!'
	};

	constructor(equation: string) {
		if (typeof equation !== 'undefined' && equation !== null) {
			this.to_decode = equation;
		} else {
			throw `Something went very wrong (${this.errors.no_eq})`;
		}
		this.to_decode = equation;
	}
	UpdateDecode = (e: string) => {
		this.eq_numbs = [];
		this.to_decode = e;
		let numbs = e.split(/^\d/);
		for (let x of numbs){
			this.eq_numbs.push(Number(x));
		}
	};

	DecodeQuill = () => {
		let decoded: string = this.to_decode;
		decoded = decoded.replace(/\\cdot/g, '*');
		let operations: string[] = [];
		
	};
	//Returns the numerator and denominator of the fraction.
	DecodeFrac = (decoded: string) => {
		let temp = decoded.split('\\frac');
		let final: string[] = [];
		if (!temp) {
			throw `Something went very wrong (${this.errors.no_frac})`;
		} else {
			for (let x of temp) {
				var y = x.replace(/\{/g, '(');
				y = y.replace(/\}/g, ')');
				final.push(y);
			}
			if (temp.includes('\\sqrt')){
				for (let y of final){
					var w = y.match(/sqrt(\d)/g);
					for(let op of w){
						//op.replace(/\\sqrt(\d)/g, )
					}
				}
			}
		}
		return final;
	};
}

type Fraction = {
	numerator: string,
	denominator: string
}