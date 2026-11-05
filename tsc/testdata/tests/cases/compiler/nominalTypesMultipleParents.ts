// @strict: true
// @target: esnext
// @noEmit: true

nominal type Port = number;
nominal type HttpPort = Port & (80 | 8080);
nominal type WellKnownPort = Port & (80 | 443);
nominal type Both = HttpPort & WellKnownPort;

declare const both: Both;
const hp: HttpPort = both;
const wk: WellKnownPort = both;
const port: Port = both;
const lit: 80 = both;
const num: number = both;

declare const http: HttpPort;
const notBoth: Both = http; // error
const http80: 80 | 8080 = http;
const asBoth = http as Both;

type AnyKnownPort = HttpPort | WellKnownPort;
declare const anyKnown: AnyKnownPort;
const anyKnownLit: 80 | 443 | 8080 = anyKnown;

nominal type Trimmed = string;
nominal type Lowercased = string;
nominal type Normalized = Trimmed & Lowercased;
declare const normalized: Normalized;
const trimmed: Trimmed = normalized;
const lowercased: Lowercased = normalized;
const plain: string = normalized;

nominal type Meters = number;
nominal type UserId = string;
nominal type Broken = Meters & UserId; // error

nominal type Self = Self; // error
nominal type A = B; // error
nominal type B = A; // error
nominal type Tree = { children: Tree[] };
declare const tree: Tree;
const firstChild: Tree = tree.children[0];
