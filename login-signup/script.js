document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.checkbox');
    const loginSpan = document.querySelector('.login');
    const signupSpan = document.querySelector('.signup');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        loginSpan.style.color = '#FFFFFF';
        signupSpan.style.color = '#7A46E8';
      } else {
        loginSpan.style.color = '#7A46E8';
        signupSpan.style.color = '#FFFFFF';
      }
    });
});