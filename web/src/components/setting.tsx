import React from 'react';
export default function Settings({theme,setTheme}:{theme:string,setTheme:(t:'dark'|'light')=>void}){
  return (
    <div style={{width:300,background:'#f4f4f4',padding:12,boxSizing:'border-box'}}>
      <h4>設定</h4>
      <div>
        <label>テーマ</label>
        <select value={theme} onChange={(e)=>setTheme(e.target.value as any)}>
          <option value="dark">ダーク</option>
          <option value="light">ライト</option>
        </select>
      </div>
    </div>
  );
}
