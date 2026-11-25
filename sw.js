// Mis finanzas - service worker. Subí el número de V cuando actualices la app.
const V='finanzas-v11';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  // solo borra cachés de esta app (prefijo finanzas-); no toca las de otras apps del mismo sitio
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('finanzas-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==location.origin)return;
  // solo manejamos archivos dentro del alcance de esta app
  if(!u.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
  e.respondWith(
    fetch(new Request(r,{cache:'no-cache'})).then(res=>{
      if(res&&res.ok){const copy=res.clone();caches.open(V).then(c=>c.put(r,copy))}
      return res;
    }).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode==='navigate'?caches.match('./index.html'):undefined)))
  );
});
