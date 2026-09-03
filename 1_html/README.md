# HTML 

## [Formularios HTML](https://www.w3schools.com/html/html_forms.asp)
```html
<!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<!-- Envio de datos nativo de un formulario con HTML -->

<!-- Contenedor <form> que contiene las etiquetas de entrada <input> -->
<form action="/action_page.php">

  <!-- Etiqueta de informacion que prece al input
  		el atributo for debe ser igual al id del input
   -->
  <label for="fname">First name:</label><br>
  
  <!-- Elemento de entrada de tipo texto -->
  <input type="text" id="fname" name="fname"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>

    <!-- Boton simple que no hace nada hasta que no le hagamos algo con JS -->
  <input type="button" value="Boton simple" id="miBoton">
  <input type="reset" value="Reset">
  <input type="submit" value="Enviar datos">

</form> 

<!-- El envio de informacion de formularios con JavaScript es mucho mas sencillo, toda la logica de envio la hacemos a traves de este lenguaje y la API fetch

<form id="Mi formulario">

  <label for="fname">First name:</label><br>  
  <input type="text" id="fname"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname"><br><br>

<input type="submit" value="Submit">

</form> 
-->

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>


```