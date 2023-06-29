// №1

class Circle {
  constructor(radius) {
  this._radius = radius;
  }
  
  get radius() {
  return this._radius;
  }
  
  set radius(value) {
  this._radius = value;
  }
  
  get diameter() {
  return this._radius * 2;
  }
  
  area() {
  return Math.PI * Math.pow(this._radius, 2);
  }
  
  circumference() {
  return 2 * Math.PI * this._radius;
  }
  }
  
  function calculateCircle() {
  const radiusInput = document.getElementById('radiusInput');
  const radiusValue = parseFloat(radiusInput.value);
  
  if (isNaN(radiusValue) || radiusValue <= 0) {
  alert('Please enter a valid positive number for the radius.');
  return;
  }
  
  const circle = new Circle(radiusValue);
  
  const resultArea = document.getElementById('resultArea');
  resultArea.textContent = `Area: ${circle.area().toFixed(2)}`;
  
  const resultCircumference = document.getElementById('resultCircumference');
  resultCircumference.textContent = `Circumference: ${circle.circumference().toFixed(2)}`;
  
  radiusInput.value = '';
  }
  
  // №2
  
  class Marker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }

    input(text) {
      let result = "";

      for (let i = 0; i < text.length; i++) {
        if (this.inkLevel > 0) {
          if (text[i] !== " ") {
            result += `<span style="color: ${this.color}">${text[i]}</span>`;
            this.inkLevel -= 0.5;
          } else {
            result += " ";
          }
        } else {
          break;
        }
      }

      return result;
    }
  }

  class RefillableMarker extends Marker {
    refill(inkAmount) {
      this.inkLevel += inkAmount;
      if (this.inkLevel > 100) {
        this.inkLevel = 100;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const writeButton = document.getElementById("writeButton");
    const refillButton = document.getElementById("refillButton");
    const colorInput = document.getElementById("colorInput");
    const inkLevelInput = document.getElementById("inkLevelInput");
    const textInput = document.getElementById("textInput");
    const outputText = document.getElementById("outputText");

    writeButton.addEventListener("click", function() {
      const color = colorInput.value;
      const inkLevel = parseInt(inkLevelInput.value);
      const text = textInput.value;

      const marker = new Marker(color, inkLevel);
      const output = marker.input(text);
      outputText.innerHTML = output;
    });

    refillButton.addEventListener("click", function() {
      const color = colorInput.value;
      const inkLevel = parseInt(inkLevelInput.value);
      const marker = new RefillableMarker(color, inkLevel);

      const inkAmount = parseInt(prompt("Enter the amount of ink to refill:"));
      marker.refill(inkAmount);

      inkLevelInput.value = marker.inkLevel;
    });
  });
  
  // №3
  
  class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }

  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }

    getHtml() {
      let html = '<table>';
      html += '<tr><th>Name</th><th>Position</th></tr>';

      for (let employee of this.employees) {
        html += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
      }

      html += '</table>';

      return html;
    }
  }

  const bankEmployees = [
    new Employee('John Doe', 'Manager'),
    new Employee('Jane Smith', 'Teller'),
    new Employee('Mark Johnson', 'Accountant'),
  ];

  const table = new EmpTable(bankEmployees);

  const htmlCode = table.getHtml();

  document.getElementById('tableContainer').innerHTML = htmlCode;