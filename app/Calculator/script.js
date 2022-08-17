//
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = '';
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        }
        catch {
          display.innerText = "Error"
        }
        break;
      case 'C':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '%':
        try {
          display.innerText = display.innerText / 100;
        }
        catch {
          display.innerText = "Error"
        }
        break;
        case '√':
          try {
            display.innerText =(Math.sqrt(display.innerText));
            break;
          }
          catch {
            display.innerText = "Error"
          }
          break;
          case 'sin':
            try {
              display.innerText = Math.sin(display.innerText);
              break;
            }
            catch {
              display.innerText = "Error"
            }
            break;
            case 'cos':
              try {
                display.innerText = Math.cos(display.innerText);
                break;
              }
              catch {
                display.innerText = "Error"
              }
              break;
              case 'tan':
                try {
                  display.innerText = Math.tan(display.innerText);
                  break;
                }
                catch {
                  display.innerText = "Error"
                }
                break;
                case '÷':
            try {
              display.innerText =display.innerText+"/"
              break;
            }
            catch {
              display.innerText = "Error"
            }
            break;
            case '×':
            try {
              display.innerText =display.innerText+"*"
              break;
            }
            catch {
              display.innerText = "Error"
            }
            break;
            case 'x²':
            try {
              display.innerText = Math.pow(display.innerText, 2);
              break;
            }
            catch {
              display.innerText = "Error"
            }
            break;
case 'log':
            try {
              display.innerText =Math.log(display.innerText);
              break;
            }
            catch {
              display.innerText = "Error"
            }
            break;
                case 'π':
                  display.innerText += 3.1415;
                  break;
                  //
      default:
        display.innerText += e.target.innerText;
    }
  });
});