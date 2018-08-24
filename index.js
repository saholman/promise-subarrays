'use strict';

module.exports = function() {
    const factory = {};

    factory.functionCalls = [];

    factory.push = function(funct, args = []) {
        factory.functionCalls.push({
            funct: funct,
            args: args
        });
    }

    factory.awaitAll = async function(numAtATime) {
        if(!numAtATime) {
            numAtATime = factory.functionCalls.length
        } else if(numAtATime === 0) {
            throw Error("numAtATime cannot be 0");
        }

        for(let i = 0; i < factory.functionCalls.length; i+=numAtATime) {
            const subarray = factory.functionCalls.slice(i, i+numAtATime);
            const promises = [];

            for(let functionCall of subarray) {
                promises.push(functionCall.funct(...functionCall.args));
            }
            
            await Promise.all(promises);
        }
    }

    return factory;
}
