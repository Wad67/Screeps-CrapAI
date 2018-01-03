var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        //Gather up the locations of various things so that we may do stuff, and things with them
        
        const containersWithEnergy = creep.room.find(FIND_STRUCTURES, {
          filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
                   i.store[RESOURCE_ENERGY] > 0
            });
        const droppedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
        var structs = creep.room.find(FIND_STRUCTURES, {
            filter: (structs) => {
                return (structs.structureType == STRUCTURE_EXTENSION ||
                    structs.structureType == STRUCTURE_SPAWN ||
                    structs.structureType == STRUCTURE_TOWER) && structs.energy < structs.energyCapacity
                                }    }       )
                                
                                
                                
        if(creep.memory.grabharvest && creep.carry.energy == 0) {
            //Pickup harvester drops
            creep.memory.grabharvest = false;
            creep.say('pickup');
            if(creep.pickup(target) == ERR_NOT_IN_RANGE) { creep.moveTo(target); }
        }
        
        
        
        if(!creep.memory.haulstructures && creep.carry.energy == creep.carryCapacity && structs.length > 0) {
            //store drops in structures
            creep.memory.grabharvest = false;
            creep.memory.haulstructures = true;
            creep.say('structures');

               

        }
        if(creep.memory.haulstorage && containersWithEnergy){
            //pickup from storage, drop into structures
            creep.memory.grabharvest = true;
            creep.memory.haulstructures = false;
            creep.memory.haulstorage = false;
            creep.say('storage');
            if(creep.pickup(containersWithEnergy) == ERR_NOT_IN_RANGE) { creep.moveTo(containersWithEnergy); }
                        if(creep.transfer(structs[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                creep.moveTo(structs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
        }

        if(creep.memory.haulstructures) {
            if(creep.transfer(structs[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                creep.moveTo(structs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
                creep.memory.haulstorage = true;
            }
        
        else {
            if(creep.withdraw(containersWithEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                 creep.moveTo(containersWithEnergy[0]);
            }
        }

        
        
    }
};

module.exports = roleBuilder;