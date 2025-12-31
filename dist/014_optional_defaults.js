"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("me"));
console.log(greetPersonOptional());
function greetPersonDefault(name = "Guest") {
    return `Hello ${name.toUpperCase()}`;
}
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `connect ${host} ${port} ${secure} `;
}
