document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('User clicked:', link.href);
  });
});