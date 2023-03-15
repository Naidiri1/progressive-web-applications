const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
  
        const promptEvent = window.deferredPrompt;
      
        if (!promptEvent) {
         return;
        }

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});
