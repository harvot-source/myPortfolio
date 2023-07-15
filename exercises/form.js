function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  }