//// [tests/cases/compiler/nominalTypesDeclarationEmit.ts] ////

//// [nominalTypesDeclarationEmit.ts]
export nominal type UserId = string;
nominal type Local = number;
export declare nominal type Handle = number;
export nominal type MediaId = UserId;
export function make(s: string) {
    return s as UserId;
}
export const local = 1 as Local;
export const both = { id: make("x"), media: "m" as MediaId };

export function f() {
    nominal type Inner = string;
    return "x" as Inner; // error
}


//// [nominalTypesDeclarationEmit.js]
export function make(s) {
    return s;
}
export const local = 1;
export const both = { id: make("x"), media: "m" };
export function f() {
    return "x"; // error
}
