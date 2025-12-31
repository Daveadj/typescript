function describeTypeof(x : unknown){
    if(typeof x === 'string'){
        return 'string'
    }

    if(typeof x === 'number'){
        return 'number'
    }

    if(typeof x === 'bigint'){
        return 'bigint'
    }

    if(typeof x === 'boolean'){
        return true
    }

    if(typeof x === 'symbol'){
        return 'symbol'
    }

    if(typeof x === 'object'){
        return 'object'
    }

    if(typeof x === 'function'){
        return 'function'
    }

    return 'unknown'
}

console.log(
        describeTypeof(1),
        describeTypeof("1"),
        describeTypeof(true),
        describeTypeof(10n),
        describeTypeof({}),
        describeTypeof([]),
        describeTypeof(function(){}),
        describeTypeof(null),
        describeTypeof(undefined),
        describeTypeof(Symbol("id"))
    );


    function info(z : unknown){
          if(Array.isArray(z)){
            return z
          }

          if(z instanceof Date){
            return new Date(z)
          }

          if(z instanceof Error){
            return new Error(z.message)
          }

          return 'object'
    }

    console.log(
        info([1,2,3,4]),
        info(new Date()),
        info({name : "John"}),
        info(new Error("Error"))
    )