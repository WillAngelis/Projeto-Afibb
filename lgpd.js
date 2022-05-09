let lgpdHtml = `
  <div class="lgpd">
    <div class="lgpd--left">
     Nós utilizamos cookie para melhorar sua experiência do usuário.<br>
     Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href=""> política de privacidade</a>
     </div>
  <div class="lgpd--right">
   <button>Ok</button>
  </div>
     `;

let lsContent = localStorage.getItem('lgpd');
if (!lsContent) {
  document.body.innerHTML += lgpdHtml;

  let lgpdArea = document.querySelector('.lgpd');
  let lgpdButton = lgpdArea.querySelector('button');

  lgpdButton.addEventListener('click', () => {
    lgpdArea.remove();
    localStorage.setItem('lgpd', 'true');
    document.location.reload(true);
  });
}
