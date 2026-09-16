import {spawn} from 'node:child_process';
const processes=[spawn(process.execPath,['server/index.mjs'],{stdio:'inherit'}),spawn(process.execPath,['node_modules/vite/bin/vite.js','--host','127.0.0.1'],{stdio:'inherit'})];
let stopping=false;function stop(code=0){if(stopping)return;stopping=true;for(const p of processes)p.kill('SIGTERM');setTimeout(()=>process.exit(code),100)}
processes.forEach(p=>{p.on('error',e=>{console.error(e.message);stop(1)});p.on('exit',code=>{if(!stopping)stop(code||0)})});process.on('SIGINT',()=>stop());process.on('SIGTERM',()=>stop());
