/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.hauler');
 * mod.thing == 'a thing'; // true
 */

//TODO
//some kind of fucken sub role, sub way sandwhich
// Should refill towers, shift gubbins around


var roleHauler = {
    run: function(creep) {
        const target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        
       //creep.pickup(target)
        if(creep.pickup(target) == ERR_NOT_IN_RANGE) { creep.moveTo(target); }
        
        if(creep.carry.energy == creep.carryCapacity){
            var structs = creep.room.find(FIND_STRUCTURES, {
                filter: (structs) => {
                    return (structs.structureType == STRUCTURE_EXTENSION ||
                        structs.structureType == STRUCTURE_SPAWN ||
                        structs.structureType == STRUCTURE_TOWER||
                        structs.structureType == STRUCTURE_CONTAINER) && structs.energy < structs.energyCapacity
                                    }
                                                            }
                                            )
            var stores = creep.room.find(FIND_STRUCTURES, {
                filter: (stores) => {
                    return (stores.structureType == STRUCTURE_CONTAINER) && stores.store[RESOURCE_ENERGY] < 2000
                }
                
                
            })
        if(structs.length > 0) {
            if(creep.transfer(structs[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                creep.moveTo(structs[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        if(stores.length > 0){
           
            
            creep.moveTo(stores[0], {visualizePathStyle: {stroke: '#ffffff'}})
            if(creep.transfer(stores[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                creep.moveTo(stores[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
            
            
            
        }
        

        
}
};
module.exports = roleHauler;