var roleHarvester = require('role.staticharvester');
var roleOldHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleHauler = require('role.hauler');
var maintaincreep = require('base.maintaincreep');
var towers = require('stolen.tower');


module.exports.loop = function () {
        if(!Game.creeps["BaselineWorker1"]) {
            console.log("Backup worker died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], "Bworker1", {role : "Oldharvester"}) 
        };
        if(!Game.creeps["BaselineWorker2"]) {
            console.log("Backup worker died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], "Bworker2", {role : "Oldharvester"}) 
        };
        if(!Game.creeps["BaselineWorker3"]) {
            console.log("Backup worker died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], "Bworker3", {role : "Oldharvester"}) 
        };
        if(!Game.creeps["Worker1"]) {
            console.log("Worker 1 died, respawning")
            Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], "Worker1", {role : "harvester"}) 
        };
    maintaincreep.run();
    towers.run();
    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'Oldharvester') {
            roleOldHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'hauler') {
            roleHauler.run(creep);
        }
    }
}