const P=[['home','Главная'],['catalog','Квартиры'],['new','Новостройки'],['districts','Районы'],['mortgage','Ипотека'],['services','Услуги'],['about','О нас'],['contacts','Контакты']];
const IC={arrow:'M5 12h14M13 6l6 6-6 6',check:'M5 13l4 4L19 7',pin:'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4',bed:'M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5',area:'M4 4h16v16H4zM4 10h6v10',shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',key:'M15 9a4 4 0 100 .01M11 13l-7 7M7 17l2 2',calc:'M6 3h12v18H6zM9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01',doc:'M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6',phone:'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z',mail:'M3 6h18v12H3zM3 7l9 7 9-7',clock:'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2',building:'M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M17 13h.01M17 17h.01',users:'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 6a3 3 0 010 6M21 20c0-2.5-2-4-4-4.5',heart:'M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z',menu:'M4 7h16M4 12h16M4 17h16',close:'M6 6l12 12M18 6L6 18',star:'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',search:'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5',trend:'M3 17l6-6 4 4 8-8M15 7h6v6',wa:'M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.8-1L4 20zM9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z'};
const ic=n=>`<svg class="ico" viewBox="0 0 24 24"><path d="${IC[n]}"/></svg>`;
const $=s=>document.querySelector(s);
const fmt=n=>new Intl.NumberFormat('ru-RU').format(Math.round(n));
const WA='992409022222';
const wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
const om=x=>'Здравствуйте! Хочу заказать квартиру «'+x.t+'»: '+D[x.d]+', '+x.r+' комн., '+x.a+' м², '+x.f+' этаж, цена '+fmt(x.p)+' сомони. Ссылка на эту квартиру: '+location.href.split('#')[0]+'#apt-'+(A.indexOf(x)+1);
const D=['Все районы','Сино','Фирдавси','Шохмансур','Исмоили Сомони'];
const A=[
{t:'Светлая 2-комнатная у парка',d:1,r:2,a:68,f:5,p:720000,h:205},
{t:'Семейная 3-комнатная',d:2,r:3,a:96,f:3,p:1150000,h:160},
{t:'Студия в новом доме',d:3,r:1,a:38,f:9,p:390000,h:35},
{t:'Просторная 4-комнатная',d:4,r:4,a:128,f:7,p:1780000,h:265},
{t:'Уютная 1-комнатная',d:1,r:1,a:42,f:2,p:410000,h:190},
{t:'2-комнатная с видом на горы',d:2,r:2,a:72,f:11,p:860000,h:215},
{t:'3-комнатная с ремонтом',d:3,r:3,a:90,f:6,p:980000,h:25},
{t:'Панорамная 2-комнатная',d:4,r:2,a:78,f:14,p:1240000,h:175},
{t:'Квартира для молодой семьи',d:1,r:2,a:60,f:4,p:650000,h:150}];
const art=(h,i)=>{let w='';for(let r=0;r<4;r++)for(let c=0;c<4;c++)w+=`<rect x="${150+c*28}" y="${70+r*34}" width="16" height="22" rx="3" fill="${(r*4+c+i)%5==0?'#e8c47a':'#0f2a43'}" opacity="${(r*4+c+i)%5==0?1:.7}"/>`;
return `<svg class="art w-full h-full" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="s${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h},55%,30%)"/><stop offset="1" stop-color="hsl(${h},60%,62%)"/></linearGradient></defs><rect width="400" height="260" fill="url(#s${i})"/><circle cx="330" cy="55" r="26" fill="#e8c47a" opacity=".9"/><path d="M0 200l70-60 60 40 80-70 90 80 100-50v120H0z" fill="#fff" opacity=".18"/><rect x="130" y="45" width="150" height="190" rx="8" fill="hsl(${h},45%,18%)"/>${w}<rect x="190" y="190" width="30" height="45" rx="4" fill="#e8c47a"/><rect x="40" y="170" width="70" height="65" rx="6" fill="hsl(${h},40%,24%)"/><rect x="300" y="150" width="60" height="85" rx="6" fill="hsl(${h},40%,24%)"/><rect y="235" width="400" height="25" fill="hsl(${h},35%,12%)"/></svg>`};
const card=(x,i)=>`<article class="card rv"><div class="h-52 overflow-hidden relative">${art(x.h,i)}<span class="absolute top-4 left-4 text-xs font-extrabold px-3 py-1.5 rounded-full" style="background:var(--gold2);color:#14212e">${D[x.d]}</span></div><div class="p-6"><h3 class="font-extrabold text-lg"><a href="#apt-${A.indexOf(x)+1}" class="hover:text-[var(--gold)] transition">${x.t}</a></h3><p class="mut text-sm flex items-center gap-1 mt-1">${ic('pin')} Душанбе, ${D[x.d]}</p><div class="flex gap-5 mt-4 text-sm mut"><span class="flex items-center gap-1.5">${ic('bed')} ${x.r} комн.</span><span class="flex items-center gap-1.5">${ic('area')} ${x.a} м²</span><span class="flex items-center gap-1.5">${ic('building')} ${x.f} эт.</span></div><div class="flex items-center justify-between mt-5 pt-5" style="border-top:1px solid var(--line)"><p class="serif text-2xl font-bold gold">${fmt(x.p)} <span class="text-sm">сом.</span></p><a href="${wa(om(x))}" target="_blank" rel="noopener" class="btn !py-2 !px-4 text-sm">Заказать ${ic('wa')}</a></div></div></article>`;
const box=(i,t,d)=>`<div class="card p-7 rv"><div class="ib mb-5">${ic(i)}</div><h3 class="font-extrabold text-lg">${t}</h3><p class="mut text-sm mt-2 leading-relaxed">${d}</p></div>`;
const S={cat:{d:0,r:0,s:'a'}};

function build(){
 $('#nav').innerHTML=P.map(p=>`<a class="nl" data-p="${p[0]}" href="#${p[0]}">${p[1]}</a>`).join('');
 $('#mn').innerHTML=P.map(p=>`<a class="nl !py-3 text-base" data-p="${p[0]}" href="#${p[0]}">${p[1]}</a>`).join('');
 $('#fl').innerHTML=P.map(p=>`<a class="hover:text-white transition" href="#${p[0]}">${p[1]}</a>`).join('');
 const opts=D.map((n,i)=>`<option value="${i}">${n}</option>`).join('');
 ['#hd1','#fd'].forEach(s=>$(s).innerHTML=opts);
 $('#stats').innerHTML=[['1200','Продано квартир'],['15','Лет на рынке'],['98','Довольных клиентов, %'],['45','Объектов в работе']].map(s=>`<div class="rv"><p class="serif text-5xl font-bold gold"><span data-n="${s[0]}">0</span>+</p><p class="mut font-bold mt-2 text-sm">${s[1]}</p></div>`).join('');
 $('#feat').innerHTML=A.slice(0,3).map((x,i)=>card(x,i)).join('');
 $('#why').innerHTML=[['shield','Юридическая чистота','Проверяем документы и историю каждого объекта до сделки.'],['trend','Честные цены','Реальная рыночная стоимость без скрытых наценок.'],['key','Ключи под ключ','Сопровождаем сделку от просмотра до передачи ключей.'],['heart','Забота о клиенте','Личный менеджер на связи в любое время.']].map(a=>box(...a)).join('');
 $('#cx').innerHTML=[['Мечта Резиденс','Сино',78,205],['Нур Сити','Фирдавси',45,160],['Сомони Парк','Исмоили Сомони',92,265]].map((c,i)=>`<article class="card rv"><div class="h-52 overflow-hidden">${art(c[3],i+20)}</div><div class="p-6"><h3 class="font-extrabold text-xl">${c[0]}</h3><p class="mut text-sm flex items-center gap-1 mt-1">${ic('pin')} ${c[1]}</p><p class="text-sm font-bold mt-5 flex justify-between"><span>Готовность</span><span class="gold">${c[2]}%</span></p><div class="bar mt-2"><i style="width:0" data-w="${c[2]}"></i></div><p class="mut text-sm mt-5">От <b class="gold serif text-lg">${fmt(7000+i*1800)}</b> сом. за м²</p></div></article>`).join('');
 $('#nb').innerHTML=[['star','Современные планировки','Просторные кухни-гостиные и панорамные окна.'],['calc','Рассрочка','Гибкий график платежей без банка.'],['shield','Гарантия застройщика','Проверенные партнёры с опытом сдачи домов.']].map(a=>`<div class="flex gap-4"><div class="ib flex-none">${ic(a[0])}</div><div><b>${a[1]}</b><p class="mut text-sm mt-1">${a[2]}</p></div></div>`).join('');
 $('#ds').innerHTML=[['Сино','Деловой центр с развитой инфраструктурой, школами и магазинами.',11200,205],['Фирдавси','Зелёный район с видом на горы, популярен у семей.',9800,160],['Шохмансур','Оживлённый район рядом с рынками и транспортными узлами.',8600,25],['Исмоили Сомони','Престижный центр: парки, площади и новые высотки.',13400,265]].map((d,i)=>`<article class="card p-0 rv flex flex-col sm:flex-row"><div class="sm:w-2/5 h-48 sm:h-auto overflow-hidden">${art(d[3],i+30)}</div><div class="p-7 flex-1"><h3 class="serif text-2xl font-bold">${d[0]}</h3><p class="mut text-sm mt-2 leading-relaxed">${d[1]}</p><p class="mt-5 text-sm mut">Средняя цена за м²</p><p class="serif text-2xl font-bold gold">${fmt(d[2])} сом.</p><a href="#catalog" data-d="${i+1}" class="font-bold text-sm mt-4 inline-flex items-center gap-1">Смотреть квартиры ${ic('arrow')}</a></div></article>`).join('');
 $('#sv').innerHTML=[['search','Подбор квартиры','Найдём варианты под ваш бюджет и требования.'],['shield','Проверка документов','Юристы проверяют чистоту сделки.'],['calc','Ипотека и рассрочка','Поможем оформить финансирование.'],['doc','Оформление сделки','Подготовка договоров и регистрация.'],['trend','Оценка недвижимости','Определим рыночную цену вашей квартиры.'],['key','Продажа квартиры','Быстро найдём надёжного покупателя.']].map(a=>box(...a)).join('');
 $('#st').innerHTML=['Заявка','Подбор','Просмотр','Сделка'].map((s,i)=>`<div class="text-center rv"><div class="w-16 h-16 mx-auto rounded-full grid place-items-center serif text-2xl font-bold text-[#14212e]" style="background:linear-gradient(135deg,var(--gold),var(--gold2))">${i+1}</div><p class="font-extrabold mt-4">${s}</p></div>`).join('');
 $('#vl').innerHTML=[['shield','Надёжность'],['heart','Забота'],['users','Команда'],['star','Качество']].map(v=>`<div class="card p-6 text-center rv"><div class="ib mx-auto mb-3">${ic(v[0])}</div><b>${v[1]}</b></div>`).join('');
 $('#tm').innerHTML=[['Фаррух Рахимов','Директор'],['Мадина Саидова','Старший менеджер'],['Далер Назаров','Юрист']].map((m,i)=>`<div class="card p-8 text-center rv"><svg class="w-24 h-24 mx-auto" viewBox="0 0 96 96"><defs><linearGradient id="t${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d4e7a"/><stop offset="1" stop-color="#0f2a43"/></linearGradient></defs><circle cx="48" cy="48" r="48" fill="url(#t${i})"/><circle cx="48" cy="38" r="15" fill="#e8c47a"/><path d="M18 82c4-18 16-24 30-24s26 6 30 24" fill="#e8c47a"/></svg><h3 class="font-extrabold mt-4">${m[0]}</h3><p class="mut text-sm">${m[1]}</p></div>`).join('');
 $('#ci').innerHTML=[['pin','Адрес','Душанбе, пр. Рудаки, 100'],['phone','Телефон / WhatsApp','+992 40 902 2222'],['mail','Эл. почта','info@domvashey.tj'],['clock','Часы работы','Пн–Сб: 9:00–19:00']].map(c=>`<div class="card p-5 flex gap-4 items-center rv"><div class="ib">${ic(c[0])}</div><div><p class="mut text-sm">${c[1]}</p><p class="font-extrabold">${c[2]}</p></div></div>`).join('')+`<a class="btn w-full justify-center" target="_blank" rel="noopener" href="${wa('Здравствуйте! Хочу получить консультацию по квартирам.')}">${ic('wa')} Написать в WhatsApp</a>`;
 $('#cal').innerHTML=[['pr','Стоимость квартиры, сом.',100000,3000000,10000,800000],['dp','Первый взнос, %',10,70,1,30],['yr','Срок, лет',1,25,1,15],['rt','Ставка, % годовых',5,25,.5,14]].map(r=>`<div><div class="flex justify-between font-bold mb-2"><span>${r[1]}</span><span class="gold" id="v_${r[0]}"></span></div><input type="range" id="${r[0]}" min="${r[2]}" max="${r[3]}" step="${r[4]}" value="${r[5]}"></div>`).join('');
 document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=ic(e.dataset.i));
 ['pr','dp','yr','rt'].forEach(k=>$('#'+k).oninput=calc);calc();
}
function calc(){const p=+$('#pr').value,d=+$('#dp').value,y=+$('#yr').value,r=+$('#rt').value;
 $('#v_pr').textContent=fmt(p);$('#v_dp').textContent=d+'%';$('#v_yr').textContent=y;$('#v_rt').textContent=r+'%';
 const L=p*(1-d/100),m=r/1200,n=y*12,pay=m?L*m/(1-Math.pow(1+m,-n)):L/n;
 $('#rm').textContent=fmt(pay)+' сом.';$('#rl').textContent=fmt(L);$('#rd').textContent=fmt(p-L);$('#ro').textContent=fmt(pay*n-L)}
function cat(){const {d,r,s}=S.cat;$('#fd').value=d;$('#fr').value=r;$('#fs').value=s;
 let l=A.map((x,i)=>[x,i]).filter(([x])=>(!d||x.d==d)&&(!r||x.r==r)).sort((a,b)=>s=='a'?a[0].p-b[0].p:b[0].p-a[0].p);
 $('#cnt').textContent=l.length?`Найдено: ${l.length}`:'Ничего не найдено — измените фильтры';
 $('#grid').innerHTML=l.map(([x,i])=>card(x,i+50)).join('');obs()}
['fd','fr','fs'].forEach((id,k)=>document.addEventListener('change',e=>{if(e.target.id==id){S.cat[['d','r','s'][k]]=e.target.value;cat()}}));
document.addEventListener('click',e=>{const a=e.target.closest('[data-d]');if(a){S.cat={d:+a.dataset.d,r:0,s:'a'}}});
function apt(i){const x=A[i],L=x.p*.7,m=.14/12,pay=L*m/(1-Math.pow(1+m,-180)),link=location.href.split('#')[0]+'#apt-'+(i+1);
const fe=['Юридически чистые документы','Рядом школа, магазины и транспорт','Готова к заселению','Возможна ипотека и рассрочка'];
const row=(a,b)=>`<div class='flex justify-between py-3' style='border-bottom:1px solid var(--line)'><span class='mut'>${a}</span><b>${b}</b></div>`;
$('#ad').innerHTML=`<div class='hero pt-32 pb-12'><div class='wrap relative'><a href='#catalog' class='inline-flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100 transition'><span style='display:inline-flex;transform:rotate(180deg)'>${ic('arrow')}</span> Назад в каталог</a><h1 class='serif text-3xl sm:text-5xl font-bold mt-5'>${x.t}</h1><p class='opacity-80 mt-3 flex items-center gap-1'>${ic('pin')} Душанбе, ${D[x.d]}</p></div></div>
<div class='sec !pt-10'><div class='wrap grid lg:grid-cols-5 gap-8 items-start'><div class='lg:col-span-3 space-y-6'><div class='card h-72 sm:h-96 hover:!transform-none'>${art(x.h,99)}</div><div class='card p-7 hover:!transform-none'><h2 class='serif text-2xl font-bold'>Об этой квартире</h2><p class='mut mt-3 leading-relaxed'>Светлая квартира в районе ${D[x.d]}: ${x.r} комн., ${x.a} м², ${x.f} этаж. Удобная планировка и развитая инфраструктура рядом. Напишите нам в WhatsApp, и мы организуем просмотр в удобное для вас время.</p><div class='grid sm:grid-cols-2 gap-3 mt-6'>${fe.map(f=>`<div class='flex items-center gap-2 font-bold text-sm gold'>${ic('check')}<span style='color:var(--fg)'>${f}</span></div>`).join('')}</div></div></div>
<aside class='lg:col-span-2 card p-7 hover:!transform-none lg:sticky lg:top-28'><p class='mut text-sm'>Цена</p><p class='serif text-4xl font-bold gold'>${fmt(x.p)} сом.</p><p class='mut text-sm mt-1 mb-4'>${fmt(x.p/x.a)} сом. за м²</p>${row('Комнат',x.r)}${row('Площадь',x.a+' м²')}${row('Этаж',x.f)}${row('Район',D[x.d])}<p class='mut text-sm mt-4'>Ипотека от <b class='gold'>${fmt(pay)} сом./мес</b></p><p class='mut text-xs'>Взнос 30%, 15 лет, 14% годовых</p><a class='btn w-full justify-center mt-6' target='_blank' rel='noopener' href='${wa(om(x))}'>${ic('wa')} Заказать в WhatsApp</a><a class='btn2 w-full justify-center mt-3' href='tel:+992409022222'>${ic('phone')} Позвонить</a><p class='text-xs mut mt-4 break-all'>Ссылка на эту квартиру: ${link}</p></aside></div></div>
<div class='sec !pt-0'><div class='wrap'><h2 class='h2 mb-8'>Похожие квартиры</h2><div class='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>${A.filter((_,k)=>k!=i).slice(0,3).map((y,k)=>card(y,k+70)).join('')}</div></div></div>`}
function obs(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
 e.target.querySelectorAll('[data-n]').forEach(c=>{const t=+c.dataset.n;let v=0;const st=t/50;const iv=setInterval(()=>{v+=st;if(v>=t){v=t;clearInterval(iv)}c.textContent=fmt(v)},25)});
 e.target.querySelectorAll('[data-w]').forEach(b=>b.style.width=b.dataset.w+'%')}}),{threshold:.12});
 document.querySelectorAll('.page.on .rv:not(.in)').forEach(e=>io.observe(e))}
function route(){let h=(location.hash||'#home').slice(1),ai=-1;const mm=h.match(/^apt-(\d+)$/);if(mm&&A[mm[1]-1]){ai=mm[1]-1;h='apt'}else if(!P.some(p=>p[0]==h))h='home';
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on',p.id=='p-'+h));
 document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('on',a.dataset.p==(h=='apt'?'catalog':h)));
 $('#mn').classList.add('hidden');$('#mn').classList.remove('flex');
 if(h=='catalog')cat();if(h=='apt')apt(ai);window.scrollTo(0,0);setTimeout(obs,50);scr()}
function scr(){const h=$('#hd'),s=scrollY>30;h.style.background=s?'rgba(15,42,67,.92)':'transparent';h.style.backdropFilter=s?'blur(14px)':'none';h.style.color='#fff';h.style.boxShadow=s?'0 10px 30px -15px rgba(0,0,0,.5)':'none'}
addEventListener('scroll',scr);addEventListener('hashchange',route);
build();
$('#bg').onclick=()=>{const m=$('#mn');m.classList.toggle('hidden');m.classList.toggle('flex');$('#bg').innerHTML=ic(m.classList.contains('hidden')?'menu':'close')};
$('#hgo').onclick=()=>{S.cat={d:+$('#hd1').value,r:+$('#hr1').value,s:$('#hs1').value};location.hash='#catalog'};
$('#fm').onsubmit=e=>{e.preventDefault();const f=e.target.elements;const m='Здравствуйте! Меня зовут '+f[0].value+'. Телефон: '+f[1].value+'. Интересует: '+f[2].value+'. '+f[3].value+' Сайт: '+location.href.split('#')[0];$('#ok').classList.remove('hidden');window.open(wa(m),'_blank');e.target.reset()};
route();

/* Музыка */
const au=$('#au'),mu=$('#mu');au.src='music.mp3';au.volume=.4;
const PL='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',PS='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
let want=true;try{want=localStorage.getItem('mu')!=='off'}catch(e){}
const sv=v=>{try{localStorage.setItem('mu',v)}catch(e){}};
const ui=()=>{const p=!au.paused;mu.classList.toggle('pl',p);$('#mi').innerHTML=p?PS:PL;$('#ml').textContent=p?'Музыка вкл.':'Музыка'};
const go=()=>au.play().then(ui).catch(ui);
mu.onclick=()=>{if(au.paused){go();sv('on')}else{au.pause();ui();sv('off')}};
['pointerdown','keydown'].forEach(ev=>addEventListener(ev,e=>{if(want&&au.paused&&!(e.target.closest&&e.target.closest('#mu')))go()},{once:true}));
ui();
