const projects = [{
    id: 'mtf-mobile',
    title: 'MTF Mobile',
    category: 'Mobile Application',
    year: '2025 — 2026',
    role: 'UI/UX Analyst',
    tools: ['Figma', 'FigJam', 'Design System', 'Prototyping'],
    description: 'A customer-facing financing app redesigned to make everyday services simpler and more accessible.',
    overview: 'MTF Mobile brings everyday financing services into one mobile experience. The project focused on improving information hierarchy, simplifying key journeys, and creating a more consistent interface across payment and post-financing services.',
    contribution: ['Translated business requirements into user flows and high-fidelity UI.', 'Reworked existing screens and interaction patterns for clarity and consistency.', 'Established reusable UI patterns and design tokens across the product.'],
    images: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1800&q=90&auto=format&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1800&q=90&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=90&auto=format&fit=crop', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1800&q=90&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1800&q=90&auto=format&fit=crop']
  },
  {
    id: 'collection',
    title: 'Collection and Inventory System',
    category: 'Enterprise Product',
    year: '2026',
    role: 'UI/UX Analyst',
    tools: ['Figma', 'Design System', 'Prototyping', 'Responsive Web'],
    description: 'An integrated collection and inventory platform designed to streamline operational workflows, task management, and field activities.',
    overview: 'The system connects operational activities across collection and inventory teams. The design makes task status, priorities, and next actions visible at a glance while keeping dense operational data easy to scan.',
    contribution: ['Designed dashboard and task-management experiences for different user roles.', 'Created status, checklist, and progress patterns for operational workflows.', 'Improved information hierarchy for dense tables and verification screens.'],
    images: ['./assets/collection.jpg']
  },
  {
    id: 'mtf-web',
    title: 'MTF Website Redesign',
    category: 'Corporate Website',
    year: '2025',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UI Design', 'Responsive Web', 'Visual Design'],
    description: 'A redesign of MTF’s official website focused on clearer navigation, stronger visual hierarchy, and a more engaging digital experience.',
    overview: 'The redesign refreshed the corporate web experience with a clearer content structure and a stronger visual system. The goal was to make important information easier to discover while maintaining a professional financial-services presence.',
    contribution: ['Restructured page hierarchy and navigation patterns.', 'Designed responsive layouts and reusable visual components.', 'Refined typography, spacing, imagery, and content presentation.'],
    images: ['./assets/web-mtf.jpg']
  },
  {
    id: 'streaming',
    title: 'Website Streaming TV',
    category: 'Streaming Platform',
    year: '2023',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UI Design', 'Prototyping', 'Front-End'],
    description: 'A redesigned streaming platform for Trans7, creating a more engaging way for viewers to discover, browse, and watch entertainment content.',
    overview: 'The project explored a more engaging streaming experience with emphasis on content discovery, browsing, and playback. The interface balances editorial content with quick access to what viewers want to watch.',
    contribution: ['Designed content discovery and browsing flows.', 'Created high-fidelity responsive screens and prototypes.', 'Translated visual designs into responsive web interfaces.'],
    images: ['./assets/web-streaming.jpg']
  },
  {
    id: 'hris',
    title: 'HRIS Mobile App',
    category: 'HR Technology',
    year: '2023',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UI Design', 'Prototyping', 'Mobile UX'],
    description: 'A mobile HR experience designed to make essential employee services more accessible and efficient.',
    overview: 'The HRIS concept focused on reducing friction in everyday employee tasks. Information and actions were organized around the needs of employees who need to complete HR activities quickly from a mobile device.',
    contribution: ['Mapped common employee journeys and key task flows.', 'Designed mobile-first interfaces and reusable components.', 'Created interactive prototypes for stakeholder review.'],
    images: ['./assets/hris.jpg']
  }
];
const filters = ['All', 'Product Design', 'UI/UX', 'Web'];
const filterOf = p => ['Mobile Application', 'Enterprise Product'].includes(p.category) ? 'Product Design' : ['Corporate Website', 'Streaming Platform'].includes(p.category) ? 'Web' : 'UI/UX';
let currentFilter = 'All';
const grid = document.getElementById('projectGrid'),
  filterEl = document.getElementById('filters');

function renderFilters() {
  filterEl.innerHTML = filters.map(f => `<button onclick="setFilter('${f}')" class="px-4 py-2 rounded-full text-sm font-semibold ${currentFilter===f?'bg-[#171717] text-white':'bg-white text-[#6B7280] border border-[#E5E7EB] hover:text-[#171717]'}">${f}</button>`).join('')
}

function renderGrid() {
  const list = currentFilter === 'All' ? projects : projects.filter(p => filterOf(p) === currentFilter);
  grid.innerHTML = list.map((p, i) => `<a href="#project/${p.id}" onclick="openProject('${p.id}');return false" class="project-card group block reveal is-visible"><div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EDEBE7] border border-black/[.05]"><img src="${p.images[0]}" alt="${p.title}" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div><div class="absolute left-4 right-4 bottom-4 flex justify-between items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"><span class="text-xs font-bold uppercase tracking-wider text-white">View project</span><span class="w-9 h-9 rounded-full bg-white flex items-center justify-center">↗</span></div></div><div class="pt-4 flex justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-[.14em] text-[#2563EB] mb-2">${p.category}</p><h3 class="text-lg font-bold">${p.title}</h3><p class="mt-2 text-sm leading-relaxed text-[#6B7280]">${p.description}</p></div><span class="text-xs font-semibold text-[#9CA3AF]">${p.year.split(' ')[0]}</span></div></a>`).join('')
}

function setFilter(f) {
  currentFilter = f;
  renderFilters();
  renderGrid()
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  document.body.classList.add('no-scroll');
  const detail = document.getElementById('detail');
  detail.classList.remove('hidden');
  detail.innerHTML = `<header class="sticky top-0 z-10 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-black/[.06]"><div class="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between"><button onclick="closeProject()" class="text-sm font-bold hover:text-[#2563EB]">← Back to work</button><span class="text-xs font-bold uppercase tracking-[.16em] text-[#9CA3AF]">Project detail</span></div></header><section class="max-w-7xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-14"><div class="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20"><div><p class="text-xs font-bold text-[#2563EB] uppercase tracking-[.2em] mb-5">${p.category}</p><h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[.98]">${p.title}</h1><p class="mt-7 text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl">${p.description}</p></div><aside class="border-t lg:border-t-0 lg:border-l border-black/[.08] pt-7 lg:pt-1 lg:pl-8"><div class="space-y-7"><div><p class="label">Role</p><p class="value">${p.role}</p></div><div><p class="label">Year</p><p class="value">${p.year}</p></div><div><p class="label">Tools</p><div class="flex flex-wrap gap-2">${p.tools.map(t=>`<span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB]">${t}</span>`).join('')}</div></div></div></aside></div></section><section class="max-w-7xl mx-auto px-5 sm:px-6 pb-16"><button onclick="showImage('${p.images[0]}','${p.title}')" class="block w-full cursor-zoom-in rounded-3xl overflow-hidden bg-white border border-black/[.06]"><img src="${p.images[0]}" alt="${p.title}" class="w-full max-h-[720px] object-cover"></button></section><section class="max-w-4xl mx-auto px-5 sm:px-6 pb-20"><div class="grid sm:grid-cols-[180px_1fr] gap-6 sm:gap-12"><p class="label">Overview</p><p class="text-lg sm:text-xl leading-relaxed text-[#374151]">${p.overview}</p></div><div class="grid sm:grid-cols-[180px_1fr] gap-6 sm:gap-12 mt-14 pt-14 border-t border-black/[.08]"><p class="label">My Contribution</p><ul class="space-y-4">${p.contribution.map(x=>`<li class="flex gap-3 text-base sm:text-lg leading-relaxed text-[#374151]"><span class="mt-3 w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>${x}</li>`).join('')}</ul></div></section><section class="max-w-7xl mx-auto px-5 sm:px-6 pb-24"><div class="mb-8"><p class="text-xs font-bold text-[#2563EB] uppercase tracking-[.18em] mb-3">Design</p><h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Screens & mockups</h2><p class="text-sm text-[#9CA3AF] mt-2">${p.images.length} image${p.images.length===1?'':'s'} · click to view larger</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-5">${p.images.map((img,i)=>`<button onclick="showImage('${img}','${p.title} screen ${i+1}')" class="rounded-2xl overflow-hidden bg-white border border-black/[.06] cursor-zoom-in"><img src="${img}" alt="${p.title} screen ${i+1}" class="w-full aspect-[4/3] object-cover hover:scale-[1.015] transition-transform duration-500"></button>`).join('')}</div></section><section class="border-t border-black/[.08]"><div class="max-w-7xl mx-auto px-5 sm:px-6 py-8 flex justify-between">${projects[projects.indexOf(p)-1]?`<button onclick="openProject('${projects[projects.indexOf(p)-1].id}')" class="text-left"><p class="label">Previous</p><p class="font-bold">← ${projects[projects.indexOf(p)-1].title}</p></button>`:'<span></span>'}${projects[projects.indexOf(p)+1]?`<button onclick="openProject('${projects[projects.indexOf(p)+1].id}')" class="text-right"><p class="label">Next</p><p class="font-bold">${projects[projects.indexOf(p)+1].title} →</p></button>`:'<span></span>'}</div></section>`;
  detail.querySelectorAll('.label').forEach(x => x.className = 'text-[11px] font-bold uppercase tracking-[.16em] text-[#9CA3AF] mb-2');
  detail.querySelectorAll('.value').forEach(x => x.className = 'text-sm font-semibold');
  window.scrollTo(0, 0)
}

function closeProject() {
  document.getElementById('detail').classList.add('hidden');
  document.body.classList.remove('no-scroll')
}

function showImage(src, alt) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  lb.classList.remove('hidden');
  lb.classList.add('flex')
}
document.getElementById('closeLightbox').onclick = () => {
  document.getElementById('lightbox').classList.add('hidden');
  document.getElementById('lightbox').classList.remove('flex')
};
document.getElementById('lightbox').onclick = e => {
  if (e.target.id === 'lightbox') document.getElementById('closeLightbox').click()
};
document.getElementById('menuBtn').onclick = () => document.getElementById('mobileMenu').classList.toggle('hidden');
const steps = [
  ['01', 'Discover', 'Research the problem space through stakeholder interviews, user research, and competitive analysis.'],
  ['02', 'Define', 'Synthesize findings into problem statements, user flows, and design criteria.'],
  ['03', 'Design', 'Explore concepts from wireframes to high-fidelity prototypes and iterate quickly.'],
  ['04', 'Validate', 'Test with users, review with stakeholders, and use learnings to refine the design.']
];
document.getElementById('processGrid').innerHTML = steps.map(s => `<div class="p-6 sm:p-7 rounded-2xl bg-white border border-[#F3F4F6]"><span class="text-4xl font-extrabold text-[#F3F4F6]">${s[0]}</span><div class="w-8 h-px bg-[#E5E7EB] my-5"></div><h3 class="text-lg font-bold mb-3">${s[1]}</h3><p class="text-sm text-[#6B7280] leading-relaxed">${s[2]}</p></div>`).join('');
renderFilters();
renderGrid();
const observer = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('is-visible')
}), {
  threshold: .1
});
document.querySelectorAll('.reveal').forEach(x => observer.observe(x));
