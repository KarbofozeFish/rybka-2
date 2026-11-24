function dCat(x,p,ja,tw,fr){
x.save();x.scale(1.28,1.28);
const bg=x.createLinearGradient(0,-34,0,34);
bg.addColorStop(0,'#111814');bg.addColorStop(0.45,'#263329');bg.addColorStop(0.82,'#4a5548');bg.addColorStop(1,'#94a396');
x.fillStyle='#1b2620';
x.beginPath();x.moveTo(-115,6);x.quadraticCurveTo(-80,26+tw*0.3,-35,23);x.lineTo(-35,14);x.lineTo(-115,2);x.closePath();x.fill();
x.fillStyle=bg;
x.beginPath();x.moveTo(-128,0);x.quadraticCurveTo(-138,-14+tw,-146,-6+tw);x.quadraticCurveTo(-140,4+tw,-146,12+tw);x.quadraticCurveTo(-134,16+tw,-125,6);
x.quadraticCurveTo(-85,22,-32,20);x.lineTo(18,14);x.lineTo(4,0);x.lineTo(18,-12);x.quadraticCurveTo(-45,-28,-128,0);x.closePath();x.fill();
x.fillStyle='rgba(10,15,12,0.55)';
const m=[[-105,-2,7],[-92,4,8],[-78,-6,9],[-62,5,8],[-48,-7,9],[-34,4,7],[-20,-5,6]];
for(let s of m){x.beginPath();x.ellipse(s,s,s,4.2,0.3,0,Math.PI*2);x.fill()}
x.fillStyle='#18221c';
x.beginPath();x.moveTo(-42,-17);x.lineTo(-36,-29);x.lineTo(-28,-17);x.closePath();x.fill();
x.fillStyle='#243029';
x.beginPath();x.moveTo(-18,12);x.lineTo(-36,26);x.lineTo(-28,29);x.lineTo(-12,15);x.closePath();x.fill();
x.strokeStyle='#0d1310';x.lineWidth=2.2;
x.beginPath();x.arc(-14,1,15,-0.8,0.8);x.stroke();
x.save();x.rotate(-ja*0.95);
x.fillStyle='#19241e';
x.beginPath();x.moveTo(-8,-13);x.quadraticCurveTo(18,-13,34,-4);x.lineTo(30,2);x.lineTo(-8,1);x.closePath();x.fill();
if(!p.bite){x.fillStyle='#e2e8f0';for(let t=2;t<=27;t+=3.5){x.beginPath();x.moveTo(t,1);x.lineTo(t+1,4);x.lineTo(t+2,1);x.fill()}}
x.restore();
x.save();x.rotate(ja*1.05);
x.fillStyle='#647468';
x.beginPath();x.moveTo(-8,1);x.lineTo(35,4);x.quadraticCurveTo(30,15,-8,16);x.closePath();x.fill();
if(!p.bite){x.fillStyle='#e2e8f0';for(let t=3;t<=29;t+=3.5){x.beginPath();x.moveTo(t,3.5);x.lineTo(t+1,0.5);x.lineTo(t+2,3.5);x.fill()}}
x.restore();
x.strokeStyle='#0f1713';x.lineWidth=2.6;x.lineCap='round';
const w1=Math.sin(fr*0.18)*10,w2=Math.cos(fr*0.15)*8;
x.beginPath();x.moveTo(16,-4);x.bezierCurveTo(34,-22+w1,48,-10-w1,56,-26+w2);x.stroke();
x.lineWidth=2;
x.beginPath();x.moveTo(14,7);x.bezierCurveTo(28,22+w2,40,16-w2,48,28+w1);x.stroke();
x.lineWidth=1.5;
x.beginPath();x.moveTo(6,11);x.quadraticCurveTo(14,24+w1*0.5,22,27);x.stroke();
x.fillStyle='#dc2626';x.beginPath();x.arc(4,-7,3.4,0,Math.PI*2);x.fill();
x.fillStyle='#000';x.beginPath();x.arc(4.8,-7,1.6,0,Math.PI*2);x.fill();
x.fillStyle='#fca5a5';x.beginPath();x.arc(5.3,-7.6,0.7,0,Math.PI*2);x.fill();
x.restore();
}
