import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EditorPane from './components/Editor';
import Tabs from './components/Tabs';
import Terminal from './components/Terminal';
import Settings from './components/Settings';
export default function App() {
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  const [files, setFiles] = useState([{name:'hello.ts', content:'console.log("hello")'}]);
  const [active, setActive] = useState(0);
  return (
    <div className={theme==='dark'?'theme-dark':'theme-light'} style={{height:'100vh',display:'flex'}}>
      <Sidebar files={files} onOpen={(i)=>setActive(i)} />
      <div style={{flex:1,display:'flex',flexDirection:'column'}}>
        <Tabs files={files} active={active} onSelect={setActive} />
        <EditorPane file={files[active]} onChange={(content)=>{
          const copy = [...files]; copy[active].content = content; setFiles(copy);
        }} />
        <Terminal />
      </div>
      <Settings theme={theme} setTheme={setTheme} />
    </div>
  );
}
