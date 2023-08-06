const options = {
    bottom: '25px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
darkmode.showWidget();


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Your message should be longer than 15 letters.!';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! We will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 3000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

function SendMail(){
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value

  }
  emailjs.send("service_7ik1wtk" ,"template_cehttyb" , params).then(function(res){
    res.status ;
  })
}
