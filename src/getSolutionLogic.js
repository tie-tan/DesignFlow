import {json} from "./gsi";
import {useGlobalState,getGlobalState,setGlobalState} from './App.js';
import React from "react";
import { useStore} from 'reactflow';
import { zoomlevel } from "./App.js";

export let initialNodes = [];
let initialEdges = [];
let isvisited = {};
let displayName_Map = {};
let entity_map = new Map();
let attribute_map = new Map();
export const AddEntityNodes = (index,data,layer_position,node_position)=>{
    console.log(zoomlevel);
    // console.log(layer_position);
    console.log(layer_position);
    //console.log(data[0].item.DATA.displayName);
     //console.log(data[0].item);
    const entity_nodes = [];
    const display_Names =[];
    let global_nodes = getGlobalState('nodes');
    //console.log(global_nodes);
    //let a = 1;
    let cu_position = {};
    for(let i =0; i< global_nodes.length; i++){
        if(global_nodes[i].id == index){
           cu_position = global_nodes[i].position; 
        }
    }
     for(let i=0; i<data.length; i++){
      let entitynode = {id : `${data[i].item.DATA.displayName}`,
      position : {x:10, y: (layer_position.y-node_position.y+layer_position.height)/zoomlevel+i*40},
      data: {label:`${data[i].item.DATA.displayName}`},
      parentNode:`${index}`,
      extent:'parent',
    };
      entity_nodes.push(entitynode);
     }
     global_nodes= global_nodes.concat(entity_nodes);
     setGlobalState('nodes', global_nodes);
     const test_nodes = getGlobalState('nodes');
     console.log(global_nodes);
    return [data, layer_position];
}

export const getLogic = () => {
    const node_map = {};
    let starting_index = 0;
    const obj = json.result.solutionLogic;
    for(let i = 0;i<obj.length;i++){    
        if(i===0){
            starting_index = obj[i].index;
        }
        const triggerstates = obj[i].nextTriggerSet;
        const states = []
        for(let j = 0;j<triggerstates.length;j++){
            states.push(triggerstates[j].index);
        }
        displayName_Map[obj[i].index] = obj[i];
        node_map[obj[i].index] = states;
    }
    getNodes(node_map,starting_index, 0, 0);
    const getData = getAllNodes(obj);
    // console.log(initialNodes);
    // initialNodes =[...initialNodes,...getData];
    // console.log(initialNodes);
    // console.log(entity_map);
    // console.log(attribute_map);
    return [initialNodes,initialEdges];
}

function getNodes(node_map,starting_index,x,y){
    if(isvisited[starting_index] === true){
        return;
    }
    isvisited[starting_index] = true;
    initialNodes.push({
        id:`${starting_index}`,
        position:{x:x,y:y},
        type:'Node',
        data:displayName_Map[starting_index],
      });
    if(node_map[starting_index].length===0){
        return;
    }
    for(let i = 0;i<node_map[starting_index].length;i++){
        initialEdges.push({
            id:`e${starting_index}-${node_map[starting_index][i]}`,
            source:`${starting_index}`,
            target:`${node_map[starting_index][i]}`,
            style:{strokeWidth:3,stroke:'red'},
            animated:true
        })
        if(node_map[starting_index].length%2===0){
            getNodes(node_map,node_map[starting_index][i],x+450,y+(1-node_map[starting_index].length+i*2)*504);
        }
        else{
            getNodes(node_map,node_map[starting_index][i],x+450,y+(i-(node_map[starting_index].length-1)/2)*504);
        }        
    }
}

function getAllNodes (obj) {
    let initialNodes = [];
    for(let i = 0;i<obj.length;i++){
        for(let m = 0;m<obj[i].layers.length;m++){
            let entity_list = [];
            for(let j = 0;j<obj[i].layers[m].participatingItems.length;j++){
                let entity_data = obj[i].layers[m].participatingItems[j].item.DATA;
                entity_list.push(`${obj[i].name}-${obj[i].layers[m].type}-${entity_data.name}`);
                initialNodes.push({
                    id:`${obj[i].name}-${obj[i].layers[m].type}-${entity_data.name}`,
                    position:{x:0,y:0},
                    extent:'parent',
                    parentNode:`${obj[i].index}`
                })
                let attribute_list = [];
                for(let k = 0;k<entity_data.nslAttributes.length;k++){
                    attribute_list.push(`${obj[i].name}-${obj[i].layers[m].type}-${entity_data.name}-${entity_data.nslAttributes[k].name}`);
                    // initialNodes.push({
                    //     id:`${obj[i].name}-${obj[i].layers[m].type}-${entity_data.name}-${entity_data.nslAttributes[k].name}`,
                    //     position:{x:0,y:0}
                    // })
                }
                attribute_map[`${obj[i].name}-${obj[i].layers[m].type}-${entity_data.name}`] = attribute_list;
        }
        entity_map[`${obj[i].name}-${obj[i].layers[m].type}`] = entity_list;
    }
}
return initialNodes;
}
