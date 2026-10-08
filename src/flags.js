export function flagSvg(s){
  let r="";
  if(s=="vn"){let p="";for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,d=i%2?2.4:6;p+=(15+d*Math.cos(a)).toFixed(2)+","+(10+d*Math.sin(a)).toFixed(2)+" "}
    r='<rect width="30" height="20" fill="#da251d"/><polygon points="'+p+'" fill="#ff0"/>'}
  else if(s=="jp")r='<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#bc002d"/>';
  else{const[d,cs]=s.split("|"),L=cs.split(",").map(x=>{const[c,w]=x.split("*");return[c,+w||1]}),T=L.reduce((a,b)=>a+b[1],0);let o=0;
    L.forEach(([c,w])=>{const z=w/T;r+=d=="h"?`<rect y="${o*20}" width="30" height="${z*20+.05}" fill="${c}"/>`:`<rect x="${o*30}" width="${z*30+.05}" height="20" fill="${c}"/>`;o+=z})}
  return`<svg class="flag" viewBox="0 0 30 20" role="img" aria-label="Quốc kỳ">${r}</svg>`;
}

