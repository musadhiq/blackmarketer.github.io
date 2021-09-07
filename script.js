window.onload = () => {
  const myInput = document.getElementById('dummyKeyboard');
  myInput.onpaste = e => e.preventDefault();
 }
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">contact</span>, <span class="code">resume</span>'
  about:
    "Hello 👋<br>I'm Alan Abhilash. I’m a 18 yr old pentester and bug bounty hunter currently living in India.",
  skills:
    '<span class="code">Skill:</span> Ethical Hacking, Pen-Testing, Bug Hunting,..<br>',
  education:
    "MES HSS Vandanmedu, Idukki,Kerala, India<br> Plus Two , Computer Science",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  acknowledges: 
    "<a href='https://bughunter.withgoogle.com/profile/12edf378-705d-4ef8-ae44-2fc5ab8bbb69' class='success link'>Google Honorable Mention</a> , <a href='https://www.nokia.com/responsible-disclosure/' class='success link'>Nokia HOF On December 2020</a> , <a href='https://access.redhat.com/articles/66234' class='success link'>RedHat HOF 2021</a> , <a href='https://security.intuit.com/responsible-disclosure-acknowledgements' class='success link'>intuit HOF</a> , <a href='https://security.olx.com/security-hall-of-fame.html' class='success link'>OLX HOF 2021</a> , <a href='https://fabaf.in/responsible-disclosure/' class='success link'>Fabaf HOF</a> , <a href='https://www.blackberry.com/us/en/services/blackberry-product-security-incident-response' class='success link'>Blackberry HOF 2021</a> , <a href='https://www.powerassist.nl/security-hall-of-fame' class='success link'>Powerassist HOF</a> , <a href='./Lenovo.pdf' class='success link'>Lenovo Certificate of Appreciation </a> , <a href='./Nykaa.pdf' class='success link'>Nykaa Certificate of Appreciation </a> , <a class='success link'>Thanked By Sky.eu</a>  ", 
  contact:
    "You can contact me on any of following links:<br><a href='https://t.me/alan_abhilash' class='success link'>Telegram</a>, <a href='https://www.instagram.com/mr.blackmarketer/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/alan_abhilash/' class='success link'>Twitter</a>"
};

const  userInput = document.getElementById("userInput");
const  terminalOutput = document.getElementById("terminalOutput");
const  inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener('keypress', (e) =>{
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    };
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; 
    e.target.value = ""
  };
});
