(function(){
let tg=null;try{tg=window.Telegram&&window.Telegram.WebApp;if(tg){tg.ready();tg.expand()}}catch(e){}
const c=document.getElementById('c'),x=c.getContext('2d');
function r(){c.width=Math.min(window.innerWidth||360,500);c.height=window.innerHeight||640}
window.addEventListener('resize',r);r();
let best=0;try{best=Number(localStorage.getItem('f2b'))||0}catch(e){}
let st='START',sc=0,fr=0,lvl=1,lvlMsg='',lvlTmr=0,spDist=0;
const f={x:c.width*0.42,y:c.height*0.45,v:0,g:0.38,j:-6.6,rot:0};
const p={x:72,y:c.height*0.45,m:0,bite:false};
let sn=[],bb=[],stns=[];
for(let i=0;i<24;i++)bb.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*4+1.5,s:Math.random()+0.5});
for(let i=0;i<14;i++)stns.push({x:i*45,w:14+Math.random()*16,h:7+Math.random()*8,c:i%2?'#64748b':'#475569'});
function rst(){f.x=c.width*0.42;f.y=c.height*0.45;f.v=0;p.x=72;p.y=f.y;p.m=0;p.bite=false;sn=[];sc=0;fr=0;lvl=1;lvlTmr=0;spDist=220;st='PLAYING'}
function flp(){
if(st==='START'){rst();f.v=f.j}
else if(st==='PLAYING'){f.v=f.j;try{if(tg&&tg.HapticFeedback)tg.HapticFeedback.impactOccurred('light')}catch(e){}}
else if(st==='GAMEOVER'&&p.bite){rst()}
}
window.addEventListener('pointerdown',e=>{e.preventDefault();flp()});
window.addEventListener('touchstart',e=>{e.preventDefault();flp()},{passive:false});
window.addEventListener('keydown',e=>{if(e.code==='Space')flp()});
function over(){st='GAMEOVER';try{if(tg&&tg.HapticFeedback)tg.HapticFeedback.notificationOccurred('error')}catch(e){}}
function upd(){
if(st==='START'){f.y=c.height*0.42+Math.sin(fr*0.08)*10;p.y=f.y+Math.sin(fr*0.06)*14;p.m=0.25+Math.sin(fr*0.1)*0.15}
if(st==='PLAYING'){
f.v+=f.g;f.y+=f.v;
p.x=72+Math.sin(fr*0.05)*10;p.y+=(f.y-p.y)*0.08+Math.sin(fr*0.08)*0.6;p.m=0.3+Math.sin(fr*0.15)*0.2;
const sp=Math.min(4.6,2.8+sc*0.015);
const gap=Math.max(125,225-sc*0.95);
spDist+=sp;
if(spDist>=330){
spDist=0;
const mn=55,mx=Math.max(75,c.height-28-gap-65);
sn.push({x:c.width,w:50,t:Math.floor(Math.random()*(mx-mn+1))+mn,g:gap,ps:false});
}
for(let s of sn){
s.x-=sp;
if(!s.ps&&s.x+s.w<f.x){
s.ps=true;sc++;
if(sc===50&&lvl===1){lvl=2;lvlMsg='УРОВЕНЬ 2! ВЫПЛЫВАЕТ ЩУКА!';lvlTmr=130}
if(sc===100&&lvl===2){lvl=3;lvlMsg='УРОВЕНЬ 3! ОГРОМНЫЙ СОМ!';lvlTmr=130}
if(sc>best){best=sc;try{localStorage.setItem('f2b',best)}catch(e){}}
}
if(f.x+14>s.x&&f.x-14<s.x+s.w&&(f.y-10<s.t||f.y+10>s.t+s.g))over();
}
sn=sn.filter(s=>s.x+s.w>-35);
if(f.y+11>=c.height-28||f.y-11<=0)over();
}
if(st==='GAMEOVER'){
if(!p.bite){
const targetX=f.x-12;
if(Math.abs(targetX-p.x)>2){p.x+=(targetX-p.x)*0.22;p.y+=(f.y-p.y)*0.22;p.m=1}
else{p.x=targetX;p.y=f.y;p.m=0;p.bite=true}
}
}
if(lvlTmr>0)lvlTmr--;
fr++;
}
function dUI(){
x.textAlign='center';
if(st==='PLAYING'){
x.fillStyle='#fff';x.font='bold 42px sans-serif';x.fillText(sc,c.width/2,68);
x.fillStyle='rgba(255,255,255,0.75)';x.font='bold 13px sans-serif';
const sub=lvl===1?'УРОВЕНЬ 1: ОКУНЬ':(lvl===2?'УРОВЕНЬ 2: ЩУКА':'УРОВЕНЬ 3: ГИГАНТСКИЙ СОМ');
x.fillText(sub,c.width/2,90);
if(lvlTmr>0){
x.fillStyle='#facc15';x.font='bold 22px sans-serif';
x.fillText(lvlMsg,c.width/2,c.height*0.28);
}
}
if(st==='START'){
x.fillStyle='rgba(0,0,0,0.42)';x.fillRect(0,0,c.width,c.height);
x.fillStyle='#facc15';x.font='bold 34px sans-serif';x.fillText('РЫБКА 2',c.width/2,c.height*0.30);
x.fillStyle='#fff';x.font='16px sans-serif';x.fillText('Нажимай на экран, чтобы плыть',c.width/2,c.height*0.58);
x.fillText('0–50: Окунь | 50–100: Щука | 100+: Сом',c.width/2,c.height*0.64);
}
if(st==='GAMEOVER'&&p.bite){
x.fillStyle='rgba(0,0,0,0.55)';x.fillRect(0,0,c.width,c.height);
x.fillStyle='#ef4444';x.font='bold 32px sans-serif';
const endTxt=lvl===1?'ОКУНЬ ПОЙМАЛ!':(lvl===2?'ЩУКА СЪЕЛА!':'СОМ ПРОГЛОТИЛ!');
x.fillText(endTxt,c.width/2,c.height*0.34);
x.fillStyle='#fff';x.font='20px sans-serif';x.fillText('Счёт: '+sc,c.width/2,c.height*0.43);
x.fillText('Рекорд: '+best,c.width/2,c.height*0.49);
x.fillStyle='#facc15';x.font='bold 16px sans-serif';x.fillText('Нажми на экран, чтобы плыть снова',c.width/2,c.height*0.61);
}
}
function loop(){dBg(x,c,lvl,fr);dBb(x,c,bb);dEnv(x,c,lvl,fr,st,stns);dSn(x,c,sn);if(!p.bite)dFs(x,f,fr);dPr(x,p,lvl,fr);dUI();upd();requestAnimationFrame(loop)}
loop();
})();
