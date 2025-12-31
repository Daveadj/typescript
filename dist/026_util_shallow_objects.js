"use strict";
//partial<T> make all tthe top level field optional
const patch10 = { name: 'sam' };
//the partial is shallow
const patch11 = { address: {
        line1: 'line1',
        city: 'ci'
    } };
const userAllPatch1 = {
    id: 'u1',
    name: 'name',
    address: {
        line1: 'line',
        city: 'city'
    },
    email: 'test'
};
const readOnlyUser = {
    id: 'u1',
    name: 'name',
    address: {
        line1: 'line',
        city: 'city'
    },
};
const publicUser = {
    id: 'u5',
    name: 'same',
    //any other will throw error
};
const omitUserN10 = {
    id: 'u1',
    name: 'name',
    address: {
        line1: 'line',
        city: 'city'
    },
};
const dirN10 = {
    admin: {
        id: 'u1',
        name: 'name',
        address: {
            line1: 'line',
            city: 'city'
        },
    },
    user: {
        id: 'u1',
        name: 'name',
        address: {
            line1: 'line',
            city: 'city'
        },
    },
    editor: {
        id: 'u1',
        name: 'name',
        address: {
            line1: 'line',
            city: 'city'
        },
    }
};
