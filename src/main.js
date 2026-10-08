import "./style.css";
import {CFG,MSG} from "./config.js";
import {CATS,FL,LEVELS} from "./data.js";
import {flagSvg} from "./flags.js";
import {playSound,toggleSound,updateSoundBtn} from "./audio.js";

/* ====== LOGIC TRÒ CHƠI ====== */
const $=id=>document.getElementById(id);
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let G=null,timer=null;

function bestGet(){try{return JSON.parse(localStorage.getItem("dlv_best")||"{}")}catch(e){return{}}}
function bestSet(id,s){try{const b=bestGet();if(s>(b[id]||0)){b[id]=s;localStorage.setItem("dlv_best",JSON.stringify(b))}}catch(e){}}
function getBestCatScore(catId){
  const b=bestGet();
  const s1=b[`${catId}_easy`]||0, s2=b[`${catId}_medium`]||0, s3=b[`${catId}_hard`]||0, s0=b[catId]||0;
  return Math.max(s0,s1,s2,s3);
}

function pool(c, levelId="easy"){
  if(c.flags){
    const list = (c.levels && c.levels[levelId]) || c.levels.easy || FL;
    return list.map(f=>{
      const otherCountries = FL.filter(x=>x[1]!==f[1]);
      return {
        q: "Đây là quốc kỳ của nước nào?",
        svg: flagSvg(f[0]),
        a: f[1],
        o: [f[1], ...shuf(otherCountries).slice(0,3).map(x=>x[1])],
        fact: f[2]
      };
    });
  }
  const rawQs = (c.levels && c.levels[levelId]) || c.qs || [];
  return rawQs.map(r=>({q:r[0],a:r[1],o:r.slice(1,5),fact:r[5]}));
}

function home(){
  clearInterval(timer);G=null;
  if($("backBtn")) $("backBtn").style.display="none";
  $("app").innerHTML=`<section class="hero"><h1>Bạn giỏi <span style="color:var(--gold)">địa lý</span> cỡ nào? 🌍</h1>
  <p>Chọn một màn chơi, chọn mức độ thử thách (Dễ, Trung bình, Khó) và khám phá điều thú vị!</p>
  <div class="stats"><span class="pill">⏱️ 15 giây / câu</span><span class="pill">❤️ 3 mạng</span><span class="pill">🔥 Chuỗi thắng cộng điểm</span></div></section>
  <div class="grid">${CATS.map(c=>{
    const maxScore = getBestCatScore(c.id);
    return `<button class="cat" style="--c:${c.c}" onclick="openLevelModal('${c.id}')">
      ${maxScore?`<span class="best">🏆 ${maxScore}</span>`:""}
      <span class="em">${c.em}</span><b>${c.name}</b><small>${c.desc}</small>
    </button>`;
  }).join("")}</div>
  <div class="panel">${donateHTML()}</div>`;
  updateSoundBtn();
}

function openLevelModal(catId){
  const c = CATS.find(x => x.id === catId);
  if(!c) return;
  const b = bestGet();
  const html = `
    <h2 style="margin:0 0 6px">${c.em} ${c.name}</h2>
    <p style="color:var(--mut);margin:0 0 16px">${c.desc}</p>
    <div class="level-list">
      ${LEVELS.map(lvl => {
        const key = `${c.id}_${lvl.id}`;
        const score = b[key] || 0;
        return `
          <button class="level-card" style="--lc:${lvl.c}" onclick="closeModal(); start('${c.id}', '${lvl.id}')">
            <div class="level-info">
              <b><span>${lvl.em}</span> Mức độ ${lvl.name}</b>
              <small>${lvl.desc}</small>
            </div>
            <div class="level-badge">${score ? `🏆 ${score} điểm` : "Thử sức ➜"}</div>
          </button>
        `;
      }).join("")}
    </div>
    <div class="row" style="margin-top:16px"><button class="btn sec sm" onclick="closeModal()">⬅️ Quay lại</button></div>
  `;
  $("dbox").innerHTML = html;
  $("dm").classList.add("on");
}

function start(id, levelId="easy"){
  const c=CATS.find(x=>x.id==id);
  const lvlInfo = LEVELS.find(l=>l.id===levelId) || LEVELS[0];
  G={c,levelId,lvlInfo,qs:shuf(pool(c,levelId)).slice(0,10).map(q=>({...q,o:shuf(q.o)})),i:0,score:0,lives:3,streak:0,right:0,t:15,lock:false};
  show();
}

function show(){
  const q=G.qs[G.i];G.t=15;G.lock=false;
  if($("backBtn")) $("backBtn").style.display="inline-flex";
  $("app").innerHTML=`<div class="panel">
  <div class="top">
    <button class="btn sm sec" onclick="home()" style="font-size:14px;padding:4px 10px;margin-right:6px">⬅️ Quay lại</button>
    <span>${G.c.em} ${G.i+1}/${G.qs.length} · ${G.lvlInfo.em} ${G.lvlInfo.name}</span>
    <span>${"❤️".repeat(G.lives)||"💔"}</span>
    <span>⭐ ${G.score}</span>
  </div>
  <div class="bar"><i id="tb"></i></div>
  <div class="q">${q.q}</div>${q.svg||""}
  <div class="opts">${q.o.map((o,k)=>`<button class="opt" onclick="pick(${k})">${o}</button>`).join("")}</div>
  <div id="fb"></div></div>`;
  clearInterval(timer);
  timer=setInterval(()=>{G.t-=.1;const b=$("tb");if(b){b.style.width=Math.max(0,G.t/15*100)+"%";if(G.t<5)b.style.background="var(--bad)"}if(G.t<=0)pick(-1)},100);
}

function pick(k){
  if(G.lock)return;G.lock=true;clearInterval(timer);
  const q=G.qs[G.i],ok=k>=0&&q.o[k]==q.a;let gain=0;
  document.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(q.o[j]==q.a)b.classList.add("ok");else if(j==k)b.classList.add("no")});
  if(ok){
    playSound("correct");
    G.streak++;G.right++;gain=100+Math.ceil(G.t)*5+(G.streak-1)*20;G.score+=gain;
  }else{
    playSound(k<0?"timeout":"wrong");
    G.streak=0;G.lives--;
  }
  const last=G.i==G.qs.length-1||G.lives<=0;
  $("fb").innerHTML=`<div class="fact"><b>${ok?`🎉 Chính xác! +${gain} điểm${G.streak>1?` · 🔥 chuỗi ${G.streak}`:""}`:k<0?"⏰ Hết giờ!":"😅 Chưa đúng rồi!"}</b><br>💡 ${q.fact}</div>
  <div class="row"><button class="btn" onclick="${last?"end()":"next()"}">${last?"Xem kết quả 🏁":"Câu tiếp theo ➜"}</button></div>`;
}

function next(){G.i++;show()}
function closeModal(){$("dm").classList.remove("on")}

function end(){
  const p=G.right/G.qs.length,rk=p>=.9?["👑","Nhà địa lý huyền thoại"]:p>=.7?["🧭","Nhà thám hiểm giỏi"]:p>=.4?["🎒","Du khách ham học"]:["🐣","Tân binh địa lý"];
  bestSet(`${G.c.id}_${G.levelId}`, G.score);
  bestSet(G.c.id, G.score);
  playSound(p>=.4?"win":"wrong");
  if($("backBtn")) $("backBtn").style.display="inline-flex";
  $("app").innerHTML=`<div class="panel center"><p class="big">${rk[0]}</p><h2 style="margin:4px 0">${rk[1]}</h2>
  <div class="score">${G.score} điểm</div>
  <p style="color:var(--mut);font-size:18px">Đúng ${G.right}/${G.qs.length} câu · ${G.c.name} (${G.lvlInfo.em} Mức ${G.lvlInfo.name})${G.lives<=0?" · Hết tim rồi, thử lại nhé!":""}</p>
  <div class="row">
    <button class="btn" onclick="start('${G.c.id}', '${G.levelId}')">🔁 Chơi lại cấp độ này</button>
    <button class="btn sec" onclick="openLevelModal('${G.c.id}')">🎯 Đổi cấp độ</button>
    <button class="btn sec" onclick="home()">⬅️ Quay lại trang chủ</button>
  </div></div>
  <div class="panel">${donateHTML()}</div>`;
}

/* ====== ỦNG HỘ ====== */
function donateHTML(){
  return`<div class="donate"><div class="qr">${CFG.qr?`<img src="${CFG.qr}" alt="QR ủng hộ">`:"Dán ảnh QR của bạn vào CFG.qr"}</div>
  <div><h3 style="margin:0 0 6px">❤️ Ủng hộ Học Cùng Bigo</h3><p style="margin:0 0 6px;color:var(--mut)">${MSG}</p>
  <div class="bank">🏦 ${CFG.bank}<br>💳 <b>${CFG.acc}</b><br>👤 ${CFG.name}</div>
  <button class="btn sm" onclick="navigator.clipboard&&navigator.clipboard.writeText('${CFG.acc}').then(()=>{this.textContent='✅ Đã sao chép'})">📋 Sao chép số tài khoản</button></div></div>`;
}
function openDonate(){$("dbox").innerHTML=donateHTML()+'<div class="row"><button class="btn sec sm" onclick="closeModal()">Đóng</button></div>';$("dm").classList.add("on")}

/* các hàm được gọi từ onclick trong HTML */
Object.assign(window,{home,start,openLevelModal,pick,next,end,openDonate,closeModal,toggleSound});
home();


