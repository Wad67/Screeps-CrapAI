
var roleHarvester = {
    //Static harvester test
    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        if(creep.carry.energy == creep.carryCapacity){
            creep.say("Dumping")
            creep.drop(RESOURCE_ENERGY, creep.carry.energy)
        };
        /*
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
            if(targets.length > 0) {

                }
            }
            
              
             
    
        */
        
    }
};

module.exports = roleHarvester;