import React from 'react';
export default function Tabs({files,active,onSelect}:{files:{name:string}[],active:number,onSelect:(i:number)=>void}){
  return (
    <div style={{height:36,display:'flex',alignItems:'center',background:'#1e1e1e',color:'#fff'}}>
      {files.map((f,i)=>(
        <div key={f.name} onClick={()=>onSelect(i)} style={{padding:'8px 12px',cursor:'pointer',borderBottom: i===active ? '2px solid #0E639C' : 'none'}}>{f.name}</div>
      ))}
    </div>
  );
}
