<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 10px 0;
      text-align: center;
    }
    section {
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #555;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Sample Website</h1>
  </header>
  <section>
    <h2>Click the button to change the text:</h2>
    <p id="changeText">This is the initial text.</p>
    <button onclick="changeText()">Change Text</button>
  </section>

  <script>
    function changeText() {
      var paragraph = document.getElementById("changeText");
      paragraph.textContent = "Text changed!";
    }
  </script>
</body>
</html>
