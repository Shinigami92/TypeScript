// @strict: true
// @target: esnext
// @noEmit: true

nominal type UserId = string;
nominal type Meters = number;
nominal type Seconds = number;
nominal type Point = [x: number, y: number];
nominal type Customer = { name: string };
interface Client { name: string }

// Arithmetic
declare const d: Meters, t: Seconds;
const sum: number = d + d;
const mixed: number = d + t;
let counter = 0 as Meters;
counter++;
counter--;
counter += 1;
counter *= 2;
counter += d;
counter += t; // error
let label = "x" as UserId;
label += "y"; // error, base is not number

// Keys
declare const u1: UserId;
const users: Record<UserId, Customer> = {};
users[u1];
users["x"]; // error
declare const byId: { [id: UserId]: number };
byId[u1];
byId["x"]; // error

// Tuples
declare const p: Point;
declare function plot(x: number, y: number): void;
plot(...p);
const [px, py] = p;
p[0];
p[2]; // error

// Objects
declare const client: Client;
const c0: Customer = { name: "x" }; // error
const c1 = { name: "x" } as Customer;
const c2: Customer = client; // error
const c3: Client = c1;
c1.name;
type K = keyof Customer;
const k: K = "name";

// Mapped types
type P = Partial<Customer>;
const pp: P = {};
type PU = Partial<UserId>;
const pu1: PU = u1;
const pu2: PU = "plain"; // error
type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };
const dp1: DeepPartial<{ id: UserId }> = { id: u1 };
const dp2: DeepPartial<{ id: UserId }> = { id: "plain" }; // error
