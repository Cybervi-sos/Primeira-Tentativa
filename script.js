const dialog=document.querySelector('#bookDialog');
const title=document.querySelector('#dialogTitle');
const text=document.querySelector('#dialogText');
const link=document.querySelector('#dialogLink');
const speech=document.querySelector('#speech');
const books={
  email:{title:'E-mail',text:'Vamos conversar? Este livro abre seu contato por e-mail.',url:'mailto:SEU-EMAIL'},
  github:{title:'GitHub',text:'Aqui vivem meus projetos, experimentos e linhas de código.',url:'https://github.com/SEU-USUARIO'},
  linkedin:{title:'LinkedIn',text:'Conheça minha trajetória e experiência profissional.',url:'https://www.linkedin.com/in/SEU-LINKEDIN'}
};
document.querySelectorAll('.book').forEach(book=>{
  book.addEventListener('click',()=>{
    const item=books[book.dataset.book];
    title.textContent=item.title;text.textContent=item.text;link.href=item.url;
    book.classList.remove('fall');void book.offsetWidth;book.classList.add('fall');
    speech.textContent=`O livro ${item.title} caiu da estante! ✦`;
    setTimeout(()=>dialog.showModal(),380);
    setTimeout(()=>book.classList.remove('fall'),1000);
  });
});
document.querySelector('#closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

const scene=document.querySelector('#scene');
const sceneButtons=document.querySelectorAll('[data-scene]');
const scenes={library:{src:'assets/the-library.png',alt:'The Library — biblioteca pixel art'},soundroom:{src:'assets/the-soundroom.png',alt:'The Soundroom — sala musical pixel art'}};
sceneButtons.forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.scene;
  scene.style.opacity=0;
  setTimeout(()=>{scene.src=scenes[key].src;scene.alt=scenes[key].alt;scene.style.opacity=1},220);
  sceneButtons.forEach(b=>b.classList.toggle('active',b===button));
  speech.textContent=key==='library'?'Você entrou na The Library. ✦':'Você entrou na The Soundroom. ♫';
}));

// Demo XP: replace this value with real GitHub metrics in a later step.
let xp=120;
document.querySelector('#xp').textContent=xp;
document.querySelector('#xpbar').style.width=(xp/200*100)+'%';
