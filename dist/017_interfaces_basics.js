"use strict";
//interface -> name shape for objects
const user333 = {
    id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date()
};
const admin333 = {
    id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"]
};
const adminWithMeta333 = {
    id: 1,
    name: "John",
    email: "john@example.com",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
    meta: {
        active: true
    }
};
