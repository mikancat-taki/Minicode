import React from 'react';
export default function Terminal(){
  return (
    <div style={{height:120,background:'#1b1b1b',color:'#fff',padding:8,fontFamily:'monospace'}}>
      <div>Terminal (仮想)</div>
      <div style={{opacity:0.8}}>npm run build などをここで実行できます（実際の端末はElectronでのみ有効）</div>
    </div>
  );
}
