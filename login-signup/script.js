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

    const toggleIcons = document.querySelectorAll('.see-password');
    toggleIcons.forEach(toggleIcon => {
        toggleIcon.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            //to enable password visibility only momentarily
            /*passwordInput.type = 'text';
            setTimeout(function() {
              passwordInput.type = 'password';
            },400);*/ 
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    });
});

