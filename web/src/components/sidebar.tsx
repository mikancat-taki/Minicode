import React from 'react';
export default function Sidebar({files,onOpen}:{files:{name:string}[], onOpen:(i:number)=>void}){
  return (
    <div style={{width:220,background:'#252526',color:'#fff',padding:8,boxSizing:'border-box'}}>
      <h3>エクスプローラー</h3>
      <ul style={{listStyle:'none',padding:0}}>
        {files.map((f,i)=>(
          <li key={f.name} style={{padding:'6px 4px',cursor:'pointer'}} onClick={()=>onOpen(i)}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
