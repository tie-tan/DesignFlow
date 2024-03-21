import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faPerson } from '@fortawesome/free-solid-svg-icons';
import React from 'react';  
import { Handle,Position,NodeProps,useStore} from 'reactflow';
import { useState, useRef } from 'react';
import Collapsible from 'react-collapsible';
import { AddEntityNodes } from './getSolutionLogic';
 
export function Node({id,data,position}) {
  // const [layer_position,setLayerPosition] = useState();
  let layer_position;
  const wrapperRef = useRef(null);
 // const collapsibleRef = useRef(null);
  const [collapsiblePosition, setCollapsiblePosition] = useState({});
  const [displayName, setInputValue] = useState(`${data.displayName}`);

  const handleClickCollapsible = (layer) => {
    if (wrapperRef.current) {
      layer_position = wrapperRef.current.getBoundingClientRect();
      //AddEntityNodes(data,layer_position);
      const layer_data = getInfoByType(data.layers, layer);
      //console.log(layer_data);
      const entityDataList = AddEntityNodes(layer_data, layer_position);
      console.log(entityDataList);
      
      //console.log(layer);

    }
  };

  function getInfoByType(layers, type) {
    // Filter the layers array based on the given type
    const filteredLayer = layers.find(layer => layer.type === type);

    // Return the participating items of the filtered layer if found, otherwise return an empty array
    return filteredLayer ? filteredLayer.participatingItems : [];
}

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  function getEntityData(){
    let layerInformation = {'physical':[],'information':[],'triggerCES':[]};
    for (let i = 0;i<data.layers.length;i++){
      if(data.layers[i].type == "physical")
      layerInformation['physical'] = data.layers[i].participatingItems;
      if(data.layers[i].type == "information")
      layerInformation['information'] = data.layers[i].participatingItems;
      if(data.layers[i].type == "triggerCES")
      layerInformation['triggerCES'] = data.layers[i].participatingItems;
    }
    return layerInformation;
  }

  const zoomSelector = (s) => s.transform[2]<=0.45;
  const showContent = useStore(zoomSelector);
  const icon = (data.agents[0].agentType=='machine')?faCog:faPerson;
  const iconColor = (data.agents[0].agentType=='machine')?'#FF6C37':'blue';

  // function StopPropagation(event) {
  //   event.stopPropagation();
  // }

  return (
    <div>
      < Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      {showContent
      ?<div style={{height:80,width:350,fontSize:26,border:'0.5px solid #000000',display:'flex',flexDirection:'row'}}>
        <div style={{color:iconColor,width:20,fontSize:40,marginLeft:8,marginTop:13,marginRight:8}}><FontAwesomeIcon  icon={icon} /></div>
        <div style = {{width:320,textAlign:'center',alignItems:'center',display:'flex',justifyContent:'center'}}>{data.displayName}</ div>
      </div> 
      :<div style={{height:304,width:254,border:'1px solid black', borderRadius:4,display:'flex',flexDirection:'column'}}>
      <div style={{height:40,backgroundColor:'#f5f5f5',paddingLeft:16,borderBottom:'1px solid #D0D0D0',display:'flex',flexDirection:'row'}}>
        <div style={{height:10,width:10,transform:'rotate(45deg)',backgroundColor:'#808080',marginRight:10,marginTop:14}}></div>
        <div style={{fontFamily:'Inter',fontSize:12,marginTop:12}}>{data.name}</div>
        <div style={{marginTop:8,marginLeft:'auto',marginright:10}}><div style={{color:'#808080',width:20}}><FontAwesomeIcon  icon={faEllipsisV} /></div></div>
      </div>
      <div style={{backgroundColor:'white',height:56}}>
        <div style={{margin:16,backgroundColor:'white'}}>
          <div style={{fontSize:11,color:'#808080'}}>Display Name</div>
          <div ><input style={{borderColor:'#d8dce0',borderWidth:0.5,borderRadius:2}} type='text' value={displayName} onChange={handleChange} placeholder='Enter Name' /></div>
        </div>
      </div>
      <div style={{backgroundColor:'white',height:56}}>
        <div style={{margin:16,backgroundColor:'white'}}>
          <div style={{fontSize:11,color:'#808080'}}>Agents</div>
          <div style={{fontSize:12,color:'#333333'}}>{data.agents[0].agentType}</div>
        </div>
      </div>
      <div>
          {data.layers.map((item) => (
            <div ref = {wrapperRef} style={{
              backgroundColor: '#f9f9f9',
              color: '#333',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '10px',
              padding: '10px',
              cursor: 'pointer',
              alignItems: 'center',
            }} >
              <Collapsible trigger={item.type} onOpening={() => handleClickCollapsible(item.type)} >
                {item.participatingItems.map((x) => (
                  <div style={{
                    backgroundColor: '#dcd8dc',
                    color: '#333',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '10px',
                    padding: '10px',
                    cursor: 'pointer',
                    alignItems: 'center',
                  }}>
                    <Collapsible trigger={x.id}  >
                      {x.item.DATA.nslAttributes.map((y) => (
                        <p style={{
                          backgroundColor: '#f9f9f8',
                          color: '#333',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          marginBottom: '10px',
                          padding: '10px',
                          cursor: 'pointer',
                          alignItems: 'center',
                        }}>{y.dsdId}</p>
                      ))}
                    </Collapsible>
                  </div>
                ))}
              </Collapsible>
            </div>
          ))}
        </div>
    </div>}
    </div>
  )
};