let lgpdHtml = `
  <div class="lgpd">
    <div class="lgpd--left">
     Nós utilizamos cookies para melhorar sua experiência de navegação e do usuário. Ao utilizar nossos serviços, você concorda com tal monitoramento<br>
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
