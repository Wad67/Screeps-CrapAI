/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('base.maintaincreep');
 * mod.thing == 'a thing'; // true
 */
var maintaincreeps = {
    run: function() {

        if(!Game.creeps["Worker2"]) {
            console.log("Worker 2 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Worker2", {role : "harvester"}) 
        };
        if(!Game.creeps["Upgrader1"]) {
            console.log("Upgrader 1 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Upgrader1", {role : "upgrader"}) 
        };
        if(!Game.creeps["Upgrader2"]) {
            console.log("Upgrader 2 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Upgrader2", {role : "upgrader"}) 
        };
        if(!Game.creeps["Builder1"]) {
            console.log("Builder 1 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Builder1", {role : "builder"}) 
        };
        if(!Game.creeps["Builder2"]) {
            console.log("Builder 2 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Builder2", {role : "builder"}) 
        };
        if(!Game.creeps["Builder3"]) {
            console.log("Builder 3 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Builder3", {role : "builder"}) 
        };

        if(!Game.creeps["Hauler2"]) {
            console.log("Hauler 2 died, respawning")
            Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], "Hauler2", {role : "hauler"}) 
        };
        if(!Game.creeps["Upgrader3"]) {
            console.log("Upgrader 3 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Upgrader3", {role : "upgrader"}) 
        };
        if(!Game.creeps["Upgrader4"]) {
            console.log("Upgrader 4 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Upgrader4", {role : "upgrader"}) 
        };
        if(!Game.creeps["Hauler1"]) {
            console.log("Hauler 1 died, respawning")
            Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], "Hauler1", {role : "hauler"}) 
        };

}
    
};
module.exports = maintaincreeps;