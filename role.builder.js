var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const reptargets = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
            });

        reptargets.sort((a,b) => a.hits - b.hits);

        const containersWithEnergy = creep.room.find(FIND_STRUCTURES, {
          filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
                   i.store[RESOURCE_ENERGY] > 0
            });

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 pickup');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            if(creep.withdraw(containersWithEnergy[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                 creep.moveTo(containersWithEnergy[0]);
            }
        }
        if(reptargets.length > 0 && !creep.room.find(FIND_CONSTRUCTION_SITES)) {
             if(creep.repair(reptargets[0]) == ERR_NOT_IN_RANGE) {
                 creep.say('repairing');
         creep.moveTo(reptargets[0]);
        }
        }
    }
};

module.exports = roleBuilder;