var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
/*


 The MIT License (MIT)

 Copyright (c) 2015-present Dan Abramov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
'use strict';var aa,baa,caa,ka,daa,ma,eaa,qa,ta,va,ya,gaa,haa,Ha,Ia,iaa,jaa,Ka,kaa,La,Ma,Pa,Ua,Wa,maa,naa,lb,oaa,nb,ob,pb,tb,ub,paa,qaa,xb,saa,taa,Kb,uaa,Vb,vaa,waa,Rb,xaa,yaa,zaa,Aaa,Caa,Baa,Daa,ec,Eaa,gc,ic,kc,tc,uc,xc,yc,zc,Ac,Maa,Cc,Ec,Dc,Naa,Oaa,Paa,Qaa,Gc,Raa,Hc,Ic,Jc,Saa,Kc,Lc,Uaa,Vaa,Xaa,Sc,Tc,$aa,Uc,Xc,aba,bba,ad,hd,cba,sd,ud,fba,gba,vd,lba,Ad,iba,kba,yd,xd,Fd,Gd,mba,Hd,nba,Jd,Kd,oba,Nd,Qd,Rd,rba,tba,wba,Wd,Bba,be,Iba,Gba,Hba,Jba,Lba,Mba,Oba,Rba,je,Tba,me,oe,ve,ye,ze,Uba,Vba,Wba,Xba,Le,Me,
Ye,$ba,bca,aca,$e,bf,cca,af,Ke,zf,eca,Bf,Af,Je,Df,fca,Ef,Ff,Gf,gca,ica,kca,Vf,Wf,Xf,oca,qca,Zf,rca,Yf,vca,Tf,mca,xca,uca,sca,tca,yca,wca,$f,pca,cg,Aca,Bca,Cca,Dca,Eca,Fca,Gca,Hca,Ica,og,Jca,Nca,Oca,Pca,Uca,sg,Tca,Qca,Wca,Yca,$ca,ug,vg,cda,xg,yg,eda,Ag,zg,fda,Bg,gda,hda,Cg,Dg,Hg,ida,Ig,jda,kda,Jg,Eg,lda,Xg,Wg,Yg,Zg,$g,ah,bh,mda,oda,dh,pda,qda,eh,fh,ih,sda,tda,vda,wda,yda,jh,zda,kh,Ada,Fh,Bda,Gh,Hh,Cda,Ih,Jh,Kh,Dda,Nh,Eda,Fda,Ph,Qh,Hda,Rh,Sh,Th,Uh,Ida,Jda,Wh,Xh,Yh,Kda,Lda,Mda,Nda,pi,qi,Pda,Qda,ri,si,
ti,Sda,wi,xi,Tda,Uda,vi,yi,Rda,ui,zi,Vda,Wda,Xda,Ai,Bi,Ci,Di,Yda,Gi,Zi,M,aea,$da,cea,dea,aj,eea,fea,cj,dj,fj,ej,hj,gj,ij,lj,nj,hea,iea,oj,pj,qj,Dj,Cj,jea,kea,Fj,Gj,Hj,Ej,Ij,gea,lea,mea,Kj,Lj,Mj,mj,Nj,Oj,nea,Pj,oea,pea,Qj,qea,Rj,Sj,rea,Tj,sea,Vj,tea,Wj,Xj,Yj,Zj,ak,xk,N,yk,zk,Q,Ak,R,uea,Bk,yea,Ck,Gk,Bea,Cea,Dea,Aea,Eea,Ik,Iea,Jea,Kea,Jk,Lea,Mea,Dk,Nea,Hea,Mk,Nk,Ok,Pk,Qk,Rk,Pea,Qea,Sk,Rea,Tk,Uk,Vk,Wk,Xk,Yk,rl,Tea,Uea,Wea,Vea,Xea,ul,vl,wl,Zea,$ea,afa,xl,yl,zl,Al,Dl,El,cfa,Il,dfa,Jl,Kl,Ll,efa,ffa,Ol,gfa,
Pl,wm,jfa,xm,ym,zm,Am,Bm,Cm,Dm,Em,Fm,kfa,Im,lfa,mfa,nfa,pfa,ofa,Gm,Hm,qfa,rfa,Km,tfa,Jm,Lm,ufa,Nm,vfa,yfa,Om,Pm,zfa,Bfa,Cfa,Efa,Dfa,Ffa,Rm,Gfa,Um,Jfa,Ym,Zm,$m,Kfa,an,bn,vn,Lfa,Mfa,Nfa,wn,Pfa,xn,Qfa,Rfa,Ufa,Tfa,Sfa,Vfa,Wfa,zn,Xfa,Yfa,Zfa,cga,$fa,An,dga,Bn,ega,fga,Cn,En,gga,Fn,Gn,Hn,iga,Jn,kga,lga,mga,nga,Mn,On,oga,Qn,pga,rga,qga,sga,tga,wga,Rn,Sn,Tn,Un,Vn,Wn,Xn,Yn,xga,Zn,$n,ao,bo,co,Bga,yga,go,Aga,ho,zga,fo,eo,jo,Dga,lo,ko,Ega,Fga,ro,so,uo,Iga,to,xo,Jga,yo,Gga,Mga,Nga,Oga,bp,cp,dp,Pga,ep,fp,gp,hp,
Qga,ip,jp,kp,Rga,Sga,lp,Tga,mp,Wga,Xga,Yga,Zga,Uga,np,op,pp,qp,aha,bha,$ga,rp,cha,dha,eha,vp,fha,wp,xp,hha,iha,yp,zp,Ap,Bp,Cp,Dp,Ep,Fp,jha,Gp,Hp,kha,mha,lha,Ip,nha,oha,pha,Jp,Kp,Lp,Mp,Np,Op,Pp,qha,Qp,Rp,Sp,rha,tha,uha,Up,Wp,Vp,Yp,Zp,$p,wha,xha,aq,fr,gr,zha,Aha,Dha,Bha,Eha,Iha,hr,Hha,Fha,ir,jr,Jha,kr,Kha,lr,Mha,Lha,Nha,Oha,pr,qr,Pha,Qha,Rha,rr,sr,Sha,tr,Tha,Uha,Wha,$ha,ur,aia,bia,cia,dia,eia,xr,fia,gia,hia,Er,Dr,Cr,iia,jia,kia,Fr,Gr,Hr,mia,Mr,Nr,Or,Pr,Qr,Rr,oia,pia,qia,Sr,Ur,Vr,Zr,$r,cs,sia,uia,tia,
via,wia,is,xia,yia,js,zia,Aia,Bia,Cia,ns,ls,os,ps,qs,Dia,Eia,Fia,rs,ts,us,Gia,Hia,Iia,vs,Jia,ws,xs,Kia,Lia,Mia,Nia,Oia,Pia,ys,zs,As,Cs,Sia,Ms,Ns,Tia,Ria,Bs,Uia,Os,Ps,Qs,Ss,Rs,Via,Wia,Xia,Ts,Zia,Us,aja,bja,cja,dja,eja,fja,gja,hja,Xs,Ys,Zs,jja,ija,kja,lja,at,mja,bt,nja,oja,ct,dt,et,pja,ft,gt,qja,ht,jt,kt,lt,mt,nt,ot,pt,rja,sja,tja,uja,qt,vja,xja,wja,tt,ut,zja,yja,Eja,Dja,vt,Fja,Gja,Hja,Jja,Ija,Kja,wt,Lja,Mja,zt,Nja,Oja,Pja,Qja,At,Rja,Bt,Sja,Ct,Dt,Uja,Et,Vja,Ft,Gt,Wja,Xja,Ht,Jt,Zja,Kt,Yja,$ja,aka,bka,
dka,Lt,eka,Ot,Pt,gka,hka,kka,lka,Qt,Rt,St,Tt,Ut,Vt,Wt,Xt,Yt,Zt,$t,au,bu,pka,oka,qka,ska,rka,uka,nka,tka,mka,cu,du,wka,xka,yka,hu,iu,ju,eu,Aka,ku,vka,Cka,Dka,Bka,lu,mu,nu,ou,Eka,zka,Fka,pu,Gka,Hka,Ika,Jka,Kka,Nka,Oka,Pka,Qka,Rka,Uka,tu,Wka,ru,vu,Xka,wu,yu,zu,Yka,Zka,Gu,$ka,ala,Hu,bla,Su,Pu,Qu,Ru,dla,Vu,Uu,ela,Xu,fla,hla,Yu,ila,jla,ola,kla,bv,cv,tla,dv,ev,fv,vla,iv,wla,xla,jv,zla,lv,mv,nv,Ala,pv,qv,rv,tv,vv,wv,Cla,Dla,zv,Av,Bv,Cv,Dv,Ev,Ela,Fla,Gla,Hla,Ila,Jla,Fv,Kla,Mv,Lla,Mla,Nla,Nv,Pv,Qv,Rv,Uv,Vv,
Wv,Pla,Zv,$v,aw,Qla,Rla,bw,Sla,Tla,dw,ama,bma,cma,ew,dma,ema,hma,jma,ima,hw,kma,jw,kw,lw,mw,nw,ow,pw,qw,rw,tw,uw,vw,ww,xw,yw,zw,Aw,Bw,Cw,Dw,Ew,Fw,Gw,Hw,Iw,Jw,Kw,Lw,Mw,Nw,Ow,Pw,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,Zw,$w,ax,bx,cx,dx,ex,fx,gx,hx,ix,jx,lma,kx,lx,mx,ox,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,mma,Gx,Hx,Ix,Jx,Kx,Lx,Mx,Nx,Ox,Px,Rx,Sx,Tx,Ux,Vx,Wx,Xx,Yx,Zx,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,
Ty,Uy,Vy,Wy,Xy,Yy,Zy,$y,az,bz,cz,dz,ez,fz,gz,hz,iz,jz,kz,lz,mz,nz,oz,pz,qz,rz,sz,tz,uz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Fz,Gz,Hz,Iz,Jz,Kz,Lz,Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,Yz,Zz,$z,aA,bA,cA,dA,eA,fA,gA,hA,iA,jA,kA,lA,mA,nA,oA,pA,qA,rA,sA,nma,tA,oma,pma,qma,rma,uA,vA,wA,xA,sma,tma,yA,uma,vma,wma,DA,xma,yma,zma,Ama,Bma,Cma,Dma,Ema,Fma,Gma,EA,Hma,FA,GA,Ima,Jma,HA,Kma,Lma,Mma,Nma,Oma,Pma,Qma,Rma,IA,Sma,Tma,Uma,JA,Vma,Wma,KA,LA,Xma,MA,NA,Yma,OA,PA,Zma,QA,RA,$ma,ana,SA,bna,cna,TA,dna,ena,fna,gna,hna,ina,jna,
kna,lna,mna,UA,nna,ona,VA,pna,WA,XA,qna,rna,YA,sna,tna,ZA,una,$A,vna,aB,bB,cB,dB,wna,eB,fB,gB,hB,xna,iB,jB,yna,zna,kB,lB,mB,Ana,nB,Bna,Cna,Dna,oB,Ena,Fna,Gna,pB,Hna,Ina,qB,rB,Jna,sB,Kna,Lna,tB,Mna,uB,Nna,Ona,Pna,wB,yB,Rna,Qna,Sna,Tna,EB,FB,GB,HB,Xna,JB,KB,Yna,LB,MB,Zna,Una,NB,boa,moa,OB,ooa,qoa,UB,roa,soa,uoa,yoa,woa,xoa,zoa,toa,XB,WB,Aoa,ZB,$B,aC,Coa,Doa,Eoa,Foa,Goa,Hoa,gC,Ioa,iC,Joa,Koa,jC,Moa,Noa,mC,oC,Ooa,Poa,pC,qC,rC,sC,Roa,tC,Toa,Soa,Voa,vC,Woa,$oa,Yoa,Zoa,apa,bpa,dpa,cpa,gpa,xC,hpa,AC,ipa,
jpa,zC,BC,lpa,mpa,ppa,FC,qpa,rpa,GC,HC,IC,KC,tpa,vpa,QC,wpa,xpa,ypa,zpa,Apa,Dpa,Epa,Fpa,Cpa,Gpa,Ipa,Kpa,XC,Lpa,$C,YC,cD,dD,Npa,Qpa,iD,jD,kD,lD,Upa,nD,Wpa,Xpa,Ypa,qD,$pa,aqa,Zpa,bqa,cqa,dqa,eqa,tD,fqa,wD,iqa,jqa,gqa,kqa,lqa,oqa,nqa,AD,hqa,qqa,rqa,DD,sqa,tqa,FD,GD,uqa,wqa,ID,xqa,yqa,Aqa,Cqa,LD,Dqa,Eqa,Fqa,Gqa,Hqa,Iqa,Jqa,Kqa,ND,Lqa,PD,Nqa,Oqa,Pqa,Qqa,Rqa,Sqa,UD,Vqa,Yqa,VD,Zqa,ara,Uqa,bra,cra,dra,Wqa,Xqa,QD,Tqa,TD,$qa,SD,RD,era,fra,gra,hra,ira,jra,pra,kra,YD,ZD,$D,sra,ura,tra,qra,vra,xra,cE,zra,Cra,
fE,Bra,Mra,Dra,Lra,jE,Nra,Qra,kE,iE,Ora,Pra,Rra,mE,Tra,Ura,Vra,Wra,Xra,Yra,Zra,Sra,asa,bsa,csa,dsa,esa,hsa,oE,pE,qE,jsa,rE,ksa,lsa,tE,uE,osa,nsa,psa,rsa,tsa,ssa,wsa,Asa,ysa,FE,Dsa,Fsa,EE,Esa,GE,HE,Gsa,Hsa,Isa,JE,Ksa,ME,LE,NE,OE,PE,Msa,Nsa,RE,Osa,SE,Qsa,Rsa,Ssa,Usa,Vsa,Tsa,VE,Xsa,Wsa,Ysa,WE,$sa,XE,bta,YE,dta,ZE,cta,$E,aF,gta,mta,ota,lta,kta,nta,dF,pta,xta,tta,uta,vta,fta,Gta,Ita,Fta,Lta,Eta,cF,Kta,sta,wta,Hta,qta,ita,hta,jta,fF,Dta,mF,Vta,Uta,Zta,bua,aua,dua,oF,pF,fua,gua,hua,iua,jua,kua,lua,rF,nua,
oua,pua,qua,rua,sua,tua,vua,wua,xF,yua,Aua,zua,Bua,Dua,Eua,Iua,Gua,Kua,Jua,Mua,Lua,yF,Ppa,Uua,Rua,Wua,Xua,Yua,Zua,eva,iva,jva,lva,kva,mva,IF,ova,HF,hva,gva,EF,PF,qva,SF,RF,VF,WF,YF,tva,ZF,bG,cG,uva,vva,xva,yva,zva,Ava,Bva,Cva,Dva,Eva,Fva,Gva,iG,Iva,Jva,Lva,Mva,Nva,Ova,Pva,Qva,Tva,Uva,kG,lG,Vva,mG,Wva,oG,Yva,Xva,qG,rG,sG,tG,Zva,uG,$va,awa,bwa,vG,cwa,gwa,dwa,fwa,ewa,hwa,wG,iwa,jwa,kwa,lwa,xG,nwa,qwa,pwa,yG,rwa,zG,AG,BG,DG,EG,swa,twa,uwa,FG,vwa,wwa,GG,xwa,HG,KG,MG,zwa,ywa,NG,Awa,Bwa,OG,PG,QG,RG,UG,Dwa,
VG,WG,XG,YG,Ewa,Fwa,aH,Gwa,bH,Kwa,Mwa,Owa,Qwa,Swa,dH,Twa,eH,Uwa,Xwa,Ywa,gH,$wa,iH,jH,kH,lH,mH,nH,oH,bxa,pH,axa,cxa,qH,exa,dxa,rH,kxa,lxa,sH,tH,vH,mxa,nxa,xH,yH,AH,oxa,BH,MH,qxa,zH,txa,uxa,xxa,yxa,zxa,Bxa,wxa,Cxa,Dxa,Exa,NH,sxa,Hxa,vxa,OH,Jxa,Lxa,RH,Mxa,Nxa,SH,Oxa,PH,Pxa,TH,Qxa,Kxa,UH,Sxa,VH,Xxa,Vxa,Uxa,Txa,Zxa,XH,YH,ZH,$H,aI,bI,cI,dya,eI,eya,gya,fya,hya,iya,jya,lya,kya,mya,pya,qya,gI,hI,iI,rya,jI,kI,lI,oI,tya,uya,mI,nI,sya,xya,yya,pI,Bya,zya,qI,rI,sI,tI,Cya,uI,vI,Dya,Eya,Fya,Gya,Hya,Iya,wI,xI,yI,
zI,AI,BI,CI,DI,EI,FI,GI,Jya,HI,Kya,Lya,Mya,Nya,II,JI,KI,LI,Oya,MI,NI,OI,Pya,PI,QI,RI,SI,TI,UI,VI,WI,XI,Qya,YI,ZI,$I,Rya,aJ,bJ,cJ,dJ,Sya,eJ,fJ,Tya,gJ,Uya,hJ,Vya,jJ,kJ,Wya,lJ,mJ,nJ,iJ,oJ,pJ,qJ,Yya,$ya,aza,rJ,bza,sJ,cza,uJ,dza,eza,fza,iza,jza,kza,lza,mza,nza,gza,FJ,qza,rza,sza,tza,hza,vza,wJ,wza,xza,HJ,yza,IJ,yJ,zza,xJ,uza,JJ,Cza,Bza,AJ,BJ,LJ,KJ,Dza,MJ,Eza,NJ,Gza,Fza,OJ,PJ,QJ,RJ,Hza,Iza,Kza,Lza,TJ,UJ,Nza,VJ,Rza,Tza,Vza,Wza,XJ,Yza,Zza,aAa,bAa,cAa,dAa,eAa,fAa,bK,cK,gAa,iAa,hAa,jAa,kAa,lAa,gK,iK,jK,kK,
lK,mK,mAa,nK,oK,hK,pK,qK,pAa,qAa,oAa,tAa,uAa,vAa,wAa,xAa,yAa,zAa,AAa,BAa,CAa,DAa,EAa,FAa,GAa,HAa,IAa,JAa,KAa,LAa,MAa,NAa,OAa,sK,tK,PAa,uK,vK,QAa,RAa,SAa,TAa,UAa,VAa,WAa,wK,XAa,YAa,ZAa,$Aa,xK,aBa,bBa,yK,cBa,dBa,zK,eBa,AK,fBa,gBa,hBa,BK,iBa,lBa,CK,mBa,oBa,jBa,kBa,DK,nBa,qBa,rBa,FK,GK,HK,IK,JK,uBa,KK,LK,OK,vBa,wBa,xBa,QK,SK,yBa,VK,WK,ABa,BBa,XK,YK,ZK,CBa,aL,bL,cL,DBa,EBa,FBa,dL,zBa,eL,fL,gL,hL,iL,jL,GBa,kL,lL,mL,nL,oL,pL,qL,rL,sL,IBa,JBa,LBa,MBa,xL,uL,yL,NBa,OBa,PBa,QBa,zL,AL,RBa,SBa,TBa,vL,UBa,VBa,
BL,WBa,YBa,ZBa,DL,EL,FL,GL,HL,bCa,KL,ML,LL,NL,dCa,OL,eCa,fCa,hCa,gCa,RL,iCa,jCa,mCa,kCa,lCa,SL,oCa,pCa,qCa,sCa,rCa,tCa,uCa,wCa,vCa,xCa,yCa,zCa,ACa,BCa,CCa,DCa,ECa,FCa,GCa,HCa,ICa,JCa,KCa,LCa,MCa,NCa,VL,OCa,WL,XL,QCa,RCa,YL,SCa,ZL,TCa,$L,UCa,aM,VCa,WCa,XCa,YCa,bM,ZCa,$Ca,aDa,cM,dM,eM,fM,gM,bDa,hM,iM,jM,cDa,kM,dDa,eDa,fDa,lM,mM,gDa,nM,hDa,oM,pM,Jza,iDa,jDa,qM,kDa,rM,sM,tM,uM,vM,wM,xM,yM,lDa,zM,AM,mDa,nDa,oDa,BM,YM,qDa,vDa,zDa,wDa,BDa,CDa,ADa,EDa,FDa,GDa,gN,KDa,MDa,PDa,QDa,RDa,hN,TDa,UDa,YDa,iN,ZDa,
VDa,$Da,jN,aEa,dEa,cEa,hEa,eEa,kN,lN,nEa,tEa,qEa,wEa,vEa,yEa,oEa,pEa,rEa,uEa,zEa,sEa,AEa,BEa,EEa,HEa,FEa,KEa,SEa,REa,LEa,TEa,NEa,OEa,MEa,XEa,ZEa,aFa,eFa,hFa,iFa,kFa,mFa,oFa,nFa,wFa,qFa,pFa,xFa,AFa,BFa,CFa,DFa,sN,LDa,GFa,EFa,uN,IFa,JFa,xN,MFa,NFa,LFa,yN,OFa,zN,AN,dK,BN,JDa,CN,PFa,rAa,QFa,DN,RFa,SFa,TFa,EN,FN,UFa,GN,HN,IN,JN,KN,VFa,WFa,LN,XFa,YFa,MN,ZFa,NN,EK,ON,PN,$Fa,QN,aGa,bGa,NDa,KFa,RN,eK,SJ,nN,cGa,dGa,SN,mEa,mN,eGa,tN,HFa,dFa,cFa,DEa,oN,fFa,jFa,lFa,iEa,yFa,fGa,UEa,PEa,TN,ODa,hGa,gGa,CEa,gFa,iGa,
zFa,pN,jEa,lEa,bEa,bFa,$Ea,JEa,GEa,XDa,WDa,SDa,WEa,QEa,rFa,fEa,gEa,uFa,vFa,sFa,tFa,YEa,lGa,jGa,UN,kGa,VN,GJ,zJ,oza,vJ,mGa,WN,XN,YN,dO,oGa,fO,qGa,rGa,sGa,tGa,vGa,uGa,wGa,xGa,iO,lO,yGa,zGa,BGa,AGa,CGa,DGa,EGa,FGa,GGa,HGa,nO,oO,KGa,pO,qO,LGa,MGa,NGa,OGa,rO,PGa,sO,QGa,RGa,tO,vO,zO,SGa,AO,BO,CO,DO,EO,FO,GO,HO,IO,JO,KO,TGa,LO,MO,NO,OO,PO,QO,UGa,VGa,RO,WGa,VO,ZGa,$Ga,WO,bHa,aHa,cHa,dHa,YO,ZO,$O,X,fHa,aP,kHa,oHa,pHa,qHa,yHa,BHa,GHa,HHa,eIa,fIa,gIa,IHa,KHa,QHa,lIa,UHa,pIa,nIa,rIa,sIa,oIa,tIa,sJa,AIa,tJa,BIa,
CIa,iP,vJa,xJa,zJa,yJa,wJa,HIa,VIa,WIa,DJa,FJa,YIa,ZIa,aJa,bJa,cJa,MJa,eJa,hJa,oJa,UJa,QJa,RJa,WJa,ZJa,YJa,$Ja,aKa,iKa,bKa,lP,fKa,oKa,pKa,qKa,rKa,sKa,vKa,AKa,dLa,cLa,pP,qP,rP,sP,tP,uP,kLa,wP,vP,mLa,iLa,jLa,nLa,lLa,xP,oLa,Opa,qLa,pLa,sLa,uLa,wLa,xLa,yLa,vLa,zLa,ELa,DLa,AP,GLa,HLa,ILa,JLa,CP,BP,KLa,LLa,MLa,OLa,EP,GP,IP,PLa,JP,KP,QLa,ULa,WLa,VLa,YLa,eMa,fMa,MP,XLa,TLa,SLa,RLa,QP,NP,PP,VP,WP,iMa,jMa,XP,UP,nMa,kMa,lMa,oMa,YP,ZP,qMa,rMa,aQ,bQ,cQ,dQ,eQ,sMa,tMa,uMa,fQ,gQ,iQ,wMa,xMa,hQ,yMa,BMa,CMa,jQ,DMa,
mQ,EMa,nQ,pQ,GMa,oQ,qQ,HMa,JMa,KMa,LMa,sQ,tQ,yQ,OMa,vQ,zQ,BQ,PMa,CQ,xQ,AQ,QMa,DQ,RMa,EQ,SMa,uQ,wQ,MMa,NMa,FQ,TMa,UMa,VMa,GQ,HQ,IQ,WMa,JQ,KQ,XMa,LQ,YMa,MQ,NQ,OQ,ZMa,$Ma,aNa,bNa,cNa,PQ,dNa,eNa,fNa,gNa,hNa,iNa,QQ,RQ,jNa,SQ,nNa,oNa,pNa,qNa,rNa,UQ,VQ,TQ,kNa,sNa,tNa,uNa,vNa,WQ,XQ,wNa,YQ,ZQ,xNa,yNa,$Q,zNa,ANa,ENa,FNa,BNa,CNa,DNa,GNa,aR,bR,cR,HNa,INa,dR,eR,JNa,fR,KNa,MNa,LNa,gR,NNa,ONa,PNa,QNa,RNa,SNa,UNa,VNa,hR,WNa,YNa,$Na,ZNa,kR,cMa,OP,dOa,eOa,fOa,gOa,hOa,iOa,LP,jR,jOa,lR,oOa,pOa,qOa,rOa,mR,vOa,sOa,tOa,
xOa,yOa,zOa,AOa,wOa,BOa,nR,oR,pR,COa,DOa,qR,EOa,FOa,GOa,HOa,mOa,JOa,dMa,ZLa,LOa,sR,uR,vR,wR,xR,yR,tR,MOa,OOa,BR,ROa,POa,TOa,UOa,SOa,QOa,VOa,WOa,XOa,GR,YOa,ZOa,aPa,bPa,hMa,HR,cPa,fPa,RP,gPa,hPa,iPa,aMa,bMa,IR,JR,KR,LR,jPa,kPa,MR,lPa,NR,OR,mPa,PR,nPa,QR,oPa,RR,SR,TR,UR,qPa,rPa,VR,sPa,tPa,pPa,WR,uPa,wPa,yPa,xPa,vPa,LPa,IPa,OPa,oS,pS,zPa,JPa,DJ,lS,sS,PPa,wS,RPa,cS,xS,bS,SPa,HPa,AS,BS,VPa,WPa,XPa,YPa,ZPa,$Pa,aQa,CS,bQa,gQa,fQa,cQa,eQa,dQa,DS,hQa,ES,iQa,jQa,lQa,mQa,nQa,sQa,JS,KS,vQa,LS,MS,wQa,zQa,AQa,BQa,
CQa,NS,EQa,IQa,JQa,QQa,UQa,NQa,OQa,WQa,WS,XQa,ZQa,YQa,$Qa,YS,aT,aRa,XS,bRa,bT,cRa,gRa,dRa,jRa,fRa,zRa,IRa,uT,JRa,LRa,wRa,iT,KRa,nT,vT,uRa,NRa,MRa,wT,fT,xRa,TRa,PRa,QRa,RRa,SRa,URa,xT,VRa,XRa,YRa,zT,ZRa,eT,kT,WRa,ARa,eRa,ERa,ET,lT,ORa,LT,MT,NT,lSa,mSa,tT,PT,nSa,QT,oSa,mT,pSa,vRa,qSa,dSa,jT,nRa,rSa,lRa,kRa,hRa,TT,ASa,CSa,DSa,ESa,FSa,WT,XT,GSa,ISa,JSa,ZT,LSa,MSa,bU,cU,aU,OSa,NSa,PSa,QSa,RSa,TSa,USa,VSa,iU,WSa,kU,XSa,lU,YSa,ZSa,dTa,eTa,wU,gTa,xU,hTa,kTa,lTa,nTa,mTa,oTa,jTa,qTa,pTa,tTa,rTa,sTa,wTa,xTa,
yTa,zTa,vTa,BTa,CTa,ATa,uTa,DTa,ETa,FTa,GTa,HTa,ITa,KTa,LTa,JTa,yU,MTa,NTa,PTa,OTa,QTa,STa,RTa,TTa,UTa,VTa,WTa,YTa,ZTa,XTa,AU,aUa,bUa,CU,cUa,GU,HU,IU,JU,KU,dUa,fUa,eUa,gUa,hUa,iUa,LU,MU,jUa,lUa,mUa,nUa,QU,tUa,sUa,RU,vUa,TU,wUa,xUa,yUa,zUa,AUa,UU,CUa,BUa,DUa,EUa,VU,WU,FUa,HUa,IUa,XU,JUa,YU,KUa,NUa,ZU,LUa,QUa,OUa,PUa,MUa,$U,UUa,SUa,TUa,VUa,aV,WUa,XUa,YUa,bV,ZUa,$Ua,aVa,eV,cV,bVa,fV,cVa,hV,iV,eVa,gV,gVa,jV,lV,hVa,mV,nV,oV,iVa,lVa,kVa,qV,rV,sV,oVa,mVa,nVa,tV,pVa,tVa,rVa,qVa,sVa,uV,vVa,wVa,vV,xVa,wV,CVa,
AVa,BVa,xV,DVa,zVa,EVa,yV,zV,FVa,GVa,HVa,AV,IVa,JVa,KVa,LVa,MVa,NVa,OVa,RVa,PVa,SVa,TVa,UVa,VVa,XVa,KV,LV,YVa,ZVa,JV,cWa,bWa,dWa,eWa,fWa,gWa,hWa,iWa,jWa,pWa,PV,sWa,vWa,uWa,tWa,nWa,oWa,kWa,lWa,qWa,QV,RV,xWa,pU,SSa,TV,yWa,AWa,zWa,rWa,CWa,DWa,EWa,VV,FWa,bW,HWa,IWa,JWa,LWa,KWa,MWa,cW,dW,NWa,QWa,RWa,fW,PWa,SWa,TWa,OWa,gW,UWa,jW,VWa,WWa,iW,XWa,YWa,ZWa,$Wa,aXa,cXa,dXa,bXa,gXa,eXa,nW,oW,hXa,rW,sW,iXa,kXa,uW,jXa,lXa,mXa,nXa,pXa,oXa,qXa,rXa,sXa,tXa,uXa,zW,AW,wXa,vXa,DW,BW,CW,xXa,yXa,EW,FW,AXa,BXa,zXa,CXa,DXa,
EXa,GXa,IXa,HXa,GW,JXa,KXa,FXa,PXa,QXa,RXa,UXa,TXa,SXa,VXa,WXa,HW,IW,XXa,YXa,ZXa,$Xa,JW,MW,aYa,bYa,cYa,dYa,eYa,fYa,OW,gYa,hYa,kYa,PW,lYa,jYa,QW,RW,mYa,nYa,qYa,oYa,pYa,UW,rYa,tYa,uYa,wYa,xYa,VW,WW,yYa,sYa,AYa,zYa,XW,YW,ZW,bX,cX,BYa,CYa,DYa,EYa,fX,dZa,gX,eZa,hX,hZa,iZa,jZa,lZa,mZa,nZa,kZa,pZa,oZa,qZa,tZa,lX,vZa,uZa,rZa,sZa,wZa,xZa,mX,nX,yZa,zZa,AZa,BZa,CZa,DZa,FZa,GZa,OZa,JZa,KZa,HZa,RZa,sX,SZa,WZa,vX,XZa,TZa,rX,yX,xX,tX,zX,$Za,a_a,AX,uX,PZa,ZZa,wX,UZa,YZa,b_a,oX,CX,c_a,d_a,VZa,DX,EX,f_a,FX,g_a,IX,
JX,h_a,i_a,k_a,l_a,j_a,KX,LX,m_a,n_a,o_a,p_a,q_a,s_a,u_a,t_a,r_a,w_a,v_a,MX,NX,x_a,z_a,A_a,OX,y_a,B_a,C_a,D_a,QX,TX,SX,F_a,E_a,G_a,UX,H_a,I_a,K_a,J_a,L_a,M_a,N_a,XX,O_a,P_a,Q_a,R_a,S_a,T_a,V_a,W_a,X_a,U_a,Y_a,Z_a,$_a,a0a,b0a,aY,d0a,bY,f0a,cY,e0a,i0a,j0a,h0a,dY,k0a,eY,fY,gY,l0a,hY,o0a,p0a,q0a,iY,r0a,s0a,t0a,u0a,v0a,x0a,m0a,y0a,jY,z0a,A0a,B0a,C0a,lY,D0a,E0a,F0a,K0a,O0a,M0a,H0a,oY,G0a,N0a,qY,Q0a,P0a,rY,S0a,T0a,U0a,W0a,X0a,V0a,Y0a,fVa,vY,Z0a,$0a,wY,b1a,a1a,c1a,j1a,BY,k1a,l1a,DY,m1a,FY,EY,n1a,d1a,GY,p1a,
q1a,s1a,HY,t1a,IY,v1a,u1a,JY,h1a,zY,w1a,x1a,y1a,z1a,A1a,e1a,g1a,AY,xY,D1a,E1a,KY,MY,NY,F1a,G1a,H1a,I1a,LY,B1a,J1a,K1a,C1a,O1a,S1a,RY,T1a,U1a,Q1a,TY,V1a,W1a,N1a,X1a,R1a,Y1a,UY,SY,Z1a,a2a,$1a,QY,c2a,XY,d2a,VY,YY,WY,ZY,e2a,f2a,i2a,h2a,k2a,l2a,j2a,bZ,aZ,n2a,o2a,p2a,q2a,r2a,t2a,s2a,u2a,dZ,eZ,v2a,fZ,w2a,y2a,C2a,z2a,A2a,B2a,D2a,nZ,E2a,F2a,G2a,H2a,I2a,J2a,K2a,L2a,M2a,N2a,oZ,P2a,Q2a,R2a,pZ,qZ,rZ,sZ,tZ,uZ,vZ,S2a,wZ,T2a,Y2a,a3a,b3a,c3a,d3a,AZ,BZ,$2a,X2a,e3a,yZ,U2a,f3a,xZ,zZ,V2a,W2a,CZ,g3a,h3a,Z2a,i3a,j3a,n3a,
k3a,o3a,p3a,l3a,m3a,q3a,r3a,s3a,MQa,TQa,u3a,t3a,EZ,z3a,x3a,y3a,v3a,A3a,FZ,w3a,GZ,HZ,B3a,C3a,D3a,IZ,F3a,G3a,JZ,H3a,KZ,I3a,J3a,K3a,L3a,N3a,O3a,V3a,R3a,M3a,X3a,Y3a,S3a,T3a,Q3a,U3a,MZ,P3a,W3a,d4a,b4a,a4a,$3a,Z3a,OZ,e4a,QZ,g4a,RZ,h4a,i4a,j4a,SZ,TZ,UZ,l4a,m4a,k4a,p4a,q4a,r4a,VZ,WZ,s4a,t4a,u4a,w4a,v4a,x4a,y4a,XZ,z4a,A4a,ZZ,$Z,YZ,B4a,hZ,C4a,D4a,E4a,F4a,G4a,H4a,I4a,gZ,J4a,b_,c_,K4a,L4a,M4a,d_,N4a,mZ,O4a,P4a,jZ,kZ,T4a,f_,h_,U4a,V4a,j_,g_,e_,k_,R4a,Q4a,S4a,l_,X4a,Y4a,W4a,Z4a,iZ,$4a,i_,a5a,b5a,c5a,d5a,e5a,f5a,
n4a,o4a,g5a,h5a,m_,k5a,i5a,l5a,n5a,n_,o5a,p5a,q5a,p_,r_,s5a,w5a,u5a,x5a,t5a,v5a,r5a,y5a,z5a,s_,C5a,E5a,G5a,K5a,S5a,U5a,V5a,T5a,W5a,X5a,Y5a,u_,$5a,d6a,f6a,v_,g6a,Z5a,h6a,i6a,w_,j6a,k6a,l6a,m6a,y_,t6a,s6a,D_,u6a,r6a,x6a,y6a,z6a,B6a,C6a,D6a,E6a,F6a,G6a,I6a,J6a,K6a,H6a,G_,x_,L6a,M6a,E_,O6a,A6a,F_,P6a,Q6a,T6a,U6a,R6a,S6a,X6a,W6a,Y6a,Z6a,V6a,$6a,a7a,H_,b7a,c7a,d7a,g7a,f7a,e7a,I_,h7a,j7a,k7a,l7a,L_,M_,O2a,m7a,n7a,q7a,p7a,o7a,r7a,t7a,u7a,s7a,N_,w7a,x7a,y7a,D7a,C7a,E7a,G7a,c4a,z7a,B7a,A7a,F7a,lZ,LZ,o_,H7a,
I7a,J7a,K7a,L7a,i7a,O_,q_,M7a,m5a,Q_,R_,N7a,S_,O7a,P7a,Q7a,R7a,S7a,T7a,V7a,U7a,X7a,Y7a,b8a,Z7a,a8a,c8a,U_,g8a,e8a,f8a,j8a,k8a,l8a,m8a,n8a,T_,o8a,i8a,d8a,V_,p8a,$7a,q8a,W_,s8a,t8a,u8a,r8a,X_,x8a,w8a,A8a,z8a,y8a,B8a,C8a,Y_,D8a,E8a,J8a,G8a,H8a,I8a,K8a,L8a,M8a,O8a,N8a,P8a,Q8a,R8a,T8a,V8a,U8a,W8a,S8a,X8a,Z8a,a9a,Y8a,b9a,c9a,e9a,d9a,f9a,$8a,$_,g9a,h9a,i9a,k9a,m9a,n9a,p9a,q9a,r9a,s9a,v9a,w9a,u9a,x9a,y9a,z9a,B9a,A9a,E9a,d0,OY,C9a,D9a,F9a,g0,H9a,G9a,I9a,K9a,L9a,O9a,M9a,R9a,h0,N9a,S9a,i0,U9a,k0,m0,V9a,j0,W9a,
n0,Z9a,Y9a,T9a,$9a,a$a,l0,b$a,o0,c$a,X9a,t9a,f0,PY,e$a,L1a,f$a,M1a,g$a,h$a,i$a,j$a,q0,k$a,m$a,n$a,o$a,l$a,p$a,q$a,r0,r$a,s$a,t$a,s0,$Ba,u$a,v$a,w$a,u0,z$a,A$a,w0,B$a,C$a,y$a,v0,t0,x$a,z0,y0,A0,x0,G$a,I$a,K$a,M$a,E$a,J$a,N$a,F$a,O$a,P$a,R$a,B0,S$a,Q$a,C0,U$a,T$a,V$a,H$a,W$a,L$a,D$a,D0,bab,Z$a,cab,$$a,Y$a,dab,X$a,gab,E0,hab,jab,wL,lab,nab,oab,pab,J0,qab,f1a,sab,K0,F8a,tab,vab,rab,tY,I0,wab,xab,P0,N6a,mab,O0,F0,Aab,Bab,Dab,Cab,uab,M0,Eab,R0,Fab,L0a,Hab,Gab,v7a,Z_,Iab,R0a,Jab,o1a,jVa,L0,Kab,Mab,Lab,J0a,
Nab,Pab,zab,kab,Rab,Qab,N0,G0,Sab,S0,pY,Vab,Wab,CY,Xab,Yab,Zab,I0a,Q0,K_,$ab,kbb,fbb,mbb,ebb,nbb,dbb,U0,uY,sbb,obb,qbb,pbb,ubb,X0,Y0,xbb,wbb,vbb,$0,jbb,e1,zbb,d1,Z0,Bbb,Dbb,Ebb,gbb,Cbb,h1,Fbb,ibb,b1,ybb,a1,Lbb,Mbb,W0,Nbb,Pbb,Qbb,Obb,k1,Abb,l1,m1,Rbb,c1,tbb,Hbb,Gbb,Sbb,Tbb,Ubb,Vbb,f1,Wbb,g1,Xbb,Zbb,V0,n1,rbb,$bb,acb,hbb,j1,i1,bcb,ccb,o1,p1,g2a,dcb,ecb,fcb,gcb,q1,icb,mcb,pcb,lcb,hcb,r1,s1,t1,zcb,ycb,u1,v1,Bcb,Ccb,Dcb,pBa,Acb,cCa,Fcb,Ecb,w1,Hcb,Gcb,Icb,x1,y1,Jcb,z1,qN,Kcb,vN,FFa,Lcb,kEa,PL,QL,Mcb,Ncb,
Ocb,A1,Qcb,Rcb,B1,D1,E1,Ucb,Vcb,F1,Wcb,Scb,Tcb,Xcb,Ycb,G1,Zcb,H1,$cb,nAa,TL,adb,bdb,sAa,rK,cdb,ddb,edb,I1,hdb,gdb,J1,K1,idb,jdb,C1,kdb,ldb,mdb,L1,M1,ndb,N1,O1,odb,P1,Q1,pdb,R1,S1,qdb,rdb,nCa,T1,sdb,udb,tdb,U1,V1,W1,vdb,wdb,xdb,ydb,zdb,Adb,Bdb,Ddb,Y1,Cdb,Z1,Edb,Fdb,Gdb,Hdb,Idb,Mdb,Jdb,Kdb,Ldb,Odb,Qdb,Rdb,Sdb,Pdb,$1,Tdb,Udb,Vdb,Wdb,Xdb,b2,Ydb,c2,d2,g2,Zdb,$db,beb,ceb,deb,eeb,geb,feb,heb,h2,i2,keb,ieb,jeb,j2,meb,neb,k2,l2,oeb,m2,qeb,n2,reb,seb,teb,o2,p2,q2,ueb,veb,web,zeb,yeb,r2,Aeb,Beb,Ceb,IDa,xeb,
Deb,Geb,Heb,Jeb,aaa,ia;aa=function(a){return function(){return aaa[a].apply(this,arguments)}};
g.ba=function(a,b){return aaa[a]=b};
baa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
caa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ka=function(a,b){if(b)a:{var c=g.ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ia(c,a,{configurable:!0,writable:!0,value:b})}};
daa=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
ma=function(a){return a.raw=a};
g.v=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:baa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");};
eaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.oa=function(a){return a instanceof Array?a:eaa(g.v(a))};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.w=function(a,b){a.prototype=faa(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Qf=b.prototype};
ta=function(){this.N=!1;this.D=null;this.B=void 0;this.j=1;this.G=this.K=0;this.Y=this.C=null};
va=function(a){if(a.N)throw new TypeError("Generator is already running");a.N=!0};
ya=function(a,b){a.C={eW:b,IX:!0};a.j=a.K||a.G};
g.y=function(a,b,c){a.j=c;return{value:b}};
g.za=function(a){a.j=0};
g.Aa=function(a,b,c){a.K=b;void 0!=c&&(a.G=c)};
g.Ba=function(a,b){a.j=b;a.K=0};
g.Ca=function(a){a.K=0;var b=a.C.eW;a.C=null;return b};
g.Da=function(a){a.Y=[a.C];a.K=0;a.G=0};
g.Ga=function(a,b){var c=a.Y.splice(0)[0];(c=a.C=a.C||c)?c.IX?a.j=a.K||a.G:void 0!=c.La&&a.G<c.La?(a.j=c.La,a.C=null):a.j=a.G:a.j=b};
gaa=function(a){this.j=new ta;this.B=a};
haa=function(a,b){va(a.j);var c=a.j.D;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.j.return);
a.j.return(b);return Ia(a)};
Ha=function(a,b,c,d){try{var e=b.call(a.j.D,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.j.N=!1,e;var f=e.value}catch(h){return a.j.D=null,ya(a.j,h),Ia(a)}a.j.D=null;d.call(a.j,f);return Ia(a)};
Ia=function(a){for(;a.j.j;)try{var b=a.B(a.j);if(b)return a.j.N=!1,{value:b.value,done:!1}}catch(c){a.j.B=void 0,ya(a.j,c)}a.j.N=!1;if(a.j.C){b=a.j.C;a.j.C=null;if(b.IX)throw b.eW;return{value:b.return,done:!0}}return{value:void 0,done:!0}};
iaa=function(a){this.next=function(b){va(a.j);a.j.D?b=Ha(a,a.j.D.next,b,a.j.Z):(a.j.Z(b),b=Ia(a));return b};
this.throw=function(b){va(a.j);a.j.D?b=Ha(a,a.j.D["throw"],b,a.j.Z):(ya(a.j,b),b=Ia(a));return b};
this.return=function(b){return haa(a,b)};
this[Symbol.iterator]=function(){return this}};
jaa=function(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(f,e)}
f(a.next())})};
g.I=function(a){return jaa(new iaa(new gaa(a)))};
g.Ja=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};
Ka=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e};
kaa=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,H0:f}}return{i:-1,H0:void 0}};
La=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ma=function(a){return a?a:Array.prototype.fill};
Pa=function(a){return a?a:Array.prototype.copyWithin};
g.Sa=function(a,b,c){a=a.split(".");c=c||g.Ra;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
Ua=function(a,b){var c=g.Ta("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b};
g.Ta=function(a,b){a=a.split(".");b=b||g.Ra;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};
Wa=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.Xa=function(a){var b=Wa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Za=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.ab=function(a){return Object.prototype.hasOwnProperty.call(a,$a)&&a[$a]||(a[$a]=++laa)};
maa=function(a,b,c){return a.call.apply(a.bind,arguments)};
naa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.db=function(a,b,c){g.db=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?maa:naa;return g.db.apply(null,arguments)};
g.fb=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.gb=function(){return Date.now()};
g.ib=function(a,b){function c(){}
c.prototype=b.prototype;a.Qf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
lb=function(a){return a};
oaa=function(a){this.j=a};
nb=function(a,b,c){this.C=a;this.G=b;this.B=c||[];this.j=new Map};
ob=function(a,b){nb.call(this,a,3,b)};
pb=function(a,b){nb.call(this,a,2,b)};
g.rb=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.sb=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Xa(d)?g.sb.apply(null,d):g.rb(d)}};
g.J=function(){this.Wx=this.Wx;this.Um=this.Um};
g.L=function(a,b){a.addOnDisposeCallback(g.fb(g.rb,b))};
tb=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,tb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)};
ub=function(a,b){var c=tb.call;a=a.split("%s");for(var d="",e=a.length-1,f=0;f<e;f++)d+=a[f]+(f<b.length?b[f]:"%s");c.call(tb,this,d+a[e])};
paa=function(){};
g.vb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.B=!1};
g.wb=function(a){return a[a.length-1]};
qaa=function(a,b){var c=a.length,d="string"===typeof a?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)};
g.yb=function(a,b,c){b=xb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
xb=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.zb=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.Bb=function(a,b){return 0<=raa(a,b)};
saa=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.Db=function(a,b){b=raa(a,b);var c;(c=0<=b)&&g.Cb(a,b);return c};
g.Cb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Eb=function(a,b){b=xb(a,b);0<=b&&g.Cb(a,b)};
taa=function(a,b){var c=0;qaa(a,function(d,e){b.call(void 0,d,e,a)&&g.Cb(a,e)&&c++})};
g.Fb=function(a){return Array.prototype.concat.apply([],arguments)};
g.Hb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Jb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.Ob=function(a,b,c,d){Array.prototype.splice.apply(a,Kb(arguments,1))};
Kb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
uaa=function(a){for(var b=0,c=0,d={};c<a.length;){var e=a[c++],f=g.Za(e)?"o"+g.ab(e):(typeof e).charAt(0)+e;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,a[b++]=e)}a.length=b};
g.Sb=function(a,b,c){return vaa(a,c||Rb,!1,b)};
Vb=function(a,b){return vaa(a,b,!0)};
vaa=function(a,b,c,d){for(var e=0,f=a.length,h;e<f;){var l=e+(f-e>>>1),m=void 0;c?m=b.call(void 0,a[l],l,a):m=b(d,a[l]);0<m?e=l+1:(f=l,h=!m)}return h?e:-e-1};
g.Wb=function(a,b){a.sort(b||Rb)};
waa=function(a,b){var c=Rb;g.Wb(a,function(d,e){return c(b(d),b(e))})};
g.Xb=function(a,b){if(!g.Xa(a)||!g.Xa(b)||a.length!=b.length)return!1;for(var c=a.length,d=xaa,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
Rb=function(a,b){return a>b?1:a<b?-1:0};
xaa=function(a,b){return a===b};
g.Yb=function(a,b,c){c=g.Sb(a,b,c);0>c&&g.Ob(a,-(c+1),0,b)};
g.cc=function(a,b,c){var d={};(0,g.Zb)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
yaa=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
zaa=function(a,b){b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,0,0,b[0])};
Aaa=function(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};
Caa=function(a){var b=g.Ta("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.Ra.$googDebugFname||b}catch(h){e="Not available",c=!0}b=Baa(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,dc[c])c=dc[c];else{c=String(c);if(!dc[c]){var f=/function\s+([^\(]+)/m.exec(c);dc[c]=f?f[1]:"[Anonymous]"}c=dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}};
Baa=function(a,b){b||(b={});b[Daa(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Daa(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Baa(a,b));return c};
Daa=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
ec=function(a,b){return 0==a.lastIndexOf(b,0)};
Eaa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.fc=function(a){return/^[\s\xa0]*$/.test(a)};
gc=function(a){if(!Faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Laa,"&#0;"));return a};
g.hc=function(a,b){return-1!=a.indexOf(b)};
ic=function(a,b){return g.hc(a.toLowerCase(),b.toLowerCase())};
g.lc=function(a,b){var c=0;a=jc(String(a)).split(".");b=jc(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=kc(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||kc(0==f[2].length,0==h[2].length)||kc(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c};
kc=function(a,b){return a<b?-1:a>b?1:0};
g.mc=function(){var a=g.Ra.navigator;return a&&(a=a.userAgent)?a:""};
tc=function(a){return oc||qc?sc?sc.brands.some(function(b){return(b=b.brand)&&g.hc(b,a)}):!1:!1};
uc=function(a){return g.hc(g.mc(),a)};
xc=function(){return oc||qc?!!sc&&0<sc.brands.length:!1};
yc=function(){return xc()?!1:uc("Opera")};
zc=function(){return xc()?!1:uc("Trident")||uc("MSIE")};
Ac=function(){return xc()?!1:uc("Edge")};
Maa=function(){return xc()?tc("Microsoft Edge"):uc("Edg/")};
Cc=function(){return uc("Firefox")||uc("FxiOS")};
Ec=function(){return uc("Safari")&&!(Dc()||(xc()?0:uc("Coast"))||yc()||Ac()||Maa()||(xc()?tc("Opera"):uc("OPR"))||Cc()||uc("Silk")||uc("Android"))};
Dc=function(){return xc()?tc("Chromium"):(uc("Chrome")||uc("CriOS"))&&!Ac()||uc("Silk")};
Naa=function(){return uc("Android")&&!(Dc()||Cc()||yc()||uc("Silk"))};
Oaa=function(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}};
Paa=function(a){var b=g.mc();if("Internet Explorer"===a){if(zc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);
b=Oaa(c);switch(a){case "Opera":if(yc())return b(["Version","Opera"]);if(xc()?tc("Opera"):uc("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(Ac())return b(["Edge"]);if(Maa())return b(["Edg"]);break;case "Chromium":if(Dc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Cc()||"Safari"===a&&Ec()||"Android Browser"===a&&Naa()||"Silk"===a&&uc("Silk")?(b=c[2])&&b[1]||"":""};
Qaa=function(a){if(xc()&&"Silk"!==a){var b=sc.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=Paa(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])};
Gc=function(){return oc||qc?!!sc&&!!sc.platform:!1};
Raa=function(){return Gc()?"Android"===sc.platform:uc("Android")};
Hc=function(){return uc("iPhone")&&!uc("iPod")&&!uc("iPad")};
Ic=function(){return Hc()||uc("iPad")||uc("iPod")};
Jc=function(){return Gc()?"macOS"===sc.platform:uc("Macintosh")};
Saa=function(){return Gc()?"Windows"===sc.platform:uc("Windows")};
Kc=function(a){Kc[" "](a);return a};
Lc=function(a,b){try{return Kc(a[b]),!0}catch(c){}return!1};
Uaa=function(a,b){var c=Taa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Vaa=function(){var a=g.Ra.document;return a?a.documentMode:void 0};
g.Oc=function(a){return Uaa(a,function(){return 0<=g.lc(Nc,a)})};
g.Pc=function(a){return Number(Waa)>=a};
Xaa=function(a){return g.Qc?"webkit"+a:a.toLowerCase()};
Sc=function(a,b){g.vb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.timeStamp=0;this.j=null;a&&this.init(a,b)};
Tc=function(a){return!(!a||!a[Yaa])};
$aa=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Dd=e;this.key=++Zaa;this.removed=this.WG=!1};
Uc=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.Dd=null};
g.Vc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Wc=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Xc=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.Yc=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
aba=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
g.$c=function(a){for(var b in a)return b};
bba=function(a){for(var b in a)return a[b]};
ad=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.bd=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.fd=function(a,b){return null!==a&&b in a};
g.gd=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
hd=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};
cba=function(a,b){return(b=hd(a,b))&&a[b]};
g.id=function(a){for(var b in a)return!1;return!0};
g.dba=function(a){for(var b in a)delete a[b]};
g.jd=function(a,b){b in a&&delete a[b]};
g.kd=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.ld=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.pd=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.qd=function(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=g.qd(a[c]);return b};
g.rd=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eba.length;f++)c=eba[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
sd=function(a){this.src=a;this.listeners={};this.j=0};
g.td=function(a,b){var c=b.type;c in a.listeners&&g.Db(a.listeners[c],b)&&(Uc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.j--))};
ud=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.Dd==d)return e}return-1};
g.wd=function(a,b,c,d,e){if(d&&d.once)return vd(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.wd(a,b[f],c,d,e);return null}c=xd(c);return Tc(a)?a.Qa(b,c,g.Za(d)?!!d.capture:!!d,e):fba(a,b,c,!1,d,e)};
fba=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.Za(e)?!!e.capture:!!e,l=yd(a);l||(a[zd]=l=new sd(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gba();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)hba||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(iba(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jba++;return c};
gba=function(){function a(c){return b.call(a.src,a.listener,c)}
var b=kba;return a};
vd=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);return null}c=xd(c);return Tc(a)?a.UI(b,c,g.Za(d)?!!d.capture:!!d,e):fba(a,b,c,!0,d,e)};
lba=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lba(a,b[f],c,d,e);else d=g.Za(d)?!!d.capture:!!d,c=xd(c),Tc(a)?a.Kc(b,c,d,e):a&&(a=yd(a))&&(b=a.FD(b,c,d,e))&&Ad(b)};
Ad=function(a){if("number"!==typeof a&&a&&!a.removed){var b=a.src;if(Tc(b))g.td(b.hm,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(iba(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jba--;(c=yd(b))?(g.td(c,a),0==c.j&&(c.src=null,b[zd]=null)):Uc(a)}}};
iba=function(a){return a in Bd?Bd[a]:Bd[a]="on"+a};
kba=function(a,b){if(a.removed)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.Dd||a.src;a.WG&&Ad(a);a=c.call(d,b)}return a};
yd=function(a){a=a[zd];return a instanceof sd?a:null};
xd=function(a){if("function"===typeof a)return a;a[Cd]||(a[Cd]=function(b){return a.handleEvent(b)});
return a[Cd]};
g.Dd=function(){g.J.call(this);this.hm=new sd(this);this.z4=this;this.HQ=null};
Fd=function(a,b,c,d){b=a.hm.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.removed&&h.capture==c){var l=h.listener,m=h.Dd||h.src;h.WG&&g.td(a.hm,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
Gd=function(a,b){this.C=a;this.D=b;this.B=0;this.j=null};
mba=function(a,b){a.D(b);100>a.B&&(a.B++,b.next=a.j,a.j=b)};
Hd=function(a){return function(){return a}};
g.Id=function(){};
nba=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
Jd=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
Kd=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};
oba=function(a,b){var c=0;return function(d){g.Ra.clearTimeout(c);var e=arguments;c=g.Ra.setTimeout(function(){a.apply(b,e)},50)}};
Nd=function(){if(void 0===Md){var a=null,b=g.Ra.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:lb,createScript:lb,createScriptURL:lb})}catch(c){g.Ra.console&&g.Ra.console.error(c.message)}Md=a}else Md=a}return Md};
g.Od=function(a,b){this.M_=a===pba&&b||"";this.n4=qba};
g.Pd=function(a){return a instanceof g.Od&&a.constructor===g.Od&&a.n4===qba?a.M_:"type_error:Const"};
Qd=function(a){return new g.Od(pba,a)};
Rd=function(a){this.UQ=a;this.En=!0};
rba=function(a){return a instanceof Rd&&a.constructor===Rd?a.UQ:"type_error:SafeScript"};
tba=function(a){var b=Nd();a=b?b.createScript(a):a;return new Rd(a,sba)};
g.Sd=function(a){this.XQ=a};
g.Td=function(a){return a instanceof g.Sd&&a.constructor===g.Sd?a.XQ:"type_error:TrustedResourceUrl"};
wba=function(a,b){var c=g.Pd(a);if(!uba.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(vba,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof g.Od?g.Pd(d):encodeURIComponent(String(d))});
return Wd(a)};
Wd=function(a){var b=Nd();a=b?b.createScriptURL(a):a;return new g.Sd(a,xba)};
g.Xd=function(a){this.WQ=a};
g.Yd=function(a){return a instanceof g.Xd&&a.constructor===g.Xd?a.WQ:"type_error:SafeUrl"};
g.$d=function(a){if(a instanceof g.Xd)return a;a="object"==typeof a&&a.En?a.Uk():String(a);yba.test(a)?a=new g.Xd(a,Zd):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(zba)?new g.Xd(a,Zd):null);return a};
Bba=function(a){if(a instanceof g.Xd)return a;a="object"==typeof a&&a.En?a.Uk():String(a);a:{var b=a;if(Aba){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new g.Xd(a,Zd)};
g.ae=function(a){this.VQ=a;this.En=!0};
be=function(a){return a instanceof g.ae&&a.constructor===g.ae?a.VQ:"type_error:SafeStyle"};
Iba=function(a){if(a instanceof g.Xd)return'url("'+g.Yd(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof g.Od)a=g.Pd(a);else{a=String(a);var b=a.replace(Cba,"$1").replace(Cba,"$1").replace(Dba,"url");if(Eba.test(b)){if(b=!Fba.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Gba(a)}a=b?Hba(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new ub("Value does not allow [{;}], got: %s.",[a]);return a};
Gba=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
Hba=function(a){return a.replace(Dba,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=(g.$d(d)||g.ce).Uk();return c+f+b+f+e})};
g.de=function(a){this.TQ=a;this.En=!0};
g.he=function(a){return a instanceof g.de&&a.constructor===g.de?a.TQ:"type_error:SafeHtml"};
Jba=function(a){return a instanceof g.de?a:g.ie(gc("object"==typeof a&&a.En?a.Uk():String(a)))};
Lba=function(a){function b(e){Array.isArray(e)?e.forEach(b):(e=Jba(e),d.push(g.he(e).toString()))}
var c=Jba(Kba),d=[];a.forEach(b);return g.ie(d.join(g.he(c).toString()))};
Mba=function(a){return Lba(Array.prototype.slice.call(arguments))};
g.ie=function(a){var b=Nd();a=b?b.createHTML(a):a;return new g.de(a,Nba)};
Oba=function(a){return be(a)};
g.Qba=function(a,b){if(Pba())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=g.he(b)};
Rba=function(a,b,c,d){a=a instanceof g.Xd?a:Bba(a);b=b||g.Ra;c=c instanceof g.Od?g.Pd(c):c||"";return void 0!==d?b.open(g.Yd(a),c,d):b.open(g.Yd(a),c)};
je=function(){a:{var a=g.Ra.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Sba.test(a))break a;a=""}return a};
Tba=function(a,b){return a+Math.random()*(b-a)};
g.ke=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.le=function(a,b){a%=b;return 0>a*b?a+b:a};
me=function(a,b,c){return a+c*(b-a)};
g.ne=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
oe=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.se=function(a,b){this.width=a;this.height=b};
g.te=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.ue=function(a){return encodeURIComponent(String(a))};
ve=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.we=function(a){return a=gc(a)};
g.xe=function(a){return null==a?"":String(a)};
ye=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
ze=function(a){var b=Number(a);return 0==b&&g.fc(a)?NaN:b};
Uba=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
Vba=function(){return"googleAvInapp".replace(/([A-Z])/g,"-$1").toLowerCase()};
Wba=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};
Xba=function(a){var b=1;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c};
Le=function(a){return a?new Je(Ke(a)):Yba||(Yba=new Je)};
Me=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Ne=function(a,b){return(b||document).getElementsByTagName(String(a))};
g.Pe=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.Oe(document,"*",a,b)};
g.Xe=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.Oe(c,"*",a,b)[0]||null}return a||null};
g.Oe=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.Bb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
Ye=function(a,b){g.Vc(b,function(c,d){c&&"object"==typeof c&&c.En&&(c=c.Uk());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Zba.hasOwnProperty(d)?a.setAttribute(Zba[d],c):ec(d,"aria-")||ec(d,"data-")?a.setAttribute(d,c):a[d]=c})};
$ba=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new g.se(a.clientWidth,a.clientHeight)};
bca=function(a){var b=aca(a);a=a.parentWindow||a.defaultView;return g.Ze&&a.pageYOffset!=b.scrollTop?new g.ne(b.scrollLeft,b.scrollTop):new g.ne(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
aca=function(a){return a.scrollingElement?a.scrollingElement:g.Qc||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement};
$e=function(a){return a?a.parentWindow||a.defaultView:window};
bf=function(a,b,c){var d=arguments,e=document,f=d[1],h=af(e,String(d[0]));f&&("string"===typeof f?h.className=f:Array.isArray(f)?h.className=f.join(" "):Ye(h,f));2<d.length&&cca(e,h,d,2);return h};
cca=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.Xa(f)||g.Za(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.Za(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){h="function"==typeof f.item;break a}}h=!1}g.Zb(h?g.Hb(f):f,e)}}};
g.kf=function(a){return af(document,a)};
af=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.lf=function(a){return document.createTextNode(String(a))};
g.mf=function(a,b){a.appendChild(b)};
g.nf=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.of=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.pf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.qf=function(a){var b;if(dca&&(b=a.parentElement))return b;b=a.parentNode;return g.Za(b)&&1==b.nodeType?b:null};
g.rf=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
Ke=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.yf=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else g.nf(a),a.appendChild(Ke(a).createTextNode(String(b)))};
zf=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!a.hasAttribute("tabindex")||eca(a)):a.hasAttribute("tabindex")&&eca(a))&&g.Ze){var c;"function"!==typeof a.getBoundingClientRect||g.Ze&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
eca=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
Bf=function(a,b,c){if(!b&&!c)return null;var d=b?String(b).toUpperCase():null;return Af(a,function(e){return(!d||e.nodeName==d)&&(!c||"string"===typeof e.className&&g.Bb(e.className.split(/\s+/),c))},!0)};
Af=function(a,b,c){a&&!c&&(a=a.parentNode);for(c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};
Je=function(a){this.j=a||g.Ra.document||document};
Df=function(a){"function"!==typeof g.Ra.setImmediate||g.Ra.Window&&g.Ra.Window.prototype&&!Ac()&&g.Ra.Window.prototype.setImmediate==g.Ra.setImmediate?(Cf||(Cf=fca()),Cf(a)):g.Ra.setImmediate(a)};
fca=function(){var a=g.Ra.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!uc("Presto")&&(a=function(){var e=g.kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.db)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!zc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.tV;c.tV=null;e()}};
return function(e){d.next={tV:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.Ra.setTimeout(e,0)}};
Ef=function(a){g.Ra.setTimeout(function(){throw a;},0)};
Ff=function(){this.B=this.j=null};
Gf=function(){this.next=this.scope=this.Ts=null};
g.Jf=function(a,b){Hf||gca();If||(Hf(),If=!0);hca.add(a,b)};
gca=function(){if(g.Ra.Promise&&g.Ra.Promise.resolve){var a=g.Ra.Promise.resolve(void 0);Hf=function(){a.then(ica)}}else Hf=function(){Df(ica)}};
ica=function(){for(var a;a=hca.remove();){try{a.Ts.call(a.scope)}catch(b){Ef(b)}mba(jca,a)}If=!1};
g.Uf=function(a){this.j=0;this.N=void 0;this.D=this.B=this.C=null;this.G=this.K=!1;if(a!=g.Id)try{var b=this;a.call(void 0,function(c){Tf(b,2,c)},function(c){Tf(b,3,c)})}catch(c){Tf(this,3,c)}};
kca=function(){this.next=this.context=this.B=this.C=this.j=null;this.D=!1};
Vf=function(a,b,c){var d=lca.get();d.C=a;d.B=b;d.context=c;return d};
Wf=function(a){if(a instanceof g.Uf)return a;var b=new g.Uf(g.Id);Tf(b,2,a);return b};
Xf=function(a){return new g.Uf(function(b,c){c(a)})};
g.nca=function(a,b,c){mca(a,b,c,null)||g.Jf(g.fb(b,a))};
oca=function(a){return new g.Uf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],g.nca(e,b,c)})};
qca=function(){var a,b,c=new g.Uf(function(d,e){a=d;b=e});
return new pca(c,a,b)};
Zf=function(a,b){b=Vf(b,b);b.D=!0;Yf(a,b);return a};
rca=function(a,b){if(0==a.j)if(a.C){var c=a.C;if(c.B){for(var d=0,e=null,f=null,h=c.B;h&&(h.D||(d++,h.j==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.j&&1==d?rca(c,b):(f?(d=f,d.next==c.D&&(c.D=d),d.next=d.next.next):sca(c),tca(c,e,3,b)))}a.C=null}else Tf(a,3,b)};
Yf=function(a,b){a.B||2!=a.j&&3!=a.j||uca(a);a.D?a.D.next=b:a.B=b;a.D=b};
vca=function(a,b,c,d){var e=Vf(null,null,null);e.j=new g.Uf(function(f,h){e.C=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.B=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof $f?h(l):f(m)}catch(n){h(n)}}:h});
e.j.C=a;Yf(a,e);return e.j};
Tf=function(a,b,c){0==a.j&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.j=1,mca(c,a.sca,a.tca,a)||(a.N=c,a.j=b,a.C=null,uca(a),3!=b||c instanceof $f||wca(a,c)))};
mca=function(a,b,c,d){if(a instanceof g.Uf)return Yf(a,Vf(b||g.Id,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(h){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(g.Za(a))try{var f=a.then;if("function"===typeof f)return xca(a,f,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
xca=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
uca=function(a){a.K||(a.K=!0,g.Jf(a.Q5,a))};
sca=function(a){var b=null;a.B&&(b=a.B,a.B=b.next,b.next=null);a.B||(a.D=null);return b};
tca=function(a,b,c,d){if(3==c&&b.B&&!b.D)for(;a&&a.G;a=a.C)a.G=!1;if(b.j)b.j.C=null,yca(b,c,d);else try{b.D?b.C.call(b.context):yca(b,c,d)}catch(e){zca.call(null,e)}mba(lca,b)};
yca=function(a,b,c){2==b?a.C.call(a.context,c):a.B&&a.B.call(a.context,c)};
wca=function(a,b){a.G=!0;g.Jf(function(){a.G&&zca.call(null,b)})};
$f=function(a){tb.call(this,a)};
pca=function(a,b,c){this.promise=a;this.resolve=b;this.reject=c};
g.ag=function(a,b){g.Dd.call(this);this.Yi=a||1;this.VF=b||g.Ra;this.nV=(0,g.db)(this.cca,this);this.VX=g.gb()};
g.bg=function(a,b,c){if("function"===typeof a)c&&(a=(0,g.db)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.db)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.Ra.setTimeout(a,b||0)};
cg=function(a,b){var c=null;return(new g.Uf(function(d,e){c=g.bg(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))})).Ek(function(d){g.Ra.clearTimeout(c);
throw d;})};
g.dg=function(a){g.J.call(this);this.N=a;this.C=0;this.D=100;this.G=!1;this.B=new Map;this.K=new Set;this.flushInterval=3E4;this.j=new g.ag(this.flushInterval);this.j.Qa("tick",this.Xx,!1,this);g.L(this,this.j)};
Aca=function(a){a.j.enabled||a.j.start();a.C++;a.C>=a.D&&a.Xx()};
Bca=function(a,b){return a.K.has(b)?void 0:a.B.get(b)};
Cca=function(a){for(var b=0;b<a.length;b++)a[b].clear()};
Dca=function(a){this.j=a;this.j.KG("/client_streamz/po/w/rl",{We:3,Ve:"mn"},{We:2,Ve:"ac"},{We:2,Ve:"sc"},{We:3,Ve:"rk"})};
Eca=function(a){this.j=a;this.j.KG("/client_streamz/po/w/el",{We:3,Ve:"en"},{We:3,Ve:"rk"})};
Fca=function(a){this.j=a;this.j.Kk("/client_streamz/po/w/cec",{We:2,Ve:"ec"},{We:3,Ve:"rk"})};
Gca=function(a){this.j=a;this.j.Kk("/client_streamz/po/w/csc",{We:2,Ve:"cs"},{We:3,Ve:"rk"})};
Hca=function(a){this.j=a;this.j.Kk("/client_streamz/po/w/ctav",{We:3,Ve:"av"},{We:3,Ve:"rk"})};
Ica=function(a){this.j=a;this.j.Kk("/client_streamz/po/w/cwsc",{We:3,Ve:"su"},{We:3,Ve:"rk"})};
og=function(){throw Error("Invalid UTF8");};
Jca=function(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b};
Nca=function(a){var b=!1;b=void 0===b?!1:b;if(Kca){if(b&&(Lca?!a.j():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(Mca||(Mca=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(128>f)d[c++]=f;else{if(2048>f)d[c++]=f>>6|192;else{if(55296<=f&&57343>=f){if(56319>=f&&e<a.length){var h=a.charCodeAt(++e);if(56320<=h&&57343>=h){f=1024*(f-55296)+h-56320+65536;
d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a};
Oca=function(a){return Array.prototype.map.call(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};
Pca=function(a){for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
g.pg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
g.qg=function(a,b){void 0===b&&(b=0);Qca();b=Rca[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var h=a[e],l=a[e+1],m=a[e+2],n=b[h>>2];h=b[(h&3)<<4|l>>4];l=b[(l&15)<<2|m>>6];m=b[m&63];c[f++]=""+n+h+l+m}n=0;m=d;switch(a.length-e){case 2:n=a[e+1],m=b[(n&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|n>>4]+m+d}return c.join("")};
g.rg=function(a,b){if(Sca&&!b)a=g.Ra.btoa(a);else{for(var c=[],d=0,e=0;e<a.length;e++){var f=a.charCodeAt(e);255<f&&(c[d++]=f&255,f>>=8);c[d++]=f}a=g.qg(c,b)}return a};
Uca=function(a){var b=[];Tca(a,function(c){b.push(c)});
return b};
sg=function(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):g.hc("=.",a[b-1])&&(c=g.hc("=.",a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Tca(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d};
Tca=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),p=tg[n];if(null!=p)return p;if(!g.fc(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
Qca();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
Qca=function(){if(!tg){tg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Rca[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===tg[f]&&(tg[f]=e)}}}};
Wca=function(a){if(!Vca)return g.qg(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)};
Yca=function(a){return Xca[a]||""};
$ca=function(a){if(!Vca)return sg(a);Zca.test(a)&&(a=a.replace(Zca,Yca));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
ug=function(a){return ada&&null!=a&&a instanceof Uint8Array};
vg=function(){return bda||(bda=new Uint8Array(0))};
cda=function(a){if(a!==wg)throw Error("illegal external caller");};
xg=function(a,b){cda(b);this.Wd=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};
yg=function(){return dda||(dda=new xg(null,wg))};
eda=function(a){var b=a.Wd;return null==b?"":"string"===typeof b?b:a.Wd=Wca(b)};
Ag=function(a){return(a=zg(a))?new Uint8Array(a):vg()};
zg=function(a){cda(wg);var b=a.Wd;b=null==b||ug(b)?b:"string"===typeof b?$ca(b):null;return null==b?b:a.Wd=b};
fda=function(a,b){return Error("Invalid wire type: "+a+" (at position "+b+")")};
Bg=function(){return Error("Failed to read varint, encoding is invalid.")};
gda=function(a,b){return Error("Tried to read past the end of the data "+b+" > "+a)};
hda=function(a){return 0==a.length?yg():new xg(a,wg)};
Cg=function(a){if("string"===typeof a)return{buffer:$ca(a),Yv:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),Yv:!1};if(a.constructor===Uint8Array)return{buffer:a,Yv:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),Yv:!1};if(a.constructor===xg)return{buffer:zg(a)||vg(),Yv:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),Yv:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
Dg=function(){return"function"===typeof BigInt};
Hg=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=g.v(Eg(c,a)),b=c.next().value,a=c.next().value,c=b);Fg=c>>>0;Gg=a>>>0};
ida=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=4294967296*b+(a>>>0);return c?-a:a};
Ig=function(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Dg()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+jda(c)+jda(a));return c};
jda=function(a){a=String(a);return"0000000".slice(a.length)+a};
kda=function(){var a=Fg,b=Gg;b&2147483648?Dg()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=g.v(Eg(a,b)),a=b.next().value,b=b.next().value,a="-"+Ig(a,b)):a=Ig(a,b);return a};
Jg=function(a){if(16>a.length)Hg(Number(a));else if(Dg())a=BigInt(a),Fg=Number(a&BigInt(4294967295))>>>0,Gg=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+("-"===a[0]);Gg=Fg=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Gg*=1E6,Fg=1E6*Fg+d,4294967296<=Fg&&(Gg+=Math.trunc(Fg/4294967296),Gg>>>=0,Fg>>>=0);b&&(b=g.v(Eg(Fg,Gg)),a=b.next().value,b=b.next().value,Fg=a,Gg=b)}};
Eg=function(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};
lda=function(a,b){this.B=null;this.G=!1;this.j=this.C=this.D=0;this.init(a,void 0,void 0,b)};
Xg=function(a){var b=0,c=0,d=0,e=a.B,f=a.j;do{var h=e[f++];b|=(h&127)<<d;d+=7}while(32>d&&h&128);32<d&&(c|=(h&127)>>4);for(d=3;32>d&&h&128;d+=7)h=e[f++],c|=(h&127)<<d;Wg(a,f);if(128>h)return ida(b>>>0,c>>>0);throw Bg();};
Wg=function(a,b){a.j=b;if(b>a.C)throw gda(a.C,b);};
Yg=function(a){var b=a.B,c=a.j,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Bg();Wg(a,c);return e};
Zg=function(a){var b=a.B,c=a.j,d=b[c+0],e=b[c+1],f=b[c+2];b=b[c+3];a.advance(4);return(d<<0|e<<8|f<<16|b<<24)>>>0};
$g=function(a){var b=Zg(a);return 4294967296*Zg(a)+(b>>>0)};
ah=function(a){var b=Zg(a),c=Zg(a);a=2*(c>>31)+1;var d=c>>>20&2047;b=4294967296*(c&1048575)+b;return 2047==d?b?NaN:Infinity*a:0==d?a*Math.pow(2,-1074)*b:a*Math.pow(2,d-1075)*(b+4503599627370496)};
bh=function(a){for(var b=0,c=a.j,d=c+10,e=a.B;c<d;){var f=e[c++];b|=f;if(0===(f&128))return Wg(a,c),!!(b&127)}throw Bg();};
mda=function(a,b){if(0>b)throw Error("Tried to read a negative byte length: "+b);var c=a.j,d=c+b;if(d>a.C)throw gda(b,a.C-c);a.j=d;return c};
oda=function(a,b){if(0==b)return yg();var c=mda(a,b);a.LG&&a.G?c=a.B.subarray(c,c+b):(a=a.B,b=c+b,c=c===b?vg():nda?a.slice(c,b):new Uint8Array(a.subarray(c,b)));return hda(c)};
dh=function(a,b){if(ch.length){var c=ch.pop();c.init(a,void 0,void 0,b);a=c}else a=new lda(a,b);this.j=a;this.C=this.j.j;this.B=this.D=-1;pda(this,b)};
pda=function(a,b){b=void 0===b?{}:b;a.uN=void 0===b.uN?!1:b.uN};
qda=function(a){var b=a.j;if(b.j==b.C)return!1;a.C=a.j.j;var c=Yg(a.j)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw fda(c,a.C);if(1>b)throw Error("Invalid field number: "+b+" (at position "+a.C+")");a.D=b;a.B=c;return!0};
eh=function(a){switch(a.B){case 0:0!=a.B?eh(a):bh(a.j);break;case 1:a.j.advance(8);break;case 2:if(2!=a.B)eh(a);else{var b=Yg(a.j)>>>0;a.j.advance(b)}break;case 5:a.j.advance(4);break;case 3:b=a.D;do{if(!qda(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.B){if(a.D!=b)throw Error("Unmatched end-group tag");break}eh(a)}while(1);break;default:throw fda(a.B,a.C);}};
fh=function(a,b,c){var d=a.j.C,e=Yg(a.j)>>>0,f=a.j.j+e,h=f-d;0>=h&&(a.j.C=f,c(b,a,void 0,void 0,void 0),h=f-a.j.j);if(h)throw Error("Message parsing ended unexpectedly. Expected to read "+(e+" bytes, instead read "+(e-h)+" bytes, either the data ended unexpectedly or the message misreported its own length"));a.j.j=f;a.j.C=d};
ih=function(a){var b=Yg(a.j)>>>0;a=a.j;var c=mda(a,b);a=a.B;if(rda){var d=a,e;(e=gh)||(e=gh=new TextDecoder("utf-8",{fatal:!0}));a=c+b;d=0===c&&a===d.length?d:d.subarray(c,a);try{var f=e.decode(d)}catch(n){if(void 0===hh){try{e.decode(new Uint8Array([128]))}catch(p){}try{e.decode(new Uint8Array([97])),hh=!0}catch(p){hh=!1}}!hh&&(gh=void 0);throw n;}}else{f=c;b=f+b;c=[];for(var h=null,l,m;f<b;)l=a[f++],128>l?c.push(l):224>l?f>=b?og():(m=a[f++],194>l||128!==(m&192)?(f--,og()):c.push((l&31)<<6|m&63)):
240>l?f>=b-1?og():(m=a[f++],128!==(m&192)||224===l&&160>m||237===l&&160<=m||128!==((d=a[f++])&192)?(f--,og()):c.push((l&15)<<12|(m&63)<<6|d&63)):244>=l?f>=b-2?og():(m=a[f++],128!==(m&192)||0!==(l<<28)+(m-144)>>30||128!==((d=a[f++])&192)||128!==((e=a[f++])&192)?(f--,og()):(l=(l&7)<<18|(m&63)<<12|(d&63)<<6|e&63,l-=65536,c.push((l>>10&1023)+55296,(l&1023)+56320))):og(),8192<=c.length&&(h=Jca(h,c),c.length=0);f=Jca(h,c)}return f};
sda=function(a){var b=Yg(a.j)>>>0;return oda(a.j,b)};
tda=function(a,b){this.B=a>>>0;this.j=b>>>0};
vda=function(a){if(!a)return uda||(uda=new tda(0,0));if(!/^\d+$/.test(a))return null;Jg(a);return new tda(Fg,Gg)};
wda=function(a,b){this.B=a>>>0;this.j=b>>>0};
yda=function(a){if(!a)return xda||(xda=new wda(0,0));if(!/^-?\d+$/.test(a))return null;Jg(a);return new wda(Fg,Gg)};
jh=function(){this.j=[]};
zda=function(a,b,c){for(;0<c||127<b;)a.j.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.j.push(b)};
kh=function(a,b){for(;127<b;)a.j.push(b&127|128),b>>>=7;a.j.push(b)};
Ada=function(a,b){if(0<=b)kh(a,b);else{for(var c=0;9>c;c++)a.j.push(b&127|128),b>>=7;a.j.push(1)}};
Fh=function(a,b){a.j.push(b>>>0&255);a.j.push(b>>>8&255);a.j.push(b>>>16&255);a.j.push(b>>>24&255)};
Bda=function(){this.C=[];this.B=0;this.j=new jh};
Gh=function(a,b){0!==b.length&&(a.C.push(b),a.B+=b.length)};
Hh=function(a,b,c){kh(a.j,8*b+c)};
Cda=function(a,b,c){null!=c&&("string"===typeof c&&vda(c),Hh(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Fg=b,Gg=c,Fh(a,Fg),Fh(a,Gg)):(c=vda(c),a=a.j,b=c.j,Fh(a,c.B),Fh(a,b)))};
Ih=function(a,b,c){Hh(a,b,2);kh(a.j,c.length);Gh(a,a.j.end());Gh(a,c)};
Jh=function(a,b,c,d){this.iL=a;this.jL=b;this.j=c;this.V0=d};
Kh=function(a){return Array.prototype.slice.call(a)};
Dda=function(a){var b=Lh(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Kh(a)),Mh(a,b|1))};
Nh=function(a,b,c){return c?a|b:a&~b};
Eda=function(){var a=[];Oh(a,1);return a};
Fda=function(a,b){Mh(b,(a|0)&-14591)};
Ph=function(a,b){Mh(b,(a|34)&-14557)};
Qh=function(a){a=a>>14&1023;return 0===a?536870912:a};
Hda=function(a){return!(!a||"object"!==typeof a||a.rjb!==Gda)};
Rh=function(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object};
Sh=function(a,b,c,d){if(null==a){if(!c)throw Error();}else if("string"===typeof a)a=a?new xg(a,wg):yg();else if(a.constructor!==xg)if(ug(a))a=d?hda(a):a.length?new xg(new Uint8Array(a),wg):yg();else{if(!b)throw Error();a=void 0}return a};
Th=function(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Lh(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Mh(a,d|1);return!0};
Uh=function(a){if(a&2)throw Error();};
Ida=function(a,b){if("number"!==typeof b||0>b||b>=a.length)throw Error();};
Jda=function(a,b){(b=Vh?b[Vh]:void 0)&&(a[Vh]=Kh(b))};
Wh=function(){var a=Error();Aaa(a,"incident");Ef(a)};
Xh=function(a){a=Error(a);Aaa(a,"warning");return a};
Yh=function(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number, found "+typeof a+": "+a);return a};
Kda=function(a){if(null==a)return a;if("number"===typeof a||"NaN"===a||"Infinity"===a||"-Infinity"===a)return Number(a)};
Lda=function(a){return a.displayName||a.name||"unknown type name"};
Mda=function(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Wa(a)+": "+a);return a};
Nda=function(a){if(null==a||"boolean"===typeof a)return a;if("number"===typeof a)return!!a};
pi=function(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Oda.test(a)};
qi=function(a){Number.isFinite(a)||Wh();return a};
Pda=function(a){return a};
Qda=function(a){if("number"!==typeof a)throw Xh("int32");Number.isFinite(a)||Wh();return a};
ri=function(a){return null==a?a:Qda(a)};
si=function(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a};
ti=function(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a};
Sda=function(a,b){b=!!b;if(!pi(a))throw Xh("int64");return"string"===typeof a?ui(a):b?Rda(a):vi(a)};
wi=function(a){return null==a?a:Sda(a)};
xi=function(a){return"-"===a[0]?!1:20>a.length?!0:20===a.length&&184467>Number(a.substring(0,6))};
Tda=function(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))};
Uda=function(a){if(0>a){Hg(a);var b=Ig(Fg,Gg);a=Number(b);return Number.isSafeInteger(a)?a:b}if(xi(String(a)))return a;Hg(a);return 4294967296*Gg+(Fg>>>0)};
vi=function(a){pi(a);a=Math.trunc(a);Number.isSafeInteger(a)||(Hg(a),a=ida(Fg,Gg));return a};
yi=function(a){pi(a);a=Math.trunc(a);return 0<=a&&Number.isSafeInteger(a)?a:Uda(a)};
Rda=function(a){pi(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Tda(b)?a=b:(Hg(a),a=kda())}return a};
ui=function(a){pi(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));Tda(a)||(Jg(a),a=kda());return a};
zi=function(a){pi(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b)&&0<=b)return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));xi(a)||(Jg(a),a=Ig(Fg,Gg));return a};
Vda=function(a){var b=!!b;if(!pi(a))throw Xh("uint64");"string"===typeof a?a=zi(a):b?(pi(a),a=Math.trunc(a),0<=a&&Number.isSafeInteger(a)?a=String(a):(b=String(a),xi(b)?a=b:(Hg(a),a=Ig(Fg,Gg)))):a=yi(a);return a};
Wda=function(a){if(null==a)return a;if(pi(a)){if("string"===typeof a)return zi(a);if("number"===typeof a)return yi(a)}};
Xda=function(a){if(null==a||"string"===typeof a||ug(a)||a instanceof xg)return a};
Ai=function(a){if("string"!==typeof a)throw Error();return a};
Bi=function(a){if(null!=a&&"string"!==typeof a)throw Error();return a};
Ci=function(a){return null==a||"string"===typeof a?a:void 0};
Di=function(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Lda(b)+" but got "+(a&&Lda(a.constructor)));return a};
Yda=function(a,b,c){if(null!=a&&"object"===typeof a&&a.iJ===Ei)return a;if(Array.isArray(a)){var d=Lh(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Mh(a,e);return new b(a)}};
Gi=function(a,b){Fi=b;a=new a(b);Fi=void 0;return a};
Zi=function(a){switch(typeof a){case "boolean":return Hi||(Hi=[0,void 0,!0]);case "number":return 0<a?void 0:0===a?Zda||(Zda=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}};
M=function(a,b,c){null==a&&(a=Fi);Fi=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Lh(a);if(d&64)return $i&&delete a[$i],a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=d;if(d=a.length){var e=d-1;if(Rh(a[e])){c|=256;b=e-(+!!(c&512)-1);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,d-(+!!(c&512)-1));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}Mh(a,d);return a};
aea=function(a,b){return $da(b)};
$da=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return bea||!Th(a,void 0,9999)?a:void 0;if(ug(a))return Wca(a);if(a instanceof xg)return eda(a)}}return a};
cea=function(a,b,c){var d=Kh(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var h in f)b[h]=c(f[h])}Jda(d,a);return d};
dea=function(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Lh(a)&1?void 0:f&&Lh(a)&2?a:aj(a,b,c,void 0!==d,e,f);else if(Rh(a)){var h={},l;for(l in a)h[l]=dea(a[l],b,c,d,e,f);a=h}else a=b(a,d);return a}};
aj=function(a,b,c,d,e,f){var h=d||c?Lh(a):0;d=d?!!(h&32):void 0;for(var l=Kh(a),m=0;m<l.length;m++)l[m]=dea(l[m],b,c,d,e,f);c&&(Jda(l,a),c(h,l));return l};
eea=function(a){return a.iJ===Ei?a.toJSON():$da(a)};
fea=function(a,b,c){c=void 0===c?Ph:c;if(null!=a){if(ada&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Lh(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Mh(a,(d|34)&-12293),a):aj(a,fea,d&4?Ph:c,!0,!1,!0)}a.iJ===Ei&&(c=a.ea,d=bj(c),a=d&2?a:Gi(a.constructor,cj(c,d,!0)));return a}};
cj=function(a,b,c){var d=c||b&2?Ph:Fda,e=!!(b&32);a=cea(a,b,function(f){return fea(f,e,d)});
Oh(a,32|(c?2:0));return a};
dj=function(a){var b=a.ea,c=bj(b);return c&2?Gi(a.constructor,cj(b,c,!1)):a};
fj=function(a,b){a=a.ea;return ej(a,bj(a),b)};
ej=function(a,b,c,d){if(-1===c)return null;if(c>=Qh(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}};
hj=function(a,b,c){var d=a.ea,e=bj(d);Uh(e);gj(d,e,b,c);return a};
gj=function(a,b,c,d,e){var f=Qh(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Mh(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b};
ij=function(a,b,c){return void 0!==gea(a,b,c,!1)};
lj=function(a,b,c,d,e){var f=b&2,h=ej(a,b,c,e);Array.isArray(h)||(h=jj);var l=!(d&2);d=!(d&1);var m=!!(b&32),n=Lh(h);0!==n||!m||f||l?n&1||(n|=1,Mh(h,n)):(n|=33,Mh(h,n));f?(a=!1,n&2||(Oh(h,34),a=!!(4&n)),(d||a)&&Object.freeze(h)):(f=!!(2&n)||!!(2048&n),d&&f?(h=Kh(h),d=1,m&&!l&&(d|=32),Mh(h,d),gj(a,b,c,h,e)):l&&n&32&&!f&&kj(h,32));return h};
nj=function(a,b,c,d,e,f){e=void 0===e?2:e;a=a.ea;var h=bj(a);2&h&&(e=1);f=!!f;var l=lj(a,h,b,1|(f?2:0),d);h=bj(a);var m=Lh(l),n=m,p=!!(2&m),q=!!(4&m),r=p&&q;if(!(4&m)){q&&(l=Kh(l),n=0,m=mj(m,h,f),p=!!(2&m),h=gj(a,h,b,l,d));for(var t=q=0;q<l.length;q++){var u=c(l[q]);null!=u&&(l[t++]=u)}t<q&&(l.length=t);c=Nh(m,4096,!1);m=c=Nh(c,8192,!1);m=Nh(m,20,!0)}r||((c=1===e)&&(m=Nh(m,2,!0)),m!==n&&Mh(l,m),(c||p)&&Object.freeze(l));2===e&&p&&(l=Kh(l),m=mj(m,h,f),Mh(l,m),gj(a,h,b,l,d));return l};
hea=function(a){return Sh(a,!0,!0,!0)};
iea=function(a){return Sh(a,!0,!0,!1)};
oj=function(a,b){a=a.ea;var c=bj(a),d=ej(a,c,b),e=Sh(d,!0,!0,!!(c&34));null!=e&&e!==d&&gj(a,c,b,e);return null==e?yg():e};
pj=function(a,b,c,d){var e=a.ea,f=bj(e);Uh(f);if(null==c)return gj(e,f,b),a;var h=Lh(c),l=h,m=!!(2&h)||Object.isFrozen(c),n=!m&&!1;if(!(4&h))for(h=21,m&&(c=Kh(c),l=0,h=mj(h,f,!0)),m=0;m<c.length;m++)c[m]=d(c[m]);n&&(c=Kh(c),l=0,h=mj(h,f,!0));h!==l&&Mh(c,h);gj(e,f,b,c);return a};
qj=function(a,b,c,d){var e=a.ea,f=bj(e);Uh(f);gj(e,f,b,("0"===d?0===Number(c):c===d)?void 0:c);return a};
Dj=function(a,b,c,d,e){Cj(a.ea,b,c,d,e);return a};
Cj=function(a,b,c,d,e){var f=bj(a);Uh(f);a=lj(a,f,b,2);b=Lh(a);d=c(d,!!(4&b)&&!!(4096&b));void 0!=e?a.splice(e,0,d):a.push(d)};
jea=function(a){return a};
kea=function(a,b,c,d,e,f){Uh(bj(a.ea));b=f(a,b,void 0,2,!0);if("number"!==typeof d||0>d||d>b.length)throw Error();f=Lh(b);b[d]=c(e,!!(4&f)&&!!(4096&f));return a};
Fj=function(a,b,c,d){var e=a.ea,f=bj(e);Uh(f);(c=Ej(e,f,c))&&c!==b&&null!=d&&(f=gj(e,f,c));gj(e,f,b,d);return a};
Gj=function(a,b,c,d){var e=bj(a);Uh(e);(c=Ej(a,e,c))&&c!==b&&(e=gj(a,e,c));gj(a,e,b,d)};
Hj=function(a,b,c){a=a.ea;return Ej(a,bj(a),b)===c?c:-1};
Ej=function(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=ej(a,b,f)&&(0!==d&&(b=gj(a,b,d)),d=f)}return d};
Ij=function(a,b,c,d){var e=bj(a);Uh(e);var f=ej(a,e,c,d),h;if(null!=f&&f.iJ===Ei)return b=dj(f),b!==f&&gj(a,e,c,b,d),b.ea;if(Array.isArray(f)){var l=Lh(f);l&2?h=cj(f,l,!1):h=f;h=M(h,b[0],b[1])}else h=M(void 0,b[0],b[1]);h!==f&&gj(a,e,c,h,d);return h};
gea=function(a,b,c,d){a=a.ea;var e=bj(a),f=ej(a,e,c,d);b=Yda(f,b,e);b!==f&&null!=b&&gj(a,e,c,b,d);return b};
g.Jj=function(a,b,c,d){d=void 0===d?!1:d;b=gea(a,b,c,d);if(null==b)return b;a=a.ea;var e=bj(a);if(!(e&2)){var f=dj(b);f!==b&&(b=f,gj(a,e,c,b,d))}return b};
lea=function(a,b,c,d,e,f,h){var l=1===e;e=2===e;f=!!f;var m=!!(2&b)&&e,n=lj(a,b,d,3);b=bj(a);var p=Lh(n),q=!!(2&p),r=!!(4&p),t=!!(32&p),u=q&&r||!!(2048&p);if(!r){var x=n,B=b,F;(F=!!(2&p))&&(B=Nh(B,2,!0));for(var G=!F,H=!0,O=0,P=0;O<x.length;O++){var Y=Yda(x[O],c,B);if(Y instanceof c){if(!F){var la=!!(Lh(Y.ea)&2);G&&(G=!la);H&&(H=la)}x[P++]=Y}}P<O&&(x.length=P);p=Nh(p,4,!0);p=Nh(p,16,H);p=Nh(p,8,G);Mh(x,p);q&&!m&&(Object.freeze(n),u=!0)}c=p;m=!!(8&p)||l&&!n.length;if(h&&!m){u&&(n=Kh(n),u=!1,c=0,p=
mj(p,b,f),b=gj(a,b,d,n));h=n;m=p;for(q=0;q<h.length;q++)x=h[q],p=dj(x),x!==p&&(h[q]=p);m=Nh(m,8,!0);p=m=Nh(m,16,!h.length)}u||(l?p=Nh(p,!n.length||16&p&&(!r||t)?2:2048,!0):f||(p=Nh(p,32,!1)),p!==c&&Mh(n,p),l&&(Object.freeze(n),u=!0));e&&u&&(n=Kh(n),p=mj(p,b,f),Mh(n,p),gj(a,b,d,n));return n};
mea=function(a,b){a=a.ea;var c=bj(a),d=!!(2&c);return lea(a,c,b,3,d?1:2,!1,!d)};
Kj=function(a,b,c,d){null!=d?Di(d,b):d=void 0;return hj(a,c,d)};
Lj=function(a,b,c,d,e){null!=e?Di(e,b):e=void 0;return Fj(a,c,d,e)};
Mj=function(a,b,c,d){var e=a.ea,f=bj(e);Uh(f);if(null==d)return gj(e,f,c),a;for(var h=Lh(d),l=h,m=!!(2&h)||!!(2048&h),n=m||Object.isFrozen(d),p=!n&&!1,q=!0,r=!0,t=0;t<d.length;t++){var u=d[t];Di(u,b);m||(u=!!(Lh(u.ea)&2),q&&(q=!u),r&&(r=u))}m||(h=Nh(h,5,!0),h=Nh(h,8,q),h=Nh(h,16,r));if(p||n&&h!==l)d=Kh(d),l=0,h=mj(h,f,!0);h!==l&&Mh(d,h);gj(e,f,c,d);return a};
mj=function(a,b,c){a=Nh(a,2,!!(2&b));a=Nh(a,32,!!(32&b)&&c);return a=Nh(a,2048,!1)};
Nj=function(a,b,c,d,e){var f=a.ea,h=bj(f);Uh(h);b=lea(f,h,c,b,2);c=null!=d?Di(d,c):new c;void 0!=e?b.splice(e,void 0,c):b.push(c);Lh(c.ea)&2?kj(b,8):kj(b,16);return a};
Oj=function(a,b){a=fj(a,b);var c;null==a?c=a:pi(a)?"number"===typeof a?c=vi(a):c=ui(a):c=void 0;return c};
nea=function(a){a=fj(a,1);var b=void 0===b?!1:b;b=null==a?a:pi(a)?"string"===typeof a?ui(a):b?Rda(a):vi(a):void 0;return b};
Pj=function(a,b){return Ci(fj(a,b))};
oea=function(a,b,c,d,e){return nj(a,b,Ci,c,d,e)};
pea=function(a,b,c,d,e){return nj(a,b,Pda,c,d,e)};
Qj=function(a,b){return null!=a?a:b};
qea=function(a){return Sh(a,!1,!1,!1)};
Rj=function(a,b,c){c=void 0===c?0:c;return Qj(si(fj(a,b)),c)};
Sj=function(a,b){var c=void 0===c?0:c;return Qj(ti(fj(a,b)),c)};
rea=function(a,b){var c=void 0===c?0:c;return Qj(Oj(a,b),c)};
Tj=function(a,b){var c=void 0===c?0:c;a=fj(a,b);a=null==a?a:pi(a)?"number"===typeof a?yi(a):zi(a):void 0;return Qj(a,c)};
sea=function(a,b){var c=void 0===c?0:c;a=a.ea;var d=bj(a),e=ej(a,d,b),f=Kda(e);null!=f&&f!==e&&gj(a,d,b,f);return Qj(f,c)};
g.Uj=function(a,b){return Qj(Pj(a,b),"")};
Vj=function(a,b){return Qj(fj(a,b),0)};
tea=function(a,b,c){a=pea(a,b,void 0,3,!0);Ida(a,c);return a[c]};
Wj=function(a,b,c){return hj(a,b,null==c?c:Mda(c))};
Xj=function(a,b,c){return hj(a,b,ri(c))};
Yj=function(a,b,c){if(null!=c){if("number"!==typeof c)throw Xh("uint32");Number.isFinite(c)||Wh()}hj(a,b,c)};
Zj=function(a,b,c){return hj(a,b,wi(c))};
ak=function(a,b,c){hj(a,b,null==c?c:Vda(c))};
xk=function(a,b,c){return hj(a,b,Yh(c))};
N=function(a,b,c){return hj(a,b,Bi(c))};
yk=function(a,b,c){return qj(a,b,Bi(c),"")};
zk=function(a,b,c){return hj(a,b,Sh(c,!1,!0,!1))};
Q=function(a,b,c){return hj(a,b,null==c?c:qi(c))};
Ak=function(a,b,c,d){Fj(a,b,c,null==d?d:qi(d))};
R=function(a,b,c){this.ea=M(a,b,c)};
uea=function(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Oh(b,32);return Gi(a,b)};
Bk=function(a,b,c){var d=a.constructor.yb,e=bj(c?a.ea:b),f=Qh(e),h=!1;if(d&&bea){if(!c){b=Kh(b);var l;if(b.length&&Rh(l=b[b.length-1]))for(h=0;h<d.length;h++)if(d[h]>=f){Object.assign(b[b.length-1]={},l);break}h=!0}f=b;c=!c;l=bj(a.ea);a=Qh(l);l=+!!(l&512)-1;for(var m,n,p=0;p<d.length;p++)if(n=d[p],n<a){n+=l;var q=f[n];null==q?f[n]=c?jj:Eda():c&&q!==jj&&Dda(q)}else m||(q=void 0,f.length&&Rh(q=f[f.length-1])?m=q:f.push(m={})),q=m[n],null==m[n]?m[n]=c?jj:Eda():c&&q!==jj&&Dda(q)}m=b.length;if(!m)return b;
var r;if(Rh(f=b[m-1])){a:{var t=f;c={};a=!1;for(var u in t){l=t[u];if(Array.isArray(l)){p=l;if(!vea&&Th(l,d,+u)||!wea&&Hda(l)&&0===l.size)l=null;l!=p&&(a=!0)}null!=l?c[u]=l:a=!0}if(a){for(var x in c){t=c;break a}t=null}}t!=f&&(r=!0);m--}for(e=+!!(e&512)-1;0<m;m--){u=m-1;f=b[u];if(!(null==f||!vea&&Th(f,d,u-e)||!wea&&Hda(f)&&0===f.size))break;var B=!0}if(!r&&!B)return b;var F;h?F=b:F=Array.prototype.slice.call(b,0,m);b=F;h&&(b.length=m);t&&b.push(t);return b};
yea=function(a){return Array.isArray(a)?a[0]instanceof Jh?a:[xea,a]:[a,void 0]};
Ck=function(a,b,c){if(Array.isArray(b)){var d=Lh(b);if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var h=a(b[e]);null!=h&&(b[f++]=h)}f<e&&(b.length=f);c&&(Mh(b,(d|5)&-12289),d&2&&Object.freeze(b));return b}};
Gk=function(a){var b=a[zea];if(!b){var c=Aea(a),d=Dk(a),e=d.j;b=e?function(f,h){return e(f,h,d)}:function(f,h){for(;qda(h)&&4!=h.B;){var l=h.D,m=d[l];
if(!m){var n=d.extensions;n&&(n=n[l])&&(m=d[l]=Bea(n))}m&&m(h,f,l)||(m=h,l=m.C,eh(m),m.uN?m=void 0:(n=m.j.j-l,m.j.j=l,m=oda(m.j,n)),l=f,m&&(Vh||(Vh=Symbol()),(n=l[Vh])?n.push(m):l[Vh]=[m]))}c===Ek||c===Fk||c.paa||(f[$i||($i=Symbol())]=c)};
a[zea]=b}return b};
Bea=function(a){a=yea(a);var b=a[0].iL;if(a=a[1]){var c=Gk(a),d=Dk(a).qA;return function(e,f,h){return b(e,f,h,d,c)}}return b};
Cea=function(a,b,c){var d=c[1];if(d){var e=d[Hk];var f=e?e.qA:Zi(d[0]);a[b]=null!=e?e:d}f&&f===Hi?(a.nY||(a.nY=[])).push(b):c[0]&&(a.VZ||(a.VZ=[])).push(b)};
Dea=function(a,b){return[a.j,!b||0<b[0]?void 0:b]};
Aea=function(a){var b=a[Hk];if(b)return b;b=Ik(a,a[Hk]={},Dea,Dea,Cea);if(!b.VZ&&!b.nY){var c=!0,d;for(d in b){isNaN(d)||(c=!1);break}c?(b=Zi(a[0])===Hi,b=a[Hk]=b?Fk||(Fk={qA:Zi(!0)}):Ek||(Ek={})):b.paa=!0}return b};
Eea=function(a,b,c){a[b]=c};
Ik=function(a,b,c,d,e){e=void 0===e?Eea:e;b.qA=Zi(a[0]);var f=0,h=a[++f];h&&h.constructor===Object&&(b.extensions=h,h=a[++f],"function"===typeof h&&(b.j=h,b.B=a[++f],h=a[++f]));for(var l={};Array.isArray(h)&&"number"===typeof h[0]&&0<h[0];){for(var m=0;m<h.length;m++)l[h[m]]=h;h=a[++f]}for(m=1;void 0!==h;){"number"===typeof h&&(m+=h,h=a[++f]);var n=void 0;if(h instanceof Jh)var p=h;else p=Fea,f--;if(p.V0){h=a[++f];n=a;var q=f;"function"==typeof h&&(h=h(),n[q]=h);n=h}h=a[++f];q=m+1;"number"===typeof h&&
0>h&&(q-=h,h=a[++f]);for(;m<q;m++){var r=l[m];e(b,m,n?d(p,n,r):c(p,r))}}return b};
Iea=function(a){var b=a[Gea];if(!b){var c=Jk(a);b=function(d,e){return Hea(d,e,c)};
a[Gea]=b}return b};
Jea=function(a){return a.jL};
Kea=function(a,b){var c,d,e=a.jL;return function(f,h,l){return e(f,h,l,d||(d=Jk(b).qA),c||(c=Iea(b)))}};
Jk=function(a){var b=a[Kk];if(b)return b;b=Ik(a,a[Kk]={},Jea,Kea);Lk in a&&Kk in a&&(a.length=0);return b};
Lea=function(a,b){var c=a.iL;return b?function(d,e,f){return c(d,e,f,b)}:c};
Mea=function(a,b,c){var d=a.iL,e,f;return function(h,l,m){return d(h,l,m,f||(f=Dk(b).qA),e||(e=Gk(b)),c)}};
Dk=function(a){var b=a[Lk];if(b)return b;Aea(a);b=Ik(a,a[Lk]={},Lea,Mea);Lk in a&&Kk in a&&(a.length=0);return b};
Nea=function(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=yea(c);var d=c[0].jL;if(c=c[1]){var e=Iea(c),f=Jk(c).qA;c=(c=a.B)?c(f,e):function(h,l,m){return d(h,l,m,f,e)}}else c=d;
return a[b]=c}};
Hea=function(a,b,c){for(var d=bj(a),e=+!!(d&512)-1,f=a.length,h=f+(d&256?-1:0),l=d&512?1:0;l<h;l++){var m=a[l];if(null!=m){var n=l-e,p=Nea(c,n);p&&p(b,m,n)}}if(d&256){d=a[f-1];for(var q in d)e=+q,Number.isNaN(e)||(f=d[q],null!=f&&(h=Nea(c,e))&&h(b,f,e))}if(a=Vh?a[Vh]:void 0)for(Gh(b,b.j.end()),c=0;c<a.length;c++)Gh(b,zg(a[c])||vg())};
Mk=function(a,b){return new Jh(a,b,!1,!1)};
Nk=function(a,b){return new Jh(a,b,!0,!1)};
Ok=function(a,b,c){gj(a,bj(a),b,c)};
Pk=function(a,b,c){b=Kda(b);null!=b&&(Hh(a,c,1),a=a.j,c=Oea||(Oea=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Fg=c.getUint32(0,!0),Gg=c.getUint32(4,!0),Fh(a,Fg),Fh(a,Gg))};
Qk=function(a,b,c){a:if(null!=b){if(pi(b)){if("string"===typeof b){b=ui(b);break a}if("number"===typeof b){b=vi(b);break a}}b=void 0}null!=b&&("string"===typeof b&&yda(b),null!=b&&(Hh(a,c,0),"number"===typeof b?(a=a.j,Hg(b),zda(a,Fg,Gg)):(c=yda(b),zda(a.j,c.B,c.j))))};
Rk=function(a,b,c){b=si(b);null!=b&&null!=b&&(Hh(a,c,0),Ada(a.j,b))};
Pea=function(a,b,c){b=Nda(b);null!=b&&(Hh(a,c,0),a.j.j.push(b?1:0))};
Qea=function(a,b,c){b=Ci(b);null!=b&&Ih(a,c,Nca(b))};
Sk=function(a,b,c,d,e){b=b instanceof R?b.ea:Array.isArray(b)?M(b,d[0],d[1]):void 0;if(null!=b){Hh(a,c,2);c=a.j.end();Gh(a,c);c.push(a.B);e(b,a);e=c.pop();for(e=a.B+a.j.length()-e;127<e;)c.push(e&127|128),e>>>=7,a.B++;c.push(e);a.B++}};
Rea=function(a){return function(){var b=new Bda;Hea(this.ea,b,Jk(a));Gh(b,b.j.end());for(var c=new Uint8Array(b.B),d=b.C,e=d.length,f=0,h=0;h<e;h++){var l=d[h];c.set(l,f);f+=l.length}b.C=[c];return c}};
Tk=function(a){return function(b){return uea(a,b)}};
Uk=function(a){this.ea=M(a)};
Vk=function(a){this.ea=M(a)};
Wk=function(a){this.ea=M(a)};
Xk=function(a){this.ea=M(a)};
Yk=function(a){this.ea=M(a)};
rl=function(a){this.ea=M(a)};
g.Sea=function(a){var b=new Yk;b=N(b,1,a.C);for(var c=[],d=0;d<a.B.length;d++)c.push(a.B[d].Ve);b=pj(b,3,c,Ai);c=[];d=[];for(var e=g.v(a.j.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var h=a.G,l=a.ON(f)||[],m=[],n=0;n<l.length;n++){var p=l[n],q=p&&p.j;p=new Wk;switch(h){case 3:q=Number(q);Number.isFinite(q)&&Fj(p,1,sl,wi(q));break;case 2:Fj(p,2,sl,Yh(Number(q)))}m.push(p)}h=m;for(l=0;l<h.length;l++){m=h[l];n=new Xk;m=Kj(n,Wk,2,m);n=[];p=a;q=
[];for(var r=0;r<p.B.length;r++)q.push(p.B[r].We);p=q;for(q=0;q<p.length;q++){var t=p[q],u=f[q];r=new Vk;switch(t){case 3:Fj(r,1,tl,Bi(String(u)));break;case 2:t=Number(u);Number.isFinite(t)&&Fj(r,2,tl,ri(t));break;case 1:t="true"===u,t=null==t?t:Mda(t),Fj(r,3,tl,t)}n.push(r)}Mj(m,Vk,1,n);c.push(m)}}Mj(b,Xk,4,c);return b};
Tea=function(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
Uea=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(q){for(var r=h,t=0;64>t;t+=4)r[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(q<<1|q>>>31)&4294967295;q=e[0];var u=e[1],x=e[2],B=e[3],F=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=B^u&(x^B);var H=1518500249}else G=u^x^B,H=1859775393;else 60>t?(G=u&x|B&(u|x),H=2400959708):(G=u^x^B,H=3395469782);G=((q<<5|q>>>27)&4294967295)+G+F+H+r[t]&4294967295;F=B;B=x;x=(u<<30|u>>>2)&4294967295;u=q;q=G}e[0]=e[0]+q&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+F&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],u=0,x=q.length;u<x;++u)t.push(q.charCodeAt(u));q=t}r||(r=q.length);t=0;if(0==n)for(;t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64;for(;t<r;)if(f[n++]=q[t++],p++,64==n)for(n=0,b(f);t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64}
function d(){var q=[],r=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var u=24;0<=u;u-=8)q[r++]=e[t]>>u&255;return q}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,B5:function(){for(var q=d(),r="",t=0;t<q.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return r}}};
Wea=function(a,b,c){var d=String(g.Ra.location.href);return d&&a&&b?[b,Vea(Tea(d),a,c||null)].join(" "):null};
Vea=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],g.Zb(d,function(l){e.push(l)}),Xea(e.join(" "));
var f=[],h=[];g.Zb(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];g.Zb(d,function(l){e.push(l)});
a=Xea(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")};
Xea=function(a){var b=Uea();b.update(a);return b.B5().toLowerCase()};
ul=function(a){this.j=a||{cookie:""}};
vl=function(a){a=(a.j.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=jc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
wl=function(a){return!!Yea.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};
Zea=function(a){a=void 0===a?!1:a;var b=g.Ra.__SAPISID||g.Ra.__APISID||g.Ra.__3PSAPISID||g.Ra.__OVERRIDE_SID;wl(a)&&(b=b||g.Ra.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new ul(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");wl(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b};
$ea=function(a,b,c,d){(a=g.Ra[a])||"undefined"===typeof document||(a=(new ul(document)).get(b));return a?Wea(a,c,d):null};
afa=function(a,b){b=void 0===b?!1:b;var c=Tea(String(g.Ra.location.href)),d=[];if(Zea(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?g.Ra.__SAPISID:g.Ra.__APISID;e||"undefined"===typeof document||(e=new ul(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Wea(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&wl(b)&&((b=$ea("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$ea("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")};
xl=function(a){this.ea=M(a)};
yl=function(a){g.Dd.call(this);this.intervalMs=a;this.enabled=!1;this.j=function(){return g.gb()};
this.B=this.j()};
zl=function(a){this.ea=M(a)};
Al=function(a){this.ea=M(a)};
g.Bl=function(a,b,c,d){this.D=a;this.G=b;this.j=this.C=a;this.K=c||0;this.N=d||2};
g.Cl=function(a){a.j=Math.min(a.G,a.j*a.N);a.C=Math.min(a.G,a.j+(a.K?Math.round(a.K*(Math.random()-.5)*2*a.j):0));a.B++};
Dl=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
El=function(a){return a?decodeURI(a):a};
g.Gl=function(a,b){return b.match(Fl)[a]||null};
g.Hl=function(a){return El(g.Gl(3,a))};
g.bfa=function(a){a=a.match(Fl);return Dl(a[1],a[2],a[3],a[4])};
cfa=function(a){a=a.match(Fl);return Dl(a[1],null,a[3],a[4])};
Il=function(a){a=a.match(Fl);return Dl(null,null,null,null,a[5],a[6],a[7])};
dfa=function(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)};
Jl=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?ve(e):"")}}};
Kl=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
Ll=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ll(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.ue(b)))};
efa=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Ll(a[b],a[b+1],c);return c.join("&")};
g.Ml=function(a){var b=[],c;for(c in a)Ll(c,a[c],b);return b.join("&")};
ffa=function(a,b){var c=2==arguments.length?efa(arguments[1],0):efa(arguments,1);return Kl(a,c)};
g.Nl=function(a,b){b=g.Ml(b);return Kl(a,b)};
Ol=function(a,b,c){c=null!=c?"="+g.ue(c):"";return Kl(a,b+c)};
gfa=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Pl=function(a,b){var c=a.search(hfa),d=gfa(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return ve(a.slice(d,-1!==e?e:0))};
wm=function(a,b){for(var c=a.search(hfa),d=0,e,f=[];0<=(e=gfa(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(ifa,"$1")};
jfa=function(a,b,c){return Ol(wm(a,b),b,c)};
xm=function(a){this.ea=M(a)};
ym=function(a){this.ea=M(a)};
zm=function(a){this.ea=M(a)};
Am=function(a){this.ea=M(a)};
Bm=function(a){this.ea=M(a)};
Cm=function(a){this.ea=M(a)};
Dm=function(a){this.ea=M(a,35)};
Em=function(a){this.ea=M(a,19)};
Fm=function(a){this.ea=M(a,7)};
kfa=function(a){this.ea=M(a)};
Im=function(a){g.J.call(this);var b=this;this.componentId="";this.B=[];this.Ka="";this.Na=this.Ha=-1;this.Ea=!1;this.N=this.experimentIds=null;this.qa=this.Aa=this.K=this.D=0;this.Sa=1;this.timeoutMillis=0;this.Z=!1;this.logSource=a.logSource;this.pz=a.pz||function(){};
this.C=new Gm(a.logSource,a.Uz);this.network=a.network;this.fB=a.fB||null;this.Va=g.fb(Tba,0,1);this.ma=a.Cca||null;this.sessionIndex=a.sessionIndex||null;this.cD=a.cD||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.TV;this.Uz=a.Uz||!1;var c=Q(new Am,1,1);Hm(this.C,c);this.G=new g.Bl(1E4,3E5,.1);this.j=new yl(this.G.getValue());a=lfa(this,a.jV);g.wd(this.j,"tick",a,!1,this);this.Y=new yl(6E5);g.wd(this.Y,"tick",a,!1,this);this.cD||this.Y.start();this.Uz||(g.wd(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.FN()}),g.wd(document,"pagehide",this.FN,!1,this))};
lfa=function(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}};
mfa=function(a){a.ma||(a.ma=.01>a.Va()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ma};
nfa=function(a,b){a.G=new g.Bl(1>b?1:b,3E5,.1);a.j.setInterval(a.G.getValue())};
pfa=function(a){ofa(a,function(b,c){b=Ol(b,"format","json");var d=!1;try{d=$e().navigator.sendBeacon(b,c.Ij())}catch(e){}a.Z&&!d&&(a.Z=!1);return d})};
ofa=function(a,b){if(0!==a.B.length){var c=wm(mfa(a),"format");c=ffa(c,"auth",a.pz(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.B.length;++d){var e=a.B.slice(0,32),f=a.C.build(e,a.D,a.K,a.fB,a.Aa,a.qa);if(!b(c,f)){++a.K;break}a.D=0;a.K=0;a.Aa=0;a.qa=0;a.B=a.B.slice(e.length)}a.j.enabled&&a.j.stop()}};
Gm=function(a,b){this.Uz=b=void 0===b?!1:b;this.B=this.locale=null;this.j=new Em;Number.isInteger(a)&&this.j.DF(a);b||(this.locale=document.documentElement.getAttribute("lang"));Hm(this,new Am)};
Hm=function(a,b){Kj(a.j,Am,1,b);fj(b,1)||Q(b,1,1);a.Uz||(b=Jm(a),Pj(b,5)||N(b,5,a.locale));a.B&&(b=Jm(a),g.Jj(b,ym,9)||Kj(b,ym,9,a.B))};
qfa=function(a,b){ij(Km(a),zm,11)&&(a=Lm(a),Q(a,1,b))};
rfa=function(a,b){ij(Km(a),zm,11)&&(a=Lm(a),Wj(a,2,b))};
Km=function(a){return g.Jj(a.j,Am,1)};
tfa=function(a,b){var c=void 0===c?sfa:c;b($e(),c).then(function(d){a.B=d;d=Jm(a);Kj(d,ym,9,a.B);return!0}).catch(function(){return!1})};
Jm=function(a){a=Km(a);var b=g.Jj(a,zm,11);b||(b=new zm,Kj(a,zm,11,b));return b};
Lm=function(a){a=Jm(a);var b=g.Jj(a,xm,10);b||(b=new xm,Wj(b,2,!1),Kj(a,xm,10,b));return b};
g.Mm=function(a){return(new ufa).Ij(a)};
ufa=function(){};
Nm=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Nm(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),vfa(d,c),c.push(":"),Nm(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":vfa(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
vfa=function(a,b){b.push('"',a.replace(wfa,function(c){var d=xfa[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),xfa[c]=d);return d}),'"')};
yfa=function(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};
Om=function(){};
Pm=function(){};
zfa=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.B};
g.Qm=function(a){g.Dd.call(this);this.headers=new Map;this.Z=a||null;this.C=!1;this.Aa=this.j=null;this.ma="";this.B=0;this.D="";this.G=this.Ea=this.Y=this.Ha=!1;this.N=0;this.qa=null;this.Ka="";this.Na=this.K=!1};
Bfa=function(a,b,c,d,e,f,h){var l=new g.Qm;Afa.push(l);b&&l.Qa("complete",b);l.UI("ready",l.c5);f&&(l.N=Math.max(0,f));h&&(l.K=h);l.send(a,c,d,e)};
Cfa=function(a){return g.Ze&&"number"===typeof a.timeout&&void 0!==a.ontimeout};
Efa=function(a,b){a.C=!1;a.j&&(a.G=!0,a.j.abort(),a.G=!1);a.D=b;a.B=5;Dfa(a);Rm(a)};
Dfa=function(a){a.Ha||(a.Ha=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
Ffa=function(a){if(a.C&&"undefined"!=typeof Sm)if(a.Aa[1]&&4==g.Tm(a)&&2==a.getStatus())a.getStatus();else if(a.Y&&4==g.Tm(a))g.bg(a.jZ,0,a);else if(a.dispatchEvent("readystatechange"),a.isComplete()){a.getStatus();a.C=!1;try{if(Um(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.B=6;try{var b=2<g.Tm(a)?a.j.statusText:""}catch(c){b=""}a.D=b+" ["+a.getStatus()+"]";Dfa(a)}}finally{Rm(a)}}};
Rm=function(a,b){if(a.j){Gfa(a);var c=a.j,d=a.Aa[0]?function(){}:null;
a.j=null;a.Aa=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}};
Gfa=function(a){a.j&&a.Na&&(a.j.ontimeout=null);a.qa&&(g.Ra.clearTimeout(a.qa),a.qa=null)};
Um=function(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=g.Gl(1,String(a.ma)),!a&&g.Ra.self&&g.Ra.self.location&&(a=g.Ra.self.location.protocol.slice(0,-1)),b=!Hfa.test(a?a.toLowerCase():"");c=b}return c};
g.Tm=function(a){return a.j?a.j.readyState:0};
g.Vm=function(a){try{return a.j?a.j.responseText:""}catch(b){return""}};
g.Wm=function(a){try{if(!a.j)return null;if("response"in a.j)return a.j.response;switch(a.Ka){case "":case "text":return a.j.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.j)return a.j.mozResponseArrayBuffer}return null}catch(b){return null}};
g.Ifa=function(a){var b={};a=(a.j&&2<=g.Tm(a)?a.j.getAllResponseHeaders()||"":"").split("\r\n");for(var c=0;c<a.length;c++)if(!g.fc(a[c])){var d=Xba(a[c]),e=d[0];d=d[1];if("string"===typeof d){d=d.trim();var f=b[e]||[];b[e]=f;f.push(d)}}return Xc(b,function(h){return h.join(", ")})};
g.Xm=function(a,b){return a.j?a.j.getResponseHeader(b):null};
Jfa=function(){};
Ym=function(a,b){g.J.call(this);this.logSource=a;this.sessionIndex=b;this.B="https://play.google.com/log?format=json&hasfast=true";this.C=!1;this.componentId="";this.network=new Jfa};
Zm=function(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;g.J.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Ym(a,"0"),a.componentId=b,g.L(this,a),""!==c&&(a.B=c),d&&(a.C=!0),e&&(a.j=e),b=a.build());this.j=b};
$m=function(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}};
Kfa=function(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}};
an=function(a,b,c){c=void 0===c?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c};
bn=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
vn=function(a,b){this.logger=a;this.j=b;this.startMillis=bn()};
Lfa=function(){};
Mfa=function(a,b){this.cj=a;a=new Ym(1654,"0");a.j="17";if(b){var c=new Uk;b=pj(c,3,b,Qda);a.VC=b}b=new Zm(1654,"","",!1,"",a.build());b=new g.dg(b);this.clientError=new Fca(b);this.D=new Eca(b);this.G=new Dca(b);this.C=new Gca(b);this.B=new Hca(b);this.j=new Ica(b)};
Nfa=function(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}};
wn=function(a,b,c,d){b=void 0===b?0:b;c=void 0===c?a.length:c;var e=0;for(d&&(e=wn(d));b<c;b++)d="string"===typeof a?a.charCodeAt(b):a[b],e=Ofa(31,e)+d|0;return e};
Pfa=function(a,b){return[wn(a,0,a.length>>1,b),wn(a,a.length>>1)]};
xn=function(a,b,c){c=void 0===c?[]:c;this.maxItems=a;this.j=void 0===b?0:b;this.B=c};
Qfa=function(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new xn(a);var c=b.split(",");if(2>c.length)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new xn(a);b=c.slice(1);1===b.length&&""===b[0]&&(b=[]);c=Number(c[0]);return isNaN(c)||0>c||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new xn(a)):new xn(a,c,b)};
Rfa=function(a,b){this.logger=b;this.index=Qfa(a)};
Ufa=function(a,b,c,d,e){var f=new vn(a.logger,"W"),h=(4-(yn.length+c.length)%4)%4,l=new Uint8Array(4+h+yn.length+4+c.length),m=new DataView(l.buffer),n=0;m.setUint32(n,4294967295*Math.random());n=n+4+h;l.set(yn,n);n+=yn.length;m.setUint32(n,e);l.set(c,n+4);Sfa(l,d);b=Tfa(null!=b?b:[]);a.index.yh(b,function(p){globalThis.sessionStorage.removeItem(p)})?Nfa(b,g.qg(l))?(a.logger.VI("s"),f.done()):a.logger.VI("t"):a.logger.VI("i")};
Tfa=function(a){var b=g.v(Pfa(a,yn));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)};
Sfa=function(a,b){var c=Pfa(b);a=new Uint32Array(a.buffer);b=a[0];var d=g.v(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,h=e,l=c,m=d,n=0;22>n;n++)h=h>>>8|h<<24,h+=f|0,h^=l+38293,f=f<<3|f>>>29,f^=h,m=m>>>8|m<<24,m+=l|0,m^=n+38293,l=l<<3|l>>>29,l^=m;f=[f,h];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}};
Vfa=function(a){this.j=a;this.j.Kk("/client_streamz/bg/fic",{We:3,Ve:"ke"})};
Wfa=function(a){this.j=a;this.j.Kk("/client_streamz/bg/fiec",{We:3,Ve:"rk"},{We:3,Ve:"ke"},{We:2,Ve:"ec"},{We:3,Ve:"em"})};
zn=function(a,b,c,d,e){a.j.Tl("/client_streamz/bg/fiec",b,c,d,e)};
Xfa=function(a){this.j=a;this.j.KG("/client_streamz/bg/fil",{We:3,Ve:"rk"},{We:3,Ve:"ke"})};
Yfa=function(a){this.j=a;this.j.Kk("/client_streamz/bg/fsc",{We:3,Ve:"rk"},{We:3,Ve:"ke"})};
Zfa=function(a){this.j=a;this.j.KG("/client_streamz/bg/fsl",{We:3,Ve:"rk"},{We:3,Ve:"ke"})};
cga=function(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=$fa(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,h=f,l=0;12<=h;h-=12,l+=12)c+=An(a,l),d+=An(a,l+4),e+=An(a,l+8),b();e+=f;switch(h){case 11:e+=a[l+10]<<24;case 10:e+=a[l+9]<<16;case 9:e+=a[l+8]<<8;case 8:d+=a[l+7]<<24;case 7:d+=a[l+6]<<16;case 6:d+=a[l+5]<<8;case 5:d+=a[l+4];case 4:c+=a[l+3]<<24;case 3:c+=a[l+2]<<16;case 2:c+=a[l+1]<<8;case 1:c+=a[l+0]}b();return aga.toString(e)};
$fa=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};
An=function(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)};
dga=function(a,b){this.j=b;this.G=void 0;this.Z=new Zm(1828);this.B=new g.dg(this.Z);this.Y=new Xfa(this.B);this.K=new Yfa(this.B);this.N=new Zfa(this.B);this.D=new Wfa(this.B);this.C=cga(a);(new Vfa(this.B)).j.Tl("/client_streamz/bg/fic",this.j)};
Bn=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
ega=function(a){this.ea=M(a)};
fga=function(a){this.ea=M(a)};
Cn=function(a){this.ea=M(a,0,"bfkj")};
g.Dn=function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};
En=function(a){function b(B,F,G){Promise.resolve().then(function(){var H;null!=(H=c.Sj)&&void 0!==H.G&&H.Y.Ji(Bn()-H.G,H.C,H.j);l.resolve({R4:B,Iba:F,Ljb:G})})}
var c=this;this.j=!1;if(a.challenge instanceof Cn){var d=g.Uj(a.challenge,4);var e=g.Uj(a.challenge,5)}else d=a.program,e=a.globalName;if(!1!==a.Oaa){var f,h;this.Sj=null!=(h=a.Sj)?h:new dga(e,null!=(f=a.yjb)?f:"_")}var l=new g.Dn;this.B=l.promise;if(!g.Ra[e]){var m;null!=(m=this.Sj)&&zn(m.D,m.C,m.j,1,"");var n;null!=(n=this.Sj)&&n.B.Xx()}else if(!g.Ra[e].a){var p;null!=(p=this.Sj)&&zn(p.D,p.C,p.j,2,"");var q;null!=(q=this.Sj)&&q.B.Xx()}try{var r=g.Ra[e].a,t;null!=(t=this.Sj)&&(t.G=Bn());this.C=g.v(r(d,
b,!0,a.Bkb)).next().value;this.Hba=l.promise.then(function(){})}catch(B){var u;
null!=(u=this.Sj)&&zn(u.D,u.C,u.j,4,B.message);var x;null!=(x=this.Sj)&&x.B.Xx();throw B;}};
gga=function(){};
Fn=function(a){this.j=a};
Gn=function(a){this.He=a};
Hn=function(a){return new Gn(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})};
iga=function(a,b){b=void 0===b?hga:b;if(a instanceof g.Xd)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Gn&&d.He(a))return new g.Xd(a,Zd)}};
g.In=function(a,b){b=void 0===b?hga:b;return iga(a,b)||g.ce};
Jn=function(a){if(a instanceof g.Xd)a=g.Yd(a);else{b:if(jga){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a};
kga=function(a){var b=g.Ja.apply(1,arguments);if(0===b.length)return Wd(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Wd(c)};
lga=function(a){for(var b=g.Ja.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("Forbidden characters in style string: "+c);return new g.ae(c,Kn)};
mga=function(a){if(!a)return null;a=Pj(a,4);return null===a||void 0===a?null:Wd(a)};
g.Ln=function(a,b){b=Jn(b);void 0!==b&&(a.href=b)};
nga=function(a,b,c,d){if(0===a.length)throw Error("");a=a.map(function(f){if(f instanceof Fn)f=f.j;else throw Error("");return f});
var e=c.toLowerCase();if(a.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+c+'" does not match any of the allowed prefixes.');
b.setAttribute(c,d)};
Mn=function(a,b){throw Error(void 0===b?"unexpected value "+a+"!":b);};
g.Nn=function(a,b,c){var d=window;a=Jn(a);return void 0!==a?d.open(a,b,c):null};
On=function(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};
g.Pn=function(a,b){a.src=g.Td(b);On(a)};
oga=function(a,b){return a.parseFromString(g.he(b),"text/xml")};
Qn=function(){this.j={};this.B=null};
pga=function(){Qn.instance||(Qn.instance=new Qn);return Qn.instance};
rga=function(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return qga(b,c);var e;(e=a.j)[d]||(e[d]=new Promise(function(f,h){qga(b,c).then(function(){a.B=d;f()},function(l){delete a.j[d];
h(l)})}));
return a.j[d]};
qga=function(a,b){return b?sga(b):a?tga(a):Promise.resolve()};
sga=function(a){return new Promise(function(b,c){var d=g.kf("SCRIPT"),e=mga(a)||kga(uga);g.Pn(d,e);d.onload=function(){g.pf(d);b()};
d.onerror=function(){g.pf(d);c(Error("EWLS"))};
(g.Ne("HEAD")[0]||document.documentElement).appendChild(d)})};
tga=function(a){return new Promise(function(b){var c=g.kf("SCRIPT");if(a){var d=Pj(a,6);d=null===d||void 0===d?null:tba(d)}else d=null;c.textContent=rba(d);On(c);(g.Ne("HEAD")[0]||document.documentElement).appendChild(c);g.pf(c);b()})};
wga=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a[c]+97;if(g.Ra.TextDecoder)b=(new TextDecoder).decode(b);else if(8192>=b.length)b=String.fromCharCode.apply(null,b);else{a="";for(c=0;c<b.length;c+=8192)a+=String.fromCharCode.apply(null,Array.prototype.slice.call(b,c,c+8192));b=a}return vga(b)};
Rn=function(a){this.ea=M(a)};
Sn=function(a){this.ea=M(a)};
Tn=function(a){this.ea=M(a)};
Un=function(a,b,c){this.client=a;this.cj=b;this.j=c};
Vn=function(a){this.ea=M(a)};
Wn=function(a,b,c){this.j=a;this.C=b;this.B=c};
Xn=function(a,b,c){c=void 0===c?{}:c;this.eba=a;this.j=c;this.B=b};
Yn=function(a,b,c,d,e){this.name=a;this.methodType="unary";this.requestType=b;this.responseType=c;this.j=d;this.B=e};
xga=function(a,b,c){c=void 0===c?{}:c;return new Wn(b,a,c)};
Zn=function(a){this.ea=M(a)};
$n=function(a){this.ea=M(a)};
ao=function(a){this.ea=M(a)};
bo=function(a){this.ea=M(a)};
co=function(a,b){this.N=a.x8;this.Z=b;this.j=a.xhr;this.C=[];this.G=[];this.K=[];this.D=[];this.B=[];this.N&&yga(this)};
Bga=function(a,b){g.wd(a.j,"complete",function(){if(Um(a.j)){var c=g.Vm(a.j);if(b&&"text/plain"===a.j.getResponseHeader("Content-Type")){if(!atob)throw Error("Cannot decode Base64 response");c=atob(c)}try{var d=a.Z(c)}catch(h){eo(a,new an(13,"Error when deserializing response data; error: "+h+(", response: "+c)));return}c=$m(a.j.getStatus());fo(a,go(a));0==c?zga(a,d):eo(a,new an(c,"Xhr succeeded but the status code is not 200"))}else{c=g.Vm(a.j);d=go(a);if(c){var e=Aga(a,c);c=e.code;var f=e.details;
e=e.metadata}else c=2,f="Rpc failed due to xhr error. error code: "+a.j.B+", error: "+a.j.getLastError(),e=d;fo(a,d);eo(a,new an(c,f,e))}})};
yga=function(a){a.N.on("data",function(b){if("1"in b){var c=b["1"];try{var d=a.Z(c)}catch(e){eo(a,new an(13,"Error when deserializing response data; error: "+e+(", response: "+c)))}d&&zga(a,d)}if("2"in b)for(b=Aga(a,b["2"]),c=0;c<a.K.length;c++)a.K[c](b)});
a.N.on("end",function(){fo(a,go(a));for(var b=0;b<a.D.length;b++)a.D[b]()});
a.N.on("error",function(){if(0!=a.B.length){var b=a.j.B;0!==b||Um(a.j)||(b=6);var c=-1;switch(b){case 0:var d=2;break;case 7:d=10;break;case 8:d=4;break;case 6:c=a.j.getStatus();d=$m(c);break;default:d=14}fo(a,go(a));b=yfa(b)+", error: "+a.j.getLastError();-1!=c&&(b+=", http status code: "+c);eo(a,new an(d,b))}})};
go=function(a){var b={},c=g.Ifa(a.j);Object.keys(c).forEach(function(d){b[d]=c[d]});
return b};
Aga=function(a,b){var c=2,d={};try{var e=Cga(b);c=Rj(e,1);var f=e.getMessage();mea(e,ao).length&&(d["grpc-web-status-details-bin"]=b)}catch(h){a.j&&404===a.j.getStatus()?(c=5,f="Not Found: "+String(a.j.ma)):(c=14,f="Unable to parse RpcStatus: "+h)}return{code:c,details:f,metadata:d}};
ho=function(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)};
zga=function(a,b){for(var c=0;c<a.C.length;c++)a.C[c](b)};
fo=function(a,b){for(var c=0;c<a.G.length;c++)a.G[c](b)};
eo=function(a,b){for(var c=0;c<a.B.length;c++)a.B[c](b)};
g.io=function(a){this.K=a.Mca||null;this.G=a.L_||!1;this.B=void 0};
jo=function(a,b){g.Dd.call(this);this.qa=a;this.K=b;this.G=void 0;this.status=this.readyState=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=this.responseXML=null;this.Z=new Headers;this.B=null;this.ma="GET";this.Y="";this.j=!1;this.N=this.C=this.D=null};
Dga=function(a){a.C.read().then(a.Q6.bind(a)).catch(a.pI.bind(a))};
lo=function(a){a.readyState=4;a.D=null;a.C=null;a.N=null;ko(a)};
ko=function(a){a.onreadystatechange&&a.onreadystatechange.call(a)};
Ega=function(a){if(a.mm&&"function"==typeof a.mm)return a.mm();if("undefined"!==typeof Map&&a instanceof Map||"undefined"!==typeof Set&&a instanceof Set)return Array.from(a.values());if("string"===typeof a)return a.split("");if(g.Xa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ad(a)};
Fga=function(a){if(a.Cp&&"function"==typeof a.Cp)return a.Cp();if(!a.mm||"function"!=typeof a.mm){if("undefined"!==typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!==typeof Set&&a instanceof Set)){if(g.Xa(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return g.bd(a)}}};
g.mo=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(g.Xa(a)||"string"===typeof a)Array.prototype.forEach.call(a,b,c);else for(var d=Fga(a),e=Ega(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)};
g.no=function(a){this.j=this.Z=this.G="";this.D=null;this.K=this.C="";this.N=!1;var b;a instanceof g.no?(this.N=a.N,g.oo(this,a.G),this.Z=a.Z,g.po(this,a.j),g.qo(this,a.D),this.C=a.C,ro(this,a.B.clone()),this.K=a.K):a&&(b=String(a).match(Fl))?(this.N=!1,g.oo(this,b[1]||"",!0),this.Z=so(b[2]||""),g.po(this,b[3]||"",!0),g.qo(this,b[4]),this.C=so(b[5]||"",!0),ro(this,b[6]||"",!0),this.K=so(b[7]||"")):(this.N=!1,this.B=new to(null,this.N))};
g.oo=function(a,b,c){a.G=c?so(b,!0):b;a.G&&(a.G=a.G.replace(/:$/,""))};
g.po=function(a,b,c){a.j=c?so(b,!0):b};
g.qo=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.D=b}else a.D=null};
ro=function(a,b,c){b instanceof to?(a.B=b,Gga(a.B,a.N)):(c||(b=uo(b,Hga)),a.B=new to(b,a.N))};
g.vo=function(a,b,c){a.B.set(b,c)};
g.wo=function(a){return a instanceof g.no?a.clone():new g.no(a)};
so=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
uo=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Iga),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Iga=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
to=function(a,b){this.B=this.j=null;this.C=a||null;this.D=!!b};
xo=function(a){a.j||(a.j=new Map,a.B=0,a.C&&Jl(a.C,function(b,c){a.add(ve(b),c)}))};
Jga=function(a,b){xo(a);b=yo(a,b);return a.j.has(b)};
g.Kga=function(a,b,c){a.remove(b);0<c.length&&(a.C=null,a.j.set(yo(a,b),g.Hb(c)),a.B=a.B+c.length)};
yo=function(a,b){b=String(b);a.D&&(b=b.toLowerCase());return b};
Gga=function(a,b){b&&!a.D&&(xo(a),a.C=null,a.j.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),g.Kga(this,e,c))},a));
a.D=b};
g.Lga=function(a){var b="";g.Vc(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n"});
return b};
g.$o=function(a,b,c){if(g.id(c))return a;c=g.Lga(c);if("string"===typeof a)return Ol(a,g.ue(b),c);g.vo(a,b,c);return a};
g.ap=function(a){g.J.call(this);this.B=a;this.j={}};
Mga=function(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)Mga(a,b,c[h],d,e,f);else{b=vd(b,c,d||a.handleEvent,e,f||a.B||a);if(!b)return a;a.j[b.key]=b}return a};
Nga=function(){this.C=!0;this.B=0;this.j=""};
Oga=function(a,b,c){a.C=!1;throw Error("The stream is broken @"+a.B+". Error: "+c+". With input:\n"+b);};
bp=function(){this.K=null;this.N=[];this.D=this.B=this.C=this.j=this.Y=0;this.G=null;this.Z=0};
cp=function(a,b,c,d){a.j=3;a.K="The stream is broken @"+a.Y+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.K);};
dp=function(){this.j=null;this.B=0;this.C=new Nga;this.D=new bp};
Pga=function(a,b,c){a.j="The stream is broken @"+a.B+". Error: "+c+". With input:\n"+b;throw Error(a.j);};
ep=function(a){return"\r"==a||"\n"==a||" "==a||"\t"==a};
fp=function(a){this.Y=null;this.K=[];this.D="";this.qa=[];this.C=this.B=0;this.N=!1;this.Z=0;this.Aa=/[\\"]/g;this.j=this.G=0;this.ma=!(!a||!a.x5)};
gp=function(a,b,c){a.G=3;a.Y="The stream is broken @"+a.C+"/"+c+". With input:\n"+b;throw Error(a.Y);};
hp=function(){this.G=this.C=null;this.B=this.j=0;this.D=[];this.K=!1};
Qga=function(a){var b=g.Xm(a,"Content-Type");if(!b)return null;b=b.toLowerCase();return b.startsWith("application/json")?b.startsWith("application/json+protobuf")?new hp:new fp:b.startsWith("application/x-protobuf")?(a=g.Xm(a,"Content-Transfer-Encoding"))?"base64"==a.toLowerCase()?new dp:null:new bp:null};
ip=function(a){this.j=a;this.B=null;this.D=this.C=0;this.Y=!1;this.G=this.N=this.K=null;this.Z=new g.ap(this);this.Z.Qa(this.j,"readystatechange",this.ma)};
jp=function(a,b){a.D!=b&&(a.D=b,a.N&&a.N())};
kp=function(a){a.Z.Of();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}};
Rga=function(a){this.C=a;a=(0,g.db)(this.d9,this);this.C.G=a;a=(0,g.db)(this.N$,this);this.C.N=a;this.B={};this.j={}};
Sga=function(a,b){for(var c={},d=0;d<a.length;c={yP:c.yP},d++)c.yP=a[d],b.forEach(function(e){return function(f){try{f(e.yP)}catch(h){}}}(c))};
lp=function(a,b){var c=a.B[b];c&&c.forEach(function(d){try{d()}catch(e){}});
(c=a.j[b])&&c.forEach(function(d){d()});
a.j[b]=[]};
Tga=function(){var a={format:"jspb"};a=void 0===a?{}:a;this.G=a.tkb||g.Ta("suppressCorsPreflight",a)||!1;this.B=a.withCredentials||g.Ta("withCredentials",a)||!1;this.D=a.skb||[];this.K=a.ykb||[];this.j=a.Ckb;this.C=a.zkb||!1};
mp=function(a,b,c,d,e){var f=b.substr(0,b.length-e.name.length);return Uga(function(h){return new Vga(function(l,m){var n={},p=Wga(a,h,f);p.on("error",function(q){return m(q)});
p.on("metadata",function(q){n=q});
p.on("data",function(q){var r=n;r=void 0===r?{}:r;l(new Xn(q,h.XH(),r))})})},a.K).call(a,xga(e,c,d)).then(function(h){return h.eba})};
Wga=function(a,b,c){var d=b.XH(),e=b.getMetadata(),f=Xga(a,!0);a=Yga(a,e,f,c+d.getName());c=Zga(f,d.B,!1);Bga(c,"base64"==e["X-Goog-Encode-Response-If-Executable"]);b=d.j(b.j);f.send(a,"POST",b);return c};
Xga=function(a,b){b=a.C&&!b;return a.j||b?new g.Qm(new g.io({Mca:a.j,L_:b})):new g.Qm};
Yga=function(a,b,c,d){b["Content-Type"]="application/json+protobuf";b["X-User-Agent"]="grpc-web-javascript/0.1";var e="Authorization"in b?(e=b.Authorization)?!!{SAPISIDHASH:!0,APISIDHASH:!0}[e.split(" ")[0]]:!1:!1;if(e||a.B)c.K=!0;if(a.G)d=g.$o(d,"$httpHeaders",b);else for(var f in b)c.headers.set(f,b[f]);return d};
Zga=function(a,b,c){if(c)if(a.isActive(),!g.Ze||g.Pc(10)){c=new ip(a);var d=new Rga(c)}else d=null;return new co({xhr:a,x8:d},b)};
Uga=function(a,b){var c=a;b.forEach(function(d){var e=c;c=function(f){return d.intercept(f,e)}});
return c};
np=function(){this.j=new Tga;this.B="https://jnn-pa.googleapis.com".replace(/\/+$/,"")};
op=function(a){g.J.call(this);this.owner=a;this.signals=new Set;a&&g.L(a,this)};
pp=function(a,b,c){var d=$ga;a.signals.has(b);d({signal:b,data:c})};
qp=function(a){g.J.call(this);this.pV=a;this.slots=new Map;this.oB=new Set;this.hX=!1};
aha=function(a,b){a.isDisposed()||a.slots.set(b,{slotId:b,slot:void 0,RV:function(){return a.slots.delete(b)}})};
bha=function(a,b){return new Promise(function(c){rp(function(){a.pV&&(a.TX=b,a.hX=!0);for(var d=g.v(a.slots.values()),e=d.next();!e.done;e=d.next()){var f=e.value;e=f.slotId;f=f.slot;try{f(b,{signal:a,slotId:e})}catch(h){Ef(h)}}d=g.v(a.oB);for(e=d.next();!e.done;e=d.next())e.value.resolve(b);a.oB.clear();c()})})};
$ga=function(){var a=g.Ja.apply(0,arguments);0===a.length?Promise.resolve():1===a.length?(a=a[0],bha(a.signal,a.data)):Promise.all(a.map(function(b){return bha(b.signal,b.data)})).then()};
rp=function(a){sp.push(a);cha()};
cha=function(){var a,b;g.I(function(c){switch(c.j){case 1:if(tp){c.La(0);break}g.Aa(c,3,4);tp=!0;a=dha(0);case 6:if(!(a<sp.length)){c.La(4);break}return g.y(c,Promise.resolve(),9);case 9:a=dha(a);c.La(6);break;case 4:g.Da(c);sp.length=0;tp=!1;g.Ga(c,0);break;case 3:b=g.Ca(c),Ef(b),c.La(4)}})};
dha=function(a){for(var b=a+100;a<b&&a<sp.length;)try{sp[a++]()}catch(c){Ef(c)}return a};
eha=function(a,b){if(a.isDisposed())b();else{var c=up.get(a);if(c)c.push(b);else{var d=[b];up.set(a,d);a.addOnDisposeCallback(function(){for(var e=g.v([].concat(g.oa(d))),f=e.next();!f.done;f=e.next())f=f.value,f();up.delete(a)})}}};
vp=function(a,b,c){g.J.call(this);this.N=a;this.milliseconds=b;this.Nb=c;this.state=this.D=0};
fha=function(a,b){if(b)if("function"===typeof b)var c=b;else{c=b.HJ;var d=b.VP}else c=function(){};
return new vp(!1,a,{HJ:c,VP:d})};
wp=function(a){tb.call(this,a);this.name="TimerCancelledError"};
xp=function(a){tb.call(this,a);this.name="TimerDisposedError"};
hha=function(a){return gha?Array.from(gha.encode(a)):g.pg(a)};
iha=function(a){var b=new np,c={"X-Goog-Api-Key":"AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw"};return new Un(b,a,function(){return c})};
yp=function(a,b){if(a.ZV)return a.ZV;if(void 0===a.vv)return[];b=new vn(b,"c");var c=hha(a.vv);b.done();return a.ZV=c};
zp=function(a,b,c){var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;a=c?c+":":"";if(b instanceof Error){this.message=a+b.message;var e;this.stack=null!=(e=b.stack)?e:""}else this.message=a+String(b),this.stack="";Object.setPrototypeOf(this,zp.prototype)};
Ap=function(a){g.J.call(this);var b=this;this.logger=a;this.D=new g.Dn;this.addOnDisposeCallback(function(){return b.D.reject()})};
Bp=function(a,b){b=fha(b,function(){a.D.resolve()});
g.L(a,b);b.start()};
Cp=function(a,b,c,d,e,f){Ap.call(this,a);this.Z=c;this.ma=d;this.N=f;this.C="m";this.B="x";this.Y=0;g.L(this,b);Bp(this,e);this.K=Math.floor((Date.now()+e)/1E3)};
Dp=function(a,b,c){Ap.call(this,a);this.K=b;this.C="f";this.B="z";Bp(this,c)};
Ep=function(a,b,c){Ap.call(this,a);this.K=b;this.C="w";this.B="z";Bp(this,c)};
Fp=function(a,b){Ap.call(this,a);this.error=b;this.C="e";this.B="y"};
jha=function(a,b){b=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);var c=b.length+1;return new Uint8Array([42,c&127|128,c>>7,a.error.code].concat(hha(b)))};
Gp=function(a,b,c){Ap.call(this,a);this.K=b;this.clientState=c;this.C="S";this.B="q"};
Hp=function(a){g.J.call(this);var b=this;this.j=void 0;this.D=new g.Dn;this.state=1;this.C=0;this.cache=this.B=void 0;this.nz=a.nz;this.VY=a.VY;this.onError=a.onError;this.logger=a.Ujb?new Lfa:new Mfa(a.cj,a.VC);this.addOnDisposeCallback(function(){b.j&&(b.j.dispose(),b.j=void 0)})};
kha=function(a,b,c,d){if(!d)throw new zp(4,Error("PMD:Undefined"));d=d(Ag(oj(b,1)));if(!(d instanceof Function))throw new zp(16,Error("APF:Failed"));return new Cp(a.logger,c,d,Sj(b,3),1E3*Sj(b,2),function(){return a.cache})};
mha=function(a){var b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G,H,O;return g.I(function(P){switch(P.j){case 1:b=void 0,c=a.isReady()?6E4:1E3,d=new g.Bl(c,6E5,.25,2),e=1;case 2:if(!(2>=e)){P.La(4);break}g.Aa(P,5);a.state=3;a.C=e-1;return g.y(P,a.B&&1===e?a.B:a.oD(e),7);case 7:f=P.B;a.B=void 0;a.state=4;h=new vn(a.logger,"b");var Y=pga();Y=rga(Y,g.Jj(f,ega,1),g.Jj(f,fga,2),g.Uj(f,3));return g.y(P,Y,8);case 8:return a.state=5,l=new En({challenge:f}),m=[],g.y(P,Ip(a,l.snapshot({M0:m}),new zp(15,"MDA:Timeout")),
9);case 9:return n=P.B,p=g.v(m),r=q=p.next().value,h.done(),a.state=6,g.y(P,Ip(a,a.logger.rP("g",e,a.nz.hW(n)),new zp(10,"BWB:Timeout")),10);case 10:return t=P.B,a.state=7,u=new vn(a.logger,"i"),g.Uj(t,4)?(l.dispose(),Y=new Ep(a.logger,g.Uj(t,4),1E3*Sj(t,2))):Sj(t,3)?Y=kha(a,t,l,r):(l.dispose(),Y=new Dp(a.logger,Ag(oj(t,1)),1E3*Sj(t,2))),x=Y,u.done(),F=B=void 0,null==(F=(B=a).VY)||F.call(B,Ag(oj(t,1))),a.state=8,P.return(x);case 5:G=g.Ca(P);b=G instanceof zp?G:G instanceof xp?new zp(20,G):G instanceof
an?new zp(11,G):new zp(12,G);a.logger.yw(b.code);O=H=void 0;null==(O=(H=a).onError)||O.call(H,b);a:{if(G instanceof an)switch(G.code){case 2:case 13:case 14:case 4:Y=!0;break a;default:Y=!1;break a}Y=G instanceof zp?20!==G.code:!0}if(!Y)throw b;return g.y(P,lha(a,d.getValue()),11);case 11:g.Cl(d);case 3:e++;P.La(2);break;case 4:throw b;}})};
lha=function(a,b){b=fha(b);g.L(a,b);b.start();return b.Z};
Ip=function(a,b,c){return Promise.race([b,lha(a,12E4).then(function(){return Promise.reject(c)})])};
nha=function(a){var b,c,d;g.I(function(e){switch(e.j){case 1:return b=void 0,g.Aa(e,5),g.y(e,mha(a),7);case 7:b=e.B;g.Ba(e,6);break;case 5:c=g.Ca(e);if(a.j){a.logger.yw(13);e.La(0);break}a.logger.yw(14);b=new Fp(a.logger,c instanceof zp?c:new zp(14,c instanceof Error?c:Error(String(c))));case 6:return d=void 0,null==(d=a.j)||d.dispose(),a.j=b,a.D.resolve(),g.Aa(e,8),g.y(e,a.j.D.promise,10);case 10:g.Ba(e,1);break;case 8:g.Ca(e),e.La(0)}})};
oha=function(a,b){b=Object.assign({},b);try{b.Ry&&!a.cache&&(a.cache=new Rfa(Math.min(b.Ry.a8,150),a.logger))}catch(G){b=new zp(22,G,"GBJ:init");a.logger.yw(b.code);var c;null==(c=a.onError)||c.call(a,b);throw b;}try{var d;if(!a.isReady()&&(null==(d=b.Ry)?0:d.S4)){var e;if(null==(e=a.cache))var f=void 0;else a:{var h=yp(b,a.logger),l=b.Ry.oV,m=new vn(e.logger,"R"),n=Tfa(null!=h?h:[]),p=globalThis.sessionStorage.getItem(n);if(p){try{var q=sg(p);Sfa(q,l)}catch(G){globalThis.sessionStorage.removeItem(n);
e.logger.fA("c");f=void 0;break a}for(c=4;7>c&&0===q[c];)c++;for(d=0;d<yn.length;d++)if(q[c++]!==yn[d]){globalThis.sessionStorage.removeItem(n);e.logger.fA("d");f=void 0;break a}var r=(new DataView(q.buffer)).getUint32(c);if(Math.floor(Date.now()/1E3)>=r)globalThis.sessionStorage.removeItem(n),e.logger.fA("e");else{var t=new Uint8Array(q.buffer,c+4);m.done();e.logger.fA("a");f=t;break a}}else e.logger.fA("m");f=void 0}var u=f;if(u)return u}}catch(G){throw b=new zp(23,G,"RXO:read"),a.logger.yw(b.code),
null==(u=a.onError)||u.call(a,b),b;}var x;u=null!=(x=a.j)?x:new Gp(a.logger,a.C,a.state);x=new vn(a.logger,u.C);try{if(a.isDisposed())throw new zp(21,"BNT:disposed");return u.G(b)}catch(G){x=new vn(a.logger,"e");var B=G instanceof zp?G:new zp(5,G);a.logger.yw(B.code);var F;null==(F=a.onError)||F.call(a,B);u=new Fp(a.logger,B);return u.G(b)}finally{x.done()}};
pha=function(a){var b={};g.Zb(a,function(c){var d=c.event,e=b[d];b.hasOwnProperty(d)?null!==e&&(c.equals(e)||(b[d]=null)):b[d]=c});
taa(a,function(c){return null===b[c.event]})};
Jp=function(){this.Ee=0;this.j=!1;this.B=-1;this.Zv=!1;this.zk=0};
Kp=function(){this.Wd=null;this.j=!1};
Lp=function(a){Kp.call(this);this.C=a};
Mp=function(){Kp.call(this)};
Np=function(){Kp.call(this)};
Op=function(){this.j={};this.B=!0;this.C={}};
Pp=function(a,b,c){a.j[b]||(a.j[b]=new Lp(c));return a.j[b]};
qha=function(a){a.j.queryid||(a.j.queryid=new Np)};
Qp=function(a,b,c){(a=a.j[b])&&a.B(c)};
Rp=function(a,b){if(g.fd(a.C,b))return a.C[b];if(a=a.j[b])return a.getValue()};
Sp=function(a){var b={},c=g.Wc(a.j,function(d){return d.j});
g.Vc(c,function(d,e){d=void 0!==a.C[e]?String(a.C[e]):d.j&&null!==d.Wd?String(d.Wd):"";0<d.length&&(b[e]=d)},a);
return b};
rha=function(a){a=Sp(a);var b=[];g.Vc(a,function(c,d){d in Object.prototype||"undefined"!=typeof c&&b.push([d,":",c].join(""))});
return b};
tha=function(a){Pp(a,"od",sha);Pp(a,"opac",Tp).j=!0;Pp(a,"sbeos",Tp).j=!0;Pp(a,"prf",Tp).j=!0;Pp(a,"mwt",Tp).j=!0;Pp(a,"iogeo",Tp)};
uha=function(){this.j=this.Ot=null};
Up=function(){};
Wp=function(){if(!Vp())throw Error();};
Vp=function(){return!(!Xp||!Xp.performance)};
Yp=function(a){return a?a.passive&&vha()?a:a.capture||!1:!1};
Zp=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,Yp(d)),!0):!1};
$p=function(a){return a.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
wha=function(){};
xha=function(){return(oc||qc)&&sc?sc.mobile:!aq()&&(uc("iPod")||uc("iPhone")||uc("Android")||uc("IEMobile"))};
aq=function(){return(oc||qc)&&sc?!sc.mobile&&(uc("iPad")||uc("Android")||uc("Silk")):uc("iPad")||uc("Android")&&!uc("Mobile")||uc("Silk")};
fr=function(a){try{return!!a&&null!=a.location.href&&Lc(a,"foo")}catch(b){return!1}};
gr=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};
zha=function(){var a=[];gr(yha,function(b){a.push(b)});
return a};
Aha=function(a){var b,c;return null!=(c=null==(b=/https?:\/\/[^\/]+/.exec(a))?void 0:b[0])?c:""};
Dha=function(){var a=Bha("IFRAME"),b={};g.Zb(Cha(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
Bha=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};
Eha=function(a){for(var b=a;a&&a!=a.parent;)a=a.parent,fr(a)&&(b=a);return b};
Iha=function(a){a=a||hr();for(var b=new Fha(g.Ra.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&Gha.test(f.url)&&(c=f);if(f.url&&!f.WO){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new Hha(b,e,c)};
hr=function(){var a=g.Ra,b=[],c=null;do{var d=a;if(fr(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new Fha(e||""));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=g.Ra;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.WO=!0);return b};
Hha=function(a,b,c){this.j=a;this.B=b;this.C=c};
Fha=function(a,b){this.url=a;this.WO=!!b;this.depth=null};
ir=function(){this.C="&";this.B={};this.D=0;this.j=[]};
jr=function(a,b){var c={};c[a]=b;return[c]};
Jha=function(a,b,c,d,e){var f=[];gr(a,function(h,l){(h=kr(h,b,c,d,e))&&f.push(l+"="+h)});
return f.join(b)};
kr=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(kr(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Jha(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
Kha=function(a){var b=1,c;for(c in a.B)b=c.length>b?c.length:b;return 3997-b-a.C.length-1};
lr=function(a,b){this.j=a;this.depth=b};
Mha=function(){function a(l,m){return null==l?m:l}
var b=hr(),c=Math.max(b.length-1,0),d=Iha(b);b=d.j;var e=d.B,f=d.C,h=[];f&&h.push(new lr([f.url,f.WO?2:0],a(f.depth,1)));e&&e!=f&&h.push(new lr([e.url,2],0));b.url&&b!=f&&h.push(new lr([b.url,0],a(b.depth,c)));d=g.mr(h,function(l,m){return h.slice(0,h.length-m)});
!b.url||(f||e)&&b!=f||(e=Aha(b.url))&&d.push([new lr([e,1],a(b.depth,c))]);d.push([]);return g.mr(d,function(l){return Lha(c,l)})};
Lha=function(a,b){g.nr(b,function(e){return 0<=e.depth});
var c=or(b,function(e,f){return Math.max(e,f.depth)},-1),d=yaa(c+2);
d[0]=a;g.Zb(b,function(e){return d[e.depth+1]=e.j});
return d};
Nha=function(){var a=void 0===a?Mha():a;return a.map(function(b){return kr(b)})};
Oha=function(a){var b=!1;b=void 0===b?!1:b;Xp.google_image_requests||(Xp.google_image_requests=[]);var c=Bha("IMG",Xp.document);b&&(c.attributionSrc="");c.src=a;Xp.google_image_requests.push(c)};
pr=function(a){var b="ih";if(a.ih&&a.hasOwnProperty(b))return a.ih;var c=new a;a.ih=c;a.hasOwnProperty(b);return c};
qr=function(){this.B=new wha;this.j=Vp()?new Wp:new Up};
Pha=function(){rr();var a=Xp.document;return!!(a&&a.body&&a.body.getBoundingClientRect&&"function"===typeof Xp.setInterval&&"function"===typeof Xp.clearInterval&&"function"===typeof Xp.setTimeout&&"function"===typeof Xp.clearTimeout)};
Qha=function(){rr();return Nha()};
Rha=function(){};
rr=function(){var a=pr(Rha);if(!a.j){if(!Xp)throw Error("Context has not been set and window is undefined.");a.j=pr(qr)}return a.j};
sr=function(a){this.ea=M(a)};
Sha=function(a){this.C=a;this.j=-1;this.B=this.D=0};
tr=function(a,b){return function(){var c=g.Ja.apply(0,arguments);if(-1<a.j)return b.apply(null,g.oa(c));try{return a.j=a.C.j.now(),b.apply(null,g.oa(c))}finally{a.D+=a.C.j.now()-a.j,a.j=-1,a.B+=1}}};
Tha=function(a,b){this.B=a;this.C=b;this.j=new Sha(a)};
Uha=function(){this.j={}};
Wha=function(){var a=ur().flags,b=Vha;a=a.j[b.key];if("proto"===b.valueType){try{var c=JSON.parse(a);if(Array.isArray(c))return c}catch(d){}return b.defaultValue}return typeof a===typeof b.defaultValue?a:b.defaultValue};
$ha=function(){this.C=void 0;this.B=this.K=0;this.G=-1;this.Ic=new Op;Pp(this.Ic,"mv",Xha).j=!0;Pp(this.Ic,"omid",Tp);Pp(this.Ic,"epoh",Tp).j=!0;Pp(this.Ic,"epph",Tp).j=!0;Pp(this.Ic,"umt",Tp).j=!0;Pp(this.Ic,"phel",Tp).j=!0;Pp(this.Ic,"phell",Tp).j=!0;Pp(this.Ic,"oseid",Yha).j=!0;var a=this.Ic;a.j.sloi||(a.j.sloi=new Mp);a.j.sloi.j=!0;Pp(this.Ic,"mm",vr);Pp(this.Ic,"ovms",Zha).j=!0;Pp(this.Ic,"xdi",Tp).j=!0;Pp(this.Ic,"amp",Tp).j=!0;Pp(this.Ic,"prf",Tp).j=!0;Pp(this.Ic,"gtx",Tp).j=!0;Pp(this.Ic,
"mvp_lv",Tp).j=!0;Pp(this.Ic,"ssmol",Tp).j=!0;Pp(this.Ic,"fmd",Tp).j=!0;this.j=new Tha(rr(),this.Ic);this.D=!1;this.flags=new Uha};
ur=function(){return pr($ha)};
aia=function(a,b,c,d){if(Math.random()<(d||a.j))try{if(c instanceof ir)var e=c;else e=new ir,gr(c,function(h,l){var m=e,n=m.D++;h=jr(l,h);m.j.push(n);m.B[n]=h});
var f=e.df(a.B,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");f&&(rr(),Oha(f))}catch(h){}};
bia=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};
cia=function(){var a=void 0===a?g.Ra:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):g.gb()};
dia=function(){var a=void 0===a?g.Ra:a;return(a=a.performance)&&a.now?a.now():null};
eia=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()};
xr=function(){var a=window;this.events=[];this.B=a||g.Ra;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.j=wr()||(null!=b?b:1>Math.random())};
fia=function(a){a&&yr&&wr()&&(yr.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),yr.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};
gia=function(){var a=zr;this.j=Ar;this.dW="jserror";this.VR=!0;this.AM=null;this.B=this.tP;this.hd=void 0===a?null:a};
hia=function(a,b,c){var d=Br;return tr(ur().j.j,function(){try{if(d.hd&&d.hd.j){var e=d.hd.start(a.toString(),3);var f=b();d.hd.end(e)}else f=b()}catch(l){var h=d.VR;try{fia(e),h=d.B(a,new Cr(Dr(l)),void 0,c)}catch(m){d.tP(217,m)}if(!h)throw l;}return f})()};
Er=function(a,b,c,d){return tr(ur().j.j,function(){var e=g.Ja.apply(0,arguments);return hia(a,function(){return b.apply(c,e)},d)})};
Dr=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Cr=function(a){bia.call(this,Error(a),{message:a})};
iia=function(){Xp&&"undefined"!=typeof Xp.google_measure_js_timing&&(Xp.google_measure_js_timing||zr.disable())};
jia=function(a){Br.AM=function(b){g.Zb(a,function(c){c(b)})}};
kia=function(a,b){return hia(a,b)};
Fr=function(a,b){return Er(a,b)};
Gr=function(a,b,c,d){Br.tP(a,b,c,d)};
Hr=function(){return Date.now()-lia};
mia=function(){var a=ur().C,b=0<=Ir?Hr()-Ir:-1,c=Jr?Hr()-Kr:-1,d=0<=Lr?Hr()-Lr:-1;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];Gr(637,Error(),.001);var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var h=e[b];break}void 0===h&&(h=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:h};
Mr=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Nr=function(a){return a.right-a.left};
Or=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
Pr=function(a,b,c){b instanceof g.ne?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,"number"===typeof c&&(a.top+=c,a.bottom+=c));return a};
Qr=function(a,b,c){var d=new Mr(0,0,0,0);this.time=a;this.volume=null;this.C=b;this.j=d;this.B=c};
Rr=function(a,b,c,d,e,f,h,l){this.D=a;this.N=b;this.C=c;this.K=d;this.j=e;this.G=f;this.B=h;this.Z=l};
oia=function(a){var b=a!==a.top,c=a.top===Eha(a),d=-1,e=0;if(b&&c&&a.top.mraid){d=3;var f=a.top.mraid}else d=(f=a.mraid)?b?c?2:1:0:-1;f&&(f.IS_GMA_SDK||(e=2),aba(nia,function(h){return"function"===typeof f[h]})||(e=1));
return{Rn:f,compatibility:e,Mba:d}};
pia=function(){var a=window.document;return a&&"function"===typeof a.elementFromPoint};
qia=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.se(b.innerWidth,b.innerHeight)).round():$ba(b||window).round()}catch(d){return new g.se(-12245933,-12245933)}};
Sr=function(a,b,c){try{a&&(b=b.top);var d=qia(a,b,c),e=d.height,f=d.width;if(-12245933===f)return new Mr(f,f,f,f);var h=bca(Le(b.document).j),l=h.x,m=h.y;return new Mr(m,l+f,m+e,l)}catch(n){return new Mr(-12245933,-12245933,-12245933,-12245933)}};
g.Tr=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
Ur=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.Wr=function(a,b,c){if("string"===typeof b)(b=Vr(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Vr(c,d);f&&(c.style[f]=e)}};
Vr=function(a,b){var c=ria[b];if(!c){var d=Uba(b);c=d;void 0===a.style[d]&&(d=(g.Qc?"Webkit":Xr?"Moz":g.Ze?"ms":null)+Wba(d),void 0!==a.style[d]&&(c=d));ria[b]=c}return c};
g.Yr=function(a,b){var c=a.style[Uba(b)];return"undefined"!==typeof c?c:a.style[Vr(a,b)]||""};
Zr=function(a,b){var c=Ke(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};
$r=function(a,b){return Zr(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.bs=function(a,b,c){if(b instanceof g.ne){var d=b.x;b=b.y}else d=b,b=c;a.style.left=g.as(d,!1);a.style.top=g.as(b,!1)};
cs=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
sia=function(a){if(g.Ze&&!g.Pc(8))return a.offsetParent;var b=Ke(a),c=$r(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=$r(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.ds=function(a){var b=Ke(a),c=new g.ne(0,0);var d=b?Ke(b):document;d=!g.Ze||g.Pc(9)||"CSS1Compat"==Le(d).j.compatMode?d.documentElement:d.body;if(a==d)return c;a=cs(a);b=bca(Le(b).j);c.x=a.left+b.x;c.y=a.top+b.y;return c};
uia=function(a,b){var c=new g.ne(0,0),d=$e(Ke(a));if(!Lc(d,"parent"))return c;do{var e=d==b?g.ds(a):tia(a);c.x+=e.x;c.y+=e.y}while(d&&d!=b&&d!=d.parent&&(a=d.frameElement)&&(d=d.parent));return c};
g.es=function(a,b){a=via(a);b=via(b);return new g.ne(a.x-b.x,a.y-b.y)};
tia=function(a){a=cs(a);return new g.ne(a.left,a.top)};
via=function(a){if(1==a.nodeType)return tia(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.ne(a.clientX,a.clientY)};
g.fs=function(a,b,c){if(b instanceof g.se)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=g.as(b,!0);a.style.height=g.as(c,!0)};
g.as=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.gs=function(a){var b=wia;if("none"!=$r(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
wia=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Qc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=cs(a),new g.se(a.right-a.left,a.bottom-a.top)):new g.se(b,c)};
g.hs=function(a,b){a.style.display=b?"":"none"};
is=function(a,b){b=Math.pow(10,b);return Math.floor(a*b)/b};
xia=function(a){return new Mr(a.top,a.right,a.bottom,a.left)};
yia=function(a){var b=a.top||0,c=a.left||0;return new Mr(b,c+(a.width||0),b+(a.height||0),c)};
js=function(a){return null!=a&&0<=a&&1>=a};
zia=function(){var a=g.mc();return a?ks("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"),function(b){return ic(a,b)})||ic(a,"OMI/")&&!ic(a,"XiaoMi/")?!0:ic(a,"Presto")&&ic(a,"Linux")&&!ic(a,"X11")&&!ic(a,"Android")&&!ic(a,"Mobi"):!1};
Aia=function(){this.C=!fr(Xp.top);this.isMobileDevice=aq()||xha();var a=hr();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.Hl(a[a.length-1].url)||"":"";this.j=new Mr(0,0,0,0);this.D=new g.se(0,0);this.G=new g.se(0,0);this.N=new Mr(0,0,0,0);this.K=0;this.Z=!1;this.B=!(!Xp||!oia(Xp).Rn);this.update(Xp)};
Bia=function(a,b){b&&b.screen&&(a.D=new g.se(b.screen.width,b.screen.height))};
Cia=function(a,b){var c=a.j?new g.se(Nr(a.j),a.j.getHeight()):new g.se(0,0);b=void 0===b?Xp:b;null!==b&&b!=b.top&&(b=b.top);var d=0,e=0;try{var f=b.document,h=f.body,l=f.documentElement;if("CSS1Compat"==f.compatMode&&l.scrollHeight)d=l.scrollHeight!=c.height?l.scrollHeight:l.offsetHeight,e=l.scrollWidth!=c.width?l.scrollWidth:l.offsetWidth;else{var m=l.scrollHeight,n=l.scrollWidth,p=l.offsetHeight,q=l.offsetWidth;l.clientHeight!=p&&(m=h.scrollHeight,n=h.scrollWidth,p=h.offsetHeight,q=h.offsetWidth);
m>c.height?m>p?(d=m,e=n):(d=p,e=q):m<p?(d=m,e=n):(d=p,e=q)}var r=new g.se(e,d)}catch(t){r=new g.se(-12245933,-12245933)}a.G=r};
ns=function(){var a=ls();if(0<a.K||a.Z)return!0;a=rr().B.isVisible();var b=0===$p(ms);return a||b};
ls=function(){return pr(Aia)};
os=function(a){this.C=a;this.B=0;this.j=null};
ps=function(a,b,c){this.C=a;this.Sa=void 0===c?"na":c;this.G=[];this.isInitialized=!1;this.D=new Qr(-1,!0,this);this.j=this;this.Z=b;this.ma=this.Y=!1;this.Ea="uk";this.Ha=!1;this.K=!0};
qs=function(a,b){g.Bb(a.G,b)||(a.G.push(b),b.Dz(a.j),b.At(a.D),b.eq()&&(a.Y=!0))};
Dia=function(a){a=a.j;a.ET();a.DT();var b=ls();b.N=Sr(!1,a.C,b.isMobileDevice);Cia(ls(),a.C);a.D.j=a.MW()};
Eia=function(a){a.Y=a.G.length?ks(a.G,function(b){return b.eq()}):!1};
Fia=function(a){var b=g.Hb(a.G);g.Zb(b,function(c){c.At(a.D)})};
rs=function(a){var b=g.Hb(a.G);g.Zb(b,function(c){c.Dz(a.j)});
a.j!=a||Fia(a)};
ts=function(a,b,c,d){this.element=a;this.j=new Mr(0,0,0,0);this.D=new Mr(0,0,0,0);this.B=b;this.Ic=c;this.qa=d;this.ma=!1;this.timestamp=-1;this.N=new Rr(b.D,this.element,this.j,new Mr(0,0,0,0),0,0,Hr(),0)};
us=function(a){this.G=!1;this.j=a;this.D=function(){}};
Gia=function(a,b,c){this.B=void 0===c?0:c;this.j=a;this.Wd=null==b?"":b};
Hia=function(a){switch(Math.trunc(a.B)){case -16:return-16;case -8:return-8;case 0:return 0;case 8:return 8;case 16:return 16;default:return 16}};
Iia=function(a,b){return a.B<b.B?!0:a.B>b.B?!1:a.j<b.j?!0:a.j>b.j?!1:typeof a.Wd<typeof b.Wd?!0:typeof a.Wd>typeof b.Wd?!1:a.Wd<b.Wd};
vs=function(){this.C=0;this.j=[];this.B=!1};
Jia=function(a,b){(0,g.Zb)(b.j,function(c){a.add(c.j,c.Wd,Hia(c))})};
ws=function(a,b){var c=void 0===c?0:c;var d=void 0===d?!0:d;gr(b,function(e,f){d&&void 0===e||a.add(f,e,c)});
return a};
xs=function(a){var b=Kia;a.B&&(g.Wb(a.j,function(c,d){return Iia(d,c)?1:Iia(c,d)?-1:0}),a.B=!1);
return or(a.j,function(c,d){d=b(d);return""+c+(""!=c&&""!=d?"&":"")+d},"")};
Kia=function(a){var b=a.j;a=a.Wd;return""===a?b:"boolean"===typeof a?a?b:"":Array.isArray(a)?0===a.length?b:b+"="+a.join():b+"="+(g.Bb(["mtos","tos","p"],b)?a:encodeURIComponent(a))};
Lia=function(a){var b=void 0===b?!0:b;this.j=new vs;void 0!==a&&Jia(this.j,a);b&&this.j.add("v","unreleased",-16)};
Mia=function(a){var b=[],c=[];g.Vc(a,function(d,e){if(!(e in Object.prototype)&&"undefined"!=typeof d)switch(Array.isArray(d)&&(d=d.join(",")),d=[e,"=",d].join(""),e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}});
return b.concat(c)};
Nia=function(a){a=a.toString();a=a.substring(0,4E3);rr();Oha(a)};
Oia=function(){this.j=0};
Pia=function(a,b,c){(0,g.Zb)(a.C,function(d){var e=a.j;if(!d.j&&(d.C(b,c),d.D())){d.j=!0;var f=d.B(),h=new vs;h.add("id","av-js");h.add("type","verif");h.add("vtype",d.G);d=pr(Oia);h.add("i",d.j++);h.add("adk",e);ws(h,f);e=new Lia(h);Nia(e)}})};
ys=function(){this.B=this.C=this.D=this.j=0};
zs=function(a){this.B=a=void 0===a?Qia:a;this.j=g.mr(this.B,function(){return new ys})};
As=function(a,b){return Ria(a,function(c){return c.j},void 0===b?!0:b)};
Cs=function(a,b){return Bs(a,b,function(c){return c.j})};
Sia=function(a,b){return Ria(a,function(c){return c.C},void 0===b?!0:b)};
Ms=function(a,b){return Bs(a,b,function(c){return c.C})};
Ns=function(a,b){return Bs(a,b,function(c){return c.B})};
Tia=function(a){g.Zb(a.j,function(b){b.B=0})};
Ria=function(a,b,c){a=g.mr(a.j,function(d){return b(d)});
return c?a:Uia(a)};
Bs=function(a,b,c){var d=g.zb(a.B,function(e){return b<=e});
return-1==d?0:c(a.j[d])};
Uia=function(a){return g.mr(a,function(b,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
Os=function(){this.B=new zs;this.Sa=new ys;this.qa=this.N=-1;this.Za=1E3;this.fb=new zs([1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0]);this.Ea=this.Aa=-1};
Ps=function(a,b){return Sia(a.B,void 0===b?!0:b)};
Qs=function(a,b,c,d){var e=void 0===e?!1:e;c=Er(d,c);Zp(a,b,c,{capture:e})};
Ss=function(a,b){b=Rs(b);return 0===b?0:Rs(a)/b};
Rs=function(a){return Math.max(a.bottom-a.top,0)*Math.max(a.right-a.left,0)};
Via=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.qf(a)||a){var d=Ke(a),e=d&&$e(d),f=e&&e.frameElement;f&&(a=f)}}catch(h){break}}return!1};
Wia=function(a,b,c){if(!a||!b)return!1;b=Pr(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;fr(window.top)&&window.top&&window.top.document&&(window=window.top);if(!pia())return!1;a=window.document.elementFromPoint(a,b);if(!a)return!1;b=(b=(b=Ke(c))&&b.defaultView&&b.defaultView.frameElement)&&Via(b,a);var d=a===c;a=!d&&a&&Af(a,function(e){return e===c});
return!(b||d||a)};
Xia=function(a,b,c,d){return ls().C?!1:0>=Nr(a)||0>=a.getHeight()?!0:c&&d?kia(208,function(){return Wia(a,b,c)}):!1};
Ts=function(a,b,c){g.J.call(this);this.position=Yia.clone();this.eJ=this.aI();this.qP=-2;this.dca=Date.now();this.b0=-1;this.Qp=b;this.TI=null;this.gD=!1;this.sJ=null;this.opacity=-1;this.requestSource=c;this.lca=!1;this.vP=function(){};
this.t0=function(){};
this.Uj=new uha;this.Uj.Ot=a;this.Uj.j=a;this.Ft=!1;this.wv={HP:null,GP:null};this.B_=!0;this.OF=null;this.Mz=this.I7=!1;ur().K++;this.Vh=this.fO();this.V_=-1;this.cg=null;this.hasCompleted=this.E7=!1;this.Ic=new Op;tha(this.Ic);Zia(this);1==this.requestSource?Qp(this.Ic,"od",1):Qp(this.Ic,"od",0)};
Zia=function(a){a=a.Uj.Ot;var b;if(b=a&&a.getAttribute)b=/-[a-z]/.test("googleAvInapp")?!1:$ia&&a.dataset?"googleAvInapp"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+Vba()):!!a.getAttribute("data-"+Vba());b&&(ls().B=!0)};
Us=function(a,b){b!=a.Mz&&(a.Mz=b,a=ls(),b?a.K++:0<a.K&&a.K--)};
aja=function(a,b){if(a.cg){if(b.getName()===a.cg.getName())return;a.cg.dispose();a.cg=null}b=b.create(a.Uj.j,a.Ic,a.eq());if(b=null!=b&&b.LL()?b:null)a.cg=b};
bja=function(a,b,c){if(!a.TI||-1==a.Qp||-1===b.B||-1===a.TI.B)return 0;a=b.B-a.TI.B;return a>c?0:a};
cja=function(a,b,c){if(a.cg){a.cg.Fs();var d=a.cg.N,e=d.D,f=e.j;if(null!=d.K){var h=d.C;a.sJ=new g.ne(h.left-f.left,h.top-f.top)}f=a.HK()?Math.max(d.j,d.G):d.j;h={};null!==e.volume&&(h.volume=e.volume);e=a.DW(d);a.TI=d;a.Ra(f,b,c,!1,h,e,d.Z)}};
dja=function(a){if(a.gD&&a.OF){var b=1==Rp(a.Ic,"od"),c=ls().j,d=a.OF,e=a.cg?a.cg.getName():"ns",f=new g.se(Nr(c),c.getHeight());c=a.HK();a={Tba:e,sJ:a.sJ,Kca:f,HK:c,Ee:a.Vh.Ee,Eca:b};if(b=d.B){b.Fs();e=b.N;f=e.D.j;var h=null,l=null;null!=e.K&&f&&(h=e.C,h=new g.ne(h.left-f.left,h.top-f.top),l=new g.se(f.right-f.left,f.bottom-f.top));e=c?Math.max(e.j,e.G):e.j;c={Tba:b.getName(),sJ:h,Kca:l,HK:c,Eca:!1,Ee:e}}else c=null;c&&Pia(d,a,c)}};
eja=function(a,b,c){b&&(a.vP=b);c&&(a.t0=c)};
g.Vs=function(){};
g.Ws=function(a){return{value:a,done:!1}};
fja=function(){this.D=this.j=this.C=this.B=this.G=0};
gja=function(a){var b={};var c=g.gb()-a.G;b=(b.ptlt=c,b);(c=a.B)&&(b.pnk=c);(c=a.C)&&(b.pnc=c);(c=a.D)&&(b.pnmm=c);(a=a.j)&&(b.pns=a);return b};
hja=function(){Jp.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.mediaTime=-1};
Xs=function(a){return js(a.volume)&&0<a.volume};
Ys=function(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?function(){return!0}:d;
return function(e){var f=e[a];if(Array.isArray(f)&&d(e))return ija(f,b,c)}};
Zs=function(a,b){return function(c){return b(c)?c[a]:void 0}};
jja=function(a){return function(b){for(var c=0;c<a.length;c++)if(a[c]===b.e||void 0===a[c]&&!b.hasOwnProperty("e"))return!0;return!1}};
ija=function(a,b,c){return void 0===c||c?g.$s(a,function(d,e){return g.Bb(b,e)}):g.mr(b,function(d,e,f){return a.slice(0<e?f[e-1]+1:0,d+1).reduce(function(h,l){return h+l},0)})};
kja=function(){this.B=this.j=""};
lja=function(){};
at=function(a,b){var c={};if(void 0!==a)if(null!=b)for(var d in b){var e=b[d];d in Object.prototype||null!=e&&(c[d]="function"===typeof e?e(a):a[e])}else g.rd(c,a);return xs(ws(new vs,c))};
mja=function(){var a={};this.B=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.avs=[64,0],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a.mut=[33554432,33554432],a.umutb=[67108864,67108864],a.tvoff=[134217728,134217728],a);this.j={};for(var b in this.B)0<this.B[b][1]&&(this.j[b]=0);this.C=0};
bt=function(a,b){var c=a.B[b],d=c[1];a.C+=c[0];0<d&&0==a.j[b]&&(a.j[b]=1)};
nja=function(a){var b=g.bd(a.B),c=0,d;for(d in a.j)g.Bb(b,d)&&1==a.j[d]&&(c+=a.B[d][1],a.j[d]=2);return c};
oja=function(a){var b=0,c;for(c in a.j){var d=a.j[c];if(1==d||2==d)b+=a.B[c][1]}return b};
ct=function(){this.j=this.B=0};
dt=function(){Os.call(this);this.C=new ys;this.Na=this.Y=this.Ha=0;this.Z=-1;this.ob=new ys;this.G=new ys;this.j=new zs;this.K=this.D=-1;this.ma=new ys;this.Za=2E3;this.Ka=new ct;this.Xa=new ct;this.Va=new ct};
et=function(a,b,c){var d=a.Na;Jr||c||-1==a.Z||(d+=b-a.Z);return d};
pja=function(){this.C=!1};
ft=function(a,b){this.C=!1;this.D=a;this.Y=b;this.G=0};
gt=function(a,b){ft.call(this,a,b);this.N=[]};
qja=function(){};
ht=function(){};
jt=function(a,b,c,d){ts.call(this,a,b,c,d)};
kt=function(a,b,c){ts.call(this,null,a,b,c);this.K=a.isActive();this.G=0};
lt=function(a){return[a.top,a.left,a.bottom,a.right]};
mt=function(a,b,c,d,e,f){f=void 0===f?new ht:f;Ts.call(this,b,c,d);this.KQ=e;this.rN=0;this.Yh={};this.Rg=new mja;this.J0={};this.bj="";this.Xa=null;this.Mb=!1;this.j=[];this.wr=f.B();this.K=f.C();this.D=null;this.C=-1;this.Na=this.Y=void 0;this.qa=this.ma=0;this.Ea=-1;this.fb=this.Za=!1;this.Ha=this.Z=this.B=this.PB=this.tb=0;new zs;this.Ka=this.Sa=0;this.Va=-1;this.pk=0;this.N=g.Id;this.Aa=[this.aI()];this.Fb=2;this.Ax={};this.Ax.pause="p";this.Ax.resume="r";this.Ax.skip="s";this.Ax.mute="m";this.Ax.unmute=
"um";this.Ax.exitfullscreen="ef";this.G=null;this.ob=this.rb=!1};
nt=function(a){a.hasCompleted=!0;0!=a.pk&&(a.pk=3)};
ot=function(a){return void 0===a?a:Number(a)?is(a,3):0};
pt=function(a,b){return a.Aa[null!=b&&b<a.Aa.length?b:a.Aa.length-1]};
rja=function(a){var b=!!Rp(ur().Ic,"umt");return a.Y||!b&&!a.Na?0:1};
sja=function(a,b){a.Nn()?b=0:-1==a.Qp?b=0:(b-=a.Qp,b=b>Math.max(1E4,a.C/3)?0:b);var c=a.N(a)||{};c=void 0!==c.currentTime?c.currentTime:a.ma;var d=c-a.ma,e=0;0<=d?(a.qa+=b,a.Ka+=Math.max(b-d,0),e=Math.min(d,a.qa)):a.Sa+=Math.abs(d);0!=d&&(a.qa=0);-1==a.Va&&0<d&&(a.Va=0<=Lr?Hr()-Lr:-1);a.ma=c;return e};
tja=function(a,b){ks(a.K,function(c){return c.D==b.D})||a.K.push(b)};
uja=function(a){var b=Cs(a.vj().j,1);return qt(a,b)};
qt=function(a,b,c){return 15E3<=b?!0:a.Za?(void 0===c?0:c)?!0:0<a.C?b>=a.C/2:0<a.Ea?b>=a.Ea:!1:!1};
vja=function(a){var b=is(a.Vh.Ee,2),c=a.Rg.C,d=a.Vh,e=pt(a),f=ot(e.D),h=ot(e.K),l=ot(d.volume),m=is(e.N,2),n=is(e.qa,2),p=is(d.Ee,2),q=is(e.Aa,2),r=is(e.Ea,2);d=is(d.zk,2);a=a.nt().clone();a.round();e=Ps(e,!1);return{Jca:b,bE:c,jJ:f,YI:h,LC:l,kJ:m,aJ:n,Ee:p,mJ:q,bJ:r,zk:d,position:a,oJ:e}};
xja=function(a,b){wja(a.j,b,function(){return{Jca:0,bE:void 0,jJ:-1,YI:-1,LC:-1,kJ:-1,aJ:-1,Ee:-1,mJ:-1,bJ:-1,zk:-1,position:void 0,oJ:[]}});
a.j[b]=vja(a)};
wja=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
tt=function(a,b,c){var d=a.J0[b];if(null!=d)return d;d=yja(a,b);var e=hd(rt,function(f){return f==b});
a=zja(a,d,d,c,Aja[rt[e]]);"fully_viewable_audible_half_duration_impression"==b&&(a.std="csm");return a};
ut=function(a,b,c){var d=[b];if(a!=b||c!=b)d.unshift(a),d.push(c);return d};
zja=function(a,b,c,d,e){if(a.Ft)return{"if":0,vs:0};var f=a.nt().clone();f.round();var h=ls(),l=ur(),m=a.vj(),n=a.cg?a.cg.getName():"ns",p={};p["if"]=h.C?1:void 0;p.sdk=a.D?a.D:void 0;p.t=a.dca;p.p=[f.top,f.left,f.bottom,f.right];p.tos=As(m.B,!1);p.mtos=Ps(m);p.mcvt=m.Sa.C;p.ps=void 0;f=et(m,Hr(),a.Nn());p.vht=f;p.mut=m.ob.C;p.a=ot(a.Vh.volume);p.mv=ot(m.K);p.fs=a.Mz?1:0;p.ft=m.ma.j;p.at=m.G.j;p.as=0<m.D?1:0;p.atos=As(m.j);p.ssb=As(m.fb,!1);p.amtos=Sia(m.j,!1);p.uac=a.tb;p.vpt=m.C.j;"nio"==n&&(p.nio=
1,p.avms="nio");p.gmm="4";p.gdr=qt(a,m.C.j,!0)?1:0;p.efpf=a.Fb;if("gsv"==n||"nis"==n)n=a.cg,0<n.G&&(p.nnut=n.G);p.tcm=rja(a);p.nmt=a.Sa;p.bt=a.Ka;p.pst=a.Va;p.vpaid=a.Y;p.dur=a.C;p.vmtime=a.ma;p.is=a.Rg.C;1<=a.j.length&&(p.i0=a.j[0].bE,p.a0=[a.j[0].LC],p.c0=[a.j[0].Ee],p.ss0=[a.j[0].zk],n=a.j[0].position,p.p0=n?lt(n):void 0);2<=a.j.length&&(p.i1=a.j[1].bE,p.a1=ut(a.j[1].jJ,a.j[1].LC,a.j[1].YI),p.c1=ut(a.j[1].kJ,a.j[1].Ee,a.j[1].aJ),p.ss1=ut(a.j[1].mJ,a.j[1].zk,a.j[1].bJ),n=a.j[1].position,p.p1=n?
lt(n):void 0,p.mtos1=a.j[1].oJ);3<=a.j.length&&(p.i2=a.j[2].bE,p.a2=ut(a.j[2].jJ,a.j[2].LC,a.j[2].YI),p.c2=ut(a.j[2].kJ,a.j[2].Ee,a.j[2].aJ),p.ss2=ut(a.j[2].mJ,a.j[2].zk,a.j[2].bJ),n=a.j[2].position,p.p2=n?lt(n):void 0,p.mtos2=a.j[2].oJ);4<=a.j.length&&(p.i3=a.j[3].bE,p.a3=ut(a.j[3].jJ,a.j[3].LC,a.j[3].YI),p.c3=ut(a.j[3].kJ,a.j[3].Ee,a.j[3].aJ),p.ss3=ut(a.j[3].mJ,a.j[3].zk,a.j[3].bJ),n=a.j[3].position,p.p3=n?lt(n):void 0,p.mtos3=a.j[3].oJ);p.cs=oja(a.Rg);b&&(p.ic=nja(a.Rg),p.dvpt=m.C.B,p.dvs=Ns(m.B,
.5),p.dfvs=Ns(m.B,1),p.davs=Ns(m.j,.5),p.dafvs=Ns(m.j,1),c&&(m.C.B=0,Tia(m.B),Tia(m.j)),a.jr()&&(p.dtos=m.Ha,p.dav=m.Y,p.dtoss=a.rN+1,c&&(m.Ha=0,m.Y=0,a.rN++)),p.dat=m.G.B,p.dft=m.ma.B,c&&(m.G.B=0,m.ma.B=0));p.ps=[h.G.width,h.G.height];p.bs=[Nr(h.j),h.j.getHeight()];p.scs=[h.D.width,h.D.height];p.dom=h.domain;a.PB&&(p.vds=a.PB);if(0<a.K.length||a.wr)b=g.Hb(a.K),a.wr&&b.push(a.wr),p.pings=g.mr(b,function(q){return q.toString()});
b=g.mr(g.$s(a.K,function(q){return q.K()}),function(q){return q.getId()});
uaa(b);p.ces=b;a.B&&(p.vmer=a.B);a.Z&&(p.vmmk=a.Z);a.Ha&&(p.vmiec=a.Ha);p.avms=a.cg?a.cg.getName():"ns";a.cg&&g.rd(p,a.cg.gt());d?(p.c=is(a.Vh.Ee,2),p.ss=is(a.Vh.zk,2)):p.tth=Hr()-Bja;p.mc=is(m.qa,2);p.nc=is(m.N,2);p.mv=ot(m.K);p.nv=ot(m.D);p.lte=is(a.qP,2);d=pt(a,e);Ps(m);p.qmtos=Ps(d);p.qnc=is(d.N,2);p.qmv=ot(d.K);p.qnv=ot(d.D);p.qas=0<d.D?1:0;p.qi=a.bj;p.avms||(p.avms="geo");p.psm=m.Ka.j;p.psv=m.Ka.getValue();p.psfv=m.Xa.getValue();p.psa=m.Va.getValue();l=rha(l.Ic);l.length&&(p.veid=l);a.G&&g.rd(p,
gja(a.G));p.avas=a.MH();p.vs=a.PW();return p};
yja=function(a,b){if(g.Bb(Cja,b))return!0;var c=a.Yh[b];return void 0!==c?(a.Yh[b]=!0,!c):!1};
Eja=function(){this.j={};var a=$e();vt(this,a,document);var b=Dja();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)vt(this,c,c.document);vt(this,a.top,a.top.document)}}catch(d){}};
Dja=function(){var a=document.documentElement;try{if(!fr($e().top))return"2";var b=[],c=$e(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
vt=function(a,b,c){Qs(c,"mousedown",function(){return Fja(a)},301);
Qs(b,"scroll",function(){return Gja(a)},302);
Qs(c,"touchmove",function(){return Hja(a)},303);
Qs(c,"mousemove",function(){return Ija(a)},304);
Qs(c,"keydown",function(){return Jja(a)},305)};
Fja=function(a){g.Vc(a.j,function(b){1E5<b.C||++b.C})};
Gja=function(a){g.Vc(a.j,function(b){1E5<b.j||++b.j})};
Hja=function(a){g.Vc(a.j,function(b){1E5<b.j||++b.j})};
Jja=function(a){g.Vc(a.j,function(b){1E5<b.B||++b.B})};
Ija=function(a){g.Vc(a.j,function(b){1E5<b.D||++b.D})};
Kja=function(){this.j=[];this.B=[]};
wt=function(a,b){return g.yb(a.j,function(c){return c.bj==b})};
Lja=function(a,b){return b?g.yb(a.j,function(c){return c.Uj.Ot==b}):null};
Mja=function(a,b){return g.yb(a.B,function(c){return 2==c.Ep()&&c.bj==b})};
zt=function(){var a=xt;return 0==a.j.length?a.B:0==a.B.length?a.j:g.Fb(a.B,a.j)};
Nja=function(a,b){a=1==b.Ep()?a.j:a.B;var c=xb(a,function(d){return d==b});
return-1!=c?(a.splice(c,1),b.cg&&b.cg.xG(),b.dispose(),!0):!1};
Oja=function(a){var b=xt;if(Nja(b,a)){switch(a.Ep()){case 0:var c=function(){return null};
case 2:c=function(){return Mja(b,a.bj)};
break;case 1:c=function(){return wt(b,a.bj)}}for(var d=c();d;d=c())Nja(b,d)}};
Pja=function(a){var b=xt;a=g.$s(a,function(c){return!Lja(b,c.Uj.Ot)});
b.j.push.apply(b.j,g.oa(a))};
Qja=function(a){var b=[];g.Zb(a,function(c){ks(xt.j,function(d){return d.Uj.Ot===c.Uj.Ot&&d.bj===c.bj})||(xt.j.push(c),b.push(c))})};
At=function(){this.j=this.B=null};
Rja=function(a,b){function c(d,e){b(d,e)}
if(null==a.B)return!1;a.j=g.yb(a.B,function(d){return null!=d&&d.FT()});
a.j&&(a.j.init(c)?Dia(a.j.j):b(a.j.j.sz(),a.j));return null!=a.j};
Bt=function(a){a=Sja(a);us.call(this,a.length?a[a.length-1]:new ps(Xp,0));this.C=a;this.B=null};
Sja=function(a){if(!a.length)return[];a=(0,g.$s)(a,function(c){return null!=c&&c.mC()});
for(var b=1;b<a.length;b++)qs(a[b-1],a[b]);return a};
Ct=function(a,b,c,d){ts.call(this,a,b,c,d);this.Y=this.Z=this.G=this.K=this.C=null};
Dt=function(a){return a.C&&a.C.takeRecords?a.C.takeRecords():[]};
Uja=function(a){if(!a.element)return!1;var b=a.element,c=a.B.j.C,d=ur().j.j;a.C=new c.IntersectionObserver(tr(d,function(e){return Et(a,e)}),Tja);
d=tr(d,function(){a.C.unobserve(b);a.C.observe(b);Et(a,Dt(a))});
c.ResizeObserver?(a.K=new c.ResizeObserver(d),a.K.observe(b)):c.MutationObserver&&(a.G=new g.Ra.MutationObserver(d),a.G.observe(b,{attributes:!0,childList:!0,characterData:!0,subtree:!0}));a.C.observe(b);Et(a,Dt(a));return!0};
Et=function(a,b){try{if(b.length){a.Z||(a.Z=Hr());var c=Vja(b),d=uia(a.element,a.B.j.C),e=d.x,f=d.y;a.j=new Mr(Math.round(f),Math.round(e)+c.boundingClientRect.width,Math.round(f)+c.boundingClientRect.height,Math.round(e));var h=xia(c.intersectionRect);a.D=Pr(h,a.j.left-h.left,a.j.top-h.top)}}catch(l){a.xG(),Gr(299,l)}};
Vja=function(a){return or(a,function(b,c){return b.time>c.time?b:c},a[0])};
Ft=function(a){a=void 0===a?Xp:a;us.call(this,new ps(a,2))};
Gt=function(){var a=Wja();ps.call(this,Xp.top,a,"geo")};
Wja=function(){ur();var a=ls();return a.C||a.B?0:2};
Xja=function(){};
Ht=function(){this.done=!1;this.j={A4:0,XU:0,Xjb:0,WV:0,JO:-1,n5:0,m5:0,o5:0,Qba:0};this.G=null;this.K=!1;this.C=null;this.N=0;this.B=new os(this)};
Jt=function(){var a=It;a.K||(a.K=!0,Yja(a,function(){return a.D.apply(a,g.oa(g.Ja.apply(0,arguments)))}),a.D())};
Zja=function(){pr(Xja);var a=pr(At);null!=a.j&&a.j.j?Dia(a.j.j):ls().update(Xp)};
Kt=function(a,b,c){if(!a.done&&(a.B.cancel(),0!=b.length)){a.C=null;try{Zja();var d=Hr();ur().G=d;if(null!=pr(At).j)for(var e=0;e<b.length;e++)cja(b[e],d,c);for(d=0;d<b.length;d++)dja(b[d]);++a.j.WV}finally{c?g.Zb(b,function(f){f.Vh.Ee=0}):a.B.schedule()}}};
Yja=function(a,b){if(!a.G){b=Er(142,b);rr();var c;ms.visibilityState?c="visibilitychange":ms.mozVisibilityState?c="mozvisibilitychange":ms.webkitVisibilityState&&(c="webkitvisibilitychange");c&&Zp(ms,c,b,{capture:!1})&&(a.G=b)}};
$ja=function(){var a=pr(At);if(null!=a.j){var b=a.j;g.Zb(zt(),function(c){return aja(c,b)})}};
aka=function(a,b){a=a.N;Jr&&(a+=b-Kr);return a};
bka=function(a){a=void 0===a?function(){return{}}:a;
Br.dW="av-js";Ar.j=.01;jia([function(b){var c=ur(),d={};d=(d.bin=c.B,d.type="error",d);c=Sp(c.Ic);if(!It.C){var e=It,f=Xp.document,h=0<=Ir?Hr()-Ir:-1,l=Hr();-1==e.j.JO&&(h=l);var m=ls(),n=ur(),p=Sp(n.Ic),q=zt();try{if(0<q.length){var r=m.j;r&&(p.bs=[Nr(r),r.getHeight()]);var t=m.G;t&&(p.ps=[t.width,t.height]);Xp.screen&&(p.scs=[Xp.screen.width,Xp.screen.height])}else p.url=encodeURIComponent(Xp.location.href.substring(0,512)),f.referrer&&(p.referrer=encodeURIComponent(f.referrer.substring(0,512)));
p.tt=h;p.pt=Ir;p.bin=n.B;void 0!==Xp.google_osd_load_pub_page_exp&&(p.olpp=Xp.google_osd_load_pub_page_exp);p.deb=[1,e.j.A4,e.j.XU,e.j.WV,e.j.JO,0,e.B.B,e.j.n5,e.j.m5,e.j.o5,e.j.Qba,-1].join(";");p.tvt=aka(e,l);m.B&&(p.inapp=1);if(null!==Xp&&Xp!=Xp.top){0<q.length&&(p.iframe_loc=encodeURIComponent(Xp.location.href.substring(0,512)));var u=m.N;p.is=[Nr(u),u.getHeight()]}}catch(x){p.error=1}It.C=p}r=g.pd(It.C);t=ur().j;1==Rp(t.C,"prf")?(u=new sr,e=t.j,f=0,-1<e.j&&(f=e.C.j.now()-e.j),u=qj(u,1,Yh(e.D+
f),0),e=t.j,u=qj(u,5,ri(-1<e.j?e.B+1:e.B),0),u=qj(u,2,wi(t.B.j.C()),"0"),u=qj(u,3,wi(t.B.j.B()),"0"),t=qj(u,4,wi(t.B.j.j()),"0"),u={},t=(u.pf=g.qg(t.j()),u)):t={};g.rd(r,t);g.rd(b,d,c,r,a())}])};
dka=function(){var a=cka||Xp;if(!a)return"";var b=[];if(!a.location||!a.location.href)return"";b.push("url="+encodeURIComponent(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+encodeURIComponent(a.document.referrer.substring(0,512)));return b.join("&")};
Lt=function(){var a="youtube.player.web_20231128_01_RC01".match(/_(\d{8})_RC\d+$/)||"youtube.player.web_20231128_01_RC01".match(/_(\d{8})_\d+_\d+$/)||"youtube.player.web_20231128_01_RC01".match(/_(\d{8})_\d+\.\d+$/)||"youtube.player.web_20231128_01_RC01".match(/_(\d{8})_\d+_RC\d+$/),b;if(2==(null==(b=a)?void 0:b.length))return a[1];a="youtube.player.web_20231128_01_RC01".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);var c;return 3==(null==(c=a)?void 0:c.length)?"20"+a[1]+a[2]:null};
eka=function(){return"av.default_js".includes("ima_html5_sdk")?{jp:"ima",qp:null}:"av.default_js".includes("ima_native_sdk")?{jp:"nima",qp:null}:"av.default_js".includes("admob-native-video-javascript")?{jp:"an",qp:null}:"youtube.player.web_20231128_01_RC01".includes("cast_js_sdk")?{jp:"cast",qp:Lt()}:"youtube.player.web_20231128_01_RC01".includes("youtube.player.web")?{jp:"yw",qp:Lt()}:"youtube.player.web_20231128_01_RC01".includes("outstream_web_client")?{jp:"out",qp:Lt()}:"youtube.player.web_20231128_01_RC01".includes("drx_rewarded_web")?
{jp:"r",qp:Lt()}:"youtube.player.web_20231128_01_RC01".includes("gam_native_web_video")?{jp:"n",qp:Lt()}:"youtube.player.web_20231128_01_RC01".includes("admob_interstitial_video")?{jp:"int",qp:Lt()}:{jp:"j",qp:null}};
Ot=function(a,b){var c={sv:"959"};null!==Mt&&(c.v=Mt);c.cb=fka;c.nas=xt.j.length;c.msg=a;void 0!==b&&(a=gka(b))&&(c.e=Nt[a]);return c};
Pt=function(a){return ec(a,"custom_metric_viewable")};
gka=function(a){var b=Pt(a)?"custom_metric_viewable":a.toLowerCase();return hd(rt,function(c){return c==b})};
hka=function(){this.j=void 0;this.B=!1;this.C=0;this.D=-1;this.G="tos"};
kka=function(a){try{var b=a.split(",");return b.length>g.bd(ika).length?null:or(b,function(c,d){d=d.toLowerCase().split("=");if(2!=d.length||void 0===jka[d[0]]||!jka[d[0]](d[1]))throw Error("Entry ("+d[0]+", "+d[1]+") is invalid.");c[d[0]]=d[1];return c},{})}catch(c){return null}};
lka=function(a,b){if(void 0==a.j)return 0;switch(a.G){case "mtos":return a.B?Ms(b.j,a.j):Ms(b.B,a.j);case "tos":return a.B?Cs(b.j,a.j):Cs(b.B,a.j)}return 0};
Qt=function(a,b,c,d){ft.call(this,b,d);this.N=a;this.Z=c};
Rt=function(){};
St=function(a){ft.call(this,"fully_viewable_audible_half_duration_impression",a)};
Tt=function(a){this.j=a};
Ut=function(a,b){ft.call(this,a,b)};
Vt=function(a){gt.call(this,"measurable_impression",a)};
Wt=function(){Tt.apply(this,arguments)};
Xt=function(a,b,c){kt.call(this,a,b,c)};
Yt=function(a){a=void 0===a?Xp:a;us.call(this,new ps(a,2))};
Zt=function(a,b,c){kt.call(this,a,b,c)};
$t=function(a){a=void 0===a?Xp:a;us.call(this,new ps(a,2))};
au=function(){ps.call(this,Xp,2,"mraid");this.Ka=0;this.qa=this.Aa=!1;this.N=null;this.B=oia(this.C);this.D.j=new Mr(0,0,0,0);this.Na=!1};
bu=function(a,b,c){a.mu("addEventListener",b,c)};
pka=function(a){ur().D=!!a.mu("isViewable");bu(a,"viewableChange",mka);"loading"===a.mu("getState")?bu(a,"ready",nka):oka(a)};
oka=function(a){"string"===typeof a.B.Rn.AFMA_LIDAR?(a.Aa=!0,qka(a)):(a.B.compatibility=3,a.N="nc",a.fail("w"))};
qka=function(a){a.qa=!1;var b=1==Rp(ur().Ic,"rmmt"),c=!!a.mu("isViewable");(b?!c:1)&&rr().setTimeout(Fr(524,function(){a.qa||(rka(a),Gr(540,Error()),a.N="mt",a.fail("w"))}),500);
ska(a);bu(a,a.B.Rn.AFMA_LIDAR,tka)};
ska=function(a){var b=1==Rp(ur().Ic,"sneio"),c=void 0!==a.B.Rn.AFMA_LIDAR_EXP_1,d=void 0!==a.B.Rn.AFMA_LIDAR_EXP_2;(b=b&&d)&&(a.B.Rn.AFMA_LIDAR_EXP_2=!0);c&&(a.B.Rn.AFMA_LIDAR_EXP_1=!b)};
rka=function(a){a.mu("removeEventListener",a.B.Rn.AFMA_LIDAR,tka);a.Aa=!1};
uka=function(a,b){if("loading"===a.mu("getState"))return new g.se(-1,-1);b=a.mu(b);if(!b)return new g.se(-1,-1);a=parseInt(b.width,10);b=parseInt(b.height,10);return isNaN(a)||isNaN(b)?new g.se(-1,-1):new g.se(a,b)};
nka=function(){try{var a=pr(au);a.mu("removeEventListener","ready",nka);oka(a)}catch(b){Gr(541,b)}};
tka=function(a,b){try{var c=pr(au);c.qa=!0;var d=a?new Mr(a.y,a.x+a.width,a.y+a.height,a.x):new Mr(0,0,0,0);var e=Hr(),f=ns();var h=new Qr(e,f,c);h.j=d;h.volume=b;c.At(h)}catch(l){Gr(542,l)}};
mka=function(a){var b=ur(),c=pr(au);a&&!b.D&&(b.D=!0,c.Na=!0,c.N&&c.fail("w",!0))};
cu=function(){this.isInitialized=!1;this.j=this.B=null;var a={};this.K=(a.start=this.m7,a.firstquartile=this.h7,a.midpoint=this.j7,a.thirdquartile=this.n7,a.complete=this.e7,a.error=this.f7,a.pause=this.JQ,a.resume=this.c_,a.skip=this.l7,a.viewable_impression=this.Fp,a.mute=this.LB,a.unmute=this.LB,a.fullscreen=this.i7,a.exitfullscreen=this.g7,a.fully_viewable_audible_half_duration_impression=this.Fp,a.measurable_impression=this.Fp,a.abandon=this.JQ,a.engagedview=this.Fp,a.impression=this.Fp,a.creativeview=
this.Fp,a.progress=this.LB,a.custom_metric_viewable=this.Fp,a.bufferstart=this.JQ,a.bufferfinish=this.c_,a.audio_measurable=this.Fp,a.audio_audible=this.Fp,a);a={};this.N=(a.overlay_resize=this.k7,a.abandon=this.xO,a.close=this.xO,a.collapse=this.xO,a.overlay_unmeasurable_impression=function(b){return tt(b,"overlay_unmeasurable_impression",ns())},a.overlay_viewable_immediate_impression=function(b){return tt(b,"overlay_viewable_immediate_impression",ns())},a.overlay_unviewable_impression=function(b){return tt(b,
"overlay_unviewable_impression",ns())},a.overlay_viewable_end_of_session_impression=function(b){return tt(b,"overlay_viewable_end_of_session_impression",ns())},a);
ur().B=3;vka(this)};
du=function(a,b,c,d){a=a.lF(null,d,!0,b);a.D=c;Pja([a]);return a};
wka=function(a,b,c){pha(b);var d=a.j;g.Zb(b,function(e){var f=g.mr(e.criteria,function(h){var l=kka(h);if(null==l)h=null;else if(h=new hka,null!=l.visible&&(h.j=l.visible/100),null!=l.audible&&(h.B=1==l.audible),null!=l.time){var m="mtos"==l.timetype?"mtos":"tos",n=Eaa(l.time,"%")?"%":"ms";l=parseInt(l.time,10);"%"==n&&(l/=100);h.setTime(l,n,m)}return h});
ks(f,function(h){return null==h})||tja(c,new Qt(e.id,e.event,f,d))})};
xka=function(){var a=[],b=ur();a.push(pr(Gt));Rp(b.Ic,"mvp_lv")&&a.push(pr(au));b=[new Yt,new $t];b.push(new Bt(a));b.push(new Ft(Xp));return b};
yka=function(a){if(!a.isInitialized){a.isInitialized=!0;try{var b=Hr(),c=ur(),d=ls();Ir=b;c.C=79463069;"o"!==a.B&&(cka=Eha(Xp));if(Pha()){It.j.XU=0;It.j.JO=Hr()-b;var e=xka(),f=pr(At);f.B=e;Rja(f,function(){eu()})?It.done||($ja(),qs(f.j.j,a),Jt()):d.C?eu():Jt()}else fu=!0}catch(h){throw xt.reset(),h;
}}};
hu=function(a){It.B.cancel();gu=a;It.done=!0};
iu=function(a){if(a.B)return a.B;var b=pr(At).j;if(b)switch(b.getName()){case "nis":a.B="n";break;case "gsv":a.B="m"}a.B||(a.B="h");return a.B};
ju=function(a,b,c){if(null==a.j)return b.PB|=4,!1;a=zka(a.j,c,b);b.PB|=a;return 0==a};
eu=function(){var a=[new Ft(Xp)],b=pr(At);b.B=a;Rja(b,function(){hu("i")})?It.done||($ja(),Jt()):hu("i")};
Aka=function(a,b){if(!a.Mb){var c=tt(a,"start",ns());c=a.KQ.j(c).j;var d={id:"lidarv"};d.r=b;d.sv="959";null!==Mt&&(d.v=Mt);Jl(c,function(e,f){return d[e]="mtos"==e||"tos"==e?f:encodeURIComponent(f)});
b=dka();Jl(b,function(e,f){return d[e]=encodeURIComponent(f)});
b="//pagead2.googlesyndication.com/pagead/gen_204?"+xs(ws(new vs,d));Nia(b);a.Mb=!0}};
ku=function(a,b,c){Kt(It,[a],!ns());xja(a,c);4!=c&&wja(a.Aa,c,a.aI);return tt(a,b,ns())};
vka=function(a){bka(function(){var b=Bka();null!=a.B&&(b.sdk=a.B);var c=pr(At);null!=c.j&&(b.avms=c.j.getName());return b})};
Cka=function(a,b,c,d){var e=Lja(xt,c);null!==e&&e.bj!==b&&(a.rH(e),e=null);e||(b=a.lF(c,Hr(),!1,b),0==xt.B.length&&(ur().C=79463069),Qja([b]),e=b,e.D=iu(a),d&&(e.Xa=d));return e};
Dka=function(a,b){var c=a[b];void 0!==c&&0<c&&(a[b]=Math.floor(1E3*c))};
Bka=function(){var a=ls(),b={},c={},d={};return Object.assign({},(b.sv="959",b),null!==Mt&&(c.v=Mt,c),(d["if"]=a.C?"1":"0",d.nas=String(xt.j.length),d))};
lu=function(a){ft.call(this,"audio_audible",a)};
mu=function(a){gt.call(this,"audio_measurable",a)};
nu=function(){Tt.apply(this,arguments)};
ou=function(){};
Eka=function(a){this.j=a};
zka=function(a,b,c){a=a.B();if("function"===typeof a){var d={};var e={};d=Object.assign({},null!==Mt&&(d.v=Mt,d),(e.sv="959",e.cb=fka,e.e=Fka(b),e));e=tt(c,b,ns());g.rd(d,e);c.J0[b]=e;d=2==c.Ep()?Mia(d).join("&"):c.KQ.j(d).j;try{return a(c.bj,d,b),0}catch(f){return 2}}else return 1};
Fka=function(a){var b=Pt(a)?"custom_metric_viewable":a;a=hd(rt,function(c){return c==b});
return Nt[a]};
pu=function(){cu.call(this);this.G=null;this.D=!1;this.C="ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"};
Gka=function(a,b,c){c=c.opt_configurable_tracking_events;null!=a.j&&Array.isArray(c)&&wka(a,c,b)};
Hka=function(a,b,c){var d=wt(xt,b);d||(d=c.opt_nativeTime||-1,d=du(a,b,iu(a),d),c.opt_osdId&&(d.Xa=c.opt_osdId));return d};
Ika=function(a,b,c){var d=wt(xt,b);d||(d=du(a,b,"n",c.opt_nativeTime||-1));return d};
Jka=function(a,b){var c=wt(xt,b);c||(c=du(a,b,"h",-1));return c};
Kka=function(a){ur();switch(iu(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
Nka=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.rd(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);var f=a.iI(b,c);c=f?f.KQ:a.mN();if(e.opt_bounds)return c.j(Ot("ol",d));if(void 0!==d)if(void 0!==gka(d))if(fu)a=Ot("ue",d);else if(yka(a),"i"==gu)a=Ot("i",d),a["if"]=0;else if(b=a.iI(b,e)){b:{"i"==gu&&(b.Ft=!0);f=e.opt_fullscreen;void 0!==f&&Us(b,!!f);var h;if(f=!ls().B)(f=ic(g.mc(),"CrKey")||ic(g.mc(),"PlayStation")||ic(g.mc(),"Roku")||zia()||ic(g.mc(),"Xbox"))||(f=g.mc(),f=ic(f,"AppleTV")||ic(f,
"Apple TV")||ic(f,"CFNetwork")||ic(f,"tvOS")),f||(f=g.mc(),f=ic(f,"sdk_google_atv_x86")||ic(f,"Android TV")),f=!f;f&&(rr(),f=0===$p(ms));if(h=f){switch(b.Ep()){case 1:Aka(b,"pv");break;case 2:a.lR(b)}hu("pv")}f=d.toLowerCase();if(h=!h)h=Rp(ur().Ic,"ssmol")&&"loaded"===f?!1:g.Bb(Lka,f);if(h&&0==b.pk){"i"!=gu&&(It.done=!1);h=void 0!==e?e.opt_nativeTime:void 0;Lr=h="number"===typeof h?h:Hr();b.gD=!0;var l=ns();b.pk=1;b.Yh={};b.Yh.start=!1;b.Yh.firstquartile=!1;b.Yh.midpoint=!1;b.Yh.thirdquartile=!1;
b.Yh.complete=!1;b.Yh.resume=!1;b.Yh.pause=!1;b.Yh.skip=!1;b.Yh.mute=!1;b.Yh.unmute=!1;b.Yh.viewable_impression=!1;b.Yh.measurable_impression=!1;b.Yh.fully_viewable_audible_half_duration_impression=!1;b.Yh.fullscreen=!1;b.Yh.exitfullscreen=!1;b.rN=0;l||(b.vj().Z=h);Kt(It,[b],!l)}(h=b.Ax[f])&&bt(b.Rg,h);Rp(ur().Ic,"fmd")||g.Bb(Mka,f)&&b.wr&&b.wr.B(b,null);switch(b.Ep()){case 1:var m=Pt(f)?a.K.custom_metric_viewable:a.K[f];break;case 2:m=a.N[f]}if(m&&(d=m.call(a,b,e,d),Rp(ur().Ic,"fmd")&&g.Bb(Mka,f)&&
b.wr&&b.wr.B(b,null),void 0!==d)){e=Ot(void 0,f);g.rd(e,d);d=e;break b}d=void 0}3==b.pk&&a.rH(b);a=d}else a=Ot("nf",d);else a=void 0;else fu?a=Ot("ue"):f?(a=Ot(),g.rd(a,zja(f,!0,!1,!1))):a=Ot("nf");return"string"===typeof a?c.j():c.j(a)};
Oka=function(a,b){b&&(a.C=b)};
Pka=function(a){var b={};return b.viewability=a.j,b.googleViewability=a.B,b};
Qka=function(a,b,c){c=void 0===c?{}:c;a=Nka(pr(pu),b,c,a);return Pka(a)};
Rka=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.C=!b&&/[?&]ae=1(&|$)/.test(a);this.D=!b&&/[?&]ae=2(&|$)/.test(a);if((this.j=/[?&]adurl=([^&]*)/.exec(a))&&this.j[1]){try{var c=decodeURIComponent(this.j[1])}catch(d){c=null}this.B=c}};
Uka=function(a){if(g.fc(g.xe(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.no(a)}catch(c){return null!=g.yb(Ska,function(d){return 0<a.search(d)})}return b.K.match(Tka)?!0:null!=g.yb(Ska,function(c){return null!=a.match(c)})};
g.qu=function(a,b){return a.replace(Vka,function(c,d){try{var e=g.kd(b,d);if(null==e||null==e.toString())return c;e=e.toString();if(""==e||!g.fc(g.xe(e)))return encodeURIComponent(e).replace(/%2C/g,",")}catch(f){}return c})};
tu=function(a){g.Dd.call(this);var b=this;this.G=this.B=0;this.On=null!=a?a:{Ri:function(e,f){return setTimeout(e,f)},
Rj:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.C=function(){return g.I(function(e){return g.y(e,ru(b),0)})};
window.addEventListener("offline",this.C);window.addEventListener("online",this.C);this.G||this.Bf()};
Wka=function(){var a=g.uu;tu.instance||(tu.instance=new tu(a));return tu.instance};
ru=function(a,b){return a.D?a.D:a.D=new Promise(function(c){var d,e,f,h;return g.I(function(l){switch(l.j){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,h=!1,g.Aa(l,2,3),d&&(a.B=a.On.Ri(function(){d.abort()},b||2E4)),g.y(l,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:h=!0;case 3:g.Da(l);a.D=void 0;a.B&&(a.On.Rj(a.B),a.B=0);h!==a.j&&(a.j=h,a.j?a.dispatchEvent("networkstatus-online"):a.dispatchEvent("networkstatus-offline"));c(h);g.Ga(l,0);break;case 2:g.Ca(l),h=!1,l.La(3)}})})};
vu=function(){this.data=[];this.j=-1};
Xka=function(a){-1===a.j&&(a.j=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.j};
wu=function(a){a.setAttribute("role","link")};
yu=function(a,b){Array.isArray(b)&&(b=b.join(" "));""===b||void 0==b?(xu||(b={},xu=(b.atomic=!1,b.autocomplete="none",b.dropeffect="none",b.haspopup=!1,b.live="off",b.multiline=!1,b.multiselectable=!1,b.orientation="vertical",b.readonly=!1,b.relevant="additions text",b.required=!1,b.sort="none",b.busy=!1,b.disabled=!1,b.hidden=!1,b.invalid="false",b)),b=xu,"label"in b?a.setAttribute("aria-label",b.label):a.removeAttribute("aria-label")):a.setAttribute("aria-label",b)};
zu=function(a){a=a.getAttribute("aria-label");return null==a||void 0==a?"":String(a)};
g.Au=function(a,b,c){g.J.call(this);this.j=null;this.D=!1;this.K=a;this.G=c;this.B=b||window;this.C=(0,g.db)(this.Z2,this)};
g.Bu=function(a){a.isActive()||a.start()};
Yka=function(a){a=a.B;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
Zka=function(a){a=a.B;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.Cu=function(a,b,c){g.J.call(this);this.j=a;this.Yi=b||0;this.B=c;this.C=(0,g.db)(this.HT,this)};
g.Du=function(a,b){a.isActive()||a.start(b)};
g.Eu=function(a){a.stop();a.HT()};
g.Fu=function(a){a.isActive()&&g.Eu(a)};
Gu=function(a,b){this.j=a[g.Ra.Symbol.iterator]();this.B=b};
$ka=function(a,b){return new Gu(a,b)};
ala=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
Hu=function(a){return a.classList?a.classList:ala(a).match(/\S+/g)||[]};
g.Iu=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.Ju=function(a,b){return a.classList?a.classList.contains(b):g.Bb(Hu(a),b)};
g.Ku=function(a,b){if(a.classList)a.classList.add(b);else if(!g.Ju(a,b)){var c=ala(a);g.Iu(a,c+(0<c.length?" "+b:b))}};
g.Lu=function(a,b){if(a.classList)Array.prototype.forEach.call(b,function(e){g.Ku(a,e)});
else{var c={};Array.prototype.forEach.call(Hu(a),function(e){c[e]=!0});
Array.prototype.forEach.call(b,function(e){c[e]=!0});
b="";for(var d in c)b+=0<b.length?" "+d:d;g.Iu(a,b)}};
g.Mu=function(a,b){a.classList?a.classList.remove(b):g.Ju(a,b)&&g.Iu(a,Array.prototype.filter.call(Hu(a),function(c){return c!=b}).join(" "))};
g.Nu=function(a,b){a.classList?Array.prototype.forEach.call(b,function(c){g.Mu(a,c)}):g.Iu(a,Array.prototype.filter.call(Hu(a),function(c){return!g.Bb(b,c)}).join(" "))};
g.Ou=function(a,b,c){c?g.Ku(a,b):g.Mu(a,b)};
bla=function(a,b){var c=!g.Ju(a,b);g.Ou(a,b,c)};
Su=function(a){if(a instanceof Pu||a instanceof Qu||a instanceof Ru)return a;if("function"==typeof a.next)return new Pu(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Pu(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Jk)return new Pu(function(){return a.Jk()});
throw Error("Not an iterator or iterable.");};
Pu=function(a){this.B=a};
Qu=function(a){this.B=a};
Ru=function(a){Pu.call(this,function(){return a});
this.C=a};
g.Tu=function(a,b){this.B={};this.j=[];this.Iu=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.Tu)for(c=a.Cp(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
dla=function(a,b){return a===b};
Vu=function(a){if(a.size!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];Uu(a.B,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.size!=a.j.length){var e={};for(c=b=0;b<a.j.length;)d=a.j[b],Uu(e,d)||(a.j[c++]=d,e[d]=1),b++;a.j.length=c}};
Uu=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Wu=function(){g.Dd.call(this);this.j=0;this.endTime=this.startTime=null};
ela=function(a,b){Array.isArray(b)||(b=[b]);b=b.map(function(c){return"string"===typeof c?c:c.property+" "+c.duration+"s "+c.timing+" "+c.delay+"s"});
g.Wr(a,"transition",b.join(","))};
Xu=function(a,b,c,d,e){g.Wu.call(this);this.B=a;this.G=b;this.K=c;this.D=d;this.N=Array.isArray(e)?e:[e]};
fla=function(a,b,c,d){return new Xu(a,b,{opacity:c},{opacity:d},{property:"opacity",duration:b,timing:"ease-in",delay:0})};
hla=function(a){a=jc(a);if(""==a)return null;var b=String(a.slice(0,4)).toLowerCase();if(0==("url("<b?-1:"url("==b?0:1))return!a.endsWith(")")||1<(a?a.split("(").length-1:0)||a&&a.split(")"),null;if(0<a.indexOf("(")){if(/"|'/.test(a))return null;b=/([\-\w]+)\(/g;for(var c;c=b.exec(a);)if(!(c[1].toLowerCase()in gla))return null}return a};
Yu=function(a,b){a=g.Ra[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null};
ila=function(a){var b=g.Ra.CSSStyleDeclaration;return b&&b.prototype&&b.prototype[a]||null};
jla=function(a,b,c,d){if(a)return a.apply(b,d);if(g.Ze&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)};
ola=function(a){if(!a)return Zu;var b=document.createElement("div").style;kla(a).forEach(function(c){var d=g.Qc&&c in lla?c:c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");ec(d,"--")||ec(d,"var")||(c=jla(mla,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[c])||"",c=hla(c),null!=c&&jla(nla,b,b.setProperty?"setProperty":"setAttribute",[d,c]))});
return new g.ae(b.cssText||"",Kn)};
kla=function(a){g.Xa(a)?a=g.Hb(a):(a=g.bd(a),g.Db(a,"cssText"));return a};
g.av=function(a){var b,c=b=0,d=!1;a=a.split(pla);for(var e=0;e<a.length;e++){var f=a[e];g.$u.test(f)?(b++,c++):qla.test(f)?d=!0:rla.test(f)?c++:sla.test(f)&&(d=!0)}b=0==c?d?1:0:.4<b/c?-1:1;return-1==(0==b?null:b)?"rtl":"ltr"};
bv=function(a,b,c,d,e,f,h,l){this.j=a;this.C=b;this.x1=c;this.y1=d;this.x2=e;this.y2=f;this.B=h;this.D=l};
cv=function(a,b){if(0==b)return a.j;if(1==b)return a.B;var c=me(a.j,a.x1,b),d=me(a.x1,a.x2,b);a=me(a.x2,a.B,b);c=me(c,d,b);d=me(d,a,b);return me(c,d,b)};
tla=function(a,b){var c=(b-a.j)/(a.B-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=cv(a,c);var l=(cv(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=cv(a,c);return c};
dv=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
ev=function(a){return(a=a.exec(g.mc()))?a[1]:""};
fv=function(a){return 0<=g.lc(ula,a)};
g.gv=function(a){g.J.call(this);this.K=1;this.C=[];this.D=0;this.j=[];this.B={};this.N=!!a};
vla=function(a,b,c){g.Jf(function(){a.apply(b,c)})};
g.hv=function(a){this.j=a};
iv=function(a){this.j=a};
wla=function(a){this.data=a};
xla=function(a){return void 0===a||a instanceof wla?a:new wla(a)};
jv=function(a){this.j=a};
g.yla=function(a){var b=a.creation;a=a.expiration;return!!a&&a<g.gb()||!!b&&b>g.gb()};
g.kv=function(a){this.j=a};
zla=function(){};
lv=function(){};
mv=function(a){this.j=a};
nv=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.j=a};
Ala=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.j=a};
pv=function(a,b){this.B=a;this.j=null;if(g.Ze&&!g.Pc(9)){ov||(ov=new g.Tu);this.j=ov.get(a);this.j||(b?this.j=document.getElementById(b):(this.j=document.createElement("userdata"),this.j.addBehavior("#default#userData"),document.body.appendChild(this.j)),ov.set(a,this.j));try{this.j.load(this.B)}catch(c){this.j=null}}};
qv=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Bla[b]})};
rv=function(a){try{a.j.save(a.B)}catch(b){throw"Storage mechanism: Quota exceeded";}};
tv=function(a,b){this.B=a;this.j=b+"::"};
g.uv=function(a){var b=new nv;return b.isAvailable()?a?new tv(b,a):b:null};
vv=function(a,b){this.j=a;this.Wd=b};
wv=function(a){this.j=[];if(a)a:{if(a instanceof wv){var b=a.Cp();a=a.mm();if(0>=this.j.length){for(var c=this.j,d=0;d<b.length;d++)c.push(new vv(b[d],a[d]));break a}}else b=g.bd(a),a=ad(a);for(c=0;c<b.length;c++)this.yh(b[c],a[c])}};
Cla=function(){wv.apply(this,arguments)};
g.xv=function(){};
Dla=function(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var h=a.charCodeAt(b+1);56320===(h&64512)&&(f=65536+(f-55296<<10)+(h-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var l=new yv.Gx(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(h=a.charCodeAt(b+1),56320===(h&64512)&&(f=65536+(f-55296<<10)+(h-56320),b++)),128>f?l[c++]=f:(2048>f?l[c++]=192|f>>>6:(65536>f?l[c++]=224|f>>>12:(l[c++]=240|f>>>18,l[c++]=128|f>>>12&63),l[c++]=128|f>>>
6&63),l[c++]=128|f&63);return l};
zv=function(a){for(var b=a.length;0<=--b;)a[b]=0};
Av=function(a,b,c,d,e){this.K_=a;this.U5=b;this.T5=c;this.I5=d;this.e8=e;this.oX=a&&a.length};
Bv=function(a,b){this.XV=a;this.nA=0;this.Cu=b};
Cv=function(a,b){a.Bg[a.pending++]=b&255;a.Bg[a.pending++]=b>>>8&255};
Dv=function(a,b,c){a.gi>16-c?(a.pj|=b<<a.gi&65535,Cv(a,a.pj),a.pj=b>>16-a.gi,a.gi+=c-16):(a.pj|=b<<a.gi&65535,a.gi+=c)};
Ev=function(a,b,c){Dv(a,c[2*b],c[2*b+1])};
Ela=function(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1};
Fla=function(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ela(d[e]++,e))};
Gla=function(a){var b;for(b=0;286>b;b++)a.Xj[2*b]=0;for(b=0;30>b;b++)a.Cv[2*b]=0;for(b=0;19>b;b++)a.Si[2*b]=0;a.Xj[512]=1;a.Dr=a.FB=0;a.tm=a.matches=0};
Hla=function(a){8<a.gi?Cv(a,a.pj):0<a.gi&&(a.Bg[a.pending++]=a.pj);a.pj=0;a.gi=0};
Ila=function(a,b,c){Hla(a);Cv(a,c);Cv(a,~c);yv.Ny(a.Bg,a.window,b,c,a.pending);a.pending+=c};
Jla=function(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]};
Fv=function(a,b,c){for(var d=a.Jg[c],e=c<<1;e<=a.Vq;){e<a.Vq&&Jla(b,a.Jg[e+1],a.Jg[e],a.depth)&&e++;if(Jla(b,d,a.Jg[e],a.depth))break;a.Jg[c]=a.Jg[e];c=e;e<<=1}a.Jg[c]=d};
Kla=function(a,b,c){var d=0;if(0!==a.tm){do{var e=a.Bg[a.aD+2*d]<<8|a.Bg[a.aD+2*d+1];var f=a.Bg[a.hP+d];d++;if(0===e)Ev(a,f,b);else{var h=Gv[f];Ev(a,h+256+1,b);var l=Hv[h];0!==l&&(f-=Iv[h],Dv(a,f,l));e--;h=256>e?Jv[e]:Jv[256+(e>>>7)];Ev(a,h,c);l=Kv[h];0!==l&&(e-=Lv[h],Dv(a,e,l))}}while(d<a.tm)}Ev(a,256,b)};
Mv=function(a,b){var c=b.XV,d=b.Cu.K_,e=b.Cu.oX,f=b.Cu.I5,h,l=-1;a.Vq=0;a.Gz=573;for(h=0;h<f;h++)0!==c[2*h]?(a.Jg[++a.Vq]=l=h,a.depth[h]=0):c[2*h+1]=0;for(;2>a.Vq;){var m=a.Jg[++a.Vq]=2>l?++l:0;c[2*m]=1;a.depth[m]=0;a.Dr--;e&&(a.FB-=d[2*m+1])}b.nA=l;for(h=a.Vq>>1;1<=h;h--)Fv(a,c,h);m=f;do h=a.Jg[1],a.Jg[1]=a.Jg[a.Vq--],Fv(a,c,1),d=a.Jg[1],a.Jg[--a.Gz]=h,a.Jg[--a.Gz]=d,c[2*m]=c[2*h]+c[2*d],a.depth[m]=(a.depth[h]>=a.depth[d]?a.depth[h]:a.depth[d])+1,c[2*h+1]=c[2*d+1]=m,a.Jg[1]=m++,Fv(a,c,1);while(2<=
a.Vq);a.Jg[--a.Gz]=a.Jg[1];h=b.XV;m=b.nA;d=b.Cu.K_;e=b.Cu.oX;f=b.Cu.U5;var n=b.Cu.T5,p=b.Cu.e8,q,r=0;for(q=0;15>=q;q++)a.Eq[q]=0;h[2*a.Jg[a.Gz]+1]=0;for(b=a.Gz+1;573>b;b++){var t=a.Jg[b];q=h[2*h[2*t+1]+1]+1;q>p&&(q=p,r++);h[2*t+1]=q;if(!(t>m)){a.Eq[q]++;var u=0;t>=n&&(u=f[t-n]);var x=h[2*t];a.Dr+=x*(q+u);e&&(a.FB+=x*(d[2*t+1]+u))}}if(0!==r){do{for(q=p-1;0===a.Eq[q];)q--;a.Eq[q]--;a.Eq[q+1]+=2;a.Eq[p]--;r-=2}while(0<r);for(q=p;0!==q;q--)for(t=a.Eq[q];0!==t;)d=a.Jg[--b],d>m||(h[2*d+1]!==q&&(a.Dr+=(q-
h[2*d+1])*h[2*d],h[2*d+1]=q),t--)}Fla(c,l,a.Eq)};
Lla=function(a,b,c){var d,e=-1,f=b[1],h=0,l=7,m=4;0===f&&(l=138,m=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var n=f;f=b[2*(d+1)+1];++h<l&&n===f||(h<m?a.Si[2*n]+=h:0!==n?(n!==e&&a.Si[2*n]++,a.Si[32]++):10>=h?a.Si[34]++:a.Si[36]++,h=0,e=n,0===f?(l=138,m=3):n===f?(l=6,m=3):(l=7,m=4))}};
Mla=function(a,b,c){var d,e=-1,f=b[1],h=0,l=7,m=4;0===f&&(l=138,m=3);for(d=0;d<=c;d++){var n=f;f=b[2*(d+1)+1];if(!(++h<l&&n===f)){if(h<m){do Ev(a,n,a.Si);while(0!==--h)}else 0!==n?(n!==e&&(Ev(a,n,a.Si),h--),Ev(a,16,a.Si),Dv(a,h-3,2)):10>=h?(Ev(a,17,a.Si),Dv(a,h-3,3)):(Ev(a,18,a.Si),Dv(a,h-11,7));h=0;e=n;0===f?(l=138,m=3):n===f?(l=6,m=3):(l=7,m=4)}}};
Nla=function(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Xj[2*c])return 0;if(0!==a.Xj[18]||0!==a.Xj[20]||0!==a.Xj[26])return 1;for(c=32;256>c;c++)if(0!==a.Xj[2*c])return 1;return 0};
Nv=function(a,b,c){a.Bg[a.aD+2*a.tm]=b>>>8&255;a.Bg[a.aD+2*a.tm+1]=b&255;a.Bg[a.hP+a.tm]=c&255;a.tm++;0===b?a.Xj[2*c]++:(a.matches++,b--,a.Xj[2*(Gv[c]+256+1)]++,a.Cv[2*(256>b?Jv[b]:Jv[256+(b>>>7)])]++);return a.tm===a.qE-1};
Pv=function(a,b){a.msg=Ov[b];return b};
Qv=function(a){for(var b=a.length;0<=--b;)a[b]=0};
Rv=function(a){var b=a.state,c=b.pending;c>a.Me&&(c=a.Me);0!==c&&(yv.Ny(a.output,b.Bg,b.VE,c,a.wA),a.wA+=c,b.VE+=c,a.kS+=c,a.Me-=c,b.pending-=c,0===b.pending&&(b.VE=0))};
Uv=function(a,b){var c=0<=a.Pk?a.Pk:-1,d=a.Cb-a.Pk,e=0;if(0<a.level){2===a.xe.pN&&(a.xe.pN=Nla(a));Mv(a,a.RI);Mv(a,a.qH);Lla(a,a.Xj,a.RI.nA);Lla(a,a.Cv,a.qH.nA);Mv(a,a.mV);for(e=18;3<=e&&0===a.Si[2*Ola[e]+1];e--);a.Dr+=3*(e+1)+14;var f=a.Dr+3+7>>>3;var h=a.FB+3+7>>>3;h<=f&&(f=h)}else f=h=d+5;if(d+4<=f&&-1!==c)Dv(a,b?1:0,3),Ila(a,c,d);else if(4===a.strategy||h===f)Dv(a,2+(b?1:0),3),Kla(a,Sv,Tv);else{Dv(a,4+(b?1:0),3);c=a.RI.nA+1;d=a.qH.nA+1;e+=1;Dv(a,c-257,5);Dv(a,d-1,5);Dv(a,e-4,4);for(f=0;f<e;f++)Dv(a,
a.Si[2*Ola[f]+1],3);Mla(a,a.Xj,c-1);Mla(a,a.Cv,d-1);Kla(a,a.Xj,a.Cv)}Gla(a);b&&Hla(a);a.Pk=a.Cb;Rv(a.xe)};
Vv=function(a,b){a.Bg[a.pending++]=b};
Wv=function(a,b){a.Bg[a.pending++]=b>>>8&255;a.Bg[a.pending++]=b&255};
Pla=function(a,b){var c=a.oY,d=a.Cb,e=a.yl,f=a.DY,h=a.Cb>a.hj-262?a.Cb-(a.hj-262):0,l=a.window,m=a.Ju,n=a.Zp,p=a.Cb+258,q=l[d+e-1],r=l[d+e];a.yl>=a.RW&&(c>>=2);f>a.kc&&(f=a.kc);do{var t=b;if(l[t+e]===r&&l[t+e-1]===q&&l[t]===l[d]&&l[++t]===l[d+1]){d+=2;for(t++;l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&l[++d]===l[++t]&&d<p;);t=258-(p-d);d=p-258;if(t>e){a.lA=b;e=t;if(t>=f)break;q=l[d+e-1];r=l[d+e]}}}while((b=n[b&m])>h&&0!==
--c);return e<=a.kc?e:a.kc};
Zv=function(a){var b=a.hj,c;do{var d=a.P0-a.kc-a.Cb;if(a.Cb>=b+(b-262)){yv.Ny(a.window,a.window,b,b,0);a.lA-=b;a.Cb-=b;a.Pk-=b;var e=c=a.qI;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Zp[--e],a.Zp[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.xe.mj)break;e=a.xe;c=a.window;f=a.Cb+a.kc;var h=e.mj;h>d&&(h=d);0===h?c=0:(e.mj-=h,yv.Ny(c,e.input,e.Gw,h,f),1===e.state.wrap?e.Rd=Xv(e.Rd,c,h,f):2===e.state.wrap&&(e.Rd=Yv(e.Rd,c,h,f)),e.Gw+=h,e.vx+=h,c=h);a.kc+=c;if(3<=a.kc+a.yh)for(d=a.Cb-a.yh,
a.Ge=a.window[d],a.Ge=(a.Ge<<a.Tq^a.window[d+1])&a.Sq;a.yh&&!(a.Ge=(a.Ge<<a.Tq^a.window[d+3-1])&a.Sq,a.Zp[d&a.Ju]=a.head[a.Ge],a.head[a.Ge]=d,d++,a.yh--,3>a.kc+a.yh););}while(262>a.kc&&0!==a.xe.mj)};
$v=function(a,b){for(var c;;){if(262>a.kc){Zv(a);if(262>a.kc&&0===b)return 1;if(0===a.kc)break}c=0;3<=a.kc&&(a.Ge=(a.Ge<<a.Tq^a.window[a.Cb+3-1])&a.Sq,c=a.Zp[a.Cb&a.Ju]=a.head[a.Ge],a.head[a.Ge]=a.Cb);0!==c&&a.Cb-c<=a.hj-262&&(a.Xe=Pla(a,c));if(3<=a.Xe)if(c=Nv(a,a.Cb-a.lA,a.Xe-3),a.kc-=a.Xe,a.Xe<=a.sP&&3<=a.kc){a.Xe--;do a.Cb++,a.Ge=(a.Ge<<a.Tq^a.window[a.Cb+3-1])&a.Sq,a.Zp[a.Cb&a.Ju]=a.head[a.Ge],a.head[a.Ge]=a.Cb;while(0!==--a.Xe);a.Cb++}else a.Cb+=a.Xe,a.Xe=0,a.Ge=a.window[a.Cb],a.Ge=(a.Ge<<a.Tq^
a.window[a.Cb+1])&a.Sq;else c=Nv(a,0,a.window[a.Cb]),a.kc--,a.Cb++;if(c&&(Uv(a,!1),0===a.xe.Me))return 1}a.yh=2>a.Cb?a.Cb:2;return 4===b?(Uv(a,!0),0===a.xe.Me?3:4):a.tm&&(Uv(a,!1),0===a.xe.Me)?1:2};
aw=function(a,b){for(var c,d;;){if(262>a.kc){Zv(a);if(262>a.kc&&0===b)return 1;if(0===a.kc)break}c=0;3<=a.kc&&(a.Ge=(a.Ge<<a.Tq^a.window[a.Cb+3-1])&a.Sq,c=a.Zp[a.Cb&a.Ju]=a.head[a.Ge],a.head[a.Ge]=a.Cb);a.yl=a.Xe;a.MZ=a.lA;a.Xe=2;0!==c&&a.yl<a.sP&&a.Cb-c<=a.hj-262&&(a.Xe=Pla(a,c),5>=a.Xe&&(1===a.strategy||3===a.Xe&&4096<a.Cb-a.lA)&&(a.Xe=2));if(3<=a.yl&&a.Xe<=a.yl){d=a.Cb+a.kc-3;c=Nv(a,a.Cb-1-a.MZ,a.yl-3);a.kc-=a.yl-1;a.yl-=2;do++a.Cb<=d&&(a.Ge=(a.Ge<<a.Tq^a.window[a.Cb+3-1])&a.Sq,a.Zp[a.Cb&a.Ju]=
a.head[a.Ge],a.head[a.Ge]=a.Cb);while(0!==--a.yl);a.zw=0;a.Xe=2;a.Cb++;if(c&&(Uv(a,!1),0===a.xe.Me))return 1}else if(a.zw){if((c=Nv(a,0,a.window[a.Cb-1]))&&Uv(a,!1),a.Cb++,a.kc--,0===a.xe.Me)return 1}else a.zw=1,a.Cb++,a.kc--}a.zw&&(Nv(a,0,a.window[a.Cb-1]),a.zw=0);a.yh=2>a.Cb?a.Cb:2;return 4===b?(Uv(a,!0),0===a.xe.Me?3:4):a.tm&&(Uv(a,!1),0===a.xe.Me)?1:2};
Qla=function(a,b){for(var c,d,e,f=a.window;;){if(258>=a.kc){Zv(a);if(258>=a.kc&&0===b)return 1;if(0===a.kc)break}a.Xe=0;if(3<=a.kc&&0<a.Cb&&(d=a.Cb-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.Cb+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.Xe=258-(e-d);a.Xe>a.kc&&(a.Xe=a.kc)}3<=a.Xe?(c=Nv(a,1,a.Xe-3),a.kc-=a.Xe,a.Cb+=a.Xe,a.Xe=0):(c=Nv(a,0,a.window[a.Cb]),a.kc--,a.Cb++);if(c&&(Uv(a,!1),0===a.xe.Me))return 1}a.yh=0;return 4===
b?(Uv(a,!0),0===a.xe.Me?3:4):a.tm&&(Uv(a,!1),0===a.xe.Me)?1:2};
Rla=function(a,b){for(var c;;){if(0===a.kc&&(Zv(a),0===a.kc)){if(0===b)return 1;break}a.Xe=0;c=Nv(a,0,a.window[a.Cb]);a.kc--;a.Cb++;if(c&&(Uv(a,!1),0===a.xe.Me))return 1}a.yh=0;return 4===b?(Uv(a,!0),0===a.xe.Me?3:4):a.tm&&(Uv(a,!1),0===a.xe.Me)?1:2};
bw=function(a,b,c,d,e){this.K6=a;this.d8=b;this.v8=c;this.c8=d;this.func=e};
Sla=function(){this.xe=null;this.status=0;this.Bg=null;this.wrap=this.pending=this.VE=this.zm=0;this.Od=null;this.Dn=0;this.method=8;this.Zz=-1;this.Ju=this.CS=this.hj=0;this.window=null;this.P0=0;this.head=this.Zp=null;this.DY=this.RW=this.strategy=this.level=this.sP=this.oY=this.yl=this.kc=this.lA=this.Cb=this.zw=this.MZ=this.Xe=this.Pk=this.Tq=this.Sq=this.BO=this.qI=this.Ge=0;this.Xj=new yv.uq(1146);this.Cv=new yv.uq(122);this.Si=new yv.uq(78);Qv(this.Xj);Qv(this.Cv);Qv(this.Si);this.mV=this.qH=
this.RI=null;this.Eq=new yv.uq(16);this.Jg=new yv.uq(573);Qv(this.Jg);this.Gz=this.Vq=0;this.depth=new yv.uq(573);Qv(this.depth);this.gi=this.pj=this.yh=this.matches=this.FB=this.Dr=this.aD=this.tm=this.qE=this.hP=0};
Tla=function(a,b){if(!a||!a.state||5<b||0>b)return a?Pv(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.mj||666===c.status&&4!==b)return Pv(a,0===a.Me?-5:-2);c.xe=a;var d=c.Zz;c.Zz=b;if(42===c.status)if(2===c.wrap)a.Rd=0,Vv(c,31),Vv(c,139),Vv(c,8),c.Od?(Vv(c,(c.Od.text?1:0)+(c.Od.Bt?2:0)+(c.Od.extra?4:0)+(c.Od.name?8:0)+(c.Od.comment?16:0)),Vv(c,c.Od.time&255),Vv(c,c.Od.time>>8&255),Vv(c,c.Od.time>>16&255),Vv(c,c.Od.time>>24&255),Vv(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Vv(c,c.Od.os&
255),c.Od.extra&&c.Od.extra.length&&(Vv(c,c.Od.extra.length&255),Vv(c,c.Od.extra.length>>8&255)),c.Od.Bt&&(a.Rd=Yv(a.Rd,c.Bg,c.pending,0)),c.Dn=0,c.status=69):(Vv(c,0),Vv(c,0),Vv(c,0),Vv(c,0),Vv(c,0),Vv(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Vv(c,3),c.status=113);else{var e=8+(c.CS-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.Cb&&(e|=32);c.status=113;Wv(c,e+(31-e%31));0!==c.Cb&&(Wv(c,a.Rd>>>16),Wv(c,a.Rd&65535));a.Rd=1}if(69===c.status)if(c.Od.extra){for(e=
c.pending;c.Dn<(c.Od.extra.length&65535)&&(c.pending!==c.zm||(c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e)),Rv(a),e=c.pending,c.pending!==c.zm));)Vv(c,c.Od.extra[c.Dn]&255),c.Dn++;c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e));c.Dn===c.Od.extra.length&&(c.Dn=0,c.status=73)}else c.status=73;if(73===c.status)if(c.Od.name){e=c.pending;do{if(c.pending===c.zm&&(c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e)),Rv(a),e=c.pending,c.pending===c.zm)){var f=1;break}f=c.Dn<c.Od.name.length?
c.Od.name.charCodeAt(c.Dn++)&255:0;Vv(c,f)}while(0!==f);c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e));0===f&&(c.Dn=0,c.status=91)}else c.status=91;if(91===c.status)if(c.Od.comment){e=c.pending;do{if(c.pending===c.zm&&(c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e)),Rv(a),e=c.pending,c.pending===c.zm)){f=1;break}f=c.Dn<c.Od.comment.length?c.Od.comment.charCodeAt(c.Dn++)&255:0;Vv(c,f)}while(0!==f);c.Od.Bt&&c.pending>e&&(a.Rd=Yv(a.Rd,c.Bg,c.pending-e,e));0===f&&(c.status=103)}else c.status=
103;103===c.status&&(c.Od.Bt?(c.pending+2>c.zm&&Rv(a),c.pending+2<=c.zm&&(Vv(c,a.Rd&255),Vv(c,a.Rd>>8&255),a.Rd=0,c.status=113)):c.status=113);if(0!==c.pending){if(Rv(a),0===a.Me)return c.Zz=-1,0}else if(0===a.mj&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Pv(a,-5);if(666===c.status&&0!==a.mj)return Pv(a,-5);if(0!==a.mj||0!==c.kc||0!==b&&666!==c.status){d=2===c.strategy?Rla(c,b):3===c.strategy?Qla(c,b):cw[c.level].func(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.Me&&(c.Zz=
-1),0;if(2===d&&(1===b?(Dv(c,2,3),Ev(c,256,Sv),16===c.gi?(Cv(c,c.pj),c.pj=0,c.gi=0):8<=c.gi&&(c.Bg[c.pending++]=c.pj&255,c.pj>>=8,c.gi-=8)):5!==b&&(Dv(c,0,3),Ila(c,0,0),3===b&&(Qv(c.head),0===c.kc&&(c.Cb=0,c.Pk=0,c.yh=0))),Rv(a),0===a.Me))return c.Zz=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Vv(c,a.Rd&255),Vv(c,a.Rd>>8&255),Vv(c,a.Rd>>16&255),Vv(c,a.Rd>>24&255),Vv(c,a.vx&255),Vv(c,a.vx>>8&255),Vv(c,a.vx>>16&255),Vv(c,a.vx>>24&255)):(Wv(c,a.Rd>>>16),Wv(c,a.Rd&65535));Rv(a);0<c.wrap&&
(c.wrap=-c.wrap);return 0!==c.pending?0:1};
dw=function(a){if(!(this instanceof dw))return new dw(a);a=this.options=yv.assign({level:-1,method:8,chunkSize:16384,Ku:15,k8:8,strategy:0,to:""},a||{});a.raw&&0<a.Ku?a.Ku=-a.Ku:a.L6&&0<a.Ku&&16>a.Ku&&(a.Ku+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.xe=new Ula;this.xe.Me=0;var b=this.xe;var c=a.level,d=a.method,e=a.Ku,f=a.k8,h=a.strategy;if(b){var l=1;-1===c&&(c=6);0>e?(l=0,e=-e):15<e&&(l=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>h||4<h)b=Pv(b,-2);else{8===e&&(e=9);var m=
new Sla;b.state=m;m.xe=b;m.wrap=l;m.Od=null;m.CS=e;m.hj=1<<m.CS;m.Ju=m.hj-1;m.BO=f+7;m.qI=1<<m.BO;m.Sq=m.qI-1;m.Tq=~~((m.BO+3-1)/3);m.window=new yv.Gx(2*m.hj);m.head=new yv.uq(m.qI);m.Zp=new yv.uq(m.hj);m.qE=1<<f+6;m.zm=4*m.qE;m.Bg=new yv.Gx(m.zm);m.aD=1*m.qE;m.hP=3*m.qE;m.level=c;m.strategy=h;m.method=d;if(b&&b.state){b.vx=b.kS=0;b.pN=2;c=b.state;c.pending=0;c.VE=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.Rd=2===c.wrap?0:1;c.Zz=0;if(!Vla){d=Array(16);for(f=h=0;28>f;f++)for(Iv[f]=h,e=0;e<
1<<Hv[f];e++)Gv[h++]=f;Gv[h-1]=f;for(f=h=0;16>f;f++)for(Lv[f]=h,e=0;e<1<<Kv[f];e++)Jv[h++]=f;for(h>>=7;30>f;f++)for(Lv[f]=h<<7,e=0;e<1<<Kv[f]-7;e++)Jv[256+h++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Sv[2*e+1]=8,e++,d[8]++;for(;255>=e;)Sv[2*e+1]=9,e++,d[9]++;for(;279>=e;)Sv[2*e+1]=7,e++,d[7]++;for(;287>=e;)Sv[2*e+1]=8,e++,d[8]++;Fla(Sv,287,d);for(e=0;30>e;e++)Tv[2*e+1]=5,Tv[2*e]=Ela(e,5);Wla=new Av(Sv,Hv,257,286,15);Xla=new Av(Tv,Kv,0,30,15);Yla=new Av([],Zla,0,19,7);Vla=!0}c.RI=new Bv(c.Xj,Wla);
c.qH=new Bv(c.Cv,Xla);c.mV=new Bv(c.Si,Yla);c.pj=0;c.gi=0;Gla(c);c=0}else c=Pv(b,-2);0===c&&(b=b.state,b.P0=2*b.hj,Qv(b.head),b.sP=cw[b.level].d8,b.RW=cw[b.level].K6,b.DY=cw[b.level].v8,b.oY=cw[b.level].c8,b.Cb=0,b.Pk=0,b.kc=0,b.yh=0,b.Xe=b.yl=2,b.zw=0,b.Ge=0);b=c}}else b=-2;if(0!==b)throw Error(Ov[b]);a.header&&(b=this.xe)&&b.state&&2===b.state.wrap&&(b.state.Od=a.header);if(a.bD){var n;"string"===typeof a.bD?n=Dla(a.bD):"[object ArrayBuffer]"===$la.call(a.bD)?n=new Uint8Array(a.bD):n=a.bD;a=this.xe;
f=n;h=f.length;if(a&&a.state)if(n=a.state,b=n.wrap,2===b||1===b&&42!==n.status||n.kc)b=-2;else{1===b&&(a.Rd=Xv(a.Rd,f,h,0));n.wrap=0;h>=n.hj&&(0===b&&(Qv(n.head),n.Cb=0,n.Pk=0,n.yh=0),c=new yv.Gx(n.hj),yv.Ny(c,f,h-n.hj,n.hj,0),f=c,h=n.hj);c=a.mj;d=a.Gw;e=a.input;a.mj=h;a.Gw=0;a.input=f;for(Zv(n);3<=n.kc;){f=n.Cb;h=n.kc-2;do n.Ge=(n.Ge<<n.Tq^n.window[f+3-1])&n.Sq,n.Zp[f&n.Ju]=n.head[n.Ge],n.head[n.Ge]=f,f++;while(--h);n.Cb=f;n.kc=2;Zv(n)}n.Cb+=n.kc;n.Pk=n.Cb;n.yh=n.kc;n.kc=0;n.Xe=n.yl=2;n.zw=0;a.Gw=
d;a.input=e;a.mj=c;n.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Ov[b]);this.xhb=!0}};
ama=function(a,b){b=b||{};b.L6=!0;b=new dw(b);b.push(a,!0);if(b.err)throw b.msg||Ov[b.err];return b.result};
bma=function(){var a=g.Ja.apply(0,arguments);return 0===a.length?function(b){return b}:1===a.length?a[0]:a.reduce(function(b,c){return function(){return b(c.apply(null,g.oa(g.Ja.apply(0,arguments))))}})};
cma=function(){var a=g.Ja.apply(0,arguments);return function(b){return function(c,d){function e(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");}
c=b(c,d);var f={getState:c.getState,dispatch:function(h){return e.apply(null,[h].concat(g.oa(g.Ja.apply(1,arguments))))}};
d=a.map(function(h){return h(f)});
e=bma.apply(null,g.oa(d))(c.dispatch);return Object.assign({},c,{dispatch:e})}}};
ew=function(){return Math.random().toString(36).substring(7).split("").join(".")};
dma=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("undefined"===typeof c(void 0,{type:fw}))throw Error('The slice reducer for key "'+b+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof c(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION"+ew()}))throw Error('The slice reducer for key "'+
b+"\" returned undefined when probed with a random type. Don't try to handle '"+(fw+'\' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'));})};
ema=function(a,b,c,d){function e(){if(q)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return m}
function f(t){if("function"!==typeof t)throw Error("Expected the listener to be a function. Instead, received: '"+typeof t+"'");if(q)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var u=!0;p===n&&(p=n.slice());p.push(t);return function(){if(u){if(q)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
u=!1;p===n&&(p=n.slice());p.splice(p.indexOf(t),1);n=null}}}
function h(t){if("object"!==typeof t||null===t)var u=!1;else{for(u=t;null!==Object.getPrototypeOf(u);)u=Object.getPrototypeOf(u);u=Object.getPrototypeOf(t)===u}if(!u)throw Error("Actions must be plain objects. Instead, the actual type was: '"+typeof t+"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
if("undefined"===typeof t.type)throw Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if(q)throw Error("Reducers may not dispatch actions.");try{q=!0,m=l(m,t)}finally{q=!1}u=n=p;for(var x=0;x<u.length;x++)(0,u[x])();return t}
if("function"===typeof b&&"function"===typeof c||"function"===typeof c&&"function"===typeof d)throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");"function"===typeof b&&"undefined"===typeof c&&(c=b,b=void 0);if("undefined"!==typeof c){if("function"!==typeof c)throw Error("Expected the enhancer to be a function. Instead, received: '"+
typeof c+"'");return c(ema)(a,b)}if("function"!==typeof a)throw Error("Expected the root reducer to be a function. Instead, received: '"+typeof a+"'");var l=a,m=b,n=[],p=n,q=!1;h({type:fw});a={};var r=(a.dispatch=h,a.subscribe=f,a.getState=e,a.replaceReducer=function(t){if("function"!==typeof t)throw Error("Expected the nextReducer to be a function. Instead, received: '"+typeof t);l=t;h({type:fma});return r},a[gma]=function(){var t={};
return t.subscribe=function(u){function x(){u.next&&u.next(e())}
if("object"!==typeof u||null===u)throw new TypeError("Expected the observer to be an object. Instead, received: '"+typeof u+"'");x();return{unsubscribe:f(x)}},t[gma]=function(){return this},t},a);
return r};
hma=function(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Wd(a):null:null};
jma=function(a){a=ima(a);return g.ie(a)};
g.gw=function(a){a=ima(a);return Wd(a)};
ima=function(a){return null===a?"null":void 0===a?"undefined":a};
hw=function(a){this.ea=M(a)};
kma=function(a){var b=a.split(""),c=[null,604063082,b,b,1482453006,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
-687645971,-1489127657,function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 91:d=44;continue;case 123:d=65;break;case 65:d-=18;continue;case 58:d=96;continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
182756630,-1874611829,842189152,-853147957,function(d,e,f){var h=f.length;d.forEach(function(l,m,n){this.push(n[m]=f[(f.indexOf(l)-f.indexOf(this[m])+m+h--)%f.length])},e.split(""))},
"dCpBK4j",-1840725398,-706545653,-1525567134,function(d){d.reverse()},
-398398842,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
-1010156242,1603394296,-1244474774,75686736,1601558988,701477265,874717939,function(d,e,f,h,l,m,n,p){return e(f,h,l,m,n,p)},
function(){for(var d=64,e=[];++d-e.length-32;){switch(d){case 58:d-=14;case 91:case 92:case 93:continue;case 123:d=47;case 94:case 95:case 96:continue;case 46:d=95}e.push(String.fromCharCode(d))}return e},
553613554,1727304757,-267311566,-1774753613,-1380617865,-548962132,1140946933,618024286,-1248830068,function(d,e,f,h,l,m,n,p,q){return f(h,l,m,n,p,q)},
122736512,123461634,function(d,e){e.splice(e.length,0,d)},
function(d,e){0!=d.length&&(e=(e%d.length+d.length)%d.length,d.splice(0,1,d.splice(e,1,d[0])[0]))},
1630497501,function(d,e,f,h,l,m,n){return d(l,m,n)},
1419645608,-1840725398,-865244538,-598759052,null,292970501,444122001,-557767735,function(d){d.reverse()},
-929004002,function(d,e){d=(d%e.length+e.length)%e.length;e.splice(-d).reverse().forEach(function(f){e.unshift(f)})},
function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},
1315784010,679555492,/,([\\,(])/,-1516217059,function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 58:d=96;continue;case 91:d=44;break;case 65:d=47;continue;case 46:d=153;case 123:d-=58;default:e.push(String.fromCharCode(d))}return e},
null,30072524,function(d,e,f,h,l){return e(f,h,l)},
-412851037,-2107490153,1821739498,50827525,701477265,-1673892540,-180914354,b,function(d,e,f,h,l,m){return e(h,l,m)},
-1519530063,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
171333463,-831858105,"-",921881595,-582077006];c[0]=c;c[51]=c;c[64]=c;try{try{(-10===c[50]||((0,c[57])(c[42],c[64]),(0,c[41])(c[47],c[5]),(0,c[21])(c[51],c[26]),(0,c[34])(c[1],c[41]),0))&&((0,c[68])(c[53],c[55])>>>(0,c[76])(c[53],c[77],(0,c[71])()),(0,c[76])(c[53],c[59],(0,c[67])()),c[76])(c[64],c[59],(0,c[42])()),(-4===c[10]||((((((((((0,c[0])(c[62]),c[26])(c[39],c[9])&(0,c[new Date("1970-01-01T02:45:52.000+02:45")/1E3])(c[65],c[new Date("1969-12-31T17:45:38.000-06:15")/1E3]),((0,c[26])(c[322-285%
Math.pow(7,5)],c[43],(0,c[10])()),c[new Date("1969-12-31T22:45:21.000-01:15")/1E3])(c[49]),(0,c[79])(c[37],c[70]),c[Math.pow(7,5)-46+-16695])(c[55],c[72]),c[77])(c[80],c[24]),((0,c[13])(c[7],c[59]),c[27])(c[7],c[75]),c[27])(c[new Date("1969-12-31T16:00:20.000-08:00")/1E3],c[58]),c[77])(c[68],c[53]),c[65])(c[68],c[38]),c[5])((0,c[77])(c[7],c[26]),c[45],c[86+Math.pow(6,2)-45],c[37]),(0,c[31])(c[1],c[2]),(0,c[30])(c[5],c[6]),c[31])(c[62],c[37]),null))&&(0,c[78])(c[47],(0,c[34])(c[50],c[5]),((((((0,c[26])(c[38],
c[44],(0,c[22])()),c[47])(c[38],c[65]),c[11])((0,c[58])((0,c[34])(c[39],c[12]),c[47],c[73],c[15]),c[58],((0,c[58])((0,c[58])((0,c[new Date("1970-01-01T11:01:20.000+11:00")/1E3])(c[50],c[33]),c[Math.pow(6,3)+new Date("1969-12-31T22:15:54.000-01:45")/1E3%413-244],c[39],c[44],(0,c[61])()),c[26],c[39],c[25],(0,c[new Date("1970-01-01T04:45:10.000+04:45")/1E3])()),c[19])(c[73]),c[80],c[38],c[new Date("1970-01-01T07:00:20.000+07:00")/1E3]),(0,c[66])(c[73],c[46]),c[58])((0,c[26])(c[50],c[25],(0,c[31])()),
c[34],c[38],c[8]),c[47])(c[60],c[17]),c[26])(c[39],c[25],(0,c[31])()),(0,c[58])((0,c[26])(c[50],c[44],(0,c[61])()),c[26],c[Math.pow(7,1)-95+138],c[25],(0,c[22])()),c[73],c[76]),-10!==c[56]&&(0,c[21])(c[73])}catch(d){(0,c[17])(c[33],c[11]),(0,c[25])((0,c[49])(c[44],c[60]),c[57],c[33],c[39],(0,c[61])())}try{0!=c[4]&&(-8<c[28]?((0,c[36])(c[23],c[24]),(0,c[56])(c[30],c[60])):((0,c[28])(c[56],c[9]),c[75])(c[53]))}catch(d){(0,c[68])(c[44],c[69],(0,c[63])())}finally{2<=c[39]&&((0,c[28])(c[34],c[54]),1)||
(0,c[75])(c[53]),10===c[38-Math.pow(3,3)%307]&&((0,c[36])(((0,c[73])(c[34]),c[60])(c[53],c[39]),c[60],c[21],c[42]),new Date("1969-12-31T22:45:09.000-01:15")/1E3)||(0,c[83])((0,c[75])(c[44]),c[36],(0,c[0])(c[53],c[40]),c[60],c[56],c[43]),0<c[29]&&((0,c[45])(c[56]),(0,c[49])(c[56],c[30]))}try{-1>=c[37]&&(8<c[80]&&((((0,c[36])((0,c[27])(c[32],c[56]),c[28],c[56],c[1]),((0,c[68])(c[44],c[69],(0,c[14])()),c[28])(c[44],c[261%Math.pow(3,2)- -7]),c[28])(c[56],c[64]),c[36])(((0,c[73])(c[Math.pow(8,5)-57+-32656]),
c[60])(c[55],c[20]),c[60],c[44],c[8]),"undefined")||(((0,c[10])((0,c[68])(c[44],c[69],(0,c[14])()),(0,c[60])(c[56],c[76]),c[36],(0,c[41])((0,c[60])(c[21],c[25]),c[60],(0,c[new Date("1969-12-31T21:01:00.000-03:00")/1E3])(c[55],c[37]),c[34],c[26]),c[73],c[53]),c[60])(c[new Date("1970-01-01T03:43:33.000+03:45")/1E3- -142*Math.pow(1,1)],c[6]),c[68])(c[55],c[50],(0,c[63])())),-9>=c[48]&&((0,c[75])(c[34]),1)||(0,c[73])(c[56])}catch(d){(0,c[36])((0,c[47])(c[44],c[24]),c[27],c[4],c[21])}}catch(d){return"enhanced_except_65kBlOb-_w8_"+
a}return b.join("")};
g.iw=function(a){this.name=a};
jw=function(a){this.ea=M(a)};
kw=function(a){this.ea=M(a)};
lw=function(a){this.ea=M(a)};
mw=function(a){this.ea=M(a)};
nw=function(a){this.ea=M(a)};
ow=function(a){this.ea=M(a)};
pw=function(a){this.ea=M(a)};
qw=function(a){this.ea=M(a)};
rw=function(a){this.ea=M(a)};
tw=function(a){this.ea=M(a)};
uw=function(a){this.ea=M(a)};
vw=function(a){this.ea=M(a)};
ww=function(a){this.ea=M(a)};
xw=function(a){this.ea=M(a)};
yw=function(a){this.ea=M(a)};
zw=function(a){this.ea=M(a)};
Aw=function(a){this.ea=M(a)};
Bw=function(a){this.ea=M(a)};
Cw=function(a){this.ea=M(a)};
Dw=function(a){this.ea=M(a)};
Ew=function(a){this.ea=M(a)};
Fw=function(a){this.ea=M(a)};
Gw=function(a){this.ea=M(a)};
Hw=function(a){this.ea=M(a)};
Iw=function(a){this.ea=M(a)};
Jw=function(a){this.ea=M(a)};
Kw=function(a){this.ea=M(a)};
Lw=function(a){this.ea=M(a)};
Mw=function(a){this.ea=M(a)};
Nw=function(a){this.ea=M(a)};
Ow=function(a){this.ea=M(a)};
Pw=function(a){this.ea=M(a)};
Qw=function(a){this.ea=M(a)};
Rw=function(a){this.ea=M(a)};
Sw=function(a){this.ea=M(a)};
Tw=function(a){this.ea=M(a)};
Uw=function(a){this.ea=M(a)};
Vw=function(a){this.ea=M(a)};
Ww=function(a){this.ea=M(a)};
Xw=function(a){this.ea=M(a)};
Yw=function(a){this.ea=M(a)};
Zw=function(a){this.ea=M(a)};
$w=function(a){this.ea=M(a)};
ax=function(a){this.ea=M(a)};
bx=function(a){this.ea=M(a)};
cx=function(a){this.ea=M(a)};
dx=function(a){this.ea=M(a)};
ex=function(a){this.ea=M(a)};
fx=function(a){this.ea=M(a)};
gx=function(a){this.ea=M(a)};
hx=function(a){this.ea=M(a)};
ix=function(a){this.ea=M(a)};
jx=function(a){this.ea=M(a)};
lma=function(a){this.ea=M(a)};
kx=function(a){this.ea=M(a)};
lx=function(a){this.ea=M(a)};
mx=function(a){this.ea=M(a)};
ox=function(a){this.ea=M(a)};
px=function(a){this.ea=M(a)};
qx=function(a){this.ea=M(a)};
rx=function(a){this.ea=M(a)};
sx=function(a){this.ea=M(a)};
tx=function(a){this.ea=M(a)};
ux=function(a){this.ea=M(a)};
vx=function(a){this.ea=M(a)};
wx=function(a){this.ea=M(a)};
xx=function(a){this.ea=M(a)};
yx=function(a){this.ea=M(a)};
zx=function(a){this.ea=M(a)};
Ax=function(a){this.ea=M(a)};
Bx=function(a){this.ea=M(a)};
Cx=function(a){this.ea=M(a)};
Dx=function(a){this.ea=M(a)};
Ex=function(a){this.ea=M(a)};
Fx=function(a){this.ea=M(a)};
mma=function(a,b){return Xj(a,1,b)};
Gx=function(a){this.ea=M(a)};
Hx=function(a){this.ea=M(a)};
Ix=function(a){this.ea=M(a)};
Jx=function(a){this.ea=M(a)};
Kx=function(a){this.ea=M(a)};
Lx=function(a){this.ea=M(a)};
Mx=function(a){this.ea=M(a)};
Nx=function(a){this.ea=M(a)};
Ox=function(a){this.ea=M(a)};
Px=function(a){this.ea=M(a)};
g.Qx=function(a){this.ea=M(a)};
Rx=function(a){this.ea=M(a)};
Sx=function(a){this.ea=M(a)};
Tx=function(a){this.ea=M(a)};
Ux=function(a){this.ea=M(a)};
Vx=function(a){this.ea=M(a)};
Wx=function(a){this.ea=M(a)};
Xx=function(a){this.ea=M(a)};
Yx=function(a){this.ea=M(a)};
Zx=function(a){this.ea=M(a)};
$x=function(a){this.ea=M(a)};
ay=function(a){this.ea=M(a)};
by=function(a){this.ea=M(a)};
cy=function(a){this.ea=M(a)};
dy=function(a){this.ea=M(a)};
ey=function(a){this.ea=M(a)};
fy=function(a){this.ea=M(a)};
gy=function(a){this.ea=M(a)};
hy=function(a){this.ea=M(a)};
iy=function(a){this.ea=M(a)};
jy=function(a){this.ea=M(a)};
ky=function(a){this.ea=M(a)};
ly=function(a){this.ea=M(a)};
my=function(a){this.ea=M(a)};
ny=function(a){this.ea=M(a)};
oy=function(a){this.ea=M(a)};
py=function(a){this.ea=M(a)};
qy=function(a){this.ea=M(a)};
ry=function(a){this.ea=M(a)};
sy=function(a){this.ea=M(a)};
ty=function(a){this.ea=M(a)};
uy=function(a){this.ea=M(a)};
vy=function(a){this.ea=M(a)};
wy=function(a){this.ea=M(a)};
yy=function(a){this.ea=M(a)};
zy=function(a){this.ea=M(a)};
Ay=function(a){this.ea=M(a)};
By=function(a){this.ea=M(a)};
Cy=function(a){this.ea=M(a)};
Dy=function(a){this.ea=M(a)};
Ey=function(a){this.ea=M(a)};
Fy=function(a){this.ea=M(a)};
Gy=function(a){this.ea=M(a)};
Hy=function(a){this.ea=M(a)};
Iy=function(a){this.ea=M(a)};
Jy=function(a){this.ea=M(a)};
Ky=function(a){this.ea=M(a)};
Ly=function(a){this.ea=M(a)};
My=function(a){this.ea=M(a)};
Ny=function(a){this.ea=M(a)};
Oy=function(a){this.ea=M(a)};
Py=function(a){this.ea=M(a)};
Qy=function(a){this.ea=M(a)};
Ry=function(a){this.ea=M(a)};
Sy=function(a){this.ea=M(a)};
Ty=function(a){this.ea=M(a)};
Uy=function(a){this.ea=M(a)};
Vy=function(a){this.ea=M(a)};
Wy=function(a){this.ea=M(a)};
Xy=function(a){this.ea=M(a)};
Yy=function(a){this.ea=M(a)};
Zy=function(a){this.ea=M(a)};
$y=function(a){this.ea=M(a)};
az=function(a){this.ea=M(a)};
bz=function(a){this.ea=M(a)};
cz=function(a){this.ea=M(a)};
dz=function(a){this.ea=M(a)};
ez=function(a){this.ea=M(a)};
fz=function(a){this.ea=M(a)};
gz=function(a){this.ea=M(a)};
hz=function(a){this.ea=M(a)};
iz=function(a){this.ea=M(a)};
jz=function(a){this.ea=M(a)};
kz=function(a){this.ea=M(a)};
lz=function(a){this.ea=M(a)};
mz=function(a){this.ea=M(a)};
nz=function(a){this.ea=M(a)};
oz=function(a){this.ea=M(a)};
pz=function(a){this.ea=M(a)};
qz=function(a){this.ea=M(a)};
rz=function(a){this.ea=M(a)};
sz=function(a){this.ea=M(a)};
tz=function(a){this.ea=M(a)};
uz=function(a){this.ea=M(a)};
g.vz=function(a){this.ea=M(a)};
g.wz=function(a){this.ea=M(a)};
xz=function(a){this.ea=M(a)};
yz=function(a){this.ea=M(a)};
zz=function(a){this.ea=M(a)};
Az=function(a){this.ea=M(a)};
Bz=function(a){this.ea=M(a)};
Cz=function(a){this.ea=M(a)};
Dz=function(a){this.ea=M(a)};
Ez=function(a){this.ea=M(a)};
Fz=function(a){this.ea=M(a)};
Gz=function(a){this.ea=M(a)};
Hz=function(a){this.ea=M(a)};
Iz=function(a){this.ea=M(a)};
Jz=function(a){this.ea=M(a)};
Kz=function(a){this.ea=M(a)};
Lz=function(a){this.ea=M(a)};
Mz=function(a){this.ea=M(a)};
Nz=function(a){this.ea=M(a)};
Oz=function(a){this.ea=M(a)};
Pz=function(a){this.ea=M(a)};
Qz=function(a){this.ea=M(a)};
Rz=function(a){this.ea=M(a)};
Sz=function(a){this.ea=M(a)};
Tz=function(a){this.ea=M(a)};
Uz=function(a){this.ea=M(a)};
Vz=function(a){this.ea=M(a)};
Wz=function(a){this.ea=M(a)};
Xz=function(a){this.ea=M(a)};
Yz=function(a){this.ea=M(a)};
Zz=function(a){this.ea=M(a)};
$z=function(a){this.ea=M(a)};
aA=function(a){this.ea=M(a)};
bA=function(a){this.ea=M(a)};
cA=function(a){this.ea=M(a)};
dA=function(a){this.ea=M(a)};
eA=function(a){this.ea=M(a)};
fA=function(a){this.ea=M(a)};
gA=function(a){this.ea=M(a)};
hA=function(a){this.ea=M(a)};
iA=function(a){this.ea=M(a)};
jA=function(a){this.ea=M(a)};
kA=function(a){this.ea=M(a)};
lA=function(a){this.ea=M(a)};
mA=function(a){this.ea=M(a)};
nA=function(a){this.ea=M(a)};
oA=function(a){this.ea=M(a)};
pA=function(a){this.ea=M(a)};
qA=function(a){this.ea=M(a)};
rA=function(a){this.ea=M(a)};
sA=function(a){this.ea=M(a)};
nma=function(a){this.ea=M(a)};
tA=function(a){this.ea=M(a)};
oma=function(a){this.ea=M(a)};
pma=function(a){this.ea=M(a)};
qma=function(a){this.ea=M(a)};
rma=function(a){this.ea=M(a)};
uA=function(a){this.ea=M(a)};
vA=function(a){this.ea=M(a)};
wA=function(a){this.ea=M(a)};
xA=function(a){this.ea=M(a)};
sma=function(a){this.ea=M(a)};
tma=function(a){this.ea=M(a)};
yA=function(a){this.ea=M(a)};
uma=function(a){this.ea=M(a)};
vma=function(a){this.ea=M(a)};
wma=function(a){this.ea=M(a)};
DA=function(a){this.ea=M(a)};
xma=function(a){this.ea=M(a)};
yma=function(a){this.ea=M(a)};
zma=function(a){this.ea=M(a)};
Ama=function(a){this.ea=M(a)};
Bma=function(a){this.ea=M(a)};
Cma=function(a){this.ea=M(a)};
Dma=function(a){this.ea=M(a)};
Ema=function(a){this.ea=M(a)};
Fma=function(a){this.ea=M(a)};
Gma=function(a){this.ea=M(a)};
EA=function(a){this.ea=M(a)};
Hma=function(a){this.ea=M(a)};
FA=function(a){this.ea=M(a)};
GA=function(a){this.ea=M(a)};
Ima=function(a){this.ea=M(a)};
Jma=function(a){this.ea=M(a)};
HA=function(a){this.ea=M(a)};
Kma=function(a){this.ea=M(a)};
Lma=function(a){this.ea=M(a)};
Mma=function(a){this.ea=M(a)};
Nma=function(a){this.ea=M(a)};
Oma=function(a){this.ea=M(a)};
Pma=function(a){this.ea=M(a)};
Qma=function(a){this.ea=M(a)};
Rma=function(a){this.ea=M(a)};
IA=function(a){this.ea=M(a)};
Sma=function(a){this.ea=M(a)};
Tma=function(a){this.ea=M(a)};
Uma=function(a){this.ea=M(a)};
JA=function(a){this.ea=M(a)};
Vma=function(a){this.ea=M(a)};
Wma=function(a){this.ea=M(a)};
KA=function(a){this.ea=M(a)};
LA=function(a){this.ea=M(a)};
Xma=function(a){this.ea=M(a)};
MA=function(a){this.ea=M(a)};
NA=function(a){this.ea=M(a)};
Yma=function(a){this.ea=M(a)};
OA=function(a){this.ea=M(a)};
PA=function(a){this.ea=M(a)};
Zma=function(a){this.ea=M(a)};
QA=function(a){this.ea=M(a)};
RA=function(a){this.ea=M(a)};
$ma=function(a){this.ea=M(a)};
ana=function(a){this.ea=M(a)};
SA=function(a){this.ea=M(a)};
bna=function(a){this.ea=M(a)};
cna=function(a){this.ea=M(a)};
TA=function(a){this.ea=M(a)};
dna=function(a){this.ea=M(a)};
ena=function(a){this.ea=M(a)};
fna=function(a){this.ea=M(a)};
gna=function(a){this.ea=M(a)};
hna=function(a){this.ea=M(a)};
ina=function(a){this.ea=M(a)};
jna=function(a){this.ea=M(a)};
kna=function(a){this.ea=M(a)};
lna=function(a){this.ea=M(a)};
mna=function(a){this.ea=M(a)};
UA=function(a){this.ea=M(a)};
nna=function(a){this.ea=M(a)};
ona=function(a){this.ea=M(a)};
VA=function(a){this.ea=M(a)};
pna=function(a){this.ea=M(a)};
WA=function(a){this.ea=M(a)};
XA=function(a){this.ea=M(a)};
qna=function(a){this.ea=M(a)};
rna=function(a){this.ea=M(a)};
YA=function(a){this.ea=M(a)};
sna=function(a){this.ea=M(a)};
tna=function(a,b){Kj(a,vA,1,b)};
ZA=function(a){this.ea=M(a)};
una=function(a,b){return Kj(a,vA,1,b)};
$A=function(a){this.ea=M(a)};
vna=function(a,b){return Kj(a,vA,2,b)};
aB=function(a){this.ea=M(a)};
bB=function(a){this.ea=M(a)};
cB=function(a){this.ea=M(a)};
dB=function(a){this.ea=M(a)};
wna=function(a){this.ea=M(a)};
eB=function(a){this.ea=M(a)};
fB=function(a){var b=new eB;return N(b,1,a)};
gB=function(a,b){return N(a,2,b)};
hB=function(a){this.ea=M(a)};
xna=function(a){this.ea=M(a)};
iB=function(a){this.ea=M(a)};
jB=function(a,b){Nj(a,68,eB,b)};
yna=function(a){this.ea=M(a)};
zna=function(a){this.ea=M(a)};
kB=function(a){this.ea=M(a)};
lB=function(a){this.ea=M(a)};
mB=function(a){this.ea=M(a)};
Ana=function(a){this.ea=M(a)};
nB=function(a){this.ea=M(a)};
Bna=function(a){this.ea=M(a)};
Cna=function(a){this.ea=M(a)};
Dna=function(a){this.ea=M(a)};
oB=function(a){this.ea=M(a)};
Ena=function(a){this.ea=M(a)};
Fna=function(a){this.ea=M(a)};
Gna=function(a){this.ea=M(a)};
pB=function(a){this.ea=M(a)};
Hna=function(a){this.ea=M(a)};
Ina=function(a){this.ea=M(a)};
qB=function(a){this.ea=M(a)};
rB=function(a){this.ea=M(a)};
Jna=function(a){this.ea=M(a)};
sB=function(a){this.ea=M(a)};
Kna=function(a){this.ea=M(a)};
Lna=function(a){this.ea=M(a)};
tB=function(a){this.ea=M(a,492)};
Mna=function(a){this.ea=M(a)};
uB=function(a){this.ea=M(a)};
Nna=function(a){this.ea=M(a)};
Ona=function(){return g.Ta("yt.ads.biscotti.lastId_")||""};
Pna=function(a){g.Sa("yt.ads.biscotti.lastId_",a)};
wB=function(){var a=arguments;1<a.length?vB[a[0]]=a[1]:1===a.length&&Object.assign(vB,a[0])};
g.xB=function(a,b){return a in vB?vB[a]:b};
yB=function(a){var b=vB.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.zB=function(a){a=Qna(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.AB=function(a,b){a=Qna(a);return void 0===a&&void 0!==b?b:Number(a||0)};
Rna=function(){return g.xB("EXPERIMENTS_TOKEN","")};
Qna=function(a){return g.xB("EXPERIMENT_FLAGS",{})[a]};
Sna=function(){for(var a=[],b=g.xB("EXPERIMENTS_FORCED_FLAGS",{}),c=g.v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=g.xB("EXPERIMENT_FLAGS",{});var e=g.v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
Tna=function(a){BB.forEach(function(b){return b(a)})};
g.DB=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.CB(b)}}:a};
g.CB=function(a){var b=g.Ta("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=g.xB("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),wB("ERRORS",b));Tna(a)};
EB=function(a,b,c,d,e){var f=g.Ta("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=g.xB("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),wB("ERRORS",f))};
FB=function(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var h=Una(f[0]||""),l=Una(f[1]||"");h in c?Array.isArray(c[h])?g.Jb(c[h],l):c[h]=[c[h],l]:c[h]=l}catch(q){var m=q,n=f[0],p=String(FB);m.args=[{key:n,value:f[1],query:a,method:Vna==p?"unchanged":p}];Wna.hasOwnProperty(n)||EB(m)}}return c};
GB=function(a){var b=[];g.Vc(a,function(c,d){var e=g.ue(d),f;Array.isArray(c)?f=c:f=[c];g.Zb(f,function(h){""==h?b.push(e):b.push(e+"="+g.ue(h))})});
return b.join("&")};
HB=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return FB(a,"&")};
Xna=function(a){a=a.split(",");return a=a.map(function(b){return HB(b)})};
g.IB=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),HB(1<a.length?a[1]:a[0])):{}};
JB=function(a,b){return Yna(a,b||{},!0)};
KB=function(a,b){return Yna(a,b||{},!1)};
Yna=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=HB(e[1]||"");for(var f in b)if(c||!g.fd(e,f))e[f]=b[f];return g.Nl(a,e)+d};
LB=function(a){if(!b)var b=window.location.href;var c=g.Gl(1,a),d=g.Hl(a);c&&d?(a=a.match(Fl),b=b.match(Fl),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Hl(b)==d&&(Number(g.Gl(4,b))||null)==(Number(g.Gl(4,a))||null):!0;return a};
MB=function(a){a||(a=document.location.href);a=g.Gl(1,a);return null!==a&&"https"==a};
Zna=function(a){a=g.Hl(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
Una=function(a){return a&&a.match($na)?a:ve(a)};
NB=function(a){var b=aoa;a=void 0===a?Ona():a;var c=Object,d=c.assign,e=boa(b);var f=b.j;try{var h=f.screenX;var l=f.screenY}catch(F){}try{var m=f.outerWidth;var n=f.outerHeight}catch(F){}try{var p=f.innerWidth;var q=f.innerHeight}catch(F){}try{var r=f.screenLeft;var t=f.screenTop}catch(F){}try{p=f.innerWidth,q=f.innerHeight}catch(F){}try{var u=f.screen.availWidth;var x=f.screen.availTop}catch(F){}f=[r,t,h,l,u,x,m,n,p,q];h=qia(!1,b.j.top);l={};var B=void 0===B?g.Ra:B;m=new vu;"SVGElement"in B&&"createElementNS"in
B.document&&m.set(0);n=Dha();n["allow-top-navigation-by-user-activation"]&&m.set(1);n["allow-popups-to-escape-sandbox"]&&m.set(2);B.crypto&&B.crypto.subtle&&m.set(3);"TextDecoder"in B&&"TextEncoder"in B&&m.set(4);B=Xka(m);b=(l.bc=B,l.bih=h.height,l.biw=h.width,l.brdim=f.join(),l.vis=$p(b.B),l.wgl=!!Xp.WebGLRenderingContext,l);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c};
boa=function(a){var b={};b.dt=coa;b.flash="0";a:{try{var c=a.j.top.location.href}catch(p){a=2;break a}a=c?c===a.B.location.href?0:1:2}b=(b.frm=a,b);try{b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Xp:d;try{var e=d.history.length}catch(p){e=0}b.u_his=e;var f;b.u_h=null==(f=Xp.screen)?void 0:f.height;var h;b.u_w=null==(h=Xp.screen)?void 0:h.width;var l;b.u_ah=null==(l=Xp.screen)?void 0:l.availHeight;var m;b.u_aw=null==(m=Xp.screen)?void 0:m.availWidth;var n;b.u_cd=null==(n=Xp.screen)?void 0:
n.colorDepth}catch(p){}return b};
moa=function(){if(!doa)return null;var a=doa();return"open"in a?a:null};
g.PB=function(a){switch(OB(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
OB=function(a){return a&&"status"in a?a.status:-1};
g.QB=function(a,b){"function"===typeof a&&(a=g.DB(a));return window.setTimeout(a,b)};
g.RB=function(a,b){"function"===typeof a&&(a=g.DB(a));return window.setInterval(a,b)};
g.SB=function(a){window.clearTimeout(a)};
g.TB=function(a){window.clearInterval(a)};
ooa=function(a,b){b=void 0===b?{}:b;var c=LB(a),d=g.zB("web_ajax_ignore_global_headers_if_set"),e;for(e in noa){var f=g.xB(noa[e]),h="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=g.xB("VISITOR_DATA"));!f||!c&&!UB(a,e)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===g.xB("INNERTUBE_CLIENT_NAME")&&h||(b[e]=f)}g.zB("enable_eom_webview_header")&&c&&g.xB("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];
if(c||UB(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||UB(a,"X-YouTube-Time-Zone")){try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(m){}l&&(b["X-YouTube-Time-Zone"]=l)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&!UB(a,"X-YouTube-Ad-Signals")||(b["X-YouTube-Ad-Signals"]=GB(NB()));return b};
qoa=function(a,b){var c=g.Hl(a);g.zB("debug_handle_relative_url_for_query_forward_killswitch")||!c&&LB(a)&&(c=document.location.hostname);var d=El(g.Gl(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=HB(b),f={};g.Zb(poa,function(h){e[h]&&(f[h]=e[h])});
return KB(a,f)};
UB=function(a){return g.Hl(a)?!1:!0};
g.VB=function(a,b){var c=b.format||"JSON";a=roa(a,b);var d=soa(a,b),e=!1,f=toa(a,function(m){if(!e){e=!0;l&&g.SB(l);var n=g.PB(m),p=null,q=400<=m.status&&500>m.status,r=500<=m.status&&600>m.status;if(n||q||r)p=uoa(a,c,m,b.convertToSafeHtml);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(p&&p.return_code,10);break a;case "RAW":n=!0;break a}n=!!p}p=p||{};q=b.context||g.Ra;n?b.onSuccess&&b.onSuccess.call(q,m,p):b.onError&&b.onError.call(q,m,p);b.onFinish&&b.onFinish.call(q,m,
p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var h=b.onTimeout;var l=g.QB(function(){e||(e=!0,f.abort(),g.SB(l),h.call(b.context||g.Ra,f))},d)}return f};
roa=function(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.xB("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=JB(a,b);return a};
soa=function(a,b){var c=g.xB("XSRF_FIELD_NAME"),d=g.xB("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,h=g.xB("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.excludeXsrf||g.Hl(a)&&!b.withCredentials&&g.Hl(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.postParams&&b.postParams[h]||(f||(f={}),f[c]=d);(g.zB("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=HB(e),g.rd(e,f),e=b.postBodyFormat&&
"JSON"==b.postBodyFormat?JSON.stringify(e):g.Ml(e));f=e||f&&!g.id(f);!voa&&f&&"POST"!=b.method&&(voa=!0,g.CB(Error("AJAX request with postData should use POST")));return e};
uoa=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,EB(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?woa(a):null)e={},g.Zb(a.getElementsByTagName("*"),function(h){e[h.tagName]=xoa(h)})}d&&yoa(e);
return e};
yoa=function(a){if(g.Za(a))for(var b in a)"html_content"==b||Eaa(b,"_html")?a[b]=g.ie(a[b]):yoa(a[b])};
woa=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
xoa=function(a){var b="";g.Zb(a.childNodes,function(c){b+=c.nodeValue});
return b};
zoa=function(a,b){b.method="POST";b.postParams||(b.postParams={});return g.VB(a,b)};
toa=function(a,b,c,d,e,f,h,l){function m(){4==(n&&"readyState"in n?n.readyState:0)&&b&&g.DB(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;l=void 0===l?!1:l;var n=moa();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",m,!1):n.onreadystatechange=m;g.zB("debug_forward_web_query_parameters")&&(a=qoa(a,window.location.search));n.open(c,a,!0);f&&(n.responseType=f);h&&(n.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ooa(a,e))for(var p in e)n.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");l&&"setAttributionReporting"in XMLHttpRequest.prototype&&n.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});n.send(d);return n};
XB=function(a,b){var c=g.pd(b),d;return(new g.Uf(function(e,f){c.onSuccess=function(h){g.PB(h)?e(new Aoa(h)):f(new WB("Request failed, status="+OB(h),"net.badstatus",h))};
c.onError=function(h){f(new WB("Unknown request error","net.unknown",h))};
c.onTimeout=function(h){f(new WB("Request timed out","net.timeout",h))};
d=g.VB(a,c)})).Ek(function(e){e instanceof $f&&d.abort();
return Xf(e)})};
g.YB=function(a,b,c,d){function e(l,m,n){return l.Ek(function(p){if(0>=m||403===OB(p.xhr))return Xf(new WB("Request retried too many times","net.retryexhausted",p.xhr,p));p=Math.pow(2,c-m+1)*n;var q=0<h?Math.min(h,p):p;return f(n).then(function(){return e(XB(a,b),m-1,q)})})}
function f(l){return new g.Uf(function(m){setTimeout(m,l)})}
var h=void 0===h?-1:h;return e(XB(a,b),c-1,d)};
WB=function(a,b,c){tb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
Aoa=function(a){this.xhr=a};
ZB=function(a){this.j=void 0===a?null:a;this.B=0;this.Wd=null};
$B=function(a){var b=new ZB;a=void 0===a?null:a;b.B=2;b.Wd=void 0===a?null:a;return b};
aC=function(a){var b=new ZB;a=void 0===a?null:a;b.B=1;b.Wd=void 0===a?null:a;return b};
g.dC=function(a,b,c,d,e){bC||cC.set(""+a,b,{XI:c,path:"/",domain:void 0===d?"youtube.com":d,pba:void 0===e?!1:e})};
g.eC=function(a,b){if(!bC)return cC.get(""+a,b)};
g.Boa=function(a,b,c){bC||cC.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
Coa=function(){if(!cC.isEnabled())return!1;if(!cC.isEmpty())return!0;cC.set("TESTCOOKIESENABLED","1",{XI:60});if("1"!==cC.get("TESTCOOKIESENABLED"))return!1;cC.remove("TESTCOOKIESENABLED");return!0};
g.S=function(a,b){if(a)return a[b.name]};
Doa=function(a){var b=g.xB("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Il(a)));return a};
Eoa=function(a,b){var c={};g.xB("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==b?0:b.Authorization)||(c.key=g.xB("INNERTUBE_API_KEY"));g.zB("json_condensed_response")&&(c.prettyPrint="false");return a=KB(a,c)};
Foa=function(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:LB(a)?"same-origin":"cors",credentials:LB(a)?"same-origin":"include"};b={};for(var d=g.v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a};
Goa=function(){var a=/Chrome\/(\d+)/.exec(g.mc());return a?parseFloat(a[1]):NaN};
Hoa=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.mc());if(!a)return NaN;var b=[];a=g.v(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
gC=function(){return g.fC("android")&&g.fC("chrome")&&!(g.fC("trident/")||g.fC("edge/"))&&!g.fC("cobalt")};
Ioa=function(){return g.fC("armv7")||g.fC("aarch64")||g.fC("android")};
g.hC=function(){return g.fC("cobalt")};
iC=function(){return g.fC("cobalt")&&g.fC("appletv")};
Joa=function(){return g.fC("(ps3; leanback shell)")||g.fC("ps3")&&g.hC()};
Koa=function(){return g.fC("(ps4; leanback shell)")||g.fC("ps4")&&g.hC()};
g.Loa=function(){return g.hC()&&(g.fC("ps4 vr")||g.fC("ps4 pro vr"))};
jC=function(){var a=/WebKit\/([0-9]+)/.exec(g.mc());return!!(a&&600<=parseInt(a[1],10))};
Moa=function(){var a=/WebKit\/([0-9]+)/.exec(g.mc());return!!(a&&602<=parseInt(a[1],10))};
Noa=function(){return g.fC("iemobile")||g.fC("windows phone")&&g.fC("edge")};
mC=function(){return(kC||lC)&&g.fC("applewebkit")&&!g.fC("version")&&(!g.fC("safari")||g.fC("gsa/"))};
oC=function(){return g.nC&&g.fC("version/")};
Ooa=function(){return g.fC("smart-tv")&&g.fC("samsung")};
g.fC=function(a){var b=g.mc();return b?0<=b.toLowerCase().indexOf(a):!1};
Poa=function(){return Zea()||mC()||oC()?!0:g.xB("EOM_VISITOR_DATA")?!1:!0};
pC=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
qC=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
rC=function(a,b){return void 0===b||null===b?a:Number(b)};
sC=function(a,b){return void 0===b||null===b?a:b.toString()};
Roa=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}return a&&(b=a.match(Qoa))&&(a=Number(b[2]),b=Number(b[1]),!isNaN(a)&&!isNaN(b)&&0<a)?b/a:NaN};
tC=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
Toa=function(a){return"EMBEDDED_PLAYER_MODE_PFL"===Soa(a,!1)};
g.uC=function(a){return"EMBEDDED_PLAYER_LITE_MODE_FIXED_PLAYBACK_LIMIT"===a||"EMBEDDED_PLAYER_LITE_MODE_DYNAMIC_PLAYBACK_LIMIT"===a?!0:!1};
Soa=function(a,b){b=(void 0===b?0:b)?"EMBEDDED_PLAYER_MODE_DEFAULT":"EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(d){return b}return c?qC(b,c.embeddedPlayerMode,Uoa):b};
Voa=function(a){tb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof vC;this.isTimeout=a instanceof WB&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof $f};
vC=function(){tb.call(this,"Biscotti ID is missing from server")};
Woa=function(){if(g.zB("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Poa())return Error("User has not consented - not fetching biscotti id.");var a=g.xB("PLAYER_VARS",{});if("1"==g.kd(a,"privembed",!1))return Error("Biscotti ID is not available in private embed mode");if(Toa(a))return Error("Biscotti id fetching has been disabled for pfl.")};
$oa=function(){var a=Woa();if(void 0!==a)return Xf(a);wC||(wC=XB("//googleads.g.doubleclick.net/pagead/id",Xoa).then(Yoa).Ek(function(b){return Zoa(2,b)}));
return wC};
Yoa=function(a){a=a.xhr.responseText;if(!ec(a,")]}'"))throw new vC;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new vC;a=a.id;Pna(a);wC=aC(a);apa(18E5,2);return a};
Zoa=function(a,b){b=new Voa(b);Pna("");wC=$B(b);0<a&&apa(12E4,a-1);throw b;};
apa=function(a,b){g.QB(function(){XB("//googleads.g.doubleclick.net/pagead/id",Xoa).then(Yoa,function(c){return Zoa(b,c)}).Ek(g.Id)},a)};
bpa=function(){try{var a=g.Ta("yt.ads.biscotti.getId_");return a?a():$oa()}catch(b){return Xf(b)}};
dpa=function(a){return a?a.dataset?a.dataset[cpa()]:a.getAttribute("data-loaded"):null};
cpa=function(){return epa.loaded||(epa.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))};
gpa=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=fpa+"VisibilityState";if(b in a)return a[b]};
xC=function(a,b){var c;ks(a,function(d){c=b[d];return!!c});
return c};
hpa=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
AC=function(a){var b;g.yC()?zC()==a&&(b=document):b=a;return b&&(a=xC(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
ipa=function(a){return g.yb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
jpa=function(){var a=document;return g.yb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
g.yC=function(){return!!xC(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
zC=function(a){a=void 0===a?!1:a;var b=xC(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
BC=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in kpa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.j=a.pageX;this.B=a.pageY}}catch(e){}};
lpa=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.j=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.B=a.clientY+b}};
mpa=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hd(CC,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.Za(e[4])&&g.Za(d)&&g.ld(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.DC=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=mpa(a,b,c,d);if(e)return e;e=++npa.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new BC(l);if(!Af(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new BC(l);
l.currentTarget=a;return c.call(a,l)};
h=g.DB(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),opa()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);CC[e]=[a,b,c,h,d];return e};
ppa=function(a,b){var c=document.body||document;return g.DC(c,"click",function(d){var e=Af(d.target,function(f){return f===c||b(f)},!0);
e&&e!==c&&!e.disabled&&(d.currentTarget=e,a.call(e,d))})};
g.EC=function(a){a&&("string"==typeof a&&(a=[a]),g.Zb(a,function(b){if(b in CC){var c=CC[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?opa()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete CC[b]}}))};
FC=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;b&&b.length?a=b[0]:(a=a||window.event,a=a.target||a.srcElement,3==a.nodeType&&(a=a.parentNode));return a};
qpa=function(a){return ppa(a,function(b){return g.Ju(b,"ytp-ad-has-logging-urls")})};
rpa=function(a){for(var b in CC)CC[b][0]==a&&g.EC(b)};
GC=function(a){this.N=a;this.j=null;this.D=0;this.K=null;this.G=0;this.B=[];for(a=0;4>a;a++)this.B.push(0);this.C=0;this.qa=g.DC(window,"mousemove",(0,g.db)(this.Y,this));this.Z=g.RB((0,g.db)(this.ma,this),25)};
HC=function(a){g.J.call(this);this.N=[];this.fb=a||this};
IC=function(a,b,c,d){for(var e=0;e<c.length;e++)a.T(b,c[e],d)};
g.JC=function(a,b){for(;a.N.length;){var c=a.N.pop(),d=void 0;b&&spa()&&(d={passive:!0});c.target.removeEventListener(c.name,c.callback,d)}};
KC=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.pd(b);this.assets=a.assets||{};this.attrs=a.attrs||g.pd(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
tpa=function(a){a instanceof KC||(a=new KC(a));return a};
g.MC=function(a,b,c){var d=c&&0<c?c:0;c=d?Date.now()+1E3*d:0;if((d=d?(0,g.LC)():upa())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.NC=function(a){var b=upa(),c=(0,g.LC)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
vpa=function(){var a=(0,g.LC)();if(a&&(a=a.B("yt-player-quality")))return a.creation};
g.OC=function(a){try{var b=upa(),c=(0,g.LC)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.PC=function(){return g.NC("yt-remote-session-screen-id")};
QC=function(){this.Q_=!0};
wpa=function(){QC.instance||(QC.instance=new QC);return QC.instance};
xpa=function(a){var b=this;this.B=void 0;this.j=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.B=c});
a.addEventListener("appinstalled",function(){b.j=!0},{once:!0})};
ypa=function(){if(!g.Ra.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return g.Ra.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":g.Ra.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":g.Ra.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":g.Ra.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}};
zpa=function(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}};
Apa=function(){this.j=g.xB("ALT_PREF_COOKIE_NAME","PREF");this.B=g.xB("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=g.eC(this.j);a&&this.parse(a)};
g.RC=function(){Bpa||(Bpa=new Apa);return Bpa};
g.SC=function(a,b){return!!((Cpa("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
Dpa=function(a,b){var c="f"+(Math.floor(a/31)+1);a=1<<a%31;var d=Cpa(c)||0;d=b?d|a:d&~a;0===d?delete TC[c]:(b=d.toString(16),TC[c]=b.toString())};
Epa=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
Fpa=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
Cpa=function(a){a=void 0!==TC[a]?TC[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
Gpa=function(){var a=g.Ra.navigator;return a?a.connection:void 0};
Ipa=function(){var a=Gpa();if(a){var b=Hpa[a.type||"unknown"]||"CONN_UNKNOWN";a=Hpa[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}};
Kpa=function(){var a=Gpa();if(null!=a&&a.effectiveType)return Jpa.hasOwnProperty(a.effectiveType)?Jpa[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"};
g.UC=function(a){var b=g.Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(g.oa(b))};
g.WC=function(){try{return g.VC(),!0}catch(a){return!1}};
g.VC=function(a){if(void 0!==g.xB("DATASYNC_ID"))return g.xB("DATASYNC_ID");throw new g.UC("Datasync ID not set",void 0===a?"unknown":a);};
XC=function(){this.j=new WeakMap};
g.ZC=function(a,b,c){return YC(b,0,c)};
Lpa=function(a){var b=g.Ta("yt.scheduler.instance.addImmediateJob");b?b(a):a()};
$C=function(){XC.apply(this,arguments)};
g.aD=function(){$C.instance||($C.instance=new $C);return $C.instance};
g.bD=function(){return!!g.Ta("yt.scheduler.instance")};
YC=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=g.Ta("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.QB(a,c||0)};
cD=function(a){var b=g.Ta("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
dD=function(a){var b;(b=g.uv(a))||(a=new pv(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.j=(a=b)?new jv(a):null;this.B=document.domain||window.location.hostname};
Npa=function(){var a;return null==(a=Mpa())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)};
Qpa=function(){var a={};for(eD=new Opa(void 0===a.handleError?Ppa:a.handleError,void 0===a.logEvent?g.fD:a.logEvent);0<gD.length;)switch(a=gD.shift(),a.type){case "ERROR":eD.rE(a.payload);break;case "EVENT":eD.logEvent(a.eventType,a.payload)}};
iD=function(a){hD||(eD?eD.rE(a):(gD.push({type:"ERROR",payload:a}),10<gD.length&&gD.shift()))};
jD=function(a,b){hD||(eD?eD.logEvent(a,b):(gD.push({type:"EVENT",eventType:a,payload:b}),10<gD.length&&gD.shift()))};
kD=function(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");};
lD=function(a){return a.substr(0,a.indexOf(":"))||a};
g.mD=function(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Rpa[a]:c;d=void 0===d?Spa[a]:d;e=void 0===e?Tpa[a]:e;g.UC.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.j=e;Object.setPrototypeOf(this,g.mD.prototype)};
Upa=function(a,b){g.mD.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Rpa.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Upa.prototype)};
nD=function(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,nD.prototype)};
Wpa=function(a,b,c,d){b=lD(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof g.mD)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new g.mD("QUOTA_EXCEEDED",a);if(g.oD&&"UnknownError"===e.name)return new g.mD("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof nD)return new g.mD("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Vpa.some(function(f){return e.message.includes(f)}))return new g.mD("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new g.mD("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",OJ:e.name})];e.level="WARNING";return e};
g.pD=function(a,b,c){var d=Npa();return new g.mD("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})};
Xpa=function(a){if(!a)throw Error();throw a;};
Ypa=function(a){return a};
qD=function(a){this.j=a};
g.rD=function(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=g.v(d.B);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=g.v(d.j);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.j=[];this.B=[];a=a.j;try{a(c,b)}catch(e){b(e)}};
$pa=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof g.rD?Zpa(a,b,f,d,e):d(f)}catch(h){e(h)}};
aqa=function(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof g.rD?Zpa(a,b,f,d,e):d(f)}catch(h){e(h)}};
Zpa=function(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof g.rD?Zpa(a,b,f,d,e):d(f)},function(f){e(f)})};
bqa=function(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(h){}}
a.addEventListener("success",e);a.addEventListener("error",d)};
cqa=function(a){return new Promise(function(b,c){bqa(a,b,c)})};
g.sD=function(a){return new g.rD(new qD(function(b,c){bqa(a,b,c)}))};
dqa=function(a,b){return new g.rD(new qD(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(h){a=h;e()},d):c()}
e()}))};
eqa=function(a,b){this.request=a;this.cursor=b};
tD=function(a){return g.sD(a).then(function(b){return b?new eqa(a,b):null})};
fqa=function(a,b){this.j=a;this.options=b;this.transactionCount=0;this.C=Math.round((0,g.uD)());this.B=!1};
g.vD=function(a,b,c){a=a.j.createObjectStore(b,c);return new gqa(a)};
wD=function(a,b){a.j.objectStoreNames.contains(b)&&a.j.deleteObjectStore(b)};
g.zD=function(a,b,c){return g.xD(a,[b],{mode:"readwrite",Vb:!0},function(d){return g.yD(d.objectStore(b),c)})};
g.xD=function(a,b,c,d){var e,f,h,l,m,n,p,q,r,t,u,x;return g.I(function(B){switch(B.j){case 1:var F={mode:"readonly",Vb:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.Vb?3:1;h=0;case 2:if(l){B.La(4);break}h++;m=Math.round((0,g.uD)());g.Aa(B,5);n=a.j.transaction(b,e.mode);F=new AD(n);F=hqa(F,d);return g.y(B,F,7);case 7:return p=B.B,q=Math.round((0,g.uD)()),iqa(a,m,q,h,void 0,b.join(),e),B.return(p);case 5:r=g.Ca(B);t=Math.round((0,g.uD)());
u=Wpa(r,a.j.name,b.join(),a.j.version);if((x=u instanceof g.mD&&!u.j)||h>=f)iqa(a,m,t,h,u,b.join(),e),l=u;B.La(2);break;case 4:return B.return(Promise.reject(l))}})};
iqa=function(a,b,c,d,e,f,h){b=c-b;e?(e instanceof g.mD&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&jD("QUOTA_EXCEEDED",{dbName:lD(a.j.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:h.mode}),e instanceof g.mD&&"UNKNOWN_ABORT"===e.type&&(c-=a.C,0>c&&c>=Math.pow(2,31)&&(c=0),jD("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.B=!0),jqa(a,!1,d,f,b,h.tag),iD(e)):jqa(a,!0,d,
f,b,h.tag)};
jqa=function(a,b,c,d,e,f){jD("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.B,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})};
gqa=function(a){this.j=a};
g.BD=function(a,b,c){a.j.createIndex(b,c,{unique:!1})};
kqa=function(a,b){return g.CD(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})};
g.mqa=function(a,b){return"getAll"in IDBObjectStore.prototype?g.sD(a.j.getAll(b,void 0)):lqa(a,b)};
lqa=function(a,b){var c=[];return g.CD(a,{query:b},function(d){c.push(d.getValue());return d.continue()}).then(function(){return c})};
oqa=function(a){return"getAllKeys"in IDBObjectStore.prototype?g.sD(a.j.getAllKeys(void 0,void 0)):nqa(a)};
nqa=function(a){var b=[];return g.pqa(a,{query:void 0},function(c){b.push(c.dI());return c.continue()}).then(function(){return b})};
g.yD=function(a,b,c){return g.sD(a.j.put(b,c))};
g.CD=function(a,b,c){a=a.j.openCursor(b.query,b.direction);return DD(a).then(function(d){return dqa(d,c)})};
g.pqa=function(a,b,c){var d=b.query;b=b.direction;a="openKeyCursor"in IDBObjectStore.prototype?a.j.openKeyCursor(d,b):a.j.openCursor(d,b);return tD(a).then(function(e){return dqa(e,c)})};
AD=function(a){var b=this;this.j=a;this.C=new Map;this.B=!1;this.done=new Promise(function(c,d){b.j.addEventListener("complete",function(){c()});
b.j.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.j.error)});
b.j.addEventListener("abort",function(){var e=b.j.error;if(e)d(e);else if(!b.B){e=g.mD;for(var f=b.j.objectStoreNames,h=[],l=0;l<f.length;l++){var m=f.item(l);if(null===m)throw Error("Invariant: item in DOMStringList is null");h.push(m)}e=new e("UNKNOWN_ABORT",{objectStoreNames:h.join(),dbName:b.j.db.name,mode:b.j.mode});d(e)}})})};
hqa=function(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return g.v(d).next().value})};
qqa=function(a){this.j=a};
g.ED=function(a,b,c){a=a.j.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return DD(a).then(function(d){return dqa(d,c)})};
rqa=function(a,b){this.request=a;this.cursor=b};
DD=function(a){return g.sD(a).then(function(b){return b?new rqa(a,b):null})};
sqa=function(a,b,c){return new Promise(function(d,e){function f(){r||(r=new fqa(h.result,{closed:q}));return r}
var h=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var l=c.blocked,m=c.blocking,n=c.Zba,p=c.upgrade,q=c.closed,r;h.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===h.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&jD("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:lD(a)});var u=f(),x=new AD(h.transaction);
p&&p(u,function(B){return t.oldVersion<B&&t.newVersion>=B},x);
x.done.catch(function(B){e(B)})}catch(B){e(B)}});
h.addEventListener("success",function(){var t=h.result;m&&t.addEventListener("versionchange",function(){m(f())});
t.addEventListener("close",function(){jD("IDB_UNEXPECTEDLY_CLOSED",{dbName:lD(a),dbVersion:t.version});n&&n()});
d(f())});
h.addEventListener("error",function(){e(h.error)});
l&&h.addEventListener("blocked",function(){l()})})};
tqa=function(a,b,c){c=void 0===c?{}:c;return sqa(a,b,c)};
FD=function(a,b){b=void 0===b?{}:b;var c,d,e,f;return g.I(function(h){if(1==h.j)return g.Aa(h,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),g.y(h,cqa(c),4);
if(2!=h.j)return g.Ba(h,0);f=g.Ca(h);throw Wpa(f,a,"",-1);})};
GD=function(a,b){this.name=a;this.options=b;this.C=!0;this.G=this.D=0};
uqa=function(a,b){return new g.mD("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})};
g.HD=function(a,b){if(!b)throw g.pD("openWithToken",lD(a.name));return a.open()};
wqa=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.y(d,g.HD(vqa,b),2);c=d.B;return d.return(g.xD(c,["databases"],{Vb:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return g.yD(f,a).then(function(){})})}))})};
ID=function(a,b){var c;return g.I(function(d){if(1==d.j)return a?g.y(d,g.HD(vqa,b),2):d.return();c=d.B;return d.return(c.delete("databases",a))})};
xqa=function(a,b){var c,d;return g.I(function(e){return 1==e.j?(c=[],g.y(e,g.HD(vqa,b),2)):3!=e.j?(d=e.B,g.y(e,g.xD(d,["databases"],{Vb:!0,mode:"readonly"},function(f){c.length=0;return g.CD(f.objectStore("databases"),{},function(h){a(h.getValue())&&c.push(h.getValue());return h.continue()})}),3)):e.return(c)})};
yqa=function(a,b){return xqa(function(c){return c.publicName===a&&void 0!==c.userIdentifier},b)};
Aqa=function(){var a,b,c,d;return g.I(function(e){switch(e.j){case 1:a=Npa();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);if(JD&&jC()&&!Moa()||g.KD)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(f){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);g.Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};
return g.y(e,wqa(d,zqa),4);case 4:return g.y(e,ID("yt-idb-test-do-not-use",zqa),5);case 5:return e.return(!0);case 2:return g.Ca(e),e.return(!1)}})};
Cqa=function(){if(void 0!==Bqa)return Bqa;hD=!0;return Bqa=Aqa().then(function(a){hD=!1;var b;if(null!=(b=Mpa())&&b.j){var c;b={hasSucceededOnce:(null==(c=Npa())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Mpa())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})};
LD=function(){return g.Ta("ytglobal.idbToken_")||void 0};
g.MD=function(){var a=LD();return a?Promise.resolve(a):Cqa().then(function(b){(b=b?zqa:void 0)&&g.Sa("ytglobal.idbToken_",b);return b})};
Dqa=function(a){if(!g.WC())throw a=new g.mD("AUTH_INVALID",{dbName:a}),iD(a),a;var b=g.VC();return{actualName:a+":"+b,publicName:a,userIdentifier:b}};
Eqa=function(a,b,c,d){var e,f,h,l,m,n;return g.I(function(p){switch(p.j){case 1:return f=null!=(e=Error().stack)?e:"",g.y(p,g.MD(),2);case 2:h=p.B;if(!h)throw l=g.pD("openDbImpl",a,b),g.zB("ytidb_async_stack_killswitch")||(l.stack=l.stack+"\n"+f.substring(f.indexOf("\n")+1)),iD(l),l;kD(a);m=c?{actualName:a,publicName:a,userIdentifier:void 0}:Dqa(a);g.Aa(p,3);return g.y(p,wqa(m,h),5);case 5:return g.y(p,tqa(m.actualName,b,d),6);case 6:return p.return(p.B);case 3:return n=g.Ca(p),g.Aa(p,7),g.y(p,ID(m.actualName,
h),9);case 9:g.Ba(p,8);break;case 7:g.Ca(p);case 8:throw n;}})};
Fqa=function(a,b,c){c=void 0===c?{}:c;return Eqa(a,b,!1,c)};
Gqa=function(a,b,c){c=void 0===c?{}:c;return Eqa(a,b,!0,c)};
Hqa=function(a,b){b=void 0===b?{}:b;var c,d;return g.I(function(e){if(1==e.j)return g.y(e,g.MD(),2);if(3!=e.j){c=e.B;if(!c)return e.return();kD(a);d=Dqa(a);return g.y(e,FD(d.actualName,b),3)}return g.y(e,ID(d.actualName,c),0)})};
Iqa=function(a,b,c){a=a.map(function(d){return g.I(function(e){return 1==e.j?g.y(e,FD(d.actualName,b),2):g.y(e,ID(d.actualName,c),0)})});
return Promise.all(a).then(function(){})};
Jqa=function(a){var b=void 0===b?{}:b;var c,d;return g.I(function(e){if(1==e.j)return g.y(e,g.MD(),2);if(3!=e.j){c=e.B;if(!c)return e.return();kD(a);return g.y(e,yqa(a,c),3)}d=e.B;return g.y(e,Iqa(d,b,c),0)})};
Kqa=function(a,b){b=void 0===b?{}:b;var c;return g.I(function(d){if(1==d.j)return g.y(d,g.MD(),2);if(3!=d.j){c=d.B;if(!c)return d.return();kD(a);return g.y(d,FD(a,b),3)}return g.y(d,ID(a,c),0)})};
ND=function(a,b){GD.call(this,a,b);this.options=b;kD(a)};
Lqa=function(a,b){var c;return function(){c||(c=new ND(a,b));return c}};
g.OD=function(a,b){return Lqa(a,b)};
PD=function(a){return g.HD(Mqa(),a)};
Nqa=function(a,b,c,d){var e,f,h;return g.I(function(l){switch(l.j){case 1:return e={config:a,hashData:b,timestamp:void 0!==d?d:(0,g.uD)()},g.y(l,PD(c),2);case 2:return f=l.B,g.y(l,f.clear("hotConfigStore"),3);case 3:return g.y(l,g.zD(f,"hotConfigStore",e),4);case 4:return h=l.B,l.return(h)}})};
Oqa=function(a,b,c,d,e){var f,h,l;return g.I(function(m){switch(m.j){case 1:return f={config:a,hashData:b,configData:c,timestamp:void 0!==e?e:(0,g.uD)()},g.y(m,PD(d),2);case 2:return h=m.B,g.y(m,h.clear("coldConfigStore"),3);case 3:return g.y(m,g.zD(h,"coldConfigStore",f),4);case 4:return l=m.B,m.return(l)}})};
Pqa=function(a){var b,c;return g.I(function(d){return 1==d.j?g.y(d,PD(a),2):3!=d.j?(b=d.B,c=void 0,g.y(d,g.xD(b,["coldConfigStore"],{mode:"readwrite",Vb:!0},function(e){return g.ED(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
Qqa=function(a){var b,c;return g.I(function(d){return 1==d.j?g.y(d,PD(a),2):3!=d.j?(b=d.B,c=void 0,g.y(d,g.xD(b,["hotConfigStore"],{mode:"readwrite",Vb:!0},function(e){return g.ED(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
Rqa=function(){return g.I(function(a){return g.y(a,Jqa("ytGcfConfig"),0)})};
Sqa=function(){g.J.call(this);this.B=[];this.j=[];var a=g.Ta("yt.gcf.config.hotUpdateCallbacks");a?(this.B=[].concat(g.oa(a)),this.j=a):(this.j=[],g.Sa("yt.gcf.config.hotUpdateCallbacks",this.j))};
UD=function(){var a=this;this.G=!1;this.C=this.D=0;this.K=new Sqa;this.Jd={ejb:function(){a.G=!0},
nib:function(){return a.j},
hkb:function(b){QD(a,b)},
Mr:function(b){a.Mr(b)},
bkb:function(b){Tqa(a,b)},
j6:function(){return a.coldHashData},
r6:function(){return a.hotHashData},
Dib:function(){return a.B},
vib:function(){return RD()},
xib:function(){return SD()},
wib:function(){return g.Ta("yt.gcf.config.coldHashData")},
yib:function(){return g.Ta("yt.gcf.config.hotHashData")},
wkb:function(){Uqa(a)},
Vjb:function(){a.Mr(void 0);TD(a);delete UD.instance},
ekb:function(b){a.C=b},
sib:function(){return a.C}}};
Vqa=function(){if(!UD.instance){var a=new UD;UD.instance=a}return UD.instance};
Yqa=function(a){var b;g.I(function(c){if(1==c.j)return g.zB("start_client_gcf")||g.zB("delete_gcf_config_db")?g.zB("start_client_gcf")?g.y(c,g.MD(),3):c.La(2):c.return();2!=c.j&&((b=c.B)&&g.WC()&&!g.zB("delete_gcf_config_db")?(a.G=!0,Uqa(a)):(Wqa(a),Xqa(a)));return g.zB("delete_gcf_config_db")?g.y(c,Rqa(),0):c.La(0)})};
VD=function(){var a;return null!=(a=SD())?a:g.xB("RAW_HOT_CONFIG_GROUP")};
Zqa=function(a){var b,c,d,e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.B)return l.return(SD());if(!a.G)return b=g.pD("getHotConfig IDB not initialized"),EB(b),l.return(Promise.reject(b));c=LD();d=g.xB("TIME_CREATED_MS");if(!c){e=g.pD("getHotConfig token error");EB(e);l.La(2);break}return g.y(l,Qqa(c),3);case 3:if((f=l.B)&&f.timestamp>d)return QD(a,f.config),a.Mr(f.hashData),l.return(SD());case 2:Xqa(a);if(!(c&&a.B&&a.hotHashData)){l.La(4);break}return g.y(l,Nqa(a.B,a.hotHashData,c,d),4);case 4:return a.B?
l.return(SD()):(h=new g.UC("Config not available in ytConfig"),EB(h),l.return(Promise.reject(h)))}})};
ara=function(a){var b,c,d,e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.j)return l.return(RD());if(!a.G)return b=g.pD("getColdConfig IDB not initialized"),EB(b),l.return(Promise.reject(b));c=LD();d=g.xB("TIME_CREATED_MS");if(!c){e=g.pD("getColdConfig");EB(e);l.La(2);break}return g.y(l,Pqa(c),3);case 3:if((f=l.B)&&f.timestamp>d)return Tqa(a,f.config),$qa(a,f.configData),TD(a,f.hashData),l.return(RD());case 2:Wqa(a);if(!(c&&a.j&&a.coldHashData&&a.configData)){l.La(4);break}return g.y(l,Oqa(a.j,
a.coldHashData,a.configData,c,d),4);case 4:return a.j?l.return(RD()):(h=new g.UC("Config not available in ytConfig"),EB(h),l.return(Promise.reject(h)))}})};
Uqa=function(a){if(!a.B||!a.j){if(!LD()){var b=g.pD("scheduleGetConfigs");EB(b)}a.D||(a.D=g.uu.Ri(function(){return g.I(function(c){switch(c.j){case 1:return g.Aa(c,2),g.y(c,Zqa(a),4);case 4:g.Ba(c,3);break;case 2:g.Ca(c);case 3:return g.Aa(c,5),g.y(c,ara(a),7);case 7:g.Ba(c,6);break;case 5:g.Ca(c);case 6:a.D&&(a.D=0),g.za(c)}})},100))}};
bra=function(a,b,c){var d,e,f;return g.I(function(h){switch(h.j){case 1:if(!g.zB("start_client_gcf")){h.La(0);break}c&&QD(a,c);a.Mr(b);d=LD();if(!d){h.La(3);break}if(c){h.La(4);break}return g.y(h,Qqa(d),5);case 5:e=h.B,c=null==(f=e)?void 0:f.config;case 4:return g.y(h,Nqa(c,b,d),3);case 3:if(c)for(var l=c,m=g.v(a.K.j),n=m.next();!n.done;n=m.next())n=n.value,n(l);g.za(h)}})};
cra=function(a,b,c){var d,e,f,h;return g.I(function(l){if(1==l.j){if(!g.zB("start_client_gcf"))return l.La(0);TD(a,b);return(d=LD())?c?l.La(4):g.y(l,Pqa(d),5):l.La(0)}4!=l.j&&(e=l.B,c=null==(f=e)?void 0:f.config);if(!c)return l.La(0);h=c.configData;return g.y(l,Oqa(c,b,h,d),0)})};
dra=function(){var a=Vqa(),b=(0,g.uD)()-a.C;if(!(0!==a.C&&b<g.AB("send_config_hash_timer"))){b=g.Ta("yt.gcf.config.coldConfigData");var c=g.Ta("yt.gcf.config.hotHashData"),d=g.Ta("yt.gcf.config.coldHashData");b&&c&&d&&(a.C=(0,g.uD)());return{coldConfigData:b,hotHashData:c,coldHashData:d}}};
Wqa=function(a){Tqa(a,g.xB("RAW_COLD_CONFIG_GROUP"));TD(a,g.xB("SERIALIZED_COLD_HASH_DATA"));var b;$qa(a,null==(b=a.j)?void 0:b.configData)};
Xqa=function(a){QD(a,g.xB("RAW_HOT_CONFIG_GROUP"));a.Mr(g.xB("SERIALIZED_HOT_HASH_DATA"))};
QD=function(a,b){a.B=b;g.Sa("yt.gcf.config.hotConfigGroup",a.B||null)};
Tqa=function(a,b){a.j=b;g.Sa("yt.gcf.config.coldConfigGroup",a.j||null)};
TD=function(a,b){a.coldHashData=b;g.Sa("yt.gcf.config.coldHashData",a.coldHashData||null)};
$qa=function(a,b){a.configData=b;g.Sa("yt.gcf.config.coldConfigData",a.configData||null)};
SD=function(){return g.Ta("yt.gcf.config.hotConfigGroup")};
RD=function(){return g.Ta("yt.gcf.config.coldConfigGroup")};
era=function(){return"INNERTUBE_API_KEY"in vB&&"INNERTUBE_API_VERSION"in vB};
g.WD=function(){return{innertubeApiKey:g.xB("INNERTUBE_API_KEY"),innertubeApiVersion:g.xB("INNERTUBE_API_VERSION"),BI:g.xB("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),LO:g.xB("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),yX:g.xB("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:g.xB("INNERTUBE_CONTEXT_CLIENT_VERSION"),NO:g.xB("INNERTUBE_CONTEXT_HL"),MO:g.xB("INNERTUBE_CONTEXT_GL"),zX:g.xB("INNERTUBE_HOST_OVERRIDE")||"",AX:!!g.xB("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),OO:!!g.xB("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:g.xB("SERIALIZED_CLIENT_CONFIG_DATA")}};
g.lra=function(a){var b={client:{hl:a.NO,gl:a.MO,clientName:a.LO,clientVersion:a.innertubeContextClientVersion,configInfo:a.BI}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=g.Ra.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Rna();""!==c&&(b.client.experimentsToken=c);c=Sna();0<c.length&&(b.request={internalExperimentFlags:c});fra(a,void 0,b);gra(void 0,b);hra(void 0,b);ira(a,void 0,b);jra(void 0,b);g.zB("start_client_gcf")&&kra(void 0,b);g.xB("DELEGATED_SESSION_ID")&&
!g.zB("pageid_as_header_web")&&(b.user={onBehalfOfUser:g.xB("DELEGATED_SESSION_ID")});!g.zB("fill_delegate_context_in_gel_killswitch")&&(a=g.xB("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=g.v(Object.entries(HB(g.xB("DEVICE","")))),h=f.next();!h.done;h=f.next()){var l=g.v(h.value);h=l.next().value;l=l.next().value;"cbrand"===h?e.deviceMake=l:"cmodel"===h?e.deviceModel=l:"cbr"===
h?e.browserName=l:"cbrver"===h?e.browserVersion=l:"cos"===h?e.osName=l:"cosver"===h?e.osVersion=l:"cplatform"===h&&(e.platform=l)}b.client=c.call(a,d,e);return b};
fra=function(a,b,c){a=a.LO;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=g.Jj(b,Ox,96)||new Ox;var d=ypa();d=Object.keys(mra).indexOf(d);d=-1===d?null:d;null!==d&&Q(c,3,d);Kj(b,Ox,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=ypa())};
gra=function(a,b){var c=g.Ta("yt.embedded_player.embed_url");c&&(a?(b=g.Jj(a,Tx,7)||new Tx,N(b,4,c),Kj(a,Tx,7,b)):b&&(b.thirdParty={embedUrl:c}))};
hra=function(a,b){var c;if(g.zB("web_log_memory_total_kbytes")&&(null==(c=g.Ra.navigator)?0:c.deviceMemory)){var d;c=null==(d=g.Ra.navigator)?void 0:d.deviceMemory;a?hj(a,95,wi(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}};
ira=function(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=g.Jj(b,Kx,62))?d:new Kx;N(c,6,a.appInstallData);Kj(b,Kx,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)};
jra=function(a,b){var c=Ipa();c&&(a?Q(a,61,nra[c]):b&&(b.client.connectionType=c));g.zB("web_log_effective_connection_type")&&(c=Kpa())&&(a?Q(a,94,ora[c]):b&&(b.client.effectiveConnectionType=c))};
pra=function(a,b,c){c=void 0===c?{}:c;var d={};g.xB("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":g.xB("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||g.xB("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.eV||g.xB("AUTHORIZATION");b||(a?b="Bearer "+g.Ta("gapi.auth.getToken")().access_token:(a=wpa().vD(XD),g.zB("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d};
kra=function(a,b){var c=dra();if(c){var d=c.coldConfigData,e=c.coldHashData;c=c.hotHashData;if(d&&e&&c)if(a){var f;b=null!=(f=g.Jj(a,Kx,62))?f:new Kx;N(b,1,d);N(b,3,e);b.Mr(c);Kj(a,Kx,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=d,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=c)}};
YD=function(a,b){this.version=a;this.args=b};
ZD=function(a,b){this.topic=a;this.j=b};
$D=function(a,b){var c=qra();c&&c.publish.call(c,a.toString(),a,b)};
sra=function(a,b){var c=qra();if(!c)return 0;var d=c.subscribe(a.toString(),function(e,f){var h=g.Ta("ytPubsub2Pubsub2SkipSubKey");h&&h==d||(h=function(){if(aE[d])try{if(f&&a instanceof ZD&&a!=e)try{var l=a.j,m=f;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.Iu){var n=new l;l.Iu=n.version}var p=l.Iu}catch(q){}if(!p||m.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(l,
g.Hb(m.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(window,f)}catch(q){g.CB(q)}},rra[a.toString()]?g.bD()?g.uu.Ri(h):g.QB(h,0):h())});
aE[d]=!0;bE[a.toString()]||(bE[a.toString()]=[]);bE[a.toString()].push(d);return d};
ura=function(a,b){var c=sra(a,function(d){b.apply(void 0,arguments);tra(c)});
return c};
tra=function(a){var b=qra();b&&("number"===typeof a&&(a=[a]),g.Zb(a,function(c){b.unsubscribeByKey(c);delete aE[c]}))};
qra=function(){return g.Ta("ytPubsub2Pubsub2Instance")};
vra=function(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&$D("meta_logging_csi_event",{timerName:a,ukb:b})};
xra=function(){wra||(wra=hma(g.xB("WORKER_SERIALIZATION_URL")));return wra||void 0};
cE=function(){var a=xra();yra||void 0===a||(yra=new Worker(g.Td(a),void 0));return yra};
zra=function(){return"function"===typeof Worker&&xra()?!0:!1};
Cra=function(){if(zra()&&!Ara){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=dE.get(c.key);d&&(Bra(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),dE.delete(c.key))}},b=cE();
b&&(b.addEventListener("message",a),b.onerror=function(){dE.clear()},Ara=!0)}};
fE=function(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:(0,g.uD)(),ticks:{},infos:{}};if(eE)try{var h=Dra(b);if(null!=h&&(h>Era||h<Fra))d(a,c);else{if(g.zB("gzip_gel_with_worker")&&(g.zB("initial_gzip_use_main_thread")&&!Gra||!g.zB("initial_gzip_use_main_thread"))){Ara||Cra();var l=cE();if(l&&!e){dE.set(Hra,{latencyPayload:f,url:a,options:c,sendFn:d});l.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Hra});Hra++;return}}var m=ama(Ira(b));Bra(m,f,a,c,d)}}catch(n){EB(n),d(a,c)}else d(a,c)};
Bra=function(a,b,c,d,e){Gra=!1;var f=(0,g.uD)();b.ticks.gelc=f;gE++;g.zB("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Jra&&(hE++,g.zB("abandon_compression_after_N_slow_zips")?gE===g.AB("compression_disable_point")&&hE>Kra&&(eE=!1):eE=!1);Lra(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)};
Mra=function(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=(0,g.uD)(),e={startTime:d,ticks:{},infos:{}},f=b?g.Ta("yt.logging.gzipForFetch",!1):!0;if(eE&&f){if(!a.body)return a;try{var h=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=h;if(!c&&"string"===typeof h){var l=Dra(h);if(null!=l&&(l>Era||l<Fra))return a;f=ama(Ira(h),b?{level:1}:void 0);var m=(0,g.uD)();e.ticks.gelc=m;if(b){gE++;if((g.zB("disable_compression_due_to_performance_degredation")||g.zB("disable_compression_due_to_performance_degradation_lr"))&&
m-d>=Jra)if(hE++,g.zB("abandon_compression_after_N_slow_zips")||g.zB("abandon_compression_after_N_slow_zips_lr")){b=hE/gE;var n=Kra/g.AB("compression_disable_point");0<gE&&0===gE%g.AB("compression_disable_point")&&b>=n&&(eE=!1)}else eE=!1;Lra(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(p){return EB(p),a}}else return a};
Dra=function(a){try{return(new Blob(a.split(""))).size}catch(b){return EB(b),null}};
Lra=function(a){g.zB("gel_compression_csi_killswitch")||!g.zB("log_gel_compression_latency")&&!g.zB("log_gel_compression_latency_lr")||vra("gel_compression",a,{sampleRate:.1})};
jE=function(a){var b=this;this.TG=this.rg=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Ez=function(){};
this.now=Date.now;this.eD=!1;this.Jd={dkb:function(p){b.Gf=p},
xkb:function(){b.JB()},
W4:function(){b.TM()},
YD:function(p){return g.I(function(q){return g.y(q,b.YD(p),0)})},
qK:function(p,q){return b.qK(p,q)},
uK:function(){b.uK()}};
var c;this.U_=null!=(c=a.U_)?c:100;var d;this.f_=null!=(d=a.f_)?d:1;var e;this.XZ=null!=(e=a.XZ)?e:2592E6;var f;this.RZ=null!=(f=a.RZ)?f:12E4;var h;this.e_=null!=(h=a.e_)?h:5E3;var l;this.Gf=null!=(l=a.Gf)?l:void 0;this.yH=!!a.yH;var m;this.bH=null!=(m=a.bH)?m:.1;var n;this.aK=null!=(n=a.aK)?n:10;a.handleError&&(this.handleError=a.handleError);a.Ez&&(this.Ez=a.Ez);a.eD&&(this.eD=a.eD);a.TG&&(this.TG=a.TG);this.ib=a.ib;this.On=a.On;this.Bh=a.Bh;this.kh=a.kh;this.sendFn=a.sendFn;this.AQ=a.AQ;this.PP=
a.PP;iE(this)&&(!this.ib||this.ib("networkless_logging"))&&Nra(this)};
Nra=function(a){iE(a)&&!a.eD&&(a.rg=!0,a.yH&&Math.random()<=a.bH&&a.Bh.b5(a.Gf),a.uK(),a.kh.Th()&&a.JB(),a.kh.Qa(a.AQ,a.JB.bind(a)),a.kh.Qa(a.PP,a.TM.bind(a)))};
Qra=function(a,b){if(!iE(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var h,l,m,n;return g.I(function(p){switch(p.j){case 1:h=Ora(f);(l=Pra(f))&&a.ib&&a.ib("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.ib&&a.ib("nwl_consider_error_code")&&h||a.ib&&!a.ib("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.aK)){p.La(2);break}if(!a.kh.zK){p.La(3);break}return g.y(p,a.kh.zK(),3);case 3:if(a.kh.Th()){p.La(2);break}c(e,f);if(!a.ib||!a.ib("nwl_consider_error_code")||void 0===(null==(m=
b)?void 0:m.id)){p.La(6);break}return g.y(p,a.Bh.tR(b.id,a.Gf,!1),6);case 6:return p.return();case 2:if(a.ib&&a.ib("nwl_consider_error_code")&&!h&&a.potentialEsfErrorCounter>a.aK)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(n=b)?void 0:n.id)){p.La(8);break}return b.sendCount<a.f_?g.y(p,a.Bh.tR(b.id,a.Gf,!0,l?!1:void 0),12):g.y(p,a.Bh.jz(b.id,a.Gf),8);case 12:a.On.Ri(function(){a.kh.Th()&&a.JB()},a.e_);
case 8:c(e,f),g.za(p)}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var h;return g.I(function(l){if(1==l.j)return void 0===(null==(h=b)?void 0:h.id)?l.La(2):g.y(l,a.Bh.jz(b.id,a.Gf),2);a.kh.Ew&&a.ib&&a.ib("vss_network_hint")&&a.kh.Ew(!0);d(e,f);g.za(l)})};
return b};
kE=function(a,b){a.Q0&&!a.kh.Th()?a.Q0(b):a.handleError(b)};
iE=function(a){return!!a.Gf||a.TG};
Ora=function(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0};
Pra=function(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)};
Rra=function(){if(lE)return lE();var a={};lE=g.OD("LogsDatabaseV2",{yr:(a.LogsRequestsStore={Xm:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&g.vD(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.j.indexNames.contains("newRequest")&&d.j.deleteIndex("newRequest"),g.BD(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&wD(b,"sapisid");c(9)&&wD(b,"SWHealthLog")},
version:9});return lE()};
mE=function(a){return g.HD(Rra(),a)};
Tra=function(a,b){var c,d,e,f;return g.I(function(h){if(1==h.j)return c={startTime:(0,g.uD)(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.y(h,mE(b),2);if(3!=h.j)return d=h.B,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:g.xB("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.y(h,g.zD(d,"LogsRequestsStore",e),3);f=h.B;c.ticks.tc=(0,g.uD)();Sra(c);return h.return(f)})};
Ura=function(a,b){var c,d,e,f,h,l,m;return g.I(function(n){if(1==n.j)return c={startTime:(0,g.uD)(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},g.y(n,mE(b),2);if(3!=n.j)return d=n.B,e=g.xB("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],h=[a,e,(0,g.uD)()],l=IDBKeyRange.bound(f,h),m=void 0,g.y(n,g.xD(d,["LogsRequestsStore"],{mode:"readwrite",Vb:!0},function(p){return g.ED(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:l,direction:"prev"},function(q){q.getValue()&&
(m=q.getValue(),"NEW"===a&&(m.status="QUEUED",q.update(m)))})}),3);
c.ticks.tc=(0,g.uD)();Sra(c);return n.return(m)})};
Vra=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.y(d,mE(b),2);c=d.B;return d.return(g.xD(c,["LogsRequestsStore"],{mode:"readwrite",Vb:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(h){if(h)return h.status="QUEUED",g.yD(f,h).then(function(){return h})})}))})};
Wra=function(a,b,c,d){c=void 0===c?!0:c;var e;return g.I(function(f){if(1==f.j)return g.y(f,mE(b),2);e=f.B;return f.return(g.xD(e,["LogsRequestsStore"],{mode:"readwrite",Vb:!0},function(h){var l=h.objectStore("LogsRequestsStore");return l.get(a).then(function(m){return m?(m.status="NEW",c&&(m.sendCount+=1),void 0!==d&&(m.options.compress=d),g.yD(l,m).then(function(){return m})):g.rD.resolve(void 0)})}))})};
Xra=function(a,b){var c;return g.I(function(d){if(1==d.j)return g.y(d,mE(b),2);c=d.B;return d.return(c.delete("LogsRequestsStore",a))})};
Yra=function(a){var b,c;return g.I(function(d){if(1==d.j)return g.y(d,mE(a),2);b=d.B;c=(0,g.uD)()-2592E6;return g.y(d,g.xD(b,["LogsRequestsStore"],{mode:"readwrite",Vb:!0},function(e){return g.CD(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})};
Zra=function(){g.I(function(a){return g.y(a,Jqa("LogsDatabaseV2"),0)})};
Sra=function(a){g.zB("nwl_csi_killswitch")||vra("networkless_performance",a,{sampleRate:1})};
asa=function(a){return g.HD($ra(),a)};
bsa=function(a){var b,c;g.I(function(d){if(1==d.j)return g.y(d,asa(a),2);b=d.B;c=(0,g.uD)()-2592E6;return g.y(d,g.xD(b,["SWHealthLog"],{mode:"readwrite",Vb:!0},function(e){return g.CD(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})};
csa=function(a){var b;return g.I(function(c){if(1==c.j)return g.y(c,asa(a),2);b=c.B;return g.y(c,b.clear("SWHealthLog"),0)})};
g.nE=function(a,b,c,d,e,f,h){e=void 0===e?"":e;f=void 0===f?!1:f;h=void 0===h?!1:h;if(a)if(c&&!g.hC()){if(a){a=g.Yd(g.In(a));if(a===g.ce.toString()||a.startsWith("data"))a="";else{var l=void 0===l?{}:l;a instanceof g.de?l=a:(a=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.Qjb&&(a=a.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.Pjb&&(a=a.replace(/(\r\n|\n|\r)/g,"<br>")),l.Rjb&&(a=a.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),
l=g.ie(a));a=g.ue(g.Mm(g.he(l).toString()))}g.fc(a)||(l=bf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Ke(l).body.appendChild(l))}}else if(e)toa(a,b,"POST",e,d);else if(g.xB("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d||h)toa(a,b,"GET","",d,void 0,f,h);else{b:{try{var m=new Rka({url:a});if(m.C&&m.B||m.D){var n=El(g.Gl(5,a));var p=!(!n||!n.endsWith("/aclk")||"1"!==Pl(a,"ri"));break b}}catch(q){}p=!1}p?dsa(a)?(b&&b(),l=!0):l=!1:l=!1;l||esa(a,b)}};
dsa=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
esa=function(a,b){var c=new Image,d=""+fsa++;gsa[d]=c;c.onload=c.onerror=function(){b&&gsa[d]&&b();delete gsa[d]};
c.src=a};
hsa=function(a){if("www.googleadservices.com"!==g.Hl(a))return a;var b,c;return"function"===typeof(null==(b=document.featurePolicy)?void 0:b.features)&&(null==(c=document.featurePolicy)?0:c.features().includes("attribution-reporting"))?a+"&nis=6":a+"&nis=5"};
oE=function(){this.j=new Map;this.B=!1};
pE=function(){if(!oE.instance){var a=g.Ta("yt.networkRequestMonitor.instance")||new oE;g.Sa("yt.networkRequestMonitor.instance",a);oE.instance=a}return oE.instance};
qE=function(){isa||(isa=new dD("yt.offline"));return isa};
jsa=function(a){if(g.zB("offline_error_handling")){var b=qE().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);qE().set("errors",b,2592E3,!0)}};
rE=function(){g.Dd.call(this);var a=this;this.B=!1;this.j=Wka();this.j.Qa("networkstatus-online",function(){if(a.B&&g.zB("offline_error_handling")){var b=qE().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new g.UC(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;g.CB(d)}qE().set("errors",{},2592E3,!0)}}})};
ksa=function(){if(!rE.instance){var a=g.Ta("yt.networkStatusManager.instance")||new rE;g.Sa("yt.networkStatusManager.instance",a);rE.instance=a}return rE.instance};
g.sE=function(a){a=void 0===a?{}:a;g.Dd.call(this);var b=this;this.j=this.D=0;this.B=ksa();var c=g.Ta("yt.networkStatusManager.instance.listen").bind(this.B);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){lsa(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){lsa(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),c("networkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")})))};
lsa=function(a,b){a.rateLimit?a.j?(g.uu.Rj(a.D),a.D=g.uu.Ri(function(){a.C!==b&&(a.dispatchEvent(b),a.C=b,a.j=(0,g.uD)())},a.rateLimit-((0,g.uD)()-a.j))):(a.dispatchEvent(b),a.C=b,a.j=(0,g.uD)()):a.dispatchEvent(b)};
tE=function(){var a=jE.call;msa||(msa=new g.sE({qjb:!0,Thb:!0}));a.call(jE,this,{Bh:{b5:Yra,jz:Xra,EW:Ura,Z7:Vra,tR:Wra,set:Tra},kh:msa,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var h;EB(new g.UC(b.message,c,null==d?void 0:null==(h=d.error)?void 0:h.code),void 0,void 0,void 0,!0)}else g.CB(b)},
Ez:EB,sendFn:nsa,now:g.uD,Q0:jsa,On:g.aD(),AQ:"publicytnetworkstatus-online",PP:"publicytnetworkstatus-offline",yH:!0,bH:.1,aK:g.AB("potential_esf_error_limit",10),ib:g.zB,eD:!(g.WC()&&"www.youtube-nocookie.com"!==g.Hl(document.location.toString()))});this.B=new g.Dn;g.zB("networkless_immediately_drop_all_requests")&&Zra();Kqa("LogsDatabaseV2")};
uE=function(){var a=g.Ta("yt.networklessRequestController.instance");a||(a=new tE,g.Sa("yt.networklessRequestController.instance",a),g.zB("networkless_logging")&&g.MD().then(function(b){a.Gf=b;Nra(a);a.B.resolve();a.yH&&Math.random()<=a.bH&&a.Gf&&bsa(a.Gf);g.zB("networkless_immediately_drop_sw_health_store")&&osa(a)}));
return a};
osa=function(a){var b;g.I(function(c){if(!a.Gf)throw b=g.pD("clearSWHealthLogsDb"),b;return c.return(csa(a.Gf).catch(function(d){a.handleError(d)}))})};
nsa=function(a,b,c,d){d=void 0===d?!1:d;b=g.zB("web_fp_via_jspb")?Object.assign({},b):b;g.zB("use_cfr_monitor")&&psa(a,b);if(g.zB("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round((0,g.uD)())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round((0,g.uD)())}c&&0===Object.keys(b).length?g.nE(a):b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),fE(a,b.postBody,b,g.VB,
d)):fE(a,JSON.stringify(b.postParams),b,zoa,d):g.VB(a,b)};
psa=function(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){pE().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){pE().requestComplete(a,!0);d(e,f)}};
g.vE=function(a){this.config_=null;a?this.config_=a:era()&&(this.config_=g.WD())};
g.wE=function(a,b,c,d){function e(p){try{if((void 0===p?0:p)&&d.retry&&!d.networklessOptions.bypassNetworkless)f.method="POST",d.networklessOptions.writeThenSend?uE().writeThenSend(n,f):uE().sendAndWrite(n,f);else if(d.compress){var q=!d.networklessOptions.writeThenSend;if(f.postBody){var r=f.postBody;"string"!==typeof r&&(r=JSON.stringify(f.postBody));fE(n,r,f,g.VB,q)}else fE(n,JSON.stringify(f.postParams),f,zoa,q)}else g.zB("web_all_payloads_via_jspb")?g.VB(n,f):zoa(n,f)}catch(t){if("InvalidAccessError"==
t.name)EB(Error("An extension is blocking network request."));else throw t;}}
!g.xB("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&EB(new g.UC("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new g.UC("innertube xhrclient not ready",b,c,d),g.CB(a),a;var f={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};f.headers["Content-Type"]||(f.headers["Content-Type"]="application/json");c="";var h=a.config_.zX;h&&(c=h);var l=a.config_.AX||!1;h=pra(l,c,d);Object.assign(f.headers,h);(h=f.headers.Authorization)&&!c&&l&&(f.headers["x-origin"]=window.location.origin);b="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;l={alt:"json"};var m=a.config_.OO&&h;m=m&&h.startsWith("Bearer");m||(l.key=a.config_.innertubeApiKey);var n=JB(""+c+b,l);g.Ta("ytNetworklessLoggingInitializationOptions")&&
qsa.isNwlInitialized?Cqa().then(function(p){e(p)}):e(!1)};
g.BE=function(a,b,c){var d=g.xE();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var h=function(){yE[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{g.zE[a]?h():g.QB(h,0)}catch(l){g.CB(l)}},c);
yE[e]=!0;AE[a]||(AE[a]=[]);AE[a].push(e);return e}return 0};
rsa=function(a){var b=g.BE("LOGGED_IN",function(c){a.apply(void 0,arguments);g.CE(b)})};
g.CE=function(a){var b=g.xE();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),g.Zb(a,function(c){b.unsubscribeByKey(c);delete yE[c]}))};
g.DE=function(a,b){var c=g.xE();return c?c.publish.apply(c,arguments):!1};
tsa=function(a){var b=g.xE();if(b)if(b.clear(a),a)ssa(a);else for(var c in AE)ssa(c)};
g.xE=function(){return g.Ra.ytPubsubPubsubInstance};
ssa=function(a){AE[a]&&(a=AE[a],g.Zb(a,function(b){yE[b]&&delete yE[b]}),a.length=0)};
g.xsa=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(usa,""),c=c.replace(vsa,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else wsa(a,b,c)};
wsa=function(a,b,c){c=void 0===c?null:c;var d=ysa(a),e=document.getElementById(d),f=e&&dpa(e),h=e&&!f;f?b&&b():(b&&(f=g.BE(d,b),b=""+g.ab(b),zsa[b]=f),h||(e=Asa(a,d,function(){if(!dpa(e)){var l=e;l&&(l.dataset?l.dataset[cpa()]="true":nga([new Fn(Bsa[0].toLowerCase(),Csa)],l,"data-loaded","true".toString()));g.DE(d);g.QB(g.fb(tsa,d),0)}},c)))};
Asa=function(a,b,c,d){d=void 0===d?null:d;var e=g.kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);g.Pn(e,g.gw(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
ysa=function(a){var b=document.createElement("a");g.Ln(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ye(a)};
FE=function(a){var b=g.Ja.apply(1,arguments);if(!EE(a)||b.some(function(d){return!EE(d)}))throw Error("Only objects may be merged.");
b=g.v(b);for(var c=b.next();!c.done;c=b.next())Dsa(a,c.value);return a};
Dsa=function(a,b){for(var c in b)if(EE(b[c])){if(c in a&&!EE(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Dsa(a[c],b[c])}else if(Esa(b[c])){if(c in a&&!Esa(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Fsa(a[c],b[c])}else a[c]=b[c];return a};
Fsa=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,EE(c)?a.push(Dsa({},c)):Esa(c)?a.push(Fsa([],c)):a.push(c);return a};
EE=function(a){return"object"===typeof a&&!Array.isArray(a)};
Esa=function(a){return"object"===typeof a&&Array.isArray(a)};
GE=function(a){g.J.call(this);this.B=a};
HE=function(a){GE.call(this,!0);this.j=a};
Gsa=function(a,b){g.J.call(this);var c=this;this.C=[];this.N=!1;this.B=0;this.G=this.K=this.D=!1;this.ma=null;var d=(0,g.db)(a,b);this.j=new g.Cu(function(){return d(c.ma)},300);
g.L(this,this.j);this.Y=this.Z=Infinity};
Hsa=function(a,b){if(!b)return!1;for(var c=0;c<b.length;c++){var d=b.item(c);if(d&&a.C.includes(d.identifier))return!0}return!1};
Isa=function(a){for(var b=Array(a),c=0;c<a;c++){for(var d=Date.now(),e=0;e<d%23;e++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(IE)for(c=1,d=0;d<IE.length;d++)b[c%a]=b[c%a]^b[(c-1)%a]/4^IE.charCodeAt(d),c++;return b};
JE=function(a){if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(a),c=new Uint8Array(a);window.crypto.getRandomValues(c);for(var d=0;d<b.length;d++)b[d]=c[d];return b}catch(e){}return Isa(a)};
g.KE=function(a){a=JE(a);for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.Jsa=function(){return g.mr(JE(16),function(a){return(a&15).toString(16)}).join("")};
Ksa=function(){var a={},b=void 0===a.Eaa?!1:a.Eaa;a=void 0===a.L5?!0:a.L5;if(null==g.Ta("_lact",window)){var c=parseInt(g.xB("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;g.Sa("_lact",c,window);g.Sa("_fact",c,window);-1==c&&LE();g.DC(document,"keydown",LE);g.DC(document,"keyup",LE);g.DC(document,"mousedown",LE);g.DC(document,"mouseup",LE);b?g.DC(window,"touchmove",function(){ME("touchmove",200)},{passive:!0}):(g.DC(window,"resize",function(){ME("resize",200)}),a&&g.DC(window,"scroll",function(){ME("scroll",
200)}));
new GC(function(){ME("mouse",100)});
g.DC(document,"touchstart",LE,{passive:!0});g.DC(document,"touchend",LE,{passive:!0})}};
ME=function(a,b){Lsa[a]||(Lsa[a]=!0,g.uu.Ri(function(){LE();Lsa[a]=!1},b))};
LE=function(){null==g.Ta("_lact",window)&&(Ksa(),g.Ta("_lact",window));var a=Date.now();g.Sa("_lact",a,window);-1==g.Ta("_fact",window)&&g.Sa("_fact",a,window);(a=g.Ta("ytglobal.ytUtilActivityCallback_"))&&a()};
NE=function(){var a=g.Ta("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)};
OE=function(a){this.name=a};
PE=function(a){this.key=a};
Msa=function(){var a=this;this.j=new Map;this.B=new Map;this.Jd={Fib:function(){return new Map(a.j)}}};
Nsa=function(a,b){a.j.set(b.cR,b)};
RE=function(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.B.has(b))return a.B.get(b);if(!a.j.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.j.get(b);c.push(b);if(void 0!==d.yS)var e=d.yS;else if(d.Dca)e=d[QE]?Osa(a,d[QE],c):[],e=d.Dca.apply(d,g.oa(e));else if(d.E0){e=d.E0;var f=e[QE]?Osa(a,e[QE],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(g.oa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.qkb||a.B.set(b,e);
return e};
Osa=function(a,b,c){return b?b.map(function(d){return d instanceof PE?RE(a,d.key,c,!0):RE(a,d,c)}):[]};
SE=function(){Psa||(Psa=new Msa);return Psa};
Qsa=function(){var a,b;return"h5vcc"in TE&&(null==(a=TE.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=TE.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in TE&&TE.performance.mark&&TE.performance.measure?2:0};
Rsa=function(a){var b=Qsa();switch(b){case 1:TE.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:TE.performance.mark(a+"-start");break;case 0:break;default:Mn(b,"unknown trace type")}};
Ssa=function(a){var b=Qsa();switch(b){case 1:TE.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";TE.performance.mark(c);TE.performance.measure(a,b,c);break;case 0:break;default:Mn(b,"unknown trace type")}};
Usa=function(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?g.aD():d;this.C=c;this.scheduler=d;this.B=new g.Dn;this.j=a;for(a={Sv:0};a.Sv<this.j.length;a={SE:a.SE,Sv:a.Sv},a.Sv++)a.SE=this.j[a.Sv],c=function(e){return function(){e.SE.fP();b.j[e.Sv].dK=!0;b.j.every(function(f){return!0===f.dK})&&b.B.resolve()}}(a),d=YC(c,Tsa(this,a.SE)),this.j[a.Sv]=Object.assign({},a.SE,{fP:c,
jobId:d})};
Vsa=function(a){var b=Array.from(a.j.keys()).sort(function(d,e){return Tsa(a,a.j[e])-Tsa(a,a.j[d])});
b=g.v(b);for(var c=b.next();!c.done;c=b.next())c=a.j[c.value],void 0===c.jobId||c.dK||(a.scheduler.Rj(c.jobId),YC(c.fP,10))};
Tsa=function(a,b){var c;return null!=(c=b.priority)?c:a.C};
VE=function(a){this.state=a;this.plugins=[];this.C=void 0;this.D={};UE&&Rsa(this.state)};
Xsa=function(a,b){var c=b.filter(function(e){return 10===Wsa(a,e)}),d=b.filter(function(e){return 10!==Wsa(a,e)});
return a.D.mkb?function(){var e=g.Ja.apply(0,arguments);return g.I(function(f){if(1==f.j)return g.y(f,a.hba.apply(a,[c].concat(g.oa(e))),2);a.t_.apply(a,[d].concat(g.oa(e)));g.za(f)})}:function(){var e=g.Ja.apply(0,arguments);
a.jba.apply(a,[c].concat(g.oa(e)));a.t_.apply(a,[d].concat(g.oa(e)))}};
Wsa=function(a,b){var c,d;return null!=(d=null!=(c=a.C)?c:b.priority)?d:0};
Ysa=function(a){UE&&a&&Rsa(a)};
WE=function(a){UE&&a&&Ssa(a)};
$sa=function(a,b,c){Zsa&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())};
XE=function(a){VE.call(this,void 0===a?"none":a);this.j=null;this.C=10;this.transitions=[{from:"none",to:"application_navigating",action:this.G},{from:"application_navigating",to:"none",action:this.K},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]};
bta=function(){ata||(ata=new XE);return ata};
YE=function(){var a=this;this.store={};this.j=0;this.B={};this.Jd={tib:function(){return a.j}}};
dta=function(a,b){var c=cta(b);if(a.B[c])return a.B[c];var d=Object.keys(a.store)||[];if(1>=d.length&&cta(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var h=d[f].split("/");if(ZE(b.auth,h[0])){var l=b.isJspb;ZE(void 0===l?"undefined":l?"true":"false",h[1])&&ZE(b.cttAuthInfo,h[2])&&(l=b.tier,l=void 0===l?"undefined":JSON.stringify(l),ZE(l,h[3])&&e.push(d[f]))}}return a.B[c]=e};
ZE=function(a,b){return void 0===a||"undefined"===a?!0:a===b};
cta=function(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")};
$E=function(){this.D=this.j=this.B=0;this.C=!1};
aF=function(){var a=g.Ta("yt.logging.ims");a||(a=new YE,g.Sa("yt.logging.ims",a));return a};
gta=function(){if(zra()&&!eta){var a=function(c){c=c.data;if("serializedGelBatch"===c.op){var d=bF.get(c.key);d&&(fta(c.serializedBatch,d.client,d.resolve,d.networklessOptions,d.isIsolated,d.useVSSEndpoint,d.dangerousLogToVisitorSession,d.requestsOutstanding),bF.delete(c.key))}},b=cE();
b&&(b.addEventListener("message",a),b.onerror=function(){bF.clear()});
eta=!0}};
mta=function(a,b){if("log_event"===a.endpoint){cF(a);var c=dF(a),d=hta(a.payload)||"",e=ita(d),f=200;if(e){if(!1===e.enabled&&!g.zB("web_payload_policy_disabled_killswitch"))return;f=jta(e.tier);if(400===f){kta(a,b);return}}eF[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};aF().storePayload(e,a.payload);lta(b,c,!1,e,fF(d))}};
ota=function(a,b,c){if("log_event"===b.endpoint){cF(void 0,b);var d=dF(b,!0),e=ita(a),f=200;if(e){if(!1===e.enabled&&!g.zB("web_payload_policy_disabled_killswitch"))return;f=jta(e.tier);if(400===f){nta(a,b,c);return}}eF[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};aF().storePayload(e,b.payload.toJSON());lta(c,d,!0,e,fF(a))}};
lta=function(a,b,c,d,e){function f(){pta({writeThenSend:!0},g.zB("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(gF=new a);a=g.AB("tvhtml5_logging_max_batch_ads_fork")||g.AB("web_logging_max_batch")||100;var h=(0,g.uD)(),l=qta(c,d.tier),m=l.D;e&&(l.C=!0);e=0;d&&(e=aF().getSequenceCount(d));1E3<=e?f():e>=a?rta||(rta=sta(function(){f();rta=void 0},0)):10<=h-m&&(tta(c,d.tier),l.D=h)};
kta=function(a,b){if("log_event"===a.endpoint){cF(a);var c=dF(a),d=new Map;d.set(c,[a.payload]);var e=hta(a.payload)||"";b&&(gF=new b);return new g.Uf(function(f,h){gF&&gF.isReady()?uta(d,gF,f,h,{bypassNetworkless:!0},!0,fF(e)):f()})}};
nta=function(a,b,c){if("log_event"===b.endpoint){cF(void 0,b);var d=dF(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(gF=new c);return new g.Uf(function(f){gF&&gF.isReady()?vta(e,gF,f,{bypassNetworkless:!0},!0,fF(a)):f()})}};
dF=function(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new uB;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Fj(d,2,hF,Bi(c.playlistId));iF[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),jF[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c};
pta=function(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new g.Uf(function(e,f){var h=qta(c,d),l=h.C;h.C=!1;wta(h.B);wta(h.j);h.j=0;gF&&gF.isReady()?void 0===d&&g.zB("enable_web_tiered_gel")?xta(e,f,a,b,c,300,l):xta(e,f,a,b,c,d,l):(tta(c,d),e())})};
xta=function(a,b,c,d,e,f,h){var l=gF;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;h=void 0===h?!1:h;var m=new Map,n=new Map,p={isJspb:e,cttAuthInfo:d,tier:f},q={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=g.zB("enable_web_tiered_gel")?aF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):aF().extractMatchingEntries(q),m.set(d,b),vta(m,l,a,c,!1,h)):(m=g.zB("enable_web_tiered_gel")?aF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):aF().extractMatchingEntries(q),n.set(d,m),
uta(n,l,a,b,c,!1,h));else if(e){b=g.v(Object.keys(eF));for(d=b.next();!d.done;d=b.next())n=d.value,f=g.zB("enable_web_tiered_gel")?aF().smartExtractMatchingEntries({keys:[p,q],sizeLimit:1E3}):aF().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),0<f.length&&m.set(n,f),(g.zB("web_fp_via_jspb_and_json")&&c.writeThenSend||!g.zB("web_fp_via_jspb_and_json"))&&delete eF[n];vta(m,l,a,c,!1,h)}else{m=g.v(Object.keys(eF));for(d=m.next();!d.done;d=m.next())p=d.value,q=g.zB("enable_web_tiered_gel")?aF().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:p,tier:f},{isJspb:!1,cttAuthInfo:p}],sizeLimit:1E3}):aF().extractMatchingEntries({isJspb:!1,cttAuthInfo:p}),0<q.length&&n.set(p,q),(g.zB("web_fp_via_jspb_and_json")&&c.writeThenSend||!g.zB("web_fp_via_jspb_and_json"))&&delete eF[p];uta(n,l,a,b,c,!1,h)}};
tta=function(a,b){function c(){pta({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=qta(a,b),e=d===yta||d===zta?5E3:Ata;g.zB("web_gel_timeout_cap")&&!d.j&&(e=sta(function(){c()},e),d.j=e);
wta(d.B);e=g.xB("LOGGING_BATCH_TIMEOUT",g.AB("web_gel_debounce_ms",1E4));g.zB("shorten_initial_gel_batch_timeout")&&kF&&(e=Bta);e=sta(function(){0<g.AB("gel_min_batch_size")?aF().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Cta&&c():c()},e);
d.B=e};
uta=function(a,b,c,d,e,f,h){e=void 0===e?{}:e;var l=Math.round((0,g.uD)()),m=a.size,n=Dta(h);a=g.v(a);var p=a.next();for(h={};!p.done;h={qJ:h.qJ,batchRequest:h.batchRequest,dangerousLogToVisitorSession:h.dangerousLogToVisitorSession,GJ:h.GJ,xJ:h.xJ},p=a.next()){var q=g.v(p.value);p=q.next().value;q=q.next().value;h.batchRequest=g.qd({context:g.lra(b.config_||g.WD())});if(!g.Xa(q)&&!g.zB("throw_err_when_logevent_malformed_killswitch")){d();break}h.batchRequest.events=q;(q=jF[p])&&Eta(h.batchRequest,
p,q);delete jF[p];h.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===p;Fta(h.batchRequest,l,h.dangerousLogToVisitorSession);Gta(e);h.GJ=function(r){g.zB("start_client_gcf")&&g.uu.Ri(function(){return g.I(function(t){return g.y(t,Hta(r),0)})});
m--;m||c()};
h.qJ=0;h.xJ=function(r){return function(){r.qJ++;if(e.bypassNetworkless&&1===r.qJ)try{g.wE(b,n,r.batchRequest,Ita({writeThenSend:!0},r.dangerousLogToVisitorSession,r.GJ,r.xJ,f)),kF=!1}catch(t){g.CB(t),d()}m--;m||c()}}(h);
try{g.wE(b,n,h.batchRequest,Ita(e,h.dangerousLogToVisitorSession,h.GJ,h.xJ,f)),kF=!1}catch(r){g.CB(r),d()}}};
vta=function(a,b,c,d,e,f){d=void 0===d?{}:d;var h=Math.round((0,g.uD)()),l={value:a.size},m=new Map([].concat(g.oa(a)));m=g.v(m);for(var n=m.next();!n.done;n=m.next()){var p=g.v(n.value).next().value,q=a.get(p);n=new Nna;var r=b.config_||g.WD(),t=new Wx,u=new g.Qx;N(u,1,r.NO);N(u,2,r.MO);Q(u,16,r.yX);N(u,17,r.innertubeContextClientVersion);if(r.BI){var x=r.BI,B=new Kx;x.coldConfigData&&N(B,1,x.coldConfigData);x.appInstallData&&N(B,6,x.appInstallData);x.coldHashData&&N(B,3,x.coldHashData);x.hotHashData&&
B.Mr(x.hotHashData);Kj(u,Kx,62,B)}(x=g.Ra.devicePixelRatio)&&1!=x&&xk(u,65,x);x=Rna();""!==x&&N(u,54,x);x=Sna();if(0<x.length){B=new Sx;for(var F=0;F<x.length;F++){var G=new Rx;N(G,1,x[F].key);Fj(G,2,Jta,Bi(x[F].value));Nj(B,15,Rx,G)}Kj(t,Sx,5,B)}fra(r,u);gra(t);hra(u);ira(r,u);jra(u);g.zB("start_client_gcf")&&kra(u);g.xB("DELEGATED_SESSION_ID")&&!g.zB("pageid_as_header_web")&&(r=new Vx,N(r,3,g.xB("DELEGATED_SESSION_ID")));!g.zB("fill_delegate_context_in_gel_killswitch")&&(r=g.xB("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(x=g.Jj(t,Vx,3)||new Vx,r=N(x,18,r),Kj(t,Vx,3,r));r=u;x=g.v(Object.entries(HB(g.xB("DEVICE",""))));for(B=x.next();!B.done;B=x.next())F=g.v(B.value),B=F.next().value,F=F.next().value,"cbrand"===B?N(r,12,F):"cmodel"===B?N(r,13,F):"cbr"===B?N(r,87,F):"cbrver"===B?N(r,88,F):"cos"===B?N(r,18,F):"cosver"===B?N(r,19,F):"cplatform"===B&&Q(r,42,zpa(F));t.ix(u);Kj(n,Wx,1,t);if(u=iF[p])a:{if(u.Fe())t=1;else if(u.getPlaylistId())t=2;else break a;Kj(n,uB,4,u);u=g.Jj(n,Wx,1)||new Wx;r=g.Jj(u,Vx,3)||new Vx;x=new Ux;
x.setToken(p);Q(x,1,t);Nj(r,12,Ux,x);Kj(u,Vx,3,r)}delete iF[p];p="visitorOnlyApprovedKey"===p;Kta()||Zj(n,2,h);!p&&(t=g.xB("EVENT_ID"))&&(u=Lta(),r=new Mna,N(r,1,t),Zj(r,2,u),Kj(n,Mna,5,r));Gta(d);if(g.zB("jspb_serialize_with_worker")&&(t=cE())&&d.writeThenSend){bF.set(Mta,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:p,requestsOutstanding:l});t.postMessage({op:"gelBatchToSerialize",batchRequest:n.toJSON(),clientEvents:q,key:Mta});Mta++;break}if(q){t=
[];for(u=0;u<q.length;u++)try{t.push(new tB(q[u]))}catch(H){g.CB(new g.UC("Transport failed to deserialize "+String(q[u])))}q=t}else q=[];q=g.v(q);for(t=q.next();!t.done;t=q.next())Nj(n,3,tB,t.value);q={startTime:(0,g.uD)(),ticks:{},infos:{}};n=n.Ij();q.ticks.geljspc=(0,g.uD)();g.zB("log_jspb_serialize_latency")&&vra("gel_jspb_serialize",q,{sampleRate:.1});fta(n,b,c,d,e,f,p,l)}};
fta=function(a,b,c,d,e,f,h,l){d=void 0===d?{}:d;l=void 0===l?{value:0}:l;f=Dta(f);d=Ita(d,h,function(m){g.zB("start_client_gcf")&&g.uu.Ri(function(){return g.I(function(n){return g.y(n,Hta(m),0)})});
l.value--;l.value||c()},function(){l.value--;
l.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;g.wE(b,f,"",d);kF=!1};
Gta=function(a){g.zB("always_send_and_write")&&(a.writeThenSend=!1)};
Ita=function(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Hhb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:g.zB("compress_gel")||g.zB("compress_gel_lr")};Kta()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round((0,g.uD)())));return a};
Fta=function(a,b,c){Kta()||(a.requestTimeMs=String(b));g.zB("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=g.xB("EVENT_ID"))&&(c=Lta(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})};
Lta=function(){var a=g.xB("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Nta/2));a++;a>Nta&&(a=1);wB("BATCH_CLIENT_COUNTER",a);return a};
Eta=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
cF=function(a,b){if(!g.Ta("yt.logging.transport.enableScrapingForTest")){var c=Qna("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Ota=[],g.Sa("yt.logging.transport.enableScrapingForTest",!0),g.Sa("yt.logging.transport.scrapedPayloadsForTesting",Ota),g.Sa("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),g.Sa("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
g.Sa("yt.logging.transport.scrapeClientEvent",!0);else return}c=g.Ta("yt.logging.transport.scrapedPayloadsForTesting");var d=g.Ta("yt.logging.transport.payloadToScrape");b&&(b=b.payload,(b=g.Ta("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b)())&&c.push(b));b=g.Ta("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}g.Sa("yt.logging.transport.scrapedPayloadsForTesting",
c)};
Kta=function(){return g.zB("use_request_time_ms_header")||g.zB("lr_use_request_time_ms_header")};
sta=function(a,b){return g.zB("transport_use_scheduler")?g.zB("logging_avoid_blocking_during_navigation")||g.zB("lr_logging_avoid_blocking_during_navigation")?g.ZC(0,function(){if("none"===bta().currentState)a();else{var c={};bta().install((c.none={callback:a},c))}},b):YC(a,0,b):g.QB(a,b)};
wta=function(a){g.zB("transport_use_scheduler")?g.uu.Rj(a):g.SB(a)};
Hta=function(a){var b,c,d,e,f,h,l,m,n,p;return g.I(function(q){return 1==q.j?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=g.S(d,Pta),h=null==(f=d)?void 0:f.hotHashData,l=g.S(d,Qta),n=null==(m=d)?void 0:m.coldHashData,(p=SE().resolve(new PE(UD)))?h?e?g.y(q,bra(p,h,e),2):g.y(q,bra(p,h),2):q.La(2):q.return()):n?l?g.y(q,cra(p,n,l),0):g.y(q,cra(p,n),0):q.La(0)})};
qta=function(a,b){b=void 0===b?200:b;return a?300===b?yta:Rta:300===b?zta:Sta};
ita=function(a){if(g.zB("enable_web_tiered_gel")){a=Tta[a||""];var b,c,d,e=null==SE().resolve(new PE(UD))?void 0:null==(b=VD())?void 0:null==(c=b.loggingHotConfig)?void 0:null==(d=c.eventLoggingConfig)?void 0:d.payloadPolicies;if(e)for(b=0;b<e.length;b++)if(e[b].payloadNumber===a)return e[b]}};
hta=function(a){a=Object.keys(a);a=g.v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Tta[b])return b};
jta=function(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}};
fF=function(a){return"gelDebuggingEvent"===a};
Dta=function(a){return(void 0===a?0:a)&&g.zB("vss_through_gel_video_stats")?"video_stats":"log_event"};
mF=function(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||(0,g.uD)());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=NE();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!g.zB("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Uta(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete lF[d.sequenceGroup]);(d.sendIsolatedPayload?kta:mta)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)};
Vta=function(a){pta(void 0,void 0,void 0===a?!1:a)};
Uta=function(a){lF[a]=a in lF?lF[a]+1:0;return lF[a]};
Zta=function(a,b){Wta||(Wta=!0);Xta=a;nF=b;Yta=!1};
g.fD=function(a,b,c){c=void 0===c?{}:c;var d=$ta;g.xB("ytLoggingEventsDefaultDisabled",!1)&&$ta===g.vE&&(d=null);if(g.zB("web_all_payloads_via_jspb"))if(c.timestamp||(c.lact=NE(),c.timestamp=(0,g.uD)()),Xta&&nF){var e=Xta[a];if(e){e=e(aua(b));var f=e[1];(e[0]||!g.zB("jspb_translator_return_completion"))&&f&&nF[a]?(nF[a](f,c,d||void 0),bua()):(EB(new g.UC("Unable to call logFn for payload",a)),mF(a,b,d,c))}else{if(!g.zB("web_translate_player_logs"))EB(new g.UC("Unable to translate payload to JSPB",
a));else if(!1===Yta){var h=!1;e=ura("app_received_payload",function(){h=!0});
$D("player_pass_json_gel_to_app",{payloadName:a,payload:b,options:c});if(h)return;tra(e);ura("app_has_initialized",function(){$D("player_pass_json_gel_to_app",{payloadName:a,payload:b,options:c})})}mF(a,b,d,c)}}else cua.push({payloadName:a,
payload:b,options:c});else mF(a,b,d,c)};
bua=function(a){a=void 0===a?!1:a;var b=cua;cua=[];if(b){b=g.v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,a?mF(c.payloadName,c.payload,$ta,c.options):g.fD(c.payloadName,c.payload,c.options)}};
aua=function(a){if(!g.zB("jspb_convert_payloads_to_lower_camel")||!g.Za(a))return a;for(var b=Object.keys(a),c=0;c<b.length;c++){var d=dua(b[c]);b[c]!==d&&(a[d]=a[b[c]],delete a[b[c]]);if("object"===typeof a[d]&&!g.Xa(a[d]))a[d]=aua(a[d]);else if(g.Xa(a[d])){for(var e=a[d],f=[],h=0;h<e.length;h++)f.push(aua(e[h]));a[d]=f}}return a};
dua=function(a){return a.includes("_")?a.toLowerCase().replace(/([_][a-z])/g,function(b){return b.toUpperCase().replace("_","")}):a};
oF=function(a,b,c,d){d=void 0===d?{}:d;var e=Math.round(d.timestamp||(0,g.uD)());Zj(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Lna;if(d.lact)Zj(e,1,isFinite(d.lact)?d.lact:-1);else if(d.timestamp)Zj(e,1,-1);else{var f=NE();Zj(e,1,isFinite(f)?f:-1)}if(d.sequenceGroup&&!g.zB("web_gel_sequence_info_killswitch")){f=d.sequenceGroup;var h=Uta(f),l=new Kna;Zj(l,2,h);N(l,1,f);Kj(e,Kna,3,l);d.endOfSequence&&delete eua[d.sequenceGroup]}Kj(b,Lna,33,e);(d.sendIsolatedPayload?nta:ota)(a,{endpoint:"log_event",payload:b,
cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)};
pF=function(a,b,c){c=void 0===c?{}:c;var d=!1;g.xB("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);oF(a,b,d?null:g.vE,c)};
fua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,cB,72,qF,a);c?oF("visualElementShown",d,c,b):pF("visualElementShown",d,b)};
gua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,bB,73,qF,a);c?oF("visualElementHidden",d,c,b):pF("visualElementHidden",d,b)};
hua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,aB,78,qF,a);c?oF("visualElementGestured",d,c,b):pF("visualElementGestured",d,b)};
iua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,dB,208,qF,a);c?oF("visualElementStateChanged",d,c,b):pF("visualElementStateChanged",d,b)};
jua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,ZA,156,qF,a);c?oF("screenCreated",d,c,b):pF("screenCreated",d,b)};
kua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,XA,202,qF,a);c?oF("playbackAssociated",d,c,b):pF("playbackAssociated",d,b)};
lua=function(a,b,c){var d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(d,$A,215,qF,a);c?oF("visualElementAttached",d,c,b):pF("visualElementAttached",d,b)};
rF=function(a){this.j=a};
g.uF=function(a){return new rF({trackingParams:a})};
nua=function(a){var b=mua++;return new rF({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0,loggingDirectives:void 0})};
oua=function(a){return g.xB("client-screen-nonce-store",{})[void 0===a?0:a]};
pua=function(a,b){b=void 0===b?0:b;var c=g.xB("client-screen-nonce-store");c||(c={},wB("client-screen-nonce-store",c));c[b]=a};
qua=function(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
rua=function(a){return g.xB(qua(void 0===a?0:a))};
g.vF=function(a){return(a=rua(void 0===a?0:a))?new rF({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null};
sua=function(){var a=g.xB("csn-to-ctt-auth-info");a||(a={},wB("csn-to-ctt-auth-info",a));return a};
tua=function(){return Object.values(g.xB("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})};
g.wF=function(a){a=oua(void 0===a?0:a);if(!a&&!g.xB("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null};
vua=function(a){for(var b=g.v(Object.values(uua)),c=b.next();!c.done;c=b.next())if(g.wF(c.value)===a)return!0;return!1};
wua=function(a,b,c){var d=sua();(c=g.wF(c))&&delete d[c];b&&(d[a]=b)};
xF=function(a){return sua()[a]};
yua=function(a,b,c,d){c=void 0===c?0:c;if(a!==oua(c)||b!==g.xB(qua(c)))if(wua(a,d,c),pua(a,c),wB(qua(c),b),b=function(){setTimeout(function(){if(a)if(g.zB("web_time_via_jspb")){var e=new kna;N(e,1,xua);N(e,2,a);var f=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(f,kna,111,qF,e);pF("foregroundHeartbeatScreenAssociated",f)}else g.fD("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xua,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()};
Aua=function(a,b){var c=void 0===c?!0:c;var d=g.xB("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Hl(window.location.href);e&&d.push(e);e=g.Hl(a);if(g.Bb(d,e)||!e&&ec(a,"/"))if(d=document.createElement("a"),g.Ln(d,a),a=d.href)if(a=Il(a),a=dfa(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.wF()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&zua(a,b,f)}else zua(a,b)};
zua=function(a,b,c){a=Bua(a);b=b?g.Ml(b):"";c=c||5;Poa()&&g.dC(a,b,c)};
Bua=function(a){for(var b=g.v(Cua),c=b.next();!c.done;c=b.next())a=wm(a,c.value);return"ST-"+ye(a).toString(36)};
Dua=function(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")};
Eua=function(){this.Gs=[];this.xr=[]};
Iua=function(){if(!Fua){var a=Fua=new Eua;a.xr.length=0;a.Gs.length=0;Gua(a,Hua)}return Fua};
Gua=function(a,b){b.xr&&a.xr.push.apply(a.xr,b.xr);b.Gs&&a.Gs.push.apply(a.Gs,b.Gs)};
Kua=function(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Jua(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Jua(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Jua(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)};
Jua=function(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity};
Mua=function(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Lua(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var h=a[e],l=b,m=c;f="string"!==typeof h||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(h=Kua(atob(h.replace(/-/g,"+").replace(/_/g,"/"))))?Lua(f+".ve",h,l,m):0;d+=f;d+=Lua(e,a[e],b,c);if(500<d)break}}else c[b]=yF(a),d+=c[b].length;else c[b]=yF(a),d+=c[b].length;return d};
Lua=function(a,b,c,d){c+="."+a;a=yF(b);d[c]=a;return c.length+a.length};
yF=function(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}};
Ppa=function(a){g.zF(a)};
g.AF=function(a){g.zF(a,"WARNING")};
g.zF=function(a,b){var c=void 0===c?{}:c;c.name=g.xB("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.xB("INNERTUBE_CONTEXT_CLIENT_VERSION");b=void 0===b?"ERROR":b;var d=!1;b=void 0===b?"ERROR":b;d=void 0===d?!1:d;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(g.zB("console_log_js_exceptions")){var e=[];e.push("Name: "+a.name);e.push("Message: "+a.message);a.hasOwnProperty("params")&&e.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&e.push("Error args: "+JSON.stringify(a.args));
e.push("File name: "+a.fileName);e.push("Stacktrace: "+a.stack);window.console.log(e.join("\n"),a)}if(!(5<=Nua)){e=Oua;var f=Caa(a),h=f.message||"Unknown Error",l=f.name||"UnknownError",m=f.stack||a.B||"Not available";if(m.startsWith(l+": "+h)){var n=m.split("\n");n.shift();m=n.join("\n")}n=f.lineNumber||"Not available";f=f.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var q=0;q<a.args.length&&!(p=Mua(a.args[q],"params."+q,c,p),500<=p);q++);else if(a.hasOwnProperty("params")&&
a.params){var r=a.params;if("object"===typeof a.params)for(q in r){if(r[q]){var t="params."+q,u=yF(r[q]);c[t]=u;p+=t.length+u.length;if(500<p)break}}else c.params=yF(r)}if(e.length)for(q=0;q<e.length&&!(p=Mua(e[q],"params.context."+q,c,p),500<=p);q++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:h,name:l,lineNumber:n,fileName:f,stack:m,params:c,sampleWeight:1};e=Number(a.columnNumber);isNaN(e)||(c.lineNumber=c.lineNumber+":"+e);if("IGNORED"===a.level)a=
0;else a:{a=Iua();e=g.v(a.xr);for(h=e.next();!h.done;h=e.next())if(h=h.value,c.message&&c.message.match(h.rA)){a=h.weight;break a}a=g.v(a.Gs);for(e=a.next();!e.done;e=a.next())if(e=e.value,e.callback(c)){a=e.weight;break a}a=1}c.sampleWeight=a;a=g.v(Pua);for(e=a.next();!e.done;e=a.next())if(e=e.value,e.TJ[c.name])for(l=g.v(e.TJ[c.name]),h=l.next();!h.done;h=l.next())if(q=h.value,h=c.message.match(q.Fj)){c.params["params.error.original"]=h[0];l=q.groups;q={};for(n=0;n<l.length;n++)q[l[n]]=h[n+1],c.params["params.error."+
l[n]]=h[n+1];c.message=e.zP(q);break}c.params||(c.params={});a=Iua();c.params["params.errorServiceSignature"]="msg="+a.xr.length+"&cb="+a.Gs.length;c.params["params.serviceWorker"]="false";g.Ra.document&&g.Ra.document.querySelectorAll&&(c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Qd("sample").constructor!==g.Od&&(c.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(0!==c.sampleWeight&&!Qua.has(c.message)){if(d&&
g.zB("web_enable_error_204"))Rua(void 0===b?"ERROR":b,c);else{b=void 0===b?"ERROR":b;"ERROR"===b?(BF.oa("handleError",c),g.zB("record_app_crashed_web")&&0===Sua&&1===c.sampleWeight&&(Sua++,g.zB("errors_via_jspb")?(d=new dA,d=Q(d,1,1),g.zB("report_client_error_with_app_crash_ks")||(a=new cA,e=new Mz,h=new Lz,l=new Kz,l=N(l,1,c.message),h=Kj(h,Kz,3,l),e=Kj(e,Lz,5,h),a=Kj(a,Mz,9,e),Kj(d,cA,4,a)),a=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB,Lj(a,dA,20,qF,d),pF("appCrashed",a)):(d={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},
g.zB("report_client_error_with_app_crash_ks")||(d.systemHealth={crashData:{clientError:{logMessage:{message:c.message}}}}),g.fD("appCrashed",d))),Tua++):"WARNING"===b&&BF.oa("handleWarning",c);if(g.zB("kevlar_gel_error_routing"))a:{d=b;if(g.zB("errors_via_jspb")){if(Uua())a=void 0;else{h=new Bz;N(h,1,c.stack);c.fileName&&N(h,4,c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||
(Xj(h,2,Number(a[0])),Xj(h,3,Number(a[1]))):Xj(h,2,Number(a[0])));a=new Kz;N(a,1,c.message);N(a,3,c.name);Xj(a,6,c.sampleWeight);"ERROR"===d?Q(a,2,2):"WARNING"===d?Q(a,2,1):Q(a,2,0);e=new Jz;Wj(e,1,!0);Lj(e,Bz,3,CF,h);h=new zz;N(h,3,window.location.href);l=g.xB("FEXP_EXPERIMENTS",[]);for(q=0;q<l.length;q++)h.B(l[q]);l=g.xB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!yB("web_disable_gel_stp_ecatcher_killswitch")&&l)for(q=g.v(Object.keys(l)),n=q.next();!n.done;n=q.next())n=n.value,f=new hz,N(f,1,
n),N(f,2,String(l[n])),h.j(f);if(l=c.params)for(q=g.v(Object.keys(l)),n=q.next();!n.done;n=q.next())n=n.value,f=new hz,N(f,1,"client."+n),N(f,2,String(l[n])),h.j(f);q=g.xB("SERVER_NAME");l=g.xB("SERVER_VERSION");q&&l&&(n=new hz,N(n,1,"server.name"),N(n,2,q),h.j(n),q=new hz,N(q,1,"server.version"),N(q,2,l),h.j(q));l=new Lz;Kj(l,zz,1,h);Kj(l,Jz,2,e);Kj(l,Kz,3,a);a=l}if(!a)break a;e=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB;Lj(e,Lz,163,qF,a);pF("clientError",e)}else{a=void 0;a=void 0===a?
{}:a;if(Uua())a=void 0;else{h={stackTrace:c.stack};c.fileName&&(h.filename=c.fileName);e=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==e.length&&(1!==e.length||isNaN(Number(e[0]))?2!==e.length||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(h.lineNumber=Number(e[0]),h.columnNumber=Number(e[1])):h.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===d?e.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(e.level=
"ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};a.pageUrl=window.location.href;a.kvPairs=[];g.xB("FEXP_EXPERIMENTS")&&(a.experimentIds=g.xB("FEXP_EXPERIMENTS"));q=g.xB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!yB("web_disable_gel_stp_ecatcher_killswitch")&&q)for(n=g.v(Object.keys(q)),l=n.next();!l.done;l=n.next())l=l.value,a.kvPairs.push({key:l,value:String(q[l])});if(q=c.params)for(n=g.v(Object.keys(q)),l=n.next();!l.done;l=n.next())l=l.value,a.kvPairs.push({key:"client."+l,value:String(q[l])});
l=g.xB("SERVER_NAME");q=g.xB("SERVER_VERSION");l&&q&&(a.kvPairs.push({key:"server.name",value:l}),a.kvPairs.push({key:"server.version",value:q}));a={errorMetadata:a,stackTrace:h,logMessage:e}}if(!a)break a;g.fD("clientError",a)}if("ERROR"===d||g.zB("errors_flush_gel_always_killswitch"))b:{if(g.zB("web_fp_via_jspb")&&(bua(!0),Vta(!0),!g.zB("web_fp_via_jspb_and_json")))break b;Vta()}}g.zB("suppress_error_204_logging")||Rua(b,c)}try{Qua.add(c.message)}catch(x){}Nua++}}}};
Uua=function(){for(var a=g.v(Vua),b=a.next();!b.done;b=a.next())if(g.fC(b.value.toLowerCase()))return!0;return!1};
Rua=function(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:g.xB("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=g.v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=g.xB("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=
g.v(Object.keys(c)),d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=g.xB("SERVER_NAME");b=g.xB("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}g.VB(g.xB("ECATCHER_REPORT_HOST","")+"/error_204",a)};
Wua=function(a){var b=g.Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,g.oa(b))};
g.DF=function(a,b,c){void 0===c?delete a[b.name]:a[b.name]=c};
Xua=function(a){a=void 0===a||a?JE(16):Isa(16);for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
Yua=function(a){for(var b=0,c=0;c<a.length;c++)b=31*b+a.charCodeAt(c),c<a.length-1&&(b%=Math.pow(2,47));return b%1E5};
Zua=function(a){YD.call(this,1,arguments);this.csn=a};
eva=function(a,b,c,d,e,f,h,l){function m(){g.AF(new g.UC("newScreen() parent element does not have a VE - rootVe",b))}
var n=$ua(),p=new rF({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=EF({},n);e&&(f.cttAuthInfo=e);if(g.zB("il_via_jspb")){e=una((new ZA).j(n),p.getAsJspb());c&&c.visualElement?(p=new sna,c.clientScreenNonce&&N(p,2,c.clientScreenNonce),tna(p,c.visualElement.getAsJspb()),h&&Q(p,4,ava[h]),Kj(e,sna,5,p)):c&&m();d&&N(e,3,d);if(g.zB("expectation_logging")&&l&&l.screenCreatedLoggingExpectations){c=new Hx;l=g.v(l.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=l.next();!d.done;d=l.next())d=
d.value,d.screenVeType&&(d=mma(new Fx,d.screenVeType),c.j(d));Kj(e,Hx,7,c)}jua(e,f,a)}else e={csn:n,pageVe:p.getAsJson()},g.zB("expectation_logging")&&l&&l.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=l.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},h&&(e.implicitGesture.gestureType=h)):c&&m(),d&&(e.cloneCsn=d),a?mF("screenCreated",e,a,f):g.fD("screenCreated",e,f);$D(bva,new Zua(n));
FF.clear();cva.clear();dva.clear();return n};
g.GF=function(a,b,c,d,e){g.fva(a,b,c,[d],void 0===e?!1:e)};
g.fva=function(a,b,c,d,e){e=void 0===e?!1:e;for(var f=EF({cttAuthInfo:xF(b)||void 0},b),h=g.v(d),l=h.next();!l.done;l=h.next()){l=l.value;var m=l.getAsJson();(g.id(m)||!m.trackingParams&&!m.veType)&&g.AF(Error("Child VE logged with no data"));if(g.zB("no_client_ve_attach_unless_shown")){var n=HF(l,b);if(m.veType&&!cva.has(n)&&!dva.has(n)&&!e){FF.set(n,[a,b,c,l]);return}l=HF(c,b);FF.has(l)?gva(c,b):dva.set(l,!0)}}d=d.filter(function(q){q.csn!==b?(q.csn=b,q=!0):q=!1;return q});
if(g.zB("il_via_jspb")){var p=vna((new $A).j(b),c.getAsJspb());g.mr(d,function(q){q=q.getAsJspb();Nj(p,3,vA,q)});
"UNDEFINED_CSN"===b?IF("visualElementAttached",f,void 0,p):lua(p,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:g.mr(d,function(q){return q.getAsJson()})},"UNDEFINED_CSN"===b?IF("visualElementAttached",f,c):a?mF("visualElementAttached",c,a,f):g.fD("visualElementAttached",c,f)};
iva=function(a,b,c,d,e,f){hva(c,b);d=EF({cttAuthInfo:xF(b)||void 0},b);g.zB("il_via_jspb")?(e=(new cB).j(b),c=c.getAsJspb(),c=Kj(e,vA,2,c),c=Q(c,4,1),f&&Kj(c,YA,3,f),"UNDEFINED_CSN"===b?IF("visualElementShown",d,void 0,c):fua(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?IF("visualElementShown",d,f):a?mF("visualElementShown",f,a,d):g.fD("visualElementShown",f,d))};
jva=function(a,b,c,d){var e=(d=void 0===d?!1:d)?16:8,f=EF({cttAuthInfo:xF(b)||void 0,endOfSequence:d},b);g.zB("il_via_jspb")?(e=(new bB).j(b),c=c.getAsJspb(),c=Kj(e,vA,2,c),Q(c,4,d?16:8),"UNDEFINED_CSN"===b?IF("visualElementHidden",f,void 0,c):gua(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?IF("visualElementHidden",f,d):a?mF("visualElementHidden",d,a,f):g.fD("visualElementHidden",d,f))};
lva=function(a,b,c,d,e){kva(a,b,c,d,e)};
kva=function(a,b,c,d,e){var f=void 0;hva(c,b);f=f||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";var h=EF({cttAuthInfo:xF(b)||void 0},b);g.zB("il_via_jspb")?(d=(new aB).j(b),c=c.getAsJspb(),c=Kj(d,vA,2,c),Q(c,4,ava[f]),e&&Kj(c,YA,3,e),"UNDEFINED_CSN"===b?IF("visualElementGestured",h,void 0,c):hua(c,h,a)):(e={csn:b,ve:c.getAsJson(),gestureType:f},d&&(e.clientData=d),"UNDEFINED_CSN"===b?IF("visualElementGestured",h,e):a?mF("visualElementGestured",e,a,h):g.fD("visualElementGestured",e,h))};
mva=function(){var a;g.zB("enable_web_96_bit_csn")?a=Xua():g.zB("enable_web_96_bit_csn_no_crypto")?a=Xua(!1):a=g.qg(g.pg(Math.random()+""),3);return a};
IF=function(a,b,c,d){JF.push({payloadName:a,payload:c,Kt:d,options:b});nva||(nva=ura(bva,ova))};
ova=function(a){if(JF){for(var b=g.v(JF),c=b.next();!c.done;c=b.next())if(c=c.value,g.zB("il_via_jspb")&&c.Kt)switch(c.Kt.j(a.csn),c.payloadName){case "screenCreated":jua(c.Kt,c.options);break;case "visualElementAttached":lua(c.Kt,c.options);break;case "visualElementShown":fua(c.Kt,c.options);break;case "visualElementHidden":gua(c.Kt,c.options);break;case "visualElementGestured":hua(c.Kt,c.options);break;case "visualElementStateChanged":iua(c.Kt,c.options);break;default:g.AF(new g.UC("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,g.fD(c.payloadName,c.payload,c.options));JF.length=0}nva=0};
HF=function(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b};
hva=function(a,b){if(g.zB("no_client_ve_attach_unless_shown")){var c=HF(a,b);cva.set(c,!0);gva(a,b)}};
gva=function(a,b){a=HF(a,b);FF.has(a)&&(b=FF.get(a)||[],g.GF(b[0],b[1],b[2],b[3],!0),FF.delete(a))};
EF=function(a,b){g.zB("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a};
g.KF=function(a,b,c,d){g.DB(iva)(void 0,a,b,c,d,void 0)};
g.LF=function(a,b){g.DB(function(){g.Zb(b,function(c){hva(c,a);var d=EF({cttAuthInfo:xF(a)||void 0},a);if(g.zB("il_via_jspb")){var e=(new cB).j(a);c=c.getAsJspb();e=Kj(e,vA,2,c);e=Q(e,4,4);"UNDEFINED_CSN"===a?IF("visualElementShown",d,void 0,e):fua(e,d)}else e={csn:a,ve:c.getAsJson(),eventType:4},"UNDEFINED_CSN"===a?IF("visualElementShown",d,e):g.fD("visualElementShown",e,d)})})()};
g.MF=function(a,b){g.DB(function(){g.Zb(b,function(c){jva(void 0,a,c)})})()};
g.NF=function(a,b,c){g.DB(lva)(void 0,a,b,c,void 0)};
PF=function(a){var b=g.S(a,OF);if(b)return b;if((b=g.S(a,pva))&&b.commands)return qva(b.commands);if((a=g.S(a,rva))&&a.commands)return qva(a.commands)};
qva=function(a){if(0!==a.length){var b={commands:[]};a=g.v(a);for(var c=a.next();!c.done;c=a.next())(c=PF(c.value))&&b.commands.push(c);a={};g.DF(a,g.QF,b);return a}};
SF=function(a,b,c,d,e,f){c=void 0===c?{}:c;this.componentType=a;this.renderer=void 0===b?null:b;this.macros=c;this.layoutId=d;this.interactionLoggingClientData=e;this.j=f;this.id=RF(a)};
RF=function(a){var b=":"+(g.xv.getInstance().j++).toString(36);return a+b};
g.TF=function(a){a=void 0===a?!1:a;g.J.call(this);this.tj=new g.gv(a);g.L(this,this.tj)};
g.UF=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
VF=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
WF=function(){var a="ytp-id-"+sva.toString();sva++;return a};
g.XF=function(a){g.J.call(this);this.Mb={};this.le={};this.element=this.createElement(a)};
YF=function(a,b,c,d){if("{{"===d.substr(0,2))a.le[d]=[b,c];else return d};
tva=function(a,b){var c=[];if(!b)return c;b=g.v(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.I?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,h){0<h&&c.push(g.kf("BR"));c.push(g.lf(f))}):c.push(g.lf(d))}return c};
ZF=function(a,b,c,d){if("child"===c){g.nf(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.I?[d]:d;c=tva(a,e);c=g.v(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?g.Wr(b,"cssText",d?d:""):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=g.Yd(g.In(a))),b.setAttribute(c,a))};
g.U=function(a){g.XF.call(this,a);this.Db=!0;this.Z=!1;this.listeners=[]};
g.$F=function(a,b){b?a.show():a.hide()};
g.aG=function(a){g.U.call(this,a);this.Sa=new g.TF;g.L(this,this.Sa)};
bG=function(a,b,c,d,e,f,h){h=void 0===h?null:h;g.aG.call(this,b);this.api=a;this.macros={};this.componentType=c;this.K=this.N=null;this.tb=h;this.layoutId=d;this.interactionLoggingClientData=e;this.gb=f;this.Xa=null;this.xR=new HE(this.element);g.L(this,this.xR);this.rb=this.T(this.element,"click",this.onClick);this.Ha=[];this.Aa=new Gsa(this.onClick,this);g.L(this,this.Aa);this.Fb=!1;this.Za=this.ma=null};
cG=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.AF(Error("Got null or undefined adText object")),"";var c=g.xe(a.text);if(!a.isTemplated)return c;if(null==b)return g.AF(Error("Missing required parameters for a templated message")),c;a=g.v(Object.entries(b));for(b=a.next();!b.done;b=a.next()){var d=g.v(b.value);b=d.next().value;d=d.next().value;c=c.replace("{"+b+"}",d)}return c};
uva=function(a){a=void 0===a?null:a;return null!=a&&(a=a.thumbnail,null!=a&&null!=a.thumbnails&&0!=a.thumbnails.length&&null!=a.thumbnails[0].url)?g.xe(a.thumbnails[0].url):""};
vva=function(a){a=void 0===a?null:a;return null!=a&&(a=a.thumbnail,null!=a&&null!=a.thumbnails&&0!=a.thumbnails.length&&null!=a.thumbnails[0].width&&null!=a.thumbnails[0].height)?new g.se(a.thumbnails[0].width||0,a.thumbnails[0].height||0):new g.se(0,0)};
g.dG=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.v(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
g.eG=function(a){if(a.simpleText)return a=document.createTextNode(a.simpleText),a;var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];if(d.text){var e=b,f=e.push,h=null;var l=d.text;d.bold&&(h=bf("B",null,h||l));d.italics&&(h=bf("I",null,h||l));d.strikethrough&&(h=bf("STRIKE",null,h||l));d.navigationEndpoint&&d.navigationEndpoint.urlEndpoint&&(d=d.navigationEndpoint.urlEndpoint,h=bf("A",null,h||l),g.Ln(h,d.url),"TARGET_NEW_WINDOW"==d.target&&(h.target="_blank"));l=h||bf("SPAN",null,
l);f.call(e,l)}}return 1==b.length?b[0]:bf("SPAN",null,b)};
g.wva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
xva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.fG=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",W:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.gG=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",W:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
yva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",W:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{I:"path",W:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
zva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
Ava=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.hG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
Bva=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
Cva=function(){return{I:"svg",W:{viewBox:"0 0 24 24"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
Dva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]}};
Eva=function(){return{I:"svg",W:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},V:[{I:"path",W:{"clip-rule":"evenodd",d:"M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.28 15.21 11.97 14.44 12.64C13.71 13.28 13 13.90 13 15H11C11 13.17 11.94 12.45 12.77 11.82C13.42 11.32 14 10.87 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z",
fill:"white","fill-rule":"evenodd"}}]}};
Fva=function(){return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",W:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",W:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
Gva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"m 17,23 h 2 V 17 H 17 Z M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 Z m 0,18 c -4.41,0 -8,-3.59 -8,-8 0,-4.41 3.59,-8 8,-8 4.41,0 8,3.59 8,8 0,4.41 -3.59,8 -8,8 z M 17,15 h 2 v -2 h -2 z"}}]}};
g.Hva=function(){return{I:"svg",W:{viewBox:"0 0 24 24"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",fill:"#fff"}}]}};
iG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",W:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
Iva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
Jva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.Kva=function(){return{I:"svg",W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",W:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
Lva=function(){return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",W:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",W:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]}};
Mva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
Nva=function(){return{I:"svg",W:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},V:[{I:"path",S:"ytp-svg-fill",W:{"clip-rule":"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 17C17.8 16.29 14.7 15 12 15C9.3 15 6.2 16.29 6 17.01V18H18V17ZM4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 17V20H4V17Z","fill-rule":"evenodd"}}]}};
Ova=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
Pva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
Qva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.Rva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.Sva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,W:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
g.jG=function(){return{I:"svg",W:{height:"100%",viewBox:"0 0 16 16",width:"100%"},V:[{I:"path",W:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}};
Tva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
Uva=function(){return{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",W:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
kG=function(a){if(!a)return null;switch(a.iconType){case "OPEN_IN_NEW":return Lva();case "CHECK_BOX":return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#d4d4d4"}}]};case "CHECK_BOX_OUTLINE_BLANK":return{I:"svg",W:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
fill:"#d4d4d4"}},{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}}]};case "CLOSE":return g.hG();case "INFO_OUTLINE":return Fva();case "REMOVE_CIRCLE":return{I:"svg",W:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",W:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",fill:"#757575"}}]};case "SKIP_NEXT":return Jva();case "SKIP_NEXT_NEW":return{I:"svg",W:{height:"100%",viewBox:"-6 -6 36 36",
width:"100%"},V:[{I:"path",W:{d:"M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z",fill:"#fff"}}]};case "LIKE":return g.Hva();case "DISLIKE":return Cva();default:return g.AF(new g.UC("Unexpected icon:",a)),null}};
lG=function(a,b,c,d,e,f,h,l){e=void 0===e?[]:e;h=void 0===h?!1:h;e={I:"button",Ma:["ytp-ad-button"].concat(e)};null!=l&&(e.W={tabindex:l});bG.call(this,a,e,void 0===f?"button":f,b,c,d);this.j=this.B=this.C=null;this.D=h;this.hide()};
Vva=function(a){var b=null;null!=a.j&&(b=[a.j.serviceEndpoint,a.j.navigationEndpoint].filter(function(c){return null!=c}),a.j.command&&(b=b.concat(a.j.command)));
return b||[]};
mG=function(){g.J.call(this);var a=this;this.j=new Map;this.B=qpa(function(b){if(b.target&&(b=a.j.get(b.target))&&b)for(var c=0;c<b.length;c++)g.nE(b[c])})};
Wva=function(){null==nG&&(nG=new mG);return nG};
oG=function(a,b){if(a.simpleText){a:{a=a.simpleText;if(b&&(b=Xva(a))){b=bf("SPAN",null,b);break a}b=g.lf(a)}return b}var c=[];if(a.runs)for(var d=0;d<a.runs.length;d++){var e=a.runs[d];e.text&&c.push(Yva(e,b))}return 1==c.length?c[0]:bf("SPAN",null,c)};
Yva=function(a,b){var c=null,d=a.text;b&&(d=Xva(d)||d);a.bold&&(c=bf("B",null,c||d));a.italics&&(c=bf("I",null,c||d));a.strikethrough&&(c=bf("STRIKE",null,c||d));a.navigationEndpoint&&g.S(a.navigationEndpoint,g.pG)&&(b=g.S(a.navigationEndpoint,g.pG),c=bf("A",null,c||d),g.Ln(c,b.url),"TARGET_NEW_WINDOW"==b.target&&(c.target="_blank"),a=a.navigationEndpoint.loggingUrls)&&(a=a.map(function(e){return e.baseUrl}),Wva().register(c,a),g.Ku(c,"ytp-ad-has-logging-urls"));
return c||bf("SPAN",null,d)};
Xva=function(a){a=a.split(/(?:\r\n|\r|\n)/g);if(1<a.length){for(var b=[a[0]],c=1;c<a.length;c++)b.push(bf("BR")),b.push(a[c]);return b}return null};
qG=function(a,b,c,d,e,f,h,l){f=void 0===f?!1:f;h=void 0===h?[]:h;bG.call(this,a,{I:"span",Ma:["ytp-ad-hover-text-button"].concat(h)},void 0===l?"ad-hover-text-button":l,b,c,d);this.button=this.B=null;this.G=f;this.D=e;this.hide()};
rG=function(a){return a&&a.thumbnails&&0!=(a.thumbnails||null).length&&a.thumbnails[0].url?g.xe(a.thumbnails[0].url):""};
sG=function(a,b,c,d,e,f){f=void 0===f?!1:f;bG.call(this,a,{I:"img",S:"ytp-ad-image"},"ad-image",b,c,d,void 0===e?null:e);this.j=f;this.hide()};
tG=function(a,b,c,d,e,f){e=void 0===e?[]:e;bG.call(this,a,{I:"div",Ma:["ytp-ad-confirm-dialog-background"],V:[{I:"div",S:"ytp-ad-confirm-dialog-container",V:[{I:"div",Ma:["ytp-ad-confirm-dialog"].concat(e),W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-confirm-dialog-title",ya:"{{title}}"},{I:"div",S:"ytp-ad-confirm-dialog-messages"},{I:"div",S:"ytp-ad-confirm-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-confirm-dialog-cancel-button",ya:"{{cancelLabel}}"},{I:"button",S:"ytp-ad-confirm-dialog-confirm-button",
ya:"{{confirmLabel}}"}]}]}]},{I:"button",Ma:["ytp-ad-confirm-dialog-close-overlay-button","ytp-ad-button","ytp-ad-button-link"],V:[{I:"span",S:"ytp-ad-button-icon",V:[g.hG()]}]}]},void 0===f?"confirm-dialog":f,b,c,d);this.Y=this.Ga("ytp-ad-confirm-dialog-close-overlay-button");this.D=this.Ga("ytp-ad-confirm-dialog-cancel-button");this.G=this.Ga("ytp-ad-confirm-dialog-confirm-button");this.qa=this.Ga("ytp-ad-confirm-dialog-messages");this.C=null;this.j=new HC;g.L(this,this.j);this.B=null;this.hide()};
Zva=function(a,b){if(b.title){var c=g.dG(b.title);a.updateValue("title",c)}if(b.dialogMessages){c=g.v(b.dialogMessages);for(var d=c.next();!d.done;d=c.next())d=oG(d.value),a.qa.appendChild(d)}b.cancelLabel&&(c=g.dG(b.cancelLabel),a.updateValue("cancelLabel",c),a.j.T(a.D,"click",function(e){return a.NL(e)}));
b.confirmLabel&&(b=g.dG(b.confirmLabel),a.updateValue("confirmLabel",b),a.j.T(a.G,"click",function(e){return a.XP(e)}));
a.j.T(a.Y,"click",function(e){return a.WP(e)})};
uG=function(a,b,c,d,e,f){e=void 0===e?[]:e;f=void 0===f?"toggle-button":f;var h=RF("ytp-ad-toggle-button-input"),l={role:"button","aria-label":"{{tooltipText}}"};a.U().experiments.ib("fix_h5_toggle_button_a11y")&&(l.tabindex="0");a.U().experiments.ib("fix_toggle_button_role_for_ad_components")&&(l.role="checkbox");bG.call(this,a,{I:"div",Ma:["ytp-ad-toggle-button"].concat(e),V:[{I:"label",S:"ytp-ad-toggle-button-label",W:{"for":h},V:[{I:"span",S:"ytp-ad-toggle-button-icon",W:l,V:[{I:"span",S:"ytp-ad-toggle-button-untoggled-icon",
ya:"{{untoggledIconTemplateSpec}}"},{I:"span",S:"ytp-ad-toggle-button-toggled-icon",ya:"{{toggledIconTemplateSpec}}"}]},{I:"input",S:"ytp-ad-toggle-button-input",W:{id:h,type:"checkbox"}},{I:"span",S:"ytp-ad-toggle-button-text",ya:"{{buttonText}}"},{I:"span",S:"ytp-ad-toggle-button-tooltip",ya:"{{tooltipText}}"}]}]},f,b,c,d);this.D=this.Ga("ytp-ad-toggle-button");this.j=this.Ga("ytp-ad-toggle-button-input");this.Ga("ytp-ad-toggle-button-label");this.C=this.Ga("ytp-ad-toggle-button-icon");this.Y=this.Ga("ytp-ad-toggle-button-untoggled-icon");
this.G=this.Ga("ytp-ad-toggle-button-toggled-icon");this.Ea=this.Ga("ytp-ad-toggle-button-text");this.B=null;this.qa=!1;this.hide()};
$va=function(a){a.qa&&(a.isToggled()?(g.hs(a.Y,!1),g.hs(a.G,!0),a.api.U().experiments.ib("fix_toggle_button_role_for_ad_components")&&a.C.setAttribute("aria-checked",!0)):(g.hs(a.Y,!0),g.hs(a.G,!1),a.api.U().experiments.ib("fix_toggle_button_role_for_ad_components")&&a.C.setAttribute("aria-checked",!1)))};
awa=function(a,b){var c=null;a.B&&(c=(b?[a.B.defaultServiceEndpoint,a.B.defaultNavigationEndpoint]:[a.B.toggledServiceEndpoint]).filter(function(d){return null!=d}));
return c||[]};
bwa=function(a,b,c){this.actionType=b;this.id=c;this.content=a};
vG=function(a){HC.call(this);this.j=a;this.T(this.j,"onAdUxUpdate",this.K)};
cwa=function(a,b,c,d){bG.call(this,a,{I:"div",S:"ytp-ad-feedback-dialog-background",V:[{I:"div",S:"ytp-ad-feedback-dialog-container",V:[{I:"div",S:"ytp-ad-feedback-dialog-form",W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-feedback-dialog-title",V:[{I:"span",ya:"{{title}}"}]},{I:"span",S:"ytp-ad-info-dialog-feedback-options-title",ya:"{{reasonsTitle}}"},{I:"div",S:"ytp-ad-info-dialog-feedback-options"},{I:"div",S:"ytp-ad-feedback-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-feedback-dialog-cancel-button",
ya:"{{cancelLabel}}"},{I:"button",S:"ytp-ad-feedback-dialog-confirm-button",ya:"{{confirmLabel}}"}]}]}]}]},"ad-info-dialog",b,c,d);this.D=[];this.j=null;this.G=this.Ga("ytp-ad-feedback-dialog-cancel-button");this.Y=this.Ga("ytp-ad-feedback-dialog-confirm-button");this.qa=this.Ga("ytp-ad-info-dialog-feedback-options");this.Ea=this.Ga("ytp-ad-feedback-dialog-title");this.C=this.B=null;this.hide()};
gwa=function(a,b){var c=b.cancelRenderer&&b.cancelRenderer.buttonRenderer||null;c&&(a.j=new lG(a.api,a.layoutId,a.interactionLoggingClientData,a.gb,["ytp-ad-feedback-dialog-close-button"],"button"),g.L(a,a.j),a.j.init(RF("button"),c,a.macros),a.j.Qa("click",a.MY,a),a.j.Da(a.element));b.title&&(c=g.dG(b.title),a.updateValue("title",c));b.reasonsTitle&&(c=g.dG(b.reasonsTitle),a.updateValue("reasonsTitle",c));b.reasons&&dwa(a,b.reasons);b.cancelLabel&&(c=g.dG(b.cancelLabel),a.updateValue("cancelLabel",
c),g.DC(a.G,"click",function(){return a.MY()}));
b.confirmLabel&&(c=g.dG(b.confirmLabel),a.updateValue("confirmLabel",c),g.DC(a.Y,"click",function(){return ewa(a)}));
b.undoRenderer&&fwa(a,b.undoRenderer)};
dwa=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;c=d.reason;null==c?g.AF(Error("AdFeedbackReason.reason was not set.")):(d=d.endpoint,null==d?g.AF(Error("AdFeedbackReason.endpoint was not set.")):(c=new hwa(c,d),g.L(a,c),d=c.Ab(),a.qa.appendChild(d),a.D.push(c)))}};
fwa=function(a,b){if(b=b&&b.buttonRenderer||null)b.serviceEndpoint?(a.B=new lG(a.api,a.layoutId,a.interactionLoggingClientData,a.gb,["ytp-ad-feedback-dialog-undo-mute-button"],"ad-feedback-undo-mute-button"),g.L(a,a.B),a.B.init(RF("ad-feedback-undo-mute-button"),b,a.macros),a.B.Qa("click",a.daa,a),a.B.Da(a.Ea)):g.AF(Error("AdFeedbackRenderer.undoRenderer.undoButtonRenderer was specified but did not contain a service endpoint."))};
ewa=function(a){var b=a.D.filter(function(c){return c.isChecked()});
0!==b.length&&(b=b[0].B,a.layoutId?a.gb.executeCommand(b,a.layoutId):g.zF(Error("Missing layoutId for ad feedback dialog.")),a.api.onAdUxClicked("ad-feedback-dialog-confirm-button",a.layoutId),a.oa("a"),a.hide())};
hwa=function(a,b){this.B=b;this.j=new g.aG({I:"label",S:"ytp-ad-feedback-dialog-reason-label",V:[{I:"input",S:"ytp-ad-feedback-dialog-reason-input",W:{type:"radio",name:"feedback-reason-group"}},{I:"span",S:"ytp-ad-feedback-dialog-reason-text",ya:g.dG(a)}]});this.C=this.j.Ga("ytp-ad-feedback-dialog-reason-input")};
wG=function(a,b,c,d){tG.call(this,a,b,c,d,[],"ad-mute-confirm-dialog")};
iwa=function(a,b,c,d,e){bG.call(this,a,{I:"div",S:"ytp-ad-info-dialog-background",V:[{I:"div",S:"ytp-ad-info-dialog-container",V:[{I:"div",S:"ytp-ad-info-dialog-form",W:{role:"dialog",tabindex:"-1"},V:[{I:"div",S:"ytp-ad-info-dialog-title",ya:"{{title}}"},{I:"ul",S:"ytp-ad-info-dialog-ad-reasons"},{I:"div",S:"ytp-ad-info-dialog-message"},{I:"div",S:"ytp-ad-info-dialog-mute-container"},{I:"div",S:"ytp-ad-info-dialog-confirm-container",V:[{I:"button",S:"ytp-ad-info-dialog-confirm-button",ya:"{{confirmLabel}}"}]}]}]}]},
"ad-info-dialog",b,c,d);this.j=this.B=null;this.Y=this.Ga("ytp-ad-info-dialog-confirm-button");this.fb=this.Ga("ytp-ad-info-dialog-mute-container");this.Va=this.Ga("ytp-ad-info-dialog-message");this.Ka=this.Ga("ytp-ad-info-dialog-ad-reasons");this.D=this.C=null;this.Ea=e;this.G=null;this.Na=!1;this.qa=null;this.hide()};
jwa=function(a,b){if(b=b.content&&b.content.adFeedbackRenderer||null)a.B=new cwa(a.api,a.layoutId,a.interactionLoggingClientData,a.gb),g.L(a,a.B),a.B.init(RF("ad-feedback-dialog"),b,a.macros),a.B.Da(a.Ea),a.B.subscribe("a",function(){return a.oa("c")})};
kwa=function(a,b){if(b=b.content&&b.content.confirmDialogRenderer||null)a.D=new wG(a.api,a.layoutId,a.interactionLoggingClientData,a.gb),g.L(a,a.D),a.D.init(RF("ad-mute-confirm-dialog"),b,a.macros),a.D.Da(a.Ea),a.D.subscribe("b",function(){return a.oa("c")})};
lwa=function(a){a.j&&a.j.Qa("click",a.JT,a);g.DC(a.Y,"click",function(){return a.JT()})};
xG=function(a,b,c,d,e,f){qG.call(this,a,b,c,d,void 0===f?!0:f,!0,["ytp-ad-info-hover-text-button"],"ad-info-hover-text-button");this.j=null;this.C=e;this.hide()};
nwa=function(a,b,c){b=b.dialog&&g.S(b.dialog,mwa)||null;null==b?g.zF(Error("AdInfoDialogEndpoint did not contain an AdInfoDialogRenderer.")):(a.j=new iwa(a.api,a.layoutId,a.interactionLoggingClientData,a.gb,a.C),g.L(a,a.j),a.j.init(RF("ad-info-dialog"),b,c),a.j.Da(a.C),a.j.subscribe("d",function(){return a.oa("f")}),a.j.subscribe("c",function(){return a.oa("e")}))};
qwa=function(a,b,c){null==a.button?g.zF(Error("AdInfoHoverTextButton.button was expected but it was not created.")):(a.B&&g.Ku(a.B.element,"ytp-ad-info-hover-text-short"),(b=b&&b.serviceEndpoint&&g.S(b.serviceEndpoint,owa)||null)?(nwa(a,b,c),a.button.Qa("click",function(){a.j&&!a.j.Db&&(a.j.show(),pwa(a))})):a.button.Qa("click",function(){return pwa(a)}))};
pwa=function(a){a.api.onAdUxClicked("ad-info-icon-button",a.layoutId)};
yG=function(a,b,c,d,e,f){bG.call(this,a,{I:"div",S:"ytp-ad-text"},void 0===f?"ad-text":f,b,c,d,void 0===e?null:e);this.j=null;this.hide()};
rwa=function(a,b){b&&g.yf(a.element,cG(a.j,b))};
zG=function(a,b,c,d,e,f,h){bG.call(this,a,b,c,d,e,f);this.j=h;g.L(this,this.j);this.Na=this.Y=-1};
AG=function(a){a.j&&-1===a.Y&&(a.Y=a.j.subscribe("h",a.jo,a),a.Na=a.j.subscribe("g",a.aq,a),a.jo())};
BG=function(a){null!=a.j&&-1!==a.Y&&(a.j.Jh(a.Y),a.j.Jh(a.Na),a.Na=-1,a.Y=-1)};
g.CG=function(a,b,c,d,e,f){g.J.call(this);this.element=a;this.state=null;c||a.hide();this.B=b;this.C=void 0===d?b:d;this.j=f;this.onHidden=e;this.delay=new g.Cu(this.zG,0,this);g.L(this,this.delay)};
DG=function(a,b){a=a.element.element;b?a.setAttribute("aria-hidden","true"):a.removeAttribute("aria-hidden")};
EG=function(a,b,c,d,e,f){zG.call(this,a,{I:"div",S:"ytp-ad-preview-slot"},"ad-preview",b,c,d,e);var h=this;this.fb=-1;this.D=this.api.U().experiments.ib("enable_modern_skip_button_on_web");this.B=new g.aG({I:"span",S:"ytp-ad-preview-container"});this.D&&this.B.element.classList.add("ytp-ad-preview-container-detached");g.L(this,this.B);this.C=this.D?new yG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,"ytp-ad-preview-text-modern"):new yG(this.api,this.layoutId,this.interactionLoggingClientData,
this.gb,"ytp-ad-preview-text");g.L(this,this.C);this.C.Da(this.B.element);this.qa=this.D?new g.aG({I:"span",S:"ytp-ad-preview-image-modern"}):new g.aG({I:"span",S:"ytp-ad-preview-image"});g.L(this,this.qa);this.G=new sG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb);g.L(this,this.G);this.G.Da(this.qa.element);this.qa.Da(this.B.element);this.B.Da(this.element);this.Ea=new g.CG(this.B,400,!1,100,function(){return h.hide()});
g.L(this,this.Ea);this.Ka=0;this.Va=!1;this.ob=f;this.hide()};
swa=function(a){a.Ea.show(100);a.show()};
twa=function(a,b,c,d,e,f){zG.call(this,a,{I:"div",Ma:["ytp-flyout-cta","ytp-flyout-cta-inactive"],V:[{I:"div",S:"ytp-flyout-cta-icon-container"},{I:"div",S:"ytp-flyout-cta-body",V:[{I:"div",S:"ytp-flyout-cta-text-container",V:[{I:"div",S:"ytp-flyout-cta-headline-container"},{I:"div",S:"ytp-flyout-cta-description-container"}]},{I:"div",S:"ytp-flyout-cta-action-button-container"}]}]},"flyout-cta",b,c,d,e);this.C=new sG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,"ytp-flyout-cta-icon");
g.L(this,this.C);this.C.Da(this.Ga("ytp-flyout-cta-icon-container"));this.api.U().L("web_rounded_thumbnails")&&this.C.element.classList.add("ytp-flyout-cta-icon-rounded");this.G=new yG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,"ytp-flyout-cta-headline");g.L(this,this.G);this.G.Da(this.Ga("ytp-flyout-cta-headline-container"));this.D=new yG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,"ytp-flyout-cta-description");g.L(this,this.D);this.D.Da(this.Ga("ytp-flyout-cta-description-container"));
a=["ytp-flyout-cta-action-button"];this.api.U().L("web_modern_buttons")&&a.push("ytp-flyout-cta-action-button-rounded");this.B=new lG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,a);g.L(this,this.B);this.B.Da(this.Ga("ytp-flyout-cta-action-button-container"));this.B.element.setAttribute("tabIndex","-1");wu(this.B.element);this.qa=null;this.Ea=0;this.Ka=f;this.hide()};
uwa=function(a,b,c,d,e){bG.call(this,a,{I:"div",S:"ytp-ad-instream-user-sentiment-container"},"instream-user-sentiment",b,c,d,void 0===e?null:e);var f=this;this.j=null;this.C=new uG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,["ytp-ad-instream-user-sentiment-like-button"]);g.L(this,this.C);this.C.Da(this.element);this.B=new uG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,["ytp-ad-instream-user-sentiment-dislike-button"]);g.L(this,this.B);this.B.Da(this.element);
this.D=new g.CG(this,400,!1,500,function(){return f.hide()});
g.L(this,this.D);this.hide()};
FG=function(a,b,c,d,e,f){e=void 0===e?0:e;f=void 0===f?!1:f;g.J.call(this);this.B=a;this.C=!1;this.Y=d;this.ma=f;this.K=!1;this.j=null;0<b&&(this.j=new g.Cu(this.fV,b,this),g.L(this,this.j));this.G=new g.Cu(this.fV,c,this);g.L(this,this.G);this.Z=fla(this.B,e,1,d);g.L(this,this.Z);this.N=fla(this.B,0,d,1);g.L(this,this.N);this.D=new HC;g.L(this,this.D)};
vwa=function(a){switch(a){case 2:return 0;case 1:return 2;case 0:return 3;case 4:case 3:return 1;default:Mn(a,"unknown result type")}};
wwa=function(a){switch(a){case "b.f_":return 0;case "j.s_":return 2;case "r.s_":return 4;case "e.h_":return 6;case "i.s_":return 8;case "p.h_":return 12;case "s.t_":return 10;case "s.i_":return 14;case "f.i_":return 16;case "a.b_":return 18;case "a.o_":return 20;case "g.o_":return 22;case "p.i_":return 24;case "p.m_":return 26;case "i.k_":return 28;default:Mn(a,"Unknown method type")}};
GG=function(a,b){var c=1,d=[];try{var e=document.querySelector(".ytp-ad-skip-button-slot");e?"none"===getComputedStyle(e).display?d.push("BISCOTTI_BASED_DETECTION_STATE_IS_BUTTON_INVISIBLE"):d.push("BISCOTTI_BASED_DETECTION_STATE_IS_BUTTON_VISIBLE"):d.push("BISCOTTI_BASED_DETECTION_STATE_IS_BUTTON_NOT_FOUND")}catch(f){d.push("BISCOTTI_BASED_DETECTION_STATE_IS_FINDING_BUTTON_FAILURE")}!0===a.isTrusted?d.push("BISCOTTI_BASED_DETECTION_STATE_IS_CLICK_EVENT_TRUSTED"):!1===a.isTrusted?d.push("BISCOTTI_BASED_DETECTION_STATE_IS_CLICK_EVENT_NOT_TRUSTED"):
d.push("BISCOTTI_BASED_DETECTION_STATE_IS_CLICK_EVENT_TRUSTED_UNDEFINED");d.includes("BISCOTTI_BASED_DETECTION_STATE_IS_CLICK_EVENT_NOT_TRUSTED")&&(c=0);wB("ISDSTAT",c);xwa(c,"i.s_",{mca:"sk",metadata:b,states:d});return c};
xwa=function(a,b,c){var d,e={detected:0===a,source:b+(null!=(d=c.mca)?d:""),detectionStates:c.states};c.metadata&&(e.contentCpn=c.metadata.contentCpn);g.fD("biscottiBasedDetection",e);a=vwa(a);b=wwa(b);wB("CATSTAT",Number(g.xB("CATSTAT",0))&~(3<<b)|a<<b)};
HG=function(a,b,c,d,e){d=void 0===d?{}:d;if(!e||5E-4>Math.random()){b=b||null;c=c||null;a=a instanceof Error?a:new g.UC(a);if(a.args)for(var f=g.v(a.args),h=f.next();!h.done;h=f.next())h=h.value,h instanceof Object&&(d=Object.assign({},h,d));d.category="H5 Ads Control Flow";b&&(d.slot=b?"slot:  "+b.slotType:"");c&&(d.layout=c?"layout:  "+c.layoutType:"");e&&(d.known_error_aggressively_sampled=!0);a.args=[d];g.AF(a)}};
g.IG=function(a,b){this.state=a;this.BA=b};
KG=function(a,b){return g.JG(a.state,b)&&!g.JG(a.BA,b)?1:!g.JG(a.state,b)&&g.JG(a.BA,b)?-1:0};
g.LG=function(a,b){return 0<KG(a,b)};
MG=function(a,b,c,d,e,f){zG.call(this,a,{I:"div",S:"ytp-ad-skip-button-slot"},"skip-button",b,c,d,e);var h=this;this.qa=null;this.Ea=!1;this.Va=f;this.G=this.api.U().experiments.ib("enable_modern_skip_button_on_web");this.fb=!1;this.D=new g.aG({I:"span",Ma:["ytp-ad-skip-button-container"]});this.G&&this.D.element.classList.add("ytp-ad-skip-button-container-detached");g.L(this,this.D);this.D.Da(this.element);this.B=this.C=null;this.ob=new g.CG(this.D,500,!1,100,function(){return h.hide()});
g.L(this,this.ob);this.Ka=new FG(this.D.element,15E3,5E3,.5,.5,this.G);g.L(this,this.Ka);this.hide()};
zwa=function(a){a=a.qa&&a.qa.adRendererCommands;return(a&&a.clickCommand&&g.S(a.clickCommand,g.QF)&&g.S(a.clickCommand,g.QF).commands||[]).some(function(b){return b.adLifecycleCommand?ywa(b.adLifecycleCommand):!1})};
ywa=function(a){return"END_LINEAR_AD"===a.action||"END_LINEAR_AD_PLACEMENT"===a.action};
NG=function(a,b,c,d,e,f){zG.call(this,a,{I:"div",S:"ytp-ad-skip-ad-slot"},"skip-ad",b,c,d,e);this.qa=f;this.D=!1;this.G=0;this.C=this.B=null;this.hide()};
Awa=function(a,b){a.D||(a.D=!0,a.B&&(b?a.B.Ea.hide():a.B.hide()),b?(a=a.C,a.ob.show(),a.show()):a.C.show())};
Bwa=function(a,b,c,d){lG.call(this,a,b,c,d,["ytp-ad-visit-advertiser-button"],"visit-advertiser")};
OG=function(a,b,c,d,e){e=void 0===e?!1:e;bG.call(this,a,{I:"span",S:"ytp-ad-simple-ad-badge"},"simple-ad-badge",b,c,d);this.j=e;this.hide()};
PG=function(a,b,c,d,e){e=void 0===e?!1:e;SF.call(this,"player-overlay",a,{},b,d);this.videoAdDurationSeconds=c;this.interactionLoggingClientData=d;this.FK=e};
QG=function(a,b){g.TF.call(this);this.api=a;this.durationMs=b;this.j=null;this.Dd=new HC(this);g.L(this,this.Dd);this.B=Cwa;this.Dd.T(this.api,"presentingplayerstatechange",this.Ud);this.j=this.Dd.T(this.api,"onAdPlaybackProgress",this.Hc)};
RG=function(a){g.TF.call(this);this.j=!1;this.dj=0;this.Dd=new HC(this);g.L(this,this.Dd);this.durationMs=a;this.timer=new g.ag(100);g.L(this,this.timer);this.Dd.T(this.timer,"tick",this.Hc);this.B={seekableStart:0,seekableEnd:a/1E3,current:0};this.start()};
g.SG=function(a,b){var c=Math.abs(Math.floor(a)),d=Math.floor(c/86400),e=Math.floor(c%86400/3600),f=Math.floor(c%3600/60);c=Math.floor(c%60);if(b){b="";0<d&&(b+=" "+d+" Days");if(0<d||0<e)b+=" "+e+" Hours";b+=" "+f+" Minutes";b+=" "+c+" Seconds";d=b.trim()}else{b="";0<d&&(b+=d+":",10>e&&(b+="0"));if(0<d||0<e)b+=e+":",10>f&&(b+="0");b+=f+":";10>c&&(b+="0");d=b+c}return 0<=a?d:"-"+d};
g.TG=function(a){return(!("button"in a)||"number"!==typeof a.button||0===a.button)&&!("shiftKey"in a&&a.shiftKey)&&!("altKey"in a&&a.altKey)&&!("metaKey"in a&&a.metaKey)&&!("ctrlKey"in a&&a.ctrlKey)};
UG=function(a,b,c,d,e,f){zG.call(this,a,{I:"span",S:"ytp-ad-duration-remaining"},"ad-duration-remaining",b,c,d,e);this.videoAdDurationSeconds=f;this.B=null;this.hide()};
Dwa=function(a,b,c,d){yG.call(this,a,b,c,d,"ytp-video-ad-top-bar-title","ad-title")};
VG=function(a,b){this.B=a;this.j=b};
WG=function(a,b,c){if(!a.getLength())return null!=c?c:Infinity;a=(b-a.B)/a.getLength();return g.ke(a,0,1)};
XG=function(a,b){g.aG.call(this,{I:"div",S:"ytp-ad-persistent-progress-bar-container",V:[{I:"div",S:"ytp-ad-persistent-progress-bar"}]});this.api=a;this.B=b;g.L(this,this.B);this.Nc=this.Ga("ytp-ad-persistent-progress-bar");this.j=-1;this.T(a,"presentingplayerstatechange",this.onStateChange);this.hide();this.onStateChange()};
YG=function(a,b,c,d,e,f){bG.call(this,a,{I:"div",S:"ytp-ad-player-overlay",V:[{I:"div",S:"ytp-ad-player-overlay-flyout-cta"},{I:"div",S:"ytp-ad-player-overlay-instream-info"},{I:"div",S:"ytp-ad-player-overlay-skip-or-preview"},{I:"div",S:"ytp-ad-player-overlay-progress-bar"},{I:"div",S:"ytp-ad-player-overlay-instream-user-sentiment"}]},"player-overlay",b,c,d);this.Y=f;this.D=this.Ga("ytp-ad-player-overlay-flyout-cta");this.api.U().L("web_rounded_thumbnails")&&this.D.classList.add("ytp-ad-player-overlay-flyout-cta-rounded");
this.B=this.Ga("ytp-ad-player-overlay-instream-info");this.C=null;Ewa(this)&&(a=bf("div"),g.Ku(a,"ytp-ad-player-overlay-top-bar-gradients"),b=this.B,b.parentNode&&b.parentNode.insertBefore(a,b),(b=this.api.getVideoData(2))&&b.isListed&&b.title&&(c=new Dwa(this.api,this.layoutId,this.interactionLoggingClientData,this.gb),c.Da(a),c.init(RF("ad-title"),{text:b.title},this.macros),g.L(this,c)),this.C=a);this.G=this.Ga("ytp-ad-player-overlay-skip-or-preview");this.Ea=this.Ga("ytp-ad-player-overlay-progress-bar");
this.qa=this.Ga("ytp-ad-player-overlay-instream-user-sentiment");this.j=e;g.L(this,this.j);this.hide()};
Ewa=function(a){a=a.api.U();return g.ZG(a)&&a.B};
Fwa=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Nl("/sharing_services",a);g.nE(d)};
g.$G=function(a){a&=16777215;var b=[(a&16711680)>>16,(a&65280)>>8,a&255];a=b[0];var c=b[1];b=b[2];a=Number(a);c=Number(c);b=Number(b);if(a!=(a&255)||c!=(c&255)||b!=(b&255))throw Error('"('+a+","+c+","+b+'") is not a valid RGB color');c=a<<16|c<<8|b;return 16>a?"#"+(16777216|c).toString(16).slice(1):"#"+c.toString(16)};
aH=function(a){this.j=new jv(a)};
Gwa=function(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return g.zB("copy_login_info_to_st_cookie")&&("WEB"===g.xB("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===g.xB("INNERTUBE_CLIENT_NAME"))&&a};
bH=function(a){if(g.xB("LOGGED_IN",!0)&&Gwa()){var b=g.xB("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=g.Hl(window.location.href);c&&b.push(c);c=g.Hl(a);g.Bb(b,c)||!c&&ec(a,"/")?(b=Il(a),(b=dfa(b))?(b=Bua(b),b=(b=g.eC(b)||null)?HB(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Gwa()?(d||(d=g.xB("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Aua(a,b)}};
g.Hwa=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;a=g.Nl(a,b);bH(a);c=g.In(a+c);d=d.location;c=Jn(c);void 0!==c&&(d.href=c)};
g.Iwa=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.xB("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Aua(a,b);c||(bH(a),(window.ytspf||{}).enabled?spf.navigate(a):g.Hwa(a))};
g.cH=function(a,b,c,d){c&&Aua(a,c);c=g.In(a);var e=g.Yd(c);a!=e&&EB(Error("Unsafe window.open URL: "+a));a=e;b=b||ye(a).toString(36);try{var f;if("2"===(null==(f=HB(a))?void 0:f.ase)){a=hsa(a);bH(a);g.zB("update_ytWindow_library_use_closure_window_library")?g.Nn(a,b,"attributionsrc"):window.open(a,b,"attributionsrc");return}}catch(l){g.CB(l)}if(d){a=hsa(a);try{var h=encodeURIComponent(d);bH(a);g.zB("update_ytWindow_library_use_closure_window_library")?g.Nn(a,b,"attributionsrc="+h):window.open(a,b,
"attributionsrc="+h);return}catch(l){g.CB(l)}}bH(a);g.zB("update_ytWindow_library_use_closure_window_library")?g.Nn(c,b):window.open(a,b)};
Kwa=function(a){Jwa=a&&a.data};
Mwa=function(a){Lwa=a&&a.data};
Owa=function(a){Nwa=a&&a.data};
Qwa=function(){Pwa=Nwa=Lwa=Jwa=null};
Swa=function(){var a=void 0===a?window.location.href:a;if(g.zB("kevlar_disable_theme_param"))return null;El(g.Gl(5,a));try{var b=g.IB(a).theme;return Rwa.get(b)||null}catch(c){}return null};
dH=function(){this.j={};if(this.B=Coa()){var a=g.eC("CONSISTENCY");a&&Twa(this,{encryptedTokenJarContents:a})}};
Twa=function(a,b){if(b.encryptedTokenJarContents&&(a.j[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.j[b.encryptedTokenJarContents]},1E3*c);
a.B&&g.dC("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
eH=function(){var a=g.xB("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===g.xB("INNERTUBE_CLIENT_NAME")&&(this.localStorage=Uwa(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)};
Uwa=function(a){return void 0===a.localStorage?new dD("yt-client-location"):a.localStorage};
g.fH=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;var d=g.xB("INNERTUBE_CONTEXT");if(!d)return g.zF(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=g.qd(d);g.zB("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;"MWEB"===e.clientName&&(e.clientFormFactor=g.xB("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=Math.round(window.devicePixelRatio||
1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=void 0===f?!1:f;g.RC();var h="USER_INTERFACE_THEME_LIGHT";g.SC(0,165)?h="USER_INTERFACE_THEME_DARK":g.SC(0,174)?h="USER_INTERFACE_THEME_LIGHT":!g.zB("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(h="USER_INTERFACE_THEME_DARK");f=f?h:Swa()||h;e.userInterfaceTheme=f;if(!b){if(f=
Ipa())e.connectionType=f;g.zB("web_log_effective_connection_type")&&(f=Kpa())&&(d.client.effectiveConnectionType=f)}var l;if(g.zB("web_log_memory_total_kbytes")&&(null==(l=g.Ra.navigator)?0:l.deviceMemory)){var m;l=null==(m=g.Ra.navigator)?void 0:m.deviceMemory;d.client.memoryTotalKbytes=""+1E6*l}g.zB("web_gcf_hashes_innertube")&&(f=dra())&&(m=f.coldConfigData,l=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},d.client.configInfo.coldConfigData=m,d.client.configInfo.coldHashData=
l,d.client.configInfo.hotHashData=f);m=g.IB(g.Ra.location.href);!g.zB("web_populate_internal_geo_killswitch")&&m.internalcountrycode&&(e.internalGeo=m.internalcountrycode);"MWEB"===e.clientName||"WEB"===e.clientName?(e.mainAppWebInfo={graftUrl:g.Ra.location.href},g.zB("kevlar_woffle")&&xpa.instance&&(m=xpa.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!m.j&&m.B?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=ypa(),e.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===e.clientName&&(!g.zB("web_lr_app_quality_killswitch")&&(m=g.xB("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:m})),m=g.xB("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:m}));if(!g.zB("web_populate_time_zone_itc_killswitch")){a:{if("undefined"!==typeof Intl)try{var n=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(H){}n=void 0}n&&(e.timeZone=
n)}(n=Rna())?e.experimentsToken=n:delete e.experimentsToken;n=Sna();dH.instance||(dH.instance=new dH);d.request=Object.assign({},d.request,{internalExperimentFlags:n,consistencyTokenJars:ad(dH.instance.j)});!g.zB("web_prequest_context_killswitch")&&(n=g.xB("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=n);e=g.RC();n=g.SC(0,58);e=e.get("gsml","");d.user=Object.assign({},d.user);n&&(d.user.enableSafetyMode=n);e&&(d.user.lockedSafetyMode=!0);g.zB("warm_op_csn_cleanup")?c&&
(b=g.wF())&&(d.clientScreenNonce=b):!b&&(b=g.wF())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=g.Ta("yt.mdx.remote.remoteClient_"))d.remoteClient=a;eH.getInstance().setLocationOnInnerTubeContext(d);try{var p=NB(),q=p.bid;delete p.bid;d.adSignalsInfo={params:[],bid:q};for(var r=g.v(Object.entries(p)),t=r.next();!t.done;t=r.next()){var u=g.v(t.value),x=u.next().value,B=u.next().value;p=x;q=B;a=void 0;null==(a=d.adSignalsInfo.params)||a.push({key:p,value:""+q})}var F;if(g.zB("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(F=d.client)?void 0:F.clientName)){var G=g.xB("INNERTUBE_CONTEXT");G.adSignalsInfo&&(d.adSignalsInfo.advertisingId=G.adSignalsInfo.advertisingId,d.adSignalsInfo.limitAdTracking=G.adSignalsInfo.limitAdTracking)}}catch(H){g.zF(H)}return d};
Xwa=function(a,b){if(!a)return!1;var c,d=null==(c=g.S(a,Vwa))?void 0:c.signal;if(d&&b.nx)return!!b.nx[d];var e;if((c=null==(e=g.S(a,Wwa))?void 0:e.request)&&b.hN)return!!b.hN[c];for(var f in a)if(b.dN[f])return!0;return!1};
Ywa=function(a,b){var c,d=null==(c=g.S(a,Vwa))?void 0:c.signal;if(d&&b.nx&&(c=b.nx[d]))return c();var e;if((c=null==(e=g.S(a,Wwa))?void 0:e.request)&&b.hN&&(e=b.hN[c]))return e();for(var f in a)if(b.dN[f]&&(a=b.dN[f]))return a()};
gH=function(a){return function(){return new a}};
$wa=function(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Zwa[b];if(c){var d=new RegExp(c),e=g.v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Zwa).forEach(function(h){var l=g.v(h);h=l.next().value;l=l.next().value;b!==h&&f.push(l)});
d=new RegExp(f.join("|"));a.sort(function(h,l){return h.length-l.length});
e=g.v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]};
g.hH=function(a){return"/youtubei/v1/"+$wa(a)};
iH=function(){};
jH=function(){};
kH=function(a){return g.Ta("ytcsi."+(a||"")+"data_")||axa(a)};
lH=function(){var a=kH();a.info||(a.info={});return a.info};
mH=function(a){a=kH(a);a.metadata||(a.metadata={});return a.metadata};
nH=function(a){a=kH(a);a.tick||(a.tick={});return a.tick};
oH=function(a){a=kH(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel};
bxa=function(a){a=oH(a);a.gelInfos||(a.gelInfos={});return a.gelInfos};
pH=function(a){var b=kH(a).nonce;b||(b=g.KE(16),kH(a).nonce=b);return b};
axa=function(a){var b={tick:{},info:{}};g.Sa("ytcsi."+(a||"")+"data_",b);return b};
cxa=function(){var a=g.Ta("ytcsi.debug");a||(a=[],g.Sa("ytcsi.debug",a),g.Sa("ytcsi.reference",{}));return a};
qH=function(a){a=a||"";var b=dxa();if(b[a])return b[a];var c=cxa(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d};
exa=function(a){a=a||"";var b=dxa();b[a]&&delete b[a];var c=cxa(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);b[a]=d};
dxa=function(){var a=g.Ta("ytcsi.reference");if(a)return a;cxa();return g.Ta("ytcsi.reference")};
rH=function(a){return fxa[a]||"LATENCY_ACTION_UNKNOWN"};
kxa=function(a,b,c){c=oH(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in gxa){c=gxa[a];g.Bb(hxa,c)&&(b=!!b);a in ixa&&"string"===typeof b&&(b=ixa[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},h=0;h<b.length-1;h++){var l=b[h];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return FE({},d)}g.Bb(jxa,a)||g.AF(new g.UC("Unknown label logged with GEL CSI",a))};
lxa=function(a,b){YD.call(this,1,arguments);this.timer=b};
sH=function(){this.j=0};
tH=function(){sH.instance||(sH.instance=new sH);return sH.instance};
vH=function(a,b){uH[b]=uH[b]||{count:0};var c=uH[b];c.count++;c.time=(0,g.uD)();a.j||(a.j=g.ZC(0,function(){var d=(0,g.uD)(),e;for(e in uH)uH[e]&&6E4<d-uH[e].time&&delete uH[e];a&&(a.j=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.UC("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.AF(c)),!0):!1};
mxa=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
nxa=function(){var a;if(g.zB("csi_use_performance_navigation_timing")||g.zB("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==wH?void 0:null==(a=wH.getEntriesByType)?void 0:null==(b=a.call(wH,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=xH(e.requestStart),e.responseEnd=xH(e.responseEnd),e.redirectStart=xH(e.redirectStart),e.redirectEnd=xH(e.redirectEnd),e.domainLookupEnd=xH(e.domainLookupEnd),e.connectStart=xH(e.connectStart),
e.connectEnd=xH(e.connectEnd),e.responseStart=xH(e.responseStart),e.secureConnectionStart=xH(e.secureConnectionStart),e.domainLookupStart=xH(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=wH.timing}else a=wH.timing;return a};
xH=function(a){return Math.round(yH()+a)};
yH=function(){return(g.zB("csi_use_time_origin")||g.zB("csi_use_time_origin_tvhtml5"))&&wH.timeOrigin?Math.floor(wH.timeOrigin):wH.timing.navigationStart};
AH=function(a,b){zH("_start",a,b)};
oxa=function(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;mH(c).loadType=e}(a=kxa(a,b,c))&&BH(a,c,d)}};
BH=function(a,b,c){c=void 0===c?!1:c;if(!g.zB("web_csi_action_sampling_enabled")||!kH(b).actionDisabled)if(g.zB("web_csi_via_jspb")&&!c){c=new iB;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":Q(c,1,V[a[e]]);break;case "clientActionNonce":N(c,2,a[e]);break;case "clientScreenNonce":N(c,4,a[e]);break;case "loadType":N(c,3,a[e]);break;case "isPrewarmedLaunch":Wj(c,92,a[e]);break;case "isFirstInstall":Wj(c,55,a[e]);break;case "networkType":Q(c,
5,CH[a[e]]);break;case "connectionType":Q(c,26,DH[a[e]]);break;case "detailedConnectionType":Q(c,27,EH[a[e]]);break;case "isVisible":Wj(c,6,a[e]);break;case "playerType":Q(c,7,FH[a[e]]);break;case "clientPlaybackNonce":N(c,8,a[e]);break;case "adClientPlaybackNonce":N(c,28,a[e]);break;case "previousCpn":N(c,77,a[e]);break;case "targetCpn":N(c,76,a[e]);break;case "isMonetized":Wj(c,9,a[e]);break;case "isPrerollAllowed":Wj(c,16,a[e]);break;case "isPrerollShown":Wj(c,17,a[e]);break;case "adType":N(c,
12,a[e]);break;case "adTypesAllowed":N(c,36,a[e]);break;case "adNetworks":N(c,37,a[e]);break;case "previousAction":Q(c,13,V[a[e]]);break;case "isRedSubscriber":Wj(c,14,a[e]);break;case "serverTimeMs":Xj(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":N(c,20,a[e]);break;case "targetVideoId":N(c,78,a[e]);break;case "adBreakType":Q(c,21,GH[a[e]]);break;case "isNavigation":Wj(c,25,a[e]);break;case "viewportHeight":Xj(c,29,a[e]);break;case "viewportWidth":Xj(c,30,a[e]);break;
case "screenHeight":Xj(c,84,a[e]);break;case "screenWidth":Xj(c,85,a[e]);break;case "browseId":N(c,31,a[e]);break;case "isCacheHit":Wj(c,32,a[e]);break;case "httpProtocol":N(c,33,a[e]);break;case "transportProtocol":N(c,34,a[e]);break;case "searchQuery":N(c,41,a[e]);break;case "isContinuation":Wj(c,42,a[e]);break;case "availableProcessors":Xj(c,43,a[e]);break;case "sdk":N(c,44,a[e]);break;case "isLocalStream":Wj(c,45,a[e]);break;case "navigationRequestedSameUrl":Wj(c,64,a[e]);break;case "shellStartupDurationMs":Xj(c,
70,a[e]);break;case "appInstallDataAgeMs":Xj(c,73,a[e]);break;case "latencyActionError":Q(c,71,HH[a[e]]);break;case "actionStep":Xj(c,79,a[e]);break;case "jsHeapSizeLimit":Zj(c,80,a[e]);break;case "totalJsHeapSize":Zj(c,81,a[e]);break;case "usedJsHeapSize":Zj(c,82,a[e]);break;case "sourceVideoDurationMs":Zj(c,90,a[e]);break;case "videoOutputFrames":Zj(c,93,a[e]);break;case "isResume":Wj(c,104,a[e]);break;case "debugTicksExcluded":Wj(c,105,a[e]);break;case "abandonedPing":Wj(c,113,a[e]);break;case "adPrebufferedTimeSecs":Xj(c,
39,a[e]);break;case "isLivestream":Wj(c,47,a[e]);break;case "liveStreamMode":Q(c,91,IH[a[e]]);break;case "adCpn2":N(c,48,a[e]);break;case "adDaiDriftMillis":Zj(c,49,a[e]);break;case "videoStreamType":Q(c,53,JH[a[e]]);break;case "playbackRequiresTap":Wj(c,56,a[e]);break;case "performanceNavigationTiming":Wj(c,67,a[e]);break;case "transactionType":Q(c,74,KH[a[e]]);break;case "playerRotationType":Q(c,101,LH[a[e]]);break;case "allowedPreroll":Wj(c,10,a[e]);break;case "shownPreroll":Wj(c,11,a[e]);break;
case "getHomeRequestId":N(c,57,a[e]);break;case "getSearchRequestId":N(c,60,a[e]);break;case "getPlayerRequestId":N(c,61,a[e]);break;case "getWatchNextRequestId":N(c,62,a[e]);break;case "getBrowseRequestId":N(c,63,a[e]);break;case "getLibraryRequestId":N(c,66,a[e]);break;case "isTransformerEnabledForFeature":Wj(c,106,a[e]);break;case "sourceVideoFrameCount":Zj(c,109,a[e]);break;default:pxa.includes(f)&&g.CB(new g.UC("Codegen laipb translator asked to translate message field",""+f))}}catch(h){g.CB(Error("Codegen laipb translator failed to set "+
f))}}MH(c,b)}else c=qH(b||""),FE(c.info,a),a.loadType&&(c=a.loadType,mH(b).loadType=c),FE(bxa(b),a),c=pH(b),b=kH(b).cttAuthInfo,tH().info(a,c,b)};
MH=function(a,b){if(!g.zB("web_csi_action_sampling_enabled")||!kH(b).actionDisabled){var c=g.Uj(a,3);c&&(mH(b).loadType=c);qH(b||"").jspbInfo.push(a);c=pH(b);b=kH(b).cttAuthInfo;tH().jspbInfo(a,c,b)}};
qxa=function(){var a,b,c,d;return(null!=(d=null==SE().resolve(new PE(UD))?void 0:null==(a=VD())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})};
zH=function(a,b,c){if(!g.zB("web_csi_action_sampling_enabled")||!kH(c).actionDisabled){var d=pH(c),e;if(e=g.zB("web_csi_debug_sample_enabled")&&d){(null==SE().resolve(new PE(UD))?0:VD())&&!rxa&&(rxa=!0,zH("gcfl",(0,g.uD)(),c));var f,h,l;e=(null==SE().resolve(new PE(UD))?void 0:null==(f=VD())?void 0:null==(h=f.loggingHotConfig)?void 0:null==(l=h.csiConfig)?void 0:l.debugSampleWeight)||0;if(f=0!==e)b:{f=qxa();if(0<f.length)for(h=0;h<f.length;h++)if(a===f[h]){f=!0;break b}f=!1}f?(e=0!==Yua(d)%e,kH(c).debugTicksExcludedLogged||
(g.zB("web_csi_via_jspb")?(f=new iB,f=Wj(f,105,e),MH(f,c)):(f={},f.debugTicksExcluded=e,BH(f,c))),kH(c).debugTicksExcludedLogged=!0):e=!1}if(!e){b||"_"===a[0]||(e=a,wH.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),wH.mark(e)));e=qH(c||"");e.tick[a]=b||(0,g.uD)();if(e.callback&&e.callback[a])for(e=g.v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=oH(c);e.gelTicks&&(e.gelTicks[a]=!0);f=nH(c);e=b||(0,g.uD)();g.zB("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=kH(c).cttAuthInfo;
"_start"===a?(a=tH(),vH(a,"baseline_"+d)||(b={timestamp:b,cttAuthInfo:f},g.zB("web_csi_via_jspb")?(a=new wna,N(a,1,d),d=g.zB("jspb_sparse_encoded_pivot")?new tB([{}]):new tB,Lj(d,wna,6,qF,a),pF("latencyActionBaselined",d,b)):g.fD("latencyActionBaselined",{clientActionNonce:d},b))):tH().tick(a,d,b,f);sxa(c);return e}}};
txa=function(){var a,b=null==(a=wH.getEntriesByType)?void 0:a.call(wH,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;null==(d=wH.clearMarks)||d.call(wH,c.name)}})};
uxa=function(){switch(gpa()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
xxa=function(a){var b=nxa(),c=yH(),d=g.xB("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!g.zB("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(zH("srt",b.responseStart),1!==a.prerender&&AH(c));a=vxa();0<a&&zH("fpt",a);a=nxa();a.isPerformanceNavigationTiming&&BH({performanceNavigationTiming:!0},void 0);zH("nreqs",a.requestStart,void 0);zH("nress",a.responseStart,void 0);zH("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(zH("nrs",a.redirectStart,void 0),zH("nre",a.redirectEnd,void 0));
0<a.domainLookupEnd-a.domainLookupStart&&(zH("ndnss",a.domainLookupStart,void 0),zH("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(zH("ntcps",a.connectStart,void 0),zH("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=yH()&&0<a.connectEnd-a.secureConnectionStart&&(zH("nstcps",a.secureConnectionStart,void 0),zH("ntcpe",a.connectEnd,void 0));wH&&"getEntriesByType"in wH&&wxa()};
yxa=function(a){function b(f,h,l){h=h.match("_rid")?h.split("_rid")[0]:h;"number"===typeof l&&(l=JSON.stringify(l));f.requestIds?f.requestIds.push({endpoint:h,id:l}):f.requestIds=[{endpoint:h,id:l}]}
var c={};a=g.v(Object.entries(a));for(var d=a.next();!d.done;d=a.next()){var e=g.v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":b(c,d,e);break;case "GetGuide_rid":b(c,d,e);break;case "GetHome_rid":b(c,d,e);break;case "GetPlayer_rid":b(c,d,e);break;case "GetSearch_rid":b(c,d,e);break;case "GetSettings_rid":b(c,d,e);break;case "GetTrending_rid":b(c,d,e);break;case "GetWatchNext_rid":b(c,d,e);break;case "yt_red":c.isRedSubscriber=!!e;break;case "yt_ad":c.isMonetized=!!e}}return c};
zxa=function(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);je()&&a.setAttribute("nonce",je());return c?(a=wH.getEntriesByName(c))&&a[0]&&(a=a[0],c=yH(),zH("rsf_"+b,c+Math.round(a.fetchStart)),zH("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1};
Bxa=function(){var a=[];if(document.querySelector&&wH&&wH.getEntriesByName)for(var b in Axa)if(Axa.hasOwnProperty(b)){var c=Axa[b];zxa(b,c)&&a.push(c)}return a};
wxa=function(){var a=window.location.protocol,b=wH.getEntriesByType("resource");b=g.$s(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=or(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(zH("wffs",xH(b.startTime)),zH("wffe",xH(b.responseEnd)))};
Cxa=function(a,b,c){wH&&wH.measure&&(a.startsWith("measure_")||(a="measure_"+a),c?wH.measure(a,b,c):b?wH.measure(a,b):wH.measure(a))};
Dxa=function(a){var b=NH("aft",a);if(b)return b;b=g.xB((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=NH(b[d],a);if(e)return e}return NaN};
Exa=function(a,b){g.Sa("ytglobal.timing"+(b||"")+"ready_",a)};
NH=function(a,b){if(a=nH(b)[a])return"number"===typeof a?a:a[a.length-1]};
sxa=function(a){var b=NH("_start",a),c=Dxa(a);b&&c&&!Fxa&&($D(Gxa,new lxa(Math.round(c-b),a)),Fxa=!0)};
Hxa=function(a,b){for(var c=g.v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Hxa(a[d],b[d]))return!1;return!0};
vxa=function(){if(wH.getEntriesByType){var a=wH.getEntriesByType("paint");if(a=g.yb(a,function(b){return"first-paint"===b.name}))return xH(a.startTime)}a=wH.timing;
return a.s8?Math.max(0,a.s8):0};
OH=function(a){axa(a);Ixa();txa();a||(g.xB("TIMING_ACTION")&&wB("PREVIOUS_ACTION",g.xB("TIMING_ACTION")),wB("TIMING_ACTION",""))};
Jxa=function(){var a=["pbs","pbu"];g.DB(function(){qH("").info.actionType="watch";a&&wB("TIMING_AFT_KEYS",a);wB("TIMING_ACTION","watch");if(g.zB("web_csi_via_jspb")){var b=g.xB("TIMING_INFO",{}),c=new iB;b=g.v(Object.entries(b));for(var d=b.next();!d.done;d=b.next()){var e=g.v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":jB(c,gB(fB(d),String(e)));break;case "GetGuide_rid":jB(c,gB(fB(d),String(e)));break;case "GetHome_rid":jB(c,gB(fB(d),String(e)));break;case "GetPlayer_rid":jB(c,
gB(fB(d),String(e)));break;case "GetSearch_rid":jB(c,gB(fB(d),String(e)));break;case "GetSettings_rid":jB(c,gB(fB(d),String(e)));break;case "GetTrending_rid":jB(c,gB(fB(d),String(e)));break;case "GetWatchNext_rid":jB(c,gB(fB(d),String(e)));break;case "yt_red":Wj(c,14,!!e);break;case "yt_ad":Wj(c,9,!!e)}}MH(c);c=new iB;c=Wj(c,25,!0);c=Q(c,1,V[rH(g.xB("TIMING_ACTION"))]);(b=g.xB("PREVIOUS_ACTION"))&&Q(c,13,V[rH(b)]);(b=g.xB("CLIENT_PROTOCOL"))&&N(c,33,b);(b=g.xB("CLIENT_TRANSPORT"))&&N(c,34,b);(b=g.wF())&&
"UNDEFINED_CSN"!==b&&N(c,4,b);b=uxa();1!==b&&-1!==b||Wj(c,6,!0);b=lH();(d="cold"===mH().loadType)||(d="cold"===b.yt_lt);if(d&&(N(c,3,"cold"),xxa(b),b=Bxa(),0<b.length))for(b=g.v(b),d=b.next();!d.done;d=b.next())d=d.value,e=new xna,N(e,1,d),Nj(c,83,xna,e);MH(c)}else{c=g.xB("TIMING_INFO",{});for(b in c)c.hasOwnProperty(b)&&oxa(b,c[b]);c={isNavigation:!0,actionType:rH(g.xB("TIMING_ACTION"))};if(b=g.xB("PREVIOUS_ACTION"))c.previousAction=rH(b);if(b=g.xB("CLIENT_PROTOCOL"))c.httpProtocol=b;if(b=g.xB("CLIENT_TRANSPORT"))c.transportProtocol=
b;(b=g.wF())&&"UNDEFINED_CSN"!==b&&(c.clientScreenNonce=b);b=uxa();if(1===b||-1===b)c.isVisible=!0;b="cold"===mH().loadType;d=lH();b||(b="cold"===d.yt_lt);if(b&&(c.loadType="cold",xxa(lH()),b=Bxa(),0<b.length))for(c.resourceInfo=[],b=g.v(b),d=b.next();!d.done;d=b.next())c.resourceInfo.push({resourceCache:d.value});BH(c)}c=lH();b=oH();b.preLoggedGelInfos||(b.preLoggedGelInfos=[]);d=b.preLoggedGelInfos;b=bxa();e=void 0;for(var f=0;f<d.length;f++){var h=d[f];if(h.loadType){e=h.loadType;break}}if("cold"===
mH().loadType&&("cold"===c.yt_lt||"cold"===b.loadType||"cold"===e)){e=nH();f=oH();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var l in e)if(!(l in f))if("number"===typeof e[l])zH(l,NH(l));else if(g.zB("log_repeated_ytcsi_ticks")){h=g.v(e[l]);for(var m=h.next();!m.done;m=h.next())zH(l.slice(1),m.value)}l={};e=!1;if(g.zB("use_infogel_early_logging"))for(d=g.v(d),f=d.next();!f.done;f=d.next())e=f.value,FE(b,e),FE(l,e),e=!0;d=g.v(Object.keys(c));for(f=d.next();!f.done;f=d.next())f=f.value,(f=kxa(f,c[f]))&&
!Hxa(bxa(),f)&&(FE(b,f),FE(l,f),e=!0);e&&BH(l)}Exa(!0);l=g.xB("TIMING_ACTION");g.Ta("ytglobal.timingready_")&&l&&PH("_start")&&Dxa()&&sxa()})()};
Lxa=function(){var a=void 0===a?{}:a;g.DB(function(){Kxa();exa();OH();Exa(!1);a.cttAuthInfo&&(kH().cttAuthInfo=a.cttAuthInfo);wB("TIMING_AFT_KEYS",[]);a.ijb?g.QH({loadType:"hot"}):g.QH({loadType:"warm"});wB("TIMING_ACTION","");delete g.xB("TIMING_INFO",{}).yt_lt;g.DB(AH)(a.startTime,void 0)})()};
RH=function(a,b){b=void 0===b?{}:b;g.DB(function(){Mxa(a);var c=b.sampleRate;if(!g.zB("web_csi_action_sampling_enabled")||void 0===c||1>=c)c=!1;else{var d=pH(a);c=0!==Yua(d)%c}c&&(kH(a).actionDisabled=!0);qH(a||"").info.actionType=a;b.cttAuthInfo&&(kH(a).cttAuthInfo=b.cttAuthInfo);wB(a+"TIMING_ACTION",a);g.DB(AH)(b.startTime,a);c={actionType:rH(a)};(d=g.wF())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);g.QH(c,a);Exa(!0,a)})()};
Mxa=function(a){g.DB(function(){Kxa(a);exa(a);OH(a)})()};
Nxa=function(a,b,c,d){g.DB(oxa)(a,b,c,d)};
g.QH=function(a,b,c){g.DB(BH)(a,b,void 0===c?!1:c)};
SH=function(a,b,c){return g.DB(zH)(a,b,c)};
Oxa=function(a){g.DB(Cxa)("above_the_fold",a,void 0)};
PH=function(a,b){return g.DB(function(){var c=nH(b);return a in c})()};
Pxa=function(a,b){return g.DB(function(){if(PH(a,b))return!1;SH(a,void 0,b);return!0})()};
TH=function(a,b,c){g.DB(function(){if(!PH("_start",c)||PH(a,c))return!1;SH(a,b,c);return!0})()};
Qxa=function(){g.DB(function(){var a=pH();requestAnimationFrame(function(){setTimeout(function(){a===pH()&&SH("ftl",void 0,void 0)},0)})})()};
Kxa=function(a){PH("_start",a)&&SH("aa",void 0,a)};
UH=function(a,b,c,d){this.zN=a;this.kh=b;this.j=c;this.D=d;this.C=void 0;this.B=new Map;a.nx||(a.nx={});a.nx=Object.assign({},Rxa,a.nx)};
Sxa=function(a,b,c,d){if(void 0!==UH.instance){if(d=UH.instance,a=[a!==d.zN,b!==d.kh,c!==d.j,!1,!1,!1,void 0!==d.C],a.some(function(e){return e}))throw new g.UC("InnerTubeTransportService is already initialized",a);
}else UH.instance=new UH(a,b,c,d)};
VH=function(a,b,c){var d=void 0===d?XD:d;var e=Ywa(b,a.zN);if(!e)return Xf(new g.UC("Error: No request builder found for command.",b));var f=e.G(b,c,d);return f?(bH(f.input),new g.Uf(function(h){var l,m,n;return g.I(function(p){if(1==p.j)return m="cors"===(null==(l=f.ju)?void 0:l.mode)?"cors":void 0,a.j.Q_?(n=Txa(a,f.config,m),p.La(2)):g.y(p,Uxa(a,f.config,m),3);2!=p.j&&(n=p.B);h(Vxa(a,f,n));g.za(p)})})):Xf(new g.UC("Error: Failed to build request for command.",b))};
g.WH=function(a,b,c,d,e){e=void 0===e?{Xu:{identity:XD}}:e;var f=void 0===f?!0:f;b.context||(b.context=g.fH(d,f));return new g.Uf(function(h){var l,m,n,p,q;return g.I(function(r){if(1==r.j)return l=Doa(c),m=LB(l)?"same-origin":"cors",a.j.Q_?(n=Txa(a,e,m),r.La(2)):g.y(r,Uxa(a,e,m),3);2!=r.j&&(n=r.B);var t=n;p=Eoa(Doa(c),t);q={input:p,ju:Foa(p),Np:b,config:e};h(Vxa(a,q,n));g.za(r)})})};
Xxa=function(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.D){d=g.v(Wxa);for(var e=d.next();!e.done;e=d.next())e=e.value,a.D[e]&&a.D[e].handleResponse(b,c)}};
Vxa=function(a,b,c){var d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G,H,O,P,Y,la,pa,ua,na,wa,ea,Ea,Z,Qa;return g.I(function(z){switch(z.j){case 1:z.La(2);break;case 3:if((d=z.B)&&!d.isExpired())return z.return(Promise.resolve(d.j()));case 2:if(!(null==(e=b)?0:null==(f=e.Np)?0:f.context)){z.La(4);break}h=b.Np.context;z.La(5);break;case 5:l=g.v([]),m=l.next();case 7:if(m.done){z.La(4);break}n=m.value;return g.y(z,n.Sjb(h),8);case 8:m=l.next();z.La(7);break;case 4:if(null==(p=a.C)||!p.lkb(b.input,b.Np)){z.La(11);
break}return g.y(z,a.C.pjb(b.input,b.Np),12);case 12:return q=z.B,g.zB("kevlar_process_local_innertube_responses_killswitch")||Xxa(a,q,b),z.return(q);case 11:return(u=null==(t=b.config)?void 0:t.cj)&&a.B.has(u)&&g.zB("web_memoize_inflight_requests")?r=a.B.get(u):(x=JSON.stringify(b.Np),G=null!=(F=null==(B=b.ju)?void 0:B.headers)?F:{},b.ju=Object.assign({},b.ju,{headers:Object.assign({},G,c)}),H=Object.assign({},b.ju),"POST"===b.ju.method&&(H=Object.assign({},H,{body:x})),(null==(O=b.config)?0:O.bba)&&
SH(b.config.bba),P=function(){return a.kh.fetch(b.input,H,b.config)},r=P(),u&&a.B.set(u,r)),g.y(z,r,13);
case 13:if((Y=z.B)&&"error"in Y&&(null==(la=Y)?0:null==(pa=la.error)?0:pa.details))for(ua=Y.error.details,na=g.v(ua),wa=na.next();!wa.done;wa=na.next())ea=wa.value,(Ea=ea["@type"])&&-1<Yxa.indexOf(Ea)&&(delete ea["@type"],Y=ea);u&&a.B.has(u)&&a.B.delete(u);(null==(Z=b.config)?0:Z.fba)&&SH(b.config.fba);if(Y||null==(Qa=a.C)||!Qa.Ihb(b.input,b.Np)){z.La(14);break}return g.y(z,a.C.ojb(b.input,b.Np),15);case 15:Y=z.B;case 14:return Xxa(a,Y,b),z.return(Y||void 0)}})};
Uxa=function(a,b,c){var d,e,f,h,l,m,n;return g.I(function(p){if(1==p.j){f=(null==(d=b)?void 0:null==(e=d.Xu)?void 0:e.identity)||XD;m=null==(h=b)?void 0:null==(l=h.Xu)?void 0:l.sessionIndex;var q=Wf(a.j.vD(f,{sessionIndex:m}));return g.y(p,q,2)}n=p.B;return p.return(Promise.resolve(Object.assign({},Zxa(c),n)))})};
Txa=function(a,b,c){var d,e=(null==b?void 0:null==(d=b.Xu)?void 0:d.identity)||XD,f;b=null==b?void 0:null==(f=b.Xu)?void 0:f.sessionIndex;a=a.j.vD(e,{sessionIndex:b});return Object.assign({},Zxa(c),a)};
Zxa=function(a){var b={"Content-Type":"application/json"};g.xB("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=g.xB("EOM_VISITOR_DATA"):g.xB("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=g.xB("VISITOR_DATA"));g.zB("enable_eom_webview_header")&&g.xB("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=g.xB("LOGGED_IN",!1);g.xB("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=g.xB("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=g.xB("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=
a),(a=g.xB("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=g.xB("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=g.xB("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b};
XH=function(){};
YH=function(){};
ZH=function(){};
$H=function(){};
aI=function(){};
bI=function(){};
cI=function(a){this.j=a};
g.dI=function(a,b){if(!$xa){var c=SE();Nsa(c,{cR:aya,E0:cI});var d={dN:{feedbackEndpoint:gH(ZH),modifyChannelNotificationPreferenceEndpoint:gH($H),playlistEditEndpoint:gH(aI),subscribeEndpoint:gH(XH),unsubscribeEndpoint:gH(YH),webPlayerShareEntityServiceEndpoint:gH(bI)}},e=eH.getInstance(),f={};e&&(f.client_location=e);void 0===a&&(a=wpa());void 0===b&&(b=c.resolve(aya));Sxa(d,b,a,f);Nsa(c,{cR:bya,yS:UH.instance});$xa=c.resolve(bya)}return $xa};
dya=function(a,b){var c=g.Ta("ytDebugData.callbacks");c||(c={},g.Sa("ytDebugData.callbacks",c));if(g.zB("web_dd_iu")||cya.includes(a))c[a]=b};
eI=function(){};
eya=function(){eI.instance||(eI.instance=new eI);return eI.instance};
gya=function(a){for(var b="",c=0;c<a.length;c++){var d=a[c];if(0===c)d="M "+d.x.toFixed(1)+","+d.y.toFixed(1);else{var e=fya(a[c-1],a[c-2],d),f=fya(d,a[c-1],a[c+1],!0);d=" C "+(e.x.toFixed(1)+","+e.y.toFixed(1)+" "+f.x.toFixed(1)+","+f.y.toFixed(1)+" "+d.x.toFixed(1)+","+d.y.toFixed(1))}b+=d}return b};
fya=function(a,b,c,d){d=void 0===d?!1:d;b=new hya(b||a,c||a);return{x:a.x+.2*((void 0===d?0:d)?-1*b.j:b.j),y:a.y+.2*((void 0===d?0:d)?-1*b.B:b.B)}};
hya=function(a,b){this.B=this.j=0;this.j=b.x-a.x;this.B=b.y-a.y};
iya=function(a,b,c){var d;if(!b)return 1<=a.length?a[a.length-1]:null;var e=g.v(a);for(d=e.next();!d.done;d=e.next())if(d=d.value,d.width&&d.height&&(c&&d.width>=b||!c&&d.height>=b))return d;for(b=a.length-1;0<=b;b--)if(c&&a[b].width||!c&&a[b].height)return a[b];return a[0]};
jya=function(){this.state=1;this.j=null};
lya=function(a,b,c,d,e,f){var h=void 0===h?"trayride":h;c?(a.Ec(2),g.xsa(c,function(){if(window[h])kya(a,d,h,e);else{a.Ec(3);var l=ysa(c),m=document.getElementById(l);m&&(tsa(l),m.parentNode.removeChild(m));g.AF(new g.UC("Unable to load Botguard","from "+c))}},f)):b?(f=g.kf("SCRIPT"),b instanceof Rd?(f.textContent=rba(b),On(f)):f.textContent=b,f.nonce=je(),document.head.appendChild(f),document.head.removeChild(f),window[h]?kya(a,d,h,e):(a.Ec(4),g.AF(new g.UC("Unable to load Botguard from JS")))):
g.AF(new g.UC("Unable to load VM; no url or JS provided"))};
kya=function(a,b,c,d){a.Ec(5);try{var e=new En({program:b,globalName:c,Oaa:g.zB("att_web_record_metrics")});e.Hba.then(function(){a.Ec(6);d&&d(b)});
a.MR(e)}catch(f){a.Ec(7),f instanceof Error&&g.AF(f)}};
mya=function(a,b){var c=g.fI;a=void 0===a?{}:a;b=void 0===b?3E3:b;return c.hG()?Promise.race([new Promise(function(d,e){setTimeout(function(){setTimeout(function(){setTimeout(function(){e(Error("Timed out waiting for snapshot"))},0)},0)},b)}),
new Promise(function(d){c.hG()?c.K0({vv:a}).then(d):d(null)})]):Promise.resolve(null)};
pya=function(){if(!g.zB("disable_biscotti_fetch_for_ad_blocker_detection")&&!g.zB("disable_biscotti_fetch_entirely_for_all_web_clients")&&Poa()){var a=g.xB("PLAYER_VARS",{});if("1"!=g.kd(a,"privembed",!1)&&!Toa(a)){var b=function(){nya=!0;"google_ad_status"in window?wB("DCLKSTAT",1):wB("DCLKSTAT",2)};
try{g.xsa("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}oya.push(g.uu.Ri(function(){if(!(nya||"google_ad_status"in window)){try{if(b){var c=""+g.ab(b),d=zsa[c];d&&g.CE(d)}}catch(e){}nya=!0;wB("DCLKSTAT",3)}},5E3))}}};
qya=function(){var a=Number(g.xB("DCLKSTAT",0));return isNaN(a)?0:a};
gI=function(){var a=g.Ta("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null};
hI=function(){jya.apply(this,arguments)};
iI=function(){};
rya=function(a,b,c){for(var d=!1,e=g.v(a.Jj.entries()),f=e.next();!f.done;f=e.next())f=g.v(f.value).next().value,"SLOT_TYPE_PLAYER_BYTES"===f.slotType&&"core"===f.Ya&&(d=!0);if(d){a:if(!c){a=g.v(a.Jj.entries());for(c=a.next();!c.done;c=a.next())if(d=g.v(c.value),c=d.next().value,d=d.next().value,"SLOT_TYPE_IN_PLAYER"===c.slotType&&"core"===c.Ya){c=d.layoutId;break a}c=void 0}c?b.vO(c):HG("No triggering layout ID available when attempting to mute.")}};
jI=function(a,b){this.zj=a;this.jl=b};
kI=function(){};
lI=function(){};
oI=function(a){g.J.call(this);var b=this;this.Ld=a;this.Cf=new Map;this.j=new Map;mI(this,"commandExecutorCommand",function(c,d,e){b.gh(c.commands,d,e)});
nI(this,"commandExecutorCommand",function(c,d,e){sya(b,c.commands,d,e)});
mI(this,"clickTrackingParams",function(){});
nI(this,"clickTrackingParams",function(){})};
tya=function(a,b){mI(a,b.Ap(),function(c,d,e){d=void 0===d?{}:d;e=void 0===e?{}:e;b.handle(c,d,e)})};
uya=function(a,b){nI(a,b.Ap(),function(c,d,e){b.vt(c,d,e)})};
mI=function(a,b,c){a.isDisposed();a.Cf.get(b)&&g.zF(Error("Extension name "+b+" already registered"));a.Cf.set(b,c)};
nI=function(a,b,c){a.isDisposed();a.j.get(b)&&g.zF(Error("Extension name "+b+" already registered"));a.j.set(b,c)};
sya=function(a,b,c,d){b=void 0===b?[]:b;a.isDisposed();var e=[],f=[],h=g.v(b);for(b=h.next();!b.done;b=h.next())b=b.value,g.S(b,vya)||g.S(b,wya)?e.push(b):f.push(b);e=g.v(e);for(b=e.next();!b.done;b=e.next())pI(a,b.value,c,d);f=g.v(f);for(b=f.next();!b.done;b=f.next())pI(a,b.value,c,d)};
xya=function(a,b){a.Ld.get().jb("innertubeCommand",{openPopupAction:b})};
yya=function(a,b){a.Ld.get().jb("innertubeCommand",{confirmDialogEndpoint:b})};
pI=function(a,b,c,d){a.isDisposed();b.loggingUrls&&zya(a,"loggingUrls",b.loggingUrls,c,d);b=g.v(Object.entries(b));for(var e=b.next();!e.done;e=b.next()){var f=g.v(e.value);e=f.next().value;f=f.next().value;"openPopupAction"===e?xya(a,f):"confirmDialogEndpoint"===e?yya(a,f):Aya.hasOwnProperty(e)||zya(a,e,f,c,d)}};
Bya=function(a,b,c,d,e){e=void 0===e?{}:e;if((a=a.Cf.get(b))&&"function"===typeof a)try{a(c,d,e)}catch(f){g.zF(f)}else b=new g.UC("Unhandled field",b),g.AF(b)};
zya=function(a,b,c,d,e){if((a=a.j.get(b))&&"function"===typeof a)try{a(c,d,e)}catch(f){g.zF(f)}else b=new g.UC("Unhandled field",b),g.AF(b)};
qI=function(a,b,c){this.Zn=a;this.zaa=b;this.Oa=c};
rI=function(a){this.value=a};
sI=function(a){this.value=a};
tI=function(a){this.value=a};
Cya=function(a){this.value=a};
uI=function(a){this.value=a};
vI=function(a){this.value=a};
Dya=function(){rI.apply(this,arguments)};
Eya=function(a){this.value=a};
Fya=function(a){this.value=a};
Gya=function(a){this.value=a};
Hya=function(a){this.value=a};
Iya=function(a){this.value=a};
wI=function(a){this.value=a};
xI=function(a){this.value=a};
yI=function(a){this.value=a};
zI=function(a){this.value=a};
AI=function(a){this.value=a};
BI=function(){rI.apply(this,arguments)};
CI=function(a){this.value=a};
DI=function(a){this.value=a};
EI=function(a){this.value=a};
FI=function(a){this.value=a};
GI=function(a){this.value=a};
Jya=function(a){this.value=a};
HI=function(a){this.value=a};
Kya=function(a){this.value=a};
Lya=function(a){this.value=a};
Mya=function(a){this.value=a};
Nya=function(a){this.value=a};
II=function(a){this.value=a};
JI=function(a){this.value=a};
KI=function(a){this.value=a};
LI=function(a){this.value=a};
Oya=function(a){this.value=a};
MI=function(a){this.value=a};
NI=function(a){this.value=a};
OI=function(a){this.value=a};
Pya=function(a){this.value=a};
PI=function(a){this.value=a};
QI=function(a){this.value=a};
RI=function(a){this.value=a};
SI=function(a){this.value=a};
TI=function(a){this.value=a};
UI=function(a){this.value=a};
VI=function(a){this.value=a};
WI=function(a){this.value=a};
XI=function(a){this.value=a};
Qya=function(a){this.value=a};
YI=function(a){this.value=a};
ZI=function(a){this.value=a};
$I=function(a){this.value=a};
Rya=function(a){this.value=a};
aJ=function(a){this.value=a};
bJ=function(a){this.value=a};
cJ=function(a){this.value=a};
dJ=function(){rI.apply(this,arguments)};
Sya=function(a){this.value=a};
eJ=function(){rI.apply(this,arguments)};
fJ=function(){rI.apply(this,arguments)};
Tya=function(){rI.apply(this,arguments)};
gJ=function(){rI.apply(this,arguments)};
Uya=function(a){this.value=a};
hJ=function(a){this.value=a};
Vya=function(a){this.value=a};
jJ=function(a,b,c){if(c&&!c.includes(a.layoutType))return!1;b=g.v(b);for(c=b.next();!c.done;c=b.next())if(!iJ(a.Ca,c.value))return!1;return!0};
kJ=function(){return""};
Wya=function(a,b){switch(a){case "TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL":return 0;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED":return 1;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED":return 2;case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return 3;case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return 4;case "TRIGGER_CATEGORY_SLOT_ENTRY":return 5;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED":return 6;case "TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED":return 7;default:return b(a),8}};
lJ=function(a,b,c,d){d=void 0===d?!1:d;tb.call(this,a);this.Mk=c;this.Vu=d;this.args=[];b&&this.args.push(b)};
mJ=function(a,b,c,d){d=void 0===d?!1:d;tb.call(this,a);this.Mk=c;this.Vu=d;this.args=[];b&&this.args.push(b)};
nJ=function(a){var b=new Map;a.forEach(function(c){b.set(c.getType(),c)});
this.j=b};
iJ=function(a,b){return a.j.has(b)};
oJ=function(a,b){a=a.j.get(b);if(void 0!==a)return a.get()};
pJ=function(a){return Array.from(a.j.keys())};
qJ=function(a,b,c){if(c&&c!==a.slotType)return!1;b=g.v(b);for(c=b.next();!c.done;c=b.next())if(!iJ(a.Ca,c.value))return!1;return!0};
Yya=function(a){var b;return(null==(b=Xya.get(a))?void 0:b.qx)||"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED"};
$ya=function(a,b){var c={type:b.slotType,controlFlowManagerLayer:Zya.get(b.Ya)||"CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"};b.slotEntryTrigger&&(c.entryTriggerType=b.slotEntryTrigger.triggerType);1!==b.slotPhysicalPosition&&(c.slotPhysicalPosition=b.slotPhysicalPosition);if(a){c.debugData={slotId:b.slotId};if(a=b.slotEntryTrigger)c.debugData.slotEntryTriggerData=rJ(a);a=b.slotFulfillmentTriggers;c.debugData.fulfillmentTriggerData=[];a=g.v(a);for(var d=a.next();!d.done;d=a.next())c.debugData.fulfillmentTriggerData.push(rJ(d.value));
b=b.slotExpirationTriggers;c.debugData.expirationTriggerData=[];b=g.v(b);for(a=b.next();!a.done;a=b.next())c.debugData.expirationTriggerData.push(rJ(a.value))}return c};
aza=function(a,b){var c={type:b.layoutType,controlFlowManagerLayer:Zya.get(b.Ya)||"CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"};a&&(c.debugData={layoutId:b.layoutId});return c};
rJ=function(a,b){var c={type:a.triggerType};null!=b&&(c.category=b);null!=a.triggeringSlotId&&(c.triggerSourceData||(c.triggerSourceData={}),c.triggerSourceData.associatedSlotId=a.triggeringSlotId);null!=a.triggeringLayoutId&&(c.triggerSourceData||(c.triggerSourceData={}),c.triggerSourceData.associatedLayoutId=a.triggeringLayoutId);return c};
bza=function(a,b,c,d){b={opportunityType:b};a&&(d||c)&&(d=g.mr(d||[],function(e){return $ya(a,e)}),b.debugData=Object.assign({},c&&0<c.length?{associatedSlotId:c}:{},0<d.length?{slots:d}:{}));
return b};
sJ=function(a,b){return function(c){return cza(dza(a),b.slotId,b.slotType,b.slotPhysicalPosition,b.Ya,b.slotEntryTrigger,b.slotFulfillmentTriggers,b.slotExpirationTriggers,c.layoutId,c.layoutType,c.Ya)}};
cza=function(a,b,c,d,e,f,h,l,m,n,p){return{adClientDataEntry:{slotData:$ya(a,{slotId:b,slotType:c,slotPhysicalPosition:d,Ya:e,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:l,Ca:new nJ([])}),layoutData:aza(a,{layoutId:m,layoutType:n,Ya:p,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Lb:new Map,Ca:new nJ([]),lc:{}})}}};
uJ=function(a){this.Fa=a;a=Math.random();var b=this.Fa.get();b=g.tJ(b.J.U().experiments,"html5_debug_data_log_probability");b=Number.isFinite(b)&&0<=b&&1>=b?b:0;this.j=a<b};
dza=function(a){return a.j||a.Fa.get().J.U().L("html5_force_debug_data_for_client_tmp_logs")};
eza=function(a,b,c,d){g.J.call(this);this.Gd=b;this.jc=c;this.Fa=d;this.j=a(this,this,this,this,this);g.L(this,this.j);a=g.v(b);for(b=a.next();!b.done;b=a.next())g.L(this,b.value)};
fza=function(a,b,c,d){HG(c,b,void 0,void 0,c.Vu);c.Mk?vJ(a.jc,d,c.Mk,b):HG("adsClientErrorMessage is missing.",b);wJ(a,b,!0)};
iza=function(a,b,c){if(xJ(a.j,b))if(yJ(a.j,b).D=c?"filled":"not_filled",null===c){zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_SLOT_FULFILLED_EMPTY",b);c=g.v(a.Gd);for(var d=c.next();!d.done;d=c.next())d.value.Ci(b);wJ(a,b,!1)}else{zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_SLOT_FULFILLED_NON_EMPTY",b,c);zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,c);var e=null!=(d=c.GB)?d:oJ(c.Ca,"metadata_type_sub_layouts");if(e)for(d=g.v(e),e=d.next();!e.done;e=d.next())zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,e.value);e=
g.v(a.Gd);for(d=e.next();!d.done;d=e.next())d.value.Di(b);if(xJ(a.j,b))if(yJ(a.j,b).G)wJ(a,b,!1);else{zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_SCHEDULE_LAYOUT_REQUESTED",b,c);try{var f=a.j;if(!yJ(f,b))throw new lJ("Unknown slotState for onLayout",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_STATE_IS_NULL");if(!f.Cf.vr.get(b.slotType))throw new lJ("No LayoutRenderingAdapterFactory registered for slot of type: "+b.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_CANNOT_FIND_MATCHING_LAYOUT_RENDERING_ADAPTER_FACTORY");if(0==
c.layoutExitNormalTriggers.length&&0==c.layoutExitSkipTriggers.length&&0==c.layoutExitMuteTriggers.length&&0==c.layoutExitUserInputSubmittedTriggers.length&&0==c.Uc.length)throw new lJ("Layout has no exit triggers.",void 0,"ADS_CLIENT_ERROR_MESSAGE_EMPTY_LAYOUT_EXIT_TRIGGER");AJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL",c.layoutExitNormalTriggers);AJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED",c.layoutExitSkipTriggers);AJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED",c.layoutExitMuteTriggers);AJ(f,
"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",c.layoutExitUserInputSubmittedTriggers);AJ(f,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED",c.Uc)}catch(n){n instanceof lJ?a.Af(b,c,n,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED"):a.Af(b,c,new lJ("Unexpected error: "+n,void 0,"ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR"),"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED");wJ(a,b,!0);return}yJ(a.j,b).K=!0;try{var h=a.j,l=yJ(h,b),m=h.Cf.vr.get(b.slotType).get().build(h.D,h.B,b,c);m.init();l.layout=c;if(l.C)throw new lJ("Already had LayoutRenderingAdapter registered for slot",
void 0,"ADS_CLIENT_ERROR_MESSAGE_BUILD_DUPLICATE_LAYOUT_RENDERING_ADAPTER");l.C=m;BJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL",c.layoutExitNormalTriggers);BJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED",c.layoutExitSkipTriggers);BJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED",c.layoutExitMuteTriggers);BJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",c.layoutExitUserInputSubmittedTriggers);BJ(h,l,"TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED",c.Uc)}catch(n){gza(a,b);n instanceof lJ?a.Af(b,
c,n,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED"):a.Af(b,c,new lJ("Unexpected error: "+n,void 0,"ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR"),"ADS_CLIENT_ERROR_TYPE_SCHEDULE_LAYOUT_FAILED");wJ(a,b,!0);return}zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);f=g.v(a.Gd);for(d=f.next();!d.done;d=f.next())d.value.Wh(b,c);gza(a,b);hza(a,b)}else a=a.Fa.get(),g.CJ(a.J.U())||DJ(a.J.U())||g.EJ(a.J.U())?a=!0:(HG("Composite VOD on legacy path."),a=!1),a&&HG("slot is unscheduled after been fulfilled.",
b,c)}};
jza=function(a,b,c){"core"!==b.Ya&&zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_RECEIVED",b,c)};
kza=function(a,b,c){zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);a=g.v(a.Gd);for(var d=a.next();!d.done;d=a.next())d.value.Wh(b,c)};
lza=function(a,b,c){a=g.v(a.Gd);for(var d=a.next();!d.done;d=a.next())d.value.Wg(b,c)};
mza=function(a,b,c){zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_ENTERED",b,c);a=g.v(a.Gd);for(var d=a.next();!d.done;d=a.next())d.value.Dc(b,c)};
nza=function(a,b,c,d){zJ(a.jc,Yya(d),b,c);a=g.v(a.Gd);for(var e=a.next();!e.done;e=a.next())e.value.Pc(b,c,d)};
gza=function(a,b){if(xJ(a.j,b)){yJ(a.j,b).K=!1;var c=FJ;b=yJ(a.j,b);var d=[].concat(g.oa(b.Z));saa(b.Z);c(a,d)}};
FJ=function(a,b){b.sort(function(f,h){function l(m){HG("TriggerCategoryOrder enum does not contain trigger category: "+m)}
return f.category===h.category?f.trigger.triggerId.localeCompare(h.trigger.triggerId):Wya(f.category,l)-Wya(h.category,l)});
var c=new Map;b=g.v(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,xJ(a.j,d.slot))if(yJ(a.j,d.slot).K)yJ(a.j,d.slot).Z.push(d);else{oza(a.jc,d.slot,d,d.layout);var e=c.get(d.category);e||(e=[]);e.push(d);c.set(d.category,e)}b=g.v(pza);for(d=b.next();!d.done;d=b.next())e=g.v(d.value),d=e.next().value,e=e.next().value,(d=c.get(d))&&qza(a,d,e);(b=c.get("TRIGGER_CATEGORY_SLOT_EXPIRATION"))&&rza(a,b);(b=c.get("TRIGGER_CATEGORY_SLOT_FULFILLMENT"))&&sza(a,b);(c=c.get("TRIGGER_CATEGORY_SLOT_ENTRY"))&&
tza(a,c)};
qza=function(a,b,c){b=g.v(b);for(var d=b.next();!d.done;d=b.next())d=d.value,d.layout&&uza(a.j,d.slot)&&vza(a,d.slot,d.layout,c)};
rza=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next())wJ(a,c.value.slot,!1)};
sza=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;a:switch(yJ(a.j,c.slot).D){case "not_filled":var d=!0;break a;default:d=!1}d&&(GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_FULFILL_SLOT_REQUESTED",c.slot),a.j.pD(c.slot))}};
tza=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_ENTER_SLOT_REQUESTED",c.slot);for(var d=g.v(a.Gd),e=d.next();!e.done;e=d.next())e.value.Bi(c.slot);try{var f=a.j,h=c.slot,l=yJ(f,h);if(!l)throw new mJ("Got enter request for unknown slot",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_STATE_IS_NULL");if(!l.B)throw new mJ("Tried to enter slot with no assigned slotAdapter",void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");if("scheduled"!==l.j)throw new mJ("Tried to enter a slot from stage: "+
l.j,void 0,"ADS_CLIENT_ERROR_MESSAGE_ILLEGAL_SLOT_STATE");if(HJ(l))throw new mJ("Got enter request for already active slot",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_COLLISION");for(var m=g.v(IJ(f,h.slotType+"_"+h.slotPhysicalPosition).values()),n=m.next();!n.done;n=m.next()){var p=n.value;if(l!==p&&HJ(p))throw new mJ("Trying to enter a slot when a slot of same type is already active.",{activeSlotStatus:p.j},"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");}}catch(q){q instanceof mJ&&q.Mk?(vJ(a.jc,"ADS_CLIENT_ERROR_TYPE_ENTER_SLOT_FAILED",
q.Mk,c.slot),HG(q,c.slot,JJ(a.j,c.slot),void 0,q.Vu)):(vJ(a.jc,"ADS_CLIENT_ERROR_TYPE_ENTER_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",c.slot),HG(q,c.slot));wJ(a,c.slot,!0);continue}c=yJ(a.j,c.slot);"scheduled"!==c.j&&KJ(c.slot,c.j,"enterSlot");c.j="enter_requested";c.B.DH()}};
hza=function(a,b){if(xJ(a.j,b)&&HJ(yJ(a.j,b))&&JJ(a.j,b)&&!uza(a.j,b)){var c;zJ(a.jc,"ADS_CLIENT_EVENT_TYPE_ENTER_LAYOUT_REQUESTED",b,null!=(c=JJ(a.j,b))?c:void 0);a=yJ(a.j,b);"entered"!==a.j&&KJ(a.slot,a.j,"enterLayoutForSlot");a.j="rendering";a.C.startRendering(a.layout)}};
vza=function(a,b,c,d){if(xJ(a.j,b)){var e=a.jc,f;var h=(null==(f=Xya.get(d))?void 0:f.gx)||"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED";zJ(e,h,b,c);a=yJ(a.j,b);"rendering"!==a.j&&KJ(a.slot,a.j,"exitLayout");a.j="rendering_stop_requested";a.C.tf(c,d)}};
wJ=function(a,b,c){if(xJ(a.j,b)){a:switch(yJ(a.j,b).j){case "exit_requested":var d=!0;break a;default:d=!1}if(!d)a:switch(yJ(a.j,b).j){case "rendering_stop_requested":d=!0;break a;default:d=!1}if(d&&(yJ(a.j,b).G=!0,!c))return;if(HJ(yJ(a.j,b)))yJ(a.j,b).G=!0,wza(a,b,c);else{a:switch(yJ(a.j,b).D){case "fill_requested":c=!0;break a;default:c=!1}if(c)yJ(a.j,b).G=!0,xJ(a.j,b)&&(GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_CANCEL_SLOT_FULFILLMENT_REQUESTED",b),b=yJ(a.j,b),b.D="fill_cancel_requested",b.N.SM());else{c=
JJ(a.j,b);(d=a.Fa.get().J.U().experiments.ib("h5_enable_layout_unscheduling_events"))&&(c?a.Wg(b,c):HG(Error("Layout is null for LayoutUnscheduled event."),b,c,void 0,!1));GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_UNSCHEDULE_SLOT_REQUESTED",b);var e=yJ(a.j,b),f=b.slotEntryTrigger,h=e.Aa.get(f.triggerId);h&&(h.Il(f),e.Aa.delete(f.triggerId));f=g.v(b.slotFulfillmentTriggers);for(h=f.next();!h.done;h=f.next()){h=h.value;var l=e.ma.get(h.triggerId);l&&(l.Il(h),e.ma.delete(h.triggerId))}f=g.v(b.slotExpirationTriggers);
for(h=f.next();!h.done;h=f.next())if(h=h.value,l=e.Y.get(h.triggerId))l.Il(h),e.Y.delete(h.triggerId);null!=e.layout&&(f=e.layout,LJ(e,f.layoutExitNormalTriggers),LJ(e,f.layoutExitSkipTriggers),LJ(e,f.layoutExitMuteTriggers),LJ(e,f.layoutExitUserInputSubmittedTriggers),LJ(e,f.Uc));e.N=void 0;null!=e.B&&(e.B.release(),e.B=void 0);null!=e.C&&(e.C.release(),e.C=void 0);e=a.j;yJ(e,b)&&(e=IJ(e,b.slotType+"_"+b.slotPhysicalPosition))&&e.delete(b.slotId);GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_SLOT_UNSCHEDULED",
b);a=g.v(a.Gd);for(e=a.next();!e.done;e=a.next())e=e.value,e.Ei(b),c&&!d&&e.Wg(b,c)}}}};
wza=function(a,b,c){if(xJ(a.j,b)&&HJ(yJ(a.j,b))){var d=JJ(a.j,b);if(d&&uza(a.j,b))vza(a,b,d,c?"error":"abandoned");else{GJ(a.jc,"ADS_CLIENT_EVENT_TYPE_EXIT_SLOT_REQUESTED",b);try{var e=yJ(a.j,b);if(!e)throw new mJ("Cannot exit slot it is unregistered",void 0,"ADS_CLIENT_ERROR_MESSAGE_SLOT_WAS_UNREGISTERED");"enter_requested"!==e.j&&"entered"!==e.j&&"rendering"!==e.j&&KJ(e.slot,e.j,"exitSlot");e.j="exit_requested";if(void 0===e.B)throw e.j="scheduled",new mJ("Cannot exit slot because adapter is not defined",
void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");e.B.FH()}catch(f){f instanceof mJ&&f.Mk?(vJ(a.jc,"ADS_CLIENT_ERROR_TYPE_EXIT_SLOT_FAILED",f.Mk,b),HG(f,b,void 0,void 0,f.Vu)):(vJ(a.jc,"ADS_CLIENT_ERROR_TYPE_EXIT_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",b),HG(f,b))}}}};
xza=function(a){this.slot=a;this.Aa=new Map;this.ma=new Map;this.Y=new Map;this.qa=new Map;this.C=this.layout=this.B=this.N=void 0;this.K=this.G=!1;this.Z=[];this.j="not_scheduled";this.D="not_filled"};
HJ=function(a){return"enter_requested"===a.j||a.isActive()};
yza=function(a,b,c,d,e,f){g.J.call(this);this.Cf=a;this.C=b;this.G=c;this.D=d;this.B=e;this.Fa=f;this.j=new Map};
IJ=function(a,b){return(a=a.j.get(b))?a:new Map};
yJ=function(a,b){return IJ(a,b.slotType+"_"+b.slotPhysicalPosition).get(b.slotId)};
zza=function(a){var b=[];a.j.forEach(function(c){c=g.v(c.values());for(var d=c.next();!d.done;d=c.next())b.push(d.value.slot)});
return b};
xJ=function(a,b){return null!=yJ(a,b)};
uza=function(a,b){a=yJ(a,b);if(b=null!=a.layout)a:switch(a.j){case "rendering":case "rendering_stop_requested":b=!0;break a;default:b=!1}return b};
JJ=function(a,b){(a=yJ(a,b))?null!=a.layout&&!a.layout&&HG("Unexpected empty layout",b):HG("Unexpected undefined slotState",b);return(null==a?void 0:a.layout)||null};
Cza=function(a,b,c){if(0==c.length)throw new mJ("No "+Aza.get(b)+" triggers found for slot.",void 0,Bza(b));c=g.v(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,!a.Cf.Hl.get(d.triggerType))throw new mJ("No trigger adapter registered for "+b+" trigger of type: "+d.triggerType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_TRIGGER_ADAPTER_REGISTERED_FOR_TYPE");};
Bza=function(a){switch(a){case "TRIGGER_CATEGORY_SLOT_ENTRY":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_ENTRY_TRIGGER";case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_EXPIRATION_TRIGGER";case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_FULFILLMENT_TRIGGER";default:return"ADS_CLIENT_ERROR_MESSAGE_INVALID_TRIGGER"}};
AJ=function(a,b,c){c=g.v(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,!a.Cf.Hl.get(d.triggerType))throw new lJ("No trigger adapter registered for "+Aza.get(b)+" trigger of type: "+d.triggerType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_TRIGGER_ADAPTER_REGISTERED_FOR_TYPE");};
BJ=function(a,b,c,d){d=g.v(d);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=a.Cf.Hl.get(e.triggerType);f.Bl(c,e,b.slot,b.layout?b.layout:null);b.qa.set(e.triggerId,f)}};
LJ=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.qa.get(c.triggerId);d&&(d.Il(c),a.qa.delete(c.triggerId))}};
KJ=function(a,b,c){HG("Slot stage was "+b+" when calling method "+c,a)};
Dza=function(a){return MJ(a.Pw).concat(MJ(a.Hl)).concat(MJ(a.Jq)).concat(MJ(a.Rr)).concat(MJ(a.vr))};
MJ=function(a){var b=[];a=g.v(a.values());for(var c=a.next();!c.done;c=a.next())c=c.value,c.Qh&&b.push(c);return b};
Eza=function(a){g.J.call(this);var b=this;this.j=a;this.instance=null;this.addOnDisposeCallback(function(){g.rb(b.instance);b.instance=null})};
NJ=function(a){return new Eza(a)};
Gza=function(a){g.J.call(this);this.Gg=a;this.j=Fza(this)};
Fza=function(a){var b=new eza(function(c,d,e,f){return new yza(a.Gg.Cf,c,d,e,f,a.Gg.Fa)},new Set(Dza(a.Gg.Cf).concat(a.Gg.listeners)),a.Gg.jc,a.Gg.Fa);
g.L(a,b);return b};
OJ=function(a){this.j=a};
PJ=function(a,b,c,d){(a=a.j())||HG("Could not initiate a command router instance.");pI(a,b,c,d)};
QJ=function(){this.listeners=new Set};
RJ=function(){};
Hza=function(a,b){a=b.bgp&&b.bgub;var c=b.upb;if(b.siub&&b.scs&&(a||c)){a=b.siub;var d=b.scs,e=b.bgub,f=b.bgp;b=window;var h=e?"//pagead2.googlesyndication.com/bg/"+g.we(e)+".js":"";e=b.document;var l={};d&&(l._scs_=d);l._bgu_=h;l._bgp_=f;l._li_="v_h.3.0.0.0";c&&(l._upb_=c);(c=b.GoogleTyFxhY)&&"function"==typeof c.push||(c=b.GoogleTyFxhY=[]);c.push(l);c=Le(e).createElement("SCRIPT");c.type="text/javascript";c.async=!0;a=wba(Qd("//tpc.googlesyndication.com/sodar/%{path}"),{path:g.we(a)+".js"});g.Pn(c,
a);(a=(b.GoogleTyFxhYEET||{})[c.src])?a():e.getElementsByTagName("head")[0].appendChild(c)}};
Iza=function(a,b,c,d,e){this.callback=a;this.slot=b;this.Bb=c;this.Yb=d;this.Fa=e;this.j=null};
Kza=function(a,b,c,d){a.j&&HG("Currently active request ongoing for slot. This should never happen",a.slot);a.j=b();a.j.then(function(e){a.j=null;d&&d(e);var f=e.IB?"LAYOUT_TYPE_THROTTLED_AD_BREAK_RESPONSE":"LAYOUT_TYPE_AD_BREAK_RESPONSE",h=a.Bb.get(),l=a.slot.slotId,m=sJ(a.Yb.get(),{slotId:a.slot.slotId,slotType:a.slot.slotType,slotPhysicalPosition:a.slot.slotPhysicalPosition,Ya:a.slot.Ya,slotEntryTrigger:a.slot.slotEntryTrigger,slotFulfillmentTriggers:a.slot.slotFulfillmentTriggers,slotExpirationTriggers:a.slot.slotExpirationTriggers}),
n=SJ(h.eb.get(),f,l),p={layoutId:n,layoutType:f,Ya:"core"};e={layoutId:n,layoutType:f,Lb:new Map,layoutExitNormalTriggers:[new Jza(h.j,l)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new Rya(e)]),lc:m(p)};iza(a.callback,a.slot,e)},function(e){a.j=null;
c&&c();e instanceof $f||fza(a.callback,a.slot,new mJ(e,void 0,"ADS_CLIENT_ERROR_MESSAGE_AD_BREAK_REQUEST_ERROR",!0),"ADS_CLIENT_ERROR_TYPE_FULFILL_SLOT_FAILED")})};
Lza=function(a){if(null==a.j)a.callback.FJ(a.slot);else try{a.j.cancel(),a.j=null,a.callback.FJ(a.slot)}catch(b){a.j=null,fza(a.callback,a.slot,new mJ(b,void 0,"ADS_CLIENT_ERROR_MESSAGE_CANCEL_SLOT_FULFILLMENT_FAILURE"),"ADS_CLIENT_ERROR_TYPE_CANCEL_FULFILL_SLOT_FAILED")}};
TJ=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.AF(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
UJ=function(a,b){return b&&b.test(a)?!0:!1};
Nza=function(a){return(a=Mza&&Mza.exec(a))?a[0]:""};
VJ=function(a){var b=void 0===b?!1:b;return TJ(UJ(a,Oza),a,b,"Trusted Stream URL")};
g.WJ=function(a){var b=void 0===b?!1:b;return TJ(UJ(a,Pza),a,b,"Trusted Image URL")};
Rza=function(a){var b=void 0===b?!1:b;return TJ(UJ(a,Qza),a,b,"Trusted Promoted Video Domain URL")};
Tza=function(a){var b=void 0===b?!1:b;return TJ(UJ(a,Sza),a,b,"Drm Licensor URL")};
Vza=function(a,b){b=void 0===b?!1:b;return TJ(UJ(a,Uza),a,b,"Captions URL")};
Wza=function(a){a=new g.no(a);g.oo(a,document.location.protocol);g.po(a,document.location.hostname);document.location.port&&g.qo(a,document.location.port);return a.toString()};
XJ=function(a){a=new g.no(a);g.oo(a,document.location.protocol);return a.toString()};
g.ZJ=function(a,b,c){c=void 0===c?{}:c;this.start=a;this.end=b;this.active=!0;this.color="";this.xm=0;this.B=Xza++;this.id=c.id||"";this.priority=c.priority||9;this.visible=c.visible||!1;this.style=c.style||YJ.AD_MARKER;this.namespace=c.namespace||"";if(a=c.color)a=a.toString(16),this.color="#"+Array(7-a.length).join("0")+a;this.tooltip=c.tooltip;this.icons=c.icons?c.icons.filter(function(d){return g.nr(d.thumbnails,function(e){return g.WJ(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
Yza=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
Zza=function(a,b){switch(a.style){case YJ.CHAPTER_MARKER:return b?8:5;case YJ.AD_MARKER:return 6;case YJ.TIME_MARKER:return Number.POSITIVE_INFINITY;default:return 0}};
g.$za=function(a,b){return a.start-b.start||a.priority-b.priority||a.B-b.B};
g.$J=function(a){return"crn_"+a};
g.aK=function(a){return"crx_"+a};
aAa=function(a,b,c,d,e,f,h,l,m){this.slot=b;this.Xf=c;this.Oa=h;this.Ja=l;this.Mc=m;this.j=new Iza(a,b,d,e,f)};
bAa=function(a){var b;null==(b=a.Mc)||b.get().Yt(oJ(a.slot.Ca,"metadata_type_cue_point").identifier)};
cAa=function(a,b,c,d,e,f){this.slot=b;this.Xf=c;this.j=new Iza(a,b,d,e,f)};
dAa=function(a,b){this.callback=a;this.slot=b};
eAa=function(a,b){return qJ(a,b.Kd,b.slotType)?!0:!1};
fAa=function(){};
bK=function(a,b,c,d,e,f,h){this.Xf=a;this.Bb=b;this.Yb=c;this.Fa=d;this.Oa=e;this.Ja=f;this.Mc=h};
cK=function(){};
gAa=function(a,b,c,d,e,f){this.callback=a;this.slot=b;this.layout=c;this.j=d;this.Tb=e;this.eb=f};
iAa=function(a){if(oJ(a.slot.Ca,"metadata_type_allow_pause_ad_break_request_slot_reschedule")){var b=hAa(a,a.slot);dK(a.Tb.get(),"OPPORTUNITY_TYPE_PAUSE_AD_BREAK_REQUEST_SLOT_RESCHEDULE",function(){return[b]})}};
hAa=function(a,b){var c=eK(a.eb.get(),a.slot.slotType),d=Object,e=d.assign;a=a.slot;if(b.slotEntryTrigger){var f=b.slotEntryTrigger;f=null!=f.triggeringSlotId&&f.triggeringSlotId===b.slotId?f.clone(c):f}else f=void 0;return e.call(d,{},a,{slotId:c,slotEntryTrigger:f,slotFulfillmentTriggers:jAa(b.slotId,c,b.slotFulfillmentTriggers),slotExpirationTriggers:jAa(b.slotId,c,b.slotExpirationTriggers)})};
jAa=function(a,b,c){var d=[];c=g.v(c);for(var e=c.next();!e.done;e=c.next()){var f=d,h=f.push;e=e.value;e=null!=e.triggeringSlotId&&e.triggeringSlotId===a?e.clone(b):e;h.call(f,e)}return d};
g.fK=function(a,b){for(var c=g.v(Object.keys(b)),d=c.next(),e={};!d.done;e={placeholder:e.placeholder},d=c.next())d=d.value,e.placeholder=b[d],a=a.replace(new RegExp("\\$"+d,"gi"),function(f){return function(){return f.placeholder}}(e));
return a};
kAa=function(a,b,c){this.j=a;this.slot=b;this.layout=c};
lAa=function(a,b,c){b.layoutId!==a.layout.layoutId?a.j.Af(a.slot,b,new lJ("Unknown layout received. Required LayoutId: "+a.layout.layoutId+("and LayoutType: "+a.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED"):c()};
gK=function(a,b,c,d){g.TF.call(this);this.callback=a;this.C=d;this.j=[];this.B=new kAa(a,b,c)};
iK=function(a,b,c,d,e,f,h){e=oJ(c.Ca,e);a=hK(a);var l=Kd(function(){d.Dc(b,c)});
h.push(f(e,a,c.layoutId,{adsClientData:c.lc},function(){l()}))};
jK=function(a,b,c,d,e,f,h,l,m){if(b===a)if(m){if(m===l.layoutId){a:{a=g.v(c.keys());for(b=a.next();!b.done;b=a.next())if(b=b.value,"SLOT_TYPE_PLAYER_BYTES"===b.slotType&&f===c.get(b).layoutId){c=!0;break a}c=!1}c?d.J.sendVideoStatsEngageEvent(1,void 0,2):e?e():HG("Tried to call engagePingCallback but it is null",h,l)}}else HG("Companion AdUxClick received without a layoutId",h,l)};
kK=function(a){var b,c,d,e,f;return!(null==(b=a.get("active_view_viewable"))||!b.length)||!(null==(c=a.get("active_view_measurable"))||!c.length)||!(null==(d=a.get("active_view_fully_viewable_audible_half_duration"))||!d.length)||!(null==(e=a.get("audio_audible"))||!e.length)||!(null==(f=a.get("audio_measurable"))||!f.length)};
lK=function(a){var b,c;return null!=(c=null==a?void 0:null==(b=a.activeViewTracking)?void 0:b.trafficType)?c:"ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"};
mK=function(a){var b,c;return new Map([["impression",a.impressionPings||[]],["error",a.errorPings||[]],["mute",a.mutePings||[]],["unmute",a.unmutePings||[]],["pause",a.pausePings||[]],["rewind",a.rewindPings||[]],["resume",a.resumePings||[]],["skip",a.skipPings||[]],["close",a.closePings||[]],["progress",a.progressPings||[]],["clickthrough",a.clickthroughPings||[]],["fullscreen",a.fullscreenPings||[]],["active_view_viewable",a.activeViewViewablePings||[]],["active_view_measurable",a.activeViewMeasurablePings||
[]],["active_view_fully_viewable_audible_half_duration",a.activeViewFullyViewableAudibleHalfDurationPings||[]],["audio_audible",(null==(b=a.activeViewTracking)?void 0:b.activeViewAudioAudiblePings)||[]],["audio_measurable",(null==(c=a.activeViewTracking)?void 0:c.activeViewAudioMeasurablePings)||[]],["end_fullscreen",a.endFullscreenPings||[]],["channel_clickthrough",a.channelClickthroughPings||[]],["abandon",a.abandonPings||[]],["start",a.startPings||[]],["first_quartile",a.firstQuartilePings||[]],
["midpoint",a.secondQuartilePings||[]],["third_quartile",a.thirdQuartilePings||[]],["complete",a.completePings||[]],["unmuted_impression",a.unmutedImpressionPings||[]],["unmuted_error",a.unmutedErrorPings||[]],["unmuted_mute",a.unmutedMutePings||[]],["unmuted_unmute",a.unmutedUnmutePings||[]],["unmuted_pause",a.unmutedPausePings||[]],["unmuted_resume",a.unmutedResumePings||[]],["unmuted_close",a.unmutedClosePings||[]],["unmuted_progress",a.unmutedProgressPings||[]],["unmuted_clickthrough",a.unmutedClickthroughPings||
[]],["unmuted_fullscreen",a.unmutedFullscreenPings||[]],["unmuted_end_fullscreen",a.unmutedEndFullscreenPings||[]],["unmuted_abandon",a.unmutedAbandonPings||[]],["unmuted_start",a.unmutedStartPings||[]],["unmuted_first_quartile",a.unmutedFirstQuartilePings||[]],["unmuted_midpoint",a.unmutedSecondQuartilePings||[]],["unmuted_third_quartile",a.unmutedThirdQuartilePings||[]],["unmuted_complete",a.unmutedCompletePings||[]],["unmuted_skip",a.unmutedSkipPings||[]]])};
mAa=function(a){switch(a){case "abandon":return"unmuted_abandon";case "active_view_fully_viewable_audible_half_duration":return null;case "active_view_measurable":return null;case "active_view_viewable":return null;case "audio_audible":return null;case "audio_measurable":return null;case "channel_clickthrough":return null;case "clickthrough":return"unmuted_clickthrough";case "close":return"unmuted_close";case "companion_engagement":return null;case "complete":return"unmuted_complete";case "end_fullscreen":return"unmuted_end_fullscreen";
case "error":return"unmuted_error";case "first_quartile":return"unmuted_first_quartile";case "fullscreen":return"unmuted_fullscreen";case "impression":return"unmuted_impression";case "midpoint":return"unmuted_midpoint";case "mute":return"unmuted_mute";case "pause":return"unmuted_pause";case "progress":return"unmuted_progress";case "resume":return"unmuted_resume";case "rewind":return null;case "skip":return"unmuted_skip";case "start":return"unmuted_start";case "third_quartile":return"unmuted_third_quartile";
case "unmute":return"unmuted_unmute";case "seek":return null;case "unmuted_abandon":case "unmuted_clickthrough":case "unmuted_complete":case "unmuted_end_fullscreen":case "unmuted_error":case "unmuted_first_quartile":case "unmuted_fullscreen":case "unmuted_impression":case "unmuted_midpoint":case "unmuted_mute":case "unmuted_pause":case "unmuted_close":case "unmuted_progress":case "unmuted_resume":case "unmuted_start":case "unmuted_third_quartile":case "unmuted_unmute":case "unmuted_skip":return null;
default:return null}};
nK=function(a,b,c,d,e){e=void 0===e?null:e;this.C=a;this.Oa=b;this.layoutId=d;this.D=0;this.K=null;this.G=void 0;this.j=new Set;this.B=Array.from(this.C.get("progress")||[]);this.B.sort(function(f,h){return(f.offsetMilliseconds||0)-(h.offsetMilliseconds||0)});
this.N={adPlacementConfig:c,qY:e}};
oK=function(){return["metadata_type_ad_placement_config"]};
hK=function(a){return nAa(a.Oa.get(),a.N)};
pK=function(a,b,c){for(c=void 0===c?!1:c;a.D<a.B.length;){var d=a.B[a.D];if(d.offsetMilliseconds<=b||c)oAa(a,"progress",[d]),a.D++;else break}};
qK=function(a,b){return a.j.has(b)};
pAa=function(a){return a.B.every(function(b){return b.hasOwnProperty("offsetMilliseconds")})};
qAa=function(a,b,c){a.K=b;a.G=c};
oAa=function(a,b,c){var d,e=a.Oa.get(),f=a.layoutId,h=null!=(d=a.K)?d:void 0;a=a.G;c=void 0===c?[]:c;if(d=rAa(e.B.get(),f))for(b=e.Eb.get().Hh(f,b),f=rK(e,sAa(d),d,h,a),c=g.v(c),h=c.next();!h.done;h=c.next())h=h.value,h.baseUrl&&e.WA.send(h.baseUrl,f,b,h.attributionSrcMode);else HG("Trying to track from an unknown layout.",void 0,void 0,{layoutId:f,trackingType:b})};
tAa=function(a,b,c,d,e){SF.call(this,"banner-image",a,b,c,d,e)};
uAa=function(a,b,c,d,e,f,h,l,m){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Hb=m;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);this.adPlacementConfig=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,this.adPlacementConfig,c.layoutId)};
vAa=function(){var a=["metadata_type_banner_image_layout_view_model","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
wAa=function(a,b,c,d,e){SF.call(this,"action-companion",a,b,c,d,e)};
xAa=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
yAa=function(){var a=["metadata_type_action_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
zAa=function(a,b,c,d,e){SF.call(this,"image-companion",a,b,c,d,e)};
AAa=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
BAa=function(){var a=["metadata_type_image_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
CAa=function(a,b,c,d,e){SF.call(this,"shopping-companion",a,b,c,d,e)};
DAa=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
EAa=function(){var a=["metadata_type_shopping_companion_carousel_renderer","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_SHOPPING"]}};
FAa=function(a){var b;if("AD_VIDEO_PROGRESS_KIND_PERCENT"!==(null==(b=a.adVideoOffset)?void 0:b.kind))return!1;var c;return null!=(null==(c=a.adVideoOffset)?void 0:c.percent)};
GAa=function(a){var b;if("AD_VIDEO_PROGRESS_KIND_MILLISECONDS"!==(null==(b=a.adVideoOffset)?void 0:b.kind))return!1;var c;return null!=(null==(c=a.adVideoOffset)?void 0:c.milliseconds)&&!isNaN(Number(a.adVideoOffset.milliseconds))};
HAa=function(a,b,c,d){this.Hb=a;this.layoutId=c;this.G=d;this.B=[];this.j=[];this.C=this.D=0;a=g.v(b);for(b=a.next();!b.done;b=a.next())switch(b=b.value,c=void 0,null==(c=b.adVideoOffset)?void 0:c.kind){case "AD_VIDEO_PROGRESS_KIND_PERCENT":FAa(b)?this.B.push(b):HG("Invalid AdVideoProgressPercentCommand");break;case "AD_VIDEO_PROGRESS_KIND_MILLISECONDS":GAa(b)?this.j.push(b):HG("Invalid AdVideoProgressMillisecondsCommand");break;default:HG("Unknown or invalid AdVideoProgressOffSet kind")}this.B.sort(function(e,
f){return e.adVideoOffset.percent-f.adVideoOffset.percent});
this.j.sort(function(e,f){return Number(e.adVideoOffset.milliseconds)-Number(f.adVideoOffset.milliseconds)})};
IAa=function(a,b,c,d,e,f){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.Qh=!0;this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
JAa=function(){var a=["metadata_type_action_companion_ad_renderer"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
KAa=function(a,b,c,d,e,f,h){this.callback=a;this.slot=b;this.layout=c;this.Ja=d;this.Oa=e;this.Fa=f;this.Eb=h;a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
LAa=function(a,b,c,d,e,f){gK.call(this,a,b,c,d);this.Ja=e;this.G=f;this.D=!1};
MAa=function(a,b,c,d,e){SF.call(this,"top-banner-image-text-icon-buttoned",a,b,c,d,e)};
NAa=function(a,b,c,d,e,f){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.Qh=!0;this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
OAa=function(){var a=["metadata_type_top_banner_image_text_icon_buttoned_layout_view_model"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
sK=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?!1:f;SF.call(this,"ad-action-interstitial",a,b,c,d);this.interactionLoggingClientData=d;this.TR=e;this.FK=f};
tK=function(a,b,c,d,e){gK.call(this,a,b,c,d);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,e,a,c.layoutId)};
PAa=function(){var a=["metadata_type_ad_action_interstitial_renderer"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_ENDCAP"]}};
uK=function(a,b){return jJ(a,b.Kd,b.Pe)?!0:!1};
vK=function(a,b,c){this.j=a;this.Tb=b;this.eb=c};
QAa=function(a,b,c,d,e){SF.call(this,"ads-engagement-panel",a,b,c,d,e)};
RAa=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);a=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
SAa=function(){var a=["metadata_type_ads_engagement_panel_renderer","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON"]}};
TAa=function(a,b,c,d,e,f,h,l,m){gK.call(this,a,b,c,d);this.Oa=e;this.Vc=f;this.K=l;this.Hb=m;this.Qh=!0;this.D=null;this.G=oJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Vc().Gd.add(this);this.adPlacementConfig=oJ(c.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,this.adPlacementConfig,c.layoutId)};
UAa=function(){var a=["metadata_type_top_banner_image_text_icon_buttoned_layout_view_model","metadata_type_linked_player_bytes_layout_id"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
VAa=function(a,b,c,d,e,f){this.pc=a;this.Oa=b;this.Vc=c;this.j=d;this.Eb=e;this.Hb=f};
WAa=function(a,b,c){SF.call(this,"player-underlay",a,{},b,c);this.interactionLoggingClientData=c};
wK=function(a,b,c,d){gK.call(this,a,b,c,d)};
XAa=function(a){this.pc=a};
YAa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Oa=d;this.j=e;a=oJ(this.layout.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
ZAa=function(){var a=["metadata_type_client_forecasting_ad_renderer"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_FORECASTING"]}};
$Aa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Oa=d;this.j=e;a=oJ(this.layout.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId)};
xK=function(a,b,c,d){this.Fa=a;this.Oa=b;this.j=c;this.Eb=d};
aBa=function(a,b,c,d){SF.call(this,"player-overlay-layout",a,{},c,d);this.videoAdDurationSeconds=b;this.interactionLoggingClientData=d};
bBa=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Ja=e;this.Oa=f;this.K=h;this.G=l;this.D=!1;this.N=oJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
yK=function(a,b,c,d,e,f,h,l){gK.call(this,a,b,c,d);this.Ja=e;this.Oa=f;this.K=h;this.G=l;this.D=!1;this.N=oJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
cBa=function(){return{Kd:["metadata_type_instream_ad_player_overlay_renderer","metadata_type_player_bytes_callback","metadata_type_linked_player_bytes_layout_id","METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"],Pe:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]}};
dBa=function(a,b,c){SF.call(this,"ad-message",a,void 0,b,c)};
zK=function(a,b,c,d,e,f){gK.call(this,c,a,b,d);this.Ja=e;this.Fa=f};
eBa=function(){return{Kd:["metadata_type_valid_ad_message_renderer"],Pe:["LAYOUT_TYPE_TEXT_BANNER_OVERLAY"]}};
AK=function(a,b,c,d,e,f,h,l,m){return uK(c,cBa())?new yK(a,b,c,d,e,f,h,l):uK(c,{Kd:["metadata_type_player_overlay_layout_renderer","metadata_type_player_bytes_callback","metadata_type_linked_player_bytes_layout_id","METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"],Pe:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]})?new bBa(a,b,c,d,e,f,h,l):uK(c,PAa())?new tK(a,b,c,d,f):uK(c,eBa())?new zK(b,c,a,d,e,m):uK(c,{Kd:["metadata_type_instream_ad_player_overlay_renderer"],Pe:["LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY"]})?
new LAa(a,b,c,d,e,l):null};
fBa=function(a,b,c,d,e,f){this.pc=a;this.Ja=b;this.Oa=c;this.B=d;this.j=e;this.Fa=f};
gBa=function(a,b,c,d){this.Ja=a;this.Oa=b;this.Fa=c;this.Eb=d};
hBa=function(a,b,c,d,e,f,h,l,m,n,p){g.J.call(this);this.callback=a;this.j=b;this.slot=c;this.layout=d;this.ke=e;this.Ie=f;this.Wa=h;this.Mc=l;this.Ce=m;this.Vc=n;this.Ja=p;this.Qh=!0;this.B=void 0;this.C=!1};
BK=function(a,b,c,d,e,f){g.J.call(this);this.callback=a;this.Ce=b;this.Ja=c;this.Qc=d;this.Vc=e;this.Fa=f;this.Qh=!0;this.GO=!1};
iBa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){BK.call(this,a,d,e,f,q,r);this.Wa=b;this.Mc=c;this.C=h;this.slot=l;this.layout=m;this.ke=n;this.D=p;this.B=[];this.j=-1;this.K=this.G=!1};
lBa=function(a,b,c){var d=a.B[a.j];a.j===a.B.length-1&&HG("Unexpected skip with target requested during the last sublayout",d.wc(),d.sb(),{requestingSlot:b,requestingLayout:c});if(c.layoutId!==CK(d,b,c))HG("onSkipWithAdPodSkipTargetRequested for a PlayerBytes layout that is not currently active",d.wc(),d.sb(),{requestingSlot:b,requestingLayout:c});else{var e=oJ(d.sb().Ca,"metadata_type_ad_pod_skip_target");if(e&&0<e&&e<a.B.length){a:{for(var f=e;f<a.B.length;){if(e===oJ(a.B[f].sb().Ca,"metadata_type_ad_pod_skip_index")){e=
f;break a}f++}e=void 0}void 0===e?HG("Skip-to-index was requested but target index was not found",d.wc(),d.sb(),{requestingSlot:b,requestingLayout:c}):a.rf()?jBa(a,d.sb(),e,"skipped"):kBa(a,d.wc(),d.sb(),e)}else HG("Invalid ad pod skip target index",d.wc(),d.sb(),{requestingSlot:b,requestingLayout:c})}};
CK=function(a,b,c){var d=oJ(a.sb().Ca,"metadata_type_linked_in_player_layout_id");return d?d:(HG("Tried to retrieve Linked InPlayer LayoutId but missing ClientMetadata",a.wc(),a.sb(),{requestingSlot:b,requestingLayout:c}),null)};
mBa=function(a,b,c){DK(a,a.slot,b,c,function(){var d=a.N;d?(a.N=void 0,d(b)):HG("Expected further action after sublayout exit is confirmed",a.slot,a.layout)})};
oBa=function(a,b,c,d){a.rf()?jBa(a,c,a.j+1,d):DK(a,b,c,d,function(){nBa(a,a.j+1)})};
jBa=function(a,b,c,d){DK(a,a.slot,b,d,function(){if(c>=a.B.length+1||0>c)HG("Unexpected target sublayout index",a.slot,a.layout,{targetSubLayoutIndex:c});else{a.j=c;if(c===a.B.length){var e=a.Wa.get().nf(1).clientPlaybackNonce;EK(a.D,a.layout)}else e=a.B[c].sb().layoutId;a.Mc.get().finishSegmentByCpn(b.layoutId,e)}})};
kBa=function(a,b,c,d){DK(a,b,c,"skipped",function(){nBa(a,d)})};
DK=function(a,b,c,d,e){if(!a.K){var f=a.B[a.j];f?(f.sb().layoutId!==c.layoutId&&HG("SubLayout mismatch in exitSubLayout",b,c,{exitingSubLayout:c.layoutId,activeSubLayout:f.sb().layoutId}),a.K=!0,f.tf(f.sb(),d),nza(a.C,b,c,d),a.K=!1,a.G=!1,a.Z?(a.Z(),pBa(a.Qc.get())):e()):HG("No active adapter when exitSubLayout in PlayerBytesVodCompositeLayoutRenderingAdapter. This should never happen.",b,c)}};
nBa=function(a,b){a.j===a.B.length-1?(a.j++,EK(a.D,a.layout),pBa(a.Qc.get())):qBa(a,b)};
qBa=function(a,b){if(-1===a.j&&(a.callback.Dc(a.slot,a.layout),0<b)){HG("Invalid index for playLayoutAtIndexOrExit when no ad has played yet.",a.slot,a.layout,{indexToPlay:b,layoutId:a.layout.layoutId});return}a.j=b;a.G=!0;b=a.B[a.j];if(0<a.j){a=a.Qc.get();a.B=!1;var c={};a.j&&a.videoId&&(c.cttAuthInfo={token:a.j,videoId:a.videoId});RH("ad_to_ad",c)}b.startRendering(b.sb())};
rBa=function(a){return!a.BA.isPlaying()&&a.state.isPlaying()};
FK=function(a,b,c){return a<b?!1:null!=c?c<=b:a<=b+1};
GK=function(a){var b=[];if(a){a=g.v(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=g.v(c.value);c=d.next().value;d=d.next().value;void 0!==d&&(d="boolean"===typeof d?""+ +d:(""+d).replace(/[:,=]/g,"_"),b.push(c+"."+d))}}return b.join(";")};
HK=function(a,b,c){b=void 0===b?{}:b;this.errorCode=a;this.details=b;this.severity=void 0===c?0:c};
IK=function(a){return 1===a||2===a};
JK=function(a,b){b=void 0===b?0:b;if(a instanceof HK)return a;a=a&&a instanceof Error?a:Error(""+a);IK(b)?g.zF(a):g.AF(a);return new HK(1===b?"player.fatalexception":"player.exception",{name:""+a.name,message:""+a.message},b)};
g.tBa=function(a){return(a=sBa[a.toString()])?a:"LICENSE"};
uBa=function(a,b){function c(){var d=g.Ja.apply(0,arguments);a.removeEventListener("playing",c);b.apply(null,g.oa(d))}
a.addEventListener("playing",c)};
KK=function(){var a=g.Ta("yt.player.utils.videoElement_");a||(a=g.kf("VIDEO"),g.Sa("yt.player.utils.videoElement_",a));return a};
LK=function(a){var b=KK();return!!(b&&b.canPlayType&&b.canPlayType(a))};
OK=function(a){if(/opus/.test(a)&&g.MK&&!fv("38")&&!g.hC())return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(NK&&window.ManagedMediaSource&&window.ManagedMediaSource.isTypeSupported)return window.ManagedMediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Koa())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!LK(a)};
vBa=function(a){try{var b=OK('video/mp4; codecs="avc1.42001E"')||OK('video/webm; codecs="vp9"');return(OK('audio/mp4; codecs="mp4a.40.2"')||OK('audio/webm; codecs="opus"'))&&(b||!a)||LK('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
wBa=function(){var a=KK();return!(!a.webkitSupportsPresentationMode||"function"!==typeof a.webkitSetPresentationMode)};
xBa=function(){var a=KK();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
g.PK=function(){HC.apply(this,arguments)};
QK=function(a,b,c,d,e,f){this.sampleRate=void 0===a?0:a;this.numChannels=void 0===b?0:b;this.spatialAudioType=void 0===c?"SPATIAL_AUDIO_TYPE_NONE":c;this.j=void 0===d?!1:d;this.C=void 0===e?0:e;this.B=void 0===f?0:f};
SK=function(a,b,c,d,e,f,h,l,m){this.width=a;this.height=b;this.quality=f||yBa(a,b);this.j=g.RK[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&"UNKNOWN"!==d&&"RECTANGULAR"!==d?0:e;this.projectionType=d?"EQUIRECTANGULAR"===d&&2===e?"EQUIRECTANGULAR_THREED_TOP_BOTTOM":d:"UNKNOWN";(a=h)||(a=g.RK[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+("EQUIRECTANGULAR"===c||"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===c||"MESH"===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));
this.qualityLabel=a;this.B=l||"";this.primaries=m||""};
yBa=function(a,b){var c=Math.max(a,b);a=Math.min(a,b);b=TK[0];for(var d=0;d<TK.length;d++){var e=TK[d],f=g.RK[e];if(c>=1.3*Math.floor(16*f/9)||a>=1.3*f)return b;b=e}return"tiny"};
VK=function(a,b,c){c=void 0===c?{}:c;this.id=a;this.mimeType=b;0<c.Rb||(c.Rb=16E3);Object.assign(this,c);a=g.v(this.id.split(";"));this.itag=a.next().value;this.j=a.next().value;this.containerType=zBa(b);this.ub=UK[this.itag]||""};
WK=function(a){return"9"===a.ub||"("===a.ub||"9h"===a.ub||"(h"===a.ub};
ABa=function(a){return"H"===a.ub||"h"===a.ub};
BBa=function(a){return"9h"===a.ub||"(h"===a.ub};
XK=function(a){return"1"===a.ub||"1h"===a.ub};
YK=function(a){return"mac3"===a.ub||"meac3"===a.ub||"m"===a.ub};
ZK=function(a){return"MAC3"===a.ub||"MEAC3"===a.ub||"M"===a.ub};
g.$K=function(a){return 1===a.containerType};
CBa=function(a){return"("===a.ub||"(h"===a.ub||"H"===a.ub};
aL=function(a){return"application/x-mpegURL"===a.mimeType};
bL=function(a,b){return{itag:+a.itag,lmt:b?0:a.lastModified,xtags:a.j||""}};
cL=function(a,b){a=bL(a,b);return a.itag+";"+(a.lmt||0)+";"+a.xtags};
DBa=function(a){var b=navigator.mediaCapabilities;if(null==b||!b.decodingInfo||"f"===a.ub)return Promise.resolve();var c={type:a.audio&&a.video?"file":"media-source"};a.video&&(c.video={contentType:a.mimeType,width:a.video.width||640,height:a.video.height||360,bitrate:8*a.Rb||1E6,framerate:a.video.fps||30});a.audio&&(c.audio={contentType:a.mimeType,channels:""+(a.audio.numChannels||2),bitrate:8*a.Rb||128E3,samplerate:a.audio.sampleRate||44100});return b.decodingInfo(c).then(function(d){a.B=d})};
EBa=function(a){return/(opus|mp4a|dtse|ac-3|ec-3|iamf)/.test(a)};
FBa=function(a){return/(vp9|vp09|vp8|avc1|av01)/.test(a)};
dL=function(a){return a.includes("vtt")||a.includes("text/mp4")};
zBa=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
eL=function(a,b,c,d,e,f){var h=new QK;b in g.RK||(b="small");"light"===b&&(b="tiny");d&&e?(e=Number(e),d=Number(d)):(e=g.RK[b],d=Math.round(16*e/9));f=new SK(d,e,0,null,void 0,b,f);a=unescape(a.replace(/&quot;/g,'"'));return new VK(c,a,{audio:h,video:f})};
fL=function(a){var b="id="+a.id;a.video&&(b+=", res="+a.video.qualityLabel);var c,d;return b+", byterate=("+(null==(c=a.Yu)?void 0:c.toFixed(0))+", "+(null==(d=a.Rb)?void 0:d.toFixed(0))+")"};
gL=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
hL=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
iL=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
jL=function(a,b){return 0<=iL(a,b)};
GBa=function(a,b){if(!a)return NaN;b=iL(a,b);return 0<=b?a.start(b):NaN};
kL=function(a,b){if(!a)return NaN;b=iL(a,b);return 0<=b?a.end(b):NaN};
lL=function(a){return a&&a.length?a.end(a.length-1):NaN};
mL=function(a,b){a=kL(a,b);return 0<=a?a-b:0};
nL=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return gL(d,e)};
oL=function(a,b,c,d){g.TF.call(this);var e=this;this.Pd=a;this.start=b;this.end=c;this.isActive=d;this.appendWindowStart=0;this.appendWindowEnd=Infinity;this.timestampOffset=0;this.dX={error:function(){!e.isDisposed()&&e.isActive&&e.oa("error",e)},
updateend:function(){!e.isDisposed()&&e.isActive&&e.oa("updateend",e)}};
g.UF(this.Pd,this.dX);this.iG=this.isActive};
pL=function(a,b,c,d,e,f){g.TF.call(this);var h=this;this.dc=a;this.lh=b;this.id=c;this.containerType=d;this.ub=e;this.jh=f;this.kP=this.nE=this.Mf=null;this.dH=!1;this.appendWindowStart=this.timestampOffset=0;this.PM=gL([],[]);this.SC=!1;this.mE=[];this.pB=HBa?[]:void 0;this.Dd=function(m){return h.oa(m.type,h)};
var l;if(null==(l=this.dc)?0:l.addEventListener)this.dc.addEventListener("updateend",this.Dd),this.dc.addEventListener("error",this.Dd)};
qL=function(){return window.SourceBuffer?!!SourceBuffer.prototype.changeType:!1};
rL=function(a,b){this.resource=a;this.j=void 0===b?!1:b;this.B=!1};
sL=function(a,b,c){c=void 0===c?!1:c;g.J.call(this);this.mediaElement=a;this.Ta=b;this.isView=c;this.K=0;this.D=!1;this.G=!0;this.Y=0;this.callback=null;this.Z=!1;this.Ta||(this.lh=this.mediaElement.Ab());this.events=new g.PK(this);g.L(this,this.events);this.C=new rL(this.Ta?window.URL.createObjectURL(this.Ta):this.lh.webkitMediaSourceURL,!0);a=this.Ta||this.lh;IC(this.events,a,["sourceopen","webkitsourceopen"],this.L$);IC(this.events,a,["sourceclose","webkitsourceclose"],this.K$);this.N={updateend:this.f3}};
IBa=function(){return!!(window.MediaSource||tL&&window.ManagedMediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
JBa=function(a,b){uL(a)?g.Jf(function(){b(a)}):a.callback=b};
LBa=function(a,b,c){if(KBa){var d;vL(a.mediaElement,{l:"mswssb",sr:null==(d=a.mediaElement.ra)?void 0:wL(d)},!1);g.UF(b,a.N,a);g.UF(c,a.N,a)}a.j=b;a.B=c;g.L(a,b);g.L(a,c)};
MBa=function(a,b,c,d){d=b.mimeType+(void 0===d?"":d);var e=c.mimeType;b=b.ub;c=c.ub;var f,h=null==(f=a.Ta)?void 0:f.addSourceBuffer(e),l;f="fakesb"===d.split(";")[0]?void 0:null==(l=a.Ta)?void 0:l.addSourceBuffer(d);a.lh&&(a.lh.webkitSourceAddId("0",e),a.lh.webkitSourceAddId("1",d));l=new pL(h,a.lh,"0",zBa(e),c,!1);d=new pL(f,a.lh,"1",zBa(d),b,!0);LBa(a,l,d)};
xL=function(a){return!!a.j||!!a.B};
uL=function(a){try{return"open"===yL(a)}catch(b){return!1}};
yL=function(a){if(a.Ta)return a.Ta.readyState;switch(a.lh.webkitSourceState){case a.lh.SOURCE_OPEN:return"open";case a.lh.SOURCE_ENDED:return"ended";default:return"closed"}};
NBa=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)||tL&&window.ManagedMediaSource};
OBa=function(a){uL(a)&&(a.Ta?a.Ta.endOfStream():a.lh.webkitSourceEndOfStream(a.lh.EOS_NO_ERROR))};
PBa=function(a,b,c,d){if(!a.j||!a.B)return null;var e=a.j.isView()?a.j.Pd:a.j,f=a.B.isView()?a.B.Pd:a.B,h=new sL(a.mediaElement,a.Ta,!0);h.C=a.C;LBa(h,new oL(e,b,c,d),new oL(f,b,c,d));uL(a)||a.j.hq(a.j.Oc());return h};
QBa=function(a){var b;null==(b=a.j)||b.Uy();var c;null==(c=a.B)||c.Uy();a.G=!1};
zL=function(){var a=this;this.TZ=this.b_=paa;this.promise=new g.Uf(function(b,c){a.b_=b;a.TZ=c})};
AL=function(){g.J.call(this);this.yI=!1;this.resource=null;this.N=this.K=!1;this.D=new g.Dd;this.ra=null;g.L(this,this.D)};
RBa=function(a){a=a.LD();return 1>a.length?NaN:a.end(a.length-1)};
SBa=function(a){!a.B&&IBa()&&(a.C?a.C.then(function(){return SBa(a)}):a.Hf()||(a.B=a.Nq()))};
TBa=function(a){a.B&&(a.B.dispose(),a.B=void 0)};
vL=function(a,b,c){var d;(null==(d=a.ra)?0:d.Tc())&&a.ra.va("rms",b,void 0===c?!1:c)};
UBa=function(a,b,c){a.isPaused()||a.getCurrentTime()>b||10<c||(a.play(),g.QB(function(){UBa(a,a.getCurrentTime(),c+1)},500))};
VBa=function(a,b){a.resource&&a.resource.equals(b)||(a.resource&&a.resource.dispose(),a.resource=b)};
BL=function(a){return mL(a.Nh(),a.getCurrentTime())};
WBa=function(a,b){if(0===a.Hk()||a.hasError())return!1;var c=0<a.getCurrentTime();return 0<=b&&(a=a.LD(),a.length||!c)?jL(a,b):c};
YBa=function(a){a.Hf()&&(XBa&&a.ra&&a.ra.Eu("rs_s"),JD&&0<a.getCurrentTime()&&a.seekTo(0),a.mK(),a.load(),VBa(a,null));delete a.C};
ZBa=function(a){switch(a.Tg()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
g.CL=function(a,b,c){this.qh=void 0===b?null:b;this.seekSource=void 0===c?null:c;this.state=a||64};
DL=function(a,b){return $Ba(a,b.getCurrentTime(),(0,g.uD)(),BL(b))};
EL=function(a,b,c,d){if(!(b===a.state&&c===a.qh&&d===a.seekSource||void 0!==b&&(b&128&&!c||b&2&&b&16))){var e;if(e=b)e=b||a.state,e=!!(e&16||e&32);a=new g.CL(b,c,e?d?d:a.seekSource:null)}return a};
FL=function(a,b,c){return EL(a,a.state|b,null,void 0===c?null:c)};
GL=function(a,b){return EL(a,a.state&~b,null,null)};
HL=function(a,b,c,d){return EL(a,(a.state|b)&~c,null,void 0===d?null:d)};
g.JG=function(a,b){return!!(a.state&b)};
g.aCa=function(a,b){return b.state===a.state&&b.qh===a.qh};
g.IL=function(a){return g.JG(a,8)&&!g.JG(a,2)&&!g.JG(a,1024)};
bCa=function(a){return a.isPlaying()&&!g.JG(a,16)&&!g.JG(a,32)};
g.JL=function(a){return g.JG(a,1)&&!g.JG(a,2)};
KL=function(a){return g.JG(a,128)?-1:g.JG(a,2)?0:g.JG(a,2048)?3:g.JG(a,64)?-1:g.JG(a,1)&&!g.JG(a,32)?3:g.JG(a,8)?1:g.JG(a,4)?2:-1};
ML=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){g.J.call(this);var u=this;this.callback=a;this.slot=b;this.layout=c;this.Oa=d;this.Eb=e;this.Ja=f;this.Qc=h;this.jg=l;this.Hb=m;this.dF=n;this.position=q;this.e0=r;this.Fa=t;this.Qh=!0;this.j_=!1;this.Jc="not_rendering";this.kE=!1;this.ZU=0;this.A_=!0;a=oJ(this.layout.Ca,"metadata_type_ad_placement_config");this.qb=new nK(c.Lb,this.Oa,a,c.layoutId);var x;a=(null==(x=LL(this))?void 0:x.progressCommands)||[];this.Kaa=new HAa(m,a,c.layoutId,function(){return u.wz()});
this.fN=Kd(function(){u.callback.Dc(u.slot,u.layout)});
this.jH=Kd(function(){"rendering_stop_requested"!==u.Jc&&p(u);u.layoutExitReason?u.callback.Pc(u.slot,u.layout,u.layoutExitReason):HG("Received layout exit signal when not in layout exit flow.",u.slot,u.layout)})};
LL=function(a){return oJ(a.layout.Ca,"METADATA_TYPE_INTERACTIONS_AND_PROGRESS_LAYOUT_COMMANDS")};
NL=function(a,b,c){c=void 0===c?!1:c;if("rendering"===a.Jc){pK(a.qb,1E3*b,c);a.kE||pK(a.qb,1E3*b,void 0===c?!1:c);var d=a.wz();if(d){d/=1E3;(b>=.25*d||c)&&a.Rc("first_quartile");(b>=.5*d||c)&&a.Rc("midpoint");(b>=.75*d||c)&&a.Rc("third_quartile");c=a.Kaa;d=1E3*b;var e=c.G();if(e){for(;c.D<c.B.length;){var f=c.B[c.D];if(f.adVideoOffset.percent*e<=d)c.Hb.get().executeCommand(f.command,c.layoutId),c.D++;else break}for(;c.C<c.j.length;)if(e=c.j[c.C],Number(e.adVideoOffset.milliseconds)<=d)c.Hb.get().executeCommand(e.command,
c.layoutId),c.C++;else break}5<=b&&a.Fa.get().J.U().experiments.ib("enable_ap_ikd")&&a.A_&&(a.A_=!1,a=Date.now()-a.ZU<1E3*b-200?0:1,xwa(a,"i.k_",{}),wB("IKDSTAT",a))}}};
dCa=function(a){0===a.position&&(a.Qc.get(),a=oJ(a.layout.Ca,"metadata_type_ad_placement_config").kind,a={adBreakType:cCa(a)},SH("ad_bl"),g.QH(a))};
OL=function(a,b,c){PH(a,c)||TH(a,b,c);PH(a,"video_to_ad")||TH(a,b,"video_to_ad");PH(a,"ad_to_video")||TH(a,b,"ad_to_video");PH(a,"ad_to_ad")||TH(a,b,"ad_to_ad")};
eCa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u){ML.call(this,a,b,c,d,e,f,h,m,n,p,q,r,t,u);var x=this;this.Ld=l;this.GI=!0;this.nP=this.dj=0;this.timer=new g.ag(200);this.timer.Qa("tick",function(){x.Hc()});
g.L(this,this.timer)};
fCa=function(){for(var a=["METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"],b=g.v(oK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{Kd:a,Pe:["LAYOUT_TYPE_MEDIA_BREAK"]}};
hCa=function(a){a.nP=Date.now();gCa(a,a.dj);a.timer.start()};
gCa=function(a,b){b={current:b/1E3,duration:a.wz()/1E3};a.Ld.get().jb("onAdPlaybackProgress",b)};
RL=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G,H){ML.call(this,a,b,c,d,e,m,p,r,t,x,B,F,G,H);var O=this;this.sf=f;this.Ce=h;this.Wa=l;this.zc=n;this.Ld=q;this.xg=u;this.adCpn="";this.rf()||(this.gJ=new g.Cu(function(){O.xA("load_timeout",new lJ("Media layout load timeout.",{},"ADS_CLIENT_ERROR_MESSAGE_MEDIA_LAYOUT_LOAD_TIMEOUT",!0),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED")},1E4),a=PL(this.Fa.get()),H=QL(H.get()),a&&H&&(this.pA=new g.Cu(function(){var P=oJ(c.Ca,"metadata_type_preload_player_vars");
P&&O.Ce.get().J.preloadVideoByPlayerVars(P,2,300)})))};
iCa=function(){for(var a=["metadata_type_player_vars","metadata_type_player_bytes_callback_ref"],b=g.v(oK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{Kd:a,Pe:["LAYOUT_TYPE_MEDIA"]}};
jCa=function(a,b,c,d,e,f,h){BK.call(this,a,b,c,d,f,h);this.j=e};
mCa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G,H,O){if(uK(d,{Kd:["metadata_type_sub_layouts"],Pe:["LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES"]})||void 0!==d.GB&&"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES"===d.layoutType){var P,Y=null!=(P=d.GB)?P:oJ(d.Ca,"metadata_type_sub_layouts");a=new iBa(a,q,O,p,r,u,b,c,d,f,h,e,H);e=[];for(f={Tv:0};f.Tv<Y.length;f={Tv:f.Tv},f.Tv++){O=kCa({Dc:a.O$.bind(a),Pc:a.Q$.bind(a),rF:a.rF.bind(a),Af:a.P$.bind(a)},c,Y[f.Tv],l,m,n,p,q,r,t,u,x,B,F,G,function(la){return function(pa){pa.tf(Y[la.Tv],
"normal")}}(f),f.Tv,Y.length,H);
if(!O)return;e.push(O)}a.B=e;return a}if(lCa(c,H.get())&&uK(d,{Kd:[],Pe:["LAYOUT_TYPE_MEDIA","LAYOUT_TYPE_MEDIA_BREAK"]}))return(u=kCa({Dc:function(){},
Pc:function(){},
rF:function(){return void EK(h,d)},
Af:function(){}},c,d,l,m,n,p,q,r,t,u,x,B,F,G,function(){},0,1,H))?new hBa(a,u,c,d,f,h,q,O,p,e,r):u;
if(uK(d,{Kd:[],Pe:["LAYOUT_TYPE_MEDIA","LAYOUT_TYPE_MEDIA_BREAK"]}))return(c=kCa({Dc:a.Dc.bind(a),Pc:a.Pc.bind(a),rF:function(){},
Af:a.Af.bind(a)},c,d,l,m,n,p,q,r,t,u,x,B,F,G,function(){EK(h,d)},0,1,H))?new jCa(a,p,r,u,c,e,H):c};
kCa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G){if(uK(c,fCa()))return new eCa(a,b,c,d,e,m,p,q,r,t,function(){},x,B,F,G);
if(uK(c,iCa()))return iJ(c.Ca,"metadata_type_ad_intro")?new RL(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,function(H){q.get().jb("onAdIntroStateChange",H)},x,B,F,G):new RL(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,function(H){q.get().cF(H)},x,B,F,G)};
lCa=function(a,b){var c=oJ(a.Ca,"metadata_type_eligible_for_ssap");return void 0===c?(HG("Expected SSAP eligibility in PlayerBytes factory",a),!1):b.rf(c)};
SL=function(a,b,c,d,e,f,h,l,m,n){this.callback=a;this.slot=b;this.layout=c;this.Wa=d;this.Mc=e;this.Ff=f;this.Ja=h;this.qb=l;this.Oa=m;this.D=n;this.driftRecoveryMs=oJ(this.layout.Ca,"metadata_type_drift_recovery_ms")||null};
oCa=function(a){var b=oJ(a.layout.Ca,"metadata_type_layout_enter_ms"),c=oJ(a.layout.Ca,"metadata_type_layout_exit_ms");a=a.Ff.get();b=nCa(a.C,b,c);return Math.min(c,null!==b?b:Infinity)};
pCa=function(a,b){var c;TL(a.Oa.get(),{driftRecoveryInfo:Object.assign({},{contentCpn:null==(c=a.Wa.get().Av)?void 0:c.clientPlaybackNonce,adClientData:a.layout.lc.adClientDataEntry},b)})};
qCa=function(a,b,c,d,e,f,h,l,m,n,p){SL.call(this,a,b,c,d,e,f,h,l,m,n);this.C=p;this.B=this.j=null;a=g.v(this.C);for(b=a.next();!b.done;b=a.next())b=b.value,iJ(b.sb().Ca,"metadata_type_survey_overlay")&&(this.B=b.sb().layoutId)};
sCa=function(a,b){var c=rCa(a,b);a.j={Vl:c};c?c.startRendering(c.sb()):b===a.B&&HG("Failed to find rendering adapter for survey media layout",a.slot,a.layout,{surveyMediaLayoutId:b})};
rCa=function(a,b){return null==b?null:a.C.find(function(c){return c.sb().layoutId===b})||null};
tCa=function(a,b,c,d,e,f,h,l,m,n){var p=e-d,q=iJ(b.Ca,"metadata_type_survey_overlay"),r,t=(null==(r=oJ(a.Ca,"metadata_type_fulfilled_layout"))?void 0:oJ(r.Ca,"metadata_type_ssdai_ads_config"))||"";if(!p)return h.aE(c,t,2,f,d,e,a.slotId),n.Ai("ads_iraot","sid."+a.slotId+";enterMs."+d+";exitMs."+e+";hso."+q+";vid."+c.video_id),null;p=h.IC(c,t,2,f,d,e,a.slotId);n.Ai("ads_atct","sid."+a.slotId+";enterMs."+d+";exitMs."+e+";hso."+q+";vid."+c.video_id);if(!p)return HG("Unexpected failure to add to playback timeline",
a,b,m()),null;a=a.slotId;b=b.layoutId;p?(l.j.has(p)&&HG("Unexpected remap of timeline playback"),l.j.set(p,{slotId:a,layoutId:b})):HG("Invalid timeline playback ID");d+f>e&&h.bG(p,e-d);return p};
uCa=function(a,b){var c=oJ(b.Ca,"metadata_type_sodar_extension_data");if(c)try{Hza(0,c)}catch(d){HG("Unexpected error when loading Sodar",a,b,{error:d})}};
wCa=function(a,b,c,d,e,f){vCa(a,b,new g.IG(c,new g.CL),d,e,!1,f)};
vCa=function(a,b,c,d,e,f,h){f=void 0===f?!0:f;rBa(c)&&FK(e,0,null)&&(!qK(a,"impression")&&h&&h(),a.Rc("impression"));qK(a,"impression")&&(g.LG(c,4)&&!g.LG(c,2)&&a.Hh("pause"),0>KG(c,4)&&!(0>KG(c,2))&&a.Hh("resume"),g.LG(c,16)&&.5<=e&&a.Hh("seek"),f&&g.LG(c,2)&&xCa(a,c.state,b,d,e))};
xCa=function(a,b,c,d,e,f,h){if(qK(a,"impression")){var l=1>=Math.abs(d-e);yCa(a,b,l?d:e,c,d,f,h&&l);l&&a.Rc("complete")}};
yCa=function(a,b,c,d,e,f,h){pK(a,1E3*c,h);0>=e||0>=c||(null==b?0:g.JG(b,16))||(null==b?0:g.JG(b,32))||(FK(c,.25*e,d)&&(f&&!qK(a,"first_quartile")&&f("first"),a.Rc("first_quartile")),FK(c,.5*e,d)&&(f&&!qK(a,"midpoint")&&f("second"),a.Rc("midpoint")),FK(c,.75*e,d)&&(f&&!qK(a,"third_quartile")&&f("third"),a.Rc("third_quartile")))};
zCa=function(a,b){qK(a,"impression")&&a.Hh(b?"fullscreen":"end_fullscreen")};
ACa=function(a){qK(a,"impression")&&a.Hh("clickthrough")};
BCa=function(a){a.Hh("active_view_measurable")};
CCa=function(a){qK(a,"impression")&&!qK(a,"seek")&&a.Hh("active_view_fully_viewable_audible_half_duration")};
DCa=function(a){qK(a,"impression")&&!qK(a,"seek")&&a.Hh("active_view_viewable")};
ECa=function(a){qK(a,"impression")&&!qK(a,"seek")&&a.Hh("audio_audible")};
FCa=function(a){qK(a,"impression")&&!qK(a,"seek")&&a.Hh("audio_measurable")};
GCa=function(a,b,c,d,e,f,h,l,m,n,p,q){this.callback=a;this.slot=b;this.layout=c;this.Mc=d;this.qb=e;this.Ja=f;this.ze=h;this.Eb=l;this.sf=m;this.Fa=n;this.Oa=p;this.Wa=q;this.GI=!0;this.Zc=this.Jc=null;this.adCpn=void 0};
HCa=function(a,b,c){var d;a.Oa.get().Ai("ads_qua","cpn."+oJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Wa.get().nf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
ICa=function(a,b){var c,d;a.Oa.get().Ai("ads_imp","cpn."+oJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(c=a.Wa.get().nf(2))?void 0:c.clientPlaybackNonce)+";clr."+b+";skp."+!!g.S(null==(d=oJ(a.layout.Ca,"metadata_type_instream_ad_player_overlay_renderer"))?void 0:d.skipOrPreviewRenderer,UL))};
JCa=function(a){return{enterMs:oJ(a.Ca,"metadata_type_layout_enter_ms"),exitMs:oJ(a.Ca,"metadata_type_layout_exit_ms")}};
KCa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){SL.call(this,a,b,c,d,e,h,l,m,n,q);this.ze=f;this.sf=p;this.Eb=r;this.Fa=t;this.Zc=this.Jc=null};
LCa=function(a,b){var c;a.Oa.get().Ai("ads_imp","acpn."+(null==(c=a.Wa.get().nf(2))?void 0:c.clientPlaybackNonce)+";clr."+b)};
MCa=function(a,b,c){var d;a.Oa.get().Ai("ads_qua","cpn."+oJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Wa.get().nf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
NCa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B,F,G,H){this.Vc=a;this.ke=b;this.B=c;this.Wa=d;this.Mc=e;this.Ja=f;this.Oa=h;this.ze=l;this.Ff=m;this.Eb=n;this.sf=p;this.Ce=q;this.zc=r;this.Qc=t;this.Ld=u;this.jg=x;this.Hb=B;this.xg=F;this.Fa=G;this.j=H};
VL=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x,B){this.Vc=a;this.ke=b;this.j=c;this.Oa=d;this.Eb=e;this.sf=f;this.Ce=h;this.Wa=l;this.Ja=m;this.zc=n;this.Qc=p;this.Ld=q;this.jg=r;this.Hb=t;this.xg=u;this.Fa=x;this.Mc=B};
OCa=function(a,b,c,d){SF.call(this,"survey-interstitial",a,b,c,d)};
WL=function(a,b,c,d,e){gK.call(this,c,a,b,d);this.Oa=e;a=oJ(b.Ca,"metadata_type_ad_placement_config");this.qb=new nK(b.Lb,e,a,b.layoutId)};
XL=function(a){return Math.round(a.width)+"x"+Math.round(a.height)};
QCa=function(a,b,c){c=void 0===c?PCa:c;c.width<PCa.width&&(c=PCa);if(a.width<c.width||a.height<c.height)return{hL:3,eG:501,errorMessage:"ad("+XL(c)+") larger than container("+XL(a)+")."};if(c.width*c.height>a.width*a.height*.2)return{hL:3,eG:501,errorMessage:"ad("+XL(c)+") to container("+XL(a)+") ratio exceeds limit."};if(c.height>a.height/3-b)return{hL:3,eG:501,errorMessage:"ad("+XL(c)+") covers container("+XL(a)+") center."}};
RCa=function(a,b){var c=oJ(a.Ca,"metadata_type_ad_placement_config");return new nK(a.Lb,b,c,a.layoutId)};
YL=function(a){return oJ(a.Ca,"metadata_type_invideo_overlay_ad_renderer")};
SCa=function(a,b,c,d){SF.call(this,"invideo-overlay",a,b,c,d);this.interactionLoggingClientData=d};
ZL=function(a,b,c,d,e,f,h,l,m,n,p,q){gK.call(this,f,a,b,e);this.Oa=c;this.D=h;this.Ja=l;this.Hb=m;this.Fa=n;this.K=p;this.G=q;this.qb=RCa(b,c)};
TCa=function(){var a=["metadata_type_invideo_overlay_ad_renderer"];oK().forEach(function(b){a.push(b)});
return{Kd:a,Pe:["LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY","LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY"]}};
$L=function(a,b,c,d,e,f,h,l,m,n,p,q,r){gK.call(this,f,a,b,e);this.Oa=c;this.D=h;this.N=l;this.Ja=m;this.Hb=n;this.Fa=p;this.K=q;this.G=r;this.qb=RCa(b,c)};
UCa=function(){for(var a=["metadata_type_invideo_overlay_ad_renderer"],b=g.v(oK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{Kd:a,Pe:["LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY"]}};
aM=function(a){this.Ja=a;this.j=!1};
VCa=function(a,b,c){SF.call(this,"survey",a,{},b,c)};
WCa=function(a,b,c,d,e,f,h){gK.call(this,c,a,b,d);this.D=e;this.Ja=f;this.Fa=h};
XCa=function(a,b,c,d,e,f,h,l,m,n){this.pc=a;this.Ja=b;this.Oa=c;this.D=d;this.Eb=e;this.B=f;this.C=h;this.Hb=l;this.Fa=m;this.j=n};
YCa=function(a,b,c,d,e,f,h,l,m,n){this.pc=a;this.Ja=b;this.Oa=c;this.D=d;this.Eb=e;this.B=f;this.C=h;this.Hb=l;this.Fa=m;this.j=n};
bM=function(a,b,c,d,e,f,h,l,m){yK.call(this,a,b,c,d,e,f,h,m);this.Wm=l};
ZCa=function(){var a=cBa();a.Kd.push("metadata_type_ad_info_ad_metadata");return a};
$Ca=function(a,b,c,d,e,f){this.pc=a;this.Ja=b;this.Oa=c;this.B=d;this.Wm=e;this.j=f};
aDa=function(a,b,c,d,e,f,h){this.pc=a;this.Ja=b;this.Oa=c;this.B=d;this.Wm=e;this.j=f;this.Fa=h};
cM=function(a,b){this.slotId=b;this.triggerType="TRIGGER_TYPE_AD_BREAK_STARTED";this.triggerId=a(this.triggerType)};
dM=function(a,b){this.j=a;this.B=b.length;this.adBreakLengthSeconds=b.reduce(function(d,e){return d+e},0);
var c=0;for(a+=1;a<b.length;a++)c+=b[a];this.adBreakRemainingLengthSeconds=c};
eM=function(a,b,c){this.Wr=b;this.triggerType="TRIGGER_TYPE_BEFORE_CONTENT_VIDEO_ID_STARTED";this.triggerId=c||a(this.triggerType)};
fM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_CLOSE_REQUESTED";this.triggerId=c||a(this.triggerType)};
gM=function(a,b,c,d){this.Wr=b;this.visible=c;this.triggerType="TRIGGER_TYPE_CONTENT_VIDEO_ID_ENDED";this.triggerId=d||a(this.triggerType)};
bDa=function(a){this.triggerType="TRIGGER_TYPE_DURATION_AFTER_MEDIA_PAUSED";this.triggerId=a(this.triggerType)};
hM=function(a,b,c){this.triggeringLayoutId=b;this.slotId=c;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ACTIVE_AND_SLOT_ID_HAS_EXITED";this.triggerId=a(this.triggerType)};
iM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
jM=function(a,b,c,d){this.triggeringLayoutId=b;this.j=c;this.triggerType="TRIGGER_TYPE_LAYOUT_EXITED_FOR_REASON";this.triggerId=d||a(this.triggerType)};
cDa=function(a){switch(a){case "LAYOUT_EXIT_REASON_UNSPECIFIED":return"unknown";case "LAYOUT_EXIT_REASON_NORMAL":return"normal";case "LAYOUT_EXIT_REASON_ERROR":return"error";case "LAYOUT_EXIT_REASON_USER_SKIPPED":return"skipped";case "LAYOUT_EXIT_REASON_USER_MUTED":return"muted";case "LAYOUT_EXIT_REASON_ABANDONED":return"abandoned";case "LAYOUT_EXIT_REASON_USER_INPUT_SUBMITTED":return"user_input_submitted";case "LAYOUT_EXIT_REASON_USER_CANCELLED":return"user_cancelled";default:return new mJ("Invalid layout exit reason: "+
a)}};
kM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
dDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_ENDED";this.triggerId=a(this.triggerType)};
eDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_STARTED";this.triggerId=a(this.triggerType)};
fDa=function(a){this.triggerId=a;this.triggerType="TRIGGER_TYPE_MEDIA_RESUMED"};
lM=function(a,b,c,d,e){this.Wr=b;this.j=c;this.visible=d;this.layoutId=e;this.triggerType="TRIGGER_TYPE_MEDIA_TIME_RANGE_ALLOW_REACTIVATION_ON_USER_CANCELLED";this.triggerId=a(this.triggerType)};
mM=function(a,b,c,d,e){this.Wr=b;this.j=c;this.visible=d;this.triggerType="TRIGGER_TYPE_MEDIA_TIME_RANGE";this.triggerId=e||a(this.triggerType)};
gDa=function(a,b,c){this.Wr=b;this.j=c;this.triggerType="TRIGGER_TYPE_NOT_IN_MEDIA_TIME_RANGE";this.triggerId=a(this.triggerType)};
nM=function(a,b){this.j=b;this.slotType="SLOT_TYPE_PLAYER_BYTES";this.layoutType="LAYOUT_TYPE_MEDIA";this.triggerType="TRIGGER_TYPE_ON_DIFFERENT_LAYOUT_ID_ENTERED";this.triggerId=a(this.triggerType)};
hDa=function(a,b){this.j=b;this.slotType="SLOT_TYPE_IN_PLAYER";this.triggerType="TRIGGER_TYPE_ON_DIFFERENT_SLOT_ID_ENTER_REQUESTED";this.triggerId=a(this.triggerType)};
oM=function(a,b,c){this.layoutId=b;this.triggerType="TRIGGER_TYPE_ON_LAYOUT_SELF_EXIT_REQUESTED";this.triggerId=c||a(this.triggerType)};
pM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_ON_NEW_PLAYBACK_AFTER_CONTENT_VIDEO_ID";this.triggerId=c||a(this.triggerType)};
Jza=function(a,b){this.opportunityType="OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED";this.associatedSlotId=b;this.triggerType="TRIGGER_TYPE_ON_OPPORTUNITY_TYPE_RECEIVED";this.triggerId=a(this.triggerType)};
iDa=function(a){this.triggerType="TRIGGER_TYPE_PLAYBACK_MINIMIZED";this.triggerId=a(this.triggerType)};
jDa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_PROGRESS_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
qM=function(a,b){this.layoutId=b;this.triggerType="TRIGGER_TYPE_SEEK_BACKWARD_BEFORE_LAYOUT_ENTER_TIME";this.triggerId=a(this.triggerType)};
kDa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_SEEK_FORWARD_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
rM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SKIP_REQUESTED";this.triggerId=c||a(this.triggerType)};
sM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
tM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
uM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_EMPTY";this.triggerId=a(this.triggerType)};
vM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_NON_EMPTY";this.triggerId=a(this.triggerType)};
wM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_SCHEDULED";this.triggerId=c||a(this.triggerType)};
xM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_UNSCHEDULED";this.triggerId=a(this.triggerType)};
yM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SURVEY_SUBMITTED";this.triggerId=c||a(this.triggerType)};
lDa=function(a,b){this.durationMs=45E3;this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_TIME_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
zM=function(a,b,c,d){this.category=a;this.trigger=b;this.slot=c;this.layout=d};
AM=function(a){return null!=(null==a?void 0:a.layoutId)&&null!=(null==a?void 0:a.layoutType)};
mDa=function(a){return null!=(null==a?void 0:a.durationMs)&&0<(null==a?void 0:a.durationMs)};
nDa=function(a){return!!(a.B7&&a.slot&&a.layout)};
oDa=function(a){var b,c=null==(b=a.config)?void 0:b.adPlacementConfig;a=a.renderer;return!(!c||null==c.kind||!a)};
BM=function(a){return void 0!==a.playerVars&&void 0!==a.pings&&void 0!==a.externalVideoId};
YM=function(a){if(!AM(a.adLayoutMetadata))return!1;a=a.renderingContent;var b=g.S(a,pDa);return b?qDa(b):(b=g.S(a,CM))?BM(b):(b=g.S(a,DM))?void 0!==b.playerVars:(b=g.S(a,EM))?void 0!==b.durationMilliseconds:g.S(a,WM)||g.S(a,XM)?!0:!1};
qDa=function(a){a=(a.sequentialLayouts||[]).map(function(b){return g.S(b,rDa)});
return 0<a.length&&a.every(YM)};
vDa=function(a){if(!AM(a.adLayoutMetadata))return!1;if(g.S(a.renderingContent,sDa))return!0;a=g.S(a.renderingContent,ZM);return g.S(null==a?void 0:a.sidePanel,tDa)||g.S(null==a?void 0:a.sidePanel,uDa)?!0:!1};
zDa=function(a){var b=a.adSlotMetadata;if(void 0===(null==b?void 0:b.slotId)||void 0===(null==b?void 0:b.slotType)||!(wDa(a)||a.slotEntryTrigger&&a.slotFulfillmentTriggers&&a.slotExpirationTriggers))return!1;var c;a=null==(c=a.fulfillmentContent)?void 0:c.fulfilledLayout;if(c=g.S(a,rDa))return YM(c);if(c=g.S(a,$M))return vDa(c);(c=g.S(a,xDa))?AM(c.adLayoutMetadata)?(c=c.renderingContent,c=g.S(c,EM)||g.S(c,yDa)?!0:!1):c=!1:c=!1;return c};
wDa=function(a){var b;a=g.S(null==(b=a.fulfillmentContent)?void 0:b.fulfilledLayout,$M);var c;return a&&"LAYOUT_TYPE_PANEL_QR_CODE"===(null==(c=a.adLayoutMetadata)?void 0:c.layoutType)};
BDa=function(a,b){var c;if(null==(c=a.questions)||!c.length||!a.playbackCommands||(void 0===b||!b)&&1!==a.questions.length)return!1;a=g.v(a.questions);for(b=a.next();!b.done;b=a.next()){b=b.value;var d=c=void 0,e=(null==(c=g.S(b,aN))?void 0:c.surveyAdQuestionCommon)||(null==(d=g.S(b,bN))?void 0:d.surveyAdQuestionCommon);if(!ADa(e))return!1}return!0};
CDa=function(a){a=((null==a?void 0:a.playerOverlay)||{}).instreamSurveyAdRenderer;var b;if(a)if(a.playbackCommands&&a.questions&&1===a.questions.length){var c,d=(null==(b=g.S(a.questions[0],aN))?void 0:b.surveyAdQuestionCommon)||(null==(c=g.S(a.questions[0],bN))?void 0:c.surveyAdQuestionCommon);b=ADa(d)}else b=!1;else b=!1;return b};
ADa=function(a){if(!a)return!1;a=g.S(a.instreamAdPlayerOverlay,DDa);var b=g.S(null==a?void 0:a.skipOrPreviewRenderer,UL),c=g.S(null==a?void 0:a.adInfoRenderer,cN);return(g.S(null==a?void 0:a.skipOrPreviewRenderer,dN)||b)&&c?!0:!1};
EDa=function(a){return null!=a.linearAds&&AM(a.adLayoutMetadata)};
FDa=function(a){return null!=a.linearAd&&null!=a.adVideoStart};
GDa=function(a){if(isNaN(Number(a.timeoutSeconds))||!a.text||!a.ctaButton||!g.S(a.ctaButton,g.eN)||!a.brandImage)return!1;var b;return a.backgroundImage&&g.S(a.backgroundImage,fN)&&(null==(b=g.S(a.backgroundImage,fN))?0:b.landscape)?!0:!1};
gN=function(a,b,c,d,e,f,h){g.J.call(this);this.Fa=a;this.Tb=b;this.Kb=c;this.Be=d;this.Wa=e;this.B=f;this.j=h};
KDa=function(a,b,c){var d,e=(null!=(d=c.adSlots)?d:[]).map(function(f){return g.S(f,HDa)});
c.IB?oJ(b.Ca,"metadata_type_allow_pause_ad_break_request_slot_reschedule")?dK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId):(a.Fa.get().J.U().L("h5_check_forecasting_renderer_for_throttled_midroll")?(d=c.Uu.filter(function(f){var h;
return null!=(null==(h=f.renderer)?void 0:h.clientForecastingAdRenderer)}),0!==d.length?IDa(a.j,d,e,b.slotId,c.ssdaiAdsConfig):dK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId)):dK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return[]},b.slotId),JDa(a.B,b)):IDa(a.j,c.Uu,e,b.slotId,c.ssdaiAdsConfig)};
MDa=function(a,b,c,d,e,f){var h=a.Wa.get().nf(1);dK(a.Tb.get(),"OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED",function(){return LDa(a.Be.get(),c,d,e,h.clientPlaybackNonce,h.WC,h.daiEnabled,h,f)},b)};
PDa=function(a,b,c,d,e,f,h){b=NDa(b,f,Number(d.prefetchMilliseconds)||0,h);a=b instanceof mJ?b:ODa(a,d,e,b,c);return a instanceof mJ?a:[a]};
QDa=function(a,b,c,d,e){var f=eK(a.eb.get(),"SLOT_TYPE_AD_BREAK_REQUEST");d=[new $I({getAdBreakUrl:d.getAdBreakUrl,gR:0,fR:0}),new Vya(!0)];a=b.pauseDurationMs?b.lactThresholdMs?{slotId:f,slotType:"SLOT_TYPE_AD_BREAK_REQUEST",slotPhysicalPosition:2,slotEntryTrigger:new wM(a.j,f),slotFulfillmentTriggers:[new bDa(a.j)],slotExpirationTriggers:[new pM(a.j,e),new tM(a.j,f)],Ya:"core",Ca:new nJ(d),adSlotLoggingData:c}:new mJ("AdPlacementConfig for Pause Ads is missing lact_threshold_ms"):new mJ("AdPlacementConfig for Pause Ads is missing pause_duration_ms");
return a instanceof mJ?a:[a]};
RDa=function(a){var b,c;return void 0!==(null==(b=a.renderer)?void 0:null==(c=b.adBreakServiceRenderer)?void 0:c.getAdBreakUrl)};
hN=function(a,b,c){if(a.beforeContentVideoIdStartedTrigger)a=a.beforeContentVideoIdStartedTrigger?new eM(kJ,b,a.id):new mJ("Not able to create BeforeContentVideoIdStartedTrigger");else{if(a.layoutIdExitedTrigger){var d;b=null!=(d=a.layoutIdExitedTrigger)&&d.triggeringLayoutId?new kM(kJ,a.layoutIdExitedTrigger.triggeringLayoutId,a.id):new mJ("Not able to create LayoutIdExitedTrigger")}else{if(a.layoutExitedForReasonTrigger){var e,f;(null==(e=a.layoutExitedForReasonTrigger)?0:e.triggeringLayoutId)&&
(null==(f=a.layoutExitedForReasonTrigger)?0:f.layoutExitReason)?(b=cDa(a.layoutExitedForReasonTrigger.layoutExitReason),a=b instanceof mJ?b:new jM(kJ,a.layoutExitedForReasonTrigger.triggeringLayoutId,[b],a.id)):a=new mJ("Not able to create LayoutIdExitedForReasonTrigger")}else{if(a.onLayoutSelfExitRequestedTrigger){var h;b=null!=(h=a.onLayoutSelfExitRequestedTrigger)&&h.triggeringLayoutId?new oM(kJ,a.onLayoutSelfExitRequestedTrigger.triggeringLayoutId,a.id):new mJ("Not able to create OnLayoutSelfExitRequestedTrigger")}else{if(a.onNewPlaybackAfterContentVideoIdTrigger)a=
a.onNewPlaybackAfterContentVideoIdTrigger?new pM(kJ,b,a.id):new mJ("Not able to create OnNewPlaybackAfterContentVideoIdTrigger");else{if(a.skipRequestedTrigger){var l;b=null!=(l=a.skipRequestedTrigger)&&l.triggeringLayoutId?new rM(kJ,a.skipRequestedTrigger.triggeringLayoutId,a.id):new mJ("Not able to create SkipRequestedTrigger")}else if(a.slotIdEnteredTrigger){var m;b=null!=(m=a.slotIdEnteredTrigger)&&m.triggeringSlotId?new sM(kJ,a.slotIdEnteredTrigger.triggeringSlotId,a.id):new mJ("Not able to create SlotIdEnteredTrigger")}else if(a.slotIdExitedTrigger){var n;
b=null!=(n=a.slotIdExitedTrigger)&&n.triggeringSlotId?new tM(kJ,a.slotIdExitedTrigger.triggeringSlotId,a.id):new mJ("Not able to create SkipRequestedTrigger")}else if(a.surveySubmittedTrigger){var p;b=null!=(p=a.surveySubmittedTrigger)&&p.triggeringLayoutId?new yM(kJ,a.surveySubmittedTrigger.triggeringLayoutId,a.id):new mJ("Not able to create SurveySubmittedTrigger")}else{if(a.mediaResumedTrigger)a=a.mediaResumedTrigger&&a.id?new fDa(a.id):new mJ("Not able to create MediaResumedTrigger");else{if(a.closeRequestedTrigger){var q;
b=null!=(q=a.closeRequestedTrigger)&&q.triggeringLayoutId?new fM(kJ,a.closeRequestedTrigger.triggeringLayoutId,a.id):new mJ("Not able to create CloseRequestedTrigger")}else if(a.slotIdScheduledTrigger){var r;b=null!=(r=a.slotIdScheduledTrigger)&&r.triggeringSlotId?new wM(kJ,a.slotIdScheduledTrigger.triggeringSlotId,a.id):new mJ("Not able to create SlotIdScheduledTrigger")}else{if(a.mediaTimeRangeTrigger){var t;d=Number(null==(t=a.mediaTimeRangeTrigger)?void 0:t.offsetStartMilliseconds);var u;h=Number(null==
(u=a.mediaTimeRangeTrigger)?void 0:u.offsetEndMilliseconds);isFinite(d)&&isFinite(h)?(u=h,-1===u&&(u=c),c=d>u?new mJ("AD_PLACEMENT_KIND_MILLISECONDS endMs needs to be >= startMs.",{offsetStartMs:d,offsetEndMs:u},"ADS_CLIENT_ERROR_MESSAGE_AD_PLACEMENT_END_SHOULD_GREATER_THAN_START",u===c&&d-500<=u):new dv(d,u),a=c instanceof mJ?c:new mM(kJ,b,c,!1,a.id)):a=new mJ("Not able to create MediaTimeRangeTrigger")}else if(a.contentVideoIdEndedTrigger)a=a.contentVideoIdEndedTrigger?new gM(kJ,b,!1,a.id):new mJ("Not able to create ContentVideoIdEndedTrigger");
else{if(a.layoutIdEnteredTrigger){var x;b=null!=(x=a.layoutIdEnteredTrigger)&&x.triggeringLayoutId?new iM(kJ,a.layoutIdEnteredTrigger.triggeringLayoutId,a.id):new mJ("Not able to create LayoutIdEnteredTrigger")}else b=new mJ("Not able to convert an AdsControlflowTrigger.");a=b}b=a}a=b}b=a}a=b}b=a}a=b}b=a}a=b}return a};
TDa=function(a,b,c,d,e,f,h,l){return null===b?new mJ("Invalid slot type when get discovery companion fromActionCompanionAdRenderer",{slotType:b,ActionCompanionAdRenderer:d}):[SDa(a,b,h,f,function(m){var n=m.slotId;m=l(m);var p=d.adLayoutLoggingData,q=new nJ([new sI(d),new wI(e)]);n=SJ(c.eb.get(),"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",n);var r={layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Ya:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Lb:new Map,
layoutExitNormalTriggers:[new pM(c.j,h)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:q,lc:m(r),adLayoutLoggingData:p}})]};
UDa=function(a,b,c,d,e,f,h,l){return null===b?new mJ("Invalid slot type when get discovery companion fromTopBannerImageTextIconButtonedLayoutViewModel",{slotType:b,TopBannerImageTextIconButtonedLayoutViewModel:d}):[SDa(a,b,h,f,function(m){var n=m.slotId;m=l(m);var p=d.adLayoutLoggingData,q=new nJ([new tI(d),new wI(e)]);n=SJ(c.eb.get(),"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",n);var r={layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Ya:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",
Lb:new Map,layoutExitNormalTriggers:[new pM(c.j,h)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:q,lc:m(r),adLayoutLoggingData:p}})]};
YDa=function(a,b,c,d,e,f){if(!f)for(b=g.v(b),f=b.next();!f.done;f=b.next())f=f.value,iN(a,f.renderer,f.config.adPlacementConfig.kind);a=Array.from(a.values()).filter(function(p){return VDa(p)});
b=[];f=g.v(a);for(var h=f.next(),l={};!h.done;l={Hs:l.Hs},h=f.next()){l.Hs=h.value;h=g.v(l.Hs.xM);for(var m=h.next(),n={};!m.done;n={Ul:n.Ul},m=h.next())n.Ul=m.value,m=function(p,q){return function(r){return p.Ul.kN(r,q.Hs.instreamVideoAdRenderer.elementId,p.Ul.wM)}}(n,l),n.Ul.isContentVideoCompanion?b.push(WDa(c,d,e,l.Hs.instreamVideoAdRenderer.elementId,n.Ul.associatedCompositePlayerBytesLayoutId,n.Ul.adSlotLoggingData,m)):1<a.length?b.push(XDa(c,d,e,l.Hs.instreamVideoAdRenderer.elementId,n.Ul.adSlotLoggingData,
function(p,q){return function(r){return p.Ul.kN(r,q.Hs.instreamVideoAdRenderer.elementId,p.Ul.wM,p.Ul.associatedCompositePlayerBytesLayoutId)}}(n,l))):b.push(XDa(c,d,e,l.Hs.instreamVideoAdRenderer.elementId,n.Ul.adSlotLoggingData,m))}return b};
iN=function(a,b,c){if(b=ZDa(b)){b=g.v(b);for(var d=b.next();!d.done;d=b.next())if((d=d.value)&&d.externalVideoId){var e=$Da(a,d.externalVideoId);e.instreamVideoAdRenderer||(e.instreamVideoAdRenderer=d,e.cE=c)}else HG("InstreamVideoAdRenderer without externalVideoId")}};
ZDa=function(a){var b=[],c=a.sandwichedLinearAdRenderer&&a.sandwichedLinearAdRenderer.linearAd&&g.S(a.sandwichedLinearAdRenderer.linearAd,CM);if(c)return b.push(c),b;if(a.instreamVideoAdRenderer)return b.push(a.instreamVideoAdRenderer),b;if(a.linearAdSequenceRenderer&&a.linearAdSequenceRenderer.linearAds){a=g.v(a.linearAdSequenceRenderer.linearAds);for(c=a.next();!c.done;c=a.next())c=c.value,g.S(c,CM)&&b.push(g.S(c,CM));return b}return null};
VDa=function(a){if(void 0===a.instreamVideoAdRenderer)return HG("AdPlacementSupportedRenderers without matching InstreamVideoAdRenderer"),!1;for(var b=g.v(a.xM),c=b.next();!c.done;c=b.next()){c=c.value;if(void 0===c.kN)return!1;if(void 0===c.wM)return HG("AdPlacementConfig for AdPlacementSupportedRenderers that matches an InstreamVideoAdRenderer is undefined"),!1;if(void 0===a.cE||void 0===c.JG||a.cE!==c.JG&&"AD_PLACEMENT_KIND_SELF_START"!==c.JG)return!1;if(void 0===a.instreamVideoAdRenderer.elementId)return HG("InstreamVideoAdRenderer has no elementId",
void 0,void 0,{kind:a.cE,"matching APSR kind":c.JG}),!1}return!0};
$Da=function(a,b){a.has(b)||a.set(b,{instreamVideoAdRenderer:void 0,cE:void 0,adVideoId:b,xM:[]});return a.get(b)};
jN=function(a,b,c,d,e,f,h,l,m){e?$Da(a,e).xM.push({yhb:b,JG:c,isContentVideoCompanion:d,wM:h,associatedCompositePlayerBytesLayoutId:f,adSlotLoggingData:l,kN:m}):HG("Companion AdPlacementSupportedRenderer without adVideoId")};
aEa=function(a){var b,c=null==(b=oJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:b.current;if(!c)return null;b=oJ(a.Ca,"metadata_type_ad_pod_skip_target_callback_ref");var d=a.layoutId,e=oJ(a.Ca,"metadata_type_content_cpn"),f=oJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),h=oJ(a.Ca,"metadata_type_player_underlay_renderer"),l=oJ(a.Ca,"metadata_type_ad_placement_config"),m=oJ(a.Ca,"metadata_type_video_length_seconds");var n=iJ(a.Ca,"metadata_type_layout_enter_ms")&&iJ(a.Ca,
"metadata_type_layout_exit_ms")?(oJ(a.Ca,"metadata_type_layout_exit_ms")-oJ(a.Ca,"metadata_type_layout_enter_ms"))/1E3:void 0;return{qq:d,contentCpn:e,NQ:c,yM:b,instreamAdPlayerOverlayRenderer:f,instreamAdPlayerUnderlayRenderer:h,adPlacementConfig:l,videoLengthSeconds:m,fJ:n,inPlayerLayoutId:oJ(a.Ca,"metadata_type_linked_in_player_layout_id"),inPlayerSlotId:oJ(a.Ca,"metadata_type_linked_in_player_slot_id")}};
dEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u){d=eK(d,"SLOT_TYPE_PLAYER_BYTES");a=bEa(e,a,h,c,d,m,n);if(a instanceof mJ)return a;var x;n=null==(x=oJ(a.Ca,"metadata_type_fulfilled_layout"))?void 0:x.layoutId;if(!n)return new mJ("Invalid adNotify layout");b=cEa(n,e,f,c,l,b,m,p,q,r,t,u,h);return b instanceof mJ?b:[a].concat(g.oa(b))};
cEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){c=eEa(b,c,d,f,h,l,m,n,p,q,r);if(c instanceof mJ)return c;a=fEa(b,a,h,e,c);return a instanceof mJ?a:[].concat(g.oa(a.Ag),[a.Tw])};
hEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){b=eEa(a,b,c,e,f,l,m,n,p,q,r,t);if(b instanceof mJ)return b;a=gEa(a,c,f,h,d,l.Cc,b);return a instanceof mJ?a:a.Ag.concat(a.Tw)};
eEa=function(a,b,c,d,e,f,h,l,m,n,p,q){var r=kN(d,c,n);return r instanceof lJ?new mJ(r):n.J.U().experiments.ib("html5_refactor_in_player_slot_generation")?function(t){var u=new dM(0,[r.fp]);t=iEa(b,r.layoutId,r.Co,c,lN(r.playerVars,r.gB,f,m,u),r.fp,e,u,h(t),l.get(r.Co.externalVideoId),q);u=[];if(r.Co.playerOverlay.instreamAdPlayerOverlayRenderer){var x=aEa(t);if(!x)return HG("Expected MediaLayout to carry valid data to create InPlayerSlot and PlayerOverlayForMediaLayout",void 0,t),{layout:t,Ag:[]};
u=[jEa(a,x.contentCpn,x.qq,function(F){return mN(b,F.slotId,"core",x,sJ(p,F))},x.inPlayerSlotId)].concat(g.oa(u));
if(x.instreamAdPlayerUnderlayRenderer&&kEa(n)){var B=x.instreamAdPlayerUnderlayRenderer;u=[lEa(a,x.contentCpn,x.qq,function(F){return mEa(b,F.slotId,B,x.adPlacementConfig,x.qq,sJ(p,F))})].concat(g.oa(u))}}return{layout:t,
Ag:u}}:function(t){var u=new dM(0,[r.fp]);
return{layout:iEa(b,r.layoutId,r.Co,c,lN(r.playerVars,r.gB,f,m,u),r.fp,e,u,h(t),l.get(r.Co.externalVideoId),q),Ag:[]}}};
kN=function(a,b,c){if(!a.playerVars)return new lJ("No playerVars available in InstreamVideoAdRenderer.");var d,e;if(null==a.elementId||null==a.playerVars||null==a.playerOverlay||null==(null==(d=a.playerOverlay)?void 0:d.instreamAdPlayerOverlayRenderer)&&null==(null==(e=a.playerOverlay)?void 0:e.playerOverlayLayoutRenderer)||null==a.pings||null==a.externalVideoId)return new lJ("Received invalid VOD InstreamVideoAdRenderer",{instreamVideoAdRenderer:a});d=HB(a.playerVars);e=Number(d.length_seconds);
isNaN(e)&&(e=0,HG("Expected valid length seconds in player vars but got NaN"));if(c.rf("AD_PLACEMENT_KIND_START"===b.kind)){if(void 0===a.layoutId)return new lJ("Expected server generated layout ID in instreamVideoAdRenderer");b=a.layoutId}else b=a.elementId;return{layoutId:b,Co:a,playerVars:d,gB:a.playerVars,fp:e}};
lN=function(a,b,c,d,e){a.iv_load_policy=d;b=HB(b);if(b.cta_conversion_urls)try{a.cta_conversion_urls=JSON.parse(b.cta_conversion_urls)}catch(f){HG(f)}c.yk&&(a.ctrl=c.yk);c.Cl&&(a.ytr=c.Cl);c.tv&&(a.ytrcc=c.tv);c.isMdxPlayback&&(a.mdx="1");a.vvt&&(a.vss_credentials_token=a.vvt,c.Lm&&(a.vss_credentials_token_type=c.Lm),c.mdxEnvironment&&(a.mdx_environment=c.mdxEnvironment));2<=e.B&&(a.slot_pos=e.j);a.autoplay="1";return a};
nEa=function(a){var b=new Map;a=g.v(a);for(var c=a.next();!c.done;c=a.next())(c=c.value.renderer.remoteSlotsRenderer)&&c.hostElementId&&b.set(c.hostElementId,c);return b};
tEa=function(a,b,c,d,e,f,h,l,m,n){for(var p=[],q=g.v(a),r=q.next();!r.done;r=q.next()){r=r.value;var t;if(t=!wDa(r)){var u=void 0;t="SLOT_TYPE_IN_PLAYER"!==(null==r?void 0:null==(u=r.adSlotMetadata)?void 0:u.slotType)}if(t){u="SLOT_TRIGGER_EVENT_BEFORE_CONTENT"===r.adSlotMetadata.triggerEvent;var x=m.rf(u);a:{var B=n;t=d;var F=c.WC,G=oEa(hN(r.slotEntryTrigger,t,F),x,r,B);if(G instanceof mJ)t=G;else{for(var H=[],O=g.v(r.slotFulfillmentTriggers),P=O.next();!P.done;P=O.next()){P=hN(P.value,t,F);if(P instanceof
mJ){t=P;break a}H.push(P)}H=pEa(H,x,r,B);x=[];B=g.v(r.slotExpirationTriggers);for(P=B.next();!P.done;P=B.next()){P=hN(P.value,t,F);if(P instanceof mJ){t=P;break a}x.push(P)}t={slotEntryTrigger:G,slotFulfillmentTriggers:H,slotExpirationTriggers:x}}}G=t;if(G instanceof mJ)return G;F=[];c.Cc&&F.push(new fJ({}));H=void 0;t={slotId:r.adSlotMetadata.slotId,slotType:r.adSlotMetadata.slotType,slotPhysicalPosition:null!=(H=r.adSlotMetadata.slotPhysicalPosition)?H:1,Ya:"core",slotEntryTrigger:G.slotEntryTrigger,
slotFulfillmentTriggers:G.slotFulfillmentTriggers,slotExpirationTriggers:G.slotExpirationTriggers};if(G=g.S(r.fulfillmentContent.fulfilledLayout,rDa)){if(!YM(G))return new mJ("Invalid PlayerBytesAdLayoutRenderer");G=qEa(t,G,b,c,d,e,f,h,l,m,n,a);if(G instanceof mJ)return G;F.push(new hJ(u));r=Object.assign({},t,{Ca:new nJ(F),fulfilledLayout:G.layout,adSlotLoggingData:r.adSlotMetadata.adSlotLoggingData});p.push.apply(p,g.oa(G.Ag));p.push(r)}else if(u=g.S(r.fulfillmentContent.fulfilledLayout,$M),G=F=
void 0,"LAYOUT_TYPE_PANEL_QR_CODE"!==(null==(F=u)?void 0:null==(G=F.adLayoutMetadata)?void 0:G.layoutType))if(u){if(!vDa(u))return new mJ("Invalid PlayerUnderlayAdLayoutRenderer");G=d;H=c.WC;P=f;F=r.adSlotMetadata.triggerEvent;"LAYOUT_TYPE_DISMISSABLE_PANEL_TEXT_PORTRAIT_IMAGE"===u.adLayoutMetadata.layoutType?(x=g.S(u.renderingContent,ZM))?(x=g.S(x.sidePanel,uDa))?(B={layoutId:u.adLayoutMetadata.layoutId,layoutType:u.adLayoutMetadata.layoutType,Ya:"core"},G=rEa(u,G,H),u=G instanceof mJ?G:Object.assign({},
B,{renderingContent:u.renderingContent,Lb:new Map([["impression",x.impressionPings||[]],["resume",x.resumePings||[]]])},G,{lc:sJ(P,t)(B),Ca:new nJ([new wI(sEa(F))]),adLayoutLoggingData:u.adLayoutMetadata.adLayoutLoggingData})):u=new mJ("DismissablePanelTextPortraitImageRenderer is missing"):u=new mJ("SqueezebackPlayerSidePanelRenderer is missing"):"LAYOUT_TYPE_DISPLAY_TRACKING"===u.adLayoutMetadata.layoutType?g.S(u.renderingContent,sDa)?(x={layoutId:u.adLayoutMetadata.layoutId,layoutType:u.adLayoutMetadata.layoutType,
Ya:"core"},G=rEa(u,G,H),u=G instanceof mJ?G:Object.assign({},x,{renderingContent:u.renderingContent,Lb:new Map},G,{lc:sJ(P,t)(x),Ca:new nJ([new wI(sEa(F))]),adLayoutLoggingData:u.adLayoutMetadata.adLayoutLoggingData})):u=new mJ("CounterfactualRenderer is missing"):u=new mJ("LayoutType ["+u.adLayoutMetadata.layoutType+"] is invalid for PlayerUnderlaySlot");if(u instanceof mJ)return u;r=Object.assign({},t,{Ca:new nJ([]),fulfilledLayout:u,adSlotLoggingData:r.adSlotMetadata.adSlotLoggingData});p.push(r)}else return new mJ("Unable to retrieve a client slot ["+
t.slotType+"] from a given AdSlotRenderer")}}return p};
qEa=function(a,b,c,d,e,f,h,l,m,n,p,q){var r=rEa(b,e,d.WC);if(r instanceof mJ)return r;if(g.S(b.renderingContent,CM)){d=uEa([b],d,l);if(d instanceof mJ)return d;if(1!==d.length)return new mJ("Only expected one media layout.");a=vEa(a,b,r,d[0],void 0,"core",c,e,f,h,m,q);return a instanceof mJ?a:{layout:a,Ag:[]}}var t=g.S(b.renderingContent,pDa);if(t){if(!AM(b.adLayoutMetadata))return new mJ("Invalid ad layout metadata");if(!qDa(t))return new mJ("Invalid sequential layout");t=t.sequentialLayouts.map(function(u){return u.playerBytesAdLayoutRenderer});
a=wEa(a,b.adLayoutMetadata,r,t,c,e,d,l,f,h,m,n,p,q);return a instanceof mJ?a:{layout:a.j5,Ag:a.Ag}}return new mJ("Not able to convert a sequential layout")};
wEa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){var u=new AI({current:null}),x=uEa(d,h,l);if(x instanceof mJ)return x;h=[];l=[];for(var B=void 0,F=0;F<d.length;F++){var G=d[F];if(g.S(G.renderingContent,CM)){B=vEa(a,G,xEa,x[F],PL(q)&&QL(q)?x[F+1]:void 0,"adapter",e,f,m,n,p,t);if(B instanceof mJ)return B;h.push(B);B=x[F]}else if(g.S(G.renderingContent,DM)){var H=a,O=n;if(YM(G)){var P=g.S(G.renderingContent,DM);if(P&&void 0!==P.playerVars){var Y={layoutId:G.adLayoutMetadata.layoutId,layoutType:G.adLayoutMetadata.layoutType,
Ya:"adapter"};P=HB(P.playerVars);P.autoplay="1";G=Object.assign({},Y,xEa,{renderingContent:G.renderingContent,Ca:new nJ([new XI({}),new wI({kind:"AD_PLACEMENT_KIND_START"}),new MI({current:null}),new QI(P)]),Lb:new Map,lc:sJ(O,H)(Y),adLayoutLoggingData:G.adLayoutMetadata.adLayoutLoggingData})}else G=new mJ("Invalid ad intro renderer")}else G=new mJ("Invalid PlayerBytesAdLayoutRenderer");if(G instanceof mJ)return G;h.push(G)}else if(g.S(G.renderingContent,EM)){a:{H=G.adLayoutMetadata.layoutId;O=g.v(e);
for(Y=O.next();!Y.done;Y=O.next()){Y=Y.value;var la=P=void 0,pa=(null==(P=Y.renderer)?void 0:null==(la=P.linearAdSequenceRenderer)?void 0:la.linearAds)||[];P=g.v(pa);for(la=P.next();!la.done;la=P.next())if((la=g.S(la.value,EM))&&void 0!==la.inPlayerSlotId&&void 0!==la.inPlayerLayoutId&&void 0!==la.associatedPlayerBytesLayoutId&&la.associatedPlayerBytesLayoutId===H){H={BH:la,adPlacementConfig:Y.config.adPlacementConfig};break a}}H=new mJ("Not able to find associated InPlayer slot for endcap")}if(H instanceof
mJ)return H;O=void 0;Y=a;P=n;var ua=H.adPlacementConfig;la=B;if(YM(G))if((pa=g.S(G.renderingContent,EM))&&void 0!==pa.durationMilliseconds){var na={layoutId:G.adLayoutMetadata.layoutId,layoutType:G.adLayoutMetadata.layoutType,Ya:"adapter"};ua=[new cJ(pa.durationMilliseconds),new eJ({impressionCommands:void 0,abandonCommands:pa.abandonCommands?[{commandExecutorCommand:pa.abandonCommands}]:void 0,completeCommands:pa.completionCommands}),new wI(ua),new KI(na.layoutType)];la&&(ua.push(new yI(la.Ky.j-
1)),ua.push(new VI(la.Ky.j)),ua.push(new zI(null!=(O=la.adPodSkipTarget)?O:-1)));G=Object.assign({},na,xEa,{renderingContent:G.renderingContent,Ca:new nJ(ua),Lb:pa.skipPings?new Map([["skip",pa.skipPings]]):new Map,lc:sJ(P,Y)(na),adLayoutLoggingData:G.adLayoutMetadata.adLayoutLoggingData})}else G=new mJ("Invalid endcap renderer");else G=new mJ("Invalid PlayerBytesAdLayoutRenderer");if(G instanceof mJ)return G;h.push(G);G=yEa(G.layoutId,r,f,H,u,n);if(G instanceof mJ)return G;l.push(G)}}b={layoutId:b.layoutId,
layoutType:b.layoutType,Ya:"core"};return{j5:Object.assign({},b,c,{GB:h,Lb:new Map,Ca:new nJ([u]),lc:sJ(n,a)(b)}),Ag:l}};
vEa=function(a,b,c,d,e,f,h,l,m,n,p,q){if(!YM(b))return new mJ("Invalid PlayerBytesAdLayoutRenderer");var r=g.S(b.renderingContent,CM);(null==r?0:r.pings)?r=mK(r.pings):(r=g.S(b.renderingContent,EM),r=(null==r?0:r.skipPings)?new Map([["skip",r.skipPings]]):new Map);if(r instanceof mJ)return r;f={layoutId:b.adLayoutMetadata.layoutId,layoutType:b.adLayoutMetadata.layoutType,Ya:f};var t=b.adLayoutMetadata.layoutId,u=g.S(b.renderingContent,CM);if(u&&BM(u)){var x=[];b:{var B=g.v(h);for(h=B.next();!h.done;h=
B.next()){h=h.value;var F=ZDa(h.renderer)||[],G=g.v(F);for(F=G.next();!F.done;F=G.next())if(F=F.value,F.associatedPlayerBytesLayoutId===t){F.associatedPlayerBytesLayoutId?(B=F.playerOverlay,G=void 0!==B&&void 0!==B.playerOverlayLayoutRenderer&&void 0!==B.playerOverlayLayoutRenderer.inPlayerSlotId&&void 0!==B.playerOverlayLayoutRenderer.inPlayerLayoutId,B=void 0!==B&&void 0!==B.instreamAdPlayerOverlayRenderer&&void 0!==B.instreamAdPlayerOverlayRenderer.inPlayerSlotId&&void 0!==B.instreamAdPlayerOverlayRenderer.inPlayerLayoutId||
G):B=!1;h=B?{instreamVideoAdRenderer:F,adPlacementConfig:h.config.adPlacementConfig}:new mJ("Invalid InPlayer shim");break b}}h=new mJ("Not able to find associated InPlayer slot")}if(h instanceof mJ)e=h;else{B=h.instreamVideoAdRenderer.playerOverlay.instreamAdPlayerOverlayRenderer;F=h.instreamVideoAdRenderer.playerOverlay.playerOverlayLayoutRenderer;var H;G=null!=(H=null==B?void 0:B.inPlayerSlotId)?H:null==F?void 0:F.inPlayerSlotId;var O;H=null!=(O=null==B?void 0:B.inPlayerLayoutId)?O:null==F?void 0:
F.inPlayerLayoutId;if(void 0===G)e=new mJ("InPlayer shim slot id is undefined");else if(void 0===H)e=new mJ("InPlayer shim layout id is undefined");else{x.push(new xI(d.Ky),new JI(H),new LI(G),new VI(d.Ky.j),new wI(h.adPlacementConfig));B&&x.push(new DI(B));F&&x.push(new EI(F));x.push(new BI(u.externalVideoId),new CI(l),new eJ({impressionCommands:u.impressionCommands,abandonCommands:u.onAbandonCommands,completeCommands:u.completeCommands,progressCommands:u.adVideoProgressCommands}),new QI(d.MC),new MI({current:null}),
new PI(d.Aaa.fp),new gJ(lK(u.pings)));b:{d=g.v(q);for(l=d.next();!l.done;l=d.next())if(l=l.value,"SLOT_TYPE_PLAYER_UNDERLAY"===l.adSlotMetadata.slotType&&(q=g.S(l.fulfillmentContent.fulfilledLayout,$M))&&(q=g.S(q.renderingContent,ZM))&&q.associatedPlayerBytesLayoutId===t){t=l;break b}t=void 0}t&&x.push(new GI(t));e&&x.push(new RI(e.MC));u.adNextParams&&x.push(new uI(u.adNextParams));u.clickthroughEndpoint&&x.push(new vI(u.clickthroughEndpoint));u.legacyInfoCardVastExtension&&x.push(new dJ(u.legacyInfoCardVastExtension));
u.sodarExtensionData&&x.push(new SI(u.sodarExtensionData));(e=m.get(u.externalVideoId))&&x.push(new aJ(e));e=new nJ(x)}}}else e=new mJ("Invalid vod media renderer");if(e instanceof mJ)return e;a=Object.assign({},f,c,{Lb:r,renderingContent:b.renderingContent,Ca:e,lc:sJ(n,a)(f),adLayoutLoggingData:b.adLayoutMetadata.adLayoutLoggingData});b=g.S(b.renderingContent,CM);if(!b||!BM(b))return new mJ("Invalid meida renderer");p=$Da(p,b.externalVideoId);p.instreamVideoAdRenderer=b;p.cE="AD_PLACEMENT_KIND_START";
return a};
yEa=function(a,b,c,d,e,f){function h(n){return nN(b,n)}
var l=d.BH.inPlayerSlotId,m={layoutId:d.BH.inPlayerLayoutId,layoutType:"LAYOUT_TYPE_ENDCAP",Ya:"core"};c={slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:new iM(h,a),slotFulfillmentTriggers:[new sM(h,l)],slotExpirationTriggers:[new tM(h,l),new pM(h,c)]};a=Object.assign({},m,{layoutExitNormalTriggers:[new kM(h,a)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Lb:new Map,Ca:new nJ([new HI(d.BH),new wI(d.adPlacementConfig),
e]),lc:sJ(f,c)(m),adLayoutLoggingData:d.BH.adLayoutLoggingData});return Object.assign({},c,{Ca:new nJ([new ZI(a)])})};
oEa=function(a,b,c,d){return b&&"SLOT_TYPE_PLAYER_BYTES"===c.adSlotMetadata.slotType&&a instanceof eM?new cM(function(e){return nN(d,e)},c.adSlotMetadata.slotId):a};
pEa=function(a,b,c,d){return b&&"SLOT_TYPE_PLAYER_BYTES"===c.adSlotMetadata.slotType?a.map(function(e){return e instanceof sM?new wM(function(f){return nN(d,f)},c.adSlotMetadata.slotId):e}):a};
rEa=function(a,b,c){for(var d=[],e=g.v(a.layoutExitNormalTriggers||[]),f=e.next();!f.done;f=e.next()){f=hN(f.value,b,c);if(f instanceof mJ)return f;d.push(f)}e=[];var h=g.v(a.layoutExitSkipTriggers||[]);for(f=h.next();!f.done;f=h.next()){f=hN(f.value,b,c);if(f instanceof mJ)return f;e.push(f)}h=[];var l=g.v(a.layoutExitMuteTriggers||[]);for(f=l.next();!f.done;f=l.next()){f=hN(f.value,b,c);if(f instanceof mJ)return f;h.push(f)}l=[];a=g.v(a.layoutExitUserInputSubmittedTriggers||[]);for(f=a.next();!f.done;f=
a.next()){f=hN(f.value,b,c);if(f instanceof mJ)return f;l.push(f)}return{layoutExitNormalTriggers:d,layoutExitSkipTriggers:e,layoutExitMuteTriggers:h,layoutExitUserInputSubmittedTriggers:l,Uc:[]}};
uEa=function(a,b,c){for(var d=[],e=g.v(a),f=e.next();!f.done;f=e.next())if(f=g.S(f.value.renderingContent,CM)){if(!BM(f))return new mJ("Invalid vod media renderer");d.push(zEa(f))}e=d.map(function(q){return q.fp});
f=[];for(var h=0,l=0;l<a.length;l++){var m=g.S(a[l].renderingContent,CM);if(m){var n=new dM(h,e),p=lN(d[h].playerVars,d[h].gB,b,c,n);f[l]={Ky:n,adPodSkipTarget:m.adPodSkipTarget,Aaa:d[h],MC:p};h++}}return f};
zEa=function(a){var b=HB(a.playerVars),c=Number(b.length_seconds);isNaN(c)&&(c=0,HG("Expected valid length seconds in player vars but got NaN"));return{playerVars:b,gB:a.playerVars,fp:c}};
sEa=function(a){switch(a){case "SLOT_TRIGGER_EVENT_LAYOUT_ID_ENTERED":return{kind:"AD_PLACEMENT_KIND_LAYOUT_ID_ENTERED"};case "SLOT_TRIGGER_EVENT_BEFORE_CONTENT":return{kind:"AD_PLACEMENT_KIND_START"};case "SLOT_TRIGGER_EVENT_CONTENT_OFFSET":return{kind:"AD_PLACEMENT_KIND_MILLISECONDS"};case "SLOT_TRIGGER_EVENT_AFTER_CONTENT":return{kind:"AD_PLACEMENT_KIND_END"};case "SLOT_TRIGGER_EVENT_CONTENT_PAUSED":return{kind:"AD_PLACEMENT_KIND_PAUSE"};default:return{kind:"AD_PLACEMENT_KIND_UNKNOWN"}}};
AEa=function(a){var b=0;a=g.v(a.questions);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c=g.S(c,aN)||g.S(c,bN)){var d=void 0;b+=(null==(d=c.surveyAdQuestionCommon)?void 0:d.durationMilliseconds)||0}return b};
BEa=function(a){var b,c,d,e,f=(null==(c=g.S(null==(b=a.questions)?void 0:b[0],aN))?void 0:c.surveyAdQuestionCommon)||(null==(e=g.S(null==(d=a.questions)?void 0:d[0],bN))?void 0:e.surveyAdQuestionCommon),h;b=[].concat(g.oa((null==(h=a.playbackCommands)?void 0:h.instreamAdCompleteCommands)||[]),g.oa((null==f?void 0:f.timeoutCommands)||[]));var l,m,n,p,q,r,t,u,x,B,F,G,H,O,P,Y,la,pa,ua,na;return{impressionCommands:null==(l=a.playbackCommands)?void 0:l.impressionCommands,errorCommands:null==(m=a.playbackCommands)?
void 0:m.errorCommands,muteCommands:null==(n=a.playbackCommands)?void 0:n.muteCommands,unmuteCommands:null==(p=a.playbackCommands)?void 0:p.unmuteCommands,pauseCommands:null==(q=a.playbackCommands)?void 0:q.pauseCommands,rewindCommands:null==(r=a.playbackCommands)?void 0:r.rewindCommands,resumeCommands:null==(t=a.playbackCommands)?void 0:t.resumeCommands,skipCommands:null==(u=a.playbackCommands)?void 0:u.skipCommands,progressCommands:null==(x=a.playbackCommands)?void 0:x.progressCommands,Lhb:null==
(B=a.playbackCommands)?void 0:B.clickthroughCommands,fullscreenCommands:null==(F=a.playbackCommands)?void 0:F.fullscreenCommands,activeViewViewableCommands:null==(G=a.playbackCommands)?void 0:G.activeViewViewableCommands,activeViewMeasurableCommands:null==(H=a.playbackCommands)?void 0:H.activeViewMeasurableCommands,activeViewFullyViewableAudibleHalfDurationCommands:null==(O=a.playbackCommands)?void 0:O.activeViewFullyViewableAudibleHalfDurationCommands,activeViewAudioAudibleCommands:null==(P=a.playbackCommands)?
void 0:null==(Y=P.activeViewTracking)?void 0:Y.activeViewAudioAudibleCommands,activeViewAudioMeasurableCommands:null==(la=a.playbackCommands)?void 0:null==(pa=la.activeViewTracking)?void 0:pa.activeViewAudioMeasurableCommands,endFullscreenCommands:null==(ua=a.playbackCommands)?void 0:ua.endFullscreenCommands,abandonCommands:null==(na=a.playbackCommands)?void 0:na.abandonCommands,completeCommands:b}};
EEa=function(a,b,c,d,e,f,h){return function(l,m){return CEa(a,m.slotId,l,f,function(n,p){n=h(n);return DEa(b,m.layoutId,p,e,n,"LAYOUT_TYPE_SURVEY",[new Mya(c),d],c.adLayoutLoggingData)})}};
HEa=function(a,b,c,d,e,f,h){if(!FEa(a))return new mJ("Invalid InstreamVideoAdRenderer for SlidingText.",{instreamVideoAdRenderer:a});var l=a.additionalPlayerOverlay.slidingTextPlayerOverlayRenderer;return[GEa(f,b,c,d,function(m){var n=h(m);m=m.slotId;m=SJ(e.eb.get(),"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",m);var p={layoutId:m,layoutType:"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",Ya:"core"},q=new kM(e.j,d);return{layoutId:m,layoutType:"LAYOUT_TYPE_SLIDING_TEXT_PLAYER_OVERLAY",Lb:new Map,layoutExitNormalTriggers:[q],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new Nya(l)]),lc:n(p)}})]};
FEa=function(a){a=g.S(null==a?void 0:a.additionalPlayerOverlay,IEa);if(!a)return!1;var b=a.slidingMessages;return a.title&&b&&0!==b.length?!0:!1};
KEa=function(a,b,c,d,e){var f;if(null==(f=a.playerOverlay)||!f.instreamSurveyAdRenderer)return function(){return[]};
if(!CDa(a))return function(){return new mJ("Received invalid InstreamVideoAdRenderer for DAI survey.",{instreamVideoAdRenderer:a})};
var h=a.playerOverlay.instreamSurveyAdRenderer,l=AEa(h);return 0>=l?function(){return new mJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:h})}:function(m,n){var p=JEa(m,c,d,function(q){var r=n(q),t=q.slotId;
q=BEa(h);t=SJ(e.eb.get(),"LAYOUT_TYPE_SURVEY",t);var u={layoutId:t,layoutType:"LAYOUT_TYPE_SURVEY",Ya:"core"},x=new kM(e.j,d),B=new rM(e.j,t),F=new yM(e.j,t),G=new iDa(e.j);return{layoutId:t,layoutType:"LAYOUT_TYPE_SURVEY",Lb:new Map,layoutExitNormalTriggers:[x,G],layoutExitSkipTriggers:[B],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[F],Uc:[],Ya:"core",Ca:new nJ([new Lya(h),new wI(b),new bJ(l/1E3),new eJ(q)]),lc:r(u),adLayoutLoggingData:h.adLayoutLoggingData}});
m=HEa(a,c,p.slotId,d,e,m,n);return m instanceof mJ?m:[p].concat(g.oa(m))}};
SEa=function(a,b,c,d,e,f,h){h=void 0===h?!1:h;var l=[];try{var m=[];if(c.renderer.linearAdSequenceRenderer)var n=function(x){x=LEa(x.slotId,c,b,e(x),d,f,h);m=x.Xba;return x.v5};
else if(c.renderer.instreamVideoAdRenderer)n=function(x){var B=x.slotId;x=e(x);var F=h,G=c.config.adPlacementConfig,H=MEa(G),O=H.bW,P=H.fW;H=c.renderer.instreamVideoAdRenderer;var Y;if(null==H?0:null==(Y=H.playerOverlay)?0:Y.instreamSurveyAdRenderer)throw new TypeError("Survey overlay should not be set on single video.");var la=NEa(H,F);Y=Math.min(O+1E3*la.videoLengthSeconds,P);F=new dM(0,[la.videoLengthSeconds]);P=la.videoLengthSeconds;var pa=la.playerVars,ua=la.instreamAdPlayerOverlayRenderer,na=
la.adVideoId,wa=OEa(c),ea=la.Lb;la=la.WU;var Ea=null==H?void 0:H.adLayoutLoggingData;H=null==H?void 0:H.sodarExtensionData;B=SJ(b.eb.get(),"LAYOUT_TYPE_MEDIA",B);var Z={layoutId:B,layoutType:"LAYOUT_TYPE_MEDIA",Ya:"core"};return{layoutId:B,layoutType:"LAYOUT_TYPE_MEDIA",Lb:ea,layoutExitNormalTriggers:[new dDa(b.j)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new CI(d),new PI(P),new QI(pa),new TI(O),new UI(Y),ua&&new DI(ua),
new wI(G),new BI(na),new xI(F),new YI(wa),H&&new SI(H),new MI({current:null}),new WI({}),new gJ(la)].filter(PEa)),lc:x(Z),adLayoutLoggingData:Ea}};
else throw new TypeError("Expected valid AdPlacementRenderer for DAI");var p=QEa(a,d,c.adSlotLoggingData,n);l.push(p);for(var q=g.v(m),r=q.next();!r.done;r=q.next()){var t=r.value,u=t(a,e);if(u instanceof mJ)return u;l.push.apply(l,g.oa(u))}}catch(x){return new mJ(x,{errorMessage:x.message,AdPlacementRenderer:c,numberOfSurveyRenderers:REa(c)})}return l};
REa=function(a){a=(a.renderer.linearAdSequenceRenderer||{}).linearAds;return null!=a&&a.length?a.filter(function(b){var c,d;return null!=(null==(c=g.S(b,CM))?void 0:null==(d=c.playerOverlay)?void 0:d.instreamSurveyAdRenderer)}).length:0};
LEa=function(a,b,c,d,e,f,h){var l=b.config.adPlacementConfig,m=MEa(l),n=m.bW,p=m.fW;m=(b.renderer.linearAdSequenceRenderer||{}).linearAds;if(null==m||!m.length)throw new TypeError("Expected linear ads");var q=[],r={N_:n,O_:0,Uba:q};m=m.map(function(u){return TEa(a,u,r,c,d,l,e,p,h)}).map(function(u,x){x=new dM(x,q);
return u(x)});
var t=m.map(function(u){return u.w5});
return{v5:UEa(c,a,n,t,l,OEa(b),d,p,f),Xba:m.map(function(u){return u.Wba})}};
TEa=function(a,b,c,d,e,f,h,l,m){var n=NEa(g.S(b,CM),m),p=c.N_,q=c.O_,r=Math.min(p+1E3*n.videoLengthSeconds,l);c.N_=r;c.O_++;c.Uba.push(n.videoLengthSeconds);var t,u,x=null==(t=g.S(b,CM))?void 0:null==(u=t.playerOverlay)?void 0:u.instreamSurveyAdRenderer;if("nPpU29QrbiU"===n.adVideoId&&null==x)throw new TypeError("Survey slate media has no survey overlay");return function(B){var F=n.playerVars;2<=B.B&&(F.slot_pos=B.j);F.autoplay="1";var G,H;F=n.videoLengthSeconds;var O=n.playerVars,P=n.Lb,Y=n.WU,la=
n.instreamAdPlayerOverlayRenderer,pa=n.adVideoId,ua=null==(G=g.S(b,CM))?void 0:G.adLayoutLoggingData;G=null==(H=g.S(b,CM))?void 0:H.sodarExtensionData;H=SJ(d.eb.get(),"LAYOUT_TYPE_MEDIA",a);var na={layoutId:H,layoutType:"LAYOUT_TYPE_MEDIA",Ya:"adapter"};B={layoutId:H,layoutType:"LAYOUT_TYPE_MEDIA",Lb:P,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"adapter",Ca:new nJ([new CI(h),new PI(F),new QI(O),new TI(p),new UI(r),
new VI(q),new MI({current:null}),la&&new DI(la),new wI(f),new BI(pa),new xI(B),G&&new SI(G),x&&new Tya(x),new WI({}),new gJ(Y)].filter(PEa)),lc:e(na),adLayoutLoggingData:ua};F=KEa(g.S(b,CM),f,h,B.layoutId,d);return{w5:B,Wba:F}}};
NEa=function(a,b){if(!a)throw new TypeError("Expected instream video ad renderer");if(!a.playerVars)throw new TypeError("Expected player vars in url encoded string");var c=HB(a.playerVars),d=Number(c.length_seconds);if(isNaN(d))throw new TypeError("Expected valid length seconds in player vars");var e=Number(a.trimmedMaxNonSkippableAdDurationMs);d=isNaN(e)?d:Math.min(d,e/1E3);e=a.playerOverlay||{};e=void 0===e.instreamAdPlayerOverlayRenderer?null:e.instreamAdPlayerOverlayRenderer;var f=c.video_id;
f||(f=(f=a.externalVideoId)?f:void 0);if(!f)throw new TypeError("Expected valid video id in IVAR");if(b&&0===d){var h;b=null!=(h=VEa[f])?h:d}else b=d;return{playerVars:c,videoLengthSeconds:b,instreamAdPlayerOverlayRenderer:e,adVideoId:f,Lb:a.pings?mK(a.pings):new Map,WU:lK(a.pings)}};
OEa=function(a){a=Number(a.driftRecoveryMs);return isNaN(a)||0>=a?null:a};
MEa=function(a){var b=a.adTimeOffset||{};a=b.offsetEndMilliseconds;b=Number(b.offsetStartMilliseconds);if(isNaN(b))throw new TypeError("Expected valid start offset");a=Number(a);if(isNaN(a))throw new TypeError("Expected valid end offset");return{bW:b,fW:a}};
XEa=function(a,b,c,d,e,f,h,l){var m=c.pings;return m?[WEa(a,f,e,function(n){var p=n.slotId;n=l(n);var q=c.adLayoutLoggingData;p=SJ(b.eb.get(),"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",p);var r={layoutId:p,layoutType:"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",Ya:"core"};return{layoutId:p,layoutType:"LAYOUT_TYPE_DISCOVERY_PLAYBACK_TRACKER",Lb:mK(m),layoutExitNormalTriggers:[new pM(b.j,f)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new wI(d),
new gJ(lK(m)),new PI(h/1E3)]),lc:n(r),adLayoutLoggingData:q}})]:new mJ("VideoAdTrackingRenderer without VideoAdTracking pings filled.",{videoAdTrackingRenderer:c})};
ZEa=function(a,b,c,d,e,f,h,l){a=YEa(a,c,f,h,d,function(m){var n=m.slotId;m=l(m);n=SJ(b.eb.get(),"LAYOUT_TYPE_FORECASTING",n);var p={layoutId:n,layoutType:"LAYOUT_TYPE_FORECASTING",Ya:"core"},q=new Map,r=e.impressionUrls;r&&q.set("impression",r);return{layoutId:n,layoutType:"LAYOUT_TYPE_FORECASTING",Lb:q,layoutExitNormalTriggers:[new oM(b.j,n)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new Qya(e),new wI(c)]),lc:m(p)}});
return a instanceof mJ?a:[a]};
aFa=function(a,b,c,d,e,f,h){return[$Ea(a,f,d,function(l){var m=l.slotId;l=h(l);m=SJ(b.eb.get(),"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",m);var n={layoutId:m,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Ya:"core"};return{layoutId:m,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Lb:new Map,layoutExitNormalTriggers:[new pM(b.j,f)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new DI(e),new wI(c)]),lc:l(n),adLayoutLoggingData:e.adLayoutLoggingData}})]};
eFa=function(a,b,c,d,e,f,h,l){a=bFa(a,c,f,h,d,function(m,n){var p=m.slotId;m=l(m);var q=e.contentSupportedRenderer;q?q.textOverlayAdContentRenderer?(q=SJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY",p),n=cFa(b,q,"LAYOUT_TYPE_IN_VIDEO_TEXT_OVERLAY",e,c,m,dFa(b,n,p))):q.enhancedTextOverlayAdContentRenderer?(q=SJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY",p),n=cFa(b,q,"LAYOUT_TYPE_IN_VIDEO_ENHANCED_TEXT_OVERLAY",e,c,m,dFa(b,n,p))):q.imageOverlayAdContentRenderer?(q=SJ(b.eb.get(),"LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY",
p),n=dFa(b,n,p),n.push(new lDa(b.j,q)),n=cFa(b,q,"LAYOUT_TYPE_IN_VIDEO_IMAGE_OVERLAY",e,c,m,n)):n=new lJ("InvideoOverlayAdRenderer without appropriate sub renderer"):n=new lJ("InvideoOverlayAdRenderer without contentSupportedRenderer");return n});
return a instanceof mJ?a:[a]};
hFa=function(a,b,c,d,e,f,h,l,m){var n=Number(d.durationMilliseconds);return isNaN(n)?new mJ("Expected valid duration for AdActionInterstitialRenderer."):function(p){return fFa(b,p.slotId,c,d,n,{impressionCommands:void 0,abandonCommands:d.abandonCommands?[{commandExecutorCommand:d.abandonCommands}]:void 0,completeCommands:d.completionCommands},d.skipPings?new Map([["skip",d.skipPings]]):new Map,h(p),function(q){return gFa(a,q,e,function(r,t){var u=r.slotId;r=h(r);u=SJ(b.eb.get(),"LAYOUT_TYPE_ENDCAP",
u);return DEa(b,u,t,c,r,"LAYOUT_TYPE_ENDCAP",[new HI(d),l],d.adLayoutLoggingData)})},m,f-1,d.adLayoutLoggingData,f)}};
iFa=function(a,b,c,d){if(!c.playerVars)return new mJ("No playerVars available in AdIntroRenderer.");var e=HB(c.playerVars);e.autoplay="1";return function(f){var h=f.slotId;f=d(f);h=SJ(a.eb.get(),"LAYOUT_TYPE_MEDIA",h);var l={layoutId:h,layoutType:"LAYOUT_TYPE_MEDIA",Ya:"adapter"};return{Dk:{layoutId:h,layoutType:"LAYOUT_TYPE_MEDIA",Lb:new Map,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"adapter",Ca:new nJ([new XI({}),
new wI(b),new MI({current:null}),new QI(e)]),lc:f(l)},Yl:[new jM(a.j,h,["error"])],Tj:[],Zy:[],Yy:[]}}};
kFa=function(a,b,c,d,e,f,h,l,m,n){n=void 0===n?!1:n;var p=AEa(e);if(!BDa(e,n))return new mJ("Received invalid InstreamSurveyAdRenderer for VOD composite survey.",{InstreamSurveyAdRenderer:e});if(0>=p)return new mJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:e});var q=EEa(a,b,e,f,c,d,h);return q instanceof mJ?q:function(r){return jFa(b,r.slotId,c,p,e,BEa(e),h(r),q,l,m)}};
mFa=function(a,b,c,d,e,f,h,l){function m(q){return gFa(a,q,d,n)}
function n(q,r){var t=q.slotId;q=h(q);t=SJ(b.eb.get(),"LAYOUT_TYPE_VIDEO_INTERSTITIAL_BUTTONED_LEFT",t);return DEa(b,t,r,c,q,"LAYOUT_TYPE_VIDEO_INTERSTITIAL_BUTTONED_LEFT",[new Kya(e),f],e.adLayoutLoggingData)}
if(!GDa(e))return new mJ("Received invalid SurveyTextInterstitialRenderer.",{SurveyTextInterstitialRenderer:e});var p=1E3*e.timeoutSeconds;return function(q){var r={impressionCommands:e.impressionCommands,completeCommands:e.timeoutCommands,skipCommands:e.dismissCommands},t=h(q);q=lFa(b,q.slotId,c,p,r,new Map,t,m,void 0,oN(b,c,e.layoutId,"createSubLayoutVodMediaBreakLayoutForSurveyInterstitial"));r=new JI(q.PJ);t=new yI(l);return{Dk:{layoutId:q.layoutId,layoutType:q.layoutType,Lb:q.Lb,layoutExitNormalTriggers:[],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:q.Ya,Ca:new nJ([].concat(g.oa(q.Wy),[r,t])),lc:q.lc,adLayoutLoggingData:q.adLayoutLoggingData},Yl:[],Tj:q.layoutExitMuteTriggers,Zy:q.layoutExitUserInputSubmittedTriggers,Yy:q.Uc,Mg:q.Mg}}};
oFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t,u,x){a=eK(a,"SLOT_TYPE_PLAYER_BYTES");d=bEa(b,h,d,e,a,n,p);if(d instanceof mJ)return d;var B;h=null==(B=oJ(d.Ca,"metadata_type_fulfilled_layout"))?void 0:B.layoutId;if(!h)return new mJ("Invalid adNotify layout");b=nFa(h,b,c,e,f,m,l,n,q,r,t,u,x);return b instanceof mJ?b:[d].concat(g.oa(b))};
nFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){c=pFa(b,c,d,f,h,l,m,n,p,q,r);qFa(f)?(d=rFa(b,a),a=eK(b.eb.get(),"SLOT_TYPE_IN_PLAYER"),f=SJ(b.eb.get(),"LAYOUT_TYPE_SURVEY",a),l=sFa(b,d,l),b=[].concat(g.oa(l.slotExpirationTriggers),[new fM(b.j,f)]),a=c({slotId:l.slotId,slotType:l.slotType,slotPhysicalPosition:l.slotPhysicalPosition,slotEntryTrigger:l.slotEntryTrigger,slotFulfillmentTriggers:l.slotFulfillmentTriggers,slotExpirationTriggers:b,Ya:l.Ya},{slotId:a,layoutId:f}),e=a instanceof mJ?a:{Tw:Object.assign({},
l,{slotExpirationTriggers:b,Ca:new nJ([new ZI(a.layout)]),adSlotLoggingData:e}),Ag:a.Ag}):e=fEa(b,a,l,e,c);return e instanceof mJ?e:[].concat(g.oa(e.Ag),[e.Tw])};
wFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){b=pFa(a,b,c,e,f,h,m,n,p,q,r,t);qFa(e)?(e=tFa(a,c,h,l),e instanceof mJ?a=e:(l=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=SJ(a.eb.get(),"LAYOUT_TYPE_SURVEY",l),h=[].concat(g.oa(e.slotExpirationTriggers),[new fM(a.j,m)]),l=b({slotId:e.slotId,slotType:e.slotType,slotPhysicalPosition:e.slotPhysicalPosition,Ya:e.Ya,slotEntryTrigger:e.slotEntryTrigger,slotFulfillmentTriggers:e.slotFulfillmentTriggers,slotExpirationTriggers:h},{slotId:l,layoutId:m}),a=l instanceof mJ?
l:{Tw:{slotId:e.slotId,slotType:e.slotType,slotPhysicalPosition:e.slotPhysicalPosition,slotEntryTrigger:uFa(a,c,e.slotId,e.slotEntryTrigger),slotFulfillmentTriggers:vFa(a,c,e.slotId,e.slotFulfillmentTriggers),slotExpirationTriggers:h,Ya:e.Ya,Ca:new nJ([new hJ(pN(c)),new ZI(l.layout)]),adSlotLoggingData:d},Ag:l.Ag})):a=gEa(a,c,h,l,d,m.Cc,b);return a instanceof mJ?a:a.Ag.concat(a.Tw)};
qFa=function(a){a=g.v(a);for(var b=a.next();!b.done;b=a.next())if(g.S(b.value,WM))return!0;return!1};
pFa=function(a,b,c,d,e,f,h,l,m,n,p,q){return function(r,t){if(PL(p)&&QL(p))a:{var u=xFa(d,c,p);if(u instanceof mJ)t=u;else{for(var x=0,B=[],F=[],G=[],H=[],O=[],P=[],Y=new NI({current:null}),la=new AI({current:null}),pa=!1,ua=[],na=0,wa=[],ea=0;ea<d.length;ea++){var Ea=d[ea],Z=g.S(Ea,CM);if(Z){Z=kN(Z,c,p);if(Z instanceof lJ){t=new mJ(Z);break a}var Qa=new dM(na,u),z=lN(Z.playerVars,Z.gB,h,n,Qa);na++;wa[ea]={renderer:Ea,data:Z,Ky:Qa,MC:z}}}na=-1;for(u=0;u<d.length;u++)if(ea=d[u],Ea=g.S(ea,DM)){ea=iFa(b,
c,Ea,l);if(ea instanceof mJ){t=ea;break a}ea=ea(r);B.push(ea.Dk);F=[].concat(g.oa(ea.Yl),g.oa(F));G=[].concat(g.oa(ea.Tj),g.oa(G));ea.Mg&&(ua=[ea.Mg].concat(g.oa(ua)))}else if(g.S(ea,CM))Ea=wa[u],na=Ea.data,ea=Ea.Ky,Ea=Ea.MC,Z=wa[u+1],Qa=void 0,Z&&(Qa=Z.MC),ea=yFa(b,na.layoutId,na.Co,c,Ea,na.fp,f,ea,l(r),la,m.get(na.Co.externalVideoId),Qa,q),x++,B.push(ea.Dk),F=[].concat(g.oa(ea.Yl),g.oa(F)),G=[].concat(g.oa(ea.Tj),g.oa(G)),pa||(P.push(la),pa=!0),na=(na=na.Co.adPodSkipTarget)&&0<na?na:-1;else if(Ea=
g.S(ea,EM)){ea=hFa(a,b,c,Ea,f,x,l,la,na);if(ea instanceof mJ){t=ea;break a}ea=ea(r);B.push(ea.Dk);F=[].concat(g.oa(ea.Yl),g.oa(F));G=[].concat(g.oa(ea.Tj),g.oa(G));ea.Mg&&(ua=[ea.Mg].concat(g.oa(ua)))}else if(Ea=g.S(ea,WM)){if(void 0===t){t=new mJ("Composite Survey must already have a Survey Bundle with required metadata.",{instreamSurveyAdRenderer:Ea});break a}ea=kFa(a,b,c,f,Ea,Y,l,t,x,qN(p,"supports_multi_step_on_desktop"));if(ea instanceof mJ){t=ea;break a}ea=ea(r);B.push(ea.Dk);ea.Mg&&ua.push(ea.Mg);
F=[].concat(g.oa(ea.Yl),g.oa(F));G=[].concat(g.oa(ea.Tj),g.oa(G));H=[].concat(g.oa(ea.Zy),g.oa(H));O=[].concat(g.oa(ea.Yy),g.oa(O));P=[Y].concat(g.oa(P))}else if(ea=g.S(ea,XM)){ea=mFa(a,b,c,f,ea,Y,l,x);if(ea instanceof mJ){t=ea;break a}ea=ea(r);B.push(ea.Dk);ea.Mg&&ua.push(ea.Mg);G=[].concat(g.oa(ea.Tj),g.oa(G))}else{t=new mJ("Unsupported linearAd found in LinearAdSequenceRenderer.");break a}t={GB:B,layoutExitSkipTriggers:F,layoutExitUserInputSubmittedTriggers:H,Uc:O,layoutExitMuteTriggers:G,Wy:P,
Ag:ua}}}else a:if(x=xFa(d,c,p),x instanceof mJ)t=x;else{B=0;F=[];G=[];H=[];O=[];P=[];Y=[];la=new NI({current:null});pa=new AI({current:null});ua=!1;wa=[];na=-1;u=g.v(d);for(ea=u.next();!ea.done;ea=u.next())if(ea=ea.value,g.S(ea,DM)){ea=iFa(b,c,g.S(ea,DM),l);if(ea instanceof mJ){t=ea;break a}ea=ea(r);F.push(ea.Dk);G=[].concat(g.oa(ea.Yl),g.oa(G));H=[].concat(g.oa(ea.Tj),g.oa(H));ea.Mg&&(wa=[ea.Mg].concat(g.oa(wa)))}else if(g.S(ea,CM)){na=kN(g.S(ea,CM),c,p);if(na instanceof lJ){t=new mJ(na);break a}ea=
new dM(B,x);ea=yFa(b,na.layoutId,na.Co,c,lN(na.playerVars,na.gB,h,n,ea),na.fp,f,ea,l(r),pa,m.get(na.Co.externalVideoId),void 0,q);B++;F.push(ea.Dk);G=[].concat(g.oa(ea.Yl),g.oa(G));H=[].concat(g.oa(ea.Tj),g.oa(H));ua||(Y.push(pa),ua=!0);na=(na=na.Co.adPodSkipTarget)&&0<na?na:-1}else if(g.S(ea,EM)){ea=hFa(a,b,c,g.S(ea,EM),f,B,l,pa,na);if(ea instanceof mJ){t=ea;break a}ea=ea(r);F.push(ea.Dk);G=[].concat(g.oa(ea.Yl),g.oa(G));H=[].concat(g.oa(ea.Tj),g.oa(H));ea.Mg&&(wa=[ea.Mg].concat(g.oa(wa)))}else if(g.S(ea,
WM)){if(void 0===t){t=new mJ("Composite Survey must already have a Survey Bundle with required metadata.",{instreamSurveyAdRenderer:g.S(ea,WM)});break a}ea=kFa(a,b,c,f,g.S(ea,WM),la,l,t,B,qN(p,"supports_multi_step_on_desktop"));if(ea instanceof mJ){t=ea;break a}ea=ea(r);F.push(ea.Dk);ea.Mg&&wa.push(ea.Mg);G=[].concat(g.oa(ea.Yl),g.oa(G));H=[].concat(g.oa(ea.Tj),g.oa(H));O=[].concat(g.oa(ea.Zy),g.oa(O));P=[].concat(g.oa(ea.Yy),g.oa(P));Y=[la].concat(g.oa(Y))}else if(g.S(ea,XM)){ea=mFa(a,b,c,f,g.S(ea,
XM),la,l,B);if(ea instanceof mJ){t=ea;break a}ea=ea(r);F.push(ea.Dk);ea.Mg&&wa.push(ea.Mg);H=[].concat(g.oa(ea.Tj),g.oa(H))}else{t=new mJ("Unsupported linearAd found in LinearAdSequenceRenderer.");break a}t={GB:F,layoutExitSkipTriggers:G,layoutExitUserInputSubmittedTriggers:O,Uc:P,layoutExitMuteTriggers:H,Wy:Y,Ag:wa}}t instanceof mJ?r=t:(P=r.slotId,x=t.GB,B=t.layoutExitSkipTriggers,F=t.layoutExitMuteTriggers,G=t.layoutExitUserInputSubmittedTriggers,H=t.Wy,r=l(r),O=e?e.layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",
P=e?e.layoutId:SJ(b.eb.get(),O,P),Y={layoutId:P,layoutType:O,Ya:"core"},r={layout:{layoutId:P,layoutType:O,Lb:new Map,layoutExitNormalTriggers:[new oM(b.j,P)],layoutExitSkipTriggers:B,layoutExitMuteTriggers:F,layoutExitUserInputSubmittedTriggers:G,Uc:[],Ya:"core",Ca:new nJ([new OI(x)].concat(g.oa(H))),lc:r(Y)},Ag:t.Ag});return r}};
xFa=function(a,b,c){var d=[];a=g.v(a);for(var e=a.next();!e.done;e=a.next())if(e=e.value,g.S(e,CM)){e=kN(g.S(e,CM),b,c);if(e instanceof lJ)return new mJ(e);d.push(e.fp)}return d};
AFa=function(a,b,c,d,e,f,h,l){if(!BDa(c,void 0===l?!1:l))return new mJ("Received invalid InstreamSurveyAdRenderer for VOD single survey.",{InstreamSurveyAdRenderer:c});var m=AEa(c);if(0>=m)return new mJ("InstreamSurveyAdRenderer should have valid duration.",{instreamSurveyAdRenderer:c});var n=new NI({current:null}),p=EEa(a,b,c,n,d,f,h);return zFa(a,d,f,m,e,function(q,r){var t=q.slotId,u=BEa(c);q=h(q);var x,B=null!=(x=oN(b,d,c.layoutId,"createMediaBreakLayoutAndAssociatedInPlayerSlotForVodSurvey"))?
x:SJ(b.eb.get(),"LAYOUT_TYPE_MEDIA_BREAK",t);t={layoutId:B,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Ya:"core"};x=p(B,r);var F=oJ(x.Ca,"metadata_type_fulfilled_layout");F||HG("Could not retrieve overlay layout ID during VodMediaBreakLayout for survey creation. This should never happen.");u=[new wI(d),new cJ(m),new eJ(u),n];F&&u.push(new KI(F.layoutType));return{i8:{layoutId:B,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Lb:new Map,layoutExitNormalTriggers:[new oM(b.j,B)],layoutExitSkipTriggers:[new rM(b.j,r.layoutId)],
layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[new yM(b.j,r.layoutId)],Uc:[],Ya:"core",Ca:new nJ(u),lc:q(t)},v7:x}})};
BFa=function(a){if(!FDa(a))return!1;var b=g.S(a.adVideoStart,rN);return b?g.S(a.linearAd,CM)&&nDa(b)?!0:(HG("Invalid Sandwich with notify"),!1):!1};
CFa=function(a){if(null==a.linearAds)return!1;a=g.S(a.adStart,rN);return a?nDa(a)?!0:(HG("Invalid LASR with notify"),!1):!1};
DFa=function(a){if(!EDa(a))return!1;a=g.S(a.adStart,rN);return a?nDa(a)?!0:(HG("Invalid LASR with notify"),!1):!1};
sN=function(a,b,c,d,e,f,h,l){this.eb=a;this.Kb=b;this.Bb=c;this.Fa=d;this.Yb=e;this.j=f;this.Vj=h;this.loadPolicy=void 0===l?1:l};
LDa=function(a,b,c,d,e,f,h,l,m){var n=[];if(0===b.length&&0===d.length&&0===c.length)return n;b=b.filter(oDa);var p=c.filter(zDa),q=d.filter(oDa),r=new Map,t=nEa(b),u=c.some(function(ea){var Ea;return"SLOT_TYPE_PLAYER_BYTES"===(null==ea?void 0:null==(Ea=ea.adSlotMetadata)?void 0:Ea.slotType)});
c=c.some(function(ea){var Ea;return"SLOT_TYPE_PLAYER_UNDERLAY"===(null==ea?void 0:null==(Ea=ea.adSlotMetadata)?void 0:Ea.slotType)});
if(u||c)c=tEa(p,b,l,e,t,a.Yb.get(),a.loadPolicy,r,a.Fa.get(),a.eb.get()),c instanceof mJ?HG(c,void 0,void 0,{contentCpn:e}):n.push.apply(n,g.oa(c));c=g.v(b);for(var x=c.next();!x.done;x=c.next()){x=x.value;var B=EFa(a,r,x,e,f,h,u,l,t,m,p);B instanceof mJ?HG(B,void 0,void 0,{renderer:x.renderer,config:x.config.adPlacementConfig,kind:x.config.adPlacementConfig.kind,contentCpn:e,daiEnabled:h}):n.push.apply(n,g.oa(B))}FFa(a.Fa.get())||(f=GFa(a,q,e,l,t,r),n.push.apply(n,g.oa(f)));if(null===a.j||h&&!l.PV){var F,
G,H;a=l.Cc&&1===b.length&&"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"===(null==(F=b[0].config)?void 0:null==(G=F.adPlacementConfig)?void 0:G.kind)&&(null==(H=b[0].renderer)?void 0:H.adBreakServiceRenderer);if(!n.length&&!a){var O,P,Y,la;HG("Expected slots parsed from AdPlacementRenderers for DAI",void 0,void 0,{"AdPlacementRenderer count":b.length,contentCpn:e,"first APR kind":null==(O=b[0])?void 0:null==(P=O.config)?void 0:null==(Y=P.adPlacementConfig)?void 0:Y.kind,renderer:null==(la=b[0])?void 0:la.renderer})}return n}F=
d.filter(oDa);n.push.apply(n,g.oa(YDa(r,F,a.Kb.get(),a.j,e,u)));if(!n.length){var pa,ua,na,wa;HG("Expected slots parsed from AdPlacementRenderers",void 0,void 0,{"AdPlacementRenderer count":b.length,contentCpn:e,daiEnabled:h.toString(),"first APR kind":null==(pa=b[0])?void 0:null==(ua=pa.config)?void 0:null==(na=ua.adPlacementConfig)?void 0:na.kind,renderer:null==(wa=b[0])?void 0:wa.renderer})}return n};
GFa=function(a,b,c,d,e,f){function h(r){return sJ(a.Yb.get(),r)}
var l=[];b=g.v(b);for(var m=b.next();!m.done;m=b.next()){m=m.value;var n=m.renderer,p=n.sandwichedLinearAdRenderer,q=n.linearAdSequenceRenderer;p&&BFa(p)?(HG("Found AdNotify with SandwichedLinearAdRenderer"),q=g.S(p.adVideoStart,rN),p=g.S(p.linearAd,CM),iN(f,n,m.config.adPlacementConfig.kind),n=void 0,q=cEa(null==(n=q)?void 0:n.layout.layoutId,a.Kb.get(),a.Bb.get(),m.config.adPlacementConfig,m.adSlotLoggingData,p,c,d,h,e,a.loadPolicy,a.Fa.get(),a.Yb.get()),q instanceof mJ?HG(q):l.push.apply(l,g.oa(q))):
q&&(!q.adLayoutMetadata&&CFa(q)||q.adLayoutMetadata&&DFa(q))&&(HG("Found AdNotify with LinearAdSequenceRenderer"),iN(f,n,m.config.adPlacementConfig.kind),n=void 0,p=nFa(null==(n=g.S(q.adStart,rN))?void 0:n.layout.layoutId,a.Kb.get(),a.Bb.get(),m.config.adPlacementConfig,m.adSlotLoggingData,q.linearAds,AM(q.adLayoutMetadata)?q.adLayoutMetadata:void 0,c,d,h,e,a.loadPolicy,a.Fa.get()),p instanceof mJ?HG(p):l.push.apply(l,g.oa(p)))}return l};
EFa=function(a,b,c,d,e,f,h,l,m,n,p){function q(F){return sJ(a.Yb.get(),F)}
var r=c.renderer,t=c.config.adPlacementConfig,u=t.kind,x=c.adSlotLoggingData,B=l.PV&&"AD_PLACEMENT_KIND_START"===u;B=f&&!B;if(null!=r.adsEngagementPanelRenderer)return jN(b,c.elementId,u,r.adsEngagementPanelRenderer.isContentVideoEngagementPanel,r.adsEngagementPanelRenderer.adVideoId,r.adsEngagementPanelRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=r.adsEngagementPanelRenderer,la=sJ(a.Yb.get(),F);return tN(P,F.slotId,"LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON",
new Cya(Y),G,H,Y.impressionPings,la,r.adsEngagementPanelRenderer.adLayoutLoggingData,O)}),[];
if(null!=r.actionCompanionAdRenderer){if(r.actionCompanionAdRenderer.showWithoutLinkedMediaLayout)return TDa(a.Kb.get(),a.j,a.Bb.get(),r.actionCompanionAdRenderer,t,x,d,q);jN(b,c.elementId,u,r.actionCompanionAdRenderer.isContentVideoCompanion,r.actionCompanionAdRenderer.adVideoId,r.actionCompanionAdRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=r.actionCompanionAdRenderer,la=sJ(a.Yb.get(),F);return tN(P,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",
new sI(Y),G,H,Y.impressionPings,la,r.actionCompanionAdRenderer.adLayoutLoggingData,O)})}else if(void 0!==r.topBannerImageTextIconButtonedLayoutViewModel){if(r.topBannerImageTextIconButtonedLayoutViewModel.showWithoutLinkedMediaLayout)return UDa(a.Kb.get(),a.j,a.Bb.get(),r.topBannerImageTextIconButtonedLayoutViewModel,t,x,d,q);
jN(b,c.elementId,u,r.topBannerImageTextIconButtonedLayoutViewModel.isContentVideoCompanion,r.topBannerImageTextIconButtonedLayoutViewModel.adVideoId,r.topBannerImageTextIconButtonedLayoutViewModel.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=sJ(a.Yb.get(),F);return HFa(P,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",new tI(r.topBannerImageTextIconButtonedLayoutViewModel),G,H,Y,r.topBannerImageTextIconButtonedLayoutViewModel.adLayoutLoggingData,O)})}else if(r.imageCompanionAdRenderer)jN(b,
c.elementId,u,r.imageCompanionAdRenderer.isContentVideoCompanion,r.imageCompanionAdRenderer.adVideoId,r.imageCompanionAdRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=r.imageCompanionAdRenderer,la=sJ(a.Yb.get(),F);
return tN(P,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_IMAGE",new Eya(Y),G,H,Y.impressionPings,la,r.imageCompanionAdRenderer.adLayoutLoggingData,O)});
else if(r.bannerImageLayoutViewModel)jN(b,c.elementId,u,r.bannerImageLayoutViewModel.isContentVideoCompanion,r.bannerImageLayoutViewModel.adVideoId,r.bannerImageLayoutViewModel.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=sJ(a.Yb.get(),F);return HFa(P,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_IMAGE",new Fya(r.bannerImageLayoutViewModel),G,H,Y,r.bannerImageLayoutViewModel.adLayoutLoggingData,O)});
else if(r.shoppingCompanionCarouselRenderer)jN(b,c.elementId,u,r.shoppingCompanionCarouselRenderer.isContentVideoCompanion,r.shoppingCompanionCarouselRenderer.adVideoId,r.shoppingCompanionCarouselRenderer.associatedCompositePlayerBytesLayoutId,t,x,function(F,G,H,O){var P=a.Bb.get(),Y=r.shoppingCompanionCarouselRenderer,la=sJ(a.Yb.get(),F);return tN(P,F.slotId,"LAYOUT_TYPE_COMPANION_WITH_SHOPPING",new Gya(Y),G,H,Y.impressionPings,la,r.shoppingCompanionCarouselRenderer.adLayoutLoggingData,O)});
else if(r.adBreakServiceRenderer){if(!RDa(c))return[];if("AD_PLACEMENT_KIND_PAUSE"===u)return QDa(a.Kb.get(),t,x,c.renderer.adBreakServiceRenderer,d);if("AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"!==u)return PDa(a.Kb.get(),t,x,c.renderer.adBreakServiceRenderer,d,e,f);if(!a.Vj)return new mJ("Received AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED with no CuePointOpportunityAdapter set for interface");l.Cc||HG("Received non-live cue point triggered AdBreakServiceRenderer",void 0,void 0,{kind:u,adPlacementConfig:t,
daiEnabledForContentVideo:String(f),isServedFromLiveInfra:String(l.Cc),clientPlaybackNonce:l.clientPlaybackNonce});IFa(a.Vj,{adPlacementRenderer:c,contentCpn:d,WC:e})}else{if(r.clientForecastingAdRenderer)return ZEa(a.Kb.get(),a.Bb.get(),t,x,r.clientForecastingAdRenderer,d,e,q);if(r.invideoOverlayAdRenderer)return eFa(a.Kb.get(),a.Bb.get(),t,x,r.invideoOverlayAdRenderer,d,e,q);if(r.instreamAdPlayerOverlayRenderer)return aFa(a.Kb.get(),a.Bb.get(),t,x,r.instreamAdPlayerOverlayRenderer,d,q);if((r.linearAdSequenceRenderer||
r.instreamVideoAdRenderer)&&B)return SEa(a.Kb.get(),a.Bb.get(),c,d,q,n,!a.Fa.get().J.U().L("html5_override_ad_video_length_killswitch"));if(r.linearAdSequenceRenderer&&!B){if(h)return[];iN(b,r,u);if(r.linearAdSequenceRenderer.adLayoutMetadata){if(!EDa(r.linearAdSequenceRenderer))return new mJ("Received invalid LinearAdSequenceRenderer.")}else if(null==r.linearAdSequenceRenderer.linearAds)return new mJ("Received invalid LinearAdSequenceRenderer.");if(g.S(r.linearAdSequenceRenderer.adStart,rN)){HG("Found AdNotify in LinearAdSequenceRenderer");
b=g.S(r.linearAdSequenceRenderer.adStart,rN);if(!mDa(b))return new mJ("Invalid AdMessageRenderer.");c=r.linearAdSequenceRenderer.linearAds;return oFa(a.eb.get(),a.Kb.get(),a.Bb.get(),a.Yb.get(),t,x,b,AM(r.linearAdSequenceRenderer.adLayoutMetadata)?r.linearAdSequenceRenderer.adLayoutMetadata:void 0,c,d,e,l,q,m,a.loadPolicy,a.Fa.get())}return wFa(a.Kb.get(),a.Bb.get(),t,x,r.linearAdSequenceRenderer.linearAds,AM(r.linearAdSequenceRenderer.adLayoutMetadata)?r.linearAdSequenceRenderer.adLayoutMetadata:
void 0,d,e,l,q,m,a.loadPolicy,a.Fa.get(),p)}if(!r.remoteSlotsRenderer||f){if(r.instreamVideoAdRenderer&&!B){if(h)return[];iN(b,r,u);return hEa(a.Kb.get(),a.Bb.get(),t,x,r.instreamVideoAdRenderer,d,e,l,q,m,a.loadPolicy,a.Fa.get(),a.Yb.get(),p)}if(r.instreamSurveyAdRenderer)return AFa(a.Kb.get(),a.Bb.get(),r.instreamSurveyAdRenderer,t,x,d,q,qN(a.Fa.get(),"supports_multi_step_on_desktop"));if(null!=r.sandwichedLinearAdRenderer)return FDa(r.sandwichedLinearAdRenderer)?g.S(r.sandwichedLinearAdRenderer.adVideoStart,
rN)?(HG("Found AdNotify in SandwichedLinearAdRenderer"),b=g.S(r.sandwichedLinearAdRenderer.adVideoStart,rN),mDa(b)?(c=g.S(r.sandwichedLinearAdRenderer.linearAd,CM))?dEa(b,c,t,a.eb.get(),a.Kb.get(),a.Bb.get(),a.Yb.get(),x,d,e,l,q,m,a.loadPolicy,a.Fa.get()):new mJ("Missing IVAR from Sandwich"):new mJ("Invalid AdMessageRenderer.")):wFa(a.Kb.get(),a.Bb.get(),t,x,[r.sandwichedLinearAdRenderer.adVideoStart,r.sandwichedLinearAdRenderer.linearAd],void 0,d,e,l,q,m,a.loadPolicy,a.Fa.get()):new mJ("Received invalid SandwichedLinearAdRenderer.");
if(null!=r.videoAdTrackingRenderer)return XEa(a.Kb.get(),a.Bb.get(),r.videoAdTrackingRenderer,t,x,d,e,q)}}return[]};
uN=function(a,b,c,d,e,f,h,l){g.J.call(this);var m=this;this.Tb=a;this.Kb=b;this.Ff=d;this.Ja=e;this.Fa=f;this.Oa=h;this.Mc=l;this.j=null;c.get().addListener(this);this.addOnDisposeCallback(function(){c.isDisposed()||c.get().removeListener(m)});
d.get().addListener(this);this.addOnDisposeCallback(function(){d.isDisposed()||d.get().removeListener(m)})};
IFa=function(a,b){if(a.j)HG("Unexpected multiple fetch instructions for the current content");else{a.j=b;b=g.v(a.Ff.get().XK);for(var c=b.next();!c.done;c=b.next())JFa(a,a.j,c.value)}};
JFa=function(a,b,c){var d=a.Ja.get().getCurrentTimeSec(1,!1);a.Fa.get().J.U().Tc()&&a.Oa.get().Ai("sdai","onopp.1;evt."+c.event+";start."+c.startSecs.toFixed(3)+";d."+c.oi.toFixed(3));dK(a.Tb.get(),"OPPORTUNITY_TYPE_LIVE_STREAM_BREAK_SIGNAL",function(){var e=a.Kb.get(),f=b.adPlacementRenderer.renderer.adBreakServiceRenderer,h=b.contentCpn,l=b.adPlacementRenderer.adSlotLoggingData,m=vN(a.Fa.get()),n=a.Oa;if(e.Fa.get().J.U().experiments.ib("enable_smearing_expansion_dai")){var p=g.tJ(e.Fa.get().J.U().experiments,
"max_prefetch_window_sec_for_livestream_optimization");var q=g.tJ(e.Fa.get().J.U().experiments,"min_prefetch_offset_sec_for_livestream_optimization");m={oo:KFa(c),hF:!1,cueProcessedMs:1E3*d};var r=c.startSecs+c.oi;if(0===d)m.yp=new dv(0,1E3*r);else{q=c.startSecs-q;var t=q-d;m.yp=0>=t?new dv(1E3*q,1E3*r):new dv(1E3*Math.floor(d+Math.random()*Math.min(t,p)),1E3*r)}p=m}else p={oo:KFa(c),hF:!1},r=c.startSecs+c.oi,c.startSecs<=d?m=new dv(1E3*(c.startSecs-4),1E3*r):(q=Math.max(0,c.startSecs-d-10),m=new dv(1E3*
Math.floor(d+Math.random()*(m?0===d?0:Math.min(q,5):q)),1E3*r)),p.yp=m;f=ODa(e,f,h,p,l,[new Pya(c)]);e.Fa.get().J.U().experiments.ib("html5_add_dai_smearing_to_qoe")?(h=n.get(),e=p.yp.start/1E3-d,n=c.startSecs-d,null!=(h=h.J.xd())&&(h=h.vc(),h.qoe&&(h=h.qoe,h.provider.X.L("html5_add_dai_smearing_to_qoe")&&(l=1E3*g.wN(h.provider),p=h.j.daism||[],p.push("t."+l.toFixed(0)+";smw."+(1E3*e).toFixed(0)+";smo."+(1E3*n).toFixed(0)),h.j.daism=p)))):n.get().Ai("daism","ct."+Date.now()+";cmt."+d+";smw."+(p.yp.start/
1E3-d)+";tw."+(c.startSecs-d)+";cid."+c.identifier.replaceAll(":","_")+";sid."+f.slotId);return[f]})};
xN=function(a){var b,c=null==(b=oJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:b.current;if(!c)return null;b=oJ(a.Ca,"metadata_type_ad_pod_skip_target_callback_ref");var d=a.layoutId,e=oJ(a.Ca,"metadata_type_content_cpn"),f=oJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),h=oJ(a.Ca,"metadata_type_player_overlay_layout_renderer"),l=oJ(a.Ca,"metadata_type_player_underlay_renderer"),m=oJ(a.Ca,"metadata_type_ad_placement_config"),n=oJ(a.Ca,"metadata_type_video_length_seconds");
var p=iJ(a.Ca,"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds")?oJ(a.Ca,"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"):iJ(a.Ca,"metadata_type_layout_enter_ms")&&iJ(a.Ca,"metadata_type_layout_exit_ms")?(oJ(a.Ca,"metadata_type_layout_exit_ms")-oJ(a.Ca,"metadata_type_layout_enter_ms"))/1E3:void 0;return{qq:d,contentCpn:e,NQ:c,yM:b,instreamAdPlayerOverlayRenderer:f,playerOverlayLayoutRenderer:h,instreamAdPlayerUnderlayRenderer:l,adPlacementConfig:m,videoLengthSeconds:n,fJ:p,inPlayerLayoutId:oJ(a.Ca,"metadata_type_linked_in_player_layout_id"),
inPlayerSlotId:oJ(a.Ca,"metadata_type_linked_in_player_slot_id")}};
MFa=function(a,b){return LFa(a,b)};
NFa=function(a,b){b=LFa(a,b);if(!b)return null;var c;b.fJ=null==(c=oJ(a.Ca,"metadata_type_ad_pod_info"))?void 0:c.adBreakRemainingLengthSeconds;return b};
LFa=function(a,b){var c,d=null==(c=oJ(a.Ca,"metadata_type_player_bytes_callback_ref"))?void 0:c.current;if(!d)return null;iJ(a.Ca,"metadata_ad_video_is_listed")?c=oJ(a.Ca,"metadata_ad_video_is_listed"):b?c=b.isListed:(HG("No layout metadata nor AdPlayback specified for ad video isListed"),c=!1);iJ(a.Ca,"metadata_type_ad_info_ad_metadata")?b=oJ(a.Ca,"metadata_type_ad_info_ad_metadata"):b?b={channelId:b.Jl,channelThumbnailUrl:b.profilePicture,channelTitle:b.author,videoTitle:b.title}:(HG("No layout metadata nor AdPlayback specified for AdMetaData"),
b={channelId:"",channelThumbnailUrl:"",channelTitle:"",videoTitle:""});return{B4:b,adPlacementConfig:oJ(a.Ca,"metadata_type_ad_placement_config"),C4:c,contentCpn:oJ(a.Ca,"metadata_type_content_cpn"),inPlayerLayoutId:oJ(a.Ca,"metadata_type_linked_in_player_layout_id"),inPlayerSlotId:oJ(a.Ca,"metadata_type_linked_in_player_slot_id"),instreamAdPlayerOverlayRenderer:oJ(a.Ca,"metadata_type_instream_ad_player_overlay_renderer"),playerOverlayLayoutRenderer:void 0,instreamAdPlayerUnderlayRenderer:void 0,
fJ:void 0,NQ:d,qq:a.layoutId,videoLengthSeconds:oJ(a.Ca,"metadata_type_video_length_seconds")}};
yN=function(a,b,c,d,e,f,h,l,m){g.J.call(this);this.j=a;this.C=b;this.B=c;this.Tb=d;this.Kb=e;this.Bb=f;this.Yb=h;this.Fa=l;this.Wa=m;this.Qh=!0};
OFa=function(a,b,c){return lEa(a.Kb.get(),b.contentCpn,b.qq,function(d){return mEa(a.Bb.get(),d.slotId,c,b.adPlacementConfig,b.qq,sJ(a.Yb.get(),d))})};
zN=function(a,b,c,d,e,f,h,l){g.J.call(this);this.Tb=a;this.Be=b;this.j=c;this.Fa=d;this.B=e;this.Wa=f;this.Ja=h;this.Qc=l};
AN=function(a){g.J.call(this);this.j=a};
dK=function(a,b,c,d){a.j().Dh(b,d);c=c();a=a.j();a.jc.j("ADS_CLIENT_EVENT_TYPE_OPPORTUNITY_PROCESSED",b,d,c);b=g.v(c);for(c=b.next();!c.done;c=b.next())a:{d=a;c=c.value;GJ(d.jc,"ADS_CLIENT_EVENT_TYPE_SLOT_RECEIVED",c);GJ(d.jc,"ADS_CLIENT_EVENT_TYPE_SCHEDULE_SLOT_REQUESTED",c);try{var e=d.j;if(g.fc(c.slotId))throw new mJ("Slot ID was empty",void 0,"ADS_CLIENT_ERROR_MESSAGE_INVALID_SLOT");if(yJ(e,c))throw new mJ("Duplicate registration for slot.",{slotId:c.slotId,slotEntryTriggerType:c.slotEntryTrigger.triggerType},
"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");if(!e.Cf.Jq.has(c.slotType))throw new mJ("No fulfillment adapter factory registered for slot of type: "+c.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_FULFILLMENT_ADAPTER_REGISTERED");if(!e.Cf.Rr.has(c.slotType))throw new mJ("No SlotAdapterFactory registered for slot of type: "+c.slotType,void 0,"ADS_CLIENT_ERROR_MESSAGE_NO_SLOT_ADAPTER_REGISTERED");Cza(e,"TRIGGER_CATEGORY_SLOT_ENTRY",c.slotEntryTrigger?[c.slotEntryTrigger]:[]);Cza(e,"TRIGGER_CATEGORY_SLOT_FULFILLMENT",
c.slotFulfillmentTriggers);Cza(e,"TRIGGER_CATEGORY_SLOT_EXPIRATION",c.slotExpirationTriggers);var f=d.j,h=c.slotType+"_"+c.slotPhysicalPosition,l=IJ(f,h);if(yJ(f,c))throw new mJ("Duplicate slots not supported",void 0,"ADS_CLIENT_ERROR_MESSAGE_DUPLICATE_SLOT");l.set(c.slotId,new xza(c));f.j.set(h,l)}catch(pa){pa instanceof mJ&&pa.Mk?(vJ(d.jc,"ADS_CLIENT_ERROR_TYPE_REGISTER_SLOT_FAILED",pa.Mk,c),HG(pa,c,void 0,void 0,pa.Vu)):(vJ(d.jc,"ADS_CLIENT_ERROR_TYPE_REGISTER_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",
c),HG(pa,c));break a}yJ(d.j,c).K=!0;try{var m=d.j,n=yJ(m,c),p=c.slotEntryTrigger,q=m.Cf.Hl.get(p.triggerType);q&&(q.Bl("TRIGGER_CATEGORY_SLOT_ENTRY",p,c,null),n.Aa.set(p.triggerId,q));for(var r=g.v(c.slotFulfillmentTriggers),t=r.next();!t.done;t=r.next()){var u=t.value,x=m.Cf.Hl.get(u.triggerType);x&&(x.Bl("TRIGGER_CATEGORY_SLOT_FULFILLMENT",u,c,null),n.ma.set(u.triggerId,x))}for(var B=g.v(c.slotExpirationTriggers),F=B.next();!F.done;F=B.next()){var G=F.value,H=m.Cf.Hl.get(G.triggerType);H&&(H.Bl("TRIGGER_CATEGORY_SLOT_EXPIRATION",
G,c,null),n.Y.set(G.triggerId,H))}var O=m.Cf.Jq.get(c.slotType).get().build(m.C,c);n.N=O;var P=m.Cf.Rr.get(c.slotType).get().build(m.G,c);P.init();n.B=P}catch(pa){pa instanceof mJ&&pa.Mk?(vJ(d.jc,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_SLOT_FAILED",pa.Mk,c),HG(pa,c,void 0,void 0,pa.Vu)):(vJ(d.jc,"ADS_CLIENT_ERROR_TYPE_SCHEDULE_SLOT_FAILED","ADS_CLIENT_ERROR_MESSAGE_UNEXPECTED_ERROR",c),HG(pa,c));wJ(d,c,!0);break a}GJ(d.jc,"ADS_CLIENT_EVENT_TYPE_SLOT_SCHEDULED",c);d.j.Eh(c);for(var Y=g.v(d.Gd),la=Y.next();!la.done;la=
Y.next())la.value.Eh(c);gza(d,c)}};
BN=function(a,b,c,d){g.J.call(this);var e=this;this.Tb=a;this.Kb=b;this.zc=c;this.j=new Map;d.get().addListener(this);this.addOnDisposeCallback(function(){d.isDisposed()||d.get().removeListener(e)})};
JDa=function(a,b){var c=0x8000000000000;for(var d=0,e=g.v(b.slotFulfillmentTriggers),f=e.next();!f.done;f=e.next())f=f.value,f instanceof mM?(c=Math.min(c,f.j.start),d=Math.max(d,f.j.end)):HG("Found unexpected fulfillment trigger for throttled slot.",b,null,{fulfillmentTrigger:f});c=new dv(c,d);d="throttledadcuerange:"+b.slotId;a.j.set(d,b);a.zc.get().addCueRange(d,c.start,c.end,!1,a)};
CN=function(){g.J.apply(this,arguments);this.Qh=!0;this.Jj=new Map;this.j=new Map};
PFa=function(a,b){a=g.v(a.Jj.values());for(var c=a.next();!c.done;c=a.next())if(c.value.layoutId===b)return!0;return!1};
rAa=function(a,b){a=g.v(a.j.values());for(var c=a.next();!c.done;c=a.next()){c=g.v(c.value);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.layoutId===b)return d}HG("Trying to retrieve an unknown layout",void 0,void 0,{isEmpty:String(g.fc(b)),layoutId:b})};
QFa=function(a,b){this.callback=a;this.slot=b};
DN=function(){};
RFa=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c};
SFa=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c;this.B=!1;this.j=0};
TFa=function(a,b,c){this.callback=a;this.slot=b;this.Ja=c};
EN=function(a){this.Ja=a};
FN=function(a){g.J.call(this);this.OL=a;this.Wb=new Map};
UFa=function(a,b){for(var c=[],d=g.v(a.Wb.values()),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.trigger;f instanceof yM&&f.triggeringLayoutId===b&&c.push(e)}c.length?FJ(a.OL(),c):HG("Survey is submitted but no registered triggers can be activated.")};
GN=function(a,b,c){FN.call(this,a);var d=this;this.Fa=c;b.get().addListener(this);this.addOnDisposeCallback(function(){b.isDisposed()||b.get().removeListener(d)})};
HN=function(a){g.J.call(this);this.j=a;this.Qh=!0;this.Wb=new Map;this.G=new Set;this.C=new Set;this.D=new Set;this.K=new Set;this.B=new Set};
IN=function(a){g.J.call(this);this.j=a;this.Wb=new Map};
JN=function(a,b){for(var c=[],d=g.v(a.Wb.values()),e=d.next();!e.done;e=d.next())e=e.value,e.trigger.j===b.layoutId&&c.push(e);c.length&&FJ(a.j(),c)};
KN=function(a,b){g.J.call(this);var c=this;this.j=a;this.Wb=new Map;b.get().addListener(this);this.addOnDisposeCallback(function(){b.isDisposed()||b.get().removeListener(c)})};
VFa=function(a,b,c,d){var e=[];a=g.v(a.values());for(var f=a.next();!f.done;f=a.next())if(f=f.value,f.trigger instanceof pM){var h=f.trigger.j===b;h===c?e.push(f):d&&h&&(HG("Firing OnNewPlaybackAfterContentVideoIdTrigger from presumed cached playback CPN match.",void 0,void 0,{cpn:b}),e.push(f))}return e};
WFa=function(a){return a instanceof jDa||a instanceof kDa||a instanceof qM};
LN=function(a,b,c,d){g.J.call(this);var e=this;this.B=a;this.zc=b;this.Ja=c;this.Wa=d;this.Qh=!0;this.Wb=new Map;this.j=new Set;c.get().addListener(this);this.addOnDisposeCallback(function(){c.isDisposed()||c.get().removeListener(e)})};
XFa=function(a,b,c,d,e,f,h,l,m,n){if(a.Wa.get().nf(1).clientPlaybackNonce!==m)throw new mJ("Cannot register CueRange-based trigger for different content CPN",{trigger:c});a.Wb.set(c.triggerId,{ev:new zM(b,c,d,e),yv:f});a.zc.get().addCueRange(f,h,l,n,a)};
YFa=function(a,b){a=g.v(a.Wb.entries());for(var c=a.next();!c.done;c=a.next()){var d=g.v(c.value);c=d.next().value;d=d.next().value;if(b===d.yv)return c}return""};
MN=function(a,b){g.J.call(this);var c=this;this.D=a;this.B=new Map;this.C=new Map;this.j=null;b.get().addListener(this);this.addOnDisposeCallback(function(){b.isDisposed()||b.get().removeListener(c)});
var d;this.j=(null==(d=b.get().Av)?void 0:d.slotId)||null};
ZFa=function(a,b){var c=[];a=g.v(a.values());for(var d=a.next();!d.done;d=a.next())d=d.value,d.slot.slotId===b&&c.push(d);return c};
NN=function(a){g.J.call(this);this.j=a;this.Qh=!0;this.Wb=new Map};
EK=function(a,b){b=b.layoutId;for(var c=[],d=g.v(a.Wb.values()),e=d.next();!e.done;e=d.next())if(e=e.value,e.trigger instanceof oM){var f;if(f=e.trigger.layoutId===b)f=(f=pza.get(e.category))?"normal"===f:!1;f&&c.push(e)}c.length&&FJ(a.j(),c)};
ON=function(a){g.J.call(this);this.j=a;this.Qh=!0;this.Wb=new Map};
PN=function(a){g.J.call(this);this.C=a;this.Qh=!0;this.Wb=new Map;this.j=new Map;this.B=new Map};
$Fa=function(a,b){var c=[];if(b=a.j.get(b.layoutId)){b=g.v(b);for(var d=b.next();!d.done;d=b.next())(d=a.B.get(d.value.triggerId))&&c.push(d)}return c};
QN=function(a){g.J.call(this);this.j=a;this.Wb=new Map};
aGa=function(a,b){for(var c=[],d=g.v(a.Wb.values()),e=d.next();!e.done;e=d.next())e=e.value,e.trigger instanceof cM&&e.trigger.slotId===b&&c.push(e);1<=c.length&&FJ(a.j(),c)};
bGa=function(a,b){var c={slotId:eK(b,"SLOT_TYPE_IN_PLAYER"),slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:void 0,slotFulfillmentTriggers:[],slotExpirationTriggers:[],Ya:"surface",Ca:new nJ([])},d=Object,e=d.assign;b=SJ(b,"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",c.slotId);b={layoutId:b,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",Lb:new Map,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"surface",Ca:new nJ([]),
lc:cza(!1,c.slotId,c.slotType,c.slotPhysicalPosition,c.Ya,c.slotEntryTrigger,c.slotFulfillmentTriggers,c.slotExpirationTriggers,b,"LAYOUT_TYPE_TEXT_BANNER_OVERLAY","surface")};return e.call(d,{},a,{B7:!0,slot:c,layout:b})};
NDa=function(a,b,c,d){var e=a.kind;d=d?!1:!a.hideCueRangeMarker;switch(e){case "AD_PLACEMENT_KIND_START":return d={oo:new dv(-0x8000000000000,-0x8000000000000),hF:d},null!=c&&(d.yp=new dv(-0x8000000000000,-0x8000000000000)),d;case "AD_PLACEMENT_KIND_END":return d={oo:new dv(0x7ffffffffffff,0x8000000000000),hF:d},null!=c&&(d.yp=new dv(Math.max(0,b-c),0x8000000000000)),d;case "AD_PLACEMENT_KIND_MILLISECONDS":e=a.adTimeOffset;e.offsetStartMilliseconds||HG("AD_PLACEMENT_KIND_MILLISECONDS missing start milliseconds.");
e.offsetEndMilliseconds||HG("AD_PLACEMENT_KIND_MILLISECONDS missing end milliseconds.");a=Number(e.offsetStartMilliseconds);e=Number(e.offsetEndMilliseconds);-1===e&&(e=b);if(Number.isNaN(a)||Number.isNaN(e)||a>e)return new mJ("AD_PLACEMENT_KIND_MILLISECONDS endMs needs to be >= startMs.",{offsetStartMs:a,offsetEndMs:e},"ADS_CLIENT_ERROR_MESSAGE_AD_PLACEMENT_END_SHOULD_GREATER_THAN_START",e===b&&a-500<=e);d={oo:new dv(a,e),hF:d};if(null!=c){a=Math.max(0,a-c);if(a===e)return d;d.yp=new dv(a,e)}return d;
default:return new mJ("AdPlacementKind not supported in convertToRange.",{kind:e,adPlacementConfig:a})}};
KFa=function(a){var b=1E3*a.startSecs;return new dv(b,b+1E3*a.oi)};
RN=function(){this.B=new Map;this.j=new Map;this.C=new Map};
eK=function(a,b){if(g.xB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.B.get(b)||0;c++;a.B.set(b,c);return b+"_"+c}return g.KE(16)};
SJ=function(a,b,c){if(g.xB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var d=a.j.get(b)||0;d++;a.j.set(b,d);return c+"_"+b+"_"+d}return g.KE(16)};
nN=function(a,b){if(g.xB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.C.get(b)||0;c++;a.C.set(b,c);return b+"_"+c}return g.KE(16)};
cGa=function(a){var b=[new II(a.qq),new Oya(a.NQ),new wI(a.adPlacementConfig),new PI(a.videoLengthSeconds),new bJ(a.fJ)];a.instreamAdPlayerOverlayRenderer&&b.push(new DI(a.instreamAdPlayerOverlayRenderer));a.playerOverlayLayoutRenderer&&b.push(new EI(a.playerOverlayLayoutRenderer));a.yM&&b.push(new AI(a.yM));return b};
dGa=function(a,b,c,d,e,f){a=c.inPlayerLayoutId?c.inPlayerLayoutId:SJ(f,"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",a);var h,l,m=c.instreamAdPlayerOverlayRenderer?null==(h=c.instreamAdPlayerOverlayRenderer)?void 0:h.adLayoutLoggingData:null==(l=c.playerOverlayLayoutRenderer)?void 0:l.adLayoutLoggingData;h={layoutId:a,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Ya:b};return{layoutId:a,layoutType:"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",Lb:new Map,layoutExitNormalTriggers:[new kM(function(n){return nN(f,
n)},c.qq)],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:b,Ca:d,lc:e(h),adLayoutLoggingData:m}};
SN=function(a,b){var c=this;this.eb=a;this.Fa=b;this.j=function(d){return nN(c.eb.get(),d)}};
mEa=function(a,b,c,d,e,f){c=new nJ([new FI(c),new wI(d)]);b=SJ(a.eb.get(),"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",b);d={layoutId:b,layoutType:"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",Ya:"core"};return{layoutId:b,layoutType:"LAYOUT_TYPE_UNDERLAY_TEXT_ICON_BUTTON",Lb:new Map,layoutExitNormalTriggers:[new kM(function(h){return nN(a.eb.get(),h)},e)],
layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:c,lc:f(d),adLayoutLoggingData:void 0}};
mN=function(a,b,c,d,e){var f=cGa(d);return dGa(b,c,d,new nJ(f),e,a.eb.get())};
eGa=function(a,b,c,d,e){var f=cGa(d);f.push(new Hya(d.B4));f.push(new Iya(d.C4));return dGa(b,c,d,new nJ(f),e,a.eb.get())};
tN=function(a,b,c,d,e,f,h,l,m,n){b=SJ(a.eb.get(),c,b);var p={layoutId:b,layoutType:c,Ya:"core"},q=new Map;h&&q.set("impression",h);h=[new nM(a.j,e)];n&&h.push(new jM(a.j,n,["normal"]));return{layoutId:b,layoutType:c,Lb:q,layoutExitNormalTriggers:h,layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([d,new wI(f),new II(e)]),lc:l(p),adLayoutLoggingData:m}};
HFa=function(a,b,c,d,e,f,h,l,m){b=SJ(a.eb.get(),c,b);var n={layoutId:b,layoutType:c,Ya:"core"},p=[new nM(a.j,e)];m&&p.push(new jM(a.j,m,["normal"]));return{layoutId:b,layoutType:c,Lb:new Map,layoutExitNormalTriggers:p,layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([d,new wI(f),new II(e)]),lc:h(n),adLayoutLoggingData:l}};
dFa=function(a,b,c){var d=[];d.push(new hDa(a.j,c));b&&d.push(b);return d};
cFa=function(a,b,c,d,e,f,h){var l={layoutId:b,layoutType:c,Ya:"core"};return{layoutId:b,layoutType:c,Lb:new Map,layoutExitNormalTriggers:h,layoutExitSkipTriggers:[new fM(a.j,b)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new Dya(d),new wI(e)]),lc:f(l),adLayoutLoggingData:d.adLayoutLoggingData}};
DEa=function(a,b,c,d,e,f,h,l){var m={layoutId:b,layoutType:f,Ya:"core"};return{layoutId:b,layoutType:f,Lb:new Map,layoutExitNormalTriggers:[new kM(a.j,c)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new wI(d)].concat(g.oa(h))),lc:e(m),adLayoutLoggingData:l}};
oN=function(a,b,c,d){if(a.Fa.get().rf("AD_PLACEMENT_KIND_START"===b.kind))if(void 0===c)HG("Expected SSAP layout ID in renderer",void 0,void 0,{caller:d});else return c};
fFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){a=lFa(a,b,c,e,f,h,l,m,q,oN(a,c,d.layoutId,"createSubLayoutVodSkippableMediaBreakLayoutForEndcap"),r);b=a.Wy;c=new JI(a.PJ);d=a.layoutExitSkipTriggers;0<n&&(b.push(c),b.push(new zI(n)),d=[]);b.push(new yI(p));return{Dk:{layoutId:a.layoutId,layoutType:a.layoutType,Lb:a.Lb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:a.Ya,Ca:new nJ(b),lc:a.lc,adLayoutLoggingData:a.adLayoutLoggingData},
Yl:d,Tj:a.layoutExitMuteTriggers,Zy:a.layoutExitUserInputSubmittedTriggers,Yy:a.Uc,Mg:a.Mg}};
jFa=function(a,b,c,d,e,f,h,l,m,n){b=lFa(a,b,c,d,f,new Map,h,function(p){return l(p,m)},void 0,oN(a,c,e.layoutId,"createSubLayoutVodSkippableMediaBreakLayoutForVodSurvey"));
a=new yM(a.j,b.PJ);c=new JI(b.PJ);n=new yI(n);return{Dk:{layoutId:b.layoutId,layoutType:b.layoutType,Lb:b.Lb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:b.Ya,Ca:new nJ([].concat(g.oa(b.Wy),[c,n])),lc:b.lc,adLayoutLoggingData:b.adLayoutLoggingData},Yl:b.layoutExitSkipTriggers,Tj:b.layoutExitMuteTriggers,Zy:[].concat(g.oa(b.layoutExitUserInputSubmittedTriggers),[a]),Yy:b.Uc,Mg:b.Mg}};
lFa=function(a,b,c,d,e,f,h,l,m,n,p){b=null!=n?n:SJ(a.eb.get(),"LAYOUT_TYPE_MEDIA_BREAK",b);n={layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Ya:"adapter"};l=l(b);var q=oJ(l.Ca,"metadata_type_fulfilled_layout");q||HG("Could not retrieve overlay layout ID during VodSkippableMediaBreakLayout creation. This should never happen.");var r=q?q.layoutId:"";c=[new wI(c),new cJ(d),new eJ(e)];q&&c.push(new KI(q.layoutType));p&&c.push(new VI(p));return{layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA_BREAK",Lb:f,layoutExitNormalTriggers:[],
layoutExitSkipTriggers:[new rM(a.j,r)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"adapter",Wy:c,lc:h(n),adLayoutLoggingData:m,Mg:l,PJ:r}};
iEa=function(a,b,c,d,e,f,h,l,m,n,p){a=fGa(a,b,"core",c,d,e,f,h,l,m,n,void 0,p);return{layoutId:a.layoutId,layoutType:a.layoutType,Lb:a.Lb,layoutExitNormalTriggers:a.layoutExitNormalTriggers,layoutExitSkipTriggers:a.layoutExitSkipTriggers,layoutExitMuteTriggers:a.layoutExitMuteTriggers,layoutExitUserInputSubmittedTriggers:a.layoutExitUserInputSubmittedTriggers,Uc:a.Uc,Ya:a.Ya,Ca:new nJ(a.BV),lc:a.lc,adLayoutLoggingData:a.adLayoutLoggingData}};
yFa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){b=fGa(a,b,"adapter",c,d,e,f,h,l,m,p,q,r);d=b.layoutExitSkipTriggers;e=b.BV;c.adPodSkipTarget&&0<c.adPodSkipTarget&&(e.push(n),e.push(new zI(c.adPodSkipTarget)),d=[]);e.push(new yI(l.j));c.isCritical&&(d=[new jM(a.j,b.layoutId,["error"])].concat(g.oa(d)));return{Dk:{layoutId:b.layoutId,layoutType:b.layoutType,Lb:b.Lb,layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:b.Ya,Ca:new nJ(e),
lc:b.lc,adLayoutLoggingData:b.adLayoutLoggingData},Yl:d,Tj:b.layoutExitMuteTriggers,Zy:b.layoutExitUserInputSubmittedTriggers,Yy:b.Uc}};
fGa=function(a,b,c,d,e,f,h,l,m,n,p,q,r){var t={layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA",Ya:c};e=[new wI(e),new xI(m),new BI(d.externalVideoId),new CI(l),new eJ({impressionCommands:d.impressionCommands,abandonCommands:d.onAbandonCommands,completeCommands:d.completeCommands,progressCommands:d.adVideoProgressCommands}),new QI(f),new MI({current:null}),new PI(h)];(f=d.playerOverlay.instreamAdPlayerOverlayRenderer)&&e.push(new DI(f));(h=d.playerOverlay.playerOverlayLayoutRenderer)&&e.push(new EI(h));
q&&e.push(new RI(q));(q=d.playerUnderlay)&&e.push(new FI(q));l=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");q=(q=f?f.elementId:null==h?void 0:h.layoutId)?q:SJ(a.eb.get(),"LAYOUT_TYPE_MEDIA_LAYOUT_PLAYER_OVERLAY",l);e.push(new JI(q));e.push(new LI(l));e.push(new VI(m.j));d.adNextParams&&e.push(new uI(d.adNextParams));d.shrunkenPlayerBytesConfig&&e.push(new Jya(d.shrunkenPlayerBytesConfig));d.clickthroughEndpoint&&e.push(new vI(d.clickthroughEndpoint));d.legacyInfoCardVastExtension&&e.push(new dJ(d.legacyInfoCardVastExtension));
d.sodarExtensionData&&e.push(new SI(d.sodarExtensionData));p&&e.push(new aJ(p));e.push(new gJ(lK(d.pings)));m=mK(d.pings);if(r){a:{r=g.v(r);for(p=r.next();!p.done;p=r.next())if(p=p.value,"SLOT_TYPE_PLAYER_UNDERLAY"===p.adSlotMetadata.slotType&&(f=g.S(p.fulfillmentContent.fulfilledLayout,$M))&&(f=g.S(f.renderingContent,ZM))&&f.associatedPlayerBytesLayoutId===b){r=p;break a}r=void 0}r&&e.push(new GI(r))}return{layoutId:b,layoutType:"LAYOUT_TYPE_MEDIA",Lb:m,layoutExitNormalTriggers:[new oM(a.j,b)],layoutExitSkipTriggers:d.skipOffsetMilliseconds?
[new rM(a.j,q)]:[],layoutExitMuteTriggers:[new rM(a.j,q)],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:c,BV:e,lc:n(t),adLayoutLoggingData:d.adLayoutLoggingData}};
UEa=function(a,b,c,d,e,f,h,l,m){d.every(function(p){return jJ(p,[],["LAYOUT_TYPE_MEDIA"])})||HG("Unexpect subLayout type for DAI composite layout");
b=SJ(a.eb.get(),"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",b);var n={layoutId:b,layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",Ya:"core"};return{layoutId:b,layoutType:"LAYOUT_TYPE_COMPOSITE_PLAYER_BYTES",Lb:new Map,layoutExitNormalTriggers:[new dDa(a.j)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Uc:[],Ya:"core",Ca:new nJ([new TI(c),new UI(l),new OI(d),new wI(e),new YI(f),new WI({}),new Uya(m)]),lc:h(n)}};
PEa=function(a){return null!=a};
TN=function(a,b,c){var d=this;this.eb=a;this.Bb=b;this.Fa=c;this.j=function(e){return nN(d.eb.get(),e)}};
ODa=function(a,b,c,d,e,f){f=void 0===f?[]:f;var h=eK(a.eb.get(),"SLOT_TYPE_AD_BREAK_REQUEST"),l=[];d.yp&&d.yp.start!==d.oo.start&&l.push(new mM(a.j,c,new dv(d.yp.start,d.oo.start),!1));l.push(new mM(a.j,c,new dv(d.oo.start,d.oo.end),d.hF));d={getAdBreakUrl:b.getAdBreakUrl,gR:d.oo.start,fR:d.oo.end,cueProcessedMs:d.cueProcessedMs};b=new vM(a.j,h);f=[new $I(d)].concat(g.oa(f));return{slotId:h,slotType:"SLOT_TYPE_AD_BREAK_REQUEST",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:l,slotExpirationTriggers:[new pM(a.j,
c),new tM(a.j,h),new uM(a.j,h)],Ya:"core",Ca:new nJ(f),adSlotLoggingData:e}};
hGa=function(a,b,c){var d=[];c=g.v(c);for(var e=c.next();!e.done;e=c.next())d.push(gGa(a,b,e.value));return d};
gGa=function(a,b,c){return null!=c.triggeringSlotId&&c.triggeringSlotId===a?c.clone(b):c};
CEa=function(a,b,c,d,e){return iGa(a,b,c,d,e)};
gFa=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");return iGa(a,e,b,c,d)};
iGa=function(a,b,c,d,e){var f=new iM(a.j,c),h=[new sM(a.j,b)];a=[new tM(a.j,b),new pM(a.j,d)];return{slotId:b,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(e({slotId:b,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a},c))]),adSlotLoggingData:void 0}};
zFa=function(a,b,c,d,e,f){var h=eK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),l=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=SJ(a.eb.get(),"LAYOUT_TYPE_SURVEY",l);d=UN(a,b,c,d);var n=[new sM(a.j,h)];c=[new tM(a.j,h),new pM(a.j,c),new fM(a.j,m)];if(d instanceof mJ)return d;l=f({slotId:h,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:d,slotFulfillmentTriggers:n,slotExpirationTriggers:c},{slotId:l,layoutId:m});f=l.i8;l=l.v7;return[{slotId:h,slotType:"SLOT_TYPE_PLAYER_BYTES",
slotPhysicalPosition:1,slotEntryTrigger:uFa(a,b,h,d),slotFulfillmentTriggers:vFa(a,b,h,n),slotExpirationTriggers:c,Ya:"core",Ca:new nJ([new ZI(f),new hJ(pN(b))]),adSlotLoggingData:e},l]};
pN=function(a){return"AD_PLACEMENT_KIND_START"===a.kind};
jEa=function(a,b,c,d,e){e=e?e:eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new iM(a.j,c);var f=[new sM(a.j,e)];a=[new pM(a.j,b),new tM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(d({slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))])}};
lEa=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_PLAYER_UNDERLAY");c=new iM(a.j,c);var f=[new sM(a.j,e)];a=[new pM(a.j,b),new tM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_PLAYER_UNDERLAY",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(d({slotId:e,slotType:"SLOT_TYPE_PLAYER_UNDERLAY",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))])}};
bEa=function(a,b,c,d,e,f,h){var l=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),m=SJ(a.eb.get(),"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",l);d=jGa(a,d,f,h,m);if(d instanceof mJ)return d;h=[new sM(a.j,l)];e=[new pM(a.j,f),new sM(a.j,e),new xM(a.j,e)];c=sJ(c,{slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:d,slotFulfillmentTriggers:h,slotExpirationTriggers:e});a=a.Bb.get();f={layoutId:m,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",Ya:"core"};b={layoutId:m,layoutType:"LAYOUT_TYPE_TEXT_BANNER_OVERLAY",
Lb:new Map,layoutExitNormalTriggers:[new jDa(a.j,m,b.durationMs)],layoutExitSkipTriggers:[new kDa(a.j,m,b.durationMs)],Uc:[new qM(a.j,m)],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Ya:"core",Ca:new nJ([new Sya(b)]),lc:c(f)};return{slotId:l,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:d,slotFulfillmentTriggers:h,slotExpirationTriggers:e,Ca:new nJ([new ZI(b)])}};
bFa=function(a,b,c,d,e,f){b=UN(a,b,c,d);if(b instanceof mJ)return b;var h=b instanceof mM?new gDa(a.j,c,b.j):null;d=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");var l=[new sM(a.j,d)];a=[new pM(a.j,c),new tM(a.j,d)];f=f({slotId:d,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:b,slotFulfillmentTriggers:l,slotExpirationTriggers:a},h);return f instanceof lJ?new mJ(f):{slotId:d,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:l,
slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(f)]),adSlotLoggingData:e}};
$Ea=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER"),f=new eM(a.j,b),h=[new wM(a.j,e)];a=[new pM(a.j,b),new tM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(d({slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:a}))]),adSlotLoggingData:c}};
JEa=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new iM(a.j,c);var f=[new sM(a.j,e)],h=[new tM(a.j,e),new pM(a.j,b)];f={slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:c,slotFulfillmentTriggers:f,slotExpirationTriggers:h};return{slotId:e,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:[new sM(a.j,e)],slotExpirationTriggers:[new pM(a.j,b),new tM(a.j,e)],Ya:"core",Ca:new nJ([new ZI(d(f))])}};
GEa=function(a,b,c,d,e){var f=eK(a.eb.get(),"SLOT_TYPE_IN_PLAYER");c=new hM(a.j,d,c);d=[new sM(a.j,f)];a=[new pM(a.j,b)];return{slotId:f,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,slotEntryTrigger:c,slotFulfillmentTriggers:d,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(e({slotId:f,slotType:"SLOT_TYPE_IN_PLAYER",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:c,slotFulfillmentTriggers:d,slotExpirationTriggers:a}))])}};
XDa=function(a,b,c,d,e,f){var h=eK(a.eb.get(),b);return kGa(a,h,b,new iM(a.j,d),[new pM(a.j,c),new tM(a.j,h),new jM(a.j,d,["error"])],e,f)};
WDa=function(a,b,c,d,e,f,h){var l=eK(a.eb.get(),b);return kGa(a,l,b,new jM(a.j,e,["normal"]),[new pM(a.j,c),new tM(a.j,l),new jM(a.j,d,["error"])],f,h)};
SDa=function(a,b,c,d,e){var f=eK(a.eb.get(),b);return kGa(a,f,b,new eM(a.j,c),[new pM(a.j,c),new tM(a.j,f)],d,e)};
WEa=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_PLAYBACK_TRACKING");b=new eM(a.j,b);var f=[new sM(a.j,e)];a=[new tM(a.j,e)];return{slotId:e,slotType:"SLOT_TYPE_PLAYBACK_TRACKING",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:f,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(d({slotId:e,slotType:"SLOT_TYPE_PLAYBACK_TRACKING",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:b,slotFulfillmentTriggers:f,slotExpirationTriggers:a}))]),adSlotLoggingData:c}};
QEa=function(a,b,c,d){var e=eK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),f=new eDa(a.j),h=[new wM(a.j,e)];b=[new pM(a.j,b)];var l={slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b};a=a.Fa.get();return!g.EJ(a.J.U())&&a.J.U().experiments.ib("enable_pacf_slot_asde_player_byte_h5")||g.EJ(a.J.U())&&a.J.U().experiments.ib("enable_pacf_slot_asde_player_byte_h5_TV")?{slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,
slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b,Ya:"core",Ca:new nJ([new ZI(d(l)),new WI({})]),adSlotLoggingData:c}:{slotId:e,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,slotEntryTrigger:f,slotFulfillmentTriggers:h,slotExpirationTriggers:b,Ya:"core",Ca:new nJ([new ZI(d(l)),new WI({})])}};
rFa=function(a,b){return FFa(a.Fa.get())?new jM(a.j,b,["normal","error","skipped"]):new jM(a.j,b,["normal"])};
fEa=function(a,b,c,d,e){b=rFa(a,b);a=sFa(a,b,c);e=e({slotId:a.slotId,slotType:a.slotType,slotPhysicalPosition:a.slotPhysicalPosition,slotEntryTrigger:a.slotEntryTrigger,slotFulfillmentTriggers:a.slotFulfillmentTriggers,slotExpirationTriggers:a.slotExpirationTriggers,Ya:a.Ya});return e instanceof mJ?e:{Tw:Object.assign({},a,{Ca:new nJ([new ZI(e.layout)]),adSlotLoggingData:d}),Ag:e.Ag}};
gEa=function(a,b,c,d,e,f,h){c=tFa(a,b,c,d);if(c instanceof mJ)return c;h=h({slotId:c.slotId,slotType:c.slotType,slotPhysicalPosition:c.slotPhysicalPosition,slotEntryTrigger:c.slotEntryTrigger,slotFulfillmentTriggers:c.slotFulfillmentTriggers,slotExpirationTriggers:c.slotExpirationTriggers,Ya:c.Ya});if(h instanceof mJ)return h;d=[new hJ(pN(b)),new ZI(h.layout)];f&&d.push(new fJ({}));return{Tw:{slotId:c.slotId,slotType:c.slotType,slotPhysicalPosition:c.slotPhysicalPosition,slotEntryTrigger:uFa(a,b,
c.slotId,c.slotEntryTrigger),slotFulfillmentTriggers:vFa(a,b,c.slotId,c.slotFulfillmentTriggers),slotExpirationTriggers:c.slotExpirationTriggers,Ya:c.Ya,Ca:new nJ(d),adSlotLoggingData:e},Ag:h.Ag}};
uFa=function(a,b,c,d){return a.Fa.get().rf(pN(b))?new cM(a.j,c):d};
vFa=function(a,b,c,d){return a.Fa.get().rf(pN(b))?[new wM(a.j,c)]:d};
sFa=function(a,b,c){var d=eK(a.eb.get(),"SLOT_TYPE_PLAYER_BYTES"),e=[new sM(a.j,d)];a=[new tM(a.j,d),new pM(a.j,c)];return{slotId:d,slotType:"SLOT_TYPE_PLAYER_BYTES",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:e,slotExpirationTriggers:a,Ya:"core"}};
tFa=function(a,b,c,d){b=UN(a,b,c,d);return b instanceof mJ?b:sFa(a,b,c)};
YEa=function(a,b,c,d,e,f){var h=eK(a.eb.get(),"SLOT_TYPE_FORECASTING");b=UN(a,b,c,d);if(b instanceof mJ)return b;d=[new sM(a.j,h)];a=[new tM(a.j,h),new pM(a.j,c)];return{slotId:h,slotType:"SLOT_TYPE_FORECASTING",slotPhysicalPosition:1,slotEntryTrigger:b,slotFulfillmentTriggers:d,slotExpirationTriggers:a,Ya:"core",Ca:new nJ([new ZI(f({slotId:h,slotType:"SLOT_TYPE_FORECASTING",slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:b,slotFulfillmentTriggers:d,slotExpirationTriggers:a}))]),adSlotLoggingData:e}};
lGa=function(a,b,c,d,e){var f=!b.hideCueRangeMarker;switch(b.kind){case "AD_PLACEMENT_KIND_START":return new eM(a.j,c);case "AD_PLACEMENT_KIND_MILLISECONDS":return a=NDa(b,d),a instanceof mJ?a:e(a.oo,f);case "AD_PLACEMENT_KIND_END":return new gM(a.j,c,f);default:return new mJ("Cannot construct entry trigger",{kind:b.kind})}};
jGa=function(a,b,c,d,e){return lGa(a,b,c,d,function(f,h){return new lM(a.j,c,f,h,e)})};
UN=function(a,b,c,d){return lGa(a,b,c,d,function(e,f){return new mM(a.j,c,e,f)})};
kGa=function(a,b,c,d,e,f,h){a=[new wM(a.j,b)];return{slotId:b,slotType:c,slotPhysicalPosition:1,slotEntryTrigger:d,slotFulfillmentTriggers:a,slotExpirationTriggers:e,Ya:"core",Ca:new nJ([new ZI(h({slotId:b,slotType:c,slotPhysicalPosition:1,Ya:"core",slotEntryTrigger:d,slotFulfillmentTriggers:a,slotExpirationTriggers:e}))]),adSlotLoggingData:f}};
VN=function(a,b){g.J.call(this);this.Fa=a;this.B=b;this.eventCount=0};
GJ=function(a,b,c){a.j(b,void 0,void 0,void 0,c,void 0,void 0,c.adSlotLoggingData)};
zJ=function(a,b,c,d){a.j(b,void 0,void 0,void 0,c,d?d:void 0,void 0,c.adSlotLoggingData,d?d.adLayoutLoggingData:void 0)};
oza=function(a,b,c,d){dza(a.B.get())&&a.j("ADS_CLIENT_EVENT_TYPE_TRIGGER_ACTIVATED",void 0,void 0,void 0,b,d?d:void 0,c,b.adSlotLoggingData,d?d.adLayoutLoggingData:void 0)};
vJ=function(a,b,c,d,e){a.j("ADS_CLIENT_EVENT_TYPE_ERROR",void 0,void 0,void 0,d,e,void 0,d.adSlotLoggingData,e?e.adLayoutLoggingData:void 0,{errorType:b,errorMessage:c})};
mGa=function(a,b,c,d,e,f,h,l,m,n,p){if(!a.Fa.get().J.U().L("html5_disable_client_tmp_logs")&&("ADS_CLIENT_EVENT_TYPE_ERROR"!==b||a.QR())&&"ADS_CLIENT_EVENT_TYPE_UNSPECIFIED"!==b){b||HG("Empty PACF event type",f,h);var q=dza(a.B.get());b={eventType:b,eventOrder:++a.eventCount};var r={};f&&(r.slotData=$ya(q,f));h&&(r.layoutData=aza(q,h));l&&(r.triggerData=rJ(l.trigger,l.category));c&&(r.opportunityData=bza(q,c,d,e));c={organicPlaybackContext:{contentCpn:a.Wa.get().nf(1).clientPlaybackNonce}};c.organicPlaybackContext.isLivePlayback=
a.Wa.get().nf(1).Cc;var t;c.organicPlaybackContext.isMdxPlayback=null==(t=a.Wa.get().nf(1))?void 0:t.isMdxPlayback;var u;if(null==(u=a.Wa.get().nf(1))?0:u.daiEnabled)c.organicPlaybackContext.isDaiContent=!0;var x;if(a=null==(x=a.Wa.get().nf(2))?void 0:x.clientPlaybackNonce)c.adVideoPlaybackContext={adVideoCpn:a};c&&(r.externalContext=c);b.adClientData=r;m&&(b.serializedSlotAdServingData=m.serializedSlotAdServingDataEntry);n&&(b.serializedAdServingData=n.serializedAdServingDataEntry);p&&(b.errorInfo=
p);g.fD("adsClientStateChange",{adsClientEvent:b})}};
WN=function(a,b,c){VN.call(this,a,b);this.Fa=a;this.Wa=c};
XN=function(){this.j=new Map};
YN=function(a){return window.Int32Array?new Int32Array(a):Array(a)};
dO=function(a){g.J.call(this);this.counter=[0,0,0,0];this.B=new Uint8Array(16);this.j=16;if(!nGa){var b,c=new Uint8Array(256),d=new Uint8Array(256);var e=1;for(b=0;256>b;b++)c[e]=b,d[b]=e,e^=e<<1^(e>>7&&283);ZN=new Uint8Array(256);$N=YN(256);aO=YN(256);bO=YN(256);cO=YN(256);for(var f=0;256>f;f++){e=f?d[255^c[f]]:0;e^=e<<1^e<<2^e<<3^e<<4;e=e&255^e>>>8^99;ZN[f]=e;b=e<<1^(e>>7&&283);var h=b^e;$N[f]=b<<24|e<<16|e<<8|h;aO[f]=h<<24|$N[f]>>>8;bO[f]=e<<24|aO[f]>>>8;cO[f]=e<<24|bO[f]>>>8}nGa=!0}e=YN(44);for(c=
0;4>c;c++)e[c]=a[4*c]<<24|a[4*c+1]<<16|a[4*c+2]<<8|a[4*c+3];for(d=1;44>c;c++)a=e[c-1],c%4||(a=(ZN[a>>16&255]^d)<<24|ZN[a>>8&255]<<16|ZN[a&255]<<8|ZN[a>>>24],d=d<<1^(d>>7&&283)),e[c]=e[c-4]^a;this.key=e};
oGa=function(a){for(var b=a.key,c=a.counter[0]^b[0],d=a.counter[1]^b[1],e=a.counter[2]^b[2],f=a.counter[3]^b[3],h=3;0<=h&&!(a.counter[h]=-~a.counter[h]);h--);for(var l,m,n=4;40>n;)h=$N[c>>>24]^aO[d>>16&255]^bO[e>>8&255]^cO[f&255]^b[n++],l=$N[d>>>24]^aO[e>>16&255]^bO[f>>8&255]^cO[c&255]^b[n++],m=$N[e>>>24]^aO[f>>16&255]^bO[c>>8&255]^cO[d&255]^b[n++],f=$N[f>>>24]^aO[c>>16&255]^bO[d>>8&255]^cO[e&255]^b[n++],c=h,d=l,e=m;a=a.B;h=b[40];a[0]=ZN[c>>>24]^h>>>24;a[1]=ZN[d>>16&255]^h>>16&255;a[2]=ZN[e>>8&255]^
h>>8&255;a[3]=ZN[f&255]^h&255;h=b[41];a[4]=ZN[d>>>24]^h>>>24;a[5]=ZN[e>>16&255]^h>>16&255;a[6]=ZN[f>>8&255]^h>>8&255;a[7]=ZN[c&255]^h&255;h=b[42];a[8]=ZN[e>>>24]^h>>>24;a[9]=ZN[f>>16&255]^h>>16&255;a[10]=ZN[c>>8&255]^h>>8&255;a[11]=ZN[d&255]^h&255;h=b[43];a[12]=ZN[f>>>24]^h>>>24;a[13]=ZN[c>>16&255]^h>>16&255;a[14]=ZN[d>>8&255]^h>>8&255;a[15]=ZN[e&255]^h&255};
fO=function(){if(!pGa&&!g.KD){if(eO)return eO;var a;eO=null==(a=window.crypto)?void 0:a.subtle;var b,c,d;if((null==(b=eO)?0:b.importKey)&&(null==(c=eO)?0:c.sign)&&(null==(d=eO)?0:d.encrypt))return eO;eO=void 0}};
qGa=function(){this.C=this.j=0;this.B=Array.from({length:gO.length}).fill(0)};
rGa=function(){};
sGa=function(a){this.name=a;this.startTimeMs=(0,g.uD)();this.j=!1};
tGa=function(){this.j=new rGa};
vGa=function(a,b,c,d){if(b&&"object"===typeof b&&"then"in b&&"function"===typeof b.then){var e=function(f){uGa(a,c,(0,g.uD)()-d);return f};
return b.then(e,e)}uGa(a,c,(0,g.uD)()-d);return b};
uGa=function(a,b,c,d){d=void 0===d?1:d;0<=c&&(b in a.j||(a.j[b]=new qGa),a.j[b].Ji(c,d))};
wGa=function(){};
xGa=function(a){if(!hO.isActive())return a.exports.AES128CTRCipher_encrypt.bind(a.exports);var b=a.j?"oals":"oalw";return function(c,d,e){hO.Am(b,function(){a.exports.AES128CTRCipher_encrypt(c,d,e)})}};
iO=function(a,b){g.J.call(this);var c=this;this.j=a;this.B=xGa(this.j);this.cipher=this.j.exports.AES128CTRCipher_create(b.byteOffset);this.addOnDisposeCallback(function(){c.j.exports.AES128CTRCipher_release(c.cipher)})};
g.jO=function(a){this.D=a};
g.kO=function(a){g.J.call(this);this.B=a};
lO=function(a,b){g.J.call(this);this.j=a;this.C=b};
yGa=function(a){this.G=new Uint8Array(64);this.C=new Uint8Array(64);this.D=0;this.K=new Uint8Array(64);this.B=0;this.G.set(a);this.C.set(a);for(a=0;64>a;a++)this.G[a]^=92,this.C[a]^=54;this.reset()};
zGa=function(a,b,c){for(var d=a.N,e=a.j[0],f=a.j[1],h=a.j[2],l=a.j[3],m=a.j[4],n=a.j[5],p=a.j[6],q=a.j[7],r,t,u,x=0;64>x;)16>x?(d[x]=u=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],u=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=u),r=q+mO[x]+u+((m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&n^~m&p),t=((e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10))+(e&f^e&h^f&h),q=r+t,l+=r,x++,16>x?(d[x]=u=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=
d[x-2],t=d[x-15],u=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=u),r=p+mO[x]+u+((l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&m^~l&n),t=((q>>>2|q<<30)^(q>>>13|q<<19)^(q>>>22|q<<10))+(q&e^q&f^e&f),p=r+t,h+=r,x++,16>x?(d[x]=u=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],u=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=u),r=n+mO[x]+u+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&l^
~h&m),t=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&q^p&e^q&e),n=r+t,f+=r,x++,16>x?(d[x]=u=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4):(r=d[x-2],t=d[x-15],u=d[x-7]+d[x-16]+((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)+((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3),d[x]=u),r=m+mO[x]+u+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&h^~f&l),t=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&p^n&q^p&q),u=q,q=l,l=u,u=p,p=h,h=u,u=n,n=f,f=u,m=e+r,e=r+t,x++;a.j[0]=e+a.j[0]|0;a.j[1]=f+a.j[1]|0;a.j[2]=h+a.j[2]|0;a.j[3]=
l+a.j[3]|0;a.j[4]=m+a.j[4]|0;a.j[5]=n+a.j[5]|0;a.j[6]=p+a.j[6]|0;a.j[7]=q+a.j[7]|0};
BGa=function(a){var b=new Uint8Array(32),c=64-a.B;55<a.B&&(c+=64);var d=new Uint8Array(c);d[0]=128;for(var e=8*a.D,f=1;9>f;f++){var h=e%256;d[c-f]=h;e=(e-h)/256}a.update(d);for(c=0;8>c;c++)b[4*c]=a.j[c]>>>24,b[4*c+1]=a.j[c]>>>16&255,b[4*c+2]=a.j[c]>>>8&255,b[4*c+3]=a.j[c]&255;AGa(a);return b};
AGa=function(a){a.j=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];a.N=[];a.N.length=64;a.D=0;a.B=0};
CGa=function(a){this.j=a};
DGa=function(a,b,c){a=new yGa(a.j);a.update(b);a.update(c);b=BGa(a);a.update(a.G);a.update(b);b=BGa(a);a.reset();return b};
EGa=function(a){this.B=a};
FGa=function(a,b,c,d){var e,f,h;return g.I(function(l){switch(l.j){case 1:if(a.j){l.La(2);break}return g.y(l,d.importKey("raw",a.B,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),3);case 3:a.j=l.B;case 2:return e=new Uint8Array(b.length+c.length),e.set(b),e.set(c,b.length),f={name:"HMAC",hash:"SHA-256"},g.y(l,d.sign(f,a.j,e),4);case 4:return h=l.B,l.return(new Uint8Array(h))}})};
GGa=function(a,b,c){a.C||(a.C=new CGa(a.B));return DGa(a.C,b,c)};
HGa=function(a,b,c){var d,e;return g.I(function(f){if(1==f.j){d=fO();if(!d)return f.return(GGa(a,b,c));g.Aa(f,3);return g.y(f,FGa(a,b,c,d),5)}if(3!=f.j)return f.return(f.B);e=g.Ca(f);g.AF(e);pGa=!0;return f.return(GGa(a,b,c))})};
nO=function(){var a=IGa;var b=void 0===b?[]:b;var c=void 0===c?[]:c;b=bma.apply(null,[cma.apply(null,g.oa(b))].concat(g.oa(c)));this.store=ema(a,void 0,b)};
g.JGa=function(a,b,c){for(var d=Object.assign({},a),e=g.v(Object.keys(b)),f=e.next();!f.done;f=e.next()){f=f.value;var h=a[f],l=b[f];if(void 0===l)delete d[f];else if(void 0===h)d[f]=l;else if(Array.isArray(l)&&Array.isArray(h))d[f]=c?[].concat(g.oa(h),g.oa(l)):l;else if(!Array.isArray(l)&&g.Za(l)&&!Array.isArray(h)&&g.Za(h))d[f]=g.JGa(h,l,c);else if(typeof l===typeof h)d[f]=l;else return b=new g.UC("Attempted to merge fields of differing types.",{name:"DeepMergeError",key:f,Fjb:h,updateValue:l}),
g.zF(b),a}return d};
oO=function(a){var b=this;a=void 0===a?[]:a;this.j=[];this.C=this.B=0;this.D=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
KGa=function(a,b){return 0===a.j.length?!1:(a=a.j[a.j.length-1])&&a.buffer===b.buffer&&a.byteOffset+a.length===b.byteOffset};
pO=function(a,b){b=g.v(b.j);for(var c=b.next();!c.done;c=b.next())a.append(c.value)};
qO=function(a,b,c){return a.split(b).Fm.split(c).tI};
LGa=function(a){a.D=void 0;a.B=0;a.C=0};
MGa=function(a,b,c){a.isFocused(b);return b-a.C+c<=a.j[a.B].length};
NGa=function(a){if(!a.D){var b=a.j[a.B];a.D=new DataView(b.buffer,b.byteOffset,b.length)}return a.D};
OGa=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength||!c)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!MGa(a,b,c)){var d=a.B,e=a.C;a.focus(b+c-1);e=new Uint8Array(a.C+a.j[a.B].length-e);for(var f=0,h=d;h<=a.B;h++)e.set(a.j[h],f),f+=a.j[h].length;a.j.splice(d,a.B-d+1,e);LGa(a);a.focus(b)}d=a.j[a.B];return new DataView(d.buffer,d.byteOffset+b-a.C,c)};
rO=function(a,b,c){a=OGa(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
PGa=function(a,b,c){a=rO(a,void 0===b?0:b,void 0===c?-1:c);b=new Uint8Array(a.length);try{b.set(a)}catch(d){for(c=0;c<a.length;c++)b[c]=a[c]}return b};
sO=function(a,b){a.focus(b);return a.j[a.B][b-a.C]};
QGa=function(a,b){a.focus(b);return MGa(a,b,4)?NGa(a).getUint32(b-a.C):256*(256*(256*sO(a,b)+sO(a,b+1))+sO(a,b+2))+sO(a,b+3)};
RGa=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
tO=function(a){return String.fromCharCode.apply(null,a)};
vO=function(a){return a.length?uO?uO.decode(a):tO(a):""};
g.xO=function(a){if(!a.length)return"";try{if(uO)return uO.decode(a);if("FetchInternal"in window)return FetchInternal.decodeFromUTF8(a)}catch(h){}for(var b=0,c=[],d=a.length;b<d;){for(var e=0;1024>e&&b<d;){var f=a[b++];if(128>f)wO[e++]=f;else{if(224>f)f=(f&31)<<6|a[b++]&63;else if(240>f)f=(f&15)<<12|(a[b++]&63)<<6|a[b++]&63;else{if(1024===e+1){--b;break}f=(f&7)<<18|(a[b++]&63)<<12|(a[b++]&63)<<6|a[b++]&63;f-=65536;wO[e++]=55296|f>>10;f=56320|f&1023}wO[e++]=f}}f=String.fromCharCode.apply(String,wO);
1024>e&&(f=f.substr(0,e));c.push(f)}return c.join("")};
zO=function(a,b){var c;if(null==(c=yO)?0:c.encodeInto)return b=yO.encodeInto(a,b),b.read<a.length?4*a.length:b.written;for(var d=c=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296===(e&64512)&&d+1<a.length&&56320===(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return c};
SGa=function(a){if(yO)return yO.encode(a);var b=new Uint8Array(Math.ceil(1.2*a.length)),c=zO(a,b);b.length<c&&(b=new Uint8Array(c),c=zO(a,b));b.length>c&&(b=b.subarray(0,c));return b};
AO=function(a){this.j=a;this.pos=0;this.B=-1};
BO=function(a){var b=sO(a.j,a.pos);++a.pos;if(128>b)return b;for(var c=b&127,d=1;128<=b;)b=sO(a.j,a.pos),++a.pos,d*=128,c+=(b&127)*d;return c};
CO=function(a,b){var c=a.B;for(a.B=-1;a.pos+1<=a.j.totalLength;){0>c&&(c=BO(a));var d=c>>3,e=c&7;if(d===b)return!0;if(d>b){a.B=c;break}c=-1;switch(e){case 0:BO(a);break;case 1:a.pos+=8;break;case 2:d=BO(a);a.pos+=d;break;case 5:a.pos+=4}}return!1};
DO=function(a,b){if(CO(a,b))return BO(a)};
EO=function(a,b){if(CO(a,b))return!!BO(a)};
FO=function(a,b){if(CO(a,b)){b=BO(a);var c=rO(a.j,a.pos,b);a.pos+=b;return c}};
GO=function(a,b){if(a=FO(a,b))return g.xO(a)};
HO=function(a,b,c){if(a=FO(a,b))return c(new AO(new oO([a])))};
IO=function(a,b){for(var c=[];CO(a,b);)c.push(BO(a));return c.length?c:void 0};
JO=function(a,b,c){for(var d=[],e;e=FO(a,b);)d.push(c(new AO(new oO([e]))));return d.length?d:void 0};
KO=function(a,b){a=a instanceof Uint8Array?new oO([a]):a;return b(new AO(a))};
TGa=function(a,b){a=void 0===a?4096:a;this.B=b;this.pos=0;this.C=[];b=void 0;if(this.B)try{var c=this.B.exports.malloc(a);b=new Uint8Array(this.B.exports.memory.buffer,c,a)}catch(d){}b||(b=new Uint8Array(a));this.j=b;this.view=new DataView(this.j.buffer,this.j.byteOffset,this.j.byteLength)};
LO=function(a,b){var c=a.pos+b;if(!(a.j.length>=c)){for(b=2*a.j.length;b<c;)b*=2;a.B?(c=a.B.exports.realloc(a.j.byteOffset,b),a.j=new Uint8Array(a.B.exports.memory.buffer,c,b)):(b=new Uint8Array(b),b.set(a.j.subarray(0,a.pos)),a.j=b);a.view=new DataView(a.j.buffer,a.j.byteOffset,a.j.byteLength)}};
MO=function(a,b){if(268435455<b){LO(a,4);for(var c=b&1073741823,d=0;4>d;d++)a.view.setUint8(a.pos,c&127|128),c>>=7,a.pos+=1;b=Math.floor(b/268435456)}for(LO(a,4);127<b;)a.view.setUint8(a.pos,b&127|128),b>>=7,a.pos+=1;a.view.setUint8(a.pos,b);a.pos+=1};
NO=function(a,b,c){void 0!==c&&(MO(a,8*b),MO(a,c))};
OO=function(a,b,c){void 0!==c&&NO(a,b,c?1:0)};
PO=function(a,b,c){void 0!==c&&(MO(a,8*b+2),b=c.length,MO(a,b),LO(a,b),a.j.set(c,a.pos),a.pos+=b)};
QO=function(a,b,c){void 0!==c&&(UGa(a,b,Math.ceil(Math.log2(4*c.length+2)/7)),LO(a,1.2*c.length),b=zO(c,a.j.subarray(a.pos)),a.pos+b>a.j.length&&(LO(a,b),b=zO(c,a.j.subarray(a.pos))),a.pos+=b,VGa(a))};
UGa=function(a,b,c){c=void 0===c?2:c;MO(a,8*b+2);a.C.push(a.pos);a.C.push(c);a.pos+=c};
VGa=function(a){for(var b=a.C.pop(),c=a.C.pop(),d=a.pos-c-b;b--;){var e=b?128:0;a.view.setUint8(c++,d&127|e);d>>=7}};
RO=function(a,b,c,d,e){c&&(UGa(a,b,void 0===e?3:e),d(a,c),VGa(a))};
WGa=function(a){a.B&&a.j.buffer!==a.B.exports.memory.buffer&&(a.j=new Uint8Array(a.B.exports.memory.buffer,a.j.byteOffset,a.j.byteLength),a.view=new DataView(a.j.buffer,a.j.byteOffset,a.j.byteLength));return new Uint8Array(a.j.buffer,a.j.byteOffset,a.pos)};
g.SO=function(a,b,c){c=new TGa(4096,c);b(c,a);return WGa(c)};
g.TO=function(a){var b=new AO(new oO([sg(decodeURIComponent(a))]));a=GO(b,2);b=DO(b,4);var c=XGa[b];if("undefined"===typeof c)throw a=new g.UC("Failed to recognize field number",{name:"EntityKeyHelperError",fib:b}),g.zF(a),a;return{P5:b,entityType:c,entityId:a}};
g.UO=function(a,b){var c=new TGa;PO(c,2,SGa(a));a=YGa[b];if("undefined"===typeof a)throw b=new g.UC("Failed to recognize entity type",{name:"EntityKeyHelperError",entityType:b}),g.zF(b),b;NO(c,4,a);NO(c,5,1);b=WGa(c);return encodeURIComponent(g.qg(b))};
VO=function(a,b,c,d){if(void 0===d)return d=Object.assign({},a[b]||{}),c=(delete d[c],d),d={},Object.assign({},a,(d[b]=c,d));var e={},f={};return Object.assign({},a,(f[b]=Object.assign({},a[b],(e[c]=d,e)),f))};
ZGa=function(a,b,c,d,e){var f=a[b];if(null==f||!f[c])return a;d=g.JGa(f[c],d,"REPEATED_FIELDS_MERGE_OPTION_APPEND"===e);e={};f={};return Object.assign({},a,(f[b]=Object.assign({},a[b],(e[c]=d,e)),f))};
$Ga=function(a,b){a=void 0===a?{}:a;switch(b.type){case "ENTITY_LOADED":return b.payload.reduce(function(d,e){var f,h=null==(f=e.options)?void 0:f.persistenceOption;if(h&&"ENTITY_PERSISTENCE_OPTION_UNKNOWN"!==h&&"ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST"!==h)return d;if(!e.entityKey)return g.zF(Error("Missing entity key")),d;if("ENTITY_MUTATION_TYPE_REPLACE"===e.type){if(!e.payload)return g.zF(new g.UC("REPLACE entity mutation is missing a payload",{entityKey:e.entityKey})),d;var l=g.$c(e.payload);
return VO(d,l,e.entityKey,e.payload[l])}if("ENTITY_MUTATION_TYPE_DELETE"===e.type){e=e.entityKey;try{var m=g.TO(e).entityType;l=VO(d,m,e)}catch(q){if(q instanceof Error)g.zF(new g.UC("Failed to deserialize entity key",{entityKey:e,BQ:q.message})),l=d;else throw q;}return l}if("ENTITY_MUTATION_TYPE_UPDATE"===e.type){if(!e.payload)return g.zF(new g.UC("UPDATE entity mutation is missing a payload",{entityKey:e.entityKey})),d;l=g.$c(e.payload);var n,p;return ZGa(d,l,e.entityKey,e.payload[l],null==(n=
e.fieldMask)?void 0:null==(p=n.mergeOptions)?void 0:p.repeatedFieldsMergeOption)}return d},a);
case "REPLACE_ENTITY":var c=b.payload;return VO(a,c.entityType,c.key,c.O5);case "REPLACE_ENTITIES":return Object.keys(b.payload).reduce(function(d,e){var f=b.payload[e];return Object.keys(f).reduce(function(h,l){return VO(h,e,l,f[l])},d)},a);
case "UPDATE_ENTITY":return c=b.payload,ZGa(a,c.entityType,c.key,c.O5,c.wjb);default:return a}};
WO=function(a,b,c){return a[b]?a[b][c]||null:null};
bHa=function(a){var b=a.hours||0;var c=a.minutes||0,d=a.seconds||0;b=d+60*c+3600*b+86400*(a.days||0)+604800*(a.weeks||0)+2629800*(a.months||0)+31557600*(a.years||0);0>=b?b={hours:0,minutes:0,seconds:0}:(a=b,b=Math.floor(a/3600),a%=3600,c=Math.floor(a/60),d=Math.floor(a%60),b={hours:b,minutes:c,seconds:d});var e=void 0===b.hours?0:b.hours;c=void 0===b.minutes?0:b.minutes;a=void 0===b.seconds?0:b.seconds;d=0<e;b=[];if(d){e=(new Intl.NumberFormat("en-u-nu-latn")).format(e);var f=["fr"],h="az bs ca da de el es eu gl hr id is it km lo mk nl pt-BR ro sl sr sr-Latn tr vi".split(" ");
e="af be bg cs et fi fr-CA hu hy ka kk ky lt lv no pl pt-PT ru sk sq sv uk uz".split(" ").includes(XO)?e.replace(",","\u00a0"):f.includes(XO)?e.replace(",","\u202f"):h.includes(XO)?e.replace(",","."):e;b.push(e)}d=void 0===d?!1:d;c=(["af","be","lt"].includes(XO)||d)&&10>c?aHa().format(c):(new Intl.NumberFormat("en-u-nu-latn")).format(c);b.push(c);c=aHa().format(a);b.push(c);c=":";"da fi id si sl sr sr-Latn".split(" ").includes(XO)&&(c=".");return b.join(c)};
aHa=function(){return new Intl.NumberFormat("en-u-nu-latn",{minimumIntegerDigits:2})};
cHa=function(a,b){var c,d;a=(null==(c=a.watchEndpointSupportedAuthorizationTokenConfig)?void 0:null==(d=c.videoAuthorizationToken)?void 0:d.credentialTransferTokens)||[];for(c=0;c<a.length;++c)if(a[c].scope===b)return a[c].token||void 0};
dHa=function(a){if(a&&a.simpleText)return a.simpleText;var b="";if(a&&a.runs)for(var c=0;c<a.runs.length;c++)a.runs[c].text&&(b+=a.runs[c].text);return b};
YO=function(a){return a?function(){try{return a.apply(this,arguments)}catch(b){g.zF(b)}}:a};
ZO=function(a,b,c){if(!g.zB("jspb_translator_skip_iteration"))if(Array.isArray(b))for(var d=0;d<b.length;d++)c?a(c(b[d])[1]):a(b[d]);else c?a(c(b)[1]):a(b)};
$O=function(a,b,c){if(!g.zB("jspb_translator_skip_iteration"))if(Array.isArray(b))for(var d=0;d<b.length;d++)a(c[b[d]]);else a(c[b])};
X=function(a){g.zB("jspb_translator_log_errors")&&g.CB(a)};
fHa=function(a){var b=new $y,c=0;try{var d=a.eventType;void 0!==d&&(Q(b,1,eHa[d]),c++);var e=a.storedEventsCount;void 0!==e&&(Xj(b,2,e),c++);var f=a.expiredEventsCount;void 0!==f&&(Xj(b,3,f),c++);var h=a.averageTimeBetweenDispatchesMs;void 0!==h&&(Xj(b,4,h),c++);var l=a.oldestStoredEventAgeMs;void 0!==l&&(Xj(b,5,l),c++);var m=a.metricIntervalMs;void 0!==m&&(Xj(b,6,m),c++);var n=a.dispatchedEventCount;void 0!==n&&(Xj(b,7,n),c++);var p=a.dispatchAttemptCount;void 0!==p&&(Xj(b,8,p),c++);var q=a.withDiskSpaceMs;
void 0!==q&&(Zj(b,9,q),c++);var r=a.withNetworkMs;void 0!==r&&(Zj(b,10,r),c++);var t=a.foregroundMs;void 0!==t&&(Zj(b,11,t),c++);var u=a.activeMs;void 0!==u&&(Zj(b,12,u),c++);var x=a.condensedPageBcSlackCount;void 0!==x&&(Xj(b,13,x),c++);var B=a.persistedDeleteUsedCount;void 0!==B&&(Xj(b,14,B),c++);var F=a.persistedDeleteCount;void 0!==F&&(Xj(b,15,F),c++);var G=a.eventDisabledCount;void 0!==G&&(Xj(b,16,G),c++);var H=a.identityResolutionErrorCount;void 0!==H&&(Xj(b,17,H),c++);var O=a.exceededMaxRetryCount;
void 0!==O&&(Xj(b,18,O),c++);var P=a.condensedPageBcPersistFailCount;void 0!==P&&(Xj(b,19,P),c++);var Y=a.couldNotUnloadPageCount;void 0!==Y&&(Xj(b,20,Y),c++);var la=a.pageWasCorruptedCount;void 0!==la&&(Xj(b,24,la),c++);var pa=a.badEventIndexCount;void 0!==pa&&(Xj(b,27,pa),c++);var ua=a.serializeErrorCount;void 0!==ua&&(Xj(b,25,ua),c++);var na=a.payloadInfoNotSetCount;void 0!==na&&(Xj(b,21,na),c++);var wa=a.requestEmptyErrorCount;void 0!==wa&&(Xj(b,22,wa),c++);var ea=a.clientEventNotSetCount;void 0!==
ea&&(Xj(b,23,ea),c++);var Ea=a.differentIdCount;void 0!==Ea&&(Xj(b,26,Ea),c++);var Z=a.failedWriteCount;void 0!==Z&&(Xj(b,28,Z),c++);var Qa=a.failedReadCount;void 0!==Qa&&(Xj(b,29,Qa),c++);var z=a.failedDispatchCount;void 0!==z&&(Xj(b,30,z),c++);var W=a.failedFetchCount;void 0!==W&&(Xj(b,31,W),c++);var bb=a.loggingliteLogsMoved;void 0!==bb&&(Xj(b,32,bb),c++);var eb=a.loggingliteLogsDropped;void 0!==eb&&(Xj(b,33,eb),c++);return[c===Object.keys(a).length,b]}catch(jb){return X(jb),[!1,void 0]}};
aP=function(a){var b=new vA,c=0;try{var d=a.trackingParams;void 0!==d&&(b.setTrackingParams(d),c++);var e=a.veType;void 0!==e&&(Xj(b,2,e),c++);var f=a.elementIndex;void 0!==f&&(Xj(b,3,f),c++);var h=a.veCounter;void 0!==h&&(Xj(b,6,h),c++);var l=a.dataElement;if(l){var m=aP(l);m[0]&&(Kj(b,vA,7,m[1]),c++)}var n=a.isCounterfactual;void 0!==n&&(Wj(b,5,n),c++);var p=a.youtubeData;if(p){var q=new Jx,r=0;try{var t=p.channelData;if(t){var u=new Uw,x=0;try{var B=t.externalId;void 0!==B&&(zk(u,1,B),x++);var F=
[x===Object.keys(t).length,u]}catch(Oa){X(Oa),F=[!1,void 0]}var G=F;G[0]&&(Kj(q,Uw,2,G[1]),r++)}var H=p.channelItem;if(H){var O=new Vw,P=0;try{var Y=H.externalId;void 0!==Y&&(zk(O,1,Y),P++);var la=[P===Object.keys(H).length,O]}catch(Oa){X(Oa),la=[!1,void 0]}var pa=la;pa[0]&&(Kj(q,Vw,5,pa[1]),r++)}var ua=p.playlistItem;if(ua){var na=new qx,wa=0;try{var ea=ua.externalPlaylistId;void 0!==ea&&(zk(na,5,ea),wa++);var Ea=[wa===Object.keys(ua).length,na]}catch(Oa){X(Oa),Ea=[!1,void 0]}var Z=Ea;Z[0]&&(Kj(q,
qx,6,Z[1]),r++)}var Qa=p.analyticsData;if(Qa){var z=new Sw,W=0;try{var bb=Qa.tabName;void 0!==bb&&(Q(z,1,gHa[bb]),W++);var eb=Qa.analysisVariant;if(eb){var jb=new Fw,Ya=0;try{var Tb=eb.analysisSummary;if(Tb){var Pb=new ow,kb=0;try{var Gb=Tb.type;void 0!==Gb&&(Q(Pb,1,hHa[Gb]),kb++);var Va=Tb.eligibility;void 0!==Va&&(Q(Pb,2,iHa[Va]),kb++);var A=Tb.sentiment;void 0!==A&&(Q(Pb,3,jHa[A]),kb++);var D=[kb===Object.keys(Tb).length,Pb]}catch(Oa){X(Oa),D=[!1,void 0]}var E=D;E[0]&&(Kj(jb,ow,1,E[1]),Ya++)}var C=
eb.videoPerformanceVariant;if(C){var K=kHa(C);K[0]&&(Lj(jb,Cw,2,bP,K[1]),Ya++)}var T=eb.videoOverviewVariant;if(T){var fa=new Dw,ra=0;try{var da=T.timePeriod;void 0!==da&&(Q(fa,1,cP[da]),ra++);var ha=T.videoPerformanceVariant;if(ha){var Fa=kHa(ha);Fa[0]&&(Kj(fa,Cw,2,Fa[1]),ra++)}var xa=T.durationTimePeriod;void 0!==xa&&(Q(fa,3,lHa[xa]),ra++);var cb=[ra===Object.keys(T).length,fa]}catch(Oa){X(Oa),cb=[!1,void 0]}var Ib=cb;Ib[0]&&(Lj(jb,Dw,3,bP,Ib[1]),Ya++)}var Lb=eb.channelFluctuationVariant;if(Lb){var Qb=
new rw,Ab=0;try{var Mb=Lb.views;void 0!==Mb&&(Q(Qb,1,dP[Mb]),Ab++);var cd=Lb.driver;void 0!==cd&&(Q(Qb,2,mHa[cd]),Ab++);var Bc=Lb.ctr;void 0!==Bc&&(Q(Qb,3,dP[Bc]),Ab++);var md=Lb.impressions;void 0!==md&&(Q(Qb,4,dP[md]),Ab++);var Mc=Lb.viewsPerVideo;void 0!==Mc&&(Q(Qb,5,dP[Mc]),Ab++);var nd=[Ab===Object.keys(Lb).length,Qb]}catch(Oa){X(Oa),nd=[!1,void 0]}var od=nd;od[0]&&(Lj(jb,rw,4,bP,od[1]),Ya++)}var $b=eb.artistOverviewVariant;if($b){var nc=new pw,Ld=0;try{var ac=$b.timePeriod;void 0!==ac&&(Q(nc,
1,cP[ac]),Ld++);var dd=$b.variantType;void 0!==dd&&(Q(nc,2,nHa[dd]),Ld++);var ed=[Ld===Object.keys($b).length,nc]}catch(Oa){X(Oa),ed=[!1,void 0]}var Nb=ed;Nb[0]&&(Lj(jb,pw,5,bP,Nb[1]),Ya++)}var Ed=eb.monthlySubsVariant;if(Ed){var Ud=oHa(Ed);Ud[0]&&(Lj(jb,ww,6,bP,Ud[1]),Ya++)}var Ub=eb.monthlyRevenueVariant;if(Ub){var cf=pHa(Ub);cf[0]&&(Lj(jb,vw,7,bP,cf[1]),Ya++)}var Ae=eb.holisticMonthlyOverviewVariant;if(Ae){var Be=new xw,pe=0;try{var lh=Ae.viewsPerformance;if(lh){var Kg=qHa(lh);Kg[0]&&(Kj(Be,uw,
1,Kg[1]),pe++)}var mh=Ae.subsPerformance;if(mh){var nh=oHa(mh);nh[0]&&(Kj(Be,ww,2,nh[1]),pe++)}var Lg=Ae.revenuePerformance;if(Lg){var oh=pHa(Lg);oh[0]&&(Kj(Be,vw,3,oh[1]),pe++)}var Ce=[pe===Object.keys(Ae).length,Be]}catch(Oa){X(Oa),Ce=[!1,void 0]}var df=Ce;df[0]&&(Lj(jb,xw,8,bP,df[1]),Ya++)}var Zc=eb.personalizedChannelOverviewVariant;if(Zc){var ee=new Bw,vc=0;try{var Mg=Zc.timePeriod;void 0!==Mg&&(Q(ee,1,cP[Mg]),vc++);var ph=Zc.viewsPerformance;if(ph){var qh=qHa(ph);qh[0]&&(Kj(ee,uw,2,qh[1]),vc++)}var rh=
[vc===Object.keys(Zc).length,ee]}catch(Oa){X(Oa),rh=[!1,void 0]}var De=rh;De[0]&&(Lj(jb,Bw,9,bP,De[1]),Ya++)}var wc=eb.channelNewReturningVariant;if(wc){var Kf=new tw,Zh=0;try{var $h=wc.uniqueViewers;void 0!==$h&&(Q(Kf,1,dP[$h]),Zh++);var Ii=wc.newViewers;void 0!==Ii&&(Q(Kf,2,dP[Ii]),Zh++);var ef=wc.returningViewers;void 0!==ef&&(Q(Kf,3,dP[ef]),Zh++);var eg=[Zh===Object.keys(wc).length,Kf]}catch(Oa){X(Oa),eg=[!1,void 0]}var Qe=eg;Qe[0]&&(Lj(jb,tw,10,bP,Qe[1]),Ya++)}var fg=eb.lowReturningViewersDataStoryVariant;
if(fg){var sf=new yw,Fc=0;try{var rc=fg.videoListType;void 0!==rc&&(Q(sf,1,rHa[rc]),Fc++);var bc=[Fc===Object.keys(fg).length,sf]}catch(Oa){X(Oa),bc=[!1,void 0]}var Ng=bc;Ng[0]&&(Lj(jb,yw,11,bP,Ng[1]),Ya++)}var ff=eb.weeklyDataStoryVariant;if(ff){var Lf=new Ew,Mf=0;try{var Ji=ff.dateId;void 0!==Ji&&(Yj(Lf,1,Ji),Mf++);var rj=[Mf===Object.keys(ff).length,Lf]}catch(Oa){X(Oa),rj=[!1,void 0]}var gg=rj;gg[0]&&(Lj(jb,Ew,12,bP,gg[1]),Ya++)}var sh=eb.monthlyDataStoryVariant;if(sh){var ai=new zw,bi=0;try{var hg=
sh.dateId;void 0!==hg&&(Yj(ai,1,hg),bi++);var gf=sh.highlightType;void 0!==gf&&(Q(ai,2,sHa[gf]),bi++);var Og=sh.adviceType;void 0!==Og&&(Q(ai,3,tHa[Og]),bi++);var Nf=[bi===Object.keys(sh).length,ai]}catch(Oa){X(Oa),Nf=[!1,void 0]}var Ki=Nf;Ki[0]&&(Lj(jb,zw,13,bP,Ki[1]),Ya++)}var ig=eb.otherFormatsDataStoryVariant;if(ig){var Pg=new Aw,th=0;try{var Qg=ig.overlapShorts;void 0!==Qg&&(Yj(Pg,1,Qg),th++);var Ee=ig.overlapChannels;void 0!==Ee&&(Yj(Pg,2,Ee),th++);var Fe=[th===Object.keys(ig).length,Pg]}catch(Oa){X(Oa),
Fe=[!1,void 0]}var Re=Fe;Re[0]&&(Lj(jb,Aw,14,bP,Re[1]),Ya++)}var qe=eb.audienceWatchesLongformDataStoryVariant;if(qe){var bk=new qw,Se=0;try{var tf=qe.hasOverlapVideo;void 0!==tf&&(Wj(bk,1,tf),Se++);var Vd=qe.hasOverlapLivestream;void 0!==Vd&&(Wj(bk,2,Vd),Se++);var uh=qe.overlapChannels;void 0!==uh&&(Yj(bk,3,uh),Se++);var Rg=[Se===Object.keys(qe).length,bk]}catch(Oa){X(Oa),Rg=[!1,void 0]}var Of=Rg;Of[0]&&(Lj(jb,qw,15,bP,Of[1]),Ya++)}var Sg=[Ya===Object.keys(eb).length,jb]}catch(Oa){X(Oa),Sg=[!1,void 0]}var jg=
Sg;jg[0]&&(Kj(z,Fw,12,jg[1]),W++)}var ci=Qa.cardConfig;if(ci){var Li=new Jw,Mi=0;try{var Ql=ci.cardType;void 0!==Ql&&(Q(Li,3,uHa[Ql]),Mi++);var sj=ci.legacyMobileCardType;void 0!==sj&&(Q(Li,5,vHa[sj]),Mi++);var ck=ci.entityType;void 0!==ck&&(Q(Li,4,wHa[ck]),Mi++);var kg=ci.tableCardConfig;if(kg){var fe=new Iw,re=0;try{var Te=kg.dimension;void 0!==Te&&(Q(fe,1,eP[Te]),re++);var tj=kg.metrics;void 0!==tj&&($O(fe.j.bind(fe),tj,eP),re++);var Rl=[re===Object.keys(kg).length,fe]}catch(Oa){X(Oa),Rl=[!1,void 0]}var dk=
Rl;dk[0]&&(Lj(Li,Iw,1,xHa,dk[1]),Mi++)}var vh=ci.keyMetricCardConfig;if(vh){var ek=new Hw,Zk=0;try{var di=vh.metricTabConfigs;di&&(ZO(ek.j.bind(ek),di,yHa),Zk++);var ei=[Zk===Object.keys(vh).length,ek]}catch(Oa){X(Oa),ei=[!1,void 0]}var fi=ei;fi[0]&&(Lj(Li,Hw,2,xHa,fi[1]),Mi++)}var Sl=[Mi===Object.keys(ci).length,Li]}catch(Oa){X(Oa),Sl=[!1,void 0]}var Tl=Sl;Tl[0]&&(Kj(z,Jw,13,Tl[1]),W++)}var Ni=Qa.externalVideoId;void 0!==Ni&&(N(z,15,Ni),W++);var gi=Qa.videoSid;void 0!==gi&&(Zj(z,16,gi),W++);var ge=
Qa.exploreConfig;if(ge){var lg=new Rw,Tg=0;try{var Oi=ge.metrics;void 0!==Oi&&($O(lg.j.bind(lg),Oi,eP),Tg++);var uf=ge.dimension;void 0!==uf&&(Q(lg,2,eP[uf]),Tg++);var fk=ge.timePeriodType;void 0!==fk&&(Q(lg,3,cP[fk]),Tg++);var $k=[Tg===Object.keys(ge).length,lg]}catch(Oa){X(Oa),$k=[!1,void 0]}var uj=$k;uj[0]&&(Kj(z,Rw,18,uj[1]),W++)}var hf=Qa.contentInspirationEntity;if(hf){var jf=new nw,Pf=0;try{var Pi=hf.video;if(Pi){var vj=new mw,Ul=0;try{var gk=Pi.externalVideoId;void 0!==gk&&(N(vj,1,gk),Ul++);
var pc=[Ul===Object.keys(Pi).length,vj]}catch(Oa){X(Oa),pc=[!1,void 0]}var Ds=pc;Ds[0]&&(Lj(jf,mw,1,fP,Ds[1]),Pf++)}var bq=hf.kgTopic;if(bq){var zo=new lw,cq=0;try{var hk=bq.kgTopicMid;void 0!==hk&&(N(zo,1,hk),cq++);var ik=[cq===Object.keys(bq).length,zo]}catch(Oa){X(Oa),ik=[!1,void 0]}var Vl=ik;Vl[0]&&(Lj(jf,lw,2,fP,Vl[1]),Pf++)}var Qi=hf.freeformTopic;if(Qi){var al=new jw,jk=0;try{var dq=Qi.freeformTopic;void 0!==dq&&(N(al,1,dq),jk++);var eq=Qi.languageCode;void 0!==eq&&(N(al,4,eq),jk++);var kk=
Qi.isContentGap;void 0!==kk&&(Wj(al,2,kk),jk++);var fq=Qi.isShortsContentGap;void 0!==fq&&(Wj(al,3,fq),jk++);var gq=Qi.isInVideoIdeaShelf;void 0!==gq&&(Wj(al,5,gq),jk++);var hq=[jk===Object.keys(Qi).length,al]}catch(Oa){X(Oa),hq=[!1,void 0]}var Qf=hq;Qf[0]&&(Lj(jf,jw,3,fP,Qf[1]),Pf++)}var vf=hf.generatedOutline;if(vf){var wj=new kw,Wl=0;try{var iq=vf.feedbackToken;void 0!==iq&&(N(wj,1,iq),Wl++);var hi=[Wl===Object.keys(vf).length,wj]}catch(Oa){X(Oa),hi=[!1,void 0]}var ii=hi;ii[0]&&(Lj(jf,kw,4,fP,
ii[1]),Pf++)}var wh=[Pf===Object.keys(hf).length,jf]}catch(Oa){X(Oa),wh=[!1,void 0]}var jq=wh;jq[0]&&(Kj(z,nw,19,jq[1]),W++)}var Ao=[W===Object.keys(Qa).length,z]}catch(Oa){X(Oa),Ao=[!1,void 0]}var xh=Ao;xh[0]&&(Kj(q,Sw,20,xh[1]),r++)}var yh=p.promotionData;if(yh){var ji=new rx,cn=0;try{var kq=yh.promotionId;void 0!==kq&&(N(ji,1,kq),cn++);var Xl=yh.placementType;void 0!==Xl&&(Q(ji,9,zHa[Xl]),cn++);var dn=[cn===Object.keys(yh).length,ji]}catch(Oa){X(Oa),dn=[!1,void 0]}var en=dn;en[0]&&(Kj(q,rx,21,
en[1]),r++)}var bl=p.backstageItem;if(bl){var Yl=new Tw,Zl=0;try{var lq=bl.stanzaId;void 0!==lq&&(N(Yl,1,lq),Zl++);var mq=bl.likeCount;void 0!==mq&&(Zj(Yl,7,mq),Zl++);var Rc=bl.backstageId;void 0!==Rc&&(N(Yl,9,Rc),Zl++);var ki=bl.wasPostScheduled;void 0!==ki&&(Wj(Yl,14,ki),Zl++);var Bo=[Zl===Object.keys(bl).length,Yl]}catch(Oa){X(Oa),Bo=[!1,void 0]}var lk=Bo;lk[0]&&(Kj(q,Tw,32,lk[1]),r++)}var li=p.adminSelfieData;if(li){var Ri=new Ow,fn=0;try{var Co=li.componentId;void 0!==Co&&(N(Ri,1,Co),fn++);var nq=
li.componentType;void 0!==nq&&(N(Ri,2,nq),fn++);var wf=li.payload;if(wf){var mg=new Nw,zh=0;try{var $l=wf.include;if($l){var gn=new Kw,Do=0;try{var oq=$l.fragmentName;void 0!==oq&&(N(gn,1,oq),Do++);var Eo=[Do===Object.keys($l).length,gn]}catch(Oa){X(Oa),Eo=[!1,void 0]}var pq=Eo;pq[0]&&(Lj(mg,Kw,1,AHa,pq[1]),zh++)}var cl=wf.toolboxPage;if(cl){var hn=new Mw,Fo=0;try{var qq=cl.fragmentName;void 0!==qq&&(N(hn,1,qq),Fo++);var dl=[Fo===Object.keys(cl).length,hn]}catch(Oa){X(Oa),dl=[!1,void 0]}var rq=dl;
rq[0]&&(Lj(mg,Mw,2,AHa,rq[1]),zh++)}var Go=wf.reviewQueuePage;if(Go){var sq=new Lw,Ho=0;try{var am=Go.queueId;void 0!==am&&(Xj(sq,1,am),Ho++);var mk=[Ho===Object.keys(Go).length,sq]}catch(Oa){X(Oa),mk=[!1,void 0]}var bm=mk;bm[0]&&(Lj(mg,Lw,3,AHa,bm[1]),zh++)}var tq=[zh===Object.keys(wf).length,mg]}catch(Oa){X(Oa),tq=[!1,void 0]}var Io=tq;Io[0]&&(Kj(Ri,Nw,3,Io[1]),fn++)}var Jo=[fn===Object.keys(li).length,Ri]}catch(Oa){X(Oa),Jo=[!1,void 0]}var uq=Jo;uq[0]&&(Kj(q,Ow,41,uq[1]),r++)}var xj=p.notificationState;
if(xj){var el=new Ex,mi=0;try{var ng=xj.inboxInteractionData;if(ng){var cm=new Dx,Ko=0;try{var ni=ng.notifications;ni&&(ZO(cm.j.bind(cm),ni,BHa),Ko++);var vq=[Ko===Object.keys(ng).length,cm]}catch(Oa){X(Oa),vq=[!1,void 0]}var Lo=vq;Lo[0]&&(Kj(el,Dx,9,Lo[1]),mi++)}var wq=[mi===Object.keys(xj).length,el]}catch(Oa){X(Oa),wq=[!1,void 0]}var jn=wq;jn[0]&&(Kj(q,Ex,59,jn[1]),r++)}var Rf=p.delegationContext;if(Rf){var Sf=new ox,Si=0;try{var Ah=Rf.externalChannelId;void 0!==Ah&&(N(Sf,1,Ah),Si++);var dm=Rf.externalOwnerId;
void 0!==dm&&(N(Sf,3,dm),Si++);var Ti=Rf.artistId;void 0!==Ti&&(N(Sf,4,Ti),Si++);var Bh=Rf.roleType;if(Bh){var yj=new mx,fl=0;try{var em=Bh.channelRoleType;void 0!==em&&(Ak(yj,1,CHa,DHa[em]),fl++);var fm=Bh.artistRoleType;void 0!==fm&&(Ak(yj,2,CHa,EHa[fm]),fl++);var kn=Bh.contentOwnerRoleType;void 0!==kn&&(Ak(yj,3,CHa,FHa[kn]),fl++);var xq=[fl===Object.keys(Bh).length,yj]}catch(Oa){X(Oa),xq=[!1,void 0]}var yq=xq;yq[0]&&(Kj(Sf,mx,5,yq[1]),Si++)}var gm=Rf.oacChannelId;void 0!==gm&&(N(Sf,6,gm),Si++);
var ln=Rf.isInternalUser;void 0!==ln&&(Wj(Sf,8,ln),Si++);var mn=Rf.user;void 0!==mn&&(Wj(Sf,10,mn),Si++);var Es=Rf.delegationContextSerialized;void 0!==Es&&(zk(Sf,9,Es),Si++);var Mo=[Si===Object.keys(Rf).length,Sf]}catch(Oa){X(Oa),Mo=[!1,void 0]}var zq=Mo;zq[0]&&(Kj(q,ox,63,zq[1]),r++)}var hm=p.campaignData;if(hm){var nk=new Bx,nn=0;try{var No=hm.campaignName;void 0!==No&&(N(nk,1,No),nn++);var Ge=hm.campaignVersion;void 0!==Ge&&(N(nk,2,Ge),nn++);var Ue=[nn===Object.keys(hm).length,nk]}catch(Oa){X(Oa),
Ue=[!1,void 0]}var Ve=Ue;Ve[0]&&(Kj(q,Bx,64,Ve[1]),r++)}var on=p.scoringEventInfo;if(on){var Aq=new sx,pn=0;try{var Oo=on.scoringTrackingParams;void 0!==Oo&&(zk(Aq,1,Oo),pn++);var Po=[pn===Object.keys(on).length,Aq]}catch(Oa){X(Oa),Po=[!1,void 0]}var Bq=Po;Bq[0]&&(Kj(q,sx,77,Bq[1]),r++)}var Qo=p.servletData;if(Qo){var Cq=new tx,Dq=0;try{var im=Qo.serializedServletEventId;void 0!==im&&(N(Cq,1,im),Dq++);var qn=[Dq===Object.keys(Qo).length,Cq]}catch(Oa){X(Oa),qn=[!1,void 0]}var rn=qn;rn[0]&&(Kj(q,tx,
83,rn[1]),r++)}var Ro=p.yoodleData;if(Ro){var Eq=new Ax,Fq=0;try{var Gq=Ro.promoId;void 0!==Gq&&(N(Eq,1,Gq),Fq++);var Hq=[Fq===Object.keys(Ro).length,Eq]}catch(Oa){X(Oa),Hq=[!1,void 0]}var Iq=Hq;Iq[0]&&(Kj(q,Ax,85,Iq[1]),r++)}var ok=p.videoRestrictionData;if(ok){var jm=new zx,sn=0;try{var Jq=ok.restrictions;Jq&&(ZO(jm.j.bind(jm),Jq,GHa),sn++);var tn=ok.prechecksPending;void 0!==tn&&(Wj(jm,2,tn),sn++);var Ui=[sn===Object.keys(ok).length,jm]}catch(Oa){X(Oa),Ui=[!1,void 0]}var Vi=Ui;Vi[0]&&(Kj(q,zx,
92,Vi[1]),r++)}var Ug=p.creatorMusicData;if(Ug){var zj=new jx,gl=0;try{var pk=Ug.entity;if(pk){var km=HHa(pk);km[0]&&(Kj(zj,ix,1,km[1]),gl++)}var hl=Ug.entities;hl&&(ZO(zj.j.bind(zj),hl,HHa),gl++);var Kq=Ug.track;if(Kq){var Lq=IHa(Kq);Lq[0]&&(Lj(zj,hx,3,JHa,Lq[1]),gl++)}var Mq=Ug.collection;if(Mq){var Nq=KHa(Mq);Nq[0]&&(Lj(zj,fx,4,JHa,Nq[1]),gl++)}var So=[gl===Object.keys(Ug).length,zj]}catch(Oa){X(Oa),So=[!1,void 0]}var Oq=So;Oq[0]&&(Kj(q,jx,96,Oq[1]),r++)}var He=p.creatorData;if(He){var Ie=new ax,
xf=0;try{var Pq=He.ttWizardTargetFeature;void 0!==Pq&&(Ak(Ie,1,LHa,MHa[Pq]),xf++);var Qq=He.ttWizardTargetLevel;void 0!==Qq&&(Ak(Ie,2,LHa,NHa[Qq]),xf++);var qk=He.simpleWizardDetails;if(qk){var lm=new $w;try{var il=[0===Object.keys(qk).length,lm]}catch(Oa){X(Oa),il=[!1,void 0]}var jl=il;jl[0]&&(Lj(Ie,$w,3,OHa,jl[1]),xf++)}var kl=He.advancedWizardDetails;if(kl){var mm=new Yw,Rq=0;try{var Sq=kl.isDoubleHop;void 0!==Sq&&(Wj(mm,1,Sq),Rq++);var Tq=[Rq===Object.keys(kl).length,mm]}catch(Oa){X(Oa),Tq=[!1,
void 0]}var Uq=Tq;Uq[0]&&(Lj(Ie,Yw,4,OHa,Uq[1]),xf++)}var To=He.blockedWizardDetails;if(To){var nm=new Zw,Vq=0;try{var Ch=To.loggableBlockedReason;void 0!==Ch&&(Q(nm,1,PHa[Ch]),Vq++);var rk=[Vq===Object.keys(To).length,nm]}catch(Oa){X(Oa),rk=[!1,void 0]}var ll=rk;ll[0]&&(Lj(Ie,Zw,5,OHa,ll[1]),xf++)}var Fs=[xf===Object.keys(He).length,Ie]}catch(Oa){X(Oa),Fs=[!1,void 0]}var om=Fs;om[0]&&(Kj(q,ax,98,om[1]),r++)}var sk=p.adstubeData;if(sk){var Gs=new Qw,We=0;try{var oi=sk.countryTargetingPrefill;if(oi){var Dh=
new Pw,Eh=0;try{var un=oi.prefilledCodes;un&&(ZO(Dh.B.bind(Dh),un),Eh++);var Wi=oi.finalCodes;Wi&&(ZO(Dh.j.bind(Dh),Wi),Eh++);var Wq=oi.source;void 0!==Wq&&(N(Dh,3,Wq),Eh++);var Hs=[Eh===Object.keys(oi).length,Dh]}catch(Oa){X(Oa),Hs=[!1,void 0]}var Is=Hs;Is[0]&&(Kj(Gs,Pw,1,Is[1]),We++)}var Xq=[We===Object.keys(sk).length,Gs]}catch(Oa){X(Oa),Xq=[!1,void 0]}var ml=Xq;ml[0]&&(Kj(q,Qw,104,ml[1]),r++)}var pm=p.loggingExpectations;if(pm){var qm=QHa(pm);qm[0]&&(Kj(q,Ix,106,qm[1]),r++)}var rm=p.channelPageVeData;
if(rm){var nl=new Ww,Yq=0;try{var Uo=rm.isForYouShelf;void 0!==Uo&&(Wj(nl,2,Uo),Yq++);var tk=[Yq===Object.keys(rm).length,nl]}catch(Oa){X(Oa),tk=[!1,void 0]}var Vo=tk;Vo[0]&&(Kj(q,Ww,107,Vo[1]),r++)}var Xi=p.shoppingAffiliateData;if(Xi){var Aj=new ux,ol=0;try{var Wo=Xi.affiliateDeepLinkSource;void 0!==Wo&&(Q(Aj,1,RHa[Wo]),ol++);var pl=[ol===Object.keys(Xi).length,Aj]}catch(Oa){X(Oa),pl=[!1,void 0]}var sm=pl;sm[0]&&(Kj(q,ux,109,sm[1]),r++)}var tm=p.hashtagSuggestionData;if(tm){var um=new px,Yi=0;try{var Js=
tm.hashtagId;void 0!==Js&&(N(um,1,Js),Yi++);var vm=tm.suggestionSources;void 0!==vm&&($O(um.j.bind(um),vm,SHa),Yi++);var uk=[Yi===Object.keys(tm).length,um]}catch(Oa){X(Oa),uk=[!1,void 0]}var vk=uk;vk[0]&&(Kj(q,px,111,vk[1]),r++)}var ql=p.componentData;if(ql){var Zq=new Xw,Ks=0;try{var Ls=ql.standardComponentType;void 0!==Ls&&(Q(Zq,1,THa[Ls]),Ks++);var $q=[Ks===Object.keys(ql).length,Zq]}catch(Oa){X(Oa),$q=[!1,void 0]}var Xo=$q;Xo[0]&&(Kj(q,Xw,121,Xo[1]),r++)}var Yo=p.creatorShoppingTaggingData;if(Yo){var Zo=
new lx,ar=0;try{var br=Yo.products;br&&(ZO(Zo.j.bind(Zo),br,UHa),ar++);var Bj=[ar===Object.keys(Yo).length,Zo]}catch(Oa){X(Oa),Bj=[!1,void 0]}var wk=Bj;wk[0]&&(Kj(q,lx,122,wk[1]),r++)}var Vg=[r===Object.keys(p).length,q]}catch(Oa){X(Oa),Vg=[!1,void 0]}var cr=Vg;cr[0]&&(Kj(b,Jx,8,cr[1]),c++)}var dr=a.loggingExpectations;if(dr){var er=QHa(dr);er[0]&&(Kj(b,Ix,9,er[1]),c++)}return[c===Object.keys(a).length,b]}catch(Oa){return X(Oa),[!1,void 0]}};
kHa=function(a){var b=new Cw,c=0;try{var d=a.views;void 0!==d&&(Q(b,1,dP[d]),c++);var e=a.driver;void 0!==e&&(Q(b,2,VHa[e]),c++);var f=a.ctr;void 0!==f&&(Q(b,3,dP[f]),c++);var h=a.avd;void 0!==h&&(Q(b,4,dP[h]),c++);var l=a.impressions;void 0!==l&&(Q(b,5,dP[l]),c++);var m=a.videoLength;void 0!==m&&(Q(b,6,dP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
oHa=function(a){var b=new ww,c=0;try{var d=a.subsGrowth;void 0!==d&&(Q(b,1,dP[d]),c++);var e=a.nonSubViews;void 0!==e&&(Q(b,2,dP[e]),c++);var f=a.subsAddedPerNonSubViews;void 0!==f&&(Q(b,3,dP[f]),c++);var h=a.accountsClosed;void 0!==h&&(Q(b,4,dP[h]),c++);var l=a.subsRemovedToAddedRatio;void 0!==l&&(Q(b,5,dP[l]),c++);var m=a.videosPublished;void 0!==m&&(Q(b,6,dP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
pHa=function(a){var b=new vw,c=0;try{var d=a.revenue;void 0!==d&&(Q(b,1,dP[d]),c++);var e=a.revenueSource;void 0!==e&&(Q(b,2,WHa[e]),c++);var f=a.revenueDrivingMetrics;void 0!==f&&($O(b.j.bind(b),f,XHa),c++);var h=a.revenueChangeReason;void 0!==h&&(Q(b,4,YHa[h]),c++);var l=a.revenueChangeFact;void 0!==l&&(Q(b,5,ZHa[l]),c++);var m=a.driverCountryCode;void 0!==m&&(N(b,6,m),c++);return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
qHa=function(a){var b=new uw,c=0;try{var d=a.views;void 0!==d&&(Q(b,1,dP[d]),c++);var e=a.drivers;void 0!==e&&($O(b.j.bind(b),e,$Ha),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
yHa=function(a){var b=new Gw,c=0;try{var d=a.metric;void 0!==d&&(Q(b,1,eP[d]),c++);var e=a.comparisonMetric;void 0!==e&&(Q(b,2,eP[e]),c++);var f=a.includeCumulative;void 0!==f&&(Wj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
BHa=function(a){var b=new Cx,c=0;try{var d=a.attributionTag;void 0!==d&&(N(b,2,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
GHa=function(a){var b=new yx,c=0;try{var d=a.limitedAds;if(d){var e=new xx,f=0;try{var h=d.imposer;void 0!==h&&(Q(e,1,aIa[h]),f++);var l=[f===Object.keys(d).length,e]}catch(F){X(F),l=[!1,void 0]}d=l;d[0]&&(Lj(b,xx,1,bIa,d[1]),c++)}var m=a.copyright;if(m){var n=new wx;d=0;try{var p=m.policyType;void 0!==p&&(Q(n,1,cIa[p]),d++);var q=m.productTagsBlocked;void 0!==q&&(Wj(n,2,q),d++);var r=[d===Object.keys(m).length,n]}catch(F){X(F),r=[!1,void 0]}m=r;m[0]&&(Lj(b,wx,2,bIa,m[1]),c++)}var t=a.communityGuidelines;
if(t){var u=new vx;m=0;try{var x=t.policyVerticals;void 0!==x&&($O(u.j.bind(u),x,dIa),m++);var B=[m===Object.keys(t).length,u]}catch(F){X(F),B=[!1,void 0]}t=B;t[0]&&(Lj(b,vx,3,bIa,t[1]),c++)}return[c===Object.keys(a).length,b]}catch(F){return X(F),[!1,void 0]}};
HHa=function(a){var b=new ix,c=0;try{var d=a.featuredCollection;if(d){var e=eIa(d);e[0]&&(Lj(b,bx,1,gP,e[1]),c++)}var f=a.mood;if(f){var h=fIa(f);h[0]&&(Lj(b,dx,2,gP,h[1]),c++)}var l=a.genre;if(l){var m=gIa(l);m[0]&&(Lj(b,cx,3,gP,m[1]),c++)}var n=a.track;if(n){var p=IHa(n);p[0]&&(Lj(b,hx,4,gP,p[1]),c++)}return[c===Object.keys(a).length,b]}catch(q){return X(q),[!1,void 0]}};
eIa=function(a){var b=new bx,c=0;try{var d=a.id;void 0!==d&&(N(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
fIa=function(a){var b=new dx,c=0;try{var d=a.type;void 0!==d&&(Q(b,1,hIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
gIa=function(a){var b=new cx,c=0;try{var d=a.type;void 0!==d&&(Q(b,1,iIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
IHa=function(a){var b=new hx,c=0;try{var d=a.artTrackId;void 0!==d&&(N(b,1,d),c++);var e=a.assetId;void 0!==e&&(N(b,2,e),c++);var f=a.details;if(f){var h=new gx;try{var l=[0===Object.keys(f).length,h]}catch(p){X(p),l=[!1,void 0]}d=l;d[0]&&(Kj(b,gx,3,d[1]),c++)}var m=a.parent;if(m){var n=KHa(m);n[0]&&(Kj(b,fx,4,n[1]),c++)}return[c===Object.keys(a).length,b]}catch(p){return X(p),[!1,void 0]}};
KHa=function(a){var b=new fx,c=0;try{var d=a.featuredCollection;if(d){var e=eIa(d);e[0]&&(Lj(b,bx,1,hP,e[1]),c++)}var f=a.mood;if(f){var h=fIa(f);h[0]&&(Lj(b,dx,2,hP,h[1]),c++)}var l=a.genre;if(l){var m=gIa(l);m[0]&&(Lj(b,cx,3,hP,m[1]),c++)}var n=a.section;if(n){var p=new ex;d=0;try{var q=n.type;void 0!==q&&(Q(p,1,jIa[q]),d++);var r=[d===Object.keys(n).length,p]}catch(u){X(u),r=[!1,void 0]}n=r;n[0]&&(Lj(b,ex,4,hP,n[1]),c++)}var t=a.dimension;void 0!==t&&(Q(b,5,kIa[t]),c++);return[c===Object.keys(a).length,
b]}catch(u){return X(u),[!1,void 0]}};
QHa=function(a){var b=new Ix,c=0;try{var d=a.attachLoggingExpectations;if(d){var e=new Gx,f=0;try{var h=d.attachScreenExpectations;h&&(ZO(e.j.bind(e),h,lIa),f++);var l=[f===Object.keys(d).length,e]}catch(r){X(r),l=[!1,void 0]}d=l;d[0]&&(Kj(b,Gx,1,d[1]),c++)}var m=a.screenCreatedLoggingExpectations;if(m){var n=new Hx;d=0;try{var p=m.expectedParentScreens;p&&(ZO(n.j.bind(n),p,lIa),d++);var q=[d===Object.keys(m).length,n]}catch(r){X(r),q=[!1,void 0]}m=q;m[0]&&(Kj(b,Hx,2,m[1]),c++)}return[c===Object.keys(a).length,
b]}catch(r){return X(r),[!1,void 0]}};
lIa=function(a){var b=new Fx,c=0;try{var d=a.screenVeType;void 0!==d&&(mma(b,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
UHa=function(a){var b=new kx,c=0;try{var d=a.taggingSource;void 0!==d&&(Q(b,1,mIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
pIa=function(a){var b=new tz,c=0;try{var d=a.segments;d&&(ZO(b.j.bind(b),d,nIa),c++);var e=a.transitions;e&&(ZO(b.B.bind(b),e,oIa),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
nIa=function(a){var b=new rz,c=0;try{var d=a.type;void 0!==d&&(Q(b,1,qIa[d]),c++);var e=a.effects;e&&(ZO(b.F4.bind(b),e,rIa),c++);var f=a.videoInfo;if(f){var h=sIa(f);h[0]&&(Kj(b,pz,3,h[1]),c++)}var l=a.audioInfo;if(l){var m=new oz;d=0;try{var n=l.sourceOffsetMs;void 0!==n&&(Zj(m,1,n),d++);var p=l.sampleRateHz;void 0!==p&&(Xj(m,2,p),d++);var q=l.channelCount;void 0!==q&&(Xj(m,3,q),d++);var r=l.isRemote;void 0!==r&&(Wj(m,4,r),d++);var t=[d===Object.keys(l).length,m]}catch(G){X(G),t=[!1,void 0]}l=t;
l[0]&&(Kj(b,oz,4,l[1]),c++)}var u=a.startTimeMs;void 0!==u&&(Zj(b,5,u),c++);var x=a.durationMs;void 0!==x&&(ak(b,6,x),c++);var B=a.playbackRate;void 0!==B&&(b.setPlaybackRate(B),c++);var F=a.enabled;void 0!==F&&(b.HR(F),c++);return[c===Object.keys(a).length,b]}catch(G){return X(G),[!1,void 0]}};
rIa=function(a){var b=new qz,c=0;try{var d=a.effectBaseName;void 0!==d&&(N(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
sIa=function(a){var b=new pz,c=0;try{var d=a.resolutionWidth;void 0!==d&&(Xj(b,1,d),c++);var e=a.resolutionHeight;void 0!==e&&(Xj(b,2,e),c++);var f=a.frameRate;void 0!==f&&(xk(b,3,f),c++);var h=a.durationMs;void 0!==h&&(ak(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
oIa=function(a){var b=new sz,c=0;try{var d=a.incomingSegment;if(d){var e=nIa(d);e[0]&&(Kj(b,rz,1,e[1]),c++)}var f=a.outgoingSegment;if(f){var h=nIa(f);h[0]&&(Kj(b,rz,2,h[1]),c++)}var l=a.durationMs;void 0!==l&&(ak(b,3,l),c++);return[c===Object.keys(a).length,b]}catch(m){return X(m),[!1,void 0]}};
tIa=function(a){var b=new jz,c=0;try{var d=a.previewWidth;void 0!==d&&(Xj(b,1,d),c++);var e=a.previewHeight;void 0!==e&&(Xj(b,2,e),c++);var f=a.fps;void 0!==f&&(Xj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
sJa=function(a){var b=new HA,c=0;try{var d=a.encryptedVideoId;void 0!==d&&(N(b,1,d),c++);var e=a.cotn;void 0!==e&&(N(b,20,e),c++);var f=a.cpn;void 0!==f&&(N(b,30,f),c++);var h=a.transferStatusType;void 0!==h&&(Q(b,38,uIa[h]),c++);var l=a.statusType;void 0!==l&&(Q(b,2,vIa[l]),c++);var m=a.failureReason;void 0!==m&&(Q(b,3,wIa[m]),c++);var n=a.transferFailureReason;void 0!==n&&(Q(b,41,xIa[n]),c++);var p=a.failureExceptionType;void 0!==p&&(N(b,37,p),c++);var q=a.totalFetchedKbytes;void 0!==q&&(Zj(b,4,
q),c++);var r=a.diskAvailableKbytes;void 0!==r&&(Zj(b,5,r),c++);var t=a.totalContentKbytes;void 0!==t&&(Zj(b,21,t),c++);var u=a.alreadyDownloadedKbytes;void 0!==u&&(Zj(b,22,u),c++);var x=a.fetchedFromCacheKbytes;void 0!==x&&(Zj(b,23,x),c++);var B=a.systemHealth;if(B){var F=new cA,G=0;try{var H=B.tag;void 0!==H&&(Q(F,1,yIa[H]),G++);var O=B.staticContext;if(O){var P=new Yz,Y=0;try{var la=O.displayDensityDpi;void 0!==la&&(Xj(P,1,la),Y++);var pa=O.heightPixels;void 0!==pa&&(Xj(P,2,pa),Y++);var ua=O.widthPixels;
void 0!==ua&&(Xj(P,3,ua),Y++);var na=O.memoryTotalKbytes;void 0!==na&&(Zj(P,4,na),Y++);var wa=O.osSdkVersion;void 0!==wa&&(Xj(P,5,wa),Y++);var ea=O.osIncrementalVersion;void 0!==ea&&(N(P,6,ea),Y++);var Ea=O.hardwareArchitecture;void 0!==Ea&&(N(P,7,Ea),Y++);var Z=O.appVersionCode;void 0!==Z&&(Xj(P,8,Z),Y++);var Qa=O.devicePixelRatio;void 0!==Qa&&(xk(P,9,Qa),Y++);var z=O.buildFingerprint;void 0!==z&&(N(P,10,z),Y++);var W=O.socManufacturer;void 0!==W&&(N(P,11,W),Y++);var bb=O.socModel;void 0!==bb&&(N(P,
12,bb),Y++);var eb=O.availableProcessors;void 0!==eb&&(Xj(P,13,eb),Y++);var jb=O.cpuCores;void 0!==jb&&(Xj(P,14,jb),Y++);var Ya=O.heightPoints;void 0!==Ya&&(Xj(P,15,Ya),Y++);var Tb=O.widthPoints;void 0!==Tb&&(Xj(P,16,Tb),Y++);var Pb=O.androidMediaPerformanceClass;void 0!==Pb&&(Xj(P,17,Pb),Y++);var kb=[Y===Object.keys(O).length,P]}catch(qb){X(qb),kb=[!1,void 0]}var Gb=kb;Gb[0]&&(Kj(F,Yz,2,Gb[1]),G++)}var Va=B.dynamicContext;if(Va){var A=new Sz,D=0;try{var E=Va.screenOn;void 0!==E&&(Wj(A,1,E),D++);
var C=Va.deviceRotation;void 0!==C&&(Xj(A,2,C),D++);var K=Va.networkType;void 0!==K&&(Xj(A,3,K),D++);var T=Va.networkCoarseState;void 0!==T&&(Xj(A,4,T),D++);var fa=Va.chargingStatus;void 0!==fa&&(Q(A,5,zIa[fa]),D++);var ra=Va.isInForeground;void 0!==ra&&(Wj(A,6,ra),D++);var da=Va.viewportHeightPixels;void 0!==da&&(Xj(A,7,da),D++);var ha=Va.viewportWidthPixels;void 0!==ha&&(Xj(A,8,ha),D++);var Fa=Va.hasCoarsePointer;void 0!==Fa&&(Wj(A,9,Fa),D++);var xa=Va.hasFinePointer;void 0!==xa&&(Wj(A,10,xa),D++);
var cb=Va.hasHoverSupport;void 0!==cb&&(Wj(A,11,cb),D++);var Ib=Va.deviceFreeStorageMbytes;void 0!==Ib&&(Zj(A,12,Ib),D++);var Lb=Va.deviceStorageQuotaMbytes;void 0!==Lb&&(Zj(A,13,Lb),D++);var Qb=Va.deviceStorageUsageMbytes;void 0!==Qb&&(Zj(A,14,Qb),D++);var Ab=Va.processUptimeMs;void 0!==Ab&&(Zj(A,15,Ab),D++);var Mb=Va.hasAppShell;void 0!==Mb&&(Wj(A,16,Mb),D++);var cd=Va.glVersion;void 0!==cd&&(N(A,17,cd),D++);var Bc=Va.glRenderer;void 0!==Bc&&(N(A,18,Bc),D++);var md=Va.srsDatapushBuildIds;md&&(ZO(A.B.bind(A),
md,AIa),D++);var Mc=Va.playerDatapushBuildIds;Mc&&(ZO(A.j.bind(A),Mc,BIa),D++);var nd=Va.creationContext;if(nd){var od=new Qz,$b=0;try{var nc=nd.activeFrontendUploadId;void 0!==nc&&(N(od,1,nc),$b++);var Ld=nd.inShortsCreation;void 0!==Ld&&(Wj(od,2,Ld),$b++);var ac=nd.activeEffectLoggingIds;ac&&(ZO(od.j.bind(od),ac,CIa),$b++);var dd=nd.activePages;void 0!==dd&&($O(od.B.bind(od),dd,DIa),$b++);var ed=[$b===Object.keys(nd).length,od]}catch(qb){X(qb),ed=[!1,void 0]}var Nb=ed;Nb[0]&&(Kj(A,Qz,21,Nb[1]),
D++)}var Ed=Va.kimonoContext;if(Ed){var Ud=new Rz,Ub=0;try{var cf=Ed.cobaltUserAgent;void 0!==cf&&(N(Ud,1,cf),Ub++);var Ae=Ed.webAppVersion;void 0!==Ae&&(N(Ud,2,Ae),Ub++);var Be=Ed.cobaltVersion;void 0!==Be&&(N(Ud,3,Be),Ub++);var pe=Ed.webAppInterface;void 0!==pe&&(Q(Ud,4,EIa[pe]),Ub++);var lh=Ed.clientDocumentNonce;void 0!==lh&&(N(Ud,5,lh),Ub++);var Kg=Ed.applicationState;void 0!==Kg&&(Q(Ud,6,FIa[Kg]),Ub++);var mh=[Ub===Object.keys(Ed).length,Ud]}catch(qb){X(qb),mh=[!1,void 0]}var nh=mh;nh[0]&&(Kj(A,
Rz,22,nh[1]),D++)}var Lg=[D===Object.keys(Va).length,A]}catch(qb){X(qb),Lg=[!1,void 0]}var oh=Lg;oh[0]&&(Kj(F,Sz,3,oh[1]),G++)}var Ce=B.serializedPrimesMetric;void 0!==Ce&&(zk(F,4,Ce),G++);var df=B.serializedIosPrimesMetric;void 0!==df&&(zk(F,6,df),G++);var Zc=B.webMetric;if(Zc){var ee=new $z,vc=0;try{var Mg=Zc.currentHeapKbytes;void 0!==Mg&&(Xj(ee,1,Mg),vc++);var ph=Zc.navigationCount;void 0!==ph&&(Xj(ee,2,ph),vc++);var qh=[vc===Object.keys(Zc).length,ee]}catch(qb){X(qb),qh=[!1,void 0]}var rh=qh;
rh[0]&&(Kj(F,$z,7,rh[1]),G++)}var De=B.crashData;if(De){var wc=new Mz,Kf=0;try{var Zh=De.stackTrace;void 0!==Zh&&(N(wc,1,Zh),Kf++);var $h=De.screenVeType;void 0!==$h&&(Xj(wc,2,$h),Kf++);var Ii=De.compactStackTrace;if(Ii){var ef=iP(Ii);ef[0]&&(Kj(wc,Zy,3,ef[1]),Kf++)}var eg=De.crashTimeMs;void 0!==eg&&(Zj(wc,4,eg),Kf++);var Qe=De.clientError;if(Qe){var fg=new Lz,sf=0;try{var Fc=Qe.errorMetadata;if(Fc){var rc=new zz,bc=0;try{var Ng=Fc.exceptionCategory;void 0!==Ng&&(Q(rc,1,GIa[Ng]),bc++);var ff=Fc.serviceTrackingData;
if(ff){var Lf=new iz,Mf=0;try{var Ji=ff.innertubeBuildChangelist;void 0!==Ji&&(Zj(Lf,1,Ji),Mf++);var rj=ff.innertubeBuildExperimentsSourceVersion;void 0!==rj&&(Zj(Lf,2,rj),Mf++);var gg=ff.innertubeBuildLabel;void 0!==gg&&(N(Lf,3,gg),Mf++);var sh=ff.innertubeBuildTimestampSec;void 0!==sh&&(Zj(Lf,4,sh),Mf++);var ai=ff.innertubeBuildVariantsChecksum;void 0!==ai&&(N(Lf,5,ai),Mf++);var bi=ff.innertubeJobName;void 0!==bi&&(N(Lf,6,bi),Mf++);var hg=[Mf===Object.keys(ff).length,Lf]}catch(qb){X(qb),hg=[!1,
void 0]}var gf=hg;gf[0]&&(Kj(rc,iz,2,gf[1]),bc++)}var Og=Fc.pageUrl;void 0!==Og&&(N(rc,3,Og),bc++);var Nf=Fc.kvPairs;Nf&&(ZO(rc.j.bind(rc),Nf,HIa),bc++);var Ki=Fc.experimentIds;Ki&&(ZO(rc.B.bind(rc),Ki),bc++);var ig=Fc.playerMetadata;if(ig){var Pg=new yz,th=0;try{var Qg=ig.error;void 0!==Qg&&($O(Pg.j.bind(Pg),Qg,IIa),th++);var Ee=ig.stackTrace;void 0!==Ee&&(N(Pg,2,Ee),th++);var Fe=[th===Object.keys(ig).length,Pg]}catch(qb){X(qb),Fe=[!1,void 0]}var Re=Fe;Re[0]&&(Kj(rc,yz,6,Re[1]),bc++)}var qe=Fc.exceptionType;
void 0!==qe&&(Q(rc,7,JIa[qe]),bc++);var bk=Fc.clientScreenNonce;void 0!==bk&&(N(rc,8,bk),bc++);var Se=Fc.blocksMethodExecutionInfo;if(Se){var tf=new gz,Vd=0;try{var uh=Se.methodId;void 0!==uh&&(Yj(tf,1,uh),Vd++);var Rg=Se.blockTypeId;void 0!==Rg&&(Yj(tf,2,Rg),Vd++);var Of=Se.methodType;void 0!==Of&&(Q(tf,3,KIa[Of]),Vd++);var Sg=Se.requestSize;void 0!==Sg&&(Yj(tf,4,Sg),Vd++);var jg=Se.responseSize;void 0!==jg&&(Yj(tf,5,jg),Vd++);var ci=Se.statusCode;void 0!==ci&&(Yj(tf,6,ci),Vd++);var Li=Se.containerId;
void 0!==Li&&(Yj(tf,7,Li),Vd++);var Mi=Se.moduleIdentifier;void 0!==Mi&&(N(tf,8,Mi),Vd++);var Ql=Se.datapushBuildId;void 0!==Ql&&(ak(tf,9,Ql),Vd++);var sj=Se.attribution;void 0!==sj&&(Q(tf,10,LIa[sj]),Vd++);var ck=[Vd===Object.keys(Se).length,tf]}catch(qb){X(qb),ck=[!1,void 0]}var kg=ck;kg[0]&&(Kj(rc,gz,9,kg[1]),bc++)}var fe=Fc.mediaEngineMetadata;if(fe){var re=new g.wz,Te=0;try{var tj=fe.client;void 0!==tj&&(re.ix(MIa[tj]),Te++);var Rl=fe.mdeErrorType;void 0!==Rl&&(Q(re,2,NIa[Rl]),Te++);var dk=fe.uploadId;
void 0!==dk&&(N(re,3,dk),Te++);var vh=fe.composition;vh&&(ZO(re.j.bind(re),vh,pIa),Te++);var ek=fe.player;if(ek){var Zk=new uz,di=0;try{var ei=ek.state;void 0!==ei&&(Zk.Ec(OIa[ei]),di++);var fi=ek.playbackPositionTimeMs;void 0!==fi&&(Zj(Zk,2,fi),di++);var Sl=[di===Object.keys(ek).length,Zk]}catch(qb){X(qb),Sl=[!1,void 0]}var Tl=Sl;Tl[0]&&(Kj(re,uz,5,Tl[1]),Te++)}var Ni=fe.exporter;if(Ni){var gi=new nz,ge=0;try{var lg=Ni.settings;if(lg){var Tg=new mz,Oi=0;try{var uf=lg.audioChannelCount;void 0!==uf&&
(Xj(Tg,1,uf),Oi++);var fk=lg.resolutionWidth;void 0!==fk&&(Xj(Tg,2,fk),Oi++);var $k=lg.resolutionHeight;void 0!==$k&&(Xj(Tg,3,$k),Oi++);var uj=[Oi===Object.keys(lg).length,Tg]}catch(qb){X(qb),uj=[!1,void 0]}var hf=uj;hf[0]&&(gi.nh(hf[1]),ge++)}var jf=Ni.state;void 0!==jf&&(gi.Ec(PIa[jf]),ge++);var Pf=Ni.durationMs;void 0!==Pf&&(ak(gi,3,Pf),ge++);var Pi=Ni.progressMs;void 0!==Pi&&(ak(gi,4,Pi),ge++);var vj=[ge===Object.keys(Ni).length,gi]}catch(qb){X(qb),vj=[!1,void 0]}var Ul=vj;Ul[0]&&(Kj(re,nz,6,
Ul[1]),Te++)}var gk=fe.projectId;void 0!==gk&&(N(re,7,gk),Te++);var pc=fe.deviceInfo;if(pc){var Ds=new lz,bq=0;try{var zo=pc.audioOutputLatencyMs;void 0!==zo&&(Xj(Ds,1,zo),bq++);var cq=[bq===Object.keys(pc).length,Ds]}catch(qb){X(qb),cq=[!1,void 0]}var hk=cq;hk[0]&&(Kj(re,lz,8,hk[1]),Te++)}var ik=fe.preprocessor;if(ik){var Vl=new g.vz,Qi=0;try{var al=ik.originalVideo;if(al){var jk=sIa(al);jk[0]&&(Kj(Vl,pz,1,jk[1]),Qi++)}var dq=ik.processedVideo;if(dq){var eq=sIa(dq);eq[0]&&(Kj(Vl,pz,2,eq[1]),Qi++)}var kk=
[Qi===Object.keys(ik).length,Vl]}catch(qb){X(qb),kk=[!1,void 0]}var fq=kk;fq[0]&&(Kj(re,g.vz,9,fq[1]),Te++)}var gq=fe.clientSurface;void 0!==gq&&(Q(re,10,QIa[gq]),Te++);var hq=[Te===Object.keys(fe).length,re]}catch(qb){X(qb),hq=[!1,void 0]}var Qf=hq;Qf[0]&&(Kj(rc,g.wz,10,Qf[1]),bc++)}var vf=Fc.cameraMetadata;if(vf){var wj=new kz,Wl=0;try{var iq=vf.uploadFrontendId;void 0!==iq&&(N(wj,1,iq),Wl++);var hi=vf.cameraApiClient;void 0!==hi&&(Q(wj,2,RIa[hi]),Wl++);var ii=vf.cameraConfigs;ii&&(ZO(wj.j.bind(wj),
ii,tIa),Wl++);var wh=vf.canFindCamera;void 0!==wh&&(Wj(wj,4,wh),Wl++);var jq=[Wl===Object.keys(vf).length,wj]}catch(qb){X(qb),jq=[!1,void 0]}var Ao=jq;Ao[0]&&(Kj(rc,kz,11,Ao[1]),bc++)}var xh=Fc.miniAppMetadata;if(xh){var yh=new xz,ji=0;try{var cn=xh.externalPostId;void 0!==cn&&(N(yh,1,cn),ji++);var kq=xh.postPlayNonce;void 0!==kq&&(N(yh,2,kq),ji++);var Xl=xh.localReleaseId;void 0!==Xl&&(Xj(yh,3,Xl),ji++);var dn=xh.source;void 0!==dn&&(Q(yh,4,SIa[dn]),ji++);var en=xh.sdkErrorType;void 0!==en&&(Q(yh,
5,TIa[en]),ji++);var bl=xh.sdkApi;void 0!==bl&&(Q(yh,6,UIa[bl]),ji++);var Yl=xh.sdkVersion;void 0!==Yl&&(N(yh,7,Yl),ji++);var Zl=xh.rpcErrorCode;void 0!==Zl&&(Xj(yh,8,Zl),ji++);var lq=[ji===Object.keys(xh).length,yh]}catch(qb){X(qb),lq=[!1,void 0]}var mq=lq;mq[0]&&(Kj(rc,xz,12,mq[1]),bc++)}var Rc=Fc.appVersionCode;void 0!==Rc&&(Xj(rc,13,Rc),bc++);var ki=[bc===Object.keys(Fc).length,rc]}catch(qb){X(qb),ki=[!1,void 0]}var Bo=ki;Bo[0]&&(Kj(fg,zz,1,Bo[1]),sf++)}var lk=Qe.stackTrace;if(lk){var li=new Jz,
Ri=0;try{var fn=lk.isObfuscated;void 0!==fn&&(Wj(li,1,fn),Ri++);var Co=lk.androidStackInfo;if(Co){var nq=VIa(Co);nq[0]&&(Lj(li,Az,2,CF,nq[1]),Ri++)}var wf=lk.browserStackInfo;if(wf){var mg=new Bz,zh=0;try{var $l=wf.stackTrace;void 0!==$l&&(N(mg,1,$l),zh++);var gn=wf.lineNumber;void 0!==gn&&(Xj(mg,2,gn),zh++);var Do=wf.columnNumber;void 0!==Do&&(Xj(mg,3,Do),zh++);var oq=wf.filename;void 0!==oq&&(N(mg,4,oq),zh++);var Eo=[zh===Object.keys(wf).length,mg]}catch(qb){X(qb),Eo=[!1,void 0]}var pq=Eo;pq[0]&&
(Lj(li,Bz,3,CF,pq[1]),Ri++)}var cl=lk.iosStackInfo;if(cl){var hn=new Cz,Fo=0;try{var qq=cl.stackTrace;void 0!==qq&&(N(hn,1,qq),Fo++);var dl=cl.compactStackTrace;if(dl){var rq=iP(dl);rq[0]&&(Kj(hn,Zy,2,rq[1]),Fo++)}var Go=[Fo===Object.keys(cl).length,hn]}catch(qb){X(qb),Go=[!1,void 0]}var sq=Go;sq[0]&&(Lj(li,Cz,4,CF,sq[1]),Ri++)}var Ho=lk.multiLanguageStackInfo;if(Ho){var am=new Iz,mk=0;try{var bm=Ho.languageStackTraces;bm&&(ZO(am.j.bind(am),bm,WIa),mk++);var tq=[mk===Object.keys(Ho).length,am]}catch(qb){X(qb),
tq=[!1,void 0]}var Io=tq;Io[0]&&(Lj(li,Iz,5,CF,Io[1]),Ri++)}var Jo=[Ri===Object.keys(lk).length,li]}catch(qb){X(qb),Jo=[!1,void 0]}var uq=Jo;uq[0]&&(Kj(fg,Jz,2,uq[1]),sf++)}var xj=Qe.logMessage;if(xj){var el=new Kz,mi=0;try{var ng=xj.message;void 0!==ng&&(N(el,1,ng),mi++);var cm=xj.level;void 0!==cm&&(Q(el,2,XIa[cm]),mi++);var Ko=xj.errorClassName;void 0!==Ko&&(N(el,3,Ko),mi++);var ni=xj.sourceMethodName;void 0!==ni&&(N(el,4,ni),mi++);var vq=xj.sampleWeight;void 0!==vq&&(Xj(el,6,vq),mi++);var Lo=
[mi===Object.keys(xj).length,el]}catch(qb){X(qb),Lo=[!1,void 0]}var wq=Lo;wq[0]&&(Kj(fg,Kz,3,wq[1]),sf++)}var jn=[sf===Object.keys(Qe).length,fg]}catch(qb){X(qb),jn=[!1,void 0]}var Rf=jn;Rf[0]&&(Kj(wc,Lz,5,Rf[1]),Kf++)}var Sf=[Kf===Object.keys(De).length,wc]}catch(qb){X(qb),Sf=[!1,void 0]}var Si=Sf;Si[0]&&(Kj(F,Mz,9,Si[1]),G++)}var Ah=B.delayedEventMetrics;Ah&&(ZO(F.j.bind(F),Ah,fHa),G++);var dm=B.iosBatteryMetric;if(dm){var Ti=new bz,Bh=0;try{var yj=dm.sampleDurationMs;void 0!==yj&&(Zj(Ti,1,yj),
Bh++);var fl=dm.startSample;if(fl){var em=YIa(fl);em[0]&&(Kj(Ti,az,2,em[1]),Bh++)}var fm=dm.endSample;if(fm){var kn=YIa(fm);kn[0]&&(Kj(Ti,az,3,kn[1]),Bh++)}var xq=[Bh===Object.keys(dm).length,Ti]}catch(qb){X(qb),xq=[!1,void 0]}var yq=xq;yq[0]&&(Kj(F,bz,11,yq[1]),G++)}var gm=B.androidBatteryMetric;if(gm){var ln=new Sy,mn=0;try{var Es=gm.sampleDurationMs;void 0!==Es&&(Zj(ln,1,Es),mn++);var Mo=gm.startSample;if(Mo){var zq=ZIa(Mo);zq[0]&&(Kj(ln,Ry,2,zq[1]),mn++)}var hm=gm.endSample;if(hm){var nk=ZIa(hm);
nk[0]&&(Kj(ln,Ry,3,nk[1]),mn++)}var nn=[mn===Object.keys(gm).length,ln]}catch(qb){X(qb),nn=[!1,void 0]}var No=nn;No[0]&&(Kj(F,Sy,12,No[1]),G++)}var Ge=B.webApiSupport;if(Ge){var Ue=new Zz,Ve=0;try{var on=Ge.intersectionObserverPresent;void 0!==on&&(Wj(Ue,1,on),Ve++);var Aq=Ge.indexedDbPresent;void 0!==Aq&&(Wj(Ue,2,Aq),Ve++);var pn=Ge.serviceWorkerPresent;void 0!==pn&&(Wj(Ue,3,pn),Ve++);var Oo=Ge.webSharePresent;void 0!==Oo&&(Wj(Ue,4,Oo),Ve++);var Po=Ge.fullScreenApiPresent;void 0!==Po&&(Wj(Ue,5,Po),
Ve++);var Bq=Ge.cacheStoragePresent;void 0!==Bq&&(Wj(Ue,6,Bq),Ve++);var Qo=Ge.storageEstimatePresent;void 0!==Qo&&(Wj(Ue,7,Qo),Ve++);var Cq=Ge.storagePersistPresent;void 0!==Cq&&(Wj(Ue,8,Cq),Ve++);var Dq=Ge.webkitTemporaryStoragePresent;void 0!==Dq&&(Wj(Ue,9,Dq),Ve++);var im=Ge.idb2Present;void 0!==im&&(Wj(Ue,10,im),Ve++);var qn=Ge.promiseRejectionEventPresent;void 0!==qn&&(Wj(Ue,11,qn),Ve++);var rn=Ge.subtleCryptoPresent;void 0!==rn&&(Wj(Ue,12,rn),Ve++);var Ro=Ge.broadcastChannelPresent;void 0!==
Ro&&(Wj(Ue,13,Ro),Ve++);var Eq=Ge.webLocksApiPresent;void 0!==Eq&&(Wj(Ue,14,Eq),Ve++);var Fq=Ge.supportsP3Color;void 0!==Fq&&(Wj(Ue,15,Fq),Ve++);var Gq=Ge.supportsRec2020Color;void 0!==Gq&&(Wj(Ue,16,Gq),Ve++);var Hq=[Ve===Object.keys(Ge).length,Ue]}catch(qb){X(qb),Hq=[!1,void 0]}var Iq=Hq;Iq[0]&&(Kj(F,Zz,13,Iq[1]),G++)}var ok=B.cpuProfiling;if(ok){var jm=new fz,sn=0;try{var Jq=ok.profilingSamples;if(Jq){var tn=iP(Jq);tn[0]&&(Kj(jm,Zy,1,tn[1]),sn++)}var Ui=ok.config;if(Ui){var Vi=new ez,Ug=0;try{var zj=
Ui.profilingIntervalSec;void 0!==zj&&(xk(Vi,1,zj),Ug++);var gl=Ui.profilingDurationSec;void 0!==gl&&(xk(Vi,2,gl),Ug++);var pk=Ui.timerType;void 0!==pk&&(Q(Vi,3,$Ia[pk]),Ug++);var km=Ui.profilingStartTimeSec;void 0!==km&&(xk(Vi,4,km),Ug++);var hl=Ui.fractionOfRunsToSample;void 0!==hl&&(xk(Vi,5,hl),Ug++);var Kq=[Ug===Object.keys(Ui).length,Vi]}catch(qb){X(qb),Kq=[!1,void 0]}var Lq=Kq;Lq[0]&&(jm.setConfig(Lq[1]),sn++)}var Mq=[sn===Object.keys(ok).length,jm]}catch(qb){X(qb),Mq=[!1,void 0]}var Nq=Mq;Nq[0]&&
(Kj(F,fz,14,Nq[1]),G++)}var So=B.stallStackTrace;if(So){var Oq=iP(So);Oq[0]&&(Kj(F,Zy,15,Oq[1]),G++)}var He=B.memoryUsage;if(He){var Ie=new Vz,xf=0;try{var Pq=He.totalMemoryUsageBytes;void 0!==Pq&&(Zj(Ie,1,Pq),xf++);var Qq=He.classMemoryUsage;Qq&&(ZO(Ie.j.bind(Ie),Qq,aJa),xf++);var qk=He.config;if(qk){var lm=new Uz,il=0;try{var jl=qk.maxStartTimeSec;void 0!==jl&&(Zj(lm,1,jl),il++);var kl=qk.durationTimeSec;void 0!==kl&&(Zj(lm,2,kl),il++);var mm=qk.intervalSec;void 0!==mm&&(Zj(lm,3,mm),il++);var Rq=
qk.maxLogCount;void 0!==Rq&&(Zj(lm,4,Rq),il++);var Sq=qk.fractionOfRunsToSample;void 0!==Sq&&(xk(lm,5,Sq),il++);var Tq=[il===Object.keys(qk).length,lm]}catch(qb){X(qb),Tq=[!1,void 0]}var Uq=Tq;Uq[0]&&(Ie.setConfig(Uq[1]),xf++)}var To=He.processUptimeMs;void 0!==To&&(Zj(Ie,4,To),xf++);var nm=He.foregroundUptimeMs;void 0!==nm&&(Zj(Ie,8,nm),xf++);var Vq=He.viewAllocation;Vq&&(ZO(Ie.C.bind(Ie),Vq,aJa),xf++);var Ch=He.entityStoreCount;void 0!==Ch&&(Xj(Ie,6,Ch),xf++);var rk=He.entityStoreBytes;void 0!==
rk&&(Zj(Ie,7,rk),xf++);var ll=He.emlTemplateStoreBytes;void 0!==ll&&(Zj(Ie,10,ll),xf++);var Fs=He.jsVmStatistics;Fs&&(ZO(Ie.B.bind(Ie),Fs,bJa),xf++);var om=[xf===Object.keys(He).length,Ie]}catch(qb){X(qb),om=[!1,void 0]}var sk=om;sk[0]&&(Kj(F,Vz,16,sk[1]),G++)}var Gs=B.networkEvents;Gs&&(ZO(F.B.bind(F),Gs,cJa),G++);var We=B.threadUtilization;if(We){var oi=new bA,Dh=0;try{var Eh=We.userJourney;void 0!==Eh&&(N(oi,1,Eh),Dh++);var un=We.type;void 0!==un&&(Q(oi,2,dJa[un]),Dh++);var Wi=We.threadPoolStats;
Wi&&(ZO(oi.j.bind(oi),Wi,eJa),Dh++);var Wq=We.totalThreadCount;void 0!==Wq&&(Xj(oi,4,Wq),Dh++);var Hs=We.statsGenerateDurationMs;void 0!==Hs&&(Zj(oi,5,Hs),Dh++);var Is=[Dh===Object.keys(We).length,oi]}catch(qb){X(qb),Is=[!1,void 0]}var Xq=Is;Xq[0]&&(Kj(F,bA,18,Xq[1]),G++)}var ml=B.androidBackgroundTask;if(ml){var pm=new cz,qm=0;try{var rm=ml.tag;void 0!==rm&&(N(pm,1,rm),qm++);var nl=ml.isKnownTask;void 0!==nl&&(Wj(pm,2,nl),qm++);var Yq=ml.result;void 0!==Yq&&(Q(pm,3,fJa[Yq]),qm++);var Uo=ml.durationMs;
void 0!==Uo&&(Zj(pm,4,Uo),qm++);var tk=[qm===Object.keys(ml).length,pm]}catch(qb){X(qb),tk=[!1,void 0]}var Vo=tk;Vo[0]&&(Kj(F,cz,19,Vo[1]),G++)}var Xi=B.distributiveProfilingSpan;if(Xi){var Aj=new Oz,ol=0;try{var Wo=Xi.spanId;void 0!==Wo&&(Q(Aj,1,gJa[Wo]),ol++);var pl=Xi.sampleRate;void 0!==pl&&(xk(Aj,2,pl),ol++);var sm=Xi.spanDurationMs;void 0!==sm&&(Zj(Aj,3,sm),ol++);var tm=Xi.sampleFailureCount;void 0!==tm&&(Xj(Aj,4,tm),ol++);var um=Xi.sample;um&&(ZO(Aj.Lk.bind(Aj),um,hJa),ol++);var Yi=[ol===Object.keys(Xi).length,
Aj]}catch(qb){X(qb),Yi=[!1,void 0]}var Js=Yi;Js[0]&&(Kj(F,Oz,20,Js[1]),G++)}var vm=B.appExitInfo;if(vm){var uk=new dz,vk=0;try{var ql=vm.reason;void 0!==ql&&(Q(uk,1,iJa[ql]),vk++);var Zq=vm.status;void 0!==Zq&&(Xj(uk,2,Zq),vk++);var Ks=vm.importance;void 0!==Ks&&(Xj(uk,3,Ks),vk++);var Ls=vm.description;void 0!==Ls&&(N(uk,4,Ls),vk++);var $q=[vk===Object.keys(vm).length,uk]}catch(qb){X(qb),$q=[!1,void 0]}var Xo=$q;Xo[0]&&(Kj(F,dz,21,Xo[1]),G++)}var Yo=[G===Object.keys(B).length,F]}catch(qb){X(qb),Yo=
[!1,void 0]}var Zo=Yo;Zo[0]&&(Kj(b,cA,6,Zo[1]),c++)}var ar=a.detailedNetworkType;void 0!==ar&&(Q(b,7,jP[ar]),c++);var br=a.isAd;void 0!==br&&(Wj(b,8,br),c++);var Bj=a.offlineModeType;void 0!==Bj&&(Q(b,9,jJa[Bj]),c++);var wk=a.storageFormat;void 0!==wk&&(Q(b,24,kJa[wk]),c++);var Vg=a.offlineSourceVeType;void 0!==Vg&&(Xj(b,32,Vg),c++);var cr=a.listId;void 0!==cr&&(N(b,10,cr),c++);var dr=a.offlineabilityFormatType;void 0!==dr&&(Q(b,11,lJa[dr]),c++);var er=a.offlineAudioQuality;void 0!==er&&(Q(b,29,mJa[er]),
c++);var Oa=a.softErrorCount;void 0!==Oa&&(Xj(b,12,Oa),c++);var FM=a.pendingStateFlags;void 0!==FM&&(Yj(b,13,FM),c++);var GM=a.unusedOfflineVideoPendingState;void 0!==GM&&(Q(b,14,nJa[GM]),c++);var HM=a.isRefresh;void 0!==HM&&(Wj(b,15,HM),c++);var IM=a.isNewPlayerResponse;void 0!==IM&&(Wj(b,16,IM),c++);var nx=a.isOfflineShareable;void 0!==nx&&(Wj(b,17,nx),c++);var zA=a.hasContentVerificationSignature;void 0!==zA&&(Wj(b,18,zA),c++);var AA=a.isOfflineInterleaving;void 0!==AA&&(Wj(b,19,AA),c++);var JM=
a.blockSizeBytes;void 0!==JM&&(Xj(b,25,JM),c++);var KM=a.streamVerificationStrategy;void 0!==KM&&(Q(b,26,kP[KM]),c++);var LM=a.streamVerificationFailedBlocks;LM&&(ZO(b.j.bind(b),LM,oJa),c++);var BA=a.spacecastInfo;if(BA){var sF=new Ima,CA=0;try{var MM=BA.applianceId;void 0!==MM&&(N(sF,1,MM),CA++);var NM=BA.transferredFromCache;void 0!==NM&&(Q(sF,2,pJa[NM]),CA++);var OM=[CA===Object.keys(BA).length,sF]}catch(qb){X(qb),OM=[!1,void 0]}var PM=OM;PM[0]&&(Kj(b,Ima,28,PM[1]),c++)}var QM=a.transferType;void 0!==
QM&&(Q(b,33,qJa[QM]),c++);var RM=a.onlyDownloadOnWifi;void 0!==RM&&(Wj(b,34,RM),c++);var tF=a.appLifecycleStatus;void 0!==tF&&(Q(b,35,rJa[tF]),c++);var SM=a.isDefaultDownloadToSdCard;void 0!==SM&&(Wj(b,36,SM),c++);var TM=a.serializedLoggingParams;void 0!==TM&&(zk(b,39,TM),c++);var UM=a.transferServiceStartedFromBackground;void 0!==UM&&(Wj(b,40,UM),c++);var VM=a.transferFirstStarted;void 0!==VM&&(Wj(b,42,VM),c++);return[c===Object.keys(a).length,b]}catch(qb){return X(qb),[!1,void 0]}};
AIa=function(a){var b=new Nx,c=0;try{var d=a.datapushBuild;if(d){var e=tJa(d);e[0]&&(Kj(b,Lx,1,e[1]),c++)}return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
tJa=function(a){var b=new Lx,c=0;try{var d=a.buildId;void 0!==d&&(Zj(b,1,d),c++);var e=a.clientExperimentId;void 0!==e&&(Xj(b,2,e),c++);var f=a.accessType;void 0!==f&&(Q(b,3,uJa[f]),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
BIa=function(a){var b=new Mx,c=0;try{var d=a.datapushBuild;if(d){var e=tJa(d);e[0]&&(Kj(b,Lx,1,e[1]),c++)}return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
CIa=function(a){var b=new Pz,c=0;try{var d=a.assetLoggingId;void 0!==d&&(N(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
iP=function(a){var b=new Zy,c=0;try{var d=a.stackTraces;d&&(ZO(b.B.bind(b),d,vJa),c++);var e=a.allModules;e&&(ZO(b.j.bind(b),e,wJa),c++);var f=a.appVersionCode;void 0!==f&&(Xj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
vJa=function(a){var b=new Yy,c=0;try{var d=a.mainThread;if(d){var e=xJa(d);e[0]&&(Kj(b,Xy,1,e[1]),c++)}var f=a.backgroundThreads;f&&(ZO(b.j.bind(b),f,xJa),c++);var h=a.metaData;h&&(ZO(b.B.bind(b),h,yJa),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
xJa=function(a){var b=new Xy,c=0;try{var d=a.stackFrames;d&&(ZO(b.j.bind(b),d,zJa),c++);var e=a.androidStack;void 0!==e&&(N(b,6,e),c++);var f=a.threadName;void 0!==f&&(N(b,2,f),c++);var h=a.cpuUsage;void 0!==h&&(xk(b,3,h),c++);var l=a.cpuTimeSec;void 0!==l&&(Zj(b,4,l),c++);var m=a.iosThreadInfo;if(m){var n=new Vy;d=0;try{var p=m.state;void 0!==p&&(n.Ec(AJa[p]),d++);var q=m.flag;void 0!==q&&(Q(n,2,BJa[q]),d++);var r=m.currentPriority;void 0!==r&&(Xj(n,3,r),d++);var t=m.priority;void 0!==t&&(Xj(n,4,
t),d++);var u=m.maxPriority;void 0!==u&&(Xj(n,5,u),d++);var x=m.isCrashedThread;void 0!==x&&(Wj(n,6,x),d++);var B=[d===Object.keys(m).length,n]}catch(F){X(F),B=[!1,void 0]}m=B;m[0]&&(Kj(b,Vy,5,m[1]),c++)}return[c===Object.keys(a).length,b]}catch(F){return X(F),[!1,void 0]}};
zJa=function(a){var b=new Wy,c=0;try{var d=a.instructionOffset;void 0!==d&&(Zj(b,1,d),c++);var e=a.moduleIndex;void 0!==e&&(Xj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
yJa=function(a){var b=new Uy,c=0;try{var d=a.clientTimestampMs;void 0!==d&&(Zj(b,1,d),c++);var e=a.sampleTimeCostMs;void 0!==e&&(xk(b,2,e),c++);var f=a.numberOfBustedFrames;void 0!==f&&(Xj(b,3,f),c++);var h=a.droppedFrameDurationMs;void 0!==h&&(Xj(b,4,h),c++);var l=a.deviceOrientation;void 0!==l&&(Q(b,5,CJa[l]),c++);var m=a.processUptimeMs;void 0!==m&&(Zj(b,6,m),c++);var n=a.memoryUsageKbytes;void 0!==n&&(Zj(b,7,n),c++);var p=a.batteryPercentage;void 0!==p&&(xk(b,8,p),c++);var q=a.exceptionName;void 0!==
q&&(N(b,9,q),c++);var r=a.exceptionReason;void 0!==r&&(N(b,10,r),c++);var t=a.signalNumber;void 0!==t&&(Xj(b,11,t),c++);var u=a.signalCode;void 0!==u&&(Xj(b,12,u),c++);return[c===Object.keys(a).length,b]}catch(x){return X(x),[!1,void 0]}};
wJa=function(a){var b=new Ty,c=0;try{var d=a.moduleUuid;void 0!==d&&(zk(b,1,d),c++);var e=a.moduleName;void 0!==e&&(N(b,2,e),c++);var f=a.loadAddress;void 0!==f&&(Zj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
HIa=function(a){var b=new hz,c=0;try{var d=a.key;void 0!==d&&(N(b,1,d),c++);var e=a.value;void 0!==e&&(N(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
VIa=function(a){var b=new Az,c=0;try{var d=a.serializedThrowable;void 0!==d&&(zk(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
WIa=function(a){var b=new Hz,c=0;try{var d=a.jsStack;if(d){var e=new Gz,f=0;try{var h=d.stackTrace;h&&(ZO(e.j.bind(e),h,DJa),f++);var l=d.moduleSetVersion;void 0!==l&&(ak(e,4,l),f++);var m=[f===Object.keys(d).length,e]}catch(x){X(x),m=[!1,void 0]}d=m;d[0]&&(Lj(b,Gz,1,EJa,d[1]),c++)}var n=a.javaStack;if(n){var p=VIa(n);p[0]&&(Lj(b,Az,2,EJa,p[1]),c++)}var q=a.ccStack;if(q){var r=new Ez;n=0;try{var t=q.stackTrace;t&&(ZO(r.j.bind(r),t,FJa),n++);var u=[n===Object.keys(q).length,r]}catch(x){X(x),u=[!1,
void 0]}q=u;q[0]&&(Lj(b,Ez,3,EJa,q[1]),c++)}return[c===Object.keys(a).length,b]}catch(x){return X(x),[!1,void 0]}};
DJa=function(a){var b=new Fz,c=0;try{var d=a.functionName;void 0!==d&&(N(b,1,d),c++);var e=a.source;void 0!==e&&(N(b,2,e),c++);var f=a.lineNumber;void 0!==f&&(Xj(b,3,f),c++);var h=a.columnNumber;void 0!==h&&(Xj(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
FJa=function(a){var b=new Dz,c=0;try{var d=a.functionName;void 0!==d&&(N(b,1,d),c++);var e=a.source;void 0!==e&&(N(b,2,e),c++);var f=a.lineNumber;void 0!==f&&(Xj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
YIa=function(a){var b=new az,c=0;try{var d=a.batteryLevelMicros;void 0!==d&&(Xj(b,1,d),c++);var e=a.networkType;void 0!==e&&(Q(b,2,jP[e]),c++);var f=a.screenBrightness;void 0!==f&&(xk(b,3,f),c++);var h=a.isLowPowerMode;void 0!==h&&(Wj(b,4,h),c++);var l=a.isBackground;void 0!==l&&(Wj(b,5,l),c++);var m=a.isStateTransition;void 0!==m&&(Wj(b,6,m),c++);var n=a.observedBackgroundFetchMethodCallback;void 0!==n&&(Wj(b,7,n),c++);var p=a.observedBackgroundTaskDidExpire;void 0!==p&&(Wj(b,8,p),c++);return[c===
Object.keys(a).length,b]}catch(q){return X(q),[!1,void 0]}};
ZIa=function(a){var b=new Ry,c=0;try{var d=a.batteryLevelMicros;void 0!==d&&(Xj(b,1,d),c++);var e=a.networkType;void 0!==e&&(Q(b,2,jP[e]),c++);var f=a.screenBrightness;void 0!==f&&(Xj(b,3,f),c++);var h=a.screenBrightnessMode;void 0!==h&&(Q(b,4,GJa[h]),c++);var l=a.lowPowerMode;void 0!==l&&(Q(b,5,HJa[l]),c++);var m=a.batteryHealth;void 0!==m&&(Q(b,6,IJa[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
aJa=function(a){var b=new Tz,c=0;try{var d=a.className;void 0!==d&&(N(b,1,d),c++);var e=a.instanceNum;void 0!==e&&(Zj(b,2,e),c++);var f=a.instanceSizeBytes;void 0!==f&&(Zj(b,3,f),c++);var h=a.allocationNum;void 0!==h&&(Zj(b,4,h),c++);var l=a.deallocationNum;void 0!==l&&(Zj(b,5,l),c++);return[c===Object.keys(a).length,b]}catch(m){return X(m),[!1,void 0]}};
bJa=function(a){var b=new $x,c=0;try{var d=a.v8Stats;if(d){var e=new Zx,f=0;try{var h=d.totalHeapSize;void 0!==h&&(ak(e,1,h),f++);var l=d.totalHeapSizeExecutable;void 0!==l&&(ak(e,2,l),f++);var m=d.totalPhysicalSize;void 0!==m&&(ak(e,3,m),f++);var n=d.totalAvailableSize;void 0!==n&&(ak(e,4,n),f++);var p=d.totalGlobalHandlesSize;void 0!==p&&(ak(e,5,p),f++);var q=d.usedGlobalHandlesSize;void 0!==q&&(ak(e,6,q),f++);var r=d.usedHeapSize;void 0!==r&&(ak(e,7,r),f++);var t=d.heapSizeLimit;void 0!==t&&(ak(e,
8,t),f++);var u=d.mallocedMemory;void 0!==u&&(ak(e,9,u),f++);var x=d.externalMemory;void 0!==x&&(ak(e,10,x),f++);var B=d.peakMallocedMemory;void 0!==B&&(ak(e,11,B),f++);var F=d.numberOfNativeContexts;void 0!==F&&(ak(e,12,F),f++);var G=d.numberOfDetachedContexts;void 0!==G&&(ak(e,13,G),f++);var H=[f===Object.keys(d).length,e]}catch(ea){X(ea),H=[!1,void 0]}d=H;d[0]&&(Lj(b,Zx,1,JJa,d[1]),c++)}var O=a.quickjsStats;if(O){var P=new Yx;d=0;try{var Y=O.mallocSize;void 0!==Y&&(ak(P,1,Y),d++);var la=O.mallocLimit;
void 0!==la&&(ak(P,2,la),d++);var pa=O.memoryUsedSize;void 0!==pa&&(ak(P,3,pa),d++);var ua=O.mallocCount;void 0!==ua&&(ak(P,4,ua),d++);var na=O.memoryUsedCount;void 0!==na&&(ak(P,5,na),d++);var wa=[d===Object.keys(O).length,P]}catch(ea){X(ea),wa=[!1,void 0]}O=wa;O[0]&&(Lj(b,Yx,2,JJa,O[1]),c++)}return[c===Object.keys(a).length,b]}catch(ea){return X(ea),[!1,void 0]}};
cJa=function(a){var b=new Xz,c=0;try{var d=a.index;void 0!==d&&(Zj(b,1,d),c++);var e=a.networkEventType;void 0!==e&&(Q(b,2,KJa[e]),c++);var f=a.path;void 0!==f&&(N(b,3,f),c++);var h=a.failureReason;void 0!==h&&(Q(b,4,LJa[h]),c++);var l=a.startTimeMs;void 0!==l&&(Zj(b,5,l),c++);var m=a.totalDurationMs;void 0!==m&&(Zj(b,6,m),c++);var n=a.requestSize;void 0!==n&&(Zj(b,7,n),c++);var p=a.responseSize;void 0!==p&&(Zj(b,8,p),c++);var q=a.networkRequestAttempt;q&&(ZO(b.j.bind(b),q,MJa),c++);var r=a.httpMethod;
void 0!==r&&(Q(b,10,NJa[r]),c++);return[c===Object.keys(a).length,b]}catch(t){return X(t),[!1,void 0]}};
MJa=function(a){var b=new Wz,c=0;try{var d=a.failureReason;void 0!==d&&(Q(b,1,LJa[d]),c++);var e=a.startTimeMs;void 0!==e&&(Zj(b,5,e),c++);var f=a.durationMs;void 0!==f&&(Zj(b,2,f),c++);var h=a.networkAvailable;void 0!==h&&(Q(b,3,OJa[h]),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
eJa=function(a){var b=new aA,c=0;try{var d=a.threadPoolName;void 0!==d&&(N(b,1,d),c++);var e=a.threadCount;void 0!==e&&(Xj(b,2,e),c++);var f=a.startedTaskCount;void 0!==f&&(Xj(b,3,f),c++);var h=a.finishedTaskCount;void 0!==h&&(Xj(b,4,h),c++);var l=a.runningTimeMs;void 0!==l&&(Zj(b,5,l),c++);var m=a.waitingTimeMs;void 0!==m&&(Zj(b,6,m),c++);var n=a.runCount;void 0!==n&&(Zj(b,7,n),c++);var p=a.runningPercent;void 0!==p&&(Xj(b,8,p),c++);return[c===Object.keys(a).length,b]}catch(q){return X(q),[!1,void 0]}};
hJa=function(a){var b=new Nz,c=0;try{var d=a.curveTimestampMs;void 0!==d&&(Zj(b,1,d),c++);var e=a.curveWeight;void 0!==e&&(xk(b,2,e),c++);var f=a.realTimestampMs;void 0!==f&&(Zj(b,3,f),c++);var h=a.sampleCostUsec;void 0!==h&&(Zj(b,4,h),c++);var l=a.compactStackTraceSample;if(l){var m=iP(l);m[0]&&(Kj(b,Zy,5,m[1]),c++)}return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
oJa=function(a){var b=new Jma,c=0;try{var d=a.itag;void 0!==d&&(Xj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Zj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
UJa=function(a){var b=new qB,c=0;try{var d=a.id;void 0!==d&&(N(b,1,d),c++);var e=a.videoState;void 0!==e&&(Q(b,2,PJa[e]),c++);var f=a.pendingStateFlags;void 0!==f&&(Yj(b,3,f),c++);var h=a.totalBytes;void 0!==h&&(Zj(b,21,h),c++);var l=a.downloadedBytes;void 0!==l&&(Zj(b,4,l),c++);var m=a.selectedVideoQuality;void 0!==m&&(Q(b,5,lJa[m]),c++);var n=a.selectedOfflineMode;void 0!==n&&(Q(b,6,jJa[n]),c++);var p=a.playerResponseSavedTimeMs;void 0!==p&&(Zj(b,7,p),c++);var q=a.offlineStateUpdateTimeMs;void 0!==
q&&(Zj(b,8,q),c++);var r=a.offlineStateExpiresInS;void 0!==r&&(Zj(b,9,r),c++);var t=a.durationInS;void 0!==t&&(Zj(b,10,t),c++);var u=a.isInPlaylist;void 0!==u&&(Wj(b,11,u),c++);var x=a.addedNetworkType;void 0!==x&&(Q(b,12,jP[x]),c++);var B=a.downloadCompletedNetworkType;void 0!==B&&(Q(b,13,jP[B]),c++);var F=a.captions;F&&(ZO(b.j.bind(b),F,QJa),c++);var G=a.unusedOfflineVideoPendingState;void 0!==G&&(Q(b,15,nJa[G]),c++);var H=a.lastPlaybackTimestampMs;void 0!==H&&(Zj(b,16,H),c++);var O=a.offlineSuspendedStates;
O&&(ZO(b.B.bind(b),O,RJa),c++);var P=a.streamInLocalStorage;void 0!==P&&(Wj(b,18,P),c++);var Y=a.streamInInternalStorage;void 0!==Y&&(Wj(b,19,Y),c++);var la=a.storageIdStates;if(la){var pa=new Ina;d=0;try{var ua=la.storageId;void 0!==ua&&(Yj(pa,1,ua),d++);var na=la.storageIdSourceType;void 0!==na&&(Q(pa,2,SJa[na]),d++);var wa=[d===Object.keys(la).length,pa]}catch(ra){X(ra),wa=[!1,void 0]}la=wa;la[0]&&(Kj(b,Ina,20,la[1]),c++)}var ea=a.cotn;void 0!==ea&&(N(b,22,ea),c++);var Ea=a.additionalVideoClientState;
if(Ea){var Z=new Fna;ea=0;try{var Qa=Ea.musicAppAdditionalVideoClientState;if(Qa){var z=new Ena;la=0;try{var W=Qa.episodePublishedTimeMs;void 0!==W&&(Zj(z,1,W),la++);var bb=[la===Object.keys(Qa).length,z]}catch(ra){X(ra),bb=[!1,void 0]}Qa=bb;Qa[0]&&(Kj(Z,Ena,1,Qa[1]),ea++)}var eb=[ea===Object.keys(Ea).length,Z]}catch(ra){X(ra),eb=[!1,void 0]}Ea=eb;Ea[0]&&(Kj(b,Fna,23,Ea[1]),c++)}var jb=a.offlineVideoEntityMigrationState;if(jb){var Ya=new pB;Ea=0;try{var Tb=jb.isInOfflineStore;void 0!==Tb&&(Wj(Ya,
1,Tb),Ea++);var Pb=jb.isPlaybackDataEntityPresent;void 0!==Pb&&(Wj(Ya,2,Pb),Ea++);var kb=jb.wasPlaybackDataEntityUsedToFillVideoState;void 0!==kb&&(Wj(Ya,3,kb),Ea++);var Gb=jb.isTransferEntityPresent;void 0!==Gb&&(Wj(Ya,4,Gb),Ea++);var Va=jb.wasTransferEntityUsedToFillVideoState;void 0!==Va&&(Wj(Ya,5,Va),Ea++);var A=jb.offlineStoreCaptionTrackCount;void 0!==A&&(Xj(Ya,6,A),Ea++);var D=jb.entityStoreCaptionTrackCount;void 0!==D&&(Xj(Ya,7,D),Ea++);var E=jb.isMetadataEntityPresent;void 0!==E&&(Wj(Ya,
8,E),Ea++);var C=jb.transferDiffFields;void 0!==C&&($O(Ya.j.bind(Ya),C,TJa),Ea++);var K=[Ea===Object.keys(jb).length,Ya]}catch(ra){X(ra),K=[!1,void 0]}jb=K;jb[0]&&(Kj(b,pB,24,jb[1]),c++)}var T=a.lastProgressTimeMs;void 0!==T&&(Zj(b,25,T),c++);var fa=a.initialProgressTimeMs;void 0!==fa&&(Zj(b,26,fa),c++);return[c===Object.keys(a).length,b]}catch(ra){return X(ra),[!1,void 0]}};
QJa=function(a){var b=new Gna,c=0;try{var d=a.format;void 0!==d&&(Xj(b,1,d),c++);var e=a.isDownloaded;void 0!==e&&(Wj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
RJa=function(a){var b=new Hna,c=0;try{var d=a.totalDownloadedBytes;void 0!==d&&(Zj(b,1,d),c++);var e=a.totalSegmentCount;void 0!==e&&(Zj(b,2,e),c++);var f=a.backgroundTransitionCount;void 0!==f&&(Zj(b,3,f),c++);var h=a.totalDurationMs;void 0!==h&&(Zj(b,4,h),c++);var l=a.downloadErrorCount;void 0!==l&&(Xj(b,5,l),c++);var m=a.totalDownloadedSizePercent;void 0!==m&&(Yj(b,6,m),c++);return[c===Object.keys(a).length,b]}catch(n){return X(n),[!1,void 0]}};
WJa=function(a){var b=new oB,c=0;try{var d=a.id;void 0!==d&&(N(b,1,d),c++);var e=a.videoIds;e&&(ZO(b.j.bind(b),e),c++);var f=a.videoCount;void 0!==f&&(Xj(b,3,f),c++);var h=a.successCount;void 0!==h&&(Xj(b,4,h),c++);var l=a.failCount;void 0!==l&&(Xj(b,5,l),c++);var m=a.pendingCount;void 0!==m&&(Xj(b,6,m),c++);var n=a.disabledCount;void 0!==n&&(Xj(b,7,n),c++);var p=a.deletedCount;void 0!==p&&(Xj(b,8,p),c++);var q=a.selectedVideoQuality;void 0!==q&&(Q(b,9,lJa[q]),c++);var r=a.isPlaylistOwner;void 0!==
r&&(Wj(b,10,r),c++);var t=a.lastSyncTimeMs;void 0!==t&&(Zj(b,11,t),c++);var u=a.requestSource;void 0!==u&&(Q(b,12,VJa[u]),c++);var x=a.additionalPlaylistClientState;if(x){var B=new Dna;d=0;try{var F=x.musicAppAdditionalPlaylistClientState;if(F){var G=new Cna;e=0;try{var H=F.isPodcastShow;void 0!==H&&(Wj(G,1,H),e++);var O=[e===Object.keys(F).length,G]}catch(Y){X(Y),O=[!1,void 0]}F=O;F[0]&&(Kj(B,Cna,1,F[1]),d++)}var P=[d===Object.keys(x).length,B]}catch(Y){X(Y),P=[!1,void 0]}x=P;x[0]&&(Kj(b,Dna,13,
x[1]),c++)}return[c===Object.keys(a).length,b]}catch(Y){return X(Y),[!1,void 0]}};
ZJa=function(a){var b=new kB,c=0;try{var d=a.videoId;void 0!==d&&(b.setVideoId(d),c++);var e=a.itag;void 0!==e&&(Yj(b,6,e),c++);var f=a.failureReason;void 0!==f&&(Q(b,2,XJa[f]),c++);var h=a.isCachedExternally;void 0!==h&&(Wj(b,3,h),c++);var l=a.previousFailureReason;void 0!==l&&(Q(b,4,XJa[l]),c++);var m=a.previousFailureReasonTimestampMs;void 0!==m&&(ak(b,5,m),c++);var n=a.streamVerificationStrategy;void 0!==n&&(Q(b,7,kP[n]),c++);var p=a.blockSizeBytes;void 0!==p&&(Xj(b,8,p),c++);var q=a.streamVerificationFailedBlocks;
q&&(ZO(b.j.bind(b),q,YJa),c++);var r=a.primaryVerificationStrategy;void 0!==r&&(Q(b,10,kP[r]),c++);var t=a.secondaryVerificationStrategy;void 0!==t&&(Q(b,11,kP[t]),c++);var u=a.secondaryFailureReason;void 0!==u&&(Q(b,12,XJa[u]),c++);return[c===Object.keys(a).length,b]}catch(x){return X(x),[!1,void 0]}};
YJa=function(a){var b=new zna,c=0;try{var d=a.itag;void 0!==d&&(Xj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Zj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
$Ja=function(a){var b=new mB,c=0;try{var d=a.videoId;void 0!==d&&(b.setVideoId(d),c++);var e=a.surrogateVideoId;void 0!==e&&(Zj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
aKa=function(a){var b=new Ana,c=0;try{var d=a.externalVideoId;void 0!==d&&(N(b,1,d),c++);var e=a.videoSid;void 0!==e&&(Zj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
iKa=function(a){var b=new vy,c=0;try{var d=a.opportunityData;if(d){var e=new ry,f=0;try{var h=d.debugData;if(h){var l=new qy,m=0;try{var n=h.slots;n&&(ZO(l.j.bind(l),n,bKa),m++);var p=h.associatedSlotId;void 0!==p&&(N(l,2,p),m++);var q=[m===Object.keys(h).length,l]}catch($b){X($b),q=[!1,void 0]}h=q;h[0]&&(Kj(e,qy,2,h[1]),f++)}var r=d.opportunityType;void 0!==r&&(Q(e,3,cKa[r]),f++);var t=[f===Object.keys(d).length,e]}catch($b){X($b),t=[!1,void 0]}d=t;d[0]&&(Kj(b,ry,1,d[1]),c++)}var u=a.slotData;if(u){var x=
bKa(u);x[0]&&(Kj(b,py,2,x[1]),c++)}var B=a.layoutData;if(B){var F=new ny;u=0;try{var G=B.type;void 0!==G&&(Q(F,2,dKa[G]),u++);var H=B.debugData;if(H){var O=new my;G=0;try{var P=H.layoutId;void 0!==P&&(N(O,1,P),G++);var Y=H.exitNormalTriggerData;Y&&(ZO(O.K4.bind(O),Y,lP),G++);var la=H.exitSkipTriggerData;la&&(ZO(O.L4.bind(O),la,lP),G++);var pa=H.exitMuteTriggerData;pa&&(ZO(O.J4.bind(O),pa,lP),G++);var ua=H.exitUserInputSubmittedTriggerData;ua&&(ZO(O.N4.bind(O),ua,lP),G++);var na=H.exitUserCancelledTriggerData;
na&&(ZO(O.M4.bind(O),na,lP),G++);var wa=[G===Object.keys(H).length,O]}catch($b){X($b),wa=[!1,void 0]}H=wa;H[0]&&(Kj(F,my,3,H[1]),u++)}var ea=B.controlFlowManagerLayer;void 0!==ea&&(Q(F,4,eKa[ea]),u++);var Ea=B.pingTriggerTypes;void 0!==Ea&&($O(F.j.bind(F),Ea,mP),u++);var Z=[u===Object.keys(B).length,F]}catch($b){X($b),Z=[!1,void 0]}B=Z;B[0]&&(Kj(b,ny,3,B[1]),c++)}var Qa=a.triggerData;if(Qa){var z=lP(Qa);z[0]&&(Kj(b,ly,4,z[1]),c++)}var W=a.pingData;if(W){var bb=new uy;Qa=0;try{var eb=W.sourceTriggerType;
void 0!==eb&&(Q(bb,1,mP[eb]),Qa++);var jb=W.debugData;jb&&(ZO(bb.j.bind(bb),jb,fKa),Qa++);var Ya=W.pingCount;void 0!==Ya&&(Xj(bb,3,Ya),Qa++);var Tb=W.pingDispatchStatus;void 0!==Tb&&(Q(bb,4,gKa[Tb]),Qa++);var Pb=W.serializedAdPingMetadata;void 0!==Pb&&(zk(bb,5,Pb),Qa++);var kb=W.pingDebugData;if(kb){var Gb=new ty;eb=0;try{var Va=kb.substitutedMacros;void 0!==Va&&($O(Gb.j.bind(Gb),Va,hKa),eb++);var A=kb.unsubstitutedMacros;void 0!==A&&($O(Gb.B.bind(Gb),A,hKa),eb++);var D=[eb===Object.keys(kb).length,
Gb]}catch($b){X($b),D=[!1,void 0]}kb=D;kb[0]&&(Kj(bb,ty,6,kb[1]),Qa++)}var E=W.pingIndex;void 0!==E&&(Xj(bb,8,E),Qa++);var C=[Qa===Object.keys(W).length,bb]}catch($b){X($b),C=[!1,void 0]}W=C;W[0]&&(Kj(b,uy,6,W[1]),c++)}var K=a.externalContext;if(K){var T=new iy;W=0;try{var fa=K.organicPlaybackContext;if(fa){var ra=new hy;C=0;try{var da=fa.contentCpn;void 0!==da&&(N(ra,1,da),C++);var ha=fa.isLivePlayback;void 0!==ha&&(Wj(ra,2,ha),C++);var Fa=fa.isOfflinePlayback;void 0!==Fa&&(Wj(ra,3,Fa),C++);var xa=
fa.isMdxPlayback;void 0!==xa&&(Wj(ra,4,xa),C++);var cb=fa.isDaiContent;void 0!==cb&&(Wj(ra,5,cb),C++);var Ib=fa.isPrefetchedPlayback;void 0!==Ib&&(Wj(ra,6,Ib),C++);var Lb=[C===Object.keys(fa).length,ra]}catch($b){X($b),Lb=[!1,void 0]}fa=Lb;fa[0]&&(Kj(T,hy,1,fa[1]),W++)}var Qb=K.html5ExperimentContext;if(Qb){var Ab=new gy;fa=0;try{var Mb=Qb.ytExperimentId;void 0!==Mb&&(Xj(Ab,1,Mb),fa++);var cd=[fa===Object.keys(Qb).length,Ab]}catch($b){X($b),cd=[!1,void 0]}Qb=cd;Qb[0]&&(Kj(T,gy,2,Qb[1]),W++)}var Bc=
K.adVideoPlaybackContext;if(Bc){var md=new fy;Qb=0;try{var Mc=Bc.adVideoCpn;void 0!==Mc&&(N(md,1,Mc),Qb++);var nd=[Qb===Object.keys(Bc).length,md]}catch($b){X($b),nd=[!1,void 0]}Bc=nd;Bc[0]&&(Kj(T,fy,3,Bc[1]),W++)}var od=[W===Object.keys(K).length,T]}catch($b){X($b),od=[!1,void 0]}K=od;K[0]&&(Kj(b,iy,5,K[1]),c++)}return[c===Object.keys(a).length,b]}catch($b){return X($b),[!1,void 0]}};
bKa=function(a){var b=new py,c=0;try{var d=a.type;void 0!==d&&(Q(b,2,jKa[d]),c++);var e=a.entryTriggerType;void 0!==e&&(Q(b,6,mP[e]),c++);var f=a.slotPhysicalPosition;void 0!==f&&(Xj(b,8,f),c++);var h=a.debugData;if(h){var l=new oy;d=0;try{var m=h.slotId;void 0!==m&&(N(l,1,m),d++);var n=h.entryTriggerTypes;void 0!==n&&($O(l.B.bind(l),n,mP),d++);var p=h.unscheduledDueToError;void 0!==p&&(Wj(l,3,p),d++);var q=h.entryTriggerData;q&&(ZO(l.j.bind(l),q,lP),d++);var r=h.slotEntryTriggerData;if(r){var t=
lP(r);t[0]&&(Kj(l,ly,7,t[1]),d++)}var u=h.fulfillmentTriggerData;u&&(ZO(l.D.bind(l),u,lP),d++);var x=h.expirationTriggerData;x&&(ZO(l.C.bind(l),x,lP),d++);var B=[d===Object.keys(h).length,l]}catch(H){X(H),B=[!1,void 0]}h=B;h[0]&&(Kj(b,oy,3,h[1]),c++)}var F=a.externallyManaged;void 0!==F&&(Wj(b,4,F),c++);var G=a.controlFlowManagerLayer;void 0!==G&&(Q(b,5,eKa[G]),c++);return[c===Object.keys(a).length,b]}catch(H){return X(H),[!1,void 0]}};
lP=function(a){var b=new ly,c=0;try{var d=a.type;void 0!==d&&(Q(b,1,mP[d]),c++);var e=a.category;void 0!==e&&(Q(b,2,kKa[e]),c++);var f=a.layoutIdEnteredTriggerData;if(f){var h=new jy;d=0;try{var l=f.enteredLayoutId;void 0!==l&&(N(h,1,l),d++);var m=[d===Object.keys(f).length,h]}catch(x){X(x),m=[!1,void 0]}f=m;f[0]&&(Lj(b,jy,3,lKa,f[1]),c++)}var n=a.triggerSourceData;if(n){var p=new ky;f=0;try{var q=n.associatedSlotId;void 0!==q&&(Fj(p,1,mKa,Bi(q)),f++);var r=n.associatedLayoutId;void 0!==r&&(Fj(p,
2,mKa,Bi(r)),f++);var t=[f===Object.keys(n).length,p]}catch(x){X(x),t=[!1,void 0]}n=t;n[0]&&(Lj(b,ky,4,lKa,n[1]),c++)}var u=a.shouldOnlyTriggerOnce;void 0!==u&&(Wj(b,5,u),c++);return[c===Object.keys(a).length,b]}catch(x){return X(x),[!1,void 0]}};
fKa=function(a){var b=new sy,c=0;try{var d=a.macros;void 0!==d&&($O(b.j.bind(b),d,hKa),c++);var e=a.success;void 0!==e&&(Wj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
oKa=function(a){var b=new by,c=0;try{var d=a.cui;if(d){var e=new ay;try{var f=[0===Object.keys(d).length,e]}catch(l){X(l),f=[!1,void 0]}d=f;d[0]&&(Kj(b,ay,1,d[1]),c++)}var h=a.step;void 0!==h&&(Q(b,2,nKa[h]),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
pKa=function(a){var b=new Ky,c=0;try{var d=a.startMs;void 0!==d&&(xk(b,1,d),c++);var e=a.endMs;void 0!==e&&(xk(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
qKa=function(a){var b=new wy,c=0;try{var d=a.externalVideoId;void 0!==d&&(N(b,1,d),c++);var e=a.originalMediaDurationMs;void 0!==e&&(Zj(b,2,e),c++);var f=a.trimmedMediaDurationMs;void 0!==f&&(Zj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return X(h),[!1,void 0]}};
rKa=function(a){var b=new FA,c=0;try{var d=a.orchestrationActionId;void 0!==d&&(N(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
sKa=function(a){var b=new NA,c=0;try{var d=a.answerId;void 0!==d&&(Xj(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return X(e),[!1,void 0]}};
vKa=function(a){var b=new JA,c=0;try{var d=a.ypcCallerPage;void 0!==d&&(Q(b,1,tKa[d]),c++);var e=a.useCase;void 0!==e&&(Q(b,2,uKa[e]),c++);return[c===Object.keys(a).length,b]}catch(f){return X(f),[!1,void 0]}};
AKa=function(a){var b=new SA,c=0;try{var d=a.itemId;if(d){var e=new Xx,f=0;try{var h=d.type;void 0!==h&&(Q(e,1,nP[h]),f++);var l=d.externalId;void 0!==l&&(N(e,2,l),f++);var m=[f===Object.keys(d).length,e]}catch(F){X(F),m=[!1,void 0]}d=m;d[0]&&(Kj(b,Xx,1,d[1]),c++)}var n=a.productType;void 0!==n&&(Q(b,2,oP[n]),c++);var p=a.originatingDeviceInterface;void 0!==p&&(Q(b,4,EIa[p]),c++);var q=a.alcLoggingParams;if(q){var r=new ana;n=0;try{var t=q.purchaseOriginEntityType;void 0!==t&&(Q(r,1,wKa[t]),n++);
var u=q.purchaseOriginPageType;void 0!==u&&(Q(r,2,xKa[u]),n++);var x=q.purchaseOriginComponent;void 0!==x&&(Q(r,3,yKa[x]),n++);var B=[n===Object.keys(q).length,r]}catch(F){X(F),B=[!1,void 0]}q=B;q[0]&&(Lj(b,ana,3,zKa,q[1]),c++)}return[c===Object.keys(a).length,b]}catch(F){return X(F),[!1,void 0]}};
dLa=function(a){var b=new pA,c=0;try{var d=a.dimensions;if(d){var e=new nA,f=0;try{var h=d.csn;void 0!==h&&(N(e,1,h),f++);var l=d.userExperienceId;void 0!==l&&(Xj(e,2,l),f++);var m=d.studio;if(m){var n=new kA,p=0;try{var q=m.route;void 0!==q&&(N(n,1,q),p++);var r=m.feature;void 0!==r&&(Q(n,2,BKa[r]),p++);var t=m.topEntityType;void 0!==t&&(Q(n,3,CKa[t]),p++);var u=m.availability;void 0!==u&&(Q(n,4,DKa[u]),p++);var x=m.isChannelDelegation;void 0!==x&&(Wj(n,5,x),p++);var B=m.isArtistDelegation;void 0!==
B&&(Wj(n,6,B),p++);var F=m.environment;void 0!==F&&(Q(n,7,EKa[F]),p++);var G=m.networkConnectionStatus;void 0!==G&&(Q(n,8,FKa[G]),p++);var H=[p===Object.keys(m).length,n]}catch(wc){X(wc),H=[!1,void 0]}var O=H;O[0]&&(Kj(e,kA,3,O[1]),f++)}var P=d.mweb;if(P){var Y=new jA,la=0;try{var pa=P.pageType;void 0!==pa&&(Q(Y,1,GKa[pa]),la++);var ua=P.navType;void 0!==ua&&(Q(Y,2,HKa[ua]),la++);var na=[la===Object.keys(P).length,Y]}catch(wc){X(wc),na=[!1,void 0]}var wa=na;wa[0]&&(Kj(e,jA,4,wa[1]),f++)}var ea=d.mainAppWeb;
if(ea){var Ea=new iA,Z=0;try{var Qa=ea.pageType;void 0!==Qa&&(Q(Ea,1,IKa[Qa]),Z++);var z=ea.requestType;void 0!==z&&(Q(Ea,2,JKa[z]),Z++);var W=ea.isShellLoad;void 0!==W&&(Wj(Ea,3,W),Z++);var bb=[Z===Object.keys(ea).length,Ea]}catch(wc){X(wc),bb=[!1,void 0]}var eb=bb;eb[0]&&(Kj(e,iA,5,eb[1]),f++)}var jb=d.survivalSli;if(jb){var Ya=new gA,Tb=0;try{var Pb=jb.partitionMinute;void 0!==Pb&&(Xj(Ya,1,Pb),Tb++);var kb=jb.survivalStatus;void 0!==kb&&(Q(Ya,2,KKa[kb]),Tb++);var Gb=jb.survivalSessionType;void 0!==
Gb&&(Q(Ya,3,LKa[Gb]),Tb++);var Va=[Tb===Object.keys(jb).length,Ya]}catch(wc){X(wc),Va=[!1,void 0]}var A=Va;A[0]&&(Kj(e,gA,6,A[1]),f++)}var D=d.tvhtml5;if(D){var E=new lA,C=0;try{var K=D.authRefreshTokenFailureType;void 0!==K&&(Q(E,1,MKa[K]),C++);var T=D.networkErrorEndpoint;void 0!==T&&(Q(E,2,NKa[T]),C++);var fa=D.networkErrorResponseCode;void 0!==fa&&(Xj(E,3,fa),C++);var ra=D.sessionSurvivalLengthMin;void 0!==ra&&(Xj(E,4,ra),C++);var da=D.accountChangeType;void 0!==da&&(Q(E,5,OKa[da]),C++);var ha=
D.accountChangeTrigger;void 0!==ha&&(Q(E,6,PKa[ha]),C++);var Fa=D.cpn;void 0!==Fa&&(N(E,7,Fa),C++);var xa=D.sessionSurvivalDidUserAgentChange;void 0!==xa&&(Wj(E,8,xa),C++);var cb=D.adShownToPremiumUserCondition;void 0!==cb&&(Q(E,9,QKa[cb]),C++);var Ib=D.identityType;void 0!==Ib&&(Q(E,10,RKa[Ib]),C++);var Lb=D.identityDelegationType;void 0!==Lb&&(Q(E,11,SKa[Lb]),C++);var Qb=D.botguardServerEnvironment;void 0!==Qb&&(Q(E,12,TKa[Qb]),C++);var Ab=D.accountEventTrigger;void 0!==Ab&&(Q(E,13,UKa[Ab]),C++);
var Mb=D.signInMethodType;void 0!==Mb&&(Q(E,14,VKa[Mb]),C++);var cd=D.accountEventErrorType;void 0!==cd&&(Q(E,15,WKa[cd]),C++);var Bc=D.hadRemoteDeviceConnected;void 0!==Bc&&(Wj(E,16,Bc),C++);var md=D.hadVoiceInitiatedPlayback;void 0!==md&&(Wj(E,17,md),C++);var Mc=D.restartLengthMin;void 0!==Mc&&(Xj(E,18,Mc),C++);var nd=D.restartReason;void 0!==nd&&(Q(E,19,XKa[nd]),C++);var od=D.numberOfPersonaAccountsDelta;void 0!==od&&(Xj(E,20,od),C++);var $b=D.accountEventCancellationType;void 0!==$b&&(Q(E,21,
YKa[$b]),C++);var nc=D.maxJsMemoryPerAppLifecycleBytes;void 0!==nc&&(Xj(E,22,nc),C++);var Ld=D.appLifecycleLengthMin;void 0!==Ld&&(Xj(E,23,Ld),C++);var ac=[C===Object.keys(D).length,E]}catch(wc){X(wc),ac=[!1,void 0]}var dd=ac;dd[0]&&(Kj(e,lA,7,dd[1]),f++)}var ed=d.unpluggedWeb;if(ed){var Nb=new mA,Ed=0;try{var Ud=ed.unpluggedWebEntitlementType;void 0!==Ud&&(Q(Nb,1,ZKa[Ud]),Ed++);var Ub=ed.unpluggedWebPurchaseType;void 0!==Ub&&(Q(Nb,2,$Ka[Ub]),Ed++);var cf=[Ed===Object.keys(ed).length,Nb]}catch(wc){X(wc),
cf=[!1,void 0]}var Ae=cf;Ae[0]&&(Kj(e,mA,8,Ae[1]),f++)}var Be=d.logEventStatus;void 0!==Be&&(Xj(e,9,Be),f++);var pe=d.kids;if(pe){var lh=new hA,Kg=0;try{var mh=pe.userType;void 0!==mh&&(Q(lh,1,aLa[mh]),Kg++);var nh=[Kg===Object.keys(pe).length,lh]}catch(wc){X(wc),nh=[!1,void 0]}var Lg=nh;Lg[0]&&(Kj(e,hA,10,Lg[1]),f++)}var oh=d.screen;void 0!==oh&&(Xj(e,11,oh),f++);var Ce=d.navigation;if(Ce){var df=new fA,Zc=0;try{var ee=Ce.destinationScreen;void 0!==ee&&(Xj(df,1,ee),Zc++);var vc=Ce.navType;void 0!==
vc&&(Q(df,2,bLa[vc]),Zc++);var Mg=[Zc===Object.keys(Ce).length,df]}catch(wc){X(wc),Mg=[!1,void 0]}var ph=Mg;ph[0]&&(Kj(e,fA,12,ph[1]),f++)}var qh=[f===Object.keys(d).length,e]}catch(wc){X(wc),qh=[!1,void 0]}var rh=qh;rh[0]&&(Kj(b,nA,1,rh[1]),c++)}var De=a.records;De&&(ZO(b.j.bind(b),De,cLa),c++);return[c===Object.keys(a).length,b]}catch(wc){return X(wc),[!1,void 0]}};
cLa=function(a){var b=new oA,c=0;try{var d=a.name;void 0!==d&&(Q(b,1,eLa[d]),c++);var e=a.status;void 0!==e&&(Q(b,2,fLa[e]),c++);var f=a.state;void 0!==f&&(b.Ec(gLa[f]),c++);var h=a.sliId;void 0!==h&&(N(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return X(l),[!1,void 0]}};
pP=function(){this.C=new Set;this.B=new Set;this.D=new Map;this.client=void 0;this.csn=null};
qP=function(){pP.instance||(pP.instance=new pP);return pP.instance};
rP=function(){};
sP=function(){this.N=[];this.Z=[];this.j=[];this.qa=[];this.G=[];this.Y=[];this.C=new Map;this.K=new Map;this.B=new Set;this.Aa=new Map};
tP=function(){sP.instance||(sP.instance=new sP);return sP.instance};
uP=function(a,b,c,d){d=void 0===d?{}:d;g.DB(function(){hLa.includes(b)||(g.AF(new g.UC("createClientScreen() called with a non-page VE",b)),b=83769);d.isHistoryNavigation||(a.qa=[],a.j.push({rootVe:b,key:d.key||""}));a.N=[];a.Z=[];d.QV?iLa(a,b,c,d):jLa(a,b,c,d)})()};
kLa=function(a,b,c){c=void 0===c?0:c;g.DB(function(){b.then(function(d){a.B.has(c)&&a.D&&a.D();var e=g.wF(c),f=g.vF(c);if(e&&f){var h;(null==d?0:null==(h=d.response)?0:h.trackingParams)&&g.GF(a.client,e,f,g.uF(d.response.trackingParams));var l;(null==d?0:null==(l=d.playerResponse)?0:l.trackingParams)&&g.GF(a.client,e,f,g.uF(d.playerResponse.trackingParams))}})})()};
wP=function(a){var b=tP();g.DB(function(){var c=g.uF(a);vP(b,c);return c})()};
vP=function(a,b,c,d){d=void 0===d?0:d;g.DB(function(){if(a.B.has(d))return a.N.push([b,c]),!0;var e=g.wF(d),f=c||g.vF(d);if(e&&f){if(g.zB("combine_ve_grafts")){var h=a.C.get(f.toString());h?h.push(b):(a.K.set(f.toString(),f),a.C.set(f.toString(),[b]));a.ma||(a.ma=g.ZC(0,function(){lLa(a,e)},1200))}else g.GF(a.client,e,f,b);
return!0}return!1})()};
mLa=function(a,b,c,d){d=void 0===d?0:d;var e=g.wF(d);d=b||g.vF(d);e&&d&&(a=a.client,b=EF({cttAuthInfo:xF(e)||void 0},e),g.zB("il_via_jspb")?(c=new dB,c.j(e),d=d.getAsJspb(),Kj(c,vA,2,d),"UNDEFINED_CSN"===e?IF("visualElementStateChanged",b,void 0,c):iua(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?IF("visualElementStateChanged",b,c):a?mF("visualElementStateChanged",c,a,b):g.fD("visualElementStateChanged",c,b)))};
iLa=function(a,b,c,d){d=void 0===d?{}:d;a.B.add(d.layer||0);a.D=function(){jLa(a,b,c,d);var h=g.vF(d.layer);if(h){for(var l=g.v(a.N),m=l.next();!m.done;m=l.next())m=m.value,vP(a,m[0],m[1]||h,d.layer);h=g.v(a.Z);for(l=h.next();!l.done;l=h.next())l=l.value,mLa(a,l[0],l[1])}};
c||g.wF(d.layer)||a.D();if(d.QV)for(var e=g.v(d.QV),f=e.next();!f.done;f=e.next())kLa(a,f.value,d.layer);else g.zF(Error("Delayed screen needs a data promise."))};
jLa=function(a,b,c,d){d=void 0===d?{}:d;var e=void 0;d.layer||(d.layer=0);e=void 0!==d.parentLayer?d.parentLayer:d.layer;var f=g.wF(e);e=g.vF(e);var h=c||e,l;h&&(void 0!==d.parentCsn?l={clientScreenNonce:d.parentCsn,visualElement:h}:f&&"UNDEFINED_CSN"!==f&&(l={clientScreenNonce:f,visualElement:h}));var m,n=g.xB("EVENT_ID");"UNDEFINED_CSN"===f&&n&&(m={servletData:{serializedServletEventId:n}});g.zB("combine_ve_grafts")&&f&&lLa(a,f);g.zB("no_client_ve_attach_unless_shown")&&h&&f&&gva(h,f);try{var p=
eva(a.client,b,l,d.MV,d.cttAuthInfo,m,d.implicitGestureType,d.loggingExpectations)}catch(t){Wua(t,{vF:b,rootVe:e,Kjb:c,Qhb:f,Ijb:l,MV:d.MV});g.zF(t);return}yua(p,b,d.layer,d.cttAuthInfo);f&&"UNDEFINED_CSN"!==f&&e&&!vua(f)&&jva(a.client,f,e,!0);a.j[a.j.length-1]&&!a.j[a.j.length-1].csn&&(a.j[a.j.length-1].csn=p||"");g.QH({clientScreenNonce:p});rP.instance||(rP.instance=new rP);g.DB(qP().j).bind(qP())();var q=g.vF(d.layer);f&&"UNDEFINED_CSN"!==f&&q&&(g.zB("web_mark_root_visible")||g.zB("music_web_mark_root_visible"))&&
g.KF(p,q);a.B.delete(d.layer||0);a.D=void 0;var r;null==(r=a.Aa.get(d.layer))||r.forEach(function(t,u){t?vP(a,u,t,d.layer):q&&vP(a,u,q,d.layer)});
nLa(a)};
nLa=function(a){for(var b=0;b<a.G.length;b++){var c=a.G[b];try{c()}catch(d){g.zF(d)}}for(b=a.G.length=0;b<a.Y.length;b++){c=a.Y[b];try{c()}catch(d){g.zF(d)}}};
lLa=function(a,b){if(void 0===b)for(var c=tua(),d=0;d<c.length;d++)void 0!==c[d]&&lLa(a,c[d]);else a.C.forEach(function(e,f){(f=a.K.get(f))&&g.fva(a.client,b,f,e)}),a.C.clear(),a.K.clear(),a.ma=void 0};
xP=function(){};
oLa=function(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})};
Opa=function(a,b){var c=this;this.handleError=a;this.j=b;this.B=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.B=!0});
this.C=Math.random()<=g.AB("ytidb_transaction_ended_event_rate_limit_session",.2)};
qLa=function(a,b){xP.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:pLa(null==c?void 0:c.usage),deviceStorageQuotaMbytes:pLa(null==c?void 0:c.quota)});a.j("idbQuotaExceeded",c)})};
pLa=function(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))};
sLa=function(){g.RC();return g.SC(0,192)?g.SC(0,190):!(g.zB("web_watch_cinematics_disabled_by_default")||g.zB("web_watch_cinematics_preferred_reduced_motion_default_disabled")&&rLa())};
uLa=function(a){return!tLa||(0,g.uD)()-tLa>a};
wLa=function(a,b){vLa(a.program,b.Raa)&&(TH("bg_i",void 0,"player_att"),g.fI.initialize(a,function(){TH("bg_l",void 0,"player_att");tLa=(0,g.uD)()},b.cspNonce))};
xLa=function(a){a=void 0===a?{}:a;return g.fI.invoke(a)};
yLa=function(a){var b=g.AB("botguard_async_snapshot_timeout_ms",3E3);a=void 0===a?{}:a;return mya(a,b)};
vLa=function(a,b){return a?g.fI.isLoading()?!1:uLa(b):!1};
zLa=function(a){a=a.split("");yP.QI(a,30);yP.QI(a,64);yP.Cr(a,3);yP.QI(a,27);yP.F3(a,37);return a.join("")};
g.ALa=function(a,b){return a.Ea+"timedtext_video?ref=player&v="+b.videoId};
g.zP=function(a,b){a.feature=b;return a};
g.BLa=function(a){var b=this;this.videoData=a;a={};this.B=(a.c1a=function(){var c=[];if(g.fI.isInitialized()){var d="";b.videoData&&b.videoData.Ok&&(d=b.videoData.Ok+("&r1b="+b.videoData.clientPlaybackNonce));var e={};d=(e.atr_challenge=d,e);TH("bg_v",void 0,"player_att");d=xLa(d);TH("bg_s",void 0,"player_att");d?c.push("r1a="+d):c.push("r1c=2")}else TH("bg_e",void 0,"player_att"),window.trayride||window.botguard?c.push("r1c=1"):c.push("r1c=4");c.push("r1d="+g.fI.getState());return c.join("&")},a.c6a=
function(c){return"r6a="+(Number(c.c)^qya())},a.c6b=function(c){return"r6b="+(Number(c.c)^Number(g.xB("CATSTAT",0)))},a);
this.videoData&&this.videoData.Ok?this.j=HB(this.videoData.Ok):this.j={}};
g.CLa=function(a){if(a.videoData&&a.videoData.Ok){for(var b=[a.videoData.Ok],c=g.v(Object.keys(a.B)),d=c.next();!d.done;d=c.next())d=d.value,a.j[d]&&a.B[d]&&(d=a.B[d](a.j))&&b.push(d);return b.join("&")}return null};
ELa=function(a){var b={};Object.assign(b,a.B);g.zB("player_attestation_bg_async")&&(b.c1a=function(){return DLa(a)});
if(a.videoData&&a.videoData.Ok){for(var c=[a.videoData.Ok],d=g.v(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&b[e]&&(e=b[e](a.j))&&c.push(e);return new Promise(function(f,h){Promise.all(c).then(function(l){f(l.filter(function(m){return!!m}).join("&"))},h)})}return Promise.resolve(null)};
g.FLa=function(a,b){wLa(a,{Raa:g.tJ(b.experiments,"bg_vm_reinit_threshold"),cspNonce:b.cspNonce})};
DLa=function(a){function b(e){return e+"&r1d="+g.fI.getState()}
if(!g.fI.isInitialized())return TH("bg_e",void 0,"player_att"),window.trayride||window.botguard?Promise.resolve(b("r1c=1")):Promise.resolve(b("r1c=4"));var c="";a.videoData&&a.videoData.Ok&&(c=a.videoData.Ok+("&r1b="+a.videoData.clientPlaybackNonce));a={};var d=(a.atr_challenge=c,a);return new Promise(function(e){TH("bg_v",void 0,"player_att");yLa(d).then(function(f){f?(TH("bg_s",void 0,"player_att"),e(b("r1a="+f))):(TH("bg_e",void 0,"player_att"),e(b("r1c=2")))},function(){TH("bg_e",void 0,"player_att");
e(b("r1c=3"))})})};
AP=function(a){a=void 0===a?2592E3:a;if(0<a&&!(vpa()>(0,g.uD)()-1E3*a))return 0;a=g.NC("yt-player-quality");if("string"===typeof a){if(a=g.RK[a],0<a)return a}else if(a instanceof Object)return a.quality;return 0};
GLa=function(){var a=g.NC("yt-player-proxima-pref");return null==a?null:a};
HLa=function(){var a=g.NC("yt-player-quality");if(a instanceof Object&&a.quality&&a.previousQuality){if(a.quality>a.previousQuality)return 1;if(a.quality<a.previousQuality)return-1}return 0};
ILa=function(){var a={values:{},Rq:{}};try{var b=JSON.parse(JSON.parse(window.localStorage["yt-player-memory"]).data);a.values=b.values;a.halfLives=b.halfLives}catch(c){}return a};
JLa=function(a,b){var c="";49<b?c="p60":32<b&&(c="p48");return a+c};
CP=function(a,b){return+BP()[JLa(a,b)]||8192};
BP=function(){return g.NC("yt-player-performance-cap")||{}};
KLa=function(a){g.MC("yt-player-watch-later-pending",a)};
LLa=function(){return!!g.NC("yt-player-headers-readable")};
MLa=function(){try{return+(window.localStorage&&window.localStorage["yt-player-av1-pref"])||0}catch(a){return 0}};
g.NLa=function(){var a=g.NC("yt-player-caption-language-preferences");return a?a:[]};
OLa=function(){var a=XMLHttpRequest.prototype.fetch;return!!a&&3===a.length};
g.DP=function(a,b){this.id=a;this.Lc=b;this.captionTracks=[];this.C=this.D=null;this.xtags="";this.G=!1;this.j=null;this.B="UNKNOWN";this.captionsInitialState="CAPTIONS_INITIAL_STATE_UNKNOWN";a=this.Lc.id.split(".");1<a.length&&(this.G="2"===a[1])};
EP=function(a,b,c,d){this.C=c;this.reason=d;this.B=a||0;this.j=b||0};
g.FP=function(a,b,c,d){return new EP(g.RK[a]||0,g.RK[b]||0,c,d)};
GP=function(a){var b=g.RK.auto;return a.B===b&&a.j===b};
IP=function(a){return HP[a.j||a.B]||"auto"};
PLa=function(a,b){b=g.RK[b];return a.B<=b&&(!a.j||a.j>=b)};
JP=function(a){return"["+a.B+"-"+a.j+", override: "+(a.C+", reason: "+a.reason+"]")};
KP=function(a,b,c){this.videoInfos=a;this.j=b;this.audioTracks=[];if(this.j){a=new Set;null==c||c({ainfolen:this.j.length});b=g.v(this.j);for(var d=b.next();!d.done;d=b.next())if(d=d.value,!d.Lc||a.has(d.Lc.id)){var e=void 0,f=void 0,h=void 0;null==(h=c)||h({atkerr:!!d.Lc,itag:d.itag,xtag:d.j,lang:(null==(e=d.Lc)?void 0:e.name)||"",langid:(null==(f=d.Lc)?void 0:f.id)||""})}else e=new g.DP(d.id,d.Lc),a.add(d.Lc.id),this.audioTracks.push(e);null==c||c({atklen:this.audioTracks.length})}};
QLa=function(){g.J.apply(this,arguments);this.j=null};
ULa=function(a,b,c,d,e,f){if(a.j)return a.j;var h={},l=new Set,m={};if(LP(d)){for(var n in d.j)d.j.hasOwnProperty(n)&&(a=d.j[n],m[a.info.ub]=[a.info]);return m}n=RLa(b,d,h);f&&e({aftsrt:MP(n)});for(var p={},q=g.v(Object.keys(n)),r=q.next();!r.done;r=q.next()){r=r.value;for(var t=g.v(n[r]),u=t.next();!u.done;u=t.next()){u=u.value;var x=u.itag,B=void 0,F=r+"_"+((null==(B=u.video)?void 0:B.fps)||0);p.hasOwnProperty(F)?!0===p[F]?m[r].push(u):h[x]=p[F]:(B=NP(b,u,c,d.isLive,l),!0!==B?(h[x]=B,"disablevp9hfr"===
B&&(p[F]="disablevp9hfr")):(m[r]=m[r]||[],m[r].push(u),p[F]=!0))}}f&&e({bfflt:MP(m)});for(var G in m)m.hasOwnProperty(G)&&(d=G,m[d]&&m[d][0].jh()&&(m[d]=m[d],m[d]=SLa(b,m[d],h),m[d]=TLa(m[d],h)));f&&e(h);b=g.v(l.values());for(d=b.next();!d.done;d=b.next())(d=c.B.get(d.value))&&--d.d_;f&&e({aftflt:MP(m)});a.j=g.Wc(m,function(H){return!!H.length});
return a.j};
WLa=function(a,b,c,d,e,f,h,l){l=void 0===l?!1:l;if(b.kd&&h&&1<h.length&&!(0<b.lj||b.Y)){for(var m=b.B||!!e,n=m&&b.Zb?f:void 0,p=RLa(b,d),q=[],r=[],t={},u=0;u<h.length;u++){var x=h[u],B=d.N.get(x);if(B&&B.info){var F=B.info;B=F.ub;if(NP(b,F,c,d.isLive)){x=F.jh()?q:r;F=g.v(p[B]);for(var G=F.next();!G.done;G=F.next()){G=G.value;var H=void 0,O=B+"_"+((null==(H=G.video)?void 0:H.fps)||0);t.hasOwnProperty(O)?!0===t[O]&&x.push(G):NP(b,G,c,d.isLive)&&(x.push(G),t[O]=!0)}}else m&&f({opfu:x})}}if(q.length&&
r.length)return m&&f({opfm:q[0].itag+","+r[0].itag}),aC(new KP(q,r,n))}return VLa(a,b,c,d,e,f,l)};
VLa=function(a,b,c,d,e,f,h){function l(u){return!!p[u]}
var m=b.B||!!e,n=m&&b.Zb?f:void 0,p=ULa(a,b,c,d,f,m);OP(d)&&(p=XLa(c,p,e,m,f,b),m&&f({enflt:MP(p)}));b.rb=YLa(p);if(LP(d))return f=g.yb(Object.values(p),function(u){return!!u.length&&!!u[0].audio}),m=g.yb(Object.values(p),function(u){return!!u.length&&!!u[0].video}),f&&m||$B(),aC(new KP(m,f,n));
a=ZLa(b);m&&f({audioPrefOrder:a.join("_")});a=g.yb(a,l);if(!a)return m&&f({noaudio:1}),$B();a=p[a];p["9"]&&p.h&&d.Cc&&!b.Xa&&(m&&f({dltvp9:1}),delete p["9"]);if(h){c.D=new Map;for(var q in p)if(p.hasOwnProperty(q)&&(h=q,!("f"===h||0===b.Uf&&$La.has(h)))){e=g.v(p[h]);for(var r=e.next();!r.done;r=e.next())r=r.value,aMa(c,h,r)||bMa(c,h,r)}}h=p["1h"]?"1h":"1";c=p["9h"]?"9h":"9";r=p[h];var t=p[c];r&&r.length&&(b.j.highestAv1Resolution=r[r.length-1].video.j);t&&t.length&&(b.j.highestVp9Resolution=t[t.length-
1].video.j);q=[];e=[];if(b.Y&&!b.ao)for(e=cMa(d)?p["1h"]||p["9h"]?["1h","9h"]:["9","h"]:["1","9","h"],m&&f({newhybpref:e.join(".")}),r=g.v(e),t=r.next();!t.done;t=r.next())q=q.concat(p[t.value]).filter(function(u){return u});
else 0<b.lj&&t&&r&&(e=[h,c],q=r.concat(t).filter(function(u){return u}));
if(q.length&&!b.ao){PP(q,e);if(m){m=[];b=g.v(q);for(d=b.next();!d.done;d=b.next())m.push(d.value.itag);f({hbdfmt:m.join(".")})}return aC(new KP(q,a,n))}q=dMa(b);q=g.yb(q,l);if(!q){if(p[h])return f=p[h],PP(f),aC(new KP(f,a,n));m&&f({novideo:1});return $B()}b.jd&&("1"===q||"1h"===q)&&p[c]&&(h=QP(p[q]),e=QP(p[c]),e>h?q=c:b.Ad&&e===h&&eMa(p[c])&&(q=c));"9"===q&&p.h&&QP(p.h)>QP(p["9"])&&(q="h");b.Mb&&d.isLive&&"("===q&&p.H&&1440>QP(p["("])&&(q="H");m&&f({vfmly:fMa(q)});b=p[q];if(!b.length)return m&&f({novfmly:fMa(q)}),
$B();PP(b);return aC(new KP(b,a,n))};
YLa=function(a){var b=!(!a.mac3&&!a.MAC3),c=!(!a.meac3&&!a.MEAC3);return!(!a.m&&!a.M)||b||c};
eMa=function(a){a=g.v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.itag&&gMa.has(b.itag))return!0;return!1};
fMa=function(a){switch(a){case "*":return"v8e";case "(":return"v9e";case "(h":return"v9he";default:return a}};
MP=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=c;b.push(fMa(d));d=g.v(a[d]);for(var e=d.next();!e.done;e=d.next())b.push(e.value.itag)}return b.join(".")};
XLa=function(a,b,c,d,e,f){var h={},l={};g.Vc(b,function(m,n){m=m.filter(function(p){var q=p.itag;if(!p.me)return l[q]="noenc",!1;if(f.Fb&&"(h"===p.ub&&f.tb)return l[q]="lichdr",!1;if("("===p.ub||"(h"===p.ub){if(a.C&&c&&"widevine"===c.flavor){var r=p.mimeType+"; experimental=allowed";(r=!!p.me[c.flavor]&&!!c.j[r])||(l[q]=p.me[c.flavor]?"unspt":"noflv");return r}if(!RP(a,SP.CRYPTOBLOCKFORMAT)&&!a.Aa||a.ma)return l[q]=a.ma?"disvp":"vpsub",!1}return c&&p.me[c.flavor]&&c.j[p.mimeType]?!0:(l[q]=c?p.me[c.flavor]?
"unspt":"noflv":"nosys",!1)});
m.length&&(h[n]=m)});
d&&Object.entries(l).length&&e(l);return h};
TLa=function(a,b){var c=or(a,function(d,e){return 32<e.video.fps?Math.min(d,e.video.width):d},Infinity);
Infinity>c&&(a=a.filter(function(d){if(32<d.video.fps||d.video.width<c)return!0;b[d.itag]="hfrfirst";return!1}));
Joa()&&(a=a.filter(function(d){if("299"!==d.itag)return!0;b[d.itag]="ps3hfr1080";return!1}));
return a};
SLa=function(a,b,c){return b=b.filter(function(d){if(d.video.j<=a.hc)return!0;c[d.itag]="maxquality";return!1})};
RLa=function(a,b,c){var d={},e;for(e in b.j)if(b.j.hasOwnProperty(e)){var f=b.j[e].info;if(a.N&&f.video&&f.video.j<a.N)c&&(c[f.itag]="min"+a.N);else{var h=f.ub;d[h]=d[h]||[];d[h].push(f)}}a=g.v(Object.keys(d));for(b=a.next();!b.done;b=a.next())PP(d[b.value]);return d};
QP=function(a){return or(a,function(b,c){return Math.max(b,c.video.j)},0)};
NP=function(a,b,c,d,e){e=void 0===e?new Set:e;if(""===b.ub)return"unkn";if(("304"===b.itag||"266"===b.itag)&&a.Ha)return"blk2khfr";if(a.K&&b.video&&b.video.j>a.K)return"max"+a.K;if(a.ob&&"h"===b.ub&&b.video&&1080<b.video.j)return"blkhigh264";if("(h"===b.ub&&!c.K)return"enchdr";if((void 0===d?0:d)&&ZK(b)&&!a.Va)return"blk51live";if(YK(b)&&!a.Sa)return"blk51ugc";if(("MAC3"===b.ub||"mac3"===b.ub)&&!a.D)return"blkac3";if(("MEAC3"===b.ub||"meac3"===b.ub)&&!a.G)return"blkeac3";if(("M"===b.ub||"m"===b.ub)&&
!a.qa)return"blkaac51";if(("so"===b.ub||"sa"===b.ub)&&!a.Aa)return"blkamb";if(!a.Fb&&b.me&&b.me.fairplay&&("("===b.ub||"(h"===b.ub||"A"===b.ub||"MEAC3"===b.ub))return"cbc";if("i"===b.ub&&!a.Ob)return"blkiamf";if(a.md&&"1h"===b.ub)return"av1hdr";if((d=c.B.get(b.ub))&&0<d.d_)return e.add(b.ub),"byerr";var f;if(null==(f=b.video)?0:32<f.fps){if(!c.qa&&!RP(c,SP.FRAMERATE))return"capHfr";if(a.fb&&4320<=b.video.j)return"blk8khfr";if(WK(b)&&a.Xd&&b.me&&1440<=b.video.j)return"disablevp9hfr"}if(a.Rb&&b.Rb>
a.Rb)return"ratecap";a=hMa(c,b);return!0!==a?a:!0};
PP=function(a,b){b=void 0===b?[]:b;g.Wb(a,function(c,d){var e=d.Rb-c.Rb;if(!c.jh()||!d.jh())return e;var f=d.video.height*d.video.width-c.video.height*c.video.width;!f&&b&&0<b.length&&(c=b.indexOf(c.ub)+1,d=b.indexOf(d.ub)+1,f=0===c||0===d?d||-1:c-d);f||(f=e);return f})};
g.TP=function(a,b){this.B=a;this.D=void 0===b?!1:b;this.C=this.path=this.scheme="";this.j={};this.url=""};
VP=function(a){UP(a);return a.C};
WP=function(a){return a.B?a.B.startsWith("local"):"local"===a.scheme};
iMa=function(a){UP(a);return g.Yc(a.j,function(b){return null!==b})};
jMa=function(a){UP(a);var b=decodeURIComponent(a.get("mn")||"").split(",");return"/videoplayback"===a.path&&1<b.length&&!!b[1]};
XP=function(a,b){b=void 0===b?!1:b;UP(a);if("/videoplayback"!==a.path){var c=a.clone();c.set("playerfallback","1");return c}var d=a.df();c=new g.no(d);var e=a.get("fvip"),f=decodeURIComponent(a.get("mn")||"").split(",");if(e&&f&&1<f.length&&f[1])return d=c.j,a=d.replace(/^[^.]*/,""),g.po(c,(0===d.indexOf("rr")?"rr":"r")+e+"---"+f[1]+a),c=new g.TP(c.toString()),c.set("fallback_count","1"),c;if(b)return c=a.clone(),c.set("fallback_count","1"),c;e=c.j.match("\\.a1\\.googlevideo\\.com$");c.j.match("\\.googlevideo\\.com$")?
(g.po(c,"redirector.googlevideo.com"),d=c.toString()):c.j.match("rr?[1-9].*\\.c\\.youtube\\.com$")?(g.po(c,"www.youtube.com"),d=c.toString()):(c=Wza(d),VJ(c)&&(d=c));c=new g.TP(d);c.set("cmo=pf","1");e&&c.set("cmo=td","a1.googlevideo.com");return c};
UP=function(a){if(a.B){if(!VJ(a.B)&&!a.B.startsWith("local"))throw new g.UC("Untrusted URL",a.B);var b=g.wo(a.B);a.scheme=b.G;a.C=b.j+(null!=b.D?":"+b.D:"");var c=b.C;if(c.startsWith("/videoplayback"))a.path="/videoplayback",c=c.substr(14);else if(c.startsWith("/initplayback"))a.path="/initplayback",c=c.substr(13);else if(c.startsWith("/api/manifest")){var d=c.indexOf("/",12),e=c.indexOf("/",d+1);0<d&&0<e?(a.path=c.substr(0,e),c=c.substr(e+1)):(a.path=c,c="")}else a.path=c,c="";d=a.j;a.j=kMa(c);Object.assign(a.j,
lMa(b.B.toString()));Object.assign(a.j,d);"index.m3u8"===a.j.file&&(delete a.j.file,a.path+="/file/index.m3u8");a.B="";a.url="";a.D&&(b=a.get("n"))&&(b=mMa[0](b),a.set("n",b),mMa.length||kma(""))}};
nMa=function(a){UP(a);var b=a.scheme+(a.scheme?"://":"//")+a.C+a.path;if(iMa(a)){var c=[];g.Vc(a.j,function(d,e){null!==d&&c.push(e+"="+d)});
b+="?"+c.join("&")}return b};
kMa=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&oMa(c,a[b],a[b+1]);return c};
lMa=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?oMa(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
oMa=function(a,b,c){if("cmo"===b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
YP=function(a){var b=g.S(a,pMa)||a.signatureCipher;a={fX:!1,TC:"",NF:"",s:""};if(!b)return a;b=HB(b);a.fX=!0;a.TC=b.url;a.NF=b.sp;a.s=b.s;return a};
ZP=function(a,b,c,d,e,f,h,l,m){this.Pa=a;this.startTime=b;this.duration=c;this.ingestionTime=d;this.sourceURL=e;this.eh=m;this.endTime=b+c;this.j=h||0;this.range=f||null;this.pending=l||!1;this.eh=m||null};
g.$P=function(){this.segments=[];this.j=null;this.B=!0};
qMa=function(a,b){if(b>a.Cd())a.segments=[];else{var c=xb(a.segments,function(d){return d.Pa>=b},a);
0<c&&a.segments.splice(0,c)}};
rMa=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.j=(this.B=e)?0:8;this.dataOffset=this.offset+this.j};
aQ=function(a){var b=a.data.getUint8(a.offset+a.j);a.j+=1;return b};
bQ=function(a){var b=a.data.getUint16(a.offset+a.j);a.j+=2;return b};
cQ=function(a){var b=a.data.getInt32(a.offset+a.j);a.j+=4;return b};
dQ=function(a){var b=a.data.getUint32(a.offset+a.j);a.j+=4;return b};
eQ=function(a){var b=a.data;var c=a.offset+a.j;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.j+=8;return b};
sMa=function(a,b){b=void 0===b?NaN:b;if(isNaN(b))var c=a.size;else for(c=a.j;c<a.size&&a.data.getUint8(a.offset+c)!==b;)++c;b=new Uint8Array(a.data.buffer,a.offset+a.j+a.data.byteOffset,c-a.j);a.j=Math.min(c+1,a.size);return vO(b)};
tMa=function(a){return new Uint8Array(a.data.buffer,a.offset+a.data.byteOffset,a.size)};
uMa=function(a){this.offset=0;this.data=new DataView(new ArrayBuffer(a))};
fQ=function(a,b,c,d){(new Uint8Array(a.data.buffer,a.offset,d)).set(new Uint8Array(b.buffer,c+b.byteOffset,d));a.offset+=d};
gQ=function(a,b,c,d,e,f){this.startSecs=a;this.oi=b;this.context=c;this.identifier=d;this.event=e;this.j=f};
iQ=function(a,b){this.data=a;this.uri=b||"http://youtube.com/streaming/metadata/segment/102015";this.j=hQ(this,"Sequence-Number");this.K=hQ(this,"Segment-Count");this.N=this.data["Segment-Durations-Ms"]||"";this.ingestionTime=hQ(this,"Ingestion-Walltime-Us")/1E6;this.B=(hQ(this,"First-Frame-Time-Us")+hQ(this,"First-Frame-Uncertainty-Us"))/1E6;this.Kj=hQ(this,"Target-Duration-Us")/1E6;this.D="T"===this.data["Stream-Finished"];this.G="T"===this.data.Streamable;this.cryptoPeriodIndex=hQ(this,"Crypto-Period-Index");
this.C=hQ(this,"Crypto-Period-Seconds")};
wMa=function(a){return a.data["Cuepoint-Type"]?new gQ(-(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0),Number(a.data["Cuepoint-Total-Duration-Sec"])||0,a.data["Cuepoint-Context"],a.data["Cuepoint-Identifier"]||"",vMa[a.data["Cuepoint-Event"]||""]||"unknown",1E3*(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0)):null};
xMa=function(a){return Number(a.data["Start-Media-Time-Us"])/1E6||0};
hQ=function(a,b){return Number(a.data[b])||0};
yMa=function(a){return a.data["Stitched-Video-Cpn"]?a.data["Stitched-Video-Cpn"].split(",").slice(0,-1):[]};
g.zMa=function(a){return a.data["Serialized-State"]?a.data["Serialized-State"]:""};
g.AMa=function(a){switch(a.data["Is-Ad-Break-Finished"]){case "true":return 1;case "false":return 2;default:return 0}};
BMa=function(a,b){this.j=a;this.duration=b};
CMa=function(a,b,c,d,e){this.B=e;this.j=a||0;this.pitch=b||0;this.yaw=c||0;this.roll=d||0;e.getUint32(4)};
jQ=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0===a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
DMa=function(a,b){var c=g.kQ(a,0,1952868452);a=g.kQ(a,0,1953658222);if(c&&a){c.skip(1);var d=aQ(c)<<16|bQ(c);c.skip(4);d&1&&c.skip(8);d&2&&c.skip(4);if(d&8){d=c.j;var e=dQ(c);c.data.setUint32(c.offset+d,1<b?Math.ceil(e*b):Math.floor(e*b))}a.skip(1);c=aQ(a)<<16|bQ(a);if(c&256){d=c&1;e=c&4;var f=c&512,h=c&1024,l=c&2048;c=dQ(a);d&&a.skip(4);e&&a.skip(4);d=(f?4:0)+(h?4:0)+(l?4:0);for(e=0;e<c;e++)f=a.j,h=dQ(a),a.data.setUint32(a.offset+f,1<b?Math.ceil(h*b):Math.floor(h*b)),a.skip(d)}}};
mQ=function(a){a=new DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.kQ(a,0,1836476516))?g.lQ(a):NaN};
EMa=function(a){var b=g.kQ(a,0,1937011556);if(!b)return null;b=nQ(a,b.dataOffset+8,1635148593)||nQ(a,b.dataOffset+8,1635135537);if(!b)return null;var c=nQ(a,b.dataOffset+78,1936995172),d=nQ(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),aQ(c)){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=nQ(a,d.dataOffset,1886547818)){var h=nQ(a,d.dataOffset,1886546020),l=nQ(a,d.dataOffset,2037673328);if(!l&&(l=nQ(a,d.dataOffset,1836279920),
!l))return null;h&&(h.skip(4),c=cQ(h)/65536,f=cQ(h)/65536,e=cQ(h)/65536);a=tMa(l);a=new DataView(a.buffer,a.byteOffset+8,a.byteLength-8);return new CMa(b,c,f,e,a)}return null};
nQ=function(a,b,c){for(;oQ(a,b);){var d=pQ(a,b);if(d.type===c)return d;b+=d.size}return null};
g.kQ=function(a,b,c){for(;oQ(a,b);){var d=pQ(a,b);if(d.type===c)return d;b=qQ(d.type)?b+8:b+d.size}return null};
g.FMa=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;b=4294967296*b.getUint32(a)+b.getUint32(a+4)}else b=a.data.getUint32(a.dataOffset+4);return b};
pQ=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new rMa(a,b,c,d)};
g.lQ=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
GMa=function(a){a=new rMa(a.data,a.offset,a.size,a.type,a.B);var b=aQ(a);a.skip(7);var c=dQ(a);if(0===b){b=dQ(a);var d=dQ(a)}else b=eQ(a),d=eQ(a);a.skip(2);for(var e=bQ(a),f=[],h=[],l=0;l<e;l++){var m=dQ(a);f.push(m);h.push(dQ(a));a.skip(4)}return{Fu:c,F5:b,Y5:d,Paa:f,dS:h}};
oQ=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(48>d||122<d)return!1}return!0};
qQ=function(a){return 1701082227===a||1836019558===a||1836019574===a||1835297121===a||1835626086===a||1937007212===a||1953653094===a||1953653099===a||1836475768===a};
HMa=function(a){a.skip(4);return{oba:sMa(a,0),value:sMa(a,0),Fu:dQ(a),Ojb:dQ(a),Whb:dQ(a),id:dQ(a),sY:sMa(a),offset:a.offset}};
g.IMa=function(a){var b=nQ(a,0,1701671783);if(!b)return null;var c=HMa(b),d=c.oba;c=jQ(c.sY);if(a=nQ(a,b.offset+b.size,1701671783))if(a=HMa(a),a=jQ(a.sY),c&&a){b=g.v(Object.keys(a));for(var e=b.next();!e.done;e=b.next())e=e.value,c[e]=a[e]}return c?new iQ(c,d):null};
JMa=function(a,b){for(var c=nQ(a,0,b);c;){var d=c;d.type=1936419184;d.data.setUint32(d.offset+4,1936419184);c=nQ(a,c.offset+c.size,b)}};
g.rQ=function(a,b){for(var c=0,d=[];oQ(a,c);){var e=pQ(a,c);e.type===b&&d.push(e);c=qQ(e.type)?c+8:c+e.size}return d};
KMa=function(a,b){var c=g.kQ(a,0,1937011556),d=g.kQ(a,0,1953654136);if(!c||!d||2<=a.getUint32(c.offset+12))return null;var e=new DataView(b.buffer,b.byteOffset,b.length),f=g.kQ(e,0,1937011556);if(!f)return null;b=e.getUint32(f.dataOffset+8);d=e.getUint32(f.dataOffset+12);if(1701733217!==d&&1701733238!==d)return null;d=new uMa(a.byteLength+b);fQ(d,a,0,c.offset+12);d.data.setInt32(d.offset,2);d.offset+=4;fQ(d,a,c.offset+16,c.size-16);fQ(d,e,e.byteOffset+f.dataOffset+8,b);fQ(d,a,c.offset+c.size,a.byteLength-
(c.offset+c.size));c=g.v([1836019574,1953653099,1835297121,1835626086,1937007212,1937011556]);for(e=c.next();!e.done;e=c.next())e=g.kQ(a,0,e.value),d.data.setUint32(e.offset,e.size+b);a=g.kQ(d.data,0,1953654136);d.data.setUint32(a.offset+16,2);return d.data};
LMa=function(a){var b=g.kQ(a,0,1937011556);if(!b)return null;var c=a.getUint32(b.dataOffset+12);if(1701733217!==c&&1701733238!==c)return null;b=nQ(a,b.offset+24+(1701733217===c?28:78),1936289382);if(!b)return null;c=nQ(a,b.offset+8,1935894637);if(!c||1667392371!==a.getUint32(c.offset+12))return null;b=nQ(a,b.offset+8,1935894633);if(!b)return null;b=nQ(a,b.offset+8,1952804451);if(!b)return null;c=new Uint8Array(16);for(var d=0;16>d;d++)c[d]=a.getInt8(b.offset+16+d);return c};
sQ=function(a,b){this.j=a;this.pos=0;this.start=b||0};
tQ=function(a){return a.pos>=a.j.byteLength};
yQ=function(a,b,c){var d=new sQ(c);if(!uQ(d,a))return!1;d=vQ(d);if(!wQ(d,b))return!1;for(a=0;b;)b>>>=8,a++;b=d.start+d.pos;var e=xQ(d,!0);d=a+(d.start+d.pos-b)+e;d=9<d?MMa(d-9,8):MMa(d-2,1);a=b-a;c.setUint8(a++,236);for(b=0;b<d.length;b++)c.setUint8(a++,d[b]);return!0};
OMa=function(a){var b=new sQ(a);b.Kn();if(uQ(b,[408125543,374648427,174,224]))b=vQ(b);else return null;for(var c=a=null;!tQ(b);){var d=xQ(b,!1);if(21432===d)switch(zQ(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320===d?c=vQ(b):AQ(b)}if(!c)return null;for(var e,f=d=b=null;!tQ(c);)switch(xQ(c,!1)){case 30321:if(3!==zQ(c))return null;break;case 30324:b=BQ(c);break;case 30323:f=BQ(c);break;case 30325:d=BQ(c);break;case 30322:e=xQ(c,!0);e=NMa(c,e);e=new DataView(e.buffer,
e.byteOffset,e.byteLength);break;default:AQ(c)}return e?new CMa(a,b,f,d,e):null};
vQ=function(a){var b=xQ(a,!0),c=a.j.byteOffset+a.pos;c=new DataView(a.j.buffer,c,Math.min(b,a.j.buffer.byteLength-c));c=new sQ(c,a.start+a.pos);a.pos+=b;return c};
zQ=function(a){for(var b=xQ(a,!0),c=CQ(a),d=1;d<b;d++)c=256*c+CQ(a);return c};
BQ=function(a){var b=xQ(a,!0),c=0;4===b?c=a.j.getFloat32(a.pos):8===b&&(c=a.j.getFloat64(a.pos));a.pos+=b;return c};
PMa=function(a){var b=xQ(a,!0);return vO(NMa(a,b))};
CQ=function(a){return a.j.getUint8(a.pos++)};
xQ=function(a,b){var c=CQ(a);if(1===c){for(b=c=0;7>b;b++)c=256*c+CQ(a);return c}for(var d=128,e=0;6>e&&d>c;e++)c=256*c+CQ(a),d*=128;return b?c-d:c};
AQ=function(a){var b=xQ(a,!0);a.pos+=b};
QMa=function(a){if(!wQ(a,440786851,!0))return null;var b=a.pos;xQ(a,!1);var c=xQ(a,!0)+a.pos-b;a.pos=b+c;if(!wQ(a,408125543,!1))return null;xQ(a,!0);if(!wQ(a,357149030,!0))return null;var d=a.pos;xQ(a,!1);var e=xQ(a,!0)+a.pos-d;a.pos=d+e;if(!wQ(a,374648427,!0))return null;var f=a.pos;xQ(a,!1);var h=xQ(a,!0)+a.pos-f,l=new Uint8Array(c+12+e+h),m=new DataView(l.buffer);l.set(new Uint8Array(a.j.buffer,a.j.byteOffset+b,c));m.setUint32(c,408125543);m.setUint32(c+4,33554431);m.setUint32(c+8,4294967295);
l.set(new Uint8Array(a.j.buffer,a.j.byteOffset+d,e),c+12);l.set(new Uint8Array(a.j.buffer,a.j.byteOffset+f,h),c+12+e);return l};
DQ=function(a){var b=a.pos;a.pos=0;var c=1E6;uQ(a,[408125543,357149030,2807729])&&(c=zQ(a));a.pos=b;return c};
RMa=function(a,b){var c=a.pos;a.pos=0;if(160!==a.j.getUint8(a.pos)&&!EQ(a)||!wQ(a,160))return a.pos=c,NaN;xQ(a,!0);var d=a.pos;if(!wQ(a,161))return a.pos=c,NaN;xQ(a,!0);CQ(a);var e=CQ(a)<<8|CQ(a);a.pos=d;if(!wQ(a,155))return a.pos=c,NaN;d=zQ(a);a.pos=c;return(e+d)*b/1E9};
EQ=function(a){if(!SMa(a)||!wQ(a,524531317))return!1;xQ(a,!0);return!0};
SMa=function(a){if(a.Kn()){if(!wQ(a,408125543))return!1;xQ(a,!0)}return!0};
uQ=function(a,b){for(var c=0;c<b.length;c++){if(!wQ(a,b[c]))return!1;c!==b.length-1&&xQ(a,!0)}return!0};
wQ=function(a,b,c){c=void 0===c?!1:c;if(tQ(a))return!1;for(var d=a.pos;xQ(a,!1)!==b;)if(AQ(a),d=a.pos,tQ(a))return!1;c&&(a.pos=d);return!0};
MMa=function(a,b){b||(b=Math.ceil(Math.log(a+2)/Math.log(2)/7));for(var c=1<<8-b,d=[];d.length<b-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|c);return d};
NMa=function(a,b){var c=new Uint8Array(a.j.buffer,a.j.byteOffset+a.pos,b);a.pos+=b;return c};
FQ=function(a){this.base=a;this.j={};this.url=""};
TMa=function(a,b){var c=b.indexOf("?");if(0<c){var d=lMa(b.substr(c+1));g.Vc(d,function(e,f){this.set(f,e)},a);
b=b.substr(0,c)}b=kMa(b);g.Vc(b,function(e,f){this.set(f,e)},a)};
UMa=function(a){var b=a.base.df(),c=[];g.Vc(a.j,function(e,f){c.push(f+"="+e)});
if(!c.length)return b;var d=c.join("&");a=iMa(a.base)?"&":"?";return b+a+d};
VMa=function(a,b){var c=new g.TP(b);(b=c.get("req_id"))&&a.set("req_id",b);g.Vc(a.j,function(d,e){c.set(e,null)});
return c};
GQ=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
HQ=function(a){a=a.split("-");var b=Number(a[0]),c=Number(a[1]);if(!isNaN(b)&&!isNaN(c)&&2===a.length&&(a=new GQ(b,c),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length))return a};
IQ=function(a,b){return new GQ(a,a+b-1)};
WMa=function(a){return null==a.end?{start:String(a.start)}:{start:String(a.start),end:String(a.end)}};
JQ=function(a){if(!a)return new GQ(0,0);var b=Number(a.start);a=Number(a.end);if(!isNaN(b)&&!isNaN(a)&&(b=new GQ(b,a),0<b.length))return b};
KQ=function(a,b,c,d,e,f,h,l,m,n,p,q){d=void 0===d?"":d;this.type=a;this.j=b;this.range=c;this.source=d;this.Hj=p;this.clipId=void 0===q?"":q;this.N=[];this.G="";this.Pa=-1;this.G=d;this.Pa=0<=e?e:-1;this.startTime=f||0;this.duration=h||0;this.Xb=l||0;this.B=0<=m?m:this.range?this.range.length:NaN;this.hf=this.range?this.Xb+this.B===this.range.length:void 0===n?!!this.B:n;this.range?(this.C=this.startTime+this.duration*this.Xb/this.range.length,this.K=this.duration*this.B/this.range.length,this.D=
this.C+this.K):XMa(this)};
XMa=function(a){a.C=a.startTime;a.K=a.duration;a.D=a.C+a.K};
LQ=function(a){return a.hf&&a.j.index.aP(a.Pa)};
YMa=function(a,b,c){var d=!(!b||b.j!==a.j||b.type!==a.type||b.Pa!==a.Pa);return c?d&&!!b&&(a.range&&b.range?b.range.end===a.range.end:b.range===a.range)&&b.Xb+b.B===a.Xb+a.B:d};
MQ=function(a){return 1===a.type||2===a.type};
NQ=function(a){return 3===a.type||7===a.type};
OQ=function(a,b){return a.j===b.j?a.range&&b.range?a.range.start+a.Xb+a.B===b.range.start+b.Xb:a.Pa===b.Pa?a.Xb+a.B===b.Xb:a.Pa+1===b.Pa&&0===b.Xb&&a.hf:!1};
ZMa=function(a,b){return OQ(a,b)||1E-6>=Math.abs(a.D-b.C)||a.Pa+1===b.Pa&&0===b.Xb&&a.hf?!0:!1};
$Ma=function(a){return a.Pa+(a.hf?1:0)};
aNa=function(a){1===a.length||g.nr(a,function(c){return!!c.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new GQ(a[0].range.start+a[0].Xb,b.range.start+b.Xb+b.B-1)};
bNa=function(a){for(var b=1;b<a.length;b++)if(!OQ(a[b-1],a[b]))return!1;return!0};
cNa=function(a){var b=0;a=g.v(a);for(var c=a.next();!c.done;c=a.next())b+=c.value.range.length;return b};
PQ=function(a){var b={};b.itag=a.j.info.itag;b.type=""+a.type;b.src=""+a.source;b.segsrc=a.G;b.seg=String(a.Pa);a.range&&(b.range=a.range.start+a.Xb+"-"+(a.range.start+a.Xb+a.B-1));b.time=a.C.toFixed(1)+"-"+(a.C+a.K).toFixed(1);b.off=String(a.Xb);b.len=String(a.B);a.hf&&(b.end="1");LQ(a)&&(b.eos="1");a.clipId&&(b.cid=a.clipId);return b};
dNa=function(a){return new KQ(a.type,a.j,a.range,"getEmptyStubBefore"+a.G,a.Pa,a.startTime,0,a.Xb,0)};
eNa=function(a){return new KQ(a.type,a.j,a.range,"getEmptyStubAfter"+a.G,a.Pa,a.startTime+a.duration,0,a.Xb+a.B,0)};
fNa=function(a,b,c,d){return new KQ(a.type,a.j,a.range,"reslice"+a.G,a.Pa,a.startTime,a.duration,b,c,d,a.Hj,a.clipId)};
gNa=function(a,b){return a.j!==b.j?!1:a.range&&b.range?a.range.start+a.Xb>=b.range.start+b.Xb&&a.range.start+a.Xb+a.B<=b.range.start+b.Xb+b.B:a.Pa===b.Pa&&a.Xb>=b.Xb&&(a.Xb+a.B<=b.Xb+b.B||b.hf)};
hNa=function(a,b){return a.j!==b.j?!1:4===a.type&&3===b.type&&a.j.vg()?(a=a.j.nB(a),ks(a,function(c){return hNa(c,b)})):a.Pa===b.Pa&&!!b.B&&b.Xb+b.B>a.Xb&&b.Xb+b.B<=a.Xb+a.B};
iNa=function(a,b){var c=b.Pa;a.G="updateWithSegmentInfo";a.Pa=c;if(a.startTime!==b.startTime||a.duration!==b.duration)a.startTime=b.startTime,a.duration=b.duration,XMa(a)};
QQ=function(a,b){var c=this;this.bb=a;this.D=this.j=null;this.G=this.hh=NaN;this.K=this.requestId=null;this.Jd={Rib:function(){return c.range}};
this.resource=a[0].j.resource;this.B=b||"";this.bb[0].range&&0<this.bb[0].B&&(bNa(a)?(this.range=aNa(a),this.C=this.range.length):(this.range=this.bb[this.bb.length-1].range,this.C=cNa(a)))};
RQ=function(a){return!!(a.j||a.D&&a.D.uB)};
jNa=function(a){return!MQ(a.bb[a.bb.length-1])};
SQ=function(a){return 4===a.bb[a.bb.length-1].type};
g.lNa=function(a,b,c){c=null===a.K?TQ(a.resource,b,c,a.bb[0].type):a.K;if(a.j){c=c?XP(a.j,b.Gm):a.j;var d=new FQ(c);d.get("alr")||d.set("alr","yes");a.B&&TMa(d,a.B)}else/http[s]?:\/\//.test(a.B)?d=new FQ(new g.TP(a.B)):(d=kNa(a.resource,c,b),a.B&&TMa(d,a.B));if(b.yx&&5===a.bb[0].type||6===a.bb[0].type)b=d.base.clone(),UP(b),"/videogoodput"!==b.path&&(b.path="/videogoodput",b.url=""),d=new FQ(b);(b=a.range)?d.set("range",b.toString()):a.bb[0].j.cw()&&1===a.bb.length&&a.bb[0].Xb&&d.set("range",a.bb[0].Xb+
"-");a.requestId&&d.set("req_id",a.requestId);isNaN(a.hh)||d.set("headm",a.hh.toString());isNaN(a.G)||d.set("mffa",a.G+"ms");a.urlParams&&g.Vc(a.urlParams,function(e,f){d.set(f,e)});
return d};
nNa=function(a){if(a.range)return a.C;a=a.bb[0];return mNa?Math.round(a.B):Math.round(a.K*a.j.info.Rb)};
oNa=function(a,b){return Math.max(0,a.bb[0].C-b)};
pNa=function(){this.C=this.j=this.timedOut=this.started=this.D=this.B=0};
qNa=function(a){a.D=(0,g.uD)();a.started=0;a.timedOut=0;a.j=0};
rNa=function(a,b,c){var d=a.started+4*a.j;c&&(d+=a.C);b.Fx&&(d=Math.max(0,d-b.Qi));return Math.pow(1.6,d)};
UQ=function(a,b){a[b]||(a[b]=new pNa);return a[b]};
VQ=function(a){this.N=this.K=this.G=this.B=0;this.j=a;this.C=a.clone()};
TQ=function(a,b,c,d){d=void 0===d?3:d;if(WP(a.j))return!1;var e=UQ(c,VP(a.j));if(1>e.timedOut&&1>e.j&&6!==d)return!1;var f=e.timedOut+e.j;a=sNa(a,b);c=UQ(c,VP(a));return 6===d?c.B<e.B:c.timedOut+c.j+0<f};
kNa=function(a,b,c){a=b?sNa(a,c):a.j;return new FQ(a)};
sNa=function(a,b){b=b?b.Gm:!1;a.D||(a.D=XP(a.C,b));return a.D};
tNa=function(a,b,c){return VP(b?sNa(a,c):a.j)};
uNa=function(a,b,c){c=UQ(c,tNa(a,TQ(a,b,c),b));c=Math.max(a.G,c.timedOut)+b.cC*(a.B-a.G)+.25*a.K;b=c>b.Qi?1E3*Math.pow(1.6,c-b.Qi):0;return 0===b?!0:a.N+b<(0,g.uD)()};
vNa=function(a,b,c){a.j.set(b,c);a.C.set(b,c);a.D&&a.D.set(b,c)};
WQ=function(a,b,c,d){this.initRange=c;this.indexRange=d;this.j=null;this.C=!1;this.K=0;this.D=this.B=null;this.info=b;this.resource=new VQ(a)};
XQ=function(a,b,c,d,e,f){f=void 0===f?0:f;WQ.call(this,a,b,d,void 0);this.G=c;this.Kj=f;this.index=e||new g.$P};
wNa=function(a,b,c,d,e){this.Pa=a;this.startSecs=b;this.oi=c;this.j=d||NaN;this.B=e||NaN};
YQ=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName===c)){var d=a.getAttribute(b);if(d)return d}return""};
ZQ=function(a,b){for(;a;a=a.parentNode){var c=a.getElementsByTagName(b);if(0<c.length)return c[0]}return null};
xNa=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(Number(b[2])|0)+60*(Number(b[4])|0)+(Number(b[6])|0):Number(a)|0};
yNa=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
$Q=function(){this.j=[];this.B=null;this.K=0;this.C=[];this.G=!1;this.N="";this.D=-1};
zNa=function(a){var b=a.C;a.C=[];return b};
ANa=function(){this.D=[];this.j=null;this.B={};this.C={}};
ENa=function(a,b){var c=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=g.v(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;var e=d.parentNode.parentNode,f=null;"Period"===e.nodeName?f=BNa(a):"AdaptationSet"===e.nodeName?(e=e.getAttribute("id")||e.getAttribute("mimetype")||"",f=CNa(a,e)):"Representation"===e.nodeName&&(e=e.getAttribute("id")||"",f=DNa(a,e));if(null==f)return;f.update(d);g.Jb(c,zNa(f))}g.Jb(a.D,c);waa(a.D,function(h){return 1E3*h.startSecs+h.j})};
FNa=function(a){a.j&&(a.j.j=[]);g.Vc(a.B,function(b){b.j=[]});
g.Vc(a.C,function(b){b.j=[]})};
BNa=function(a){a.j||(a.j=new $Q);return a.j};
CNa=function(a,b){a.B[b]||(a.B[b]=new $Q);return a.B[b]};
DNa=function(a,b){a.C[b]||(a.C[b]=new $Q);return a.C[b]};
GNa=function(a){var b=void 0===a?{}:a;a=void 0===b.Kj?0:b.Kj;var c=void 0===b.Ym?!1:b.Ym,d=void 0===b.Fq?0:b.Fq,e=void 0===b.qf?0:b.qf,f=void 0===b.Zi?Infinity:b.Zi,h=void 0===b.mA?0:b.mA;b=void 0===b.ge?!1:b.ge;g.$P.call(this);this.Uq=this.Kp=-1;this.Lj=a;this.Fq=d;this.Ym=c;this.qf=e;this.Zi=f;this.mA=h;this.ge=b};
aR=function(a,b){return Vb(a.segments,function(c){return b-c.Pa})};
bR=function(a,b,c){c=void 0===c?{}:c;XQ.call(this,a,b,"",void 0,void 0,c.Kj||0);this.index=new GNa(c)};
cR=function(a,b,c){WQ.call(this,a,b);this.G=c;this.index=new g.$P;this.index.B=!1};
HNa=function(a,b,c){var d=a.index.fI(b),e=a.index.getStartTime(b),f=a.index.getDuration(b);c?f=c=0:c=a.info.Rb*f;return new QQ([new KQ(3,a,void 0,"otfCreateRequestInfoForSegment",b,e,f,0,c)],d)};
INa=function(a,b){if(!a.index.isLoaded()){var c=[],d=b.K;b=b.N.split(",").filter(function(p){return 0<p.length});
for(var e=0,f=0,h=0,l=/^(\d+)/,m=/r=(\d+)/,n=0;n<d;n++){if(0>=h)if(h=b.shift(),f=(f=l.exec(h))?+f[1]/1E3:0)h=(h=m.exec(h))?+h[1]:0,h+=1;else return;c.push(new ZP(n,e,f,NaN,"sq/"+(n+1)));e+=f;h--}a.index.append(c)}};
dR=function(a,b){this.info=a;this.j=b;this.B=null;this.D=-1;this.timestampOffset=0;this.G=!1;this.C=this.info.j.Tz()&&!this.info.Xb};
eR=function(a){return OGa(a.j)};
JNa=function(a,b){a.j.getLength();b=Math.min(b,a.info.B);var c=a.j.split(b);return[new dR(new KQ(a.info.type,a.info.j,a.info.range,a.info.G,a.info.Pa,a.info.startTime,a.info.duration,a.info.Xb,b,!1,a.info.Hj,a.info.clipId),c.tI),new dR(new KQ(a.info.type,a.info.j,a.info.range,a.info.G,a.info.Pa,a.info.startTime,a.info.duration,a.info.Xb+b,a.info.B-b,a.info.hf,a.info.Hj,a.info.clipId),c.Fm)]};
fR=function(a,b,c){var d;if(!(d=!OQ(a.info,b.info)||a.info.hf)){if(c=void 0===c?!1:c)c=b.j,c=!(c.j.length?KGa(a.j,c.j[0]):1);d=c}if(d)return null;c=new KQ(a.info.type,a.info.j,a.info.range,a.info.G,a.info.Pa,a.info.startTime,a.info.duration,a.info.Xb,a.info.B,a.info.hf,a.info.Hj,a.info.clipId);d=b.info;c.B+=d.B;c.range&&(c.K+=d.K);c.D=d.D;c.hf=d.hf;d=new oO;pO(d,a.j);pO(d,b.j);c=new dR(c,d);c.B=b.B||a.B;return c};
KNa=function(a){g.$K(a.info.j.info)||a.info.j.info.Oe();if(-1!==a.D)return a.D;if(a.B&&xMa(a.B))return a.D=xMa(a.B),a.D;if(g.$K(a.info.j.info)){var b=eR(a);for(var c=a.info.j.j,d=NaN,e=NaN,f=0;oQ(b,f);){var h=pQ(b,f);1936286840===h.type?e=h.data.getUint32(h.dataOffset+8):1836476516===h.type?e=g.lQ(h):1952867444===h.type&&isNaN(d)&&(d=g.FMa(h));f=qQ(h.type)?f+8:f+h.size}!e&&c&&(e=mQ(c));b=d/e}else b=new sQ(eR(a)),c=a.C?b:new sQ(new DataView(a.info.j.j.buffer)),d=DQ(c),c=b.pos,b.pos=0,EQ(b)?wQ(b,231)?
(d=zQ(b)*d/1E9,b.pos=c,b=d):(b.pos=c,b=NaN):(b.pos=c,b=NaN);a.D=b||a.info.C;return a.D};
MNa=function(a,b){0<a.timestampOffset&&(b-=a.timestampOffset);var c=KNa(a)+b;LNa(a,c);a.timestampOffset=b};
LNa=function(a,b){g.$K(a.info.j.info)||a.info.j.info.Oe();a.D=b;if(g.$K(a.info.j.info)){var c=eR(a);a=a.info.j.j;for(var d=NaN,e=NaN,f=0;oQ(c,f);){var h=pQ(c,f);isNaN(d)&&(1936286840===h.type?d=h.data.getUint32(h.dataOffset+8):1836476516===h.type&&(d=g.lQ(h)));if(1952867444===h.type){!d&&a&&(d=mQ(a));var l=g.FMa(h);isNaN(e)&&(e=Math.round(b*d)-l);l+=e;if(h.data.getUint8(h.dataOffset)){var m=h.data,n=h.dataOffset+4;m.setUint32(n,Math.floor(l/4294967296));m.setUint32(n+4,l&4294967295)}else h.data.setUint32(h.dataOffset+
4,l)}f=qQ(h.type)?f+8:f+h.size}return!0}c=new sQ(eR(a));a=a.C?c:new sQ(new DataView(a.info.j.j.buffer));d=DQ(a);a=c.pos;c.pos=0;if(EQ(c)&&wQ(c,231))if(e=xQ(c,!0),b=Math.floor(1E9*b/d),Math.ceil(Math.log(b)/Math.log(2)/8)>e)b=!1;else{for(d=e-1;0<=d;d--)c.j.setUint8(c.pos+d,b&255),b>>>=8;c.pos=a;b=!0}else b=!1;return b};
gR=function(a,b){b=void 0===b?!1:b;var c=NNa(a);a=b?0:a.info.K;return c||a};
NNa=function(a){g.$K(a.info.j.info)||a.info.j.info.Oe();if(a.B&&7===a.info.type)return a.B.Kj;if(g.$K(a.info.j.info)){var b=eR(a);var c=0;b=g.rQ(b,1936286840);b=g.v(b);for(var d=b.next();!d.done;d=b.next())d=GMa(d.value),c+=d.dS[0]/d.Fu;c=c||NaN;if(!(0<=c))a:{c=eR(a);b=a.info.j.j;for(var e=d=0,f=0;oQ(c,d);){var h=pQ(c,d);if(1836476516===h.type)e=g.lQ(h);else if(1836019558===h.type){!e&&b&&(e=mQ(b));if(!e){c=NaN;break a}var l=nQ(h.data,h.dataOffset,1953653094),m=e,n=nQ(l.data,l.dataOffset,1952868452);
l=nQ(l.data,l.dataOffset,1953658222);var p=cQ(n);cQ(n);p&2&&cQ(n);n=p&8?cQ(n):0;var q=cQ(l),r=q&1;p=q&4;var t=q&256,u=q&512,x=q&1024;q&=2048;var B=dQ(l);r&&cQ(l);p&&cQ(l);for(var F=r=0;F<B;F++){var G=t?cQ(l):n;u&&cQ(l);p&&0===F||!x||cQ(l);q&&cQ(l);r+=G}f+=r/m}d=qQ(h.type)?d+8:d+h.size}c=f||NaN}c||g.AF(new g.UC("Missing duration while parsing bmff",a.info.Td()))}else c=new sQ(eR(a)),a=a.C?c:new sQ(new DataView(a.info.j.j.buffer)),c=RMa(c,DQ(a));return c};
ONa=function(a){var b=eR(a);var c=(c=g.kQ(b,0,1936286840))?c.data.getUint32(c.dataOffset+8):NaN;isNaN(c)&&(a=a.info.j.j,c=(b=g.kQ(b,0,1836476516))?g.lQ(b):a?mQ(a):NaN);return c};
PNa=function(a){return a.info.j.info.Oe()&&160===sO(a.j,0)};
QNa=function(a){if(!a.B){g.$K(a.info.j.info)||a.info.j.info.Oe();if(g.$K(a.info.j.info))var b=g.IMa(eR(a));else{b=new sQ(eR(a));var c=b.pos;b.pos=0;var d=null,e=null;if(uQ(b,[408125543,307544935]))for(var f=b.pos+xQ(b,!0);b.pos<f;)if(29555!==xQ(b,!1))AQ(b);else for(var h=b.pos+xQ(b,!0);b.pos<h;)if(26568!==xQ(b,!1))AQ(b);else for(var l=b.pos+xQ(b,!0);b.pos<l;){var m=xQ(b,!1);if(17543===m){if(m=PMa(b),m=jQ(m))if(e)for(var n=g.v(Object.keys(m)),p=n.next();!p.done;p=n.next())p=p.value,e[p]=m[p];else e=
m}else 17827===m?(m=PMa(b),d||(d=m)):AQ(b)}b.pos=c;b=e?new iQ(e,d):null}a.B=b}};
RNa=function(a){if(g.$K(a.info.j.info))JMa(eR(a),1836019574),JMa(eR(a),1718909296);else{var b=new sQ(eR(a));SMa(b);wQ(b,524531317,!0);a.j=a.j.split(b.start+b.pos).Fm}a.C=!1};
SNa=function(a){if(!a.G){if(g.$K(a.info.j.info)){var b=eR(a);var c=nQ(b,0,1836019574);if(c){c=c.offset+c.size;var d=new Uint8Array(c);d.set(new Uint8Array(b.buffer,b.byteOffset,c));b=d}else b=null}else b=QMa(new sQ(eR(a)));b&&(a.info.j.j=b,a.G=!0)}};
g.TNa=function(){this.count=0;this.j=1;this.B=!1;this.offsets=new Float64Array(128);this.Zh=new Float64Array(128)};
UNa=function(a,b){return b+1<a.count||a.B?a.offsets[b+1]-a.offsets[b]:-1};
VNa=function(a){a.offsets.length<a.count+1&&a.resize(2*a.offsets.length)};
hR=function(a,b,c,d){WQ.call(this,a,b,c,d);var e=this;this.G=null;this.Jd={KD:function(f,h,l,m){return e.KD(f,h,l,m)}};
this.index=new g.TNa};
WNa=function(a,b,c,d,e,f){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d;this.xtags=void 0===e?"":e;this.id=void 0===f?"":f};
YNa=function(a){if(a=a.colorInfo)if(a=a.transferCharacteristics)return XNa[a];return null};
g.iR=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
$Na=function(a){return ZNa(function(b,c){return g.YB(b,c,4,1E3)},a,{format:"RAW",
method:"GET",withCredentials:!0})};
g.aOa=function(a){var b;a.responseType&&"text"!==a.responseType?"arraybuffer"===a.responseType&&(b=vO(new Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0===b.indexOf("https://")?b:""};
ZNa=function(a,b,c){b.match(bOa);return a(b,c).then(function(d){var e=g.aOa(d.xhr);return e?ZNa(a,e,c):d.xhr})};
kR=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.TF.call(this);var d=this;this.sourceUrl=a;this.isLivePlayback=c;this.Xa=this.duration=0;this.isPremiere=this.ge=this.C=this.isLiveHeadPlayable=this.isLive=this.B=!1;this.Zi=this.qf=0;this.isOtf=this.Cc=!1;this.Ka=(0,g.uD)();this.Z=Infinity;this.j={};this.N=new Map;this.state=this.Kg=0;this.timeline=null;this.isManifestless=!1;this.Y=[];this.G=null;this.ma=0;this.D="";this.Aa=NaN;this.Ad=this.Mb=this.kd=this.timestampOffset=
this.K=0;this.Sa=this.Va=this.qa=!1;this.Ha=[];this.Ea={};this.Jd={zhb:function(f){jR(d,f)}};
var e;this.Za=null==(e=b)?void 0:e.ib("html5_use_network_error_code_enums");cOa=!!b&&b.ib("html5_modern_vp9_mime_type")};
cMa=function(a){return g.Yc(a.j,function(b){return!!b.info.video&&b.info.video.isHdr()})};
OP=function(a){return g.Yc(a.j,function(b){return!!b.info.me})};
dOa=function(a){return g.Yc(a.j,function(b){return dL(b.info.mimeType)})};
eOa=function(a){return g.Yc(a.j,function(b){return b.info.video?"EQUIRECTANGULAR"===b.info.video.projectionType:!1})};
fOa=function(a){return g.Yc(a.j,function(b){return b.info.video?"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===b.info.video.projectionType:!1})};
gOa=function(a){return g.Yc(a.j,function(b){return b.info.video?"MESH"===b.info.video.projectionType:!1})};
hOa=function(a){return g.Yc(a.j,function(b){return b.info.video?1===b.info.video.stereoLayout:!1})};
iOa=function(a){return aba(a.j,function(b){return b.info.video?b.LQ():!0})};
LP=function(a){return g.Yc(a.j,function(b){return WP(b.resource.j)})};
jR=function(a,b){a.j[b.info.id]=b;a.N.set(cL(b.info,a.Cc),b)};
jOa=function(a,b){return(b.itag||"")+";"+((a.Cc?0:b.lmt||0)||0)+";"+(b.xtags||"")};
lR=function(a,b,c){c=void 0===c?0:c;var d=a.mimeType||"",e=a.itag;var f=a.xtags;e=e?e.toString():"";f&&(e+=";"+f);f=e;if(FBa(d)){var h=a.width||640;e=a.height||360;var l=a.fps,m=a.qualityLabel,n=a.colorInfo,p=a.projectionType,q;a.stereoLayout&&(q=kOa[a.stereoLayout]);var r=YNa(a)||void 0;if(null==n?0:n.primaries)var t=lOa[n.primaries]||void 0;h=new SK(h,e,l,p,q,void 0,m,r,t);d=mOa(d,h,UK[a.itag||""])}var u;if(EBa(d)){var x=a.audioSampleRate;q=a.audioTrack;x=new QK(x?+x:void 0,a.audioChannels,a.spatialAudioType,
a.isDrc,a.loudnessDb,a.trackAbsoluteLoudnessLkfs);q&&(t=q.displayName,e=q.id,q=q.audioIsDefault,t&&(u=new g.iR(t,e||"",!!q)))}var B;a.captionTrack&&(m=a.captionTrack,q=m.displayName,t=m.vssId,e=m.languageCode,l=m.kind,m=m.id,q&&t&&e&&(B=new WNa(q,t,e,l,a.xtags,m)));q=Number(a.bitrate)/8;t=Number(a.contentLength);e=Number(a.lastModified);m=a.drmFamilies;l=a.type;c=c&&t?t/c:0;a=Number(a.approxDurationMs);if(b&&m){var F={};m=g.v(m);for(n=m.next();!n.done;n=m.next())(n=nOa[n.value])&&(F[n]=b[n])}return new VK(f,
d,{audio:x,video:h,Lc:u,me:F,Rb:q,Yu:c,contentLength:t,lastModified:e,captionTrack:B,streamType:l,approxDurationMs:a})};
oOa=function(a,b,c){c=void 0===c?0:c;var d=a.type;var e=a.itag;var f=a.xtags;f&&(e=a.itag+";"+f);if(FBa(d)){var h=(a.size||"640x360").split("x");h=new SK(+h[0],+h[1],+a.fps,a.projection_type,+a.stereo_layout,void 0,a.quality_label,a.eotf,a.primaries);d=mOa(d,h,UK[a.itag])}var l;if(EBa(d)){var m=new QK(+a.audio_sample_rate||void 0,+a.audio_channels||0,a.spatial_audio_type,!!a.drc);a.name&&(l=new g.iR(a.name,a.audio_track_id,"1"===a.isDefault))}var n;a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&
(n=new WNa(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind,a.xtags,a.caption_id));f=Number(a.bitrate)/8;var p=Number(a.clen),q=Number(a.lmt);c=c&&p?p/c:0;if(b&&a.drm_families){var r={};for(var t=g.v(a.drm_families.split(",")),u=t.next();!u.done;u=t.next())u=u.value,r[u]=b[u]}return new VK(e,d,{audio:m,video:h,Lc:l,me:r,Rb:f,Yu:c,contentLength:p,lastModified:q,captionTrack:n,streamType:a.stream_type,approxDurationMs:Number(a.approx_duration_ms)})};
pOa=function(a){return ks(a,function(b){return"FORMAT_STREAM_TYPE_OTF"===b.stream_type})?"FORMAT_STREAM_TYPE_OTF":"FORMAT_STREAM_TYPE_UNKNOWN"};
qOa=function(a){return ks(a,function(b){return"FORMAT_STREAM_TYPE_OTF"===b.type})?"FORMAT_STREAM_TYPE_OTF":"FORMAT_STREAM_TYPE_UNKNOWN"};
rOa=function(a,b){return a.timeline?Kb(a.timeline.D,b):a.Y.length?Kb(a.Y,b):[]};
mR=function(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;a=new g.TP(a,!0);a.set("alr","yes");c&&(c=zLa(decodeURIComponent(c)),a.set(b,encodeURIComponent(c)));return a};
vOa=function(a,b){var c=YQ(b,"id");c=c.replace(":",";");var d=YQ(b,"mimeType"),e=YQ(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=Number(YQ(b,"bandwidth"))/8;var f=Number(ZQ(b,"BaseURL").getAttribute(a.D+":contentLength")),h=a.duration&&f?f/a.duration:0;if(FBa(d)){var l=Number(YQ(b,"width"));var m=Number(YQ(b,"height")),n=Number(YQ(b,"frameRate")),p=sOa(YQ(b,a.D+":projectionType"));a:switch(YQ(b,a.D+":stereoLayout")){case "layout_left_right":var q=1;break a;case "layout_top_bottom":q=2;break a;default:q=
0}l=new SK(l,m,n,p,q)}if(EBa(d)){var r=Number(YQ(b,"audioSamplingRate"));var t=Number(YQ(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"));m=tOa(YQ(b,a.D+":spatialAudioType"));r=new QK(r,t,m);a:{t=YQ(b,"lang")||"und";if(m=ZQ(b,"Role"))if(p=YQ(m,"value")||"",g.fd(uOa,p)){m=t+"."+uOa[p];n="main"===p;a=YQ(b,a.D+":langName")||t+" - "+p;t=new g.iR(a,m,n);break a}t=void 0}}if(b=ZQ(b,"ContentProtection"))if("http://youtube.com/drm/2012/10/10"===b.getAttribute("schemeIdUri")){var u={};for(b=
b.firstChild;null!=b;b=b.nextSibling)b instanceof Element&&/SystemURL/.test(b.nodeName)&&(a=b.getAttribute("type"),m=b.textContent,a&&m&&(u[a]=m.trim()))}else u=void 0;return new VK(c,d,{audio:r,video:l,Lc:t,me:u,Rb:e,Yu:h,contentLength:f})};
sOa=function(a){switch(a){case "equirectangular":return"EQUIRECTANGULAR";case "equirectangular_threed_top_bottom":return"EQUIRECTANGULAR_THREED_TOP_BOTTOM";case "mesh":return"MESH";case "rectangular":return"RECTANGULAR";default:return"UNKNOWN"}};
tOa=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return"SPATIAL_AUDIO_TYPE_AMBISONICS_5_1";case "spatial_audio_type_ambisonics_quad":return"SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD";case "spatial_audio_type_foa_with_non_diegetic":return"SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC";default:return"SPATIAL_AUDIO_TYPE_NONE"}};
xOa=function(a,b){b=void 0===b?"":b;a.state=1;a.Ka=(0,g.uD)();return $Na(b||a.sourceUrl).then(function(c){if(!a.isDisposed()){a.Kg=c.status;c=c.responseText;var d=new DOMParser;c=oga(d,jma(c)).getElementsByTagName("MPD")[0];a.Z=1E3*xNa(YQ(c,"minimumUpdatePeriod"))||Infinity;b:{if(c.attributes){d=g.v(c.attributes);for(var e=d.next();!e.done;e=d.next())if(e=e.value,"http://youtube.com/yt/2012/10/10"===e.value){d=e.name.split(":")[1];break b}}d=""}a.D=d;a.isLive=Infinity>a.Z&&a.isLivePlayback;a.Xa=Number(YQ(c,
a.D+":earliestMediaSequence"))||0;if(d=Date.parse(yNa(YQ(c,a.D+":mpdResponseTime"))))a.ma=((0,g.uD)()-d)/1E3;a.isLive&&0>=c.getElementsByTagName("SegmentTimeline").length||g.nr(c.getElementsByTagName("Period"),a.qaa,a);a.state=2;a.oa("loaded");wOa(a)}return a}).Ek(function(c){if(c instanceof WB){var d=c.xhr;
a.Kg=d.status}a.state=3;a.oa("loaderror");return Xf(d)})};
yOa=function(a,b,c){return xOa(new kR(a,b,c),a)};
zOa=function(a){return a.isLive&&(0,g.uD)()-a.Ka>=a.Z};
AOa=function(a){a.G&&a.G.stop()};
wOa=function(a){var b=a.Z;isFinite(b)&&(zOa(a)?a.refresh():(b=Math.max(0,a.Ka+b-(0,g.uD)()),a.G||(a.G=new g.Cu(a.refresh,b,a),g.L(a,a.G)),a.G.start(b)))};
BOa=function(a){a=a.j;for(var b in a){var c=a[b].index;if(c.isLoaded())return c.Cd()+1}return 0};
nR=function(a){return a.kd?a.kd-(a.K||a.timestampOffset):0};
oR=function(a){return a.Mb?a.Mb-(a.K||a.timestampOffset):0};
pR=function(a){if(!isNaN(a.Aa))return a.Aa;var b=a.j,c;for(c in b){var d=b[c].index;if(d.isLoaded()&&!dL(b[c].info.mimeType)){b=0;for(c=d.vn();c<=d.Cd();c++)b+=d.getDuration(c);b/=d.Az();b=.5*Math.round(b/.5);10<d.Az()&&(a.Aa=b);return b}if(a.isLive&&(d=b[c],d.Kj))return d.Kj}return NaN};
COa=function(a,b){a=cba(a.j,function(d){return d.index.isLoaded()});
if(!a)return NaN;a=a.index;var c=a.Ph(b);return a.getStartTime(c)===b?b:c<a.Cd()?a.getStartTime(c+1):NaN};
DOa=function(a,b){if(!a.j["0"]){var c=new VK("0","fakesb",{video:new SK(0,0,0,void 0,void 0,"auto")});a.j["0"]=b?new XQ(new g.TP("http://www.youtube.com/videoplayback"),c,"fake"):new hR(new g.TP("http://www.youtube.com/videoplayback"),c,new GQ(0,0),new GQ(0,0))}};
qR=function(a,b,c){for(var d in a.j){var e=dL(a.j[d].info.mimeType)||a.j[d].info.jh();if(c===e){e=a.j[d].index;var f=aR(e,b);0<=f&&e.segments.splice(f,1)}}};
EOa=function(a){for(var b in a.j)dL(a.j[b].info.mimeType)||qMa(a.j[b].index,Infinity)};
FOa=function(a,b,c){for(var d in a.j){var e=a.j[d].index,f=c;e.Ym&&(b&&(e.Kp=Math.max(e.Kp,b)),f&&(e.Uq=Math.max(e.Uq||0,f)))}};
GOa=function(a){a.Mb=0;a.kd=0;a.Ad=0};
HOa=function(a){return a.Va&&a.isManifestless?a.isLiveHeadPlayable:a.isLive};
mOa=function(a,b,c){null===rR&&(rR=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09.00"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99.00"'));if(cOa&&window.MediaSource&&void 0!==MediaSource.isTypeSupported)return rR||"9"!==c&&"("!==c?rR||"9h"!==c&&"(h"!==c||(a='video/webm; codecs="vp9.2"'):a='video/webm; codecs="vp9"',a;if(!rR&&!IOa||'video/webm; codecs="vp9"'!==a&&'video/webm; codecs="vp9.2"'!==
a)return a;c="00";var d="08",e="01",f="01",h="01";'video/webm; codecs="vp9.2"'===a&&(c="02",d="10","bt2020"===b.primaries&&(h=e="09"),"smpte2084"===b.B&&(f="16"),"arib-std-b67"===b.B&&(f="18"));return'video/webm; codecs="'+["vp09",c,"51",d,"01",e,f,h,"00"].join(".")+'"'};
JOa=function(a){this.Ia=a;this.Bc=this.ao=this.Na=this.G=this.D=this.qa=this.Ka=this.Za=this.Aa=!1;this.N=this.K=0;this.ob=!1;this.Ha=!0;this.fb=!1;this.lj=0;this.Ea=!1;this.hc=Infinity;this.BM=!1;this.jd=!0;this.Xa=this.Sa=this.Va=!1;this.j={};this.B=this.Y=!1;this.Zb=this.Ia.L("html5_enable_audio_track_log");this.Mb=!1;this.Fb=this.Ia.experiments.ib("html5_enable_vp9_fairplay");this.md=this.Ia.L("html5_disable_av1_hdr");this.Xd=this.Ia.L("html5_disable_hfr_when_vp9_encrypted_2k4k_unsupported");
this.kd=this.Ia.L("html5_account_onesie_format_selection_during_format_filter");this.Ad=this.Ia.L("html5_prefer_hbr_vp9_over_av1");this.Uf=0;this.disableAv1=this.tb=this.rb=!1;this.Rb=g.tJ(this.Ia.experiments,"html5_max_byterate");this.Z=this.Ia.L("html5_prefer_high_aac_by_default");this.Ob=this.Ia.L("html5_enable_iamf_audio")};
dMa=function(a){if(a.Za)return["f"];var b="9h 9 h 8 (h ( H *".split(" ");a.Ea&&(b.unshift("1"),b.unshift("1h"));a.ao&&b.unshift("h");a.ma&&(b=(KOa[a.ma]||[a.ma]).concat(b));return b};
ZLa=function(a){var b=["o","a","A"];a.Z&&b.unshift("ah");1===a.Uf&&(a.qa&&(b=["m","M"].concat(b)),a.D&&(b=["mac3","MAC3"].concat(b)),a.G&&(b=["meac3","MEAC3"].concat(b)));a.Aa&&(b=["so","sa"].concat(b));!a.Bc||a.Na||a.C||b.unshift("a");!a.Z&&a.Ka&&b.unshift("ah");a.C&&(b=(KOa[a.C]||[a.C]).concat(b));a.Ob&&b.unshift("i");return b};
LOa=function(a,b,c,d){b=void 0===b?{}:b;if(void 0===d?0:d)return b.disabled=1,0;if(RP(a.G,SP.AV1_CODECS)&&RP(a.G,SP.HEIGHT)&&RP(a.G,SP.BITRATE))return b.isCapabilityUsable=1,8192;try{var e=MLa();if(e)return b.localPref=e}catch(l){}a=1080;2>=navigator.hardwareConcurrency&&(a=480);b.coreCount=navigator.hardwareConcurrency;Ioa()&&(b.isArm=1,a=240);if(c){var f,h;if(d=null==(f=c.videoInfos.find(function(l){return XK(l)}))?void 0:null==(h=f.B)?void 0:h.powerEfficient)a=8192,b.isEfficient=1;
c=c.videoInfos[0].video;f=Math.min(CP("1",c.fps),CP("1",30));b.perfCap=f;a=Math.min(a,f);c.isHdr()&&!d&&(b.hdr=1,a*=.75)}else c=CP("1",30),b.perfCap30=c,a=Math.min(a,c),c=CP("1",60),b.perfCap60=c,a=Math.min(a,c);return b.av1Threshold=a};
sR=function(a,b,c,d){this.flavor=a;this.keySystem=b;this.B=c;this.experiments=d;this.j={};this.Xa=this.keySystemAccess=null;this.jy=this.ly=-1;this.Ol=null;this.C=!!d&&d.ib("edge_nonprefixed_eme")};
uR=function(a){return a.C?!1:!a.keySystemAccess&&!!tR()&&"com.microsoft.playready"===a.keySystem};
vR=function(a){return"com.microsoft.playready"===a.keySystem};
wR=function(a){return!a.keySystemAccess&&!!tR()&&"com.apple.fps.1_0"===a.keySystem};
xR=function(a){return"com.youtube.fairplay"===a.keySystem};
yR=function(a){return"com.youtube.fairplay.sbdl"===a.keySystem};
g.zR=function(a){return"fairplay"===a.flavor};
tR=function(){var a=window,b=a.MSMediaKeys;jC()&&!b&&(b=a.WebKitMediaKeys);return b&&b.isTypeSupported?b:null};
MOa=function(a){if(!navigator.requestMediaKeySystemAccess)return!1;if(g.MK&&!g.hC())return fv("45");if(g.KD||g.Ze)return a.ib("edge_nonprefixed_eme");if(g.AR)return fv("47");if(g.oD){if(a.ib("html5_enable_safari_fairplay"))return!1;if(a=g.tJ(a,"html5_safari_desktop_eme_min_version"))return fv(a)}return!0};
OOa=function(a,b,c,d){var e=iC(),f=(c=e||c&&jC())?["com.youtube.fairplay"]:["com.widevine.alpha"];b&&f.unshift("com.youtube.widevine.l3");e&&d&&f.unshift("com.youtube.fairplay.sbdl");return c?f:a?[].concat(g.oa(f),g.oa(NOa.playready)):[].concat(g.oa(NOa.playready),g.oa(f))};
BR=function(a,b,c,d,e){d=void 0===d?!1:d;g.J.call(this);this.Ia=b;this.useCobaltWidevine=d;this.va=e;this.B=[];this.C={};this.j={};this.callback=null;this.G=!1;this.D=[];this.initialize(a,!c)};
ROa=function(a,b){a.callback=b;a.D=[];MOa(a.Ia.experiments)?POa(a):QOa(a)};
POa=function(a){if(!a.isDisposed())if(0===a.B.length)a.callback(a.D);else{var b=a.B[0],c=a.C[b],d=SOa(a,c);if(CR&&CR.keySystem===b&&CR.cba===JSON.stringify(d))a.va("remksa",{re:!0}),TOa(a,c,CR.keySystemAccess);else{var e,f;a.va("remksa",{re:!1,ok:null!=(f=null==(e=CR)?void 0:e.keySystem)?f:""});CR=void 0;(DR.isActive()?DR.Am("emereq",function(){return navigator.requestMediaKeySystemAccess(b,d)}):navigator.requestMediaKeySystemAccess(b,d)).then(YO(function(h){TOa(a,c,h,d)}),YO(function(){a.G=!a.G&&
"widevine"===a.C[a.B[0]].flavor;
a.G||a.B.shift();POa(a)}))}}};
TOa=function(a,b,c,d){if(!a.isDisposed()){d&&(CR={keySystem:b.keySystem,keySystemAccess:c,cba:JSON.stringify(d)});b.keySystemAccess=c;if(vR(b)){c=KK();d=g.v(Object.keys(a.j[b.flavor]));for(var e=d.next();!e.done;e=d.next())e=e.value,b.j[e]=!!c.canPlayType(e)}else{c=b.keySystemAccess.getConfiguration();if(c.audioCapabilities)for(d=g.v(c.audioCapabilities),e=d.next();!e.done;e=d.next())UOa(a,b,e.value);if(c.videoCapabilities)for(c=g.v(c.videoCapabilities),d=c.next();!d.done;d=c.next())UOa(a,b,d.value)}a.D.push(b);
a.useCobaltWidevine||a.L("html5_enable_vp9_fairplay")&&yR(b)?(a.B.shift(),POa(a)):a.callback(a.D)}};
UOa=function(a,b,c){a.L("log_robustness_for_drm")?b.j[c.contentType]=c.robustness||!0:b.j[c.contentType]=!0};
SOa=function(a,b){var c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};if(a.L("html5_enable_vp9_fairplay")&&xR(b))return c.audioCapabilities.push({contentType:'audio/mp4; codecs="mp4a.40.5"'}),c.videoCapabilities.push({contentType:'video/mp4; codecs="avc1.4d400b"'}),[c];vR(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d=g.v(Object.keys(a.j[b.flavor])),e=d.next();!e.done;e=d.next()){e=e.value;var f=0===e.indexOf("audio/"),h=f?c.audioCapabilities:c.videoCapabilities;"widevine"!==
b.flavor||a.G?h.push({contentType:e}):f?h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(g.MK&&g.fC("windows nt")&&!a.L("html5_drm_enable_moho")||h.push({contentType:e,robustness:"HW_SECURE_ALL"}),f=e,a.L("html5_enable_cobalt_experimental_vp9_decoder")&&e.includes("vp09")&&(f=e+"; experimental=allowed"),h.push({contentType:f,robustness:"SW_SECURE_DECODE"}),"MWEB"===g.ER(a.Ia)&&(oC()||gC())&&(a.va("swcrypto",{}),h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"})))}return[c]};
QOa=function(a){if(tR()&&g.oD)a.D.push(new sR("fairplay","com.apple.fps.1_0","",a.Ia.experiments));else{var b=VOa(),c=g.yb(a.B,function(d){var e=a.C[d],f=!1,h=!1,l;for(l in a.j[e.flavor])b(l,d)&&(e.j[l]=!0,f=f||0===l.indexOf("audio/"),h=h||0===l.indexOf("video/"));return f&&h});
c&&a.D.push(a.C[c]);a.B=[]}a.callback(a.D)};
VOa=function(){var a=tR();if(a){var b=a.isTypeSupported;return function(d,e){return b(e,d)}}var c=KK();
return c&&(c.addKey||c.webkitAddKey)?function(d,e){return!!c.canPlayType(d,e)}:function(){return!1}};
WOa=function(a){this.experiments=a;this.Z=g.tJ(this.experiments,"html5_min_progress_event_interval_ms")||50;this.D=0;this.C=this.Z/1E3;this.ma=(this.G=this.experiments.ib("html5_consider_end_stall"))&&FR;this.N=this.experiments.ib("html5_ignore_stall_from_no_data_timeouts");this.K=this.experiments.ib("html5_ignore_stall_from_data_timeouts");this.B=this.experiments.ib("html5_measure_max_progress_handling");this.Y=(this.j=this.experiments.ib("html5_record_ump_timing"))&&this.experiments.ib("html5_use_ump_timing")};
XOa=function(a,b){this.j=void 0;this.experimentIds=a?a.split(","):[];this.flags=FB(b||"","&");a={};b=g.v(this.experimentIds);for(var c=b.next();!c.done;c=b.next())a[c.value]=!0;this.experiments=a};
g.tJ=function(a,b){return Number(a.flags[b])||0};
GR=function(a,b){return(a=a.flags[b])?a.toString():""};
YOa=function(a){if(a=a.flags.html5_web_po_experiment_ids)if(a=a.replace(/\[ *(.*?) *\]/,"$1"))return a.split(",").map(Number);return[]};
ZOa=function(a){if(a.j)return a.j;if(1>=a.experimentIds.length)return a.j=a.experimentIds,a.j;var b=[].concat(g.oa(a.experimentIds)).map(function(d){return Number(d)});
b.sort();for(var c=b.length-1;0<c;--c)b[c]-=b[c-1];a.j=b.map(function(d){return d.toString()});
a.j.unshift("v1");return a.j};
aPa=function(a){return $Oa.then(a)};
bPa=function(a,b,c){this.experiments=a;this.qa=b;this.Aa=void 0===c?!1:c;this.Z=!!g.Ta("cast.receiver.platform.canDisplayType");this.N={};this.Y=!1;this.B=new Map;this.K=!0;this.j=this.C=!1;this.ma=this.experiments.ib("html5_disable_vp9_encrypted");this.D=new Map;a=g.Ta("cast.receiver.platform.getValue");this.G=!this.Z&&a&&a("max-video-resolution-vpx")||null};
hMa=function(a,b,c){c=void 0===c?1:c;var d=b.itag;if("0"===d)return!0;var e=b.mimeType;if(b.Oe()&&iC()&&a.experiments.ib("html5_appletv_disable_vp9"))return"dwebm";if(XK(b)&&a.Y)return"dav1";if(b.video&&(b.video.isHdr()||"bt2020"===b.video.primaries)&&!(RP(a,SP.EOTF)||window.matchMedia&&(window.matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches||24<window.screen.pixelDepth&&window.matchMedia("(color-gamut: p3)").matches)))return"dhdr";if("338"===d&&!(g.MK?fv(53):g.AR&&fv(64)))return"dopus";
var f=c;f=void 0===f?1:f;c={};b.video&&(b.video.width&&(c[SP.WIDTH.name]=b.video.width),b.video.height&&(c[SP.HEIGHT.name]=b.video.height),b.video.fps&&(c[SP.FRAMERATE.name]=b.video.fps*f),b.video.B&&(c[SP.EOTF.name]=b.video.B),b.Rb&&(c[SP.BITRATE.name]=8*b.Rb*f),"("===b.ub&&(c[SP.CRYPTOBLOCKFORMAT.name]="subsample"),"EQUIRECTANGULAR"===b.video.projectionType||"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===b.video.projectionType||"MESH"===b.video.projectionType)&&(c[SP.DECODETOTEXTURE.name]="true");b.audio&&
b.audio.numChannels&&(c[SP.CHANNELS.name]=b.audio.numChannels);a.C&&WK(b)&&(c[SP.EXPERIMENTAL.name]="allowed");f=g.v(Object.keys(SP));for(var h=f.next();!h.done;h=f.next())if(h=SP[h.value],c[h.name]&&!(h===SP.EOTF&&0<b.mimeType.indexOf("vp09.02")||a.experiments.ib("html5_ignore_h264_framerate_cap")&&h===SP.FRAMERATE&&ABa(b)))if(RP(a,h))if(a.G){if(a.G[h.name]<c[h.name])return h.name}else e=e+"; "+h.name+"="+c[h.name];else if(BBa(b)&&h===SP.EOTF)return"dvp92";a.Z&&b.video&&1080<b.video.j&&b.me&&(e+=
"; hdcp=2.2");return"227"===d?"hqcenc":"585"!==d&&"588"!==d&&"583"!==d&&"586"!==d&&"584"!==d&&"587"!==d&&"591"!==d&&"592"!==d||a.experiments.ib("html5_enable_new_hvc_enc")?a.isTypeSupported(e)?!0:"tpus":"newhvc"};
HR=function(){var a=gC()&&!fv(29),b=g.fC("google tv")&&g.fC("chrome")&&!fv(30);return a||b?!1:IBa()};
cPa=function(a,b,c){var d=480;b=g.v(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.video.j;1080>=f&&f>d&&!0===hMa(a,e,c)&&(d=f)}return d};
g.dPa=function(a,b){b=void 0===b?!1:b;return HR()&&a.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')||!b&&a.canPlayType(KK(),"application/x-mpegURL")?!0:!1};
fPa=function(a){ePa(function(){for(var b=g.v(Object.keys(SP)),c=b.next();!c.done;c=b.next())RP(a,SP[c.value])})};
RP=function(a,b){b.name in a.N||(a.N[b.name]=gPa(a,b));return a.N[b.name]};
gPa=function(a,b){if(a.G)return!!a.G[b.name];if(b===SP.BITRATE&&a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000'))return!1;if(b===SP.AV1_CODECS)return a.isTypeSupported("video/mp4; codecs="+b.valid)&&!a.isTypeSupported("video/mp4; codecs="+b.Hn);if(b.video){var c='video/webm; codecs="vp9"';a.isTypeSupported(c)||(c='video/mp4; codecs="avc1.4d401e"')}else c='audio/webm; codecs="opus"',
a.isTypeSupported(c)||(c='audio/mp4; codecs="mp4a.40.2"');return a.isTypeSupported(c+"; "+b.name+"="+b.valid)&&!a.isTypeSupported(c+"; "+b.name+"="+b.Hn)};
hPa=function(a){a.C||(a.C=!0,a.j=!0)};
iPa=function(a,b){var c=0;a.B.has(b)&&(c=a.B.get(b).V5);a.B.set(b,{V5:c+1,d_:Math.pow(2,c+1)});a.j=!0};
aMa=function(a,b,c){var d;c=(null==(d=c.video)?void 0:d.fps)||0;return a.D.has(b+"_"+c)};
bMa=function(a,b,c){var d,e=(null==(d=c.video)?void 0:d.fps)||0;d=b+"_"+e;if(!a.D.has(d)){var f=!!c.audio;b={itag:c.itag,ub:b,zi:f};f?b.numChannels=c.audio.numChannels:(f=c.video,b.maxWidth=null==f?void 0:f.width,b.maxHeight=null==f?void 0:f.height,b.maxFramerate=e,RP(a,SP.BITRATE)&&(b.Aw=8*c.Rb),b.H7=null==f?void 0:f.isHdr());a.D.set(d,b)}};
IR=function(){g.TF.call(this);this.items={}};
JR=function(){g.jO.apply(this,arguments)};
KR=function(){g.kO.apply(this,arguments)};
LR=function(a,b){if(b.buffer!==a.exports.memory.buffer){var c=new Uint8Array(a.exports.memory.buffer,a.exports.malloc(b.byteLength),b.byteLength);c.set(b)}lO.call(this,a,c||b);c&&this.j.exports.free(c.byteOffset)};
jPa=function(a,b,c){this.encryptedClientKey=b;this.G=c;this.j=new Uint8Array(a.buffer,0,16);this.C=new Uint8Array(a.buffer,16)};
kPa=function(a){a.B||(a.B=new JR(a.j));return a.B};
MR=function(a){try{return sg(a)}catch(b){return null}};
lPa=function(a,b){if(!b&&a)try{b=JSON.parse(a)}catch(e){}if(b){a=b.clientKey?MR(b.clientKey):null;var c=b.encryptedClientKey?MR(b.encryptedClientKey):null,d=b.keyExpiresInSeconds?1E3*Number(b.keyExpiresInSeconds)+(0,g.uD)():null;a&&c&&d&&(this.j=new jPa(a,c,d));b.onesieUstreamerConfig&&(this.onesieUstreamerConfig=MR(b.onesieUstreamerConfig)||void 0);this.baseUrl=b.baseUrl}};
NR=function(a){this.j=this.B=0;this.alpha=Math.exp(Math.log(.5)/a)};
OR=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.resolution=b;this.B=0;this.C=!1;this.fm=!0;this.j=Math.round(a*this.resolution);this.values=Array(this.j);for(a=0;a<this.j;a++)this.values[a]=Infinity;this.G=mPa(this);this.D=c;this.K=d};
mPa=function(a){for(var b=Array(a.j),c=0;c<a.j;c++)b[c]=c;return b};
PR=function(a,b){if(!a.C&&0===a.B)return 0;a.fm&&(g.Wb(a.G,function(c,d){return a.values[c]-a.values[d]}),a.fm=!1);
return a.values[a.G[Math.round(b*((a.C?a.j:a.B)-1))]]||0};
nPa=function(a,b,c){g.J.call(this);this.policy=a;this.Ha=b;this.Sd=c;this.K=this.Aa=0;this.G=-1;this.ma=!1;this.Y=this.D=(0,g.uD)();this.Z=new OR(4,1,.6,.4);this.B=new OR(a.ma,1,.5,.4);this.j=a.D?new NR(a.j):new OR(a.j,20,.5,.4);this.N=new OR(5,1,.25);this.C=new OR(30,1,.5);a=g.NC("yt-player-bandwidth")||{};b=this.policy.B;0<a.byterate&&(b=a.byterate,this.ma=!0);this.j.Lk(this.policy.G,b);0<a.delay&&this.Z.Lk(1,Math.min(a.delay,2));0<a.stall&&this.B.Lk(1,a.stall);0<a.init&&(this.Y=Math.min(a.init,
this.Y));this.G=(0,g.uD)();0<this.policy.K&&(this.qa=new g.Cu(this.Ea,this.policy.K,this),g.L(this,this.qa),this.qa.start())};
QR=function(a,b,c,d){a.j.Lk(void 0===d?b:d,c/b);a.D=(0,g.uD)()};
oPa=function(a){a.policy.Z&&(a.D=(0,g.uD)())};
RR=function(a,b){a.Z.Lk(1,b);pPa(a)};
SR=function(a,b,c,d,e){a.N.Lk(b,c/b);a.D=(0,g.uD)();e||a.C.Lk(1,b-d)};
TR=function(a,b,c){b=Math.max(b,2048);a.B.Lk(1,c/b);pPa(a)};
UR=function(a){a=a.Z.Wi();a=isNaN(a)?.5:a;return a=Math.min(a,5)};
qPa=function(a,b,c){isNaN(c)||(a.K+=c);isNaN(b)||(a.Aa+=b)};
rPa=function(a){a=a.j.Wi();return 0<a?a:1};
VR=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?1048576:c;var d=rPa(a);d=1/((a.B.Wi()||0)*a.policy.Y+1/d);var e=a.N.Wi();d=Math.max(d,0<e?e:1);if(!b)return d;b=1E-9+UR(a);c=d*Math.min(1,c/(d*b));a.policy.C||(a=((PR(a.C,.98)||0)-1)/2,a=Math.max(0,Math.min(1,a)),c*=1-.5*a);return c};
sPa=function(a){return{delay:UR(a),stall:a.B.Wi()||0,byterate:rPa(a),init:a.Y}};
tPa=function(a){g.MC("yt-player-bandwidth",sPa(a),2592E3);a.G=(0,g.uD)();a.ma=!0};
pPa=function(a){-1<a.G&&3E4<(0,g.uD)()-a.G&&tPa(a)};
WR=function(a){return 4E3<=(0,g.uD)()-a.D};
uPa=function(a){this.experiments=a;this.j=17;this.ma=g.tJ(this.experiments,"html5_stall_window_size_ct")||10;this.Y=g.tJ(this.experiments,"html5_stall_factor")||1;this.B=13E4;this.G=.5;this.C=this.D=!1;this.K=g.tJ(this.experiments,"html5_check_for_idle_network_interval_ms");this.N=this.experiments.ib("html5_trigger_loader_when_idle_network");this.Z=this.experiments.ib("html5_sabr_fetch_on_idle_network_preloaded_players")};
wPa=function(a,b){a=void 0===a?{}:a;b=void 0===b?{}:b;g.J.call(this);var c=this;this.values=a;this.Rq=b;this.B={};this.C=this.j=0;this.D=new g.Cu(function(){vPa(c)},1E4);
g.L(this,this.D)};
yPa=function(a,b){xPa(a,b);return a.values[b]&&a.Rq[b]?a.values[b]/Math.pow(2,a.j/a.Rq[b]):0};
xPa=function(a,b){a.values[b]||(b=ILa(),a.values=b.values||{},a.Rq=b.halfLives||{},a.B=b.values?Object.assign({},b.values):{})};
vPa=function(a){var b=ILa();if(b.values){b=b.values;for(var c={},d=g.v(Object.keys(a.values)),e=d.next();!e.done;e=d.next())e=e.value,b[e]&&a.B[e]&&(a.values[e]+=b[e]-a.B[e]),c[e]=yPa(a,e);a.B=c}b=a.Rq;c={};c.values=a.B;c.halfLives=b;g.MC("yt-player-memory",c,2592E3)};
LPa=function(a,b,c,d,e){g.J.call(this);this.webPlayerContextConfig=b;this.Nm=d;this.csiServiceName=this.csiPageType="";this.userAge=NaN;this.uj=this.Ke=this.rb=this.rj=this.userDisplayName=this.userDisplayImage=this.Qi="";this.j={};this.controlsType="0";this.jd=NaN;this.tb=!1;this.Tf=(0,g.uD)();this.Ob=0;this.Om=this.Lo=!1;this.Qm=!0;this.preferGapless=this.Gm=this.Sf=this.C=this.Mm=this.Rf=!1;a=a?g.pd(a):{};b&&b.csiPageType&&(this.csiPageType=b.csiPageType);b&&b.csiServiceName&&(this.csiServiceName=
b.csiServiceName);b&&b.preferGapless&&(this.preferGapless=b.preferGapless);this.experiments=new XOa(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:a.fflags);this.forcedExperiments=b?b.serializedForcedExperimentIds:sC("",a.forced_experiments)||void 0;this.cspNonce=(null==b?0:b.cspNonce)?b.cspNonce:sC("",a.csp_nonce);this.L("web_player_deprecated_uvr_killswitch");try{var f=document.location.toString()}catch(P){f=""}this.Re=f;this.ancestorOrigins=(d=window.location.ancestorOrigins)?
Array.from(d):[];this.D=pC(!1,b?b.isEmbed:a.is_embed);b&&b.device?(d=b.device,d.androidOsExperience&&(this.j.caoe=""+d.androidOsExperience),d.brand&&(this.j.cbrand=d.brand),d.browser&&(this.j.cbr=d.browser),d.browserVersion&&(this.j.cbrver=d.browserVersion),d.cobaltReleaseVehicle&&(this.j.ccrv=""+d.cobaltReleaseVehicle),this.j.c=d.interfaceName||"WEB",this.j.cver=d.interfaceVersion||"html5",d.interfaceTheme&&(this.j.ctheme=d.interfaceTheme),this.j.cplayer=d.interfacePlayerType||"UNIPLAYER",d.model&&
(this.j.cmodel=d.model),d.network&&(this.j.cnetwork=d.network),d.os&&(this.j.cos=d.os),d.osVersion&&(this.j.cosver=d.osVersion),d.platform&&(this.j.cplatform=d.platform)):(this.j.c=a.c||"web",this.j.cver=a.cver||"html5",this.j.cplayer="UNIPLAYER");this.loaderUrl=b?this.D||zPa(this)&&b.loaderUrl?b.loaderUrl||"":this.Re:this.D||zPa(this)&&a.loaderUrl?sC("",a.loaderUrl):this.Re;this.D&&g.Sa("yt.embedded_player.embed_url",this.loaderUrl);this.K=UJ(this.loaderUrl,APa);d=this.loaderUrl;var h=void 0===h?
!1:h;this.Vo=TJ(UJ(d,BPa),d,h,"Trusted Ad Domain URL");this.Bc=pC(!1,a.privembed);this.protocol=0===this.Re.indexOf("http:")?"http":"https";this.Ea=Nza((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||Nza(this.Re)||this.protocol+"://www.youtube.com/";h=b?b.eventLabel:a.el;d="detailpage";"adunit"===h?d=this.D?"embedded":"detailpage":"embedded"===h||this.K?d=qC(d,h,CPa):h&&(d="embedded");this.Sa=d;Ksa();h=null;d=b?b.playerStyle:a.ps;f=g.Bb(DPa,d);!d||f&&!this.K||(h=d);this.playerStyle=h;this.qa=(this.N=
g.Bb(DPa,this.playerStyle))&&"play"!==this.playerStyle&&"jamboard"!==this.playerStyle;this.Uo=!this.qa;this.Na=pC(!1,a.disableplaybackui);this.disablePaidContentOverlay=pC(!1,null==b?void 0:b.disablePaidContentOverlay);this.disableSeek=pC(!1,null==b?void 0:b.disableSeek);this.enableSpeedOptions=(this.L("enable_magma_variable_speed_playback_wpcc")?null==b?void 0:b.enableSpeedOptions:this.L("variable_playback_rate"))||(KK().defaultPlaybackRate?YR||g.nC||ZR?g.AR&&fv("20")||g.MK&&fv("4")||g.$R&&fv("11")||
Moa():!(g.$R&&!g.fC("chrome")||YR||g.fC("android")||g.fC("silk")):!1);this.Po=pC(!1,a.enable_faster_speeds);this.B=pC("blazer"===this.playerStyle,a.is_html5_mobile_device||b&&b.isMobileDevice);this.fb=mC()||oC();this.To=this.L("mweb_allow_background_playback")?!1:this.B&&!this.N;this.Va=xBa();this.bp=g.EPa;var l;this.Pm=!!(null==b?0:null==(l=b.embedsHostFlags)?0:l.optOutApiDeprecation);var m;this.Im=!!(null==b?0:null==(m=b.embedsHostFlags)?0:m.allowPfpImaIntegration);this.Ro=this.L("embeds_web_enable_ve_conversion_logging_tracking_no_allow_list");
var n;b?void 0!==b.hideInfo&&(n=!b.hideInfo):n=a.showinfo;this.Pl=g.aS(this)&&!this.Pm||pC(!bS(this)&&!cS(this)&&!this.N,n);this.Kl=b?!!b.mobileIphoneSupportsInlinePlayback:pC(!1,a.playsinline);l=this.B&&FPa&&null!=dS&&0<dS&&2.3>=dS;m=b?b.useNativeControls:a.use_native_controls;this.Z=g.aS(this)&&this.B;n=this.B&&!this.Z;m=g.eS(this)||!l&&pC(n,m)?"3":"1";n=b?b.controlsType:a.controls;this.controlsType="0"!==n&&0!==n?m:"0";this.Pi=this.B;this.color=qC("red",b?b.progressBarColor:a.color,GPa);m=this.L("embeds_web_enable_modestbranding_deprecation")?
!1:pC(!1,(null==b?0:b.embedsHostFlags)?b.embedsHostFlags.allowModestbranding:a.modestbranding);this.Yo="3"===this.controlsType||m&&"red"===this.color;this.hc=!this.D;this.Ql=(m=!this.hc&&!cS(this)&&!this.qa&&!this.N&&!bS(this))&&!this.Yo&&"1"===this.controlsType;this.le=g.fS(this)&&m&&"0"===this.controlsType&&!this.Ql;this.Op=this.Zo=l;this.md=("3"===this.controlsType||this.B||pC(!1,a.use_media_volume))&&!this.Z;this.Rm=kC&&!g.Oc(601)?!1:!0;this.So=this.D||!1;this.kd=cS(this)?"":(this.loaderUrl||
a.post_message_origin||"").substring(0,128);this.widgetReferrer=sC("",b?b.widgetReferrer:a.widget_referrer);var p;b?b.disableCastApi&&(p=!1):p=a.enablecastapi;p=!this.K||pC(!0,p);l=!0;b&&b.disableMdxCast&&(l=!1);this.xj=this.L("enable_cast_for_web_unplugged")&&g.gS(this)&&l||this.L("enable_cast_on_music_web")&&g.ZG(this)&&l||p&&l&&"1"===this.controlsType&&!this.B&&(cS(this)||g.fS(this)||g.hS(this))&&!g.iS(this);this.Jp=!!window.document.pictureInPictureEnabled||wBa();p=b?!!b.supportsAutoplayOverride:
pC(!1,a.autoplayoverride);this.Yg=!(this.B&&!g.aS(this))&&!g.fC("nintendo wiiu")||p;p=b?!!b.enableMutedAutoplay:pC(!1,a.mutedautoplay);this.Mo=this.L("embeds_enable_muted_autoplay")&&g.aS(this);this.Zg=p&&!1;p=(cS(this)||bS(this))&&"blazer"===this.playerStyle;this.jk=b?!!b.disableFullscreen:!pC(!0,a.fs);l=g.uC(g.jS(this))&&g.aS(this);this.Fb=!this.jk&&(p||g.yC())&&!l;this.Bm=this.L("uniplayer_block_pip")&&(gC()&&fv(58)&&!oC()||JD);p=g.aS(this)&&!this.Pm;var q;b?void 0!==b.disableRelatedVideos&&(q=
!b.disableRelatedVideos):q=a.rel;this.Ad=p||pC(!this.N,q);this.Ol=pC(!1,b?b.enableContentOwnerRelatedVideos:a.co_rel);this.Y=oC()&&0<dS&&4.4>=dS?"_top":"_blank";this.Wf=g.hS(this);this.Al=pC("blazer"===this.playerStyle,b?b.enableCsiLogging:a.enablecsi);switch(this.playerStyle){case "blogger":q="bl";break;case "gmail":q="gm";break;case "gac":q="ga";break;case "books":q="gb";break;case "docs":q="gd";break;case "duo":q="gu";break;case "google-live":q="gl";break;case "google-one":q="go";break;case "play":q=
"gp";break;case "chat":q="hc";break;case "hangouts-meet":q="hm";break;case "photos-edu":case "picasaweb":q="pw";break;default:q="yt"}this.Aa=q;this.ma=sC("",b?b.authorizedUserIndex:a.authuser);this.Zb=g.aS(this)&&(this.Bc||!Coa()||this.fb);var r;b?void 0!==b.disableWatchLater&&(r=!b.disableWatchLater):r=a.showwatchlater;this.Xd=((q=!this.Zb)||!!this.ma&&q)&&pC(!this.qa,this.K?r:void 0);this.Le=b?b.isMobileDevice||!!b.disableKeyboardControls:pC(!1,a.disablekb);this.loop=pC(!1,a.loop);this.pageId=sC("",
b?b.initialDelegatedSessionId:a.pageid);this.tp=pC(!0,a.canplaylive);this.ob=pC(!1,a.livemonitor);this.disableSharing=pC(this.N,b?b.disableSharing:a.ss);(r=b&&this.L("fill_video_container_size_override_from_wpcc")?b.videoContainerOverride:a.video_container_override)?(q=r.split("x"),2!==q.length?r=null:(r=Number(q[0]),q=Number(q[1]),r=isNaN(r)||isNaN(q)||0>=r*q?null:new g.se(r,q))):r=null;this.Sm=r;this.mute=b?!!b.startMuted:pC(!1,a.mute);this.storeUserVolume=!this.mute&&pC("0"!==this.controlsType,
b?b.storeUserVolume:a.store_user_volume);r=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"===this.controlsType?3:qC(void 0,r,kS);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":sC("",a.cc_lang_pref);r=qC(2,b?b.captionsLanguageLoadPolicy:a.cc_load_policy,kS);"3"===this.controlsType&&2===r&&(r=3);this.Mb=r;this.nj=b?b.hl||"en_US":sC("en_US",a.hl);this.region=b?b.contentRegion||"US":sC("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":sC("en",a.host_language);
this.No=!this.Bc&&Math.random()<g.tJ(this.experiments,"web_player_api_logging_fraction");this.Za=!this.Bc;this.enabledEngageTypes=new Set;this.deviceIsAudioOnly=!(null==b||!b.deviceIsAudioOnly);this.jd=rC(this.jd,a.ismb);this.Uo?(r=a.vss_host||"s.youtube.com","s.youtube.com"===r&&(r=HPa(this.Ea)||"www.youtube.com")):r="video.google.com";this.Tm=r;IPa(this,a,!0);this.Ka=new IR;g.L(this,this.Ka);q=b?b.innertubeApiKey:sC("",a.innertube_api_key);p=b?b.innertubeApiVersion:sC("",a.innertube_api_version);
r=b?b.innertubeContextClientVersion:sC("",a.innertube_context_client_version);q=g.xB("INNERTUBE_API_KEY")||q;p=g.xB("INNERTUBE_API_VERSION")||p;l=g.xB("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO");m=g.ER(this);n="number"===typeof this.j.c?Number(this.j.c):Object.keys(EIa).indexOf(this.j.c);this.ll={innertubeApiKey:q,innertubeApiVersion:p,BI:l,LO:m,yX:n,innertubeContextClientVersion:g.xB("INNERTUBE_CONTEXT_CLIENT_VERSION")||r,NO:this.hostLanguage,MO:this.region,zX:g.xB("INNERTUBE_HOST_OVERRIDE")||"",AX:!!g.xB("INNERTUBE_USE_THIRD_PARTY_AUTH",
!1),OO:!!g.xB("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1)};this.Ml=null!=window.WebKitPlaybackTargetAvailabilityEvent;this.G=new bPa(this.experiments,this.L("html5_force_hfr_support")?!0:DJ(this)||Joa()||Koa()||JPa(this),g.MK&&g.Oc(56)||g.AR&&g.Oc(54)||this.L("html5_force_vp9_subsample_encryption_support")||JPa(this));r=this.jd;q=new uPa(this.experiments);g.EJ(this)&&(q.D=!0,q.G=.1);r&&(q.B=r/8);q.C=480<=AP();this.schedule=new nPa(q,new WOa(this.experiments),e);g.L(this,this.schedule);
var t;this.enableSafetyMode=null!=(t=null==b?void 0:b.initialEnableSafetyMode)?t:pC(!1,a.enable_safety_mode);e=this.Na?!1:cS(this)&&"blazer"!==this.playerStyle;var u;b?null!=b.disableAutonav&&(u=!b.disableAutonav):u=a.allow_autonav;this.Je=pC(e,!this.qa&&u);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:pC(!1,a.send_visitor_id_header);var x;"docs"===this.playerStyle&&(b?x=b.disableNativeContextMenu:x=a.disable_native_context_menu);this.disableNativeContextMenu=pC(!1,x);this.Qo=DJ(this)&&this.L("enable_skip_intro_button");
this.embedConfig=sC("",b?b.serializedEmbedConfig:a.embed_config);this.Ha=Soa(a,g.aS(this));this.C="EMBEDDED_PLAYER_MODE_PFL"===this.Ha;this.embedsErrorLinks=!(null==b||!b.embedsErrorLinks);this.bl=pC(!1,a.full_window);this.Vf=!g.gS(this)&&!lS(this)&&!g.iS(this)&&!0;var B;this.livingRoomAppMode=qC("LIVING_ROOM_APP_MODE_UNSPECIFIED",a.living_room_app_mode||(null==b?void 0:null==(B=b.device)?void 0:B.livingRoomAppMode),KPa);var F;u=rC(NaN,null==b?void 0:null==(F=b.device)?void 0:F.deviceYear);isNaN(u)||
(this.deviceYear=u);this.transparentBackground=b?!!b.transparentBackground:pC(!1,a.transparent_background);this.showMiniplayerButton=b?!!b.showMiniplayerButton:pC(!1,a.show_miniplayer_button);var G;this.L("embeds_web_enable_set_faux_fullscreen_in_public_api")&&g.aS(this)&&!(null==b?0:null==(G=b.embedsHostFlags)?0:G.allowSetFauxFullscreen)?this.externalFullscreen=!1:this.externalFullscreen=b?!!b.externalFullscreen:pC(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:
pC(!1,a.use_miniplayer_ui);this.showInlinePreviewUi=b?!!b.showInlinePreviewUi:!1;this.Nl=pC(!1,a.showbackbutton);var H;this.Qm=null!=(H=a.show_loop_video_toggle)?H:!0;this.Xo=1E-4>Math.random();this.zl=a.onesie_hot_config||(null==b?0:b.onesieHotConfig)?new lPa(a.onesie_hot_config,null==b?void 0:b.onesieHotConfig):void 0;this.isTectonic=b?!!b.isTectonic:!!a.isTectonic;this.playerCanaryState=c;this.playerCanaryStage=null==b?void 0:b.canaryStage;this.Ef=new wPa;g.L(this,this.Ef);this.Mm=pC(!1,a.force_gvi);
this.datasyncId=(null==b?void 0:b.datasyncId)||g.xB("DATASYNC_ID");this.Wo=g.xB("LOGGED_IN",!1);this.tj=(null==b?void 0:b.allowWoffleManagement)||!1;this.Ll=Infinity;this.livingRoomPoTokenId=null==b?void 0:b.livingRoomPoTokenId;this.L("html5_high_res_logging_always")?this.Sf=!0:this.Sf=100*Math.random()<g.tJ(this.experiments,"html5_high_res_logging_percent");var O;this.Gm=!!(null==b?0:null==(O=b.embedsHostFlags)?0:O.allowRcat)};
g.jS=function(a){var b,c;if(!(null==(b=a.webPlayerContextConfig)?0:null==(c=b.embedsHostFlags)?0:c.enableLiteUx)||a.Bc||a.N||a.C||"EMBEDDED_PLAYER_MODE_PFP"===a.Ha)return"EMBEDDED_PLAYER_LITE_MODE_NONE";a=g.tJ(a.experiments,"embeds_web_lite_mode");return void 0===a?"EMBEDDED_PLAYER_LITE_MODE_UNKNOWN":0<=a&&a<MPa.length?MPa[a]:"EMBEDDED_PLAYER_LITE_MODE_UNKNOWN"};
IPa=function(a,b,c){c=void 0===c?!1:c;a.Ke=sC(a.Ke,b.video_id);a.rb=sC(a.rb,b.eventid);a.rb&&(IE=a.rb);for(var d=[],e=g.v(Object.keys(NPa)),f=e.next();!f.done;f=e.next()){f=NPa[f.value];var h=b[f];null!=h&&(h!==a.j[f]&&d.push(f),a.j[f]=h)}!c&&0<d.length&&a.Xo&&(d.sort(),g.AF(new g.UC("Player client parameters changed after startup",d)));a.userAge=rC(a.userAge,b.user_age);a.Qi=sC(a.Qi,b.user_display_email);a.userDisplayImage=sC(a.userDisplayImage,b.user_display_image);g.WJ(a.userDisplayImage)||(a.userDisplayImage=
"");a.userDisplayName=sC(a.userDisplayName,b.user_display_name);a.rj=sC(a.rj,b.user_gender);a.csiPageType=sC(a.csiPageType,b.csi_page_type);a.csiServiceName=sC(a.csiServiceName,b.csi_service_name);a.Al=pC(a.Al,b.enablecsi);a.pageId=sC(a.pageId,b.pageid);if(c=b.enabled_engage_types)a.enabledEngageTypes=new Set(c.split(","));b.living_room_session_po_token&&(a.Uf=b.living_room_session_po_token.toString())};
OPa=function(a,b){return!a.N&&gC()&&fv(55)&&"3"===a.controlsType&&!b};
g.mS=function(a){a=HPa(a.Ea);return"www.youtube-nocookie.com"===a?"www.youtube.com":a};
g.nS=function(a){return g.iS(a)?"music.youtube.com":g.mS(a)};
oS=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
pS=function(a){return cS(a)&&!g.gS(a)};
g.eS=function(a){return a.L("html5_local_playsinline")?kC&&!g.Oc(602)&&!("playsInline"in KK()):kC&&!a.Kl||g.fC("nintendo wiiu")?!0:!1};
g.iS=function(a){return"music-embed"===a.playerStyle};
g.ER=function(a){return a.j.c};
g.EJ=function(a){return/^TVHTML5/.test(g.ER(a))?!0:"TV"===a.j.cplatform};
zPa=function(a){return"TVHTML5_SIMPLY_EMBEDDED_PLAYER"===g.ER(a)};
JPa=function(a){return"CHROMECAST ULTRA/STEAK"===a.j.cmodel||"CHROMECAST/STEAK"===a.j.cmodel};
g.qS=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
DJ=function(a){return/web/i.test(g.ER(a))};
g.rS=function(a){return"WEB"===g.ER(a).toUpperCase()};
lS=function(a){return"WEB_KIDS"===g.ER(a)};
g.gS=function(a){return"WEB_UNPLUGGED"===g.ER(a)};
sS=function(a){return"TVHTML5_UNPLUGGED"===g.ER(a)};
g.CJ=function(a){return g.gS(a)||"TV_UNPLUGGED_CAST"===g.ER(a)||sS(a)};
g.ZG=function(a){return"WEB_REMIX"===g.ER(a)};
g.tS=function(a){return"WEB_EMBEDDED_PLAYER"===g.ER(a)};
g.vS=function(a){return(a.deviceIsAudioOnly||!g.MK||JD||"3"===a.controlsType?!1:g.nC?a.D&&g.Oc(51):!0)||(a.deviceIsAudioOnly||!g.AR||JD||"3"===a.controlsType?!1:g.nC?a.D&&g.Oc(48):g.Oc(38))||(a.deviceIsAudioOnly||!g.$R||JD||"3"===a.controlsType?!1:g.nC?a.D&&g.Oc(37):g.Oc(27))||!a.deviceIsAudioOnly&&g.uS&&!Noa()&&g.Oc(11)||!a.deviceIsAudioOnly&&g.oD&&g.Oc("604.4")};
PPa=function(a){if(g.fS(a)&&FPa)return!1;if(g.AR){if(!g.Oc(47)||!g.Oc(52)&&g.Oc(51))return!1}else if(g.oD)return!1;return window.AudioContext||window.webkitAudioContext?!0:!1};
wS=function(a){return!a.L("html5_disable_media_element_loop_on_tv")||!g.EJ(a)};
RPa=function(a,b){return a.enabledEngageTypes.has(b.toString())||QPa.includes(b)};
cS=function(a){return"detailpage"===a.Sa};
g.fS=function(a){return"embedded"===a.Sa};
xS=function(a){return"leanback"===a.Sa};
bS=function(a){return"adunit"===a.Sa||"gvn"===a.playerStyle};
g.hS=function(a){return"profilepage"===a.Sa};
g.aS=function(a){return a.D&&g.fS(a)&&!bS(a)&&!a.N};
SPa=function(a){if(!a.userDisplayImage)return"";var b=a.userDisplayImage.split("/");if(5===b.length)return a=b[b.length-1].split("="),a[1]="s20-c",b[b.length-1]=a.join("="),b.join("/");if(8===b.length)return b.splice(7,0,"s20-c"),b.join("/");if(9===b.length)return b[7]+="-s20-c",b.join("/");g.AF(new g.UC("Profile image not a FIFE URL.",a.userDisplayImage));return a.userDisplayImage};
g.yS=function(a){var b=g.nS(a);TPa.includes(b)&&(b="www.youtube.com");return a.protocol+"://"+b};
g.zS=function(a,b){b=void 0===b?"":b;if(a.L("enable_tectonic_player_oauth_callback")&&a.Nm){var c=new zL,d,e=a.Nm();e.signedOut?d="":e.token?d=e.token:e.pendingResult.then(function(f){e.signedOut?c.resolve(""):c.resolve(f.token)},function(f){g.AF(new g.UC("b189348328_oauth_callback_failed",{error:f}));
c.resolve(b)});
return void 0!==d?aC(d):new ZB(c)}return aC(b)};
HPa=function(a){var b=g.Hl(a);return(a=Number(g.Gl(4,a))||null)?b+":"+a:b};
AS=function(a){this.j=a};
BS=function(a,b,c,d){if(c)return $B();c={};var e=KK();b=g.v(b);for(var f=b.next();!f.done;f=b.next())if(f=f.value,a.canPlayType(e,f.uh().mimeType)||d){var h=f.j.video.quality;if(!c[h]||c[h].uh().Oe())c[h]=f}a=[];c.auto&&a.push(c.auto);d=g.v(TK);for(e=d.next();!e.done;e=d.next())e=c[e.value],!e||UPa&&a.length&&/3gpp/.test(e.uh().mimeType)||a.push(e);return a.length?aC(a):$B()};
VPa=function(a,b,c,d,e){this.C=a;this.B=b;this.G=c;this.cpn=d;this.K=e;this.D=0;this.j=""};
WPa=function(a,b){a.C.some(function(c){var d;return(null==(d=c.Lc)?void 0:d.getId())===b});
a.j=b};
XPa=function(a,b,c){a.cpn&&(b=g.Nl(b,{cpn:a.cpn}));c&&(b=g.Nl(b,{Gjb:c}));return b};
YPa=function(a,b){a=a.itag.toString();null!==b&&(a+=b.itag.toString());return a};
ZPa=function(a){for(var b=[],c=[],d=g.v(a.B),e=d.next();!e.done;e=d.next())e=e.value,e.bitrate<=a.D?b.push(e):c.push(e);b.sort(function(f,h){return h.bitrate-f.bitrate});
c.sort(function(f,h){return f.bitrate-h.bitrate});
a.B=b.concat(c)};
$Pa=function(a){this.itag=a.itag;this.url=a.url;this.codecs=a.codecs;this.width=a.width;this.height=a.height;this.fps=a.fps;this.bitrate=a.bitrate;var b;this.B=(null==(b=a.audioItag)?void 0:b.split(","))||[];this.RB=a.RB;this.me=a.me||"";this.Lc=a.Lc;this.audioChannels=a.audioChannels;this.j=""};
aQa=function(a,b,c,d){b=void 0===b?!1:b;c=void 0===c?!0:c;d=void 0===d?{}:d;var e={};a=g.v(a);for(var f=a.next();!f.done;f=a.next()){f=f.value;if(b&&MediaSource&&MediaSource.isTypeSupported){var h=f.type;f.audio_channels&&(h=h+"; channels="+f.audio_channels);if(!MediaSource.isTypeSupported(h)){d[f.itag]="tpus";continue}}if(c||!f.drm_families||"smpte2084"!==f.eotf&&"arib-std-b67"!==f.eotf){h=void 0;var l={bt709:"SDR",bt2020:"SDR",smpte2084:"PQ","arib-std-b67":"HLG"},m=f.type.match(/codecs="([^"]*)"/);
m=m?m[1]:"";f.audio_track_id&&(h=new g.iR(f.name,f.audio_track_id,!!f.is_default));var n=f.eotf;f=new $Pa({itag:f.itag,url:f.url,codecs:m,width:Number(f.width),height:Number(f.height),fps:Number(f.fps),bitrate:Number(f.bitrate),audioItag:f.audio_itag,RB:n?l[n]:void 0,me:f.drm_families,Lc:h,audioChannels:Number(f.audio_channels)});e[f.itag]=e[f.itag]||[];e[f.itag].push(f)}else d[f.itag]="enchdr"}return e};
CS=function(a,b,c){this.j=a;this.B=b;this.expiration=c;this.resource=null};
bQa=function(a,b){if(!(JD||jC()||iC()))return null;a=aQa(b,a.L("html5_filter_fmp4_in_hls"));if(!a)return null;b=[];for(var c={},d=g.v(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.v(a[e.value]);for(var f=e.next();!f.done;f=e.next()){var h=f.value;h.Lc&&(f=h.Lc.getId(),c[f]||(h=new g.DP(f,h.Lc),c[f]=h,b.push(h)))}}return 0<b.length?b:null};
gQa=function(a,b,c,d,e,f,h){if(!(JD||jC()||iC()))return $B();var l={},m=cQa(c),n=aQa(c,a.L("html5_filter_fmp4_in_hls"),a.G.K,l);if(!n)return h({noplst:1}),$B();dQa(n);c={};var p=(c.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",c),q;c=[];var r=[],t=[],u=null,x="";d=d&&d.match(/hls_timedtext_playlist/)?new $Pa({itag:"0",url:d,codecs:"vtt",width:0,height:0,fps:0,bitrate:0,Lc:new g.iR("English","en",!1)}):null;for(var B=g.v(Object.keys(n)),F=B.next();!F.done;F=B.next())if(F=F.value,!a.L("html5_disable_drm_hfr_1080")||
"383"!==F&&"373"!==F){F=g.v(n[F]);for(var G=F.next();!G.done;G=F.next())if(G=G.value,G.width){for(var H=g.v(G.B),O=H.next();!O.done;O=H.next())if(O=O.value,n[O]){G.j=O;break}G.j||(G.j=eQa(n,G));if(H=n[G.j])if(c.push(G),"fairplay"===G.me&&(q=p),O="","PQ"===G.RB?O="smpte2084":"HLG"===G.RB&&(O="arib-std-b67"),O&&(x=O),t.push(fQa(H,[G],d,f,G.itag,G.width,G.height,G.fps,m,void 0,void 0,q,O)),!u||G.width*G.height*G.fps>u.width*u.height*u.fps)u=G}else r.push(G)}else l[F]="disdrmhfr";t.reduce(function(P,
Y){return Y.uh().isEncrypted()&&P},!0)&&(q=p);
e=Math.max(e,0);p=u||{};n=void 0===p.fps?0:p.fps;u=void 0===p.width?0:p.width;p=void 0===p.height?0:p.height;B=a.L("html5_native_audio_track_switching");t.push(fQa(r,c,d,f,"93",u,p,n,m,"auto",e,q,x,B));Object.entries(l).length&&h(l);return BS(a.G,t,OPa(a,b),!1)};
fQa=function(a,b,c,d,e,f,h,l,m,n,p,q,r,t){for(var u=0,x="",B=g.v(a),F=B.next();!F.done;F=B.next())F=F.value,x||(x=F.itag),F.audioChannels&&F.audioChannels>u&&(u=F.audioChannels,x=F.itag);e=new VK(e,"application/x-mpegURL",{audio:new QK(0,u),video:new SK(f,h,l,null,void 0,n,void 0,r),me:q,xY:x});a=new VPa(a,b,c?[c]:[],d,!!t);a.D=p?p:1369843;return new CS(e,a,m)};
cQa=function(a){a=g.v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.url&&(b=b.url.split("expire/"),!(1>=b.length)))return+b[1].split("/")[0];return NaN};
eQa=function(a,b){for(var c=g.v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d][0];if(!e.width&&e.me===b.me&&!e.audioChannels)return d}return""};
dQa=function(a){for(var b=new Set,c=g.v(Object.values(a)),d=c.next();!d.done;d=c.next())d=d.value,d.length&&(d=d[0],d.height&&d.codecs.startsWith("vp09")&&b.add(d.height));c=[];if(b.size){d=g.v(Object.keys(a));for(var e=d.next();!e.done;e=d.next())if(e=e.value,a[e].length){var f=a[e][0];f.height&&b.has(f.height)&&!f.codecs.startsWith("vp09")&&c.push(e)}}b=g.v(c);for(e=b.next();!e.done;e=b.next())delete a[e.value]};
DS=function(a,b){this.j=a;this.B=b};
hQa=function(a,b,c,d){var e=[];c=g.v(c);for(var f=c.next();!f.done;f=c.next()){var h=f.value;if(h.url){f=new g.TP(h.url,!0);if(h.s){var l=h.sp,m=zLa(decodeURIComponent(h.s));f.set(l,encodeURIComponent(m))}l=g.v(Object.keys(d));for(m=l.next();!m.done;m=l.next())m=m.value,f.set(m,d[m]);h=eL(h.type,h.quality,h.itag,h.width,h.height);e.push(new DS(h,f))}}return BS(a.G,e,OPa(a,b),!1)};
ES=function(a,b){this.j=a;this.B=b};
iQa=function(a,b,c){var d=[];c=g.v(c);for(var e=c.next();!e.done;e=c.next())if((e=e.value)&&e.url){var f=eL(e.type,"medium","0");d.push(new ES(f,e.url))}return BS(a.G,d,OPa(a,b),!1)};
jQa=function(a,b){var c=[],d=eL(b.type,"auto",b.itag);c.push(new ES(d,b.url));return BS(a.G,c,!1,!0)};
lQa=function(a){return a&&kQa[a]?kQa[a]:null};
mQa=function(a){if(a=a.commonConfig)this.url=a.url,this.urlQueryOverride=a.urlQueryOverride,a.ustreamerConfig&&(this.Fo=MR(a.ustreamerConfig)||void 0)};
nQa=function(a,b){var c;if(b=null==b?void 0:null==(c=b.watchEndpointSupportedOnesieConfig)?void 0:c.html5PlaybackOnesieConfig)a.uZ=new mQa(b)};
g.FS=function(a){a=void 0===a?{}:a;this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=void 0===a.name?null:a.name;this.displayName=a.displayName||null;this.id=a.id||null;this.j=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null;this.xtags=a.xtags||"";this.captionId=a.captionId||""};
g.HS=function(a){var b={languageCode:a.languageCode,languageName:a.languageName,displayName:g.GS(a),kind:a.kind,name:a.name,id:a.id,is_servable:a.j,is_default:a.isDefault,is_translateable:a.isTranslateable,vss_id:a.vssId};a.xtags&&(b.xtags=a.xtags);a.captionId&&(b.captionId=a.captionId);a.translationLanguage&&(b.translationLanguage=a.translationLanguage);return b};
g.IS=function(a){return a.translationLanguage?a.translationLanguage.languageCode:a.languageCode};
g.oQa=function(a){var b=a.vssId;a.translationLanguage&&b&&(b="t"+b+"."+g.IS(a));return b};
g.GS=function(a){var b=[];if(a.displayName)b.push(a.displayName);else{var c=a.languageName||"";b.push(c);"asr"===a.kind&&-1===c.indexOf("(")&&b.push(" (Automatic Captions)");a.name&&b.push(" - "+a.name)}a.translationLanguage&&b.push(" >> "+a.translationLanguage.languageName);return b.join("")};
sQa=function(a,b,c,d){a||(a=b&&pQa.hasOwnProperty(b)&&qQa.hasOwnProperty(b)?qQa[b]+"_"+pQa[b]:void 0);b=a;if(!b)return null;a=b.match(rQa);if(!a||5!==a.length)return null;if(a=b.match(rQa)){var e=Number(a[3]),f=[7,8,10,5,6];a=!(1===Number(a[1])&&8===e)&&0<=f.indexOf(e)}else a=!1;return c||d||a?b:null};
JS=function(a,b){for(var c={},d=g.v(Object.keys(tQa)),e=d.next();!e.done;e=d.next()){e=e.value;var f=b?b+e:e;f=a[f+"_webp"]||a[f];g.WJ(f)&&(c[tQa[e]]=f)}return c};
KS=function(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(l){return!!l.url});
a.sort(function(l,m){return l.width-m.width||l.height-m.height});
for(var c=g.v(Object.keys(uQa)),d=c.next();!d.done;d=c.next()){var e=Number(d.value);d=uQa[e];for(var f=g.v(a),h=f.next();!h.done;h=f.next())if(h=h.value,h.width>=e){e=vQa(h.url);g.WJ(e)&&(b[d]=e);break}}(a=a.pop())&&1280<=a.width&&(a=vQa(a.url),g.WJ(a)&&(b["maxresdefault.jpg"]=a));return b};
vQa=function(a){return a.startsWith("//")?"https:"+a:a};
LS=function(a){return a&&a.baseUrl||""};
MS=function(a){a=g.IB(a);for(var b=g.v(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=a[c];a[c]=Array.isArray(d)?d[0]:d}return a};
wQa=function(a,b){a.botguardData=b.playerAttestationRenderer.botguardData;b=b.playerAttestationRenderer.challenge;null!=b&&(a.Ok=b)};
zQa=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=c.interstitials.map(function(h){var l=g.S(h,xQa);if(l)return{is_yto_interstitial:!0,raw_player_response:l};if(h=g.S(h,yQa))return Object.assign({is_yto_interstitial:!0},HB(h))});
d=g.v(d);for(var e=d.next();!e.done;e=d.next())switch(e=e.value,c.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,playerVars:e,Do:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:e,Do:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":var f=Number(c.podConfig.timeToInsertAtMillis);a.interstitials=a.interstitials.concat({time:f,playerVars:e,
Do:0===f?5:7})}}};
AQa=function(a,b){if(b=b.find(function(c){return!(!c||!c.tooltipRenderer)}))a.tooltipRenderer=b.tooltipRenderer};
BQa=function(a,b){b.subscribeCommand&&(a.subscribeCommand=b.subscribeCommand);b.unsubscribeCommand&&(a.unsubscribeCommand=b.unsubscribeCommand);b.addToWatchLaterCommand&&(a.addToWatchLaterCommand=b.addToWatchLaterCommand);b.removeFromWatchLaterCommand&&(a.removeFromWatchLaterCommand=b.removeFromWatchLaterCommand);b.getSharePanelCommand&&(a.getSharePanelCommand=b.getSharePanelCommand)};
CQa=function(a,b){null!=b?(a.wp=b,a.Kf=!0):(a.wp="",a.Kf=!1)};
NS=function(a,b){this.type=a||"";this.id=b||""};
g.DQa=function(a){return new NS(a.substr(0,2),a.substr(2))};
g.OS=function(a,b){this.Ia=a;this.author="";this.iD=null;this.playlistLength=0;this.j=this.sessionData=null;this.Z={};this.title="";if(b){this.author=b.author||b.playlist_author||"";this.title=b.playlist_title||"";if(a=b.session_data)this.sessionData=FB(a,"&");var c;this.j=(null==(c=b.thumbnail_ids)?void 0:c.split(",")[0])||null;this.Z=JS(b,"playlist_");this.videoId=b.video_id||void 0;if(c=b.list)switch(b.listType){case "user_uploads":this.playlistId=(new NS("UU","PLAYER_"+c)).toString();break;default:if(a=
b.playlist_length)this.playlistLength=Number(a)||0;this.playlistId=g.DQa(c).toString();if(b=b.video)this.videoId=(b[0]||null).video_id||void 0}else b.playlist&&(this.playlistLength=b.playlist.toString().split(",").length)}};
g.PS=function(a,b){this.Ia=a;this.Ds=this.author="";this.iD=null;this.isUpcoming=this.isLivePlayback=!1;this.lengthSeconds=0;this.pw=this.lengthText="";this.sessionData=null;this.Z={};this.title="";if(b){this.ariaLabel=b.aria_label||void 0;this.author=b.author||"";this.Ds=b.Ds||"";if(a=b.endscreen_autoplay_session_data)this.iD=FB(a,"&");this.jD=b.jD;this.isLivePlayback="1"===b.live_playback;this.isUpcoming=!!b.isUpcoming;if(a=b.length_seconds)this.lengthSeconds="string"===typeof a?Number(a):a;this.lengthText=
b.lengthText||"";this.pw=b.pw||"";this.publishedTimeText=b.publishedTimeText||void 0;if(a=b.session_data)this.sessionData=FB(a,"&");this.shortViewCount=b.short_view_count_text||void 0;this.Z=JS(b);this.title=b.title||"";this.videoId=b.docid||b.video_id||b.videoId||b.id||void 0;this.watchUrl=b.watchUrl||void 0}};
EQa=function(a){var b,c,d=null==(b=a.getWatchNextResponse())?void 0:null==(c=b.contents)?void 0:c.twoColumnWatchNextResults,e,f,h,l,m;a=null==(e=a.getWatchNextResponse())?void 0:null==(f=e.playerOverlays)?void 0:null==(h=f.playerOverlayRenderer)?void 0:null==(l=h.endScreen)?void 0:null==(m=l.watchNextEndScreenRenderer)?void 0:m.results;if(!a){var n,p;a=null==d?void 0:null==(n=d.endScreen)?void 0:null==(p=n.endScreen)?void 0:p.results}return a};
g.HQa=function(a){var b,c,d;a=g.S(null==(b=a.getWatchNextResponse())?void 0:null==(c=b.playerOverlays)?void 0:null==(d=c.playerOverlayRenderer)?void 0:d.decoratedPlayerBarRenderer,FQa);return g.S(null==a?void 0:a.playerBar,GQa)};
IQa=function(a){this.j=a.playback_progress_0s_url;this.C=a.playback_progress_2s_url;this.B=a.playback_progress_10s_url};
JQa=function(){if(void 0===QS){try{window.localStorage.removeItem("yt-player-lv")}catch(b){}a:{try{var a=!!self.localStorage}catch(b){a=!1}if(a&&(a=g.uv(g.VC()+"::yt-player"))){QS=new aH(a);break a}QS=void 0}}return QS};
g.RS=function(){var a=JQa();if(!a)return{};try{var b=a.get("yt-player-lv");return JSON.parse(b||"{}")}catch(c){return{}}};
g.KQa=function(a){var b=JQa();b&&(a=JSON.stringify(a),b.set("yt-player-lv",a))};
g.SS=function(a){return g.RS()[a]||0};
g.TS=function(a,b){var c=g.RS();b!==c[a]&&(0!==b?c[a]=b:delete c[a],g.KQa(c))};
g.US=function(a){return g.I(function(b){return b.return(g.HD(LQa(),a))})};
QQa=function(a,b,c,d,e,f,h,l){var m,n,p,q,r,t;return g.I(function(u){switch(u.j){case 1:return m=g.SS(a),4===m?u.return(4):g.y(u,g.MD(),2);case 2:n=u.B;if(!n)throw g.pD("wiac");if(!l||void 0===h){u.La(3);break}return g.y(u,MQa(l,h),4);case 4:h=u.B;case 3:return p=c.lastModified||"0",g.y(u,g.US(n),5);case 5:return q=u.B,g.Aa(u,6),VS++,g.y(u,g.xD(q,["index","media"],{mode:"readwrite",tag:"IDB_TRANSACTION_TAG_WIAC",Vb:!0},function(x){if(void 0!==f&&void 0!==h){var B=""+a+"|"+b.id+"|"+p+"|"+String(f).padStart(10,
"0");B=g.yD(x.objectStore("media"),h,B)}else B=g.rD.resolve(void 0);var F=NQa(a,b.jh()),G=NQa(a,!b.jh()),H={fmts:OQa(d),format:c||{}};F=g.yD(x.objectStore("index"),H,F);var O=-1===d.downloadedEndTime;H=O?x.objectStore("index").get(G):g.rD.resolve(void 0);var P={fmts:"music",format:{}};x=O&&e&&!b.jh()?g.yD(x.objectStore("index"),P,G):g.rD.resolve(void 0);return g.rD.all([x,H,B,F]).then(function(Y){Y=g.v(Y);Y.next();Y=Y.next().value;VS--;var la=g.SS(a);if(4!==la&&O&&e||void 0!==Y&&g.PQa(Y.fmts))la=
1,g.TS(a,la);return la})}),8);
case 8:return u.return(u.B);case 6:r=g.Ca(u);VS--;t=g.SS(a);if(4===t)return u.return(t);g.TS(a,4);throw r;}})};
g.RQa=function(a){var b,c;return g.I(function(d){if(1==d.j)return g.y(d,g.MD(),2);if(3!=d.j){b=d.B;if(!b)throw g.pD("ri");return g.y(d,g.US(b),3)}c=d.B;return d.return(g.xD(c,["index"],{mode:"readonly",tag:"IDB_TRANSACTION_TAG_LMRI"},function(e){var f=IDBKeyRange.bound(a+"|",a+"~");return g.mqa(e.objectStore("index"),f).then(function(h){return h.map(function(l){return l?l.format:{}})})}))})};
UQa=function(a,b,c,d,e){var f,h,l;return g.I(function(m){if(1==m.j)return g.y(m,g.MD(),2);if(3!=m.j){f=m.B;if(!f)throw g.pD("rc");return g.y(m,g.US(f),3)}h=m.B;l=g.xD(h,["media"],{mode:"readonly",tag:"IDB_TRANSACTION_TAG_LMRM",Vb:SQa},function(n){var p=""+a+"|"+b+"|"+c+"|"+String(d).padStart(10,"0");return n.objectStore("media").get(p)});
return e?m.return(l.then(function(n){if(void 0===n)throw Error("No data from indexDb");return TQa(e,n)}).catch(function(n){throw new g.UC("Error while reading chunk: "+n.name+", "+n.message);
})):m.return(l)})};
g.PQa=function(a){return a?"music"===a?!0:a.includes("dlt=-1")||!a.includes("dlt="):!1};
NQa=function(a,b){return""+a+"|"+(b?"v":"a")};
OQa=function(a){var b={};return GB((b.dlt=a.downloadedEndTime.toString(),b.mket=a.maxKnownEndTime.toString(),b.avbr=a.averageByteRate.toString(),b))};
WQa=function(a){var b={},c={};a=g.v(a);for(var d=a.next();!d.done;d=a.next()){var e=d.value,f=e.split("|");e.match(g.VQa)?(d=Number(f.pop()),isNaN(d)?c[e]="?":(f=f.join("|"),(e=b[f])?(f=e[e.length-1],d===f.end+1?f.end=d:e.push({start:d,end:d})):b[f]=[{start:d,end:d}])):c[e]="?"}a=g.v(Object.keys(b));for(d=a.next();!d.done;d=a.next())d=d.value,c[d]=b[d].map(function(h){return h.start+"-"+h.end}).join(",");
return c};
WS=function(a){g.TF.call(this);this.j=null;this.C=new Cla;this.j=null;this.K=new Set;this.crossOrigin=a||""};
XQa=function(a,b,c){for(c=XS(a,c);0<=c;){var d=a.levels[c];if(d.isLoaded(YS(d,b))&&(d=g.ZS(d,b)))return d;c--}return g.ZS(a.levels[0],b)};
ZQa=function(a,b,c){c=XS(a,c);for(var d,e;0<=c;c--)if(d=a.levels[c],e=YS(d,b),!d.isLoaded(e)){d=a;var f=c,h=f+"-"+e;d.K.has(h)||(d.K.add(h),d.C.yh(f,{YX:f,vY:e}))}YQa(a)};
YQa=function(a){if(!a.j&&!a.C.isEmpty()){var b=a.C.remove();a.j=$Qa(a,b)}};
$Qa=function(a,b){var c=document.createElement("img");a.crossOrigin&&(c.crossOrigin=a.crossOrigin);c.src=a.levels[b.YX].df(b.vY);c.onload=function(){var d=b.YX,e=b.vY;null!==a.j&&(a.j.onload=null,a.j=null);d=a.levels[d];d.loaded.add(e);YQa(a);var f=d.columns*d.rows;e*=f;d=Math.min(e+f-1,d.RH()-1);e=[e,d];a.oa("l",e[0],e[1])};
return c};
g.$S=function(a,b,c,d){this.level=a;this.D=b;this.loaded=new Set;this.level=a;this.D=b;a=c.split("#");this.width=Math.floor(Number(a[0]));this.height=Math.floor(Number(a[1]));this.frameCount=Math.floor(Number(a[2]));this.columns=Math.floor(Number(a[3]));this.rows=Math.floor(Number(a[4]));this.j=Math.floor(Number(a[5]));this.C=a[6];this.signature=a[7];this.videoLength=d};
YS=function(a,b){return Math.floor(b/(a.columns*a.rows))};
g.ZS=function(a,b){b>=a.QL()&&a.Zx();var c=YS(a,b),d=a.columns*a.rows,e=b%d;b=e%a.columns;e=Math.floor(e/a.columns);var f=a.Zx()+1-d*c;if(f<a.columns){var h=f;d=1}else h=a.columns,d=f<d?Math.ceil(f/a.columns):a.rows;return{url:a.df(c),column:b,columns:h,row:e,rows:d,vE:a.width*h,Cw:a.height*d}};
aT=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;WS.call(this,c);this.isLive=d;this.N=!!e;this.levels=this.B(a,b);this.D=new Map;1<this.levels.length&&this.levels[0].isDefault()&&this.levels.splice(0,1)};
aRa=function(a,b,c){return(a=a.levels[b])?a.DG(c):-1};
XS=function(a,b){var c=a.D.get(b);if(c)return c;c=a.levels.length;for(var d=0;d<c;d++)if(a.levels[d].width>=b)return a.D.set(b,d),d;a.D.set(b,c-1);return c-1};
bRa=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.$S.call(this,a,b,c,0);this.B=null;this.G=d?2:0};
bT=function(a,b,c,d){aT.call(this,a,0,void 0,b,!(void 0===d||!d));for(a=0;a<this.levels.length;a++)this.levels[a].QT(c)};
cRa=function(a,b,c){b={cpn:b};-1===a.indexOf("/ibw/")&&(b.ibw=c?String(c):"1369843");return{url:g.Nl(a,b),type:"application/x-mpegURL",quality:"auto",itag:"93"}};
g.dT=function(a,b){g.TF.call(this);this.Ia=a;this.adModule=!1;this.adaptiveFormats="";this.vU=this.Cx=this.adQueryId=this.Bx=null;this.mG={start:NaN,end:NaN};this.ariaLabel="";this.cueRanges=this.me=null;this.mL=new Map;this.compositeLiveStatusToken=this.compositeLiveIngestionOffsetToken=this.lw=void 0;this.Mx=this.drmParams="";this.eventLabel=null;this.allowEmbed=!0;this.allowLiveDvr=this.offlineable=this.backgroundable=!1;this.Va="";this.WB=this.Dx=!1;this.O0=null;this.Wf=this.jk=this.bp=this.mM=
!1;this.D=null;this.GU=this.zl=!1;this.Rf=NaN;this.applyStatefulNormalization=this.preserveStatefulLoudnessTarget=!1;this.QW=NaN;this.loudnessTargetLkfs=Infinity;this.Nm=!1;this.rL=this.cycToken=null;this.author="";this.iF=0;this.Sm=!1;this.eF=null;this.vL=[];this.hv=this.dC=!1;this.clientScreenNonce=this.playerResponseCpn=this.clientPlaybackNonce=this.videoCountText=this.hc=this.le="";this.contentCheckOk=!1;this.limitedPlaybackDurationInSeconds=this.endSeconds=this.fb=0;this.Ol=this.Xa=this.B=null;
this.yC="";this.loading=!1;this.jd=this.Qm=0;this.yU=this.pipable=this.fq=this.isAutonav=!1;this.paidContentOverlayDurationMs=0;this.isLiveHeadPlayable=this.isLivePlayback=this.ob=this.isPrivate=this.isListed=this.DC=this.Vf=this.mutedAutoplay=this.wl=!1;this.oM="";this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=this.kM=this.rb=this.ge=!1;this.latencyClass="UNKNOWN";this.pX=this.w_=this.CC=this.BU=this.fC=this.enablePreroll=this.enableServerStitchedDai=this.Jf=this.isMdxPlayback=
this.isUpcoming=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=this.showSeekingControls=!1;this.Ob=0;this.reloadReason="";this.lM=this.n0=this.Yg=!1;this.keywords={};this.tb="";this.Po=0;this.Fy=!1;this.liveChunkReadahead=NaN;this.Im=null;this.Rw=this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.LX=this.paygated=!1;this.wm=[];this.Rm=!1;this.Ea=[];this.Oj=null;this.CU=this.racyCheckOk=!1;this.KS={};this.isProximaLatencyEligible=!1;this.vF=0;this.C=null;this.autonavState=
1;this.hV=null;this.shortDescription="";this.Sa=this.KU=!1;this.uj=this.Fb=this.startSeconds=0;this.Oy=this.PU=this.Nl=cT;this.TB=this.suggestions=null;this.Xw=this.xx=void 0;this.isExternallyHostedPodcast=!1;this.Ml=null;this.qL=!1;this.expandedSubtitle=this.expandedTitle=this.subtitle=this.title="";this.Jx=void 0;this.Je=[];this.bl=[];this.hlsFormats=this.Tf="";this.sy=this.Dy=this.ll=this.md=this.Za=this.To=this.py=null;this.Lm="vvt";this.Zg=!1;this.cM=null;this.QU="";this.Jp=NaN;this.Op=this.oA=
this.Zo=this.Xz=this.Wz=this.Pl=this.Yo=this.TA=this.tp=this.zA="";this.Ql=null;this.zU=!1;this.N={};this.clipStart=0;this.clipEnd=Infinity;this.MX=!1;this.heartbeatToken="";this.tY=this.ZX=NaN;this.nj=this.Oo=this.Pi=this.g_=this.CY=!1;this.Pm=!0;this.Z={};this.captionTracks=[];this.ZB=[];this.RU=0;this.bC=[];this.Fx=[];this.Ex=!1;this.SU={};this.Al=new g.DP("und",new g.iR("Default","und",!0));this.nM=0;this.K=null;this.Qo=[];this.xC=!1;this.mz=this.Ef="";this.slotPosition=-1;this.breakType=0;this.embeddedPlayerConfig=
this.Na=this.KN=this.zC=this.playerResponse=this.xV=this.wy=this.Lo=this.qg=this.wC=this.nG=this.lG=null;this.Lx=!1;this.ma=null;this.isInlinePlaybackNoAd=this.Bm=this.eC=this.useCobaltWidevine=this.HU=this.Sz=!1;this.vC=!0;this.Re=this.Qi=NaN;this.defraggedFromSubfragments=this.WD=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.sabrContextUpdates=new Map;this.Cy="";this.SV=!1;this.gatewayExperimentGroup="";this.YF=this.aM=this.xj=!1;this.interstitials=[];this.Kf=this.FC=!1;this.wp=
"";this.allowPfpUnbranded=this.allowImaMonetization=!1;this.S0="";this.nL=!1;this.Ro="";this.eP=[];this.Zc="";this.uL=this.Y=this.QZ=!1;this.Uf=0;this.Xo="";this.uP=this.gP=this.BC=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=!0;this.Vo=!1;this.Ll=this.Xd=!0;this.errorDetail=this.userGenderAge="";this.sL=this.tL=this.getSharePanelCommand=this.removeFromWatchLaterCommand=this.addToWatchLaterCommand=this.unsubscribeCommand=this.subscribeCommand=
this.contextParams=this.hn=this.errorReason=this.errorCode=null;this.Ix=this.Hx="";this.Tm=!1;this.nw=[];this.Ad=this.Mb=this.kd=this.Zi=this.qf=0;this.fetchType=null;this.LS=!0;this.transitionEndpointAtEndOfStream=void 0;this.YB=this.LU=-1;this.Kl=this.Sf=!1;this.Ke=null;this.Ka="";this.Mo=!1;this.watchUrl=null;this.uy=[];this.visibleOnLoadKeys=[];this.tU=[];this.inlineMetricEnabled=this.Mm=!1;this.embedsRctn=this.embedsRct="";this.AC=NaN;this.JS=(0,g.uD)();this.Fz=this.Wo=0;this.Fo=null;this.Om=
0;this.rU=!1;this.Sf=this.L("web_new_autonav_countdown");this.Kl=this.L("web_new_big_thumbnail_endscreen");dRa(this,b);this.Kx=new QLa;g.L(this,this.Kx)};
g.gT=function(a,b,c){b&&b.cpn&&g.AF(new g.UC("CPN provided in VideoData update",{Cjb:b.cpn,fh:a.clientPlaybackNonce,o7:c}));c?(tC(b),dRa(a,b),eT(a)&&fT(a)):(b=b||{},eRa(a,b),fRa(a,b),gRa(a,b),a.oa("dataupdated"))};
gRa=function(a,b){a.fflags=sC(a.fflags,b.fflags);var c=b.iv_invideo_url;c&&(a.Va=XJ(c));a.Dx=pC(a.Dx,b.iv_ads_only);a.WB=pC(a.WB,b.iv_allow_in_place_switch);if(c=b.cta_conversion_urls)a.P4=c;a.isPharma=pC(a.isPharma,b.is_pharma);a.author=sC(a.author,b.author);a.le=hRa(b.ttsurl)||a.le;a.Sm=pC(a.Sm,b.cc_asr);a.hc=sC(a.hc,b.channel_path);if(c=b.profile_picture)a.profilePicture=sC(a.profilePicture,c);a.videoCountText=sC(a.videoCountText,b.video_count_text);a.autonavState=qC(a.autonavState,b.autonav_state,
iRa);a.clientPlaybackNonce=sC(a.clientPlaybackNonce,b.cpn);a.L("html5_enable_ssap_entity_id")&&a.playerResponse&&jRa(a,a.playerResponse);a.subscribed=pC(a.subscribed,b.subscribed);a.rawViewCount=rC(a.rawViewCount,b.view_count);a.shortViewCount=sC(a.shortViewCount,b.short_view_count_text);a.publishedTimeText=sC(a.publishedTimeText||"",b.publishedTimeText);a.lengthText=sC(a.lengthText||"",b.lengthText);a.pw=sC(a.pw||"",b.pw);a.Ds=sC(a.Ds||"",b.Ds);a.title=sC(a.title,b.title);a.subtitle=sC(a.subtitle,
b.subtitle);a.expandedTitle=sC(a.expandedTitle,b.expanded_title);a.expandedSubtitle=sC(a.expandedSubtitle,b.expanded_subtitle);a.ariaLabel=sC(a.ariaLabel,b.aria_label);a.ypcPreview=sC(a.ypcPreview,b.ypc_preview);a.dM=sC(a.dM,b.ypc_origin);a.Zg=pC(a.Zg,b.ypc_is_premiere_trailer);a.Xo=sC(a.Xo,b.ypc_clickwrap_message);a.paygated=pC(a.paygated,b.paygated);a.zU=pC(a.zU,b.requires_purchase);a.showShareButton=!pC(!a.showShareButton,b.ss);a.Xd=pC(a.Xd,b.showwatchlater);a.Ll=pC(a.Ll,b.shownotifybutton);a.Vo=
pC(a.Vo,b.copy_share);if(c=b.el)a.eventLabel=c;if(c=b.keywords)a.keywords=kRa(c.split(","));if(c=b.rvs)a.suggestions=Xna(c).map(function(d){return d.playlist||d.list||d.api?new g.OS(a.Ia,d):new g.PS(a.Ia,d)});
a.contentCheckOk=pC(a.contentCheckOk,b.cco);a.racyCheckOk=pC(a.racyCheckOk,b.rco);a.isLivingRoomDeeplink=pC(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=sC(a.oauthToken,b.oauth_token);a.tb=sC(a.tb,b.kpt);a.visitorData=sC(a.visitorData,b.visitor_data);if(c=b.session_data)a.sessionData=FB(c,"&");a.iy=sC(a.iy,b.endscreen_ad_tracking_data);a.OU=pC(a.OU,b.wait_for_vast_info_cards_xml);a.pL=pC(a.pL,b.suppress_creator_endscreen);a.T_=pC(a.T_,b.is_trueview_action);a.MU=sC(a.MU,b.tracking_list);
a.Hx=sC(a.Hx,b.clip);a.Ix=sC(a.Ix,b.clipt);lRa(a,b)};
dRa=function(a,b){b=b||{};var c=b.errordetail;null!=c&&(a.errorDetail=c);var d=b.errorcode;null!=d?a.errorCode=d:"fail"==b.status&&(a.errorCode="auth");var e=b.reason;null!=e&&(a.errorReason=e);var f=b.subreason;null!=f&&(a.hn=f);a.L("html5_enable_ssap_entity_id")||a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||g.KE(16));a.ob=pC(a.Ia.ob,b.livemonitor);eRa(a,b);var h=b.raw_player_response;if(h)a.KN=h;else{var l=b.player_response;l&&(h=JSON.parse(l))}a.L("html5_enable_ssap_entity_id")&&(h&&jRa(a,
h),a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||g.KE(16)));h&&(a.playerResponse=h);if(a.playerResponse){var m=a.playerResponse.annotations;if(m)for(var n=g.v(m),p=n.next();!p.done;p=n.next()){var q=p.value.playerAnnotationsUrlsRenderer;if(q){q.adsOnly&&(a.Dx=!0);q.allowInPlaceSwitch&&(a.WB=!0);var r=q.loadPolicy;r&&(a.annotationsLoadPolicy=mRa[r]);var t=q.invideoUrl;t&&(a.Va=XJ(t));a.mM=!0;break}}var u=a.playerResponse.attestation;u&&wQa(a,u);var x=a.playerResponse.cotn;x&&(a.cotn=x);var B=
a.playerResponse.heartbeatParams;if(B){nRa(a)&&(a.MX=!0);var F=B.heartbeatToken;F&&(a.drmSessionId=B.drmSessionId||"",a.heartbeatToken=F,a.ZX=Number(B.intervalMilliseconds),a.tY=Number(B.maxRetries),a.CY=!!B.softFailOnError,a.g_=!!B.useInnertubeHeartbeatsForDrm,a.bp=!0);a.heartbeatServerData=B.heartbeatServerData;var G;a.Nm=!(null==(G=B.heartbeatAttestationConfig)||!G.requiresAttestation)}var H=a.playerResponse.messages;H&&AQa(a,H);var O=a.playerResponse.overlay;if(O){var P=O.playerControlsOverlayRenderer;
if(P)if(CQa(a,P.controlBgHtml),P.mutedAutoplay){var Y=g.S(P.mutedAutoplay,oRa);if(Y&&Y.endScreen){var la=g.S(Y.endScreen,pRa);la&&la.text&&(a.S0=g.dG(la.text))}}else a.mutedAutoplay=!1}var pa=a.playerResponse.playabilityStatus;if(pa){var ua=pa.backgroundability;ua&&ua.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);var na,wa;if(null==(na=pa.offlineability)?0:null==(wa=na.offlineabilityRenderer)?0:wa.offlineable)a.offlineable=!0;var ea=pa.contextParams;ea&&(a.contextParams=ea);var Ea=
pa.pictureInPicture;Ea&&Ea.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);pa.playableInEmbed&&(a.allowEmbed=!0);var Z=pa.ypcClickwrap;if(Z){var Qa=Z.playerLegacyDesktopYpcClickwrapRenderer,z=Z.ypcRentalActivationRenderer;if(Qa)a.Xo=Qa.durationMessage||"",a.Wf=!0;else if(z){var W=z.durationMessage;a.Xo=W?g.dG(W):"";a.Wf=!0}}var bb=pa.errorScreen;if(bb){if(bb.playerLegacyDesktopYpcTrailerRenderer){var eb=bb.playerLegacyDesktopYpcTrailerRenderer;a.Op=eb.trailerVideoId||"";var jb=bb.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer;
var Ya=jb&&jb.ypcTrailerRenderer}else if(bb.playerLegacyDesktopYpcOfferRenderer)eb=bb.playerLegacyDesktopYpcOfferRenderer;else if(bb.ypcTrailerRenderer){Ya=bb.ypcTrailerRenderer;var Tb=Ya.fullVideoMessage;a.Yo=Tb?g.dG(Tb):"";var Pb,kb;a.Op=(null==(Pb=g.S(Ya,qRa))?void 0:null==(kb=Pb.videoDetails)?void 0:kb.videoId)||""}eb&&(a.Zo=eb.itemTitle||"",eb.itemUrl&&(a.oA=eb.itemUrl),eb.itemBuyUrl&&(a.Wz=eb.itemBuyUrl),a.Xz=eb.itemThumbnail||"",a.TA=eb.offerHeadline||"",a.tp=eb.offerDescription||"",a.Pl=eb.offerId||
"",a.zA=eb.offerButtonText||"",a.cM=eb.offerButtonFormattedText||null,a.Jp=eb.overlayDurationMsec||NaN,a.Yo=eb.fullVideoMessage||"",a.jk=!0);if(Ya){var Gb=g.S(Ya,qRa);if(Gb)a.Ql={raw_player_response:Gb};else{var Va=g.S(Ya,rRa);a.Ql=Va?HB(Va):null}a.jk=!0}}}var A=a.playerResponse.playbackTracking;if(A){var D=b,E=LS(A.googleRemarketingUrl);E&&(a.googleRemarketingUrl=E);var C=LS(A.youtubeRemarketingUrl);C&&(a.youtubeRemarketingUrl=C);var K=LS(A.ptrackingUrl);if(K){var T=MS(K),fa=T.oid;fa&&(a.GS=fa);
var ra=T.pltype;ra&&(a.HS=ra);var da=T.ptchn;da&&(a.U0=da);var ha=T.ptk;ha&&(a.vy=encodeURIComponent(ha));var Fa=T.m;Fa&&(a.Nx=Fa)}var xa=LS(A.ppvRemarketingUrl);xa&&(a.ppvRemarketingUrl=xa);var cb=LS(A.qoeUrl);if(cb){for(var Ib=g.IB(cb),Lb=g.v(Object.keys(Ib)),Qb=Lb.next();!Qb.done;Qb=Lb.next()){var Ab=Qb.value,Mb=Ib[Ab];Ib[Ab]=Array.isArray(Mb)?Mb.join(","):Mb}a.NU=Ib;var cd=Ib.cat;cd&&(a.Ro=cd);var Bc=Ib.live;Bc&&(a.oM=Bc);var md=Ib.drm_product;md&&(a.Mx=md)}var Mc=LS(A.remarketingUrl);if(Mc){a.remarketingUrl=
Mc;var nd=MS(Mc);nd.foc_id&&(a.N.focEnabled=!0);var od=nd.data;od&&(a.N.rmktEnabled=!0,od.engaged&&(a.N.engaged="1"));a.N.baseUrl=cfa(Mc)+El(g.Gl(5,Mc))}var $b=LS(A.videostatsPlaybackUrl);if($b){var nc=MS($b);a.Zb=nc;var Ld=nc.adformat;if(Ld){D.adformat=Ld;var ac=a.U(),dd=sQa(Ld,a.mz,ac.D,ac.K);dd&&(a.adFormat=dd)}var ed=nc.aqi;ed&&(D.ad_query_id=ed);var Nb=nc.autoplay;Nb&&(a.wl="1"==Nb,a.fq="1"==Nb);var Ed=nc.autonav;Ed&&(a.isAutonav="1"==Ed);var Ud=nc.delay;Ud&&(a.fb=ze(Ud));var Ub=nc.ei;Ub&&(a.eventId=
Ub);"adunit"===nc.el&&(a.wl=!0);var cf=nc.feature;cf&&(a.So=cf);var Ae=nc.list;Ae&&(a.playlistId=Ae);var Be=nc.of;Be&&(a.pP=Be);var pe=nc.osid;pe&&(a.osid=pe);var lh=nc.referrer;lh&&(a.referrer=lh);var Kg=nc.sdetail;Kg&&(a.Ay=Kg);var mh=nc.sourceid;mh&&(a.Tjb=mh);var nh=nc.ssrt;nh&&(a.Uo="1"==nh);var Lg=nc.subscribed;Lg&&(a.subscribed="1"==Lg,a.N.subscribed=Lg);var oh=nc.uga;oh&&(a.userGenderAge=oh);var Ce=nc.upt;Ce&&(a.Ey=Ce);var df=nc.vm;df&&(a.videoMetadata=df)}var Zc=LS(A.videostatsWatchtimeUrl);
if(Zc){var ee=MS(Zc).ald;ee&&(a.yx=ee)}if(A.promotedPlaybackTracking){var vc=A.promotedPlaybackTracking;vc.startUrls&&(a.yy=vc.startUrls);vc.firstQuartileUrls&&(a.pS=vc.firstQuartileUrls);vc.secondQuartileUrls&&(a.DS=vc.secondQuartileUrls);vc.thirdQuartileUrls&&(a.ES=vc.thirdQuartileUrls);vc.completeUrls&&(a.dR=vc.completeUrls);vc.engagedViewUrls&&(1<vc.engagedViewUrls.length&&g.AF(new g.UC("There are more than one engaged_view_urls.")),a.rj=vc.engagedViewUrls[0])}}var Mg=a.playerResponse.playerCueRanges;
Mg&&0<Mg.length&&(a.cueRanges=Mg);var ph=a.playerResponse.playerCueRangeSet;ph&&g.sRa(a,ph);a:{var qh=a.playerResponse.adPlacements;if(qh)for(var rh=g.v(qh),De=rh.next();!De.done;De=rh.next()){var wc=void 0,Kf=void 0,Zh=null==(wc=De.value.adPlacementRenderer)?void 0:null==(Kf=wc.renderer)?void 0:Kf.videoAdTrackingRenderer;if(Zh){var $h=Zh;break a}}$h=null}var Ii=$h;A&&A.promotedPlaybackTracking&&Ii&&g.AF(new g.UC("Player Response with both promotedPlaybackTracking and videoAdTrackingRenderer"));Ii&&
(a.LX=!0);var ef=a.playerResponse.playerAds;if(ef)for(var eg=b,Qe=g.v(ef),fg=Qe.next();!fg.done;fg=Qe.next()){var sf=fg.value;if(sf){var Fc=sf.playerLegacyDesktopWatchAdsRenderer;if(Fc){var rc=Fc.playerAdParams;if(rc){"1"==rc.autoplay&&(a.wl=!0,a.fq=!0);a.Cx=rc.encodedAdSafetyReason||null;void 0!==rc.showContentThumbnail&&(a.Pm=!!rc.showContentThumbnail);eg.enabled_engage_types=rc.enabledEngageTypes;break}}}}var bc=a.playerResponse.playerConfig;if(bc){var Ng=bc.manifestlessWindowedLiveConfig;if(Ng){var ff=
Number(Ng.minDvrSequence),Lf=Number(Ng.maxDvrSequence),Mf=Number(Ng.minDvrMediaTimeMs),Ji=Number(Ng.maxDvrMediaTimeMs),rj=Number(Ng.startWalltimeMs);ff&&(a.qf=ff);Mf&&(a.Mb=Mf/1E3);Lf&&(a.Zi=Lf);Ji&&(a.kd=Ji/1E3);rj&&(a.Ad=rj/1E3);(ff||Mf)&&(Lf||Ji)&&(a.rb=!0,a.isLivePlayback=!0,a.allowLiveDvr=!0,a.ge=!1)}var gg=bc.daiConfig;if(gg){if(gg.enableDai){a.Jf=!0;var sh=gg.enableServerStitchedDai;sh&&(a.enableServerStitchedDai=sh);var ai=gg.enablePreroll;ai&&(a.enablePreroll=ai)}var bi;if("DAI_TYPE_SS_DISABLED"===
gg.daiType||(null==(bi=gg.debugInfo)?0:bi.isDisabledUnpluggedChannel))a.CC=!0}var hg=bc.audioConfig;if(hg){var gf=hg.loudnessDb;null!=gf&&(a.Rf=gf);var Og=hg.trackAbsoluteLoudnessLkfs;null!=Og&&(a.QW=Og);var Nf=hg.loudnessTargetLkfs;null!=Nf&&(a.loudnessTargetLkfs=Nf);hg.audioMuted&&(a.zl=!0);hg.muteOnStart&&(a.GU=!0);var Ki=hg.loudnessNormalizationConfig;Ki&&(Ki.applyStatefulNormalization&&(a.applyStatefulNormalization=!0),Ki.preserveStatefulLoudnessTarget&&(a.preserveStatefulLoudnessTarget=!0))}var ig=
bc.playbackEndConfig;if(ig){var Pg=ig.endSeconds,th=ig.limitedPlaybackDurationInSeconds;a.mutedAutoplay&&(Pg&&(a.endSeconds=Pg),a.U().L("embeds_enable_muted_autoplay")&&th&&(a.limitedPlaybackDurationInSeconds=th))}var Qg=bc.fairPlayConfig;if(Qg){var Ee=Qg.certificate;Ee&&(a.Xa=MR(Ee));var Fe=Number(Qg.keyRotationPeriodMs);0<Fe&&(a.ly=Fe);var Re=Number(Qg.keyPrefetchMarginMs);0<Re&&(a.jy=Re)}var qe=bc.playbackStartConfig;if(qe){a.uP=Number(qe.startSeconds);var bk=qe.liveUtcStartSeconds,Se=!!a.liveUtcStartSeconds&&
0<a.liveUtcStartSeconds;bk&&!Se&&(a.liveUtcStartSeconds=Number(bk));var tf=qe.startPosition;if(tf){var Vd=tf.utcTimeMillis;Vd&&!Se&&(a.liveUtcStartSeconds=.001*Number(Vd));var uh=tf.streamTimeMillis;uh&&(a.uj=.001*Number(uh))}a.progressBarStartPosition=qe.progressBarStartPosition;a.progressBarEndPosition=qe.progressBarEndPosition}else{var Rg=bc.skippableSegmentsConfig;if(Rg){var Of=Rg.introSkipDurationMs;Of&&(a.BC=Number(Of)/1E3);var Sg=Rg.outroSkipDurationMs;Sg&&(a.gP=Number(Sg)/1E3)}}var jg=bc.skippableIntroConfig;
if(jg){var ci=Number(jg.startMs),Li=Number(jg.endMs);isNaN(ci)||isNaN(Li)||(a.Qi=ci,a.Re=Li)}var Mi=bc.streamSelectionConfig;Mi&&(a.jd=Number(Mi.maxBitrate));var Ql=bc.vrConfig;Ql&&(a.Sz="1"==Ql.partialSpherical);var sj=bc.webDrmConfig;if(sj){sj.skipWidevine&&(a.HU=!0);var ck=sj.widevineServiceCert;ck&&(a.Ol=MR(ck));sj.useCobaltWidevine&&(a.useCobaltWidevine=!0);sj.startWithNoQualityConstraint&&(a.Bm=!0)}var kg=bc.mediaCommonConfig;if(kg){var fe=kg.dynamicReadaheadConfig;if(fe){a.maxReadAheadMediaTimeMs=
fe.maxReadAheadMediaTimeMs||NaN;a.minReadAheadMediaTimeMs=fe.minReadAheadMediaTimeMs||NaN;a.readAheadGrowthRateMs=fe.readAheadGrowthRateMs||NaN;var re,Te=null==kg?void 0:null==(re=kg.mediaUstreamerRequestConfig)?void 0:re.videoPlaybackUstreamerConfig;Te&&(a.Oj=MR(Te));var tj=null==kg?void 0:kg.sabrContextUpdates;if(tj&&0<tj.length)for(var Rl=g.v(tj),dk=Rl.next();!dk.done;dk=Rl.next()){var vh=dk.value;if(vh.type&&vh.value){var ek={type:vh.type,scope:vh.scope,value:MR(vh.value)||void 0,sendByDefault:vh.sendByDefault};
a.sabrContextUpdates.set(vh.type,ek)}}}var Zk=kg.serverPlaybackStartConfig;Zk&&(a.serverPlaybackStartConfig=Zk)}var di=bc.inlinePlaybackConfig;di&&(a.vC=!!di.showAudioControls);var ei=bc.embeddedPlayerConfig;if(ei){a.embeddedPlayerConfig=ei;var fi=ei.embeddedPlayerMode;if(fi){var Sl=a.U();Sl.Ha=fi;Sl.C="EMBEDDED_PLAYER_MODE_PFL"===fi}var Tl=ei.permissions;Tl&&(a.allowImaMonetization=!!Tl.allowImaMonetization)}var Ni=bc.ssapConfig;Ni&&(a.SV=Ni.ssapPrerollEnabled||!1);var gi=bc.webPlayerConfig;gi&&
(gi.gatewayExperimentGroup&&(a.gatewayExperimentGroup=gi.gatewayExperimentGroup),gi.isProximaEligible&&(a.isProximaLatencyEligible=!0))}var ge=a.playerResponse.streamingData;if(ge){var lg=ge.adaptiveFormats;if(lg){var Tg=ge.streamingUrlTemplate;if(a.L("enable_streaming_url_template")&&Tg)for(var Oi=g.v(lg),uf=Oi.next();!uf.done;uf=Oi.next()){var fk=uf.value;!fk.url&&fk.distinctParams&&(fk.url=Tg+"&"+fk.distinctParams)}}var $k=ge.formats;if($k){var uj=[],hf=g.v($k);for(uf=hf.next();!uf.done;uf=hf.next()){var jf=
uf.value;uj.push(jf.itag+"/"+jf.width+"x"+jf.height)}a.yC=uj.join(",");uj=[];var Pf=g.v($k);for(uf=Pf.next();!uf.done;uf=Pf.next()){var Pi=uf.value,vj={itag:Pi.itag,type:Pi.mimeType,quality:Pi.quality},Ul=Pi.url;Ul&&(vj.url=Ul);var gk=YP(Pi),pc=gk.TC,Ds=gk.NF,bq=gk.s;gk.fX&&(vj.url=pc,vj.sp=Ds,vj.s=bq);uj.push(g.Ml(vj))}a.Tf=uj.join(",")}var zo=ge.hlsFormats;if(zo){var cq=bc||null,hk={};if(cq){var ik=cq.audioPairingConfig;if(ik&&ik.pairs)for(var Vl=g.v(ik.pairs),Qi=Vl.next();!Qi.done;Qi=Vl.next()){var al=
Qi.value,jk=al.videoItag;hk[jk]||(hk[jk]=[]);hk[jk].push(al.audioItag)}}for(var dq={},eq=g.v(zo),kk=eq.next();!kk.done;kk=eq.next()){var fq=kk.value;dq[fq.itag]=fq.bitrate}var gq=[],hq=g.v(zo);for(kk=hq.next();!kk.done;kk=hq.next()){var Qf=kk.value,vf={itag:Qf.itag,type:Qf.mimeType,url:Qf.url,bitrate:Qf.bitrate,width:Qf.width,height:Qf.height,fps:Qf.fps},wj=Qf.audioTrack;if(wj){var Wl=wj.displayName;Wl&&(vf.name=Wl,vf.audio_track_id=wj.id,wj.audioIsDefault&&(vf.is_default="1"))}if(Qf.drmFamilies){for(var iq=
[],hi=g.v(Qf.drmFamilies),ii=hi.next();!ii.done;ii=hi.next())iq.push(nOa[ii.value]);vf.drm_families=iq.join(",")}var wh=hk[Qf.itag];if(wh&&wh.length){vf.audio_itag=wh.join(",");var jq=dq[wh[0]];jq&&(vf.bitrate+=jq)}var Ao=YNa(Qf);Ao&&(vf.eotf=Ao);Qf.audioChannels&&(vf.audio_channels=Qf.audioChannels);gq.push(g.Ml(vf))}a.hlsFormats=gq.join(",")}var xh=ge.licenseInfos;if(xh&&0<xh.length){for(var yh={},ji=g.v(xh),cn=ji.next();!cn.done;cn=ji.next()){var kq=cn.value,Xl=kq.drmFamily,dn=kq.url;Xl&&dn&&(yh[nOa[Xl]]=
dn)}a.me=yh}var en=ge.drmParams;en&&(a.drmParams=en);var bl=ge.dashManifestUrl;bl&&(a.Bc=g.Nl(bl,{cpn:a.clientPlaybackNonce}));var Yl=ge.hlsManifestUrl;Yl&&(a.hlsvp=Yl);var Zl=ge.probeUrl;Zl&&(a.probeUrl=XJ(g.Nl(Zl,{cpn:a.clientPlaybackNonce})));var lq=ge.serverAbrStreamingUrl;lq&&(a.By=new g.TP(lq,!0))}var mq=a.playerResponse.trackingParams;mq&&(a.Aa=mq);var Rc=a.playerResponse.videoDetails;if(Rc){var ki=b,Bo=Rc.videoId;Bo&&(a.videoId=Bo,ki.video_id||(ki.video_id=Bo));var lk=Rc.channelId;lk&&(a.N.uid=
lk.substr(2));var li=Rc.title;li&&(a.title=li,ki.title||(ki.title=li));var Ri=Rc.lengthSeconds;Ri&&(a.lengthSeconds=Number(Ri),ki.length_seconds||(ki.length_seconds=Ri));var fn=Rc.keywords;fn&&(a.keywords=kRa(fn));var Co=Rc.channelId;Co&&(a.Jl=Co,ki.ucid||(ki.ucid=Co));var nq=Rc.viewCount;nq&&(a.rawViewCount=Number(nq));var wf=Rc.author;wf&&(a.author=wf,ki.author||(ki.author=wf));var mg=Rc.shortDescription;mg&&(a.shortDescription=mg);var zh=Rc.isCrawlable;zh&&(a.isListed=zh);var $l=Rc.musicVideoType;
$l&&(a.musicVideoType=$l);var gn=Rc.isLive;null!=gn&&(a.isLivePlayback=gn);if(gn||Rc.isUpcoming)a.isPremiere=!Rc.isLiveContent;var Do=Rc.thumbnail;Do&&(a.Z=KS(Do));var oq=Rc.isExternallyHostedPodcast;oq&&(a.isExternallyHostedPodcast=oq);var Eo=Rc.viewerLivestreamJoinPosition;if(null==Eo?0:Eo.utcTimeMillis)a.Fz=ze(Eo.utcTimeMillis);var pq=bc||null,cl=b;Rc.isLiveDefaultBroadcast&&(a.isLiveDefaultBroadcast=!0);Rc.isUpcoming&&(a.isUpcoming=!0);if(Rc.isPostLiveDvr)a.ge=!0;else{var hn=!1;if(a.ob)a.allowLiveDvr=
HR()?!0:lC&&5>hT?!1:!0,a.isLivePlayback=!0;else if(Rc.isLive){cl.livestream="1";a.allowLiveDvr=Rc.isLiveDvrEnabled?HR()?!0:lC&&5>hT?!1:!0:!1;a.Ha=27;Rc.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);var Fo=Rc.latencyClass;Fo&&(a.latencyClass=tRa[Fo]||"UNKNOWN");var qq=Rc.liveChunkReadahead;qq&&(a.liveChunkReadahead=qq);var dl=pq&&pq.livePlayerConfig;if(dl){dl.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=!0);dl.hasSubfragmentedWebm&&(a.WD=!0);dl.defraggedFromSubfragments&&(a.defraggedFromSubfragments=
!0);var rq=dl.liveExperimentalContentId;rq&&(a.liveExperimentalContentId=Number(rq));var Go=dl.isLiveHeadPlayable;a.L("html5_live_head_playable")&&null!=Go&&(a.isLiveHeadPlayable=Go)}hn=!0}else Rc.isUpcoming&&(hn=!0);hn&&(a.isLivePlayback=!0,cl.adformat&&"8"!==cl.adformat.split("_")[1]||a.Ea.push("heartbeat"),a.bp=!0)}var sq=Rc.isPrivate;void 0!==sq&&(a.isPrivate=pC(a.isPrivate,sq))}if(pa){var Ho=Rc||null,am=!1,mk=pa.errorScreen;am=mk&&(mk.playerLegacyDesktopYpcOfferRenderer||mk.playerLegacyDesktopYpcTrailerRenderer||
mk.ypcTrailerRenderer)?!0:Ho&&Ho.isUpcoming?!0:["OK","LIVE_STREAM_OFFLINE","FULLSCREEN_ONLY"].includes(pa.status);if(!am){a.errorCode=lQa(pa.errorCode)||"auth";var bm=mk&&mk.playerErrorMessageRenderer;if(bm){a.playerErrorMessageRenderer=bm;var tq=bm.reason;tq&&(a.errorReason=g.dG(tq));var Io=bm.subreason;Io&&(a.hn=g.dG(Io),a.oy=Io)}else a.errorReason=pa.reason||null;var Jo=pa.status;if("LOGIN_REQUIRED"===Jo)a.errorDetail="1";else if("CONTENT_CHECK_REQUIRED"===Jo)a.errorDetail="2";else if("AGE_CHECK_REQUIRED"===
Jo){var uq=pa.errorScreen,xj=uq&&uq.playerKavRenderer;a.errorDetail=xj&&xj.kavUrl?"4":"3"}else a.errorDetail=pa.isBlockedInRestrictedMode?"5":"0"}}var el=a.playerResponse.interstitialPods;el&&zQa(a,el);a.Va&&a.eventId&&(a.Va=KB(a.Va,{ei:a.eventId}));var mi=a.playerResponse.captions;if(mi&&mi.playerCaptionsTracklistRenderer)a:{var ng=mi.playerCaptionsTracklistRenderer;a.captionTracks=[];if(ng.captionTracks)for(var cm=g.v(ng.captionTracks),Ko=cm.next();!Ko.done;Ko=cm.next()){var ni=Ko.value,vq=hRa(ni.baseUrl);
if(!vq)break a;var Lo={is_translateable:!!ni.isTranslatable,languageCode:ni.languageCode,languageName:ni.name&&g.dG(ni.name),url:vq,vss_id:ni.vssId,kind:ni.kind};Lo.name=ni.trackName;Lo.displayName=ni.name&&g.dG(ni.name);a.captionTracks.push(new g.FS(Lo))}a.ZB=ng.audioTracks||[];a.RU=ng.defaultAudioTrackIndex||0;a.Fx=[];if(ng.translationLanguages)for(var wq=g.v(ng.translationLanguages),jn=wq.next();!jn.done;jn=wq.next()){var Rf=jn.value,Sf={};Sf.languageCode=Rf.languageCode;Sf.languageName=g.dG(Rf.languageName);
if(Rf.translationSourceTrackIndices){Sf.translationSourceTrackIndices=[];for(var Si=g.v(Rf.translationSourceTrackIndices),Ah=Si.next();!Ah.done;Ah=Si.next())Sf.translationSourceTrackIndices.push(Ah.value)}if(Rf.excludeAudioTrackIndices){Sf.excludeAudioTrackIndices=[];var dm=g.v(Rf.excludeAudioTrackIndices);for(Ah=dm.next();!Ah.done;Ah=dm.next())Sf.excludeAudioTrackIndices.push(Ah.value)}a.Fx.push(Sf)}a.bC=[];if(ng.defaultTranslationSourceTrackIndices){var Ti=g.v(ng.defaultTranslationSourceTrackIndices);
for(Ah=Ti.next();!Ah.done;Ah=Ti.next())a.bC.push(Ah.value)}a.Ex=!!ng.contribute&&!!ng.contribute.captionsMetadataRenderer}a.clipConfig=a.playerResponse.clipConfig;a.clipConfig&&null!=a.clipConfig.startTimeMs&&(a.uP=.001*Number(a.clipConfig.startTimeMs));a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting&&BQa(a,a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting);var Bh;
a.compositeLiveIngestionOffsetToken=null==(Bh=a.playerResponse.playbackTracking)?void 0:Bh.compositeLiveIngestionOffsetToken;var yj;a.compositeLiveStatusToken=null==(yj=a.playerResponse.playbackTracking)?void 0:yj.compositeLiveStatusToken}fRa(a,b);b.queue_info&&(a.queueInfo=b.queue_info);var fl=b.hlsdvr;null!=fl&&(a.allowLiveDvr="1"==fl?HR()?!0:lC&&5>hT?!1:!0:!1);a.adQueryId=b.ad_query_id||null;a.Cx||(a.Cx=b.encoded_ad_safety_reason||null);a.vU=b.agcid||null;a.lG=b.ad_id||null;a.nG=b.ad_sys||null;
a.wC=b.encoded_ad_playback_context||null;a.zl=pC(a.zl,b.infringe||b.muted);a.JU=b.authkey;a.pU=b.authuser;a.mutedAutoplay=pC(a.mutedAutoplay,b&&b.playmuted)&&a.L("embeds_enable_muted_autoplay");a.nL=pC(a.nL,b&&b.mutedautoplay)&&a.L("embeds_enable_muted_autoplay");var em=b.length_seconds;em&&(a.lengthSeconds="string"===typeof em?ze(em):em);if(a.isAd()||a.Rm||!g.uC(g.jS(a.Ia)))a.endSeconds=rC(a.endSeconds,a.gP||b.end||b.endSeconds);else{var fm=a.lengthSeconds;switch(g.jS(a.Ia)){case "EMBEDDED_PLAYER_LITE_MODE_FIXED_PLAYBACK_LIMIT":30<
fm?a.limitedPlaybackDurationInSeconds=30:30>fm&&10<fm&&(a.limitedPlaybackDurationInSeconds=10);break;case "EMBEDDED_PLAYER_LITE_MODE_DYNAMIC_PLAYBACK_LIMIT":a.limitedPlaybackDurationInSeconds=.2*fm}}a.Aa=sC(a.Aa,b.itct);a.DC=pC(a.DC,b.noiba);a.kM=pC(a.kM,b.is_live_destination);a.isLivePlayback=pC(a.isLivePlayback,b.live_playback);a.enableServerStitchedDai=a.enableServerStitchedDai&&a.Cc();b.isUpcoming&&(a.isUpcoming=pC(a.isUpcoming,b.isUpcoming));a.ge=pC(a.ge,b.post_live_playback);a.rb&&(a.ge=!1);
a.isMdxPlayback=pC(a.isMdxPlayback,b.mdx);var kn=b.mdx_control_mode;kn&&(a.mdxControlMode="number"===typeof kn?kn:ze(kn));a.isInlinePlaybackNoAd=pC(a.isInlinePlaybackNoAd,b.is_inline_playback_no_ad);a.Ob=rC(a.Ob,b.reload_count);a.reloadReason=sC(a.reloadReason,b.reload_reason);a.Pm=pC(a.Pm,b.show_content_thumbnail);a.lM=pC(a.lM,b.utpsa);a.qL=pC(a.qL,b.third_party_remapped_ad);a.cycToken=b.cyc||null;a.rL=b.tkn||null;var xq=JS(b);0<Object.keys(xq).length&&(a.Z=xq);a.qa=sC(a.qa,b.vvt);a.mdxEnvironment=
sC(a.mdxEnvironment,b.mdx_environment);b.source_container_playlist_id&&(a.sourceContainerPlaylistId=b.source_container_playlist_id);b.serialized_mdx_metadata&&(a.serializedMdxMetadata=b.serialized_mdx_metadata);a.X5=b.osig;a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=sC(a.playlistId,b.list);b.index&&(a.playlistIndex=void 0===a.playlistIndex?rC(0,b.index):rC(a.playlistIndex,b.index));a.fU=b.pyv_view_beacon_url;a.lU=b.pyv_quartile25_beacon_url;a.qU=b.pyv_quartile50_beacon_url;
a.sU=b.pyv_quartile75_beacon_url;a.jU=b.pyv_quartile100_beacon_url;var yq=b.remarketing_url;yq&&(a.remarketingUrl=yq);var gm=b.ppv_remarketing_url;gm&&(a.ppvRemarketingUrl=gm);var ln=b.session_data;!a.uU&&ln&&(a.uU=FB(ln,"&").feature);a.isFling=1==rC(a.isFling?1:0,b.is_fling);a.vnd=rC(a.vnd,b.vnd);a.forceAdsUrl=sC(a.forceAdsUrl,b.force_ads_url);a.yk=sC(a.yk,b.ctrl);a.Cl=sC(a.Cl,b.ytr);a.tv=b.ytrcc;a.wU=b.ytrexp;a.FS=b.ytrext;a.Ef=sC(a.Ef,b.adformat);a.mz=sC(a.mz,b.attrib);a.slotPosition=rC(a.slotPosition,
b.slot_pos);a.breakType=b.break_type;a.Uo=pC(a.Uo,b.ssrt);a.videoId=tC(b)||a.videoId;a.G=sC(a.G,b.vss_credentials_token);a.Lm=sC(a.Lm,b.vss_credentials_token_type);a.xj=pC(a.xj,b.audio_only);a.aM=pC(a.aM,b.aac_high);a.YF=pC(a.YF,b.prefer_low_quality_audio);a.uL=pC(a.uL,b.uncap_inline_quality);a.Ro=sC(a.Ro,b.qoe_cat);a.Tm=pC(a.Tm,b.download_media);var mn=b.prefer_gapless;var Es=null!=mn?pC(a.Y,mn):a.Y?a.Y:a.Ia.preferGapless&&a.Ia.supportsGaplessShorts();a.Y=Es;a:{var Mo=a.playerResponse;if(Mo&&Mo.adPlacements)for(var zq=
g.v(Mo.adPlacements),hm=zq.next();!hm.done;hm=zq.next()){var nk=hm.value.adPlacementRenderer;if(null!=nk&&"AD_PLACEMENT_KIND_START"===(nk.config&&nk.config.adPlacementConfig&&nk.config.adPlacementConfig.kind)){var nn=!0;break a}}nn=!1}nn&&(a.adModule=!0,a.Ea.push("ad"));var No=b.adaptive_fmts;No&&(a.adaptiveFormats=No,a.va("adpfmts",{},!0));var Ge=b.allow_embed;Ge&&(a.allowEmbed="1"==Ge);var Ue=b.backgroundable;Ue&&(a.backgroundable="1"==Ue);var Ve=b.autonav;Ve&&(a.isAutonav="1"==Ve);var on=b.autoplay;
on&&(a.fq="1"==on,a.wl="1"==on);var Aq=b.iv_load_policy;Aq&&(a.annotationsLoadPolicy=qC(a.annotationsLoadPolicy,Aq,kS));var pn=b.cc_lang_pref;pn&&(a.captionsLanguagePreference=sC(pn,a.captionsLanguagePreference));var Oo=b.cc_load_policy;Oo&&(a.eF=qC(a.eF,Oo,kS));var Po;a.deviceCaptionsOn=null!=(Po=b.device_captions_on)?Po:void 0;var Bq;a.lV=null!=(Bq=b.device_captions_lang_pref)?Bq:"";var Qo;a.vL=null!=(Qo=b.viewer_selected_caption_langs)?Qo:[];var Cq=b.cached_load;Cq&&(a.hv=pC(a.hv,Cq));"0"==b.dash&&
(a.dC=!0);var Dq=b.dashmpd;Dq&&(a.Bc=g.Nl(Dq,{cpn:a.clientPlaybackNonce}));var im=b.delay;im&&(a.fb=ze(im));var qn=a.gP||b.end;void 0!=qn&&(a.clipEnd=rC(a.clipEnd,qn));var rn=b.fmt_list;rn&&(a.yC=rn);b.heartbeat_preroll&&a.Ea.push("heartbeat");a.Qm=-Math.floor(10*Math.random());a.Rw=-Math.floor(40*Math.random());var Ro=b.is_listed;Ro&&(a.isListed=pC(a.isListed,Ro));var Eq=b.is_private;Eq&&(a.isPrivate=pC(a.isPrivate,Eq));var Fq=b.is_dni;Fq&&(a.Kf=pC(a.Kf,Fq));var Gq=b.dni_color;Gq&&(a.wp=sC(a.wp,
Gq));var Hq=b.pipable;Hq&&(a.pipable=pC(a.pipable,Hq));a.yU=a.pipable&&a.Ia.Jp;a.KU=a.yU&&!a.Ia.showMiniplayerButton;var Iq=b.paid_content_overlay_duration_ms;Iq&&(a.paidContentOverlayDurationMs=ze(Iq));var ok=b.paid_content_overlay_text;ok&&(a.paidContentOverlayText=ok);var jm=b.url_encoded_fmt_stream_map;jm&&(a.Tf=jm);var sn=b.hls_formats;sn&&(a.hlsFormats=sn);var Jq=b.hlsvp;Jq&&(a.hlsvp=Jq);var tn=b.live_start_walltime;tn&&(a.pM="number"===typeof tn?tn:ze(tn));var Ui=b.live_manifest_duration;Ui&&
(a.Im="number"===typeof Ui?Ui:ze(Ui));var Vi=b.player_params;Vi&&(a.playerParams=Vi);var Ug=b.partnerid;Ug&&(a.Ha=rC(a.Ha,Ug));var zj=b.probe_url;zj&&(a.probeUrl=XJ(g.Nl(zj,{cpn:a.clientPlaybackNonce})));var gl=b.pyv_billable_url;gl&&Rza(gl)&&(a.rj=gl);var pk=b.pyv_conv_url;pk&&Rza(pk)&&(a.hU=pk);lRa(a,b);0<a.startSeconds||(a.startSeconds=rC(a.startSeconds,a.uP||a.BC||b.start||b.startSeconds),a.Fb=a.startSeconds);if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var km=b.live_utc_start;if(null!=
km)a.liveUtcStartSeconds=Number(km);else{var hl=a.startSeconds;hl&&isFinite(hl)&&1E9<hl&&(a.liveUtcStartSeconds=a.startSeconds)}}if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var Kq=b.utc_start_millis;Kq&&(a.liveUtcStartSeconds=.001*Number(Kq))}var Lq=b.stream_time_start_millis;Lq&&(a.uj=.001*Number(Lq));var Mq=a.BC||b.start;void 0==Mq||"1"==b.resume||a.isLivePlayback||(a.clipStart=rC(a.clipStart,Mq));var Nq=b.url_encoded_third_party_media;Nq&&(a.Ml=Xna(Nq));var So=b.ypc_offer_button_formatted_text;
if(So){var Oq=JSON.parse(So);a.cM=null!=Oq?Oq:null;a.QU=So}var He=b.ypc_offer_button_text;He&&(a.zA=He);var Ie=b.ypc_offer_description;Ie&&(a.tp=Ie);var xf=b.ypc_offer_headline;xf&&(a.TA=xf);var Pq=b.ypc_full_video_message;Pq&&(a.Yo=Pq);var Qq=b.ypc_offer_id;Qq&&(a.Pl=Qq);var qk=b.ypc_buy_url;qk&&(a.Wz=qk);var lm=b.ypc_item_thumbnail;lm&&(a.Xz=lm);var il=b.ypc_item_title;il&&(a.Zo=il);var jl=b.ypc_item_url;jl&&(a.oA=jl);var kl=b.ypc_vid;kl&&(a.Op=kl);b.ypc_overlay_timeout&&(a.Jp=Number(b.ypc_overlay_timeout));
var mm=b.ypc_trailer_player_vars;mm&&(a.Ql=HB(mm));var Rq=b.ypc_original_itct;Rq&&(a.uaa=Rq);a.Jl=sC(a.Jl,b.ucid);b.baseUrl&&(a.N.baseUrl=b.baseUrl);b.uid&&(a.N.uid=b.uid);b.oeid&&(a.N.oeid=b.oeid);b.ieid&&(a.N.ieid=b.ieid);b.ppe&&(a.N.ppe=b.ppe);b.engaged&&(a.N.engaged=b.engaged);b.subscribed&&(a.N.subscribed=b.subscribed);a.N.focEnabled=pC(a.N.focEnabled,b.focEnabled);a.N.rmktEnabled=pC(a.N.rmktEnabled,b.rmktEnabled);a.Dy=b.storyboard_spec||null;a.sy=b.live_storyboard_spec||null;a.O0=b.iv_endscreen_url||
null;a.mM=pC(a.mM,b.iv3_module);a.bp=pC(a.bp,b.ypc_license_checker_module);a.jk=pC(a.jk,b.ypc_module);a.Wf=pC(a.Wf,b.ypc_clickwrap_module);a.jk&&a.Ea.push("ypc");a.Wf&&a.Ea.push("ypc_clickwrap");a.KS={video_id:b.video_id,eventid:b.eventid,cbrand:b.cbrand,cbr:b.cbr,cbrver:b.cbrver,c:b.c,cver:b.cver,ctheme:b.ctheme,cplayer:b.cplayer,cmodel:b.cmodel,cnetwork:b.cnetwork,cos:b.cos,cosver:b.cosver,cplatform:b.cplatform,user_age:b.user_age,user_display_image:b.user_display_image,user_display_name:b.user_display_name,
user_gender:b.user_gender,csi_page_type:b.csi_page_type,csi_service_name:b.csi_service_name,enablecsi:b.enablecsi,enabled_engage_types:b.enabled_engage_types};gRa(a,b);var Sq=b.cotn;Sq&&(a.cotn=Sq);if(uRa(a))iT(a)&&(a.isLivePlayback&&a.Bc&&(a.Pi=!0),a.Xa&&(a.Oo=!0));else if(vRa(a))a.Pi=!0;else{var Tq,Uq,To=(null==(Tq=a.playerResponse)?void 0:null==(Uq=Tq.streamingData)?void 0:Uq.adaptiveFormats)||[];if(0<To.length)var nm=wRa(a,To);else{var Vq=a.adaptiveFormats;if(Vq&&!iT(a)){jT(a,"html5_enable_cobalt_experimental_vp9_decoder")&&
(IOa=!0);var Ch=kT(Vq),rk=a.me,ll=a.lengthSeconds,Fs=a.isLivePlayback,om=a.ge,sk=a.Ia,Gs=pOa(Ch);if(Fs||om){var We=new kR("",null==sk?void 0:sk.experiments,!0);We.Cc=!0;We.isManifestless=!0;We.B=!om;We.isLive=!om;We.ge=om;for(var oi=g.v(Ch),Dh=oi.next();!Dh.done;Dh=oi.next()){var Eh=Dh.value,un=oOa(Eh,rk),Wi=mR(Eh.url,Eh.sp,Eh.s),Wq=Wi.get("id");Wq&&Wq.includes("%7E")&&(We.qa=!0);var Hs=Number(Eh.target_duration_sec)||5,Is=Number(Eh.max_dvr_duration_sec)||14400,Xq=Number(Wi.get("mindsq")||Wi.get("min_sq")||
"0"),ml=Number(Wi.get("maxdsq")||Wi.get("max_sq")||"0")||Infinity;We.qf=We.qf||Xq;We.Zi=We.Zi||ml;var pm=!dL(un.mimeType);Wi&&jR(We,new bR(Wi,un,{Kj:Hs,Ym:pm,Fq:Is,qf:Xq,Zi:ml,mA:300,ge:om}))}var qm=We}else{if("FORMAT_STREAM_TYPE_OTF"===Gs){var rm=ll;rm=void 0===rm?0:rm;var nl=new kR("",null==sk?void 0:sk.experiments,!1);nl.duration=rm||0;for(var Yq=g.v(Ch),Uo=Yq.next();!Uo.done;Uo=Yq.next()){var tk=Uo.value,Vo=oOa(tk,rk,nl.duration),Xi=mR(tk.url,tk.sp,tk.s);if(Xi)if("FORMAT_STREAM_TYPE_OTF"===Vo.streamType)jR(nl,
new cR(Xi,Vo,"sq/0"));else{var Aj=HQ(tk.init),ol=HQ(tk.index);jR(nl,new hR(Xi,Vo,Aj,ol))}}nl.isOtf=!0;var Wo=nl}else{var pl=ll;pl=void 0===pl?0:pl;var sm=new kR("",null==sk?void 0:sk.experiments,!1);sm.duration=pl||0;for(var tm=g.v(Ch),um=tm.next();!um.done;um=tm.next()){var Yi=um.value,Js=oOa(Yi,rk,sm.duration),vm=HQ(Yi.init),uk=HQ(Yi.index),vk=mR(Yi.url,Yi.sp,Yi.s);vk&&jR(sm,new hR(vk,Js,vm,uk))}Wo=sm}qm=Wo}var ql=qm;if(0<Ch.length){var Zq=Ch[0];if("hangouts-meet"===a.U().playerStyle&&Zq.url){var Ks=
g.IB(Zq.url);a.Wo=a.Wo||Number(Ks.expire)}}var Ls=a.isLivePlayback&&!a.ge&&!a.rb&&!a.isPremiere;a.L("html5_live_head_playable")&&(!lT(a)&&Ls&&a.va("missingLiveHeadPlayable",{}),"yt"===a.Ia.Aa&&(ql.Va=!0));ql.Sa=mT(a);nm=ql}else nm=null;a.va("pafmts",{isManifestFilled:!!nm})}if(nm){xRa(a,nm);var $q=!0}else $q=!1;$q?a.enableServerStitchedDai=a.enableServerStitchedDai&&nT(a):a.Bc&&(a.Pi=!0)}var Xo=b.adpings;Xo&&(a.Bx=Xo?HB(Xo):null);var Yo=b.feature;Yo&&(a.So=Yo);var Zo=b.referrer;Zo&&(a.referrer=Zo);
a.clientScreenNonce=sC(a.clientScreenNonce,b.csn);a.vF=rC(a.vF,b.root_ve_type);a.Po=rC(a.Po,b.kids_age_up_mode);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);a.Fy=pC(a.Fy,b.upg_content_filter_mode);var ar=b.unplugged_location_info;ar&&(a.ma=ar);var br=b.unplugged_partner_opt_out;br&&(a.jG=sC("",br));a.Lx=pC(a.Lx,b.disable_watch_next);a.No=sC(a.No,b.internal_ip_override);a.FC=!!b.is_yto_interstitial;(a.interstitials.length||a.FC)&&a.Ea.push("yto");var Bj=b.wm;Bj&&(a.wm=Bj);b.JK&&(a.JK=b.JK);
var wk;a.Ka=null!=(wk=b.csi_timer)?wk:"";a.Mo=!!b.force_gvi;b.watchUrl&&(a.watchUrl=b.watchUrl);var Vg=b.watch_endpoint;a.L("html5_attach_watch_endpoint_ustreamer_config")&&Vg&&nQa(a,Vg);if(null==Vg?0:Vg.ustreamerConfig)a.Fo=MR(Vg.ustreamerConfig);var cr,dr,er=null==Vg?void 0:null==(cr=Vg.loggingContext)?void 0:null==(dr=cr.qoeLoggingContext)?void 0:dr.serializedContextData;er&&(a.J7=er);g.aS(a.Ia)&&a.Ia.Gm&&(a.embedsRct=sC(a.embedsRct,b.rct),a.embedsRctn=sC(a.embedsRctn,b.rctn));a.Mm=a.Mm||!!b.pause_at_start;
b.default_active_source_video_id&&(a.defaultActiveSourceVideoId=b.default_active_source_video_id)};
jRa=function(a,b){var c,d=null==(c=b.cacheMetadata)?void 0:c.isCacheHit,e;(b=null==(e=b.cpnInfo)?void 0:e.cpn)?(a.playerResponseCpn=b,d||(a.clientPlaybackNonce=b)):a.iK("ssei","nci")};
fRa=function(a,b){var c=b.raw_watch_next_response;if(!c){var d=b.watch_next_response;d&&(c=JSON.parse(d))}if(c){a.Na=c;var e=a.Na.playerCueRangeSet;e&&g.sRa(a,e);var f=a.Na.playerOverlays;if(f){var h=f.playerOverlayRenderer;if(h){var l=h.autonavToggle;l&&(a.autoplaySwitchButtonRenderer=g.S(l,yRa),a.L("web_player_autonav_use_server_provided_state")&&zRa(a)&&(a.autonavState=a.autoplaySwitchButtonRenderer.enabled?2:1));var m=h.videoDetails;if(m){var n=m.embeddedPlayerOverlayVideoDetailsRenderer;var p=
m.playerOverlayVideoDetailsRenderer;p&&(p.title&&(b.title=g.dG(p.title)),p.subtitle&&(b.subtitle=g.dG(p.subtitle)))}g.fS(a.Ia)&&(a.Xd=!!h.addToMenu);ARa(a,h.shareButton);a.L("progress_bar_start_end_null_check_killswitch")?(a.progressBarStartPosition=h.startPosition,a.progressBarEndPosition=h.endPosition):h.startPosition&&h.endPosition&&(a.progressBarStartPosition=h.startPosition,a.progressBarEndPosition=h.endPosition);var q=h.gatedActionsOverlayRenderer;q&&(a.w4=g.S(q,BRa));var r,t,u,x=g.S(null==
(r=a.getWatchNextResponse())?void 0:null==(t=r.playerOverlays)?void 0:null==(u=t.playerOverlayRenderer)?void 0:u.infoPanel,CRa);if(x){a.AC=Number(null==x?void 0:x.durationMs)||NaN;if(null==x?0:x.infoPanelOverviewViewModel)a.Le=null==x?void 0:x.infoPanelOverviewViewModel;if(null==x?0:x.infoPanelDetailsViewModel)a.Gm=null==x?void 0:x.infoPanelDetailsViewModel}a.showSeekingControls=!!h.showSeekingControls}}var B,F,G=null==(B=a.getWatchNextResponse())?void 0:null==(F=B.contents)?void 0:F.twoColumnWatchNextResults;
if(G){var H=G.desktopOverlay&&g.S(G.desktopOverlay,DRa);H&&(H.suppressShareButton&&(a.showShareButton=!1),H.suppressWatchLaterButton&&(a.Xd=!1))}n&&ERa(a,b,n);var O=rC(0,b.autoplay_count),P=a.getWatchNextResponse(),Y,la=null==(Y=P.contents)?void 0:Y.twoColumnWatchNextResults,pa,ua,na,wa=null==(pa=P.playerOverlays)?void 0:null==(ua=pa.playerOverlayRenderer)?void 0:null==(na=ua.autoplay)?void 0:na.playerOverlayAutoplayRenderer,ea=EQa(a),Ea,Z=null==(Ea=P.contents)?void 0:Ea.singleColumnWatchNextResults;
if(Z){var Qa;if((null==(Qa=Z.autoplay)?0:Qa.autoplay)&&!Z.playlist){var z=Z.autoplay.autoplay.sets,W={},bb=new g.PS(a.U()),eb=null,jb;if(z){for(var Ya=g.v(z),Tb=Ya.next();!Tb.done;Tb=Ya.next()){var Pb=Tb.value.autoplayVideoRenderer;if(Pb&&Pb.compactVideoRenderer){eb=Pb.compactVideoRenderer;break}}if(jb=z[0].autoplayVideo){var kb=jb.clickTrackingParams;kb&&(W.itct=kb);W.autonav="1";W.playnext=String(O)}}else W.feature="related-auto";var Gb=g.S(jb,g.oT);if(eb){bb.videoId=eb.videoId;var Va=eb.shortBylineText;
Va&&(bb.author=g.dG(Va));var A=eb.title;A&&(bb.title=g.dG(A))}else null!=Gb&&Gb.videoId&&(bb.videoId=Gb.videoId);bb.iD=W;a.suggestions=[];a.TB=bb}}if(ea){for(var D=[],E=g.v(ea),C=E.next();!C.done;C=E.next()){var K=C.value,T=void 0,fa=null;if(K.endScreenVideoRenderer){var ra=K.endScreenVideoRenderer,da=ra.title;fa=new g.PS(a.U());fa.videoId=ra.videoId;fa.lengthSeconds=ra.lengthInSeconds||0;var ha=ra.publishedTimeText;ha&&(fa.publishedTimeText=g.dG(ha));var Fa=ra.shortBylineText;Fa&&(fa.author=g.dG(Fa));
var xa=ra.shortViewCountText;xa&&(fa.shortViewCount=g.dG(xa));if(da){fa.title=g.dG(da);var cb=da.accessibility;if(cb){var Ib=cb.accessibilityData;Ib&&Ib.label&&(fa.ariaLabel=Ib.label)}}var Lb=ra.navigationEndpoint;if(Lb){T=Lb.clickTrackingParams;var Qb=g.S(Lb,g.oT),Ab=g.S(Lb,g.pG);Qb?fa.jD=Qb:null!=Ab&&(fa.watchUrl=Ab.url)}var Mb=ra.thumbnailOverlays;if(Mb)for(var cd=g.v(Mb),Bc=cd.next();!Bc.done;Bc=cd.next()){var md=Bc.value.thumbnailOverlayTimeStatusRenderer;if(md)if("LIVE"===md.style){fa.isLivePlayback=
!0;break}else if("UPCOMING"===md.style){fa.isUpcoming=!0;break}}fa.Z=KS(ra.thumbnail)}else if(K.endScreenPlaylistRenderer){var Mc=K.endScreenPlaylistRenderer,nd=Mc.navigationEndpoint;if(!nd)continue;var od=g.S(nd,g.oT);if(!od)continue;var $b=od.videoId;fa=new g.OS(a.U());fa.playlistId=Mc.playlistId;fa.playlistLength=Number(Mc.videoCount)||0;fa.j=$b||null;fa.videoId=$b;var nc=Mc.title;nc&&(fa.title=g.dG(nc));var Ld=Mc.shortBylineText;Ld&&(fa.author=g.dG(Ld));T=nd.clickTrackingParams;fa.Z=KS(Mc.thumbnail)}fa&&
(T&&(fa.sessionData={itct:T}),D.push(fa))}a.suggestions=D}if(wa){a.LS=!!wa.preferImmediateRedirect;a.Sf=a.Sf||!!wa.webShowNewAutonavCountdown;a.Kl=a.Kl||!!wa.webShowBigThumbnailEndscreen;if(a.Sf||a.Kl){var ac=new g.PS(a.U());ac.videoId=wa.videoId;var dd=wa.videoTitle;if(dd){ac.title=g.dG(dd);var ed=dd.accessibility;if(ed){var Nb=ed.accessibilityData;Nb&&Nb.label&&(ac.ariaLabel=Nb.label)}}var Ed=wa.byline;Ed&&(ac.author=g.dG(Ed));var Ud=wa.publishedTimeText;Ud&&(ac.publishedTimeText=g.dG(Ud));var Ub=
wa.shortViewCountText;Ub&&(ac.shortViewCount=g.dG(Ub));var cf=wa.thumbnailOverlays;if(cf)for(var Ae=g.v(cf),Be=Ae.next();!Be.done;Be=Ae.next()){var pe=Be.value.thumbnailOverlayTimeStatusRenderer;if(pe)if("LIVE"===pe.style){ac.isLivePlayback=!0;break}else if("UPCOMING"===pe.style){ac.isUpcoming=!0;break}else if("DEFAULT"===pe.style&&pe.text){ac.lengthText=g.dG(pe.text);var lh=pe.text.accessibility;if(lh){var Kg=lh.accessibilityData;Kg&&Kg.label&&(ac.pw=Kg.label||"")}break}}ac.Z=KS(wa.background);var mh=
wa.nextButton;if(mh){var nh=mh.buttonRenderer;if(nh){var Lg=nh.navigationEndpoint;if(Lg){var oh=g.S(Lg,g.oT);oh&&(ac.jD=oh)}}}if(wa.topBadges){var Ce=wa.topBadges[0];if(Ce){var df=g.S(Ce,FRa);df&&"BADGE_STYLE_TYPE_PREMIUM"===df.style&&(ac.JK=!0)}}var Zc=wa.alternativeTitle;Zc&&(ac.Ds=g.dG(Zc));var ee=la||null,vc={autonav:"1",playnext:String(O)};ac.playlistId&&(vc.autoplay="1");if(ee){var Mg,ph,qh,rh,De=null==(Mg=ee.autoplay)?void 0:null==(ph=Mg.autoplay)?void 0:null==(qh=ph.sets)?void 0:null==(rh=
qh[0])?void 0:rh.autoplayVideo;if(De){var wc=De.clickTrackingParams;wc&&(vc.itct=wc);var Kf=g.S(De,g.oT);Kf&&(ac.hV=Kf)}}else if(wa){var Zh,$h,Ii,ef=null==(Zh=wa.nextButton)?void 0:null==($h=Zh.buttonRenderer)?void 0:null==(Ii=$h.navigationEndpoint)?void 0:Ii.clickTrackingParams;ef&&(vc.itct=ef)}vc.itct||(vc.feature="related-auto");ac.iD=vc;a.suggestions||(a.suggestions=[]);a.TB=ac}null!=wa.countDownSecs&&(a.LU=1E3*wa.countDownSecs);null!=wa.countDownSecsForFullscreen&&(a.YB=0<=wa.countDownSecsForFullscreen?
1E3*wa.countDownSecsForFullscreen:-1);if(a.L("web_player_autonav_next_button_renderer")){var eg;a.y5=null==(eg=wa.nextButton)?void 0:eg.buttonRenderer}var Qe;a.X4=null==(Qe=wa.cancelButton)?void 0:Qe.buttonRenderer;a.L("web_autonav_color_transition")&&wa.watchToWatchTransitionRenderer&&(a.watchToWatchTransitionRenderer=g.S(wa.watchToWatchTransitionRenderer,GRa))}var fg=EQa(a);if(fg){var sf,Fc,rc,bc=null==fg?void 0:null==(sf=fg[0])?void 0:null==(Fc=sf.endScreenVideoRenderer)?void 0:null==(rc=Fc.navigationEndpoint)?
void 0:rc.clickTrackingParams,Ng=g.pT(a);bc&&Ng&&(Ng.sessionData={itct:bc})}a.Na.currentVideoThumbnail&&(a.Z=KS(a.Na.currentVideoThumbnail));var ff,Lf,Mf,Ji,rj,gg=null==(ff=a.Na)?void 0:null==(Lf=ff.contents)?void 0:null==(Mf=Lf.twoColumnWatchNextResults)?void 0:null==(Ji=Mf.results)?void 0:null==(rj=Ji.results)?void 0:rj.contents;if(gg&&gg[1]){var sh,ai,bi,hg,gf=null==(sh=gg[1].videoSecondaryInfoRenderer)?void 0:null==(ai=sh.owner)?void 0:null==(bi=ai.videoOwnerRenderer)?void 0:null==(hg=bi.thumbnail)?
void 0:hg.thumbnails;gf&&gf.length&&(a.profilePicture=gf[gf.length-1].url)}var Og=tC(b),Nf,Ki=null==(Nf=a.getWatchNextResponse())?void 0:Nf.onResponseReceivedEndpoints;if(Ki)for(var ig=g.v(Ki),Pg=ig.next();!Pg.done;Pg=ig.next()){var th=Pg.value;g.S(th,qT)&&(a.R0=g.S(th,qT));var Qg=g.S(th,HRa),Ee=void 0;(a.L("web_key_moments_markers")||a.L("web_heat_map_v2"))&&(null==(Ee=Qg)?0:Ee.entityKeys)&&(a.uy=Qg.entityKeys||[],Qg.visibleOnLoadKeys&&(a.visibleOnLoadKeys=Qg.visibleOnLoadKeys))}if(a.L("web_key_moments_markers")){var Fe=
g.rT.getState().entities,Re=g.UO("visibility_override","markersVisibilityOverrideEntity");var qe=WO(Fe,"markersVisibilityOverrideEntity",Re);a.Je=(null==qe?void 0:qe.videoId)===(a.videoId||Og)&&(null==qe?0:qe.visibilityOverrideMarkersKey)?qe.visibilityOverrideMarkersKey:a.visibleOnLoadKeys;a.visibleOnLoadKeys=[].concat(g.oa(a.Je))}}};
zRa=function(a){var b;return void 0!==(null==(b=a.autoplaySwitchButtonRenderer)?void 0:b.enabled)};
IRa=function(a){return!!(a.C&&a.C.videoInfos&&a.C.videoInfos.length)};
uT=function(a){var b=a.Y;a.L("html5_gapless_unlimit_format_selection")&&a.Ia.supportsGaplessShorts()&&g.sT(a)&&(b=!1);var c=!!a.j&&a.j.Cc,d=a.Ia,e=a.UO(),f=tT(a),h=a.aM,l=b,m=a.isOtf();b=a.BM();var n=a.ob,p=a.Uf,q=JRa(a),r=new JOa(d);if(d.Tc()||d.L("html5_logging_format_selection"))r.B=!0;r.Za=f;r.Ka=h&&d.K;r.Uf=p;g.fC("windows nt 5.1")&&!g.AR&&(r.ao=!0);if(f=e)f=g.vS(d)?PPa(d):!1;f&&(r.Aa=!0);l&&(r.ao=!0,r.Bc=!0);m&&!d.L("html5_otf_prefer_vp9")&&(r.ao=!0);"picasaweb"===d.playerStyle&&(m&&(r.ao=!1),
r.Ha=!1);n&&(r.ao=!0);f=d.L("html5_ugc_vod_audio_51")&&!c;h=d.L("html5_ugc_live_audio_51")&&c;r.Sa=f||h;RP(d.G,SP.CHANNELS)&&(d.L("html5_enable_aac51")&&(r.qa=!0),d.L("html5_enable_ac3")&&(r.D=!0),d.L("html5_enable_eac3")&&(r.G=!0),d.L("html5_enable_ac3_gapless")&&(r.Na=!0));d.L("html5_block_8k_hfr")&&(r.fb=!0);r.K=g.tJ(d.experiments,"html5_max_selectable_quality_ordinal");r.N=g.tJ(d.experiments,"html5_min_selectable_quality_ordinal");ZR&&(r.hc=480);if(c||e)r.Ha=!1;r.ob=!1;r.disableAv1=q;c=LOa(d,
r.j,void 0,r.disableAv1);0<c&&2160>c&&(qL()||d.L("html5_format_hybridization"))&&(r.j.supportsChangeType=+qL(),r.lj=c);2160<=c&&(r.Ea=!0);MLa()&&(r.j.serveVp9OverAv1IfHigherRes=0,r.jd=!1);r.BM=b;r.Xa=g.KD||Ooa()&&!b?!1:!0;r.Y=d.L("html5_format_hybridization");r.Mb=d.L("html5_disable_encrypted_vp9_live_non_2k_4k");iC()&&a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.useCobaltTvosDogfoodFeatures&&(r.D=!0,
r.G=!0);a.Y&&a.isAd()&&(a.xx&&(r.ma=a.xx),a.Xw&&(r.C=a.Xw));r.Va=a.isLivePlayback&&a.yj()&&a.Ia.L("html5_drm_live_audio_51");r.tb=a.eC;return a.Ke=r};
JRa=function(a){return a.Ia.L("html5_disable_av1")||a.L("html5_gapless_shorts_disable_av1")&&a.Ia.supportsGaplessShorts()&&g.sT(a)?!0:!1};
LRa=function(a){SH("drm_pb_s",void 0,a.Ka);a.Xa||a.j&&OP(a.j);var b={};a.j&&(b=ULa(a.Kx,uT(a),a.Ia.G,a.j,function(c){return a.oa("ctmp","fmtflt",c)},!0));
b=new BR(b,a.Ia,a.HU,a.useCobaltWidevine?iC()?KRa(a):!1:!1,function(c,d){a.va(c,d)});
g.L(a,b);a.Oo=!1;a.loading=!0;ROa(b,function(c){SH("drm_pb_f",void 0,a.Ka);for(var d=g.v(c),e=d.next();!e.done;e=d.next())switch(e=e.value,e.flavor){case "fairplay":e.Xa=a.Xa;e.ly=a.ly;e.jy=a.jy;break;case "widevine":e.Ol=a.Ol}a.Qo=c;if(0<a.Qo.length&&(a.K=a.Qo[0],a.Ia.Tc())){c={};d=g.v(Object.entries(a.K.j));for(e=d.next();!e.done;e=d.next()){var f=g.v(e.value);e=f.next().value;f=f.next().value;var h="unk";(e=e.match(/(.*)codecs="(.*)"/))&&(h=e[2]);c[h]=f}a.va("drmProbe",c)}fT(a)})};
wRa=function(a,b){if(0===b.length||iT(a))return null;jT(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(IOa=!0);var c=a.me;var d=a.lengthSeconds,e=a.isLivePlayback,f=a.ge,h=a.Ia,l=qOa(b);if(e||f){h=new kR("",h.experiments,!0);h.B=!f;h.Cc=!0;h.isManifestless=!0;h.isLive=!f;h.ge=f;b=g.v(b);for(d=b.next();!d.done;d=b.next()){var m=d.value;d=lR(m,c);e=YP(m);e=mR(e.TC||m.url||"",e.NF,e.s);(l=e.get("id"))&&l.includes("%7E")&&(h.qa=!0);l=Number(m.targetDurationSec||5);m=Number(m.maxDvrDurationSec||14400);
var n=Number(e.get("mindsq")||e.get("min_sq")||"0"),p=Number(e.get("maxdsq")||e.get("max_sq")||"0")||Infinity;h.qf=h.qf||n;h.Zi=h.Zi||p;var q=!dL(d.mimeType);e&&jR(h,new bR(e,d,{Kj:l,Ym:q,Fq:m,qf:n,Zi:p,mA:300,ge:f}))}c=h}else if("FORMAT_STREAM_TYPE_OTF"===l){d=void 0===d?0:d;f=new kR("",h.experiments,!1);f.duration=d||0;h=g.v(b);for(b=h.next();!b.done;b=h.next())b=b.value,d=lR(b,c,f.duration),e=YP(b),(e=mR(e.TC||b.url||"",e.NF,e.s))&&("FORMAT_STREAM_TYPE_OTF"===d.streamType?jR(f,new cR(e,d,"sq/0")):
jR(f,new hR(e,d,JQ(b.initRange),JQ(b.indexRange))));f.isOtf=!0;c=f}else{d=void 0===d?0:d;f=new kR("",h.experiments,!1);f.duration=d||0;h=g.v(b);for(b=h.next();!b.done;b=h.next())l=b.value,b=lR(l,c,f.duration),d=JQ(l.initRange),e=JQ(l.indexRange),m=YP(l),(l=mR(m.TC||l.url||"",m.NF,m.s))&&jR(f,new hR(l,b,d,e));c=f}f=a.isLivePlayback&&!a.ge&&!a.rb&&!a.isPremiere;a.L("html5_live_head_playable")&&(!lT(a)&&f&&a.va("missingLiveHeadPlayable",{}),"yt"===a.Ia.Aa&&(c.Va=!0));c.Sa=mT(a);return c};
iT=function(a){return iC()?!KRa(a):jC()?!(!a.Xa||!a.L("html5_enable_safari_fairplay")):!1};
KRa=function(a){return a.L("html5_tvos_skip_dash_audio_check")||MediaSource.isTypeSupported('audio/webm; codecs="opus"')};
g.sRa=function(a,b){b=g.v(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.cueRangeSetIdentifier){var d=void 0;a.mL.set(c.cueRangeSetIdentifier,null!=(d=c.playerCueRanges)?d:[])}};
nT=function(a){return!(!a.j||!a.j.isManifestless)};
vT=function(a){return a.isLowLatencyLiveStream&&void 0!=a.j&&5<=pR(a.j)};
uRa=function(a){return iC()&&KRa(a)?!1:iT(a)&&g.CJ(a.Ia)&&!a.isLivePlayback||!HR()||a.dC?!0:!1};
NRa=function(a){a.loading=!0;a.Pi=!1;if(vRa(a))g.RQa(a.videoId).then(function(c){MRa(a,c)}).then(function(){fT(a)});
else{VJ(a.Bc)||g.AF(new g.UC("DASH MPD Origin invalid: ",a.Bc));var b=a.Bc;b=g.Nl(b,{mpd_version:g.tJ(a.Ia.experiments,"dash_manifest_version")||4});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(b=g.Nl(b,{pacing:0}));yOa(b,a.Ia.experiments,a.isLivePlayback).then(function(c){a.isDisposed()||(xRa(a,c,!0),SH("mrc",void 0,a.Ka),fT(a))},function(c){a.isDisposed()||(a.loading=!1,a.oa("dataloaderror",new HK("manifest.net.retryexhausted",{backend:"manifest",
rc:c.status},1)))});
SH("mrs",void 0,a.Ka)}};
MRa=function(a,b){var c=b.map(function(l){return l.itag}),d;
if(null!=(d=a.playerResponse)&&d.streamingData){d=[];for(var e=g.v(a.playerResponse.streamingData.adaptiveFormats),f=e.next(),h={};!f.done;h={Iq:h.Iq},f=e.next())h.Iq=f.value,c.includes(h.Iq.itag)&&(h.Iq=Object.assign({},h.Iq),h.Iq.url=b.find(function(l){return function(m){return m.itag===l.Iq.itag}}(h)).url,h.Iq.signatureCipher="",d.push(h.Iq));
b=wRa(a,d);xRa(a,b);a.va("dlr",{})}else a.va("offsdm",{cotn:a.KN?a.KN.cotn:"0",cpn:a.clientPlaybackNonce})};
wT=function(a){if(!a.isProximaLatencyEligible)return!1;var b=GLa();return null!=b?1===b:a.L("html5_enable_proxima")};
fT=function(a){a.isDisposed()||(a.loading=!1,a.oa("dataloaded"))};
xRa=function(a,b,c){c=void 0===c?!1:c;a.j=b;g.L(a,b);b.qf=a.qf;b.Zi=a.Zi;b.Mb=a.Mb;b.kd=a.kd;b.Ad=a.Ad;a.By&&(b.Na=new VQ(a.By));ORa(a)&&a.Ea.push("webgl");a.j.isLive||(a.isLivePlayback=!1);var d=b.sourceUrl.split("/");-1!=d.indexOf("manifest_duration")&&(a.Im=Number(d[d.indexOf("manifest_duration")+1]));b.B&&(b.subscribe("clienttemp",a.va,a),c?b.subscribe("refresh",a.SY,a):b.subscribe("cuepointsadded",a.yV,a));OP(b)?a.Oo=!0:CR=void 0;a.rb&&(b.C=a.rb,b.isLive=!0,a.isLivePlayback=!0);b.isPremiere=
a.isPremiere;b.isLiveHeadPlayable=a.isLiveHeadPlayable};
TRa=function(a,b){if(a.isDisposed())return $B();a.C=null;a.Za=null;a.md=null;jT(a,"html5_high_res_logging_always")&&(a.Ia.Sf=!0);return PRa(a,b).then(void 0,function(){return QRa(a,b)}).then(void 0,function(){return RRa(a)}).then(void 0,function(){return SRa(a)})};
PRa=function(a,b){var c=b||uRa(a)||a.isExternallyHostedPodcast;if(!a.j||c)return a.va("skipDash",{dm:!!a.j,air:b,dd:a.dC,mss:HR(),"3pp":a.isExternallyHostedPodcast}),$B();tT(a)&&DOa(a.j,a.isLivePlayback);jT(a,"html5_enable_cobalt_experimental_vp9_decoder")&&hPa(a.Ia.G);return aC().then(function(){return WLa(a.Kx,uT(a),a.Ia.G,a.j,a.K,function(d){return a.oa("ctmp","fmtflt",d)},a.eP,mT(a)&&a.L("html5_enable_server_format_filter")).then(function(d){URa(a,d);
a.Kx.j=null;/^av/.test(a.clientPlaybackNonce)&&a.Ke&&a.va("av1",a.Ke.j)})})};
QRa=function(a,b){if(b&&a.hlsvp)return $B();if(a.hlsFormats){b=kT(a.hlsFormats);var c;if((null==(c=a.Ke)?0:c.B)&&b){c=[];for(var d=g.v(b),e=d.next();!e.done;e=d.next())c.push(e.value.itag);a.va("hlsfmt",{itags:c.join(".")})}a.py=bQa(a.Ia,b);c=a.clientPlaybackNonce;var f,h,l,m;return gQa(a.Ia,a.isAd(),b,null!=(m=null==(f=a.playerResponse)?void 0:null==(h=f.captions)?void 0:null==(l=h.playerCaptionsRenderer)?void 0:l.baseUrl)?m:null,a.jd,c,function(n){return a.oa("ctmp","hlsflt",n)}).then(function(n){for(var p=
0,q=[],r=g.v(n),t=r.next();!t.done;t=r.next()){t=t.value;
var u=void 0;q.push(null==(u=t.uh())?void 0:u.itag);var x=u=void 0;(null==(u=t.uh())?void 0:null==(x=u.audio)?void 0:x.numChannels)>p&&(p=t.uh().audio.numChannels)}2<p&&a.va("hlschl",{mn:p});var B;(null==(B=a.Ke)?0:B.B)&&a.va("hlsfmtaf",{itags:q.join(".")});var F;if(a.L("html5_enable_vp9_fairplay")&&(null==(F=a.K)?0:yR(F)))for(a.va("drm",{sbdlfbk:1}),p=g.v(a.Qo),q=p.next();!q.done;q=p.next())if(q=q.value,xR(q)){a.K=q;break}xT(a,n)})}return $B()};
RRa=function(a){if(a.isExternallyHostedPodcast&&a.Tf){var b=kT(a.Tf);if(!b[0])return $B();a.z8=b[0];return jQa(a.Ia,b[0]).then(function(c){xT(a,c)})}return a.Ml&&a.n0?iQa(a.Ia,a.isAd(),a.Ml).then(function(c){xT(a,c)}):$B()};
SRa=function(a){if(a.isExternallyHostedPodcast)return $B();var b=kT(a.Tf,a.yC);if(a.hlsvp){var c=cRa(a.hlsvp,a.clientPlaybackNonce,a.jd);b.push(c)}return hQa(a.Ia,a.isAd(),b,VRa(a)).then(function(d){xT(a,d)})};
URa=function(a,b){a.C=b;if(a.C){b=g.v(a.C.videoInfos);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=c.containerType;0!==d&&(a.SU[d]=c.id)}}WRa(a);if(a.K&&a.C&&a.C.videoInfos&&!(0>=a.C.videoInfos.length)&&(b=aL(a.C.videoInfos[0]),b!=("fairplay"==a.K.flavor)))for(c=g.v(a.Qo),d=c.next();!d.done;d=c.next())if(d=d.value,b==("fairplay"==d.flavor)){a.K=d;break}};
xT=function(a,b){a.md=b;URa(a,new KP(g.mr(a.md,function(c){return c.uh()})))};
VRa=function(a){var b={cpn:a.clientPlaybackNonce,c:a.Ia.j.c,cver:a.Ia.j.cver};a.vy&&(b.ptk=a.vy,b.oid=a.GS,b.ptchn=a.U0,b.pltype=a.HS,a.Nx&&(b.m=a.Nx));return b};
g.yT=function(a){return iT(a)&&a.Xa?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.B&&a.B.me||null};
XRa=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.dG(b.text):a.paidContentOverlayText};
YRa=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?ze(b.durationMs):a.paidContentOverlayDurationMs};
zT=function(a){var b="";if(a.oM)return a.oM;a.isLivePlayback&&(b=a.allowLiveDvr?"dvr":a.isPremiere?"lp":a.rb?"window":"live");a.ge&&(b="post");return b};
g.AT=function(a,b){return"string"!==typeof a.keywords[b]?null:a.keywords[b]};
ZRa=function(a){return!!a.rj||!!a.OP||!!a.yy||!!a.zy||a.LX||a.N.focEnabled||a.N.rmktEnabled};
g.BT=function(a){return!!(a.Bc||a.Tf||a.Ml||a.hlsvp||a.Qv())};
eT=function(a){if(a.L("html5_onesie")&&a.errorCode)return!1;var b=g.Bb(a.Ea,"ypc");a.ypcPreview&&(b=!1);return a.He()&&!a.loading&&(g.BT(a)||g.Bb(a.Ea,"heartbeat")||b)};
kT=function(a,b){a=Xna(a);var c={};if(b){b=g.v(b.split(","));for(var d=b.next();!d.done;d=b.next())(d=d.value.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(c[d[1]]={width:d[2],height:d[3]})}b=g.v(a);for(d=b.next();!d.done;d=b.next()){d=d.value;var e=c[d.itag];e&&(d.width=e.width,d.height=e.height)}return a};
WRa=function(a){var b=a.getAvailableAudioTracks();b=b.concat(a.Al);for(var c=0;c<a.ZB.length;c++)for(var d=a.ZB[c],e=0;e<b.length;e++){var f=b[e],h=f.Lc.id==d.audioTrackId;if(f.Lc.isDefault&&c==a.RU||h){if(d.captionTrackIndices)for(h=0;h<d.captionTrackIndices.length;h++)f.captionTracks[h]=a.captionTracks[d.captionTrackIndices[h]];void 0!==d.defaultCaptionTrackIndex&&(f.C=a.captionTracks[d.defaultCaptionTrackIndex]);void 0!==d.forcedCaptionTrackIndex&&(f.j=a.captionTracks[d.forcedCaptionTrackIndex]);
f.B=d.visibility||"UNKNOWN";f.captionsInitialState=d.captionsInitialState||"CAPTIONS_INITIAL_STATE_UNKNOWN"}}};
ARa=function(a,b){a.showShareButton=!!b;var c,d,e=(null==(c=g.S(b,g.eN))?void 0:c.navigationEndpoint)||(null==(d=g.S(b,g.eN))?void 0:d.command);e&&(a.Vo=!!g.S(e,$Ra))};
eRa=function(a,b){var c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.qg=c);if(a.qg){a.embeddedPlayerConfig=a.qg.embeddedPlayerConfig||null;if(c=a.qg.videoFlags)c.playableInEmbed&&(a.allowEmbed=!0),c.isPrivate&&(a.isPrivate=!0),c.userDisplayName&&(b.user_display_name=c.userDisplayName),c.userDisplayImage&&(b.user_display_image=c.userDisplayImage);if(c=a.qg.embedPreview){c=c.thumbnailPreviewRenderer;CQa(a,c.controlBgHtml);if(d=c.defaultThumbnail)a.Z=
KS(d);(d=g.S(null==c?void 0:c.videoDetails,aSa))&&ERa(a,b,d);d=g.S(null==c?void 0:c.videoDetails,g.bSa);a.Xd=!!c.addToWatchLaterButton;ARa(a,c.shareButton);if(null==d?0:d.musicVideoType)a.musicVideoType=d.musicVideoType;var e,f,h,l,m;if(d=g.S(null==(e=a.qg)?void 0:null==(f=e.embedPreview)?void 0:null==(h=f.thumbnailPreviewRenderer)?void 0:null==(l=h.playButton)?void 0:null==(m=l.buttonRenderer)?void 0:m.navigationEndpoint,g.oT))nQa(a,d),a.videoId=d.videoId||a.videoId;c.videoDurationSeconds&&(a.lengthSeconds=
ze(c.videoDurationSeconds));c.webPlayerActionsPorting&&BQa(a,c.webPlayerActionsPorting);if(e=g.S(null==c?void 0:c.playlist,cSa)){a.Rm=!0;f=[];h=Number(e.currentIndex);if(e.contents)for(l=0,m=e.contents.length;l<m;l++)if(c=e.contents[l].playlistPanelVideoRenderer){d=c.shortBylineText?g.dG(c.shortBylineText):"";var n=c.title?g.dG(c.title):"";f.push({author:d,encrypted_id:c.videoId,title:n,channel_path:l===h?b.channel_path:"",profile_picture:l===h?b.profile_picture:"",is_private:l===h?a.isPrivate:!0,
is_dni:l===h?a.Kf:!1,dni_color:l===h?a.wp:""})}b={index:e.currentIndex,list:e.playlistId,playlist_length:e.totalVideos,video:f};e.titleText&&(b.title=g.dG(e.titleText));e.shortBylineText&&(b.author=g.dG(e.shortBylineText));a.xV=b}var p,q,r;if(b=g.S(null==(p=a.qg)?void 0:null==(q=p.embedPreview)?void 0:null==(r=q.thumbnailPreviewRenderer)?void 0:r.infoPanel,CRa)){a.AC=Number(null==b?void 0:b.durationMs)||NaN;if(null==b?0:b.infoPanelOverviewViewModel)a.Le=null==b?void 0:b.infoPanelOverviewViewModel;
if(null==b?0:b.infoPanelDetailsViewModel)a.Gm=null==b?void 0:b.infoPanelDetailsViewModel}}if(a.qg.previewPlayabilityStatus){if(a.wy=a.qg.previewPlayabilityStatus,p=a.wy,!["OK","LIVE_STREAM_OFFLINE"].includes(p.status)){a.errorCode=lQa(p.errorCode);q=p.errorScreen;if(r=null==q?void 0:q.playerErrorMessageRenderer){a.uC=r;if(b=r.reason)a.errorReason=g.dG(b);if(r=r.subreason)a.hn=g.dG(r)}else a.errorReason=p.reason||null;switch(p.status){case "LOGIN_REQUIRED":a.errorDetail="1";break;case "CONTENT_CHECK_REQUIRED":a.errorDetail=
"2";break;case "AGE_CHECK_REQUIRED":var t;(null==q?0:null==(t=q.playerKavRenderer)?0:t.kavUrl)?a.errorDetail="4":a.errorDetail="3";break;default:a.errorDetail=p.isBlockedInRestrictedMode?"5":"0"}}}else a.qg.playabilityStatus&&(a.Lo=a.qg.playabilityStatus,dSa(a)&&(a.errorDetail="0",a.Lo&&((t=a.Lo.embeddedPlayerErrorMessageRenderer)?a.uC=g.S(t,eSa):a.errorReason=a.Lo.reason||null)));(t=a.qg.attestation)&&wQa(a,t);(t=a.qg.permissions)&&t.allowImaMonetization&&(a.allowImaMonetization=!0);t&&t.allowPfpUnbranded&&
(a.allowPfpUnbranded=!0)}};
ERa=function(a,b,c){var d=c.channelThumbnail;d&&(d=d.thumbnails)&&(d=d[0])&&(b.profile_picture=d.url);var e;if(d=g.S(null==(e=g.S(null==c?void 0:c.channelThumbnailEndpoint,fSa))?void 0:e.urlEndpoint,g.pG))b.channel_path=d.url;if(e=c.collapsedRenderer)if(e=g.S(e,gSa)){if(d=e.title)b.title=g.dG(d);if(e=e.subtitle)b.subtitle=g.dG(e)}if(c=c.expandedRenderer)if(c=g.S(c,hSa)){if(e=c.title)b.expanded_title=g.dG(e);if(e=c.subtitle)b.expanded_subtitle=g.dG(e);if(c=c.subscribeButton)a.subscribeButtonRenderer=
g.S(c,g.CT),a.subscribeButtonRenderer&&(b.ucid=a.subscribeButtonRenderer.channelId,b.subscribed=a.subscribeButtonRenderer.subscribed,a.Ll=!!a.subscribeButtonRenderer.notificationPreferenceToggleButton,a.subscribeButtonRenderer.notificationPreferenceToggleButton&&a.subscribeButtonRenderer.notificationPreferenceToggleButton.toggleButtonRenderer&&(b=a.subscribeButtonRenderer.notificationPreferenceToggleButton.toggleButtonRenderer,b.isToggled?(a.tL=b.toggledServiceEndpoint||null,a.sL=b.defaultServiceEndpoint||
null):(a.tL=b.defaultServiceEndpoint||null,a.sL=b.toggledServiceEndpoint||null)))}};
g.DT=function(a){return lT(a)&&!a.allowLiveDvr};
ET=function(a){return lT(a)&&a.allowLiveDvr};
lT=function(a){return a.L("html5_live_head_playable")&&nT(a)&&"yt"===a.Ia.Aa?a.isLiveHeadPlayable:a.isLivePlayback};
g.FT=function(a){return!!a.j&&eOa(a.j)};
g.GT=function(a){return!!a.j&&fOa(a.j)};
ORa=function(a){return a.UO()||g.HT(a)};
g.IT=function(a){return!!a.j&&gOa(a.j)};
g.HT=function(a){return!!a.j&&hOa(a.j)};
g.iSa=function(a){if(a.pL)return null;var b=a.O0;b||(b=a.playerResponse&&a.playerResponse.endscreen&&a.playerResponse.endscreen.endscreenUrlRenderer&&a.playerResponse.endscreen.endscreenUrlRenderer.url);return b||null};
g.jSa=function(a){return a.pL?null:a.playerResponse&&a.playerResponse.endscreen&&a.playerResponse.endscreen.endscreenRenderer||null};
g.JT=function(a){return a.L("enable_wn_infocards")};
g.KT=function(a){var b,c,d,e;return(g.JT(a)?null==(b=a.Na)?void 0:null==(c=b.cards)?void 0:c.cardCollectionRenderer:null==(d=a.playerResponse)?void 0:null==(e=d.cards)?void 0:e.cardCollectionRenderer)||null};
g.kSa=function(a){if(!a.playerResponse||!a.playerResponse.annotations)return null;a=g.v(a.playerResponse.annotations);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.playerAnnotationsExpandedRenderer&&b.playerAnnotationsExpandedRenderer.featuredChannel)return b.playerAnnotationsExpandedRenderer;return null};
LT=function(a){return a.adFormat&&"1_5"!=a.adFormat?"adunit":a.eventLabel||a.Ia.Sa};
g.sT=function(a){return"shortspage"===LT(a)};
MT=function(a){if(a.isAd()&&a.videoId!=a.Ia.Ke)return a.Ia.Ke};
NT=function(a){return a.wl||"detailpage"==LT(a)||"shortspage"==LT(a)||a.mutedAutoplay};
lSa=function(a){var b=a.L("enable_cleanup_masthead_autoplay_hack_fix");return b&&"adunit"==LT(a)?a.fq:NT(a)?"detailpage"==LT(a)||"shortspage"==LT(a)?a.isAutonav||0<a.Ob:b||"17_8"!==a.adFormat||a.isAutonav||g.tS(a.Ia)||a.fq?a.Vf?!1:a.Ia.Yg||a.Ia.Zg||!g.aS(a.Ia)?!b&&"adunit"==LT(a)&&a.rj?!1:!0:!1:!1:(a.Vf?0:a.Yg)&&g.aS(a.Ia)?!0:!1};
g.OT=function(a){return a.oauthToken||a.Ia.uj};
mSa=function(a){var b=1,c=g.tJ(a.Ia.experiments,"html5_default_ad_gain");c&&a.isAd()&&(b=c);var d;c=Infinity;if(a.L("html5_combine_format_loudness_and_video_target_loudness"))if(c=(null==(d=a.D)?void 0:d.audio.B)||a.QW){var e;d=c-(null!=(e=a.loudnessTargetLkfs)?e:0)}else d=a.Rf;else{var f;d=(null==(f=a.D)?void 0:f.audio.C)||a.Rf}if(a.L("html5_stateful_audio_normalization")){if(!isFinite(c))return b;e=a.U().Ll;e=Math.min((a.applyStatefulNormalization?Math.min(a.loudnessTargetLkfs,e):Math.min(a.loudnessTargetLkfs,
c))-c,0);a.preserveStatefulLoudnessTarget&&(a.U().Ll=c+e);return Math.min(1,Math.pow(10,e/20))||b}return Math.min(1,Math.pow(10,-d/20))||b};
tT=function(a){var b=["MUSIC_VIDEO_TYPE_ATV","MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"],c="TVHTML5_SIMPLY"===g.ER(a.Ia)&&"MUSIC"===a.Ia.j.ctheme;a.xj||!g.ZG(a.Ia)&&!c||!b.includes(a.musicVideoType)&&!a.isExternallyHostedPodcast||(a.xj=!0);if(b=g.hC())b=/Starboard\/([0-9]+)/.exec(g.mc()),b=10>(b?parseInt(b[1],10):NaN);c=a.Ia;c=("TVHTML5_CAST"===g.ER(c)||"TVHTML5"===g.ER(c)&&(c.j.cver.startsWith("6.20130725")||c.j.cver.startsWith("6.20130726")))&&"MUSIC"===a.Ia.j.ctheme;var d;if(d=!a.xj)c||(c=a.Ia,c=
"TVHTML5"===g.ER(c)&&c.j.cver.startsWith("7")),d=c;d&&!b&&(b="MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"===a.musicVideoType,c=(a.L("cast_prefer_audio_only_for_atv_and_uploads")||a.L("kabuki_pangea_prefer_audio_only_for_atv_and_uploads"))&&"MUSIC_VIDEO_TYPE_ATV"===a.musicVideoType,b||c||a.isExternallyHostedPodcast)&&(a.xj=!0);return a.Ia.deviceIsAudioOnly||a.xj&&a.Ia.K};
PT=function(a){var b,c,d;return a.isDaiEnabled()&&!!(null==(b=a.playerResponse)?0:null==(c=b.playerConfig)?0:null==(d=c.daiConfig)?0:d.ssaEnabledPlayback)};
nSa=function(a){return isNaN(a)?0:Math.max((Date.now()-a)/1E3-30,0)};
QT=function(a){return!(!a.Tm||!a.Ia.K)&&a.Qv()};
oSa=function(a){return a.enablePreroll&&a.enableServerStitchedDai};
mT=function(a){if(a.pX||a.cotn||!a.j||a.j.isOtf)return!1;if(a.L("html5_use_sabr_requests_for_debugging"))return!0;var b=!a.j.Cc&&!a.yj(),c=b&&FR&&a.L("html5_enable_sabr_vod_streaming_xhr");b=b&&!FR&&a.L("html5_enable_sabr_vod_non_streaming_xhr");var d=pSa(a),e;if(e=a.L("html5_enable_sabr_drm_vod_streaming_xhr")&&a.yj()&&!a.j.Cc&&FR)e=a.Mx,e="1"===e?!1:"6"===e||"4"===e?!1:!0;(c=c||b||d||e)&&!a.By&&a.va("sabr",{loc:"m"},!0);return c&&!!a.By};
pSa=function(a){if(a.enableServerStitchedDai)return!1;var b=a.Cc()&&!a.yj(),c=b&&FR&&a.L("html5_enable_sabr_live_streaming_xhr")&&a.L("html5_sabr_live");b=b&&!FR&&a.L("html5_enable_sabr_live_non_streaming_xhr")&&a.L("html5_sabr_live");var d=a.Cc()&&"ULTRALOW"!==a.latencyClass&&!a.isLowLatencyLiveStream,e=c&&a.ge&&a.L("html5_sabr_post_live"),f=c&&a.isPremiere&&a.L("html5_sabr_premiere");d=(g.DT(a)||ET(a))&&d;var h=(g.DT(a)||ET(a))&&a.isLowLatencyLiveStream&&a.L("html5_sabr_live_low_latency");a=(g.DT(a)||
ET(a))&&"ULTRALOW"===a.latencyClass&&a.L("html5_sabr_live_ultra_low_latency");return c&&(e||f||d||h||a)||b};
g.RT=function(a){return a.SV&&mT(a)};
vRa=function(a){var b;if(b=!!a.cotn)b=a.videoId,b=!!b&&1===g.SS(b);return b&&!a.Tm};
g.ST=function(a){if(!a.j||!a.B||!a.D)return!1;var b=a.j.j;return!!b[a.B.id]&&WP(b[a.B.id].resource.j)&&!!b[a.D.id]&&WP(b[a.D.id].resource.j)};
qSa=function(a){return a.wy?["OK","LIVE_STREAM_OFFLINE"].includes(a.wy.status):!0};
dSa=function(a){return(a=a.Lo)&&a.showError?a.showError:!1};
jT=function(a,b){return a.L(b)?!0:(a.fflags||"").includes(b+"=true")};
nRa=function(a){return a.L("html5_heartbeat_iff_heartbeat_params_filled")};
rSa=function(a){return(a=/html5_log_experiment_id_from_player_response_to_ctmp=([0-9]+)/.exec(a.fflags))?a[1]:null};
lRa=function(a,b){b.inlineMetricEnabled&&(a.inlineMetricEnabled=!0);b.playback_progress_0s_url&&(a.zy=new IQa(b));if(b=b.video_masthead_ad_quartile_urls)a.OP=b.quartile_0_url,a.RS=b.quartile_25_url,a.SS=b.quartile_50_url,a.US=b.quartile_75_url,a.QS=b.quartile_100_url,a.yy=b.quartile_0_urls,a.pS=b.quartile_25_urls,a.DS=b.quartile_50_urls,a.ES=b.quartile_75_urls,a.dR=b.quartile_100_urls};
kRa=function(a){var b={};a=g.v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0}return b};
hRa=function(a){if(a){if(Vza(a))return a;a=Wza(a);if(Vza(a,!0))return a}return""};
g.sSa=function(a){return a.captionsLanguagePreference||a.Ia.captionsLanguagePreference||g.AT(a,"yt:cc_default_lang")||a.Ia.nj};
TT=function(a){return!(!a.isLivePlayback||!a.hasProgressBarBoundaries())};
g.pT=function(a){var b;return a.TB||(null==(b=a.suggestions)?void 0:b[0])||null};
g.UT=function(a){return a.L("embeds_web_enable_pfp_unbranded_flag")?a.Ia.Im&&a.allowPfpUnbranded:a.Kf&&a.Ia.Im};
g.VT=function(a){var b=a.U(),c=g.tSa(b),d=a.Aa;d&&(c.clickTracking={clickTrackingParams:d});d=c.client||{};var e="EMBED",f=LT(a);"leanback"===f?e="WATCH":b.L("gvi_channel_client_screen")&&"profilepage"===f?e="CHANNEL":a.ob?e="LIVE_MONITOR":"detailpage"===f?e="WATCH_FULL_SCREEN":"adunit"===f?e="ADUNIT":"sponsorshipsoffer"===f&&(e="UNKNOWN");d.clientScreen=e;if(b=a.kidsAppInfo)d.kidsAppInfo=JSON.parse(b);(e=a.Po)&&!b&&(d.kidsAppInfo={contentSettings:{ageUpMode:uSa[e]}});a.Fy&&(d.unpluggedAppInfo={enableFilterMode:!0});
if(b=a.ma)d.unpluggedLocationInfo=b;c.client=d;d=c.request||{};a.nj&&(d.isPrefetch=!0);if(b=a.mdxEnvironment)d.mdxEnvironment=b;if(b=a.mdxControlMode)d.mdxControlMode=vSa[b];c.request=d;d=c.user||{};if(b=a.qa)d.credentialTransferTokens=[{token:b,scope:"VIDEO"}];if(b=a.tb)d.delegatePurchases={oauthToken:b},d.kidsParent={oauthToken:b};c.user=d;if(d=a.contextParams)c.activePlayers=[{playerContextParams:d}];if(a=a.clientScreenNonce)c.clientScreenNonce=a;return c};
g.tSa=function(a){var b=g.fH(),c=b.client||{};if(a.forcedExperiments){var d=a.forcedExperiments.split(","),e=[];d=g.v(d);for(var f=d.next();!f.done;f=d.next())e.push(Number(f.value));c.experimentIds=e}if(e=a.homeGroupInfo)c.homeGroupInfo=JSON.parse(e);if(e=a.getPlayerType())c.playerType=e;if(e=a.j.ctheme)c.theme=e;if(e=a.livingRoomAppMode)c.tvAppInfo=Object.assign({},c.tvAppInfo,{livingRoomAppMode:e});e=a.deviceYear;a.L("html5_propagate_device_year")&&e&&(c.tvAppInfo=Object.assign({},c.tvAppInfo,
{deviceYear:e}));if(e=a.livingRoomPoTokenId)c.tvAppInfo=Object.assign({},c.tvAppInfo,{livingRoomPoTokenId:e});b.client=c;c=b.user||{};a.enableSafetyMode&&(c=Object.assign({},c,{enableSafetyMode:!0}));a.pageId&&(c=Object.assign({},c,{onBehalfOfUser:a.pageId}));b.user=c;if(a=a.kd)b.thirdParty={embedUrl:a};return b};
ASa=function(a,b,c){var d=a.videoId,e=g.VT(a),f=a.U(),h={html5Preference:"HTML5_PREF_WANTS",lactMilliseconds:String(NE()),referer:document.location.toString(),signatureTimestamp:19691};g.RC();a.isAutonav&&(h.autonav=!0);g.SC(0,141)&&(h.autonavState=g.SC(0,140)?"STATE_OFF":"STATE_ON");h.autoCaptionsDefaultOn=g.SC(0,66);lSa(a)&&(h.autoplay=!0);f.K&&a.cycToken&&(h.cycToken=a.cycToken);f.enablePrivacyFilter&&(h.enablePrivacyFilter=!0);a.isFling&&(h.fling=!0);var l=a.forceAdsUrl;if(l){var m={},n=[];l=
l.split(",");l=g.v(l);for(var p=l.next();!p.done;p=l.next()){p=p.value;var q=p.split("|");3!==q.length||p.includes("=")||(q[0]="breaktype="+q[0],q[1]="offset="+q[1],q[2]="url="+q[2]);p={adtype:"video_ad"};q=g.v(q);for(var r=q.next();!r.done;r=q.next()){var t=g.v(r.value.split("="));r=t.next().value;t=eaa(t);p[r]=t.join("=")}q=p.url;r=p.presetad;t=p.viralresponseurl;var u=Number(p.campaignid);if("in_display_ad"===p.adtype)q&&(m.url=q),r&&(m.presetAd=r),t&&(m.viralAdResponseUrl=t),u&&(m.viralCampaignId=
String(u));else if("video_ad"===p.adtype){var x={offset:{kind:"OFFSET_MILLISECONDS",value:String(Number(p.offset)||0)}};if(p=wSa[p.breaktype])x.breakType=p;q&&(x.url=q);r&&(x.presetAd=r);t&&(x.viralAdResponseUrl=t);u&&(x.viralCampaignId=String(u));n.push(x)}}h.forceAdParameters={videoAds:n,inDisplayAd:m}}a.isInlinePlaybackNoAd&&(h.isInlinePlaybackNoAd=!0);a.isLivingRoomDeeplink&&(h.isLivingRoomDeeplink=!0);m=a.pM;if(null!=m){m={startWalltime:String(m)};if(n=a.Im)m.manifestDuration=String(n||14400);
h.liveContext=m}a.mutedAutoplay&&(h.mutedAutoplay=!0);if(a.Vf?0:a.Yg)h.splay=!0;m=a.vnd;5===m&&(h.vnd=m);m={};if(n=a.isMdxPlayback)m.triggeredByMdx=n;if(n=a.tv)m.skippableAdsSupported=n.split(",").includes("ska");if(p=a.Cl){n=a.FS;l=[];p=g.v(p.split(","));for(q=p.next();!q.done;q=p.next())if(r=q.value)if((q=r.startsWith("!"))&&(r=r.substr(1)),r=r.split("-"),!(3>r.length)){q={applicationState:q?"INACTIVE":"ACTIVE",clientFormFactor:xSa[r[1]]||"UNKNOWN_FORM_FACTOR",clientName:ySa[r[0]]||"UNKNOWN_INTERFACE",
clientVersion:r[2]||"",platform:zSa[r[1]]||"UNKNOWN_PLATFORM"};r={};if(n){t=void 0;try{t=JSON.parse(n)}catch(B){g.AF(B)}t&&(r={params:[{key:"ms",value:t.ms}]},t.advertising_id&&(r.advertisingId=t.advertising_id),void 0!==t.limit_ad_tracking&&null!==t.limit_ad_tracking&&(r.limitAdTracking=t.limit_ad_tracking),q.osName=t.os_name,q.userAgent=t.user_agent,q.windowHeightPoints=t.window_height_points,q.windowWidthPoints=t.window_width_points)}l.push({adSignalsInfo:r,remoteClient:q})}m.remoteContexts=l}n=
a.sourceContainerPlaylistId;l=a.serializedMdxMetadata;if(n||l)p={},n&&(p.mdxPlaybackContainerInfo={sourceContainerPlaylistId:n}),l&&(p.serializedMdxMetadata=l),m.mdxPlaybackSourceContext=p;h.mdxContext=m;m=b.width;0<m&&(h.playerWidthPixels=Math.round(m));if(b=b.height)h.playerHeightPixels=Math.round(b);0!==c&&(h.vis=c);if(c=f.widgetReferrer)h.widgetReferrer=c.substring(0,128);g.aS(f)&&h&&(h.ancestorOrigins=f.ancestorOrigins);a.defaultActiveSourceVideoId&&(h.compositeVideoContext={defaultActiveSourceVideoId:a.defaultActiveSourceVideoId});
if(f=f.webPlayerContextConfig)h.encryptedHostFlags=f.encryptedHostFlags;d={videoId:d,context:e,playbackContext:{contentPlaybackContext:h}};a.contentCheckOk&&(d.contentCheckOk=!0);if(e=a.clientPlaybackNonce)d.cpn=e;if(e=a.playerParams)d.params=e;if(e=a.playlistId)d.playlistId=e;a.racyCheckOk&&(d.racyCheckOk=!0);e=a.U();if(h=e.embedConfig)d.serializedThirdPartyEmbedConfig=h;d.captionParams={};h=g.SC(g.RC(),65);null!=a.deviceCaptionsOn?d.captionParams.deviceCaptionsOn=a.deviceCaptionsOn:g.rS(e)&&(d.captionParams.deviceCaptionsOn=
null!=h?!h:!1);a.lV&&(d.captionParams.deviceCaptionsLangPref=a.lV);a.vL.length?d.captionParams.viewerSelectedCaptionLangs=a.vL:g.rS(e)&&(h=g.NLa(),null==h?0:h.length)&&(d.captionParams.viewerSelectedCaptionLangs=h);h="onesie"===a.fetchType&&a.L("html5_onesie_attach_po_token");f="onesie"!==a.fetchType&&a.L("html5_non_onesie_attach_po_token");if(h||f)a=a.U(),a.Uf&&(d.serviceIntegrityDimensions={},d.serviceIntegrityDimensions.poToken=a.Uf);e.L("fetch_att_independently")&&(d.attestationRequest={omitBotguardData:!0});
return d};
CSa=function(a,b){var c,d,e;return g.I(function(f){if(1==f.j)return c={context:g.tSa(a.U()),engagementType:"ENGAGEMENT_TYPE_PLAYBACK",ids:[{playbackId:{videoId:a.videoId,cpn:a.clientPlaybackNonce}}]},d=g.hH(BSa),g.y(f,g.WH(b,c,d),2);e=f.B;return f.return(e)})};
DSa=function(a,b,c){uLa(g.tJ(b.experiments,"bg_vm_reinit_threshold"))&&CSa(a,c).then(function(d){d&&(d=d.botguardData)&&g.FLa(d,b)},function(d){a.isDisposed()||(d=JK(d),a.va("attf",d.details))})};
ESa=function(){this.My={}};
FSa=function(a,b,c){WT(a,"part2viewed",1,0x8000000000000,c);WT(a,"engagedview",Math.max(1,1E3*b.fb),0x8000000000000,c);b.isLivePlayback||(b=1E3*b.lengthSeconds,WT(a,"videoplaytime25",.25*b,b,c),WT(a,"videoplaytime50",.5*b,b,c),WT(a,"videoplaytime75",.75*b,b,c),WT(a,"videoplaytime100",b,0x8000000000000,c),WT(a,"conversionview",b,0x8000000000000,c),WT(a,"videoplaybackstart",1,b,c),WT(a,"videoplayback2s",2E3,b,c),WT(a,"videoplayback10s",1E4,b,c))};
WT=function(a,b,c,d,e){b in a.My||(c=new g.ZJ(c,d,{id:b,priority:2,namespace:"appad"}),e.addCueRange(c),a.My[b]=c)};
XT=function(){g.gv.call(this);this.G=new Map};
GSa=function(){g.J.apply(this,arguments);this.element=null;this.Z=new Set;this.Y={};this.qa={};this.j={};this.ma={};this.K={};this.G=void 0;this.Aa=new Set;this.C=new XT;this.B=new XT;this.D=new XT;this.N=new XT};
ISa=function(a){var b=void 0===b?5:b;return a?HSa[a]||b:b};
JSa=function(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return ZT(a)};
ZT=function(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=g.v(KSa);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b};
LSa=function(a,b,c,d){if(g.Za(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b};
g.$T=function(a,b,c){g.J.call(this);this.app=a;this.state=b;this.playerType=c};
MSa=function(a){aU(a,"getInternalApiInterface",a.getInternalApiInterface);aU(a,"addEventListener",a.G4);aU(a,"removeEventListener",a.Uaa);aU(a,"cueVideoByPlayerVars",a.cueVideoByPlayerVars);aU(a,"loadVideoByPlayerVars",a.loadVideoByPlayerVars);aU(a,"preloadVideoByPlayerVars",a.preloadVideoByPlayerVars);aU(a,"getAdState",a.getAdState);aU(a,"sendAbandonmentPing",a.sendAbandonmentPing);aU(a,"setLoopRange",a.setLoopRange);aU(a,"getLoopRange",a.getLoopRange);aU(a,"setAutonavState",a.setAutonavState);aU(a,
"seekTo",a.seekTo);aU(a,"seekBy",a.seekBy);aU(a,"seekToLiveHead",a.seekToLiveHead);aU(a,"requestSeekToWallTimeSeconds",a.requestSeekToWallTimeSeconds);aU(a,"seekToStreamTime",a.seekToStreamTime);aU(a,"startSeekCsiAction",a.startSeekCsiAction);aU(a,"getStreamTimeOffset",a.getStreamTimeOffset);aU(a,"getVideoData",a.D6);aU(a,"setInlinePreview",a.setInlinePreview);aU(a,"getAppState",a.getAppState);aU(a,"updateLastActiveTime",a.updateLastActiveTime);aU(a,"setBlackout",a.setBlackout);aU(a,"setUserEngagement",
a.setUserEngagement);aU(a,"updateSubtitlesUserSettings",a.updateSubtitlesUserSettings);aU(a,"getPresentingPlayerType",a.cI);aU(a,"canPlayType",a.canPlayType);aU(a,"updatePlaylist",a.updatePlaylist);aU(a,"updateVideoData",a.updateVideoData);aU(a,"updateEnvironmentData",a.updateEnvironmentData);aU(a,"sendVideoStatsEngageEvent",a.wba);aU(a,"productsInVideoVisibilityUpdated",a.productsInVideoVisibilityUpdated);aU(a,"setSafetyMode",a.setSafetyMode);aU(a,"isAtLiveHead",function(b){return a.isAtLiveHead(void 0,
b)});
aU(a,"getVideoAspectRatio",a.getVideoAspectRatio);aU(a,"getPreferredQuality",a.getPreferredQuality);aU(a,"getPlaybackQualityLabel",a.getPlaybackQualityLabel);aU(a,"setPlaybackQualityRange",a.setPlaybackQualityRange);aU(a,"onAdUxClicked",a.onAdUxClicked);aU(a,"getFeedbackProductData",a.getFeedbackProductData);aU(a,"getStoryboardFrame",a.getStoryboardFrame);aU(a,"getStoryboardFrameIndex",a.getStoryboardFrameIndex);aU(a,"getStoryboardLevel",a.getStoryboardLevel);aU(a,"getNumberOfStoryboardLevels",a.getNumberOfStoryboardLevels);
aU(a,"getCaptionWindowContainerId",a.getCaptionWindowContainerId);aU(a,"getAvailableQualityLabels",a.getAvailableQualityLabels);aU(a,"addCueRange",a.addCueRange);aU(a,"addUtcCueRange",a.addUtcCueRange);aU(a,"showAirplayPicker",a.showAirplayPicker);aU(a,"dispatchReduxAction",a.dispatchReduxAction);aU(a,"getPlayerResponse",a.getPlayerResponse);aU(a,"getWatchNextResponse",a.getWatchNextResponse);aU(a,"getHeartbeatResponse",a.getHeartbeatResponse);aU(a,"changeMarkerVisibility",a.changeMarkerVisibility);
aU(a,"getCurrentTime",a.getCurrentTime);aU(a,"getDuration",a.getDuration);aU(a,"getPlayerState",a.getPlayerState);aU(a,"getVideoLoadedFraction",a.getVideoLoadedFraction);aU(a,"getProgressState",a.getProgressState);aU(a,"getVolume",a.getVolume);aU(a,"setVolume",a.EK);aU(a,"isMuted",a.isMuted);aU(a,"mute",a.pJ);aU(a,"unMute",a.aL);aU(a,"loadModule",a.loadModule);aU(a,"unloadModule",a.unloadModule);aU(a,"getOption",a.getOption);aU(a,"getOptions",a.getOptions);aU(a,"setOption",a.setOption);aU(a,"loadVideoById",
a.loadVideoById);aU(a,"loadVideoByUrl",a.loadVideoByUrl);aU(a,"playVideo",a.MQ);aU(a,"loadPlaylist",a.loadPlaylist);aU(a,"nextVideo",a.nextVideo);aU(a,"previousVideo",a.previousVideo);aU(a,"playVideoAt",a.playVideoAt);aU(a,"getDebugText",a.getDebugText);aU(a,"setAutonav",a.setAutonav);aU(a,"isNotServable",a.isNotServable);aU(a,"channelSubscribed",a.channelSubscribed);aU(a,"channelUnsubscribed",a.channelUnsubscribed);aU(a,"togglePictureInPicture",a.togglePictureInPicture);aU(a,"supportsGaplessAudio",
a.supportsGaplessAudio);aU(a,"supportsGaplessShorts",a.supportsGaplessShorts);aU(a,"enqueueVideoByPlayerVars",function(b){return void a.enqueueVideoByPlayerVars(b)});
aU(a,"clearQueue",a.clearQueue);aU(a,"getAudioTrack",a.R5);aU(a,"setAudioTrack",a.setAudioTrack);aU(a,"getAvailableAudioTracks",a.S5);aU(a,"getMaxPlaybackQuality",a.getMaxPlaybackQuality);aU(a,"getUserPlaybackQualityPreference",a.getUserPlaybackQualityPreference);aU(a,"getSubtitlesUserSettings",a.getSubtitlesUserSettings);aU(a,"resetSubtitlesUserSettings",a.resetSubtitlesUserSettings);aU(a,"setMinimized",a.setMinimized);aU(a,"setOverlayVisibility",a.setOverlayVisibility);aU(a,"confirmYpcRental",a.confirmYpcRental);
aU(a,"toggleSubtitlesOn",a.toggleSubtitlesOn);aU(a,"isSubtitlesOn",a.isSubtitlesOn);aU(a,"queueNextVideo",a.queueNextVideo);aU(a,"handleExternalCall",a.handleExternalCall);aU(a,"logApiCall",a.logApiCall);aU(a,"isExternalMethodAvailable",a.isExternalMethodAvailable);aU(a,"setScreenLayer",a.setScreenLayer);aU(a,"getCurrentPlaylistSequence",a.getCurrentPlaylistSequence);aU(a,"getPlaylistSequenceForTime",a.getPlaylistSequenceForTime);aU(a,"shouldSendVisibilityState",a.shouldSendVisibilityState);aU(a,
"syncVolume",a.syncVolume);aU(a,"highlightSettingsMenuItem",a.highlightSettingsMenuItem);aU(a,"openSettingsMenuItem",a.openSettingsMenuItem);aU(a,"getVisibilityState",a.getVisibilityState);aU(a,"isMutedByMutedAutoplay",a.isMutedByMutedAutoplay);aU(a,"setGlobalCrop",a.setGlobalCrop);aU(a,"setInternalSize",a.setInternalSize);a.app.U().L("embeds_web_enable_set_faux_fullscreen_in_public_api")&&aU(a,"setFauxFullscreen",a.setFauxFullscreen)};
bU=function(a,b,c){a.state.Y[b]=function(){return c.apply(a,g.Ja.apply(0,arguments))};
a.state.j.hasOwnProperty(b)||aU(a,b,c);a.state.Z.add(b)};
cU=function(a,b,c){a.state.qa[b]=function(){return c.apply(a,g.Ja.apply(0,arguments))};
a.state.j.hasOwnProperty(b)||aU(a,b,c);a.state.Z.add(b)};
aU=function(a,b,c){a.state.j[b]=function(){return c.apply(a,g.Ja.apply(0,arguments))}};
g.dU=function(a,b,c){return a.state.j[b].apply(a.state.j,g.oa(c))};
OSa=function(a){a.state.G||(a.state.G={addEventListener:function(b,c){NSa(a,b,c)},
removeEventListener:function(b,c){c="string"===typeof c?b+c:b+String(g.ab(c));var d=a.state.K[c];d&&(a.app.Sk.unsubscribe(b,d),g.jd(a.state.K,c))}});
return a.state.G};
NSa=function(a,b,c){var d="string"===typeof c?b+c:b+String(g.ab(c));if(!a.state.K[d]){var e="string"===typeof c?function(){var h=g.Ja.apply(0,arguments);g.Ta(c).apply(window,h)}:c;
var f=function(h){e({target:a.state.G,data:h})};
a.state.K[d]=f;a.app.Sk.subscribe(b,f)}};
PSa=function(a){var b=g.jS(a.app.U()),c,d=null==(c=a.app.getVideoData())?void 0:c.Rm;a=g.eU(a.app);return g.uC(b)&&!d||a?!1:!0};
QSa=function(a,b){b=void 0===b?a.playerType:b;var c={};if(b=g.fU(a.app,b)){b=b.getVideoData();if(b.isPrivate)return{};c.video_id=b.videoId;c.author=b.author;c.title=b.title;c.isPlayable=qSa(b);c.errorCode=b.errorCode;if(b.B&&b.B.video){c.video_quality=b.B.video.quality;b=b.B.video;var d=[];32<b.fps&&d.push("hfr");b.isHdr()&&d.push("hdr");"bt2020"===b.primaries&&d.push("wcg");c.video_quality_features=d}}if(a=a.getPlaylistId())c.list=a;return c};
RSa=function(a,b,c){var d=a.app.cf(c);if(!d)return 0;a=d-a.app.getCurrentTime(c);return b-a};
g.gU=function(a){var b=SSa(a.app.zb());if(b)return b.rh();a=a.app.zb();a=g.iS(a.J.U())?a.qe.get("music"):void 0;return a?a.rh():null};
TSa=function(a,b){if("string"===typeof b){var c=function(){var d=g.Ja.apply(0,arguments);g.Ta(b).apply(window,d)};
a.state.ma[b]=c}else c=b;return c};
USa=function(a,b){if("string"===typeof b){var c=a.state.ma[b];g.jd(a.state.ma,b);b=c}return b};
VSa=function(a){return"videodatachange"===a||"resize"===a||"cardstatechange"===a};
iU=function(a,b,c){a=g.hU(a.Nd(),b);return c?(c.addOnDisposeCallback(a),null):a};
g.jU=function(a,b,c){return a.app.U().Le?b:g.fK("$DESCRIPTION ($SHORTCUT)",{DESCRIPTION:b,SHORTCUT:c})};
WSa=function(a){a.Nd().element.setAttribute("aria-live","polite")};
kU=function(a,b,c,d){g.$T.call(this,a,b,d);c&&(MSa(this),XSa(this))};
XSa=function(a){bU(a,"cueVideoById",a.s5);bU(a,"loadVideoById",a.Q7);bU(a,"cueVideoByUrl",a.t5);bU(a,"loadVideoByUrl",a.S7);bU(a,"playVideo",a.waa);bU(a,"pauseVideo",a.pauseVideo);bU(a,"stopVideo",a.Rba);bU(a,"clearVideo",a.clearVideo);bU(a,"getVideoBytesLoaded",a.B6);bU(a,"getVideoBytesTotal",a.C6);bU(a,"getVideoLoadedFraction",a.OW);bU(a,"getVideoStartBytes",a.F6);bU(a,"cuePlaylist",a.cuePlaylist);bU(a,"loadPlaylist",a.P7);bU(a,"nextVideo",a.u8);bU(a,"previousVideo",a.Haa);bU(a,"playVideoAt",a.vaa);
bU(a,"setShuffle",a.setShuffle);bU(a,"setLoop",a.setLoop);bU(a,"getPlaylist",a.y6);bU(a,"getPlaylistIndex",a.getPlaylistIndex);bU(a,"getPlaylistId",a.getPlaylistId);bU(a,"loadModule",a.bY);bU(a,"unloadModule",a.s0);bU(a,"setOption",a.IR);bU(a,"getOption",a.t6);bU(a,"getOptions",a.gO);bU(a,"mute",a.t8);bU(a,"unMute",a.rca);bU(a,"isMuted",a.isMuted);bU(a,"setVolume",a.Gba);bU(a,"getVolume",a.getVolume);bU(a,"seekTo",a.tba);bU(a,"getPlayerMode",a.getPlayerMode);bU(a,"getPlayerState",a.w6);bU(a,"getAvailablePlaybackRates",
a.getAvailablePlaybackRates);bU(a,"getPlaybackQuality",function(){return a.getPlaybackQuality(1)});
bU(a,"setPlaybackQuality",a.Bba);bU(a,"getAvailableQualityLevels",a.g6);bU(a,"getCurrentTime",a.k6);bU(a,"getDuration",a.o6);bU(a,"addEventListener",a.H4);bU(a,"removeEventListener",a.Vaa);bU(a,"getDebugText",a.m6);bU(a,"getVideoData",function(){return QSa(a)});
bU(a,"addCueRange",a.E4);bU(a,"removeCueRange",a.removeCueRange);bU(a,"setSize",a.setSize);bU(a,"getApiInterface",a.getApiInterface);bU(a,"destroy",a.destroy);bU(a,"mutedAutoplay",a.mutedAutoplay);var b=a.app.U();b.N||(bU(a,"getVideoEmbedCode",a.getVideoEmbedCode),bU(a,"getVideoUrl",a.H6));bU(a,"getMediaReferenceTime",a.s6);bU(a,"getSize",a.getSize);b.L("embeds_web_enable_set_faux_fullscreen_in_public_api")&&bU(a,"setFauxFullscreen",a.yba);b.N||bU(a,"logImaAdEvent",a.logImaAdEvent);bU(a,"preloadVideoById",
a.Faa)};
lU=function(a,b,c,d){kU.call(this,a,b,!1,d);c&&(MSa(this),a.U().K&&YSa(this),XSa(this))};
YSa=function(a){cU(a,"addEventListener",a.I4);cU(a,"removeEventListener",a.Waa);cU(a,"cueVideoByPlayerVars",function(b,c){a.cueVideoByPlayerVars(ZSa(a,b),c)});
cU(a,"loadVideoByPlayerVars",function(b,c,d,e){a.loadVideoByPlayerVars(ZSa(a,b),c,d,e)});
cU(a,"preloadVideoByPlayerVars",function(b,c,d,e){return void a.preloadVideoByPlayerVars(ZSa(a,b),c,d,e)});
cU(a,"loadVideoById",a.R7);cU(a,"loadVideoByUrl",a.T7);cU(a,"playVideo",a.MQ);cU(a,"loadPlaylist",a.loadPlaylist);cU(a,"nextVideo",a.nextVideo);cU(a,"previousVideo",a.previousVideo);cU(a,"playVideoAt",a.playVideoAt);cU(a,"getVideoData",a.NW);cU(a,"seekBy",a.qba);cU(a,"seekTo",a.uba);cU(a,"showControls",a.showControls);cU(a,"hideControls",a.hideControls);cU(a,"cancelPlayback",a.cancelPlayback);cU(a,"getProgressState",a.getProgressState);cU(a,"isInline",a.isInline);cU(a,"setInline",a.setInline);cU(a,
"setLoopVideo",a.setLoopVideo);cU(a,"getLoopVideo",a.getLoopVideo);cU(a,"getVideoContentRect",a.getVideoContentRect);cU(a,"getVideoStats",a.G6);cU(a,"getCurrentTime",a.l6);cU(a,"getDuration",a.p6);cU(a,"getPlayerState",a.x6);cU(a,"getVideoLoadedFraction",a.E6);cU(a,"mute",a.pJ);cU(a,"unMute",a.aL);cU(a,"setVolume",a.EK);cU(a,"loadModule",a.loadModule);cU(a,"unloadModule",a.unloadModule);cU(a,"getOption",a.getOption);cU(a,"getOptions",a.getOptions);cU(a,"setOption",a.setOption);cU(a,"addCueRange",
a.addCueRange);cU(a,"getDebugText",a.getDebugText);cU(a,"getStoryboardFormat",a.getStoryboardFormat);cU(a,"toggleFullscreen",a.toggleFullscreen);cU(a,"isFullscreen",a.isFullscreen);cU(a,"getPlayerSize",a.getPlayerSize);cU(a,"toggleSubtitles",a.toggleSubtitles);cU(a,"setCenterCrop",a.setCenterCrop);cU(a,"setFauxFullscreen",a.setFauxFullscreen);cU(a,"setSizeStyle",a.setSizeStyle);cU(a,"handleGlobalKeyDown",a.handleGlobalKeyDown);cU(a,"handleGlobalKeyUp",a.handleGlobalKeyUp);cU(a,"wakeUpControls",a.wakeUpControls)};
ZSa=function(a,b){var c={};if(a.app.U().qa){a=g.v($Sa);for(var d=a.next();!d.done;d=a.next())d=d.value,b.hasOwnProperty(d)&&(c[d]=b[d]);b=c.raw_player_response;b||(a=c.player_response)&&(b=JSON.parse(a));delete c.player_response;delete c.raw_player_response;b&&(c.raw_player_response={streamingData:b.streamingData})}else for(a=g.v(aTa),d=a.next();!d.done;d=a.next())d=d.value,b.hasOwnProperty(d)&&(c[d]=b[d]);return c};
g.mU=function(a,b){lU.call(this,a,b,!1)};
g.nU=function(a){a=a.zb();var b=a.qe.get("endscreen");return b&&b.vu()?!0:a.IF()||g.iS(a.J.U())};
g.oU=function(a,b){3===a.getPresentingPlayerType()?a.oa("mdxautoplaycancel"):a.Nf("onAutonavCancelled",b)};
g.qU=function(a){var b=pU(a.zb());return a.app.ri&&!a.isFullscreen()||3===a.getPresentingPlayerType()&&b&&b.Yk()&&b.Hp()||!!a.getPlaylist()};
g.rU=function(a){var b=a.U();if(!g.aS(b)||"EMBEDDED_PLAYER_MODE_DEFAULT"!==(b.Ha||"EMBEDDED_PLAYER_MODE_DEFAULT")||a.getPlaylist())return!1;var c=g.gU(a);b=a.getVideoData();a=c?c.bO():a.getPlayerSize();var d;return!!(b&&(null==(d=b.embeddedPlayerConfig)?0:d.isShortsExperienceEligible)&&a.width<=a.height)};
g.bTa=function(a,b,c){g.dU(a,"addEmbedsConversionTrackingParams",[b]);g.zP(b,c)};
g.tU=function(a){return(a=g.sU(a.zb()))?a.gI():{}};
g.cTa=function(a){a=(a=a.getVideoData())&&a.B;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!==a.mimeType};
g.uU=function(a,b,c){a=a.kb().element;var d=Vb(a.children,function(e){e=Number(e.getAttribute("data-layer"));return c-e||1});
0>d&&(d=-(d+1));g.of(a,b,d);b.setAttribute("data-layer",String(c))};
g.vU=function(a){var b=a.U();if(!b.Je)return!1;var c=a.getVideoData();if(!c||3===a.getPresentingPlayerType())return!1;var d=(!c.isLiveDefaultBroadcast||b.L("allow_poltergust_autoplay"))&&!TT(c);d=c.isLivePlayback&&(!b.L("allow_live_autoplay")||!d);var e=c.isLivePlayback&&b.L("allow_live_autoplay_on_mweb");a=a.getPlaylist();a=!!a&&a.Yk();var f=c.Na&&c.Na.playerOverlays||null;f=!!(f&&f.playerOverlayRenderer&&f.playerOverlayRenderer.autoplay);f=c.Kf&&f;return!c.ypcPreview&&(!d||e)&&!g.Bb(c.Ea,"ypc")&&
!a&&(!g.aS(b)||f)};
dTa=function(a){a=g.fU(a.app);if(!a)return!1;var b=a.getVideoData();if(!b.B||!b.B.video||1080>b.B.video.j||b.QZ)return!1;var c=/^qsa/.test(b.clientPlaybackNonce),d="r";0<=b.B.id.indexOf(";")&&(c=/^[a-p]/.test(b.clientPlaybackNonce),d="x");return c?(a.va("iqss",{trigger:d},!0),!0):!1};
eTa=function(){QC.apply(this,arguments);this.hx={}};
wU=function(){fTa||(fTa=new eTa);return fTa};
gTa=function(a,b){b?a.hx.Authorization="Bearer "+b:delete a.hx.Authorization};
xU=function(a,b,c,d){function e(h){var l=!(204!==h.status&&200!==h.status&&!h.response),m;h={succ:""+ +l,rc:h.status,lb:(null==(m=h.response)?void 0:m.byteLength)||0,rt:((0,g.uD)()-f).toFixed(),shost:g.Hl(a),trigger:b};hTa(h,a);c&&c(h);d&&!l&&d(new HK("pathprobe.net",h))}
var f=(0,g.uD)();g.VB(a,{format:"RAW",responseType:"arraybuffer",timeout:1E4,onFinish:e,onTimeout:e})};
hTa=function(a,b){var c;(null==(c=window.performance)?0:c.getEntriesByName)&&(b=performance.getEntriesByName(b))&&b.length&&(b=b[0],a.pedns=(b.domainLookupEnd-b.startTime).toFixed(),a.pecon=(b.connectEnd-b.domainLookupEnd).toFixed(),a.perqs=(b.requestStart-b.connectEnd).toFixed(),iTa&&(a.perqsa=b.requestStart+(performance.timeOrigin||performance.timing.navigationStart)))};
kTa=function(a,b){NO(a,13,b.timeSinceLastManualFormatSelectionMs);var c=b.lastManualDirection;void 0!==c&&(MO(a,112),MO(a,c<<1^c>>31));NO(a,16,b.N7);NO(a,17,b.detailedNetworkType);NO(a,18,b.f5);NO(a,19,b.e5);NO(a,21,b.Pba);NO(a,23,b.T4);NO(a,28,b.PQ);NO(a,29,b.fca);NO(a,34,b.visibility);c=b.playbackRate;if(void 0!==c){var d=new ArrayBuffer(4);(new Float32Array(d))[0]=c;c=(new Uint32Array(d))[0];if(void 0!==c)for(MO(a,285),LO(a,4),d=0;4>d;)a.view.setUint8(a.pos,c&255),c>>=8,a.pos+=1,d+=1}NO(a,36,b.H5);
RO(a,38,b.mediaCapabilities,jTa,3);NO(a,39,b.eca);NO(a,40,b.Dv);NO(a,44,b.playerState);OO(a,46,b.E5);NO(a,48,b.rba);NO(a,50,b.fv);NO(a,51,b.sx);NO(a,54,b.cq);OO(a,56,b.n8);NO(a,57,b.l5);OO(a,58,b.ao);NO(a,59,b.lj);NO(a,60,b.Fw);OO(a,61,b.isPrefetch)};
lTa=function(a){return{HM:IO(a,2),videoId:GO(a,3),zS:DO(a,4)}};
nTa=function(a){return{xjb:JO(a,1,mTa)}};
mTa=function(a){return{conditions:IO(a,1),Bjb:DO(a,2)}};
oTa=function(a){return{MI:IO(a,1)}};
jTa=function(a,b){var c;if(b.gL)for(c=0;c<b.gL.length;c++)RO(a,1,b.gL[c],pTa,1);if(b.PG)for(c=0;c<b.PG.length;c++)RO(a,2,b.PG[c],qTa,1);NO(a,5,b.p7)};
qTa=function(a,b){NO(a,1,b.audioCodec);NO(a,2,b.numChannels);NO(a,3,b.Aw);NO(a,6,b.Nba)};
pTa=function(a,b){NO(a,1,b.I0);NO(a,3,b.maxHeight);NO(a,4,b.maxWidth);NO(a,11,b.maxFramerate);NO(a,12,b.Aw);OO(a,15,b.A7)};
tTa=function(a){return{raa:DO(a,1),itag:GO(a,3),EZ:HO(a,4,rTa),lmt:DO(a,5),cib:DO(a,7),xtags:GO(a,15),j8:HO(a,23,sTa),bA:HO(a,34,oTa)}};
rTa=function(a){return{iv:FO(a,5),D7:EO(a,7)}};
sTa=function(a){return{videoId:GO(a,2)}};
wTa=function(a,b){RO(a,2,b.Is,kTa,3);RO(a,3,b.PO,uTa,3);PO(a,4,b.onesieUstreamerConfig);PO(a,9,b.Fo);RO(a,10,b.NK,vTa,3)};
xTa=function(a,b){NO(a,1,b.type);PO(a,2,b.value)};
yTa=function(a){return{rI:DO(a,3),sI:DO(a,4),Daa:EO(a,8),bjb:DO(a,10),zjb:DO(a,12),Ajb:DO(a,13),tjb:DO(a,14),ujb:DO(a,15)}};
zTa=function(a){return{wK:DO(a,1),xK:DO(a,2),seekSource:DO(a,3)}};
vTa=function(a,b){RO(a,1,b.clientInfo,ATa,3);PO(a,2,b.bR);PO(a,3,b.playbackCookie);PO(a,4,b.Fo);var c;if(b.vK)for(c=0;c<b.vK.length;c++)RO(a,5,b.vK[c],xTa,3);if(b.bL)for(c=0;c<b.bL.length;c++)NO(a,6,b.bL[c]);QO(a,7,b.Jba)};
BTa=function(a,b){NO(a,1,b.Zh);NO(a,2,b.xH);NO(a,3,b.Fu)};
CTa=function(a){return{Zh:DO(a,1),xH:DO(a,2),Fu:DO(a,3)}};
ATa=function(a,b){QO(a,12,b.deviceMake);QO(a,13,b.deviceModel);NO(a,16,b.clientName);QO(a,17,b.clientVersion);QO(a,18,b.osName);QO(a,19,b.osVersion)};
uTa=function(a,b){PO(a,2,b.aW);PO(a,5,b.encryptedClientKey);PO(a,6,b.iv);PO(a,7,b.qX);OO(a,10,b.p_);OO(a,13,b.YV);OO(a,14,b.xN);PO(a,16,b.uca);OO(a,17,b.F0)};
DTa=function(a,b){QO(a,1,b.name);QO(a,2,b.value)};
ETa=function(a){return{minBandwidthBytesPerSec:DO(a,1),minReadaheadMs:DO(a,2)}};
FTa=function(a,b){QO(a,1,b.url);var c;if(b.EO)for(c=0;c<b.EO.length;c++)RO(a,2,b.EO[c],DTa,3);PO(a,3,b.postBody);OO(a,4,b.Laa);OO(a,6,b.LF)};
GTa=function(a){return{vZ:DO(a,1),sX:DO(a,2),body:FO(a,4)}};
HTa=function(a){return{startMinReadaheadPolicy:JO(a,1,ETa),resumeMinReadaheadPolicy:JO(a,2,ETa)}};
ITa=function(a){return{first:DO(a,1),OX:DO(a,2)}};
KTa=function(a,b){RO(a,1,b.formatId,yU,3);NO(a,2,b.startTimeMs);NO(a,3,b.durationMs);NO(a,4,b.iq);NO(a,5,b.sj);RO(a,9,b.Bhb,JTa,3)};
LTa=function(a,b){QO(a,1,b.videoId);NO(a,2,b.lmt)};
JTa=function(a,b){var c;if(b.YU)for(c=0;c<b.YU.length;c++)RO(a,1,b.YU[c],LTa,3)};
yU=function(a,b){NO(a,1,b.itag);NO(a,2,b.lmt);QO(a,3,b.xtags)};
MTa=function(a){return{itag:DO(a,1),lmt:DO(a,2),xtags:GO(a,3)}};
NTa=function(a,b){RO(a,1,b.formatId,yU,3);NO(a,2,b.Hj);NO(a,3,b.sequenceNumber);RO(a,4,b.KH,BTa,1);NO(a,5,b.XX)};
PTa=function(a){return{HZ:DO(a,1),items:JO(a,2,OTa),w8:DO(a,3)}};
OTa=function(a){return{CP:DO(a,1),lJ:DO(a,2),minReadaheadMs:DO(a,3)}};
QTa=function(a){return{token:GO(a,1),videoId:GO(a,2)}};
STa=function(a){return{Maa:GO(a,1),action:DO(a,2),h_:HO(a,3,RTa)}};
RTa=function(a){return{Qs:DO(a,1)}};
TTa=function(a,b){var c;if(b.Wv)for(c=0;c<b.Wv.length;c++)RO(a,1,b.Wv[c],yU,3);if(b.Yd)for(c=0;c<b.Yd.length;c++)RO(a,2,b.Yd[c],KTa,3);QO(a,3,b.clipId)};
UTa=function(a,b){RO(a,1,b.Is,kTa,3);var c;if(b.W