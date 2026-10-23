
(function(){
  const btn=document.querySelector('.menuBtn'); const nav=document.querySelector('.mobileNav');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
  document.querySelectorAll('form[data-lead-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd=new FormData(form); const country=fd.get('country')||'seleccionado';
      const success=document.createElement('div'); success.className='formSuccess';
      success.innerHTML=`<strong>Solicitud recibida</strong><p>¡Gracias! Tu solicitud sería enviada al equipo de StarFest ${country}. Te contactaremos pronto.</p><p class="note">Prototipo GitHub Pages: este formulario valida y confirma en el navegador, pero todavía no envía datos a un servidor.</p>`;
      form.replaceWith(success);
    });
  });
})();
