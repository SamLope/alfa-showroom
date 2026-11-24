/* ========== ILUSTRAÇÕES DE EXEMPLO ========== */
const VIEWS = ["Vista frontal","Detalhe","Lateral","No ambiente","Acesa"];
function art(kind, v){
  const c = v%2 ? "#ff7518" : "#ff2c2c";
  const glow = v===4 ? .85 : .3;
  const s = 'stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"';
  const shapes = {
    chandelier:`<line x1="200" y1="0" x2="200" y2="70" ${s}/><path d="M90 150Q200 230 310 150" ${s}/><path d="M130 130Q200 180 270 130" ${s}/>`+[90,145,200,255,310].map((x,i)=>`<circle cx="${x}" cy="${[150,172,185,172,150][i]-14}" r="11" fill="${c}" opacity=".95"/>`).join(""),
    ring:`<line x1="140" y1="0" x2="160" y2="95" ${s}/><line x1="260" y1="0" x2="240" y2="95" ${s}/><ellipse cx="200" cy="130" rx="110" ry="34" ${s}/><ellipse cx="200" cy="130" rx="110" ry="34" stroke="${c}" stroke-width="7" fill="none" opacity=".9"/>`,
    pendant:`<line x1="200" y1="0" x2="200" y2="90" ${s}/><path d="M140 205L160 90H240L260 205Z" fill="#1a1a1a" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="205" rx="60" ry="9" fill="${c}"/>`,
    wall:`<rect x="60" y="80" width="14" height="140" fill="#222" stroke="#fff" stroke-width="3"/><line x1="74" y1="150" x2="140" y2="150" ${s}/><path d="M140 110A40 40 0 0 1 140 190Z" fill="#1a1a1a" stroke="#fff" stroke-width="3"/><circle cx="172" cy="150" r="9" fill="${c}"/>`,
    floor:`<ellipse cx="200" cy="270" rx="55" ry="9" fill="#222" stroke="#fff" stroke-width="3"/><line x1="200" y1="265" x2="200" y2="95" ${s}/><path d="M150 100L170 40H230L250 100Z" fill="#1a1a1a" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="100" rx="50" ry="8" fill="${c}"/>`,
    table:`<ellipse cx="200" cy="265" rx="45" ry="8" fill="#222" stroke="#fff" stroke-width="3"/><path d="M175 262Q165 190 200 150Q235 190 225 262Z" fill="#1a1a1a" stroke="#fff" stroke-width="3"/><path d="M150 150L170 85H230L250 150Z" fill="#1a1a1a" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="150" rx="50" ry="8" fill="${c}"/>`
  };
  const gy = kind==="floor"||kind==="table" ? 130 : 150;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><radialGradient id="g" cx="50%" cy="${gy/3}%" r="55%"><stop offset="0" stop-color="${c}" stop-opacity="${glow}"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><rect width="400" height="300" fill="#0b0b0b"/><rect width="400" height="300" fill="url(#g)"/>${shapes[kind]}<text x="14" y="287" fill="#fff" fill-opacity=".6" font-family="Arial" font-size="13">${VIEWS[v]}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
PRODUCTS.forEach(p => { if(!p.images) p.images = VIEWS.map((_,i)=>art(p.kind,i)); });

/* ========== CATÁLOGO ========== */
const grid = document.getElementById("grid");
function render(filter){
  grid.innerHTML = "";
  PRODUCTS.filter(p => filter==="todos" || p.cat===filter).forEach(p=>{
    const b = document.createElement("button");
    b.className = "card";
    b.innerHTML = `<img src="${p.images[0]}" alt="${p.name}" loading="lazy"><div class="info"><span class="code">${p.code}</span><h3>${p.name}</h3><p>${p.desc}</p><span class="more">Ver fotos e detalhes →</span></div>`;
    b.addEventListener("click", ()=>openModal(p));
    grid.appendChild(b);
  });
}
document.querySelectorAll(".chip").forEach(ch=>ch.addEventListener("click",()=>{
  document.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed","false"));
  ch.setAttribute("aria-pressed","true");
  render(ch.dataset.f);
}));
render("todos");

/* ========== MODAL / GALERIA ========== */
const dlg = document.getElementById("dlg"), main = document.getElementById("main"), thumbs = document.getElementById("thumbs");
let cur = null, idx = 0;
function show(i){
  idx = (i + cur.images.length) % cur.images.length;
  main.src = cur.images[idx];
  main.alt = `${cur.name} - foto ${idx+1}`;
  [...thumbs.children].forEach((t,k)=>t.setAttribute("aria-current", k===idx));
}
function openModal(p){
  cur = p;
  document.getElementById("dCode").textContent = p.code;
  document.getElementById("dName").textContent = p.name;
  document.getElementById("dDesc").textContent = p.desc;
  document.getElementById("dSpecs").innerHTML = Object.entries(p.specs||{}).map(([k,v])=>`<li><span>${k}</span><strong>${v}</strong></li>`).join("");
  document.getElementById("dZap").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, Alfa Materiais Elétricos! Tenho interesse no produto ${p.name} (código ${p.code}).`)}`;
  thumbs.innerHTML = "";
  p.images.forEach((src,i)=>{
    const t = document.createElement("button");
    t.innerHTML = `<img src="${src}" alt="Miniatura ${i+1}">`;
    t.addEventListener("click",()=>show(i));
    thumbs.appendChild(t);
  });
  show(0);
  dlg.showModal();
}
document.getElementById("prev").onclick = ()=>show(idx-1);
document.getElementById("next").onclick = ()=>show(idx+1);
document.getElementById("close").onclick = ()=>dlg.close();
dlg.addEventListener("click",e=>{ if(e.target===dlg) dlg.close(); });
dlg.addEventListener("keydown",e=>{ if(e.key==="ArrowLeft") show(idx-1); if(e.key==="ArrowRight") show(idx+1); });

/* swipe no celular */
let x0 = null;
main.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
main.addEventListener("touchend",e=>{
  if(x0===null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if(Math.abs(dx)>40) show(idx + (dx<0?1:-1));
  x0 = null;
});

document.getElementById("zapGeral").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Alfa Materiais Elétricos! Gostaria de um orçamento.")}`;
