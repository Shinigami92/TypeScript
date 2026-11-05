// @strict: true
// @target: esnext
// @noEmit: true

// 'nominal' is a contextual keyword
const nominal = 1;
nominal
type X = 1;
const y = nominal + 1;

export nominal type Email = string;
declare nominal type Handle = number;
export declare nominal type Token = string;

nominal interface I {} // error
nominal class C {} // error
nominal const z = 1; // error
nominal type G<T> = string; // error
nominal nominal type Twice = string; // error

function f() {
    nominal type Local = string;
    return "x" as Local;
}
