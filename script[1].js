const scene = document.getElementById('scene');
const wrap = document.getElementById('sceneWrap');
const toast = document.getElementById('toast');
let toastTimer;

function message(text){
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'),2200);
}

document.querySelectorAll('.book-hit').forEach(book=>{
  book.addEventListener('click',()=>{
    const name = book.dataset.book;
    message(`📖 ${name}: este livro está pronto para receber seu link. Vamos configurar o destino na próxima etapa.`);
  });
});

document.querySelectorAll('.dimension').forEach(button=>{
  button.addEventListener('click',()=>{
    const sound = button.dataset.dimension === 'soundroom';
    scene.src = sound ? 'assets/the-soundroom.png' : 'assets/the-library.png';
    scene.alt = sound ? 'Sala de música pixel art do Your Little Universe' : 'Biblioteca pixel art do Your Little Universe';
    document.querySelectorAll('.dimension').forEach(b=>b.classList.toggle('active',b===button));
    wrap.classList.remove('switching');
    void wrap.offsetWidth;
    wrap.classList.add('switching');
    message(sound ? '♫ Bem-vinda ao The Soundroom' : '📚 De volta ao The Library');
  });
});

document.getElementById('explore').addEventListener('click',()=>{
  message('✨ Explore os livros da estante e escolha uma dimensão!');
});
