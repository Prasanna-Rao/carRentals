const fs=require('fs');
const path=require('path');
const ts=require('/usr/local/slides_js/node_modules/typescript');
const root=__dirname;
const vendor=path.join(root,'standalone/vendor');
const src=fs.readFileSync(path.join(root,'src/App.jsx'),'utf8');
let core=src.replace(/^import React from 'react';\s*/m,'').replace(/export default App;\s*$/,'').replace('function Modal(', 'function ModalInner(').replace('function App(){','function AppInner(){').replace('function TravelMap(){','function TravelMapInner(){');
core+='\nconst Modal=withHooks(ModalInner);\nconst TravelMap=withHooks(TravelMapInner);\nconst App=withHooks(AppInner);\n';
const transpile=(code)=>{
 const result=ts.transpileModule(code,{fileName:'App.jsx',compilerOptions:{jsx:ts.JsxEmit.React,target:ts.ScriptTarget.ES2019,module:ts.ModuleKind.None},reportDiagnostics:true});
 const diag=result.diagnostics||[];
 if(diag.length){for(const d of diag)console.error(ts.flattenDiagnosticMessageText(d.messageText,'\n'));process.exit(1);}
 return result.outputText+'\nReactDOM.render(React.createElement(App), document.getElementById("root"));\n';
};
const imagesDir=path.join(root,'public/images');
for(const f of fs.readdirSync(imagesDir)){
 if(!f.endsWith('.webp'))continue;
 const b64=fs.readFileSync(path.join(imagesDir,f)).toString('base64');
 core=core.split("ASSET+'"+f+"'").join(JSON.stringify('data:image/webp;base64,'+b64));
}
const js=transpile(core);
const css=fs.readFileSync(path.join(root,'src/styles.css'),'utf8');
const react=fs.readFileSync(path.join(vendor,'react.production.min.js'),'utf8');
const reactdom=fs.readFileSync(path.join(vendor,'react-dom.production.min.js'),'utf8');
const shim=fs.readFileSync(path.join(vendor,'react16-hooks-compat.js'),'utf8');
const license=fs.readFileSync(path.join(vendor,'REACT_LICENSE.txt'),'utf8');
const head='<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#3b241e"/><meta name="description" content="Adigyogi Car Rentals — Solapur, Tuljapur, Akkalkot, Pandharpur, Shirdi and Trimbakeshwar. Photo-rich local travel and car rentals."/><title>Adigyogi Car Rentals — Beautiful Journeys Across Maharashtra</title>';
const safe=s=>s.replace(/<\\?\/?script/gi,'<\\/script');
const html=`<!doctype html><html lang="en"><head>${head}<link rel="preconnect" href="https://fonts.googleapis.com"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet"/><style>${css}</style></head><body><div id="root"></div><!-- React and ReactDOM MIT; ${license.replaceAll('--','- -').slice(0,180)} --><script>${react}</script><script>${reactdom}</script><script>${shim}</script><script>${js.replaceAll('</script>','<\\/script>')}</script></body></html>`;
const outfile=path.join(root,'Adigyogi_Car_Rentals_V5_Interactive_Demo.html');
fs.writeFileSync(outfile,html);
console.log('Verified JSX compilation and wrote',outfile, fs.statSync(outfile).size,'bytes.');
