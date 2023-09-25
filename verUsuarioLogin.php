<?php


session_start();
if(!isset($_SESSION['Nombre'])){
    //echo"no existe session";
}else{
     //echo  $_SESSION['nombre'] ; 
}    
    ?>
<html>
<head>
<title> Estudiante </title>




      <body>
 <form action="" method="POST">



      <td> <h3> Bienvenido(a) <?php echo $_SESSION['Nombre'] ?> 
                    <div id="Salir" align="center" > 
                      <a href="cerrar sesion.php">Salir</a> 
         </td>   </h3></div>



        <table>

        <tr>
        <th> <h3>  Cuenta </h3> </th>
        </tr>
        <?php
        include 'conexion.php';
         $query="SELECT * FROM usuarios WHERE 
          id_usuarios='$id_usuarios'";
         $resultado=$conexion->query($query);
         while ($row=$resultado->fetch_assoc()){
         ?>


        <tr>
        <td>  Nombre; </td>
        <td> <?php echo $row['Nombre']; ?> </td>
        </tr>
        <tr>
        <td>Correo:   </td>
         <td> <?php echo $row['Correo']; ?> </td>
        </tr>
        <tr>
        <td>contraseña:  </td>
        <td> <?php echo $row['Contraseña']; ?> </td>
            </tr>                                               



          <?php
         }
         ?>

        </table>



      </form>
    </body>