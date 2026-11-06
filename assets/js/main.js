/* Static GitHub Pages-compatible client behavior; no dependencies. */
(()=>{
    const q=(s)=>document.querySelector(s); const all=(s)=>[...document.querySelectorAll(s)];
    const norwegian=document.documentElement.lang.toLowerCase().startsWith('nb');
    const t=(en,no)=>norwegian?no:en;
    q('#year').textContent=new Date().getFullYear();
    const nav=q('#primary-nav'),toggle=q('#mobile-toggle');
    function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',t('Open navigation','Åpne meny'))}
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?t('Close navigation','Lukk meny'):t('Open navigation','Åpne meny'))});
    all('#primary-nav a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeModal()}});
    all('.service-link').forEach(a=>a.addEventListener('click',()=>{q('#service').value=a.dataset.service}));
    const tabs=all('.report-tab');
    function activateTab(tab,moveFocus=false){tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.setAttribute('tabindex',selected?'0':'-1');q('#panel-'+t.dataset.tab).hidden=!selected});if(moveFocus)tab.focus()}
    tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let index=i;if(e.key==='ArrowRight') index=(i+1)%tabs.length;else if(e.key==='ArrowLeft')index=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=tabs.length-1;else return;e.preventDefault();activateTab(tabs[index],true)})});
    const modal=q('#enquiry-modal'),form=q('#contact-form');let focusBeforeModal=null;
    const cfg=window.NORD_ASSURE_CONFIG||{};
    const isLive=typeof cfg.formEndpoint==='string' && /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(cfg.formEndpoint);
    if(isLive){q('#form-mode-pill').textContent=t('Enquiries enabled','Henvendelser aktivert');q('#contact-form-status').textContent=t('Send your enquiry using our secure form service.','Send henvendelsen via vår skjematjeneste.');q('#submit-label').textContent=t('Send your enquiry','Send henvendelse');q('.form-note').textContent=t('Submitted details are processed by our form provider to answer your request. Check our finalized privacy notice before enabling submissions.','Opplysningene håndteres av skjemaleverandøren for å svare på henvendelsen. Fullfør personvernerklæringen før aktivering.');}
    function closeModal(){if(!modal.classList.contains('open'))return;modal.classList.remove('open');document.body.classList.remove('modal-open');if(focusBeforeModal)focusBeforeModal.focus()}
    form.addEventListener('submit',async e=>{
      e.preventDefault();
      // Native constraints are still checked even though we intercept submission.
      if(!form.reportValidity()) return;
      const data=new FormData(form), feedback=q('#form-feedback');feedback.textContent='';
      if(!isLive){
        const msg=norwegian
          ? `Emne: Forespørsel om cybersikkerhetsvurdering — ${data.get('company')}\n\nHei,\n\nJeg ønsker å diskutere en cybersikkerhetsvurdering.\n\nNavn: ${data.get('name')}\nBedrift: ${data.get('company')}\nE-post: ${data.get('email')}\nTjeneste: ${data.get('service')}\n\nMer informasjon:\n${data.get('message')||'Ingen ytterligere informasjon.'}\n\nTakk.`
          : `Subject: Cybersecurity assessment enquiry — ${data.get('company')}\n\nHello,\n\nI would like to discuss a cybersecurity assessment.\n\nName: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nAdditional context:\n${data.get('message')||'No additional context provided.'}\n\nThank you.`;
        q('#enquiry-text').value=msg;
        focusBeforeModal=document.activeElement;modal.classList.add('open');document.body.classList.add('modal-open');q('#modal-close').focus();return;
      }
      const button=q('.form-submit');button.disabled=true;feedback.textContent=t('Sending…','Sender…');
      try{
        data.delete('privacy-consent');
        const res=await fetch(cfg.formEndpoint,{method:'POST',body:data,headers:{Accept:'application/json'}});
        if(!res.ok)throw new Error('Submission not accepted');
        feedback.textContent=t('Thank you. Your enquiry has been submitted.','Takk! Henvendelsen er sendt.');
        form.reset();
      }catch(err){feedback.textContent=t('We could not send your enquiry. Please try again later.','Henvendelsen kunne ikke sendes. Prøv igjen senere.');}
      finally{button.disabled=false;}
    });
    q('#modal-close').addEventListener('click',closeModal);q('#cancel-modal').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
    let toastTimer;function showToast(message){const el=q('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2400)}
    q('#copy-enquiry').addEventListener('click',async()=>{let copied=false;try{await navigator.clipboard.writeText(q('#enquiry-text').value);copied=true}catch(e){q('#enquiry-text').focus();q('#enquiry-text').select();try{copied=document.execCommand('copy')}catch(e){}}showToast(copied?t('Copied to clipboard','Kopiert til utklippstavlen'):t('Select and copy the enquiry text','Merk og kopier henvendelsen'))});
    document.addEventListener('keydown',e=>{if(e.key==='Tab'&&modal.classList.contains('open')){const focusables=all('#enquiry-modal button, #enquiry-modal textarea');const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
    if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.09});all('.reveal').forEach(el=>io.observe(el))}else all('.reveal').forEach(el=>el.classList.add('visible'));
  })();
