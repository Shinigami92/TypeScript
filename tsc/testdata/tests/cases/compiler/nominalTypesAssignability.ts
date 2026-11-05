// @strict: true
// @target: esnext
// @noEmit: true

nominal type UserId = string;
nominal type OrderId = string;

// Creating values
const u0: UserId = "u-1"; // error
const u1 = "u-1" as UserId;
const u2 = 42 as UserId; // error
declare const raw: unknown;
const u3 = raw as UserId;
declare const anyValue: any;
const u4: UserId = anyValue;
function isUserId(s: string): s is UserId {
    return s.startsWith("u-");
}
declare const str: string;
if (isUserId(str)) {
    const narrowed: UserId = str;
}

// Mixing up
declare function getUser(id: UserId): void;
declare const o1: OrderId;
getUser(o1); // error
getUser("u-1"); // error
getUser(u1);
const u5 = o1 as UserId; // error, sibling cast
const u6 = o1 as string as UserId;

// Using it as the base type
const s: string = u1;
const upper: string = u1.toUpperCase();
const len: number = u1.length;
const eq1 = u1 === "u-1";
const eq2 = u1 === o1; // error
declare const maybe: UserId | number;
if (typeof maybe === "string") {
    const narrowed: UserId = maybe;
}
const template = `id: ${u1}`;

// Hierarchies
nominal type NodeId = string;
nominal type MediaId = NodeId;
nominal type StreamId = MediaId;
nominal type VideoId = MediaId;
declare const video: VideoId, node: NodeId, stream: StreamId;
const n1: NodeId = video;
const n2: MediaId = video;
const n3: string = video;
const v1: VideoId = node; // error
const v2: VideoId = stream; // error, siblings
const v3 = node as VideoId;
const v4 = stream as VideoId; // error, not on a path
const v5 = "x" as VideoId;

// Unions
declare const idOrUndefined: UserId | undefined;
const maybeId: string | undefined = idOrUndefined;
if (idOrUndefined !== undefined) {
    const definitelyId: UserId = idOrUndefined;
}
