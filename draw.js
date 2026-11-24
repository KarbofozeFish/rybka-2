function dBg(x,c,lvl,fr){
const g=x.createLinearGradient(0,0,0,c.height);
if(lvl===1){g.addColorStop(0,'#38bdf8');g.addColorStop(0.65,'#0284c7');g.addColorStop(1,'#0369a1')}
else if(lvl===2){g.addColorStop(0,'#1e3a5f');g.addColorStop(0.65,'#0f2942');g.addColorStop(1,'#071726')}
else{g.addColorStop(0,'#0f172a');g.addColorStop(0.65,'#090d16');g.addColorStop(1,'#020617')}
x.fillStyle=g;x.fillRect(0,0,c.width,c.height);
x.fillStyle=lvl===1?'rgba(255,255,255,0.08)':(lvl===2?'rgba(255,255,255,0.03)':'rgba(148,163,184,0.02)');
for(let i=0;i<4;i++){
const rx=(i*140+(fr*0.3))%(c.width+100)-50;
x.beginPath();x.moveTo(rx,0);x.lineTo(rx+55,0);x.lineTo(rx+120,c.height);x.lineTo(rx+25,c.height);x.fill();
}
}
function dBb(x,c,bb){
x.fillStyle='rgba(255,255,255,0.22)';
for(let b of bb){x.beginPath();x.arc(b.x,b.y,b.r,0,Math.PI*2);x.fill();b.y-=b.s;if(b.y<-10){b.y=c.height-25;b.x=Math.random()*c.width}}
}
function dEnv(x,c,lvl,fr,st,stns){
const sandY=c.height-28;
x.fillStyle=lvl===1?'#eab308':(lvl===2?'#854d0e':'#451a03');x.fillRect(0,sandY,c.width,28);
x.fillStyle=lvl===1?'#ca8a04':(lvl===2?'#713f12':'#290f02');
x.beginPath();x.moveTo(0,sandY);
for(let i=0;i<=c.width;i+=25)x.lineTo(i,sandY+Math.sin((i+fr*2)*0.05)*3);
x.lineTo(c.width,c.height);x.lineTo(0,c.height);x.fill();
for(let s of stns){
if(st==='PLAYING')s.x-=lvl===1?3.1:3.9;
if(s.x<-30)s.x=c.width+20;
x.fillStyle=s.c;x.beginPath();x.ellipse(s.x,sandY+10,s.w/2,s.h/2,0,0,Math.PI*2);x.fill();
}
for(let i=0;i<7;i++){
const wx=((i*85-(st==='PLAYING'?fr*(lvl===1?1.5:2):0))%(c.width+80)+c.width+80)%(c.width+80)-40;
x.strokeStyle=lvl===1?'#16a34a':(lvl===2?'#14532d':'#052e16');x.lineWidth=5;x.lineCap='round';
x.beginPath();x.moveTo(wx,sandY+4);
const sw=Math.sin(fr*0.07+i)*12;
x.quadraticCurveTo(wx+sw,sandY-28,wx-sw*0.6,sandY-55-(i%3)*12);
x.stroke();
}
}
function dFs(x,f,fr){
x.save();x.translate(f.x,f.y);
f.rot=Math.min(Math.PI/4,Math.max(-Math.PI/4,f.v*0.06));x.rotate(f.rot);
const tw=Math.sin(fr*0.35)*4;
x.fillStyle='#ff6b35';
x.beginPath();x.moveTo(-14,0);x.quadraticCurveTo(-24,-11+tw,-27,-7+tw);x.quadraticCurveTo(-22,0,-27,7+tw);x.quadraticCurveTo(-24,11+tw,-14,0);x.fill();
x.beginPath();x.moveTo(-4,-10);x.quadraticCurveTo(2,-17,6,-9);x.fill();
x.beginPath();x.moveTo(-2,10);x.quadraticCurveTo(2,15,5,9);x.fill();
const g=x.createLinearGradient(0,-12,0,12);g.addColorStop(0,'#ff9f1c');g.addColorStop(0.65,'#ffbf69');g.addColorStop(1,'#fff3b0');
x.fillStyle=g;x.beginPath();x.ellipse(0,0,17,12,0,0,Math.PI*2);x.fill();
x.strokeStyle='rgba(255,255,255,0.45)';x.lineWidth=1.2;
x.beginPath();x.arc(-3,-1,5,-0.8,0.8);x.stroke();x.beginPath();x.arc(2,1,5,-0.8,0.8);x.stroke();
x.fillStyle='#ff758f';x.beginPath();x.ellipse(-2,4,2.5,1.5,0,0,Math.PI*2);x.fill();
x.fillStyle='#fff';x.beginPath();x.arc(8,-3,5.5,0,Math.PI*2);x.fill();
x.strokeStyle='#d97706';x.lineWidth=1;x.stroke();
x.fillStyle='#1e293b';x.beginPath();x.arc(9.5,-3,3,0,Math.PI*2);x.fill();
x.fillStyle='#fff';x.beginPath();x.arc(10.5,-4.3,1.2,0,Math.PI*2);x.fill();
x.fillStyle='#e63946';x.beginPath();x.arc(16,2,2.2,0,Math.PI*2);x.fill();
x.restore();
}
function dPr(x,p,lvl,fr){
x.save();x.translate(p.x,p.y);
const ja=p.bite?0:p.m*0.42,tw=Math.sin(fr*0.26)*6;
if(lvl===3){dCat(x,p,ja,tw,fr);x.restore();return}
if(lvl===1){
const tg=x.createLinearGradient(-102,0,-130,0);tg.addColorStop(0,'#5c6b32');tg.addColorStop(1,'#dc2626');
x.fillStyle=tg;x.beginPath();x.moveTo(-98,-4);x.quadraticCurveTo(-116,-20+tw,-130,-18+tw);x.quadraticCurveTo(-120,0,-130,18+tw);x.quadraticCurveTo(-116,20+tw,-98,4);x.fill();
x.fillStyle='#dc2626';
x.beginPath();x.moveTo(-76,13);x.lineTo(-92,29);x.lineTo(-98,11);x.fill();
x.beginPath();x.moveTo(-36,21);x.lineTo(-50,35);x.lineTo(-58,20);x.fill();
const dg=x.createLinearGradient(0,-38,0,-14);dg.addColorStop(0,'#718338');dg.addColorStop(1,'#3f4d1c');
x.fillStyle=dg;x.strokeStyle='#232b0f';x.lineWidth=1.2;
x.beginPath();x.moveTo(-64,-18);x.lineTo(-58,-36);x.lineTo(-48,-24);x.lineTo(-40,-38);x.lineTo(-31,-24);x.lineTo(-22,-36);x.lineTo(-14,-19);x.closePath();x.fill();x.stroke();
x.fillStyle='#111';x.beginPath();x.arc(-57,-30,3.2,0,Math.PI*2);x.fill();
x.fillStyle='rgba(113,131,56,0.85)';x.beginPath();x.moveTo(-92,-10);x.lineTo(-84,-24);x.lineTo(-68,-16);x.closePath();x.fill();
const bg=x.createLinearGradient(0,-28,0,28);
bg.addColorStop(0,'#1e2e14');bg.addColorStop(0.32,'#4d6b2c');bg.addColorStop(0.68,'#a3b148');bg.addColorStop(1,'#f8fafc');
x.fillStyle=bg;
x.beginPath();x.moveTo(-102,-5);x.bezierCurveTo(-78,-26,-42,-36,2,-13);x.lineTo(14,-8);x.lineTo(4,0);x.lineTo(14,10);x.bezierCurveTo(-36,34,-76,22,-102,5);x.closePath();x.fill();
x.fillStyle='rgba(15,28,10,0.68)';
const str=[[-84,-13,4.5,22],[-68,-18,5.5,28],[-52,-21,6,32],[-36,-20,5.5,31],[-21,-17,4.5,25]];
for(let s of str){x.beginPath();x.moveTo(s,s);x.lineTo(s+s,s);x.lineTo(s+s/2,s+s);x.closePath();x.fill()}
x.strokeStyle='rgba(255,255,255,0.16)';x.lineWidth=1;
for(let gx=-75;gx<=-18;gx+=10){for(let gy=-10;gy<=10;gy+=8){x.beginPath();x.arc(gx,gy,4.5,-0.7,0.7);x.stroke()}}
x.fillStyle='#3b5222';x.strokeStyle='#1b2610';x.lineWidth=1.8;
x.beginPath();x.moveTo(-16,-12);x.quadraticCurveTo(0,0,-16,13);x.quadraticCurveTo(-22,0,-16,-12);x.fill();x.stroke();
x.fillStyle='#ef4444';x.beginPath();x.moveTo(-16,7);x.lineTo(-30,17);x.lineTo(-26,22);x.lineTo(-14,12);x.fill();
x.save();x.rotate(-ja);
x.fillStyle='#2c3e19';x.beginPath();x.moveTo(-4,-12);x.quadraticCurveTo(16,-10,28,-4);x.lineTo(25,2);x.lineTo(-4,0);x.closePath();x.fill();
x.restore();
x.save();x.rotate(ja);
x.fillStyle='#cbd5e1';x.beginPath();x.moveTo(-4,1);x.lineTo(26,3);x.quadraticCurveTo(22,11,-4,13);x.closePath();x.fill();
x.restore();
x.fillStyle='#f97316';x.beginPath();x.arc(4,-6,5.2,0,Math.PI*2);x.fill();
x.strokeStyle='#1a240e';x.lineWidth=1;x.stroke();
x.fillStyle='#090d06';x.beginPath();x.arc(5.5,-6,2.5,0,Math.PI*2);x.fill();
x.fillStyle='#fff';x.beginPath();x.arc(6.4,-7.2,1.1,0,Math.PI*2);x.fill();
}else{
x.fillStyle='#3d5a35';x.beginPath();x.moveTo(-115,0);x.lineTo(-142,-17+tw);x.lineTo(-132,0);x.lineTo(-142,17+tw);x.closePath();x.fill();
x.strokeStyle='#24381f';x.lineWidth=1.5;x.stroke();
x.fillStyle='#4a6b3f';x.beginPath();x.moveTo(-88,-13);x.lineTo(-104,-23+tw*0.4);x.lineTo(-108,-11);x.closePath();x.fill();
x.beginPath();x.moveTo(-85,13);x.lineTo(-100,22+tw*0.4);x.lineTo(-104,11);x.closePath();x.fill();
x.beginPath();x.moveTo(-45,17);x.lineTo(-58,27);x.lineTo(-65,16);x.closePath();x.fill();
const bg=x.createLinearGradient(0,-24,0,24);bg.addColorStop(0,'#243d20');bg.addColorStop(0.55,'#486e3e');bg.addColorStop(1,'#c9d6b8');
x.fillStyle=bg;x.beginPath();x.moveTo(-118,-7);x.quadraticCurveTo(-75,-24,-10,-16);x.lineTo(14,-10);x.lineTo(4,0);x.lineTo(14,12);x.quadraticCurveTo(-50,26,-118,7);x.closePath();x.fill();
x.fillStyle='#8aa878';
for(let i=-95;i<=-20;i+=15){x.beginPath();x.ellipse(i,i%2===0?-4:4,6,2.8,0.2,0,Math.PI*2);x.fill()}
x.strokeStyle='#1e331b';x.lineWidth=2;x.beginPath();x.arc(-12,0,13,-0.9,0.9);x.stroke();
x.save();x.rotate(-ja);x.fillStyle='#2f4d29';x.beginPath();x.moveTo(-4,-13);x.lineTo(38,-6);x.lineTo(35,1);x.lineTo(-4,0);x.closePath();x.fill();
if(!p.bite){x.fillStyle='#fff';for(let t=6;t<=32;t+=6.5){x.beginPath();x.moveTo(t,0);x.lineTo(t+2,5.5);x.lineTo(t+4,0);x.fill()}}
x.restore();
x.save();x.rotate(ja);x.fillStyle='#b5c7a3';x.beginPath();x.moveTo(-4,1);x.lineTo(36,4);x.lineTo(33,11);x.lineTo(-4,13);x.closePath();x.fill();
if(!p.bite){x.fillStyle='#fff';for(let t=8;t<=30;t+=7){x.beginPath();x.moveTo(t,3);x.lineTo(t+1.5,-1.5);x.lineTo(t+3,3);x.fill()}}
x.restore();
x.fillStyle='#f59e0b';x.beginPath();x.arc(6,-8,4.8,0,Math.PI*2);x.fill();
x.fillStyle='#000';x.beginPath();x.arc(7.5,-8,2.2,0,Math.PI*2);x.fill();
x.fillStyle='#fff';x.beginPath();x.arc(8.2,-9.2,1,0,Math.PI*2);x.fill();
}
x.restore();
}
function dSn(x,c,sn){
for(let s of sn){
const wg=x.createLinearGradient(s.x,0,s.x+s.w,0);
wg.addColorStop(0,'#3b2313');wg.addColorStop(0.45,'#6f4528');wg.addColorStop(1,'#2b180c');
x.fillStyle=wg;x.strokeStyle='#241309';x.lineWidth=2.5;
x.beginPath();x.moveTo(s.x-4,0);x.lineTo(s.x+s.w+4,0);x.lineTo(s.x+s.w,s.t-12);x.lineTo(s.x+s.w-8,s.t);x.lineTo(s.x+8,s.t);x.lineTo(s.x,s.t-12);x.closePath();x.fill();x.stroke();
x.beginPath();x.moveTo(s.x+s.w,s.t-38);x.lineTo(s.x+s.w+22,s.t-22);x.lineTo(s.x+s.w+18,s.t-15);x.lineTo(s.x+s.w,s.t-22);x.fill();x.stroke();
x.fillStyle='#22c55e';x.beginPath();x.ellipse(s.x+14,s.t-20,7,12,0.2,0,Math.PI*2);x.fill();
const bY=s.t+s.g,bH=c.height-28-bY;
x.fillStyle=wg;
x.beginPath();x.moveTo(s.x+8,bY);x.lineTo(s.x+s.w-8,bY);x.lineTo(s.x+s.w,bY+12);x.lineTo(s.x+s.w+5,bY+bH);x.lineTo(s.x-5,bY+bH);x.lineTo(s.x,bY+12);x.closePath();x.fill();x.stroke();
x.beginPath();x.moveTo(s.x,bY+42);x.lineTo(s.x-20,bY+26);x.lineTo(s.x-16,bY+20);x.lineTo(s.x,bY+26);x.fill();x.stroke();
x.strokeStyle='#2b180c';x.lineWidth=1.5;
x.beginPath();x.moveTo(s.x+16,10);x.lineTo(s.x+16,s.t-18);x.moveTo(s.x+32,20);x.lineTo(s.x+32,s.t-8);x.stroke();
x.beginPath();x.moveTo(s.x+18,bY+14);x.lineTo(s.x+18,bY+bH-8);x.moveTo(s.x+34,bY+22);x.lineTo(s.x+34,bY+bH-12);x.stroke();
}
}
