import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
export default function EditorPane({file,onChange}:{file:{name:string,content:string}, onChange:(c:string)=>void}){
  const ref = useRef<HTMLDivElement|null>(null);
  const editorRef = useRef<any>(null);
  useEffect(()=>{
    if(!ref.current) return;
    editorRef.current = monaco.editor.create(ref.current, {
      value: file.content,
      language: file.name.endsWith('.ts') ? 'typescript' : 'javascript',
      theme: 'vs-dark',
      automaticLayout: true
    });
    editorRef.current.onDidChangeModelContent(()=>{
      const v = editorRef.current.getValue();
      onChange(v);
    });
    return ()=> editorRef.current && editorRef.current.dispose();
  }, [ref]);
  useEffect(()=>{
    if(editorRef.current && file){
      const model = editorRef.current.getModel();
      if(model) model.setValue(file.content);
    }
  }, [file]);
  return <div ref={ref} style={{flex:1,background:'#1e1e1e'}} />;
}
