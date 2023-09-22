<?php
//use function PHPSTORM_META\type;

$DEF_HOST = "localhost";
$DEF_DB = "udg_salud";
$DEF_USER = "root";
$DEF_PASSWORD = "";

if (isset($_FILES['xfile'])) {
   $RAW = $_POST['JSON'];
} else {
   header("Content-Type: application/json; charset=UTF-8");
   $RAW = file_get_contents("php://input");
}

//! #####  Variables Generales ##### ///
$RAW2 = json_decode($RAW, true);

$PHP_Function = $RAW2["EXECUTE"];
$DB_JSON =  $RAW2["JSON"];

if ($DB_JSON == "ERROR") {
   $DB_DATA = "ERROR";
} else {
   $DB_DATA = json_decode($DB_JSON, true);
}

if($DEF_HOST != ""){$_DB_HOST = $DEF_HOST;}
else {$_DB_HOST = $DB_DATA["DB_HOST"];}
if($DEF_DB != ""){$DB_DB = $DEF_DB;}
else {$DB_DB = $DB_DATA["DB_NAME"];}
if($DEF_USER != ""){$_DB_USER = $DEF_USER;}
else {$_DB_USER = $DB_DATA["DB_USER"];}
if($DEF_PASSWORD != ""){$_DB_PASSWORD = $DEF_PASSWORD;}
else {$_DB_PASSWORD = $DB_DATA["DB_PASSWORD"];}

try {
   $_DB_CONEXION = new PDO("mysql:host={$_DB_HOST};dbname={$DB_DB}", $_DB_USER, $_DB_PASSWORD);
   $_DB_CONEXION->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
   echo "ERROR";
   $_DB_CONEXION = null;
}

// >>> Identificador de Funciones
Diferenciador($PHP_Function, $DB_DATA, $_DB_CONEXION);

function Diferenciador($PHP_Function, $DB_DATA, $_DB_CONEXION)
{
   // Dev Functions
   if ($PHP_Function == "CHECK_DB") {
      Check_DataBase($DB_DATA);
   } else if ($PHP_Function == "CREATE_DB") {
      Create_DB($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "CREATE_TABLE") {
      Create_Table($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "ADD_DATA") {
      Add_Data($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "UPDATE_DATA") {
      Update_Data($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "REMOVE_DATA") {
      Delete_Data($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "CHECK_DATA") {
      Check_Data($DB_DATA, $_DB_CONEXION);
   }

   // Normal-User Functions
   else if ($PHP_Function == "LOGIN") {
      LOGIN($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "END_SESION") {
      END_SESION($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "ADD_PACIENT") {
      ADD_PACIENT($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_PACIENT") {
      LOAD_PACIENT($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_PACIENT_LIST") {
      LOAD_PACIENT_LIST($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "UPDATE_PACIENT") {
      UPDATE_PACIENT($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "ADD_NOTE") {
      ADD_NOTE($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_NOTES") {
      LOAD_NOTES($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "ADD_DOC") {
      ADD_DOC($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_DOCS") {
      LOAD_DOCS($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "ADD_DATE") {
      ADD_DATE($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_DATES") {
      LOAD_DATES($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "SEND_REPORT") {
      SEND_REPORT($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "SEARCH") {
      SEARCH($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "IMPORT_PACIENT") {
      SEARCH($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "LOAD_TEMPLATES") {
      LOAD_TEMPLATES($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "SEND_FILE") {
      SEND_FILE($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "DOWNLOAD_FILE") {
      DOWNLOAD_FILE($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "DELETE_FILE") {
      DELETE_FILE($DB_DATA, $_DB_CONEXION);
   } else if ($PHP_Function == "DOCTOR_LIST"){
      DOCTOR_LIST($DB_DATA, $_DB_CONEXION);
   }
}

//! ##### FUNCIONES DEV ##### ///
// >>> Comprobar si la base de datos Existe
function Check_DataBase($DB_DATA)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {
      $_DB_HOST = $DB_DATA['DB_HOST'];
      $_DB_USER = $DB_DATA['DB_USER'];
      $_DB_PASSWORD = $DB_DATA['DB_PASSWORD'];
      $DB_DB = $DB_DATA['DB_NAME'];
      $Result = null;
   }

   try {
      $_DB_CONEXION = new PDO("mysql:host=$_DB_HOST;dbname=$DB_DB", $_DB_USER, $_DB_PASSWORD);
      $_DB_CONEXION->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   } catch (PDOException $e) {
      echo "ERROR";
      $_DB_CONEXION = null;
      return "ERROR";
   }

   $SQL = "SELECT ID FROM USERS WHERE ID=0";
   $STMT = $_DB_CONEXION->prepare($SQL);
   $STMT->execute();
   $Exist = $STMT->fetchColumn();

   if ($Exist > 0) {
      echo "SUSSCESS";
      return "SUSSCESS";
   } else {
      echo "ERROR";
      $_DB_CONEXION = null;
      return "ERROR";
   }
}

// >>> Crear Una nueva Base de Datos
function Create_DB($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {
      $SQL = "CREATE DATABASE " . $DB_DATA['DB_NAME'];
      try {
         $_DB_CONEXION->exec($SQL);
         echo "SUCCESS";
         return "SUCCESS";
      } catch (PDOException $e) {
         echo "ERROR";
         return "ERROR";
      }
   }
}

// >>> Crear Una nueva Tabla
function Create_Table($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {

      $SQL = "CREATE TABLE " . $DB_DATA['TABLE_NAME'] . "(" . $DB_DATA['TABLE_KEYS'] . ")";
      try {
         $_DB_CONEXION->exec($SQL);
         echo "SUCCESS";
         return "SUCCESS";
      } catch (PDOException $e) {
         echo "ERROR";
         return "ERROR";
      }
   }
}

//! ##### FUNCIONES GENERALES ##### ///
// >>> Agregar Elemento a la Tabla indicada
function Add_Data($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {

      $SQL = 'INSERT INTO ' . $DB_DATA["TABLE_NAME"] . ' (' . $DB_DATA["TABLE_KEYS"] . ') ' .
         'VALUES (' . $DB_DATA["VALUES"] . ')';

      try {
         $_DB_CONEXION->exec($SQL);
         echo "SUCCESS";
         return "SUCCESS";
      } catch (PDOException $e) {
         echo "ERROR";
         return "ERROR";
      }
   }
}

// >>> Eliminar Elemento de la Tabla indicada
function Delete_Data($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {
      $SQL = 'DELETE FROM ' . $DB_DATA["TABLE_NAME"] . ' WHERE ' . $DB_DATA["WHERE_KEY"] . '=' . $DB_DATA["WHERE_VALUE"];
      try {
         $_DB_CONEXION->exec($SQL);
         echo "SUCCESS";
         return "SUCCESS";
      } catch (PDOException $e) {
         echo "ERROR";
         return "ERROR";
      }
   }
}

// >>> Actualizar Elemento de la Tabla indicada
function Update_Data($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {
      $SQL = 'UPDATE FROM ' . $DB_DATA["TABLE_NAME"] . ' SET ' . $DB_DATA["SET_KEY"] . '=' . $DB_DATA["SET_VALUE"] . ' WHERE ' . $DB_DATA["WHERE_KEY"] . '=' . $DB_DATA["WHERE_VALUE"];
      try {
         $_DB_CONEXION->exec($SQL);
         echo "SUCCESS";
         return "SUCCESS";
      } catch (PDOException $e) {
         echo "ERROR";
         return "ERROR";
      }
   }
}

// >>> Comprobar que la informacion existe en la base de datos
function Check_Data($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo "ERROR";
      return "ERROR";
   } else {
      $SQL = 'SELECT ' . $DB_DATA["KEYS"] . ' FROM ' . $DB_DATA["TABLE_NAME"] . 'WHERE ' . $DB_DATA["WHERE_KEY"] . "=" . $DB_DATA["WHERE_VALUE"];
      $STMT = $_DB_CONEXION->prepare($SQL);
      $STMT->execute();
      $Exist = $STMT->fetchColumn();

      if ($Exist > 0) {
         echo "SUSSCESS";
         return "SUSSCESS";
      } else {
         echo "ERROR";
         $_DB_CONEXION = null;
         return "ERROR";
      }
   }
}

// >>> Buscar Informacion en la Tabla Indicada

//! ##### FUNCIONES ESPECIFICAS ##### ///
// >>> Iniciar Sesion
function LOGIN($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR-NO-JSON"));
      return "ERROR";
   } else {
      $SQL = 'SELECT * FROM USERS WHERE ' . $DB_DATA["WHERE_KEY"] . " = " . $DB_DATA["WHERE_VALUE"] . " LIMIT 1";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            if ($Result[0]["ID"] == $DB_DATA["USER_ID"]) {
               if ($Result[0]["USER_PASSWORD"] == $DB_DATA["USER_PASSWORD"]) {
                  $SQL = 'SELECT * FROM USER_DATA WHERE ' . $DB_DATA["WHERE_KEY"] . " = " . $DB_DATA["WHERE_VALUE"];
                  $stmt = $_DB_CONEXION->prepare($SQL);
                  $stmt->execute();
                  $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                  echo json_encode(array("RESULT" => "SUCCESS", "LOGING" => "TRUE", $Result[0]));
                  return "SUCCESS";
               } else {
                  echo json_encode(array("RESULT" => "SUCCESS", "LOGING" => "FALSE", $Result));
                  return "SUCCESS";
               }
            } else {
               echo json_encode(array("RESULT" => "SUCCESS", "LOGING" => "FALSE", $Result));
               return "SUCCESS";
            }
         } else {
            echo json_encode(array("RESULT" => "ERROR", "LOGING" => "FALSE", $Result));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> 
function END_SESION($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "UPDATE " . $DB_DATA["DB_TABLE"] . " SET " . $DB_DATA["SET"] . " WHERE " . $DB_DATA['WHERE_KEY'] . "='" . $DB_DATA['WHERE_VALUE'] . "';";
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Registrar Paciente
function ADD_PACIENT($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . "(" . $DB_DATA["TABLE_KEYS"] . ") VALUES (" . $DB_DATA["VALUES"] . ");";
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Obtener Paciente
function LOAD_PACIENT($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' LIMIT 1;";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            $SQL = "SELECT * FROM CITAS WHERE ID='" . $DB_DATA["WHERE_VALUE"] . "' ORDER BY 'FECHA' DESC LIMIT 50;";
            $stmt = $_DB_CONEXION->prepare($SQL);
            $stmt->execute();
            $Result2 = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $SQL = "SELECT * FROM NOTAS WHERE ID='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 50;";
            $stmt = $_DB_CONEXION->prepare($SQL);
            $stmt->execute();
            $Result3 = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $SQL = "SELECT * FROM CARTAS WHERE ID='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 50;";
            $stmt = $_DB_CONEXION->prepare($SQL);
            $stmt->execute();
            $Result4 = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $SQL = "SELECT * FROM CARTAS WHERE ID='DEF' ORDER BY 'NOMBRE' DESC LIMIT 50;";
            $stmt = $_DB_CONEXION->prepare($SQL);
            $stmt->execute();
            $Result5 = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode(array("RESULT" => "SUCCESS", $Result[0], $Result2, $Result3, $Result4, $Result5));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "ERROR", "", ""));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Actualizar Paciente
function UPDATE_PACIENT($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "UPDATE " . $DB_DATA["DB_TABLE"] . " SET " . $DB_DATA["SET"] . " WHERE " . $DB_DATA['WHERE_KEY'] . "='" . $DB_DATA['WHERE_VALUE'] . "';";
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Agregar Notas
function LOAD_PACIENT_LIST($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA["WHERE"] .  " ORDER BY 'FECHA' DESC";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            echo json_encode(array("RESULT" => "SUCCESS", $Result));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "ERROR", "", $DB_DATA));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Agregar Notas
function ADD_NOTE($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      if ($DB_DATA["WHERE"] != "") {
         $SQL = "UPDATE {$DB_DATA["DB_TABLE"]} SET {$DB_DATA["SET"]} WHERE {$DB_DATA["WHERE"]}";
      } else {
         $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . "(" . $DB_DATA["TABLE_KEYS"] . ") VALUES (" . $DB_DATA["VALUES"] . ");";
      }
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Obtener Notas
function LOAD_NOTES($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      try {
         $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE1"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 75";
         $stmt = $_DB_CONEXION->prepare($SQL);
         $stmt->execute();
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);

         $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE2"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 75";
         $stmt = $_DB_CONEXION->prepare($SQL);
         $stmt->execute();
         $Result2 = $stmt->fetchAll(PDO::FETCH_ASSOC);

         $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE3"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' AND TIPO != 'PLANTILLA' ORDER BY 'FECHA' DESC LIMIT 75";
         $stmt = $_DB_CONEXION->prepare($SQL);
         $stmt->execute();
         $Result3 = $stmt->fetchAll(PDO::FETCH_ASSOC);

         $SQL = "SELECT ID,FECHA,HORA,NOMBRE,ARCHIVO,type_BLOB FROM " . $DB_DATA["DB_TABLE4"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 75";
         $stmt = $_DB_CONEXION->prepare($SQL);
         $stmt->execute();
         $Result4 = $stmt->fetchAll(PDO::FETCH_ASSOC);

         if (count($Result) < 1) {
            $Result = "";
         }
         if (count($Result2) < 1) {
            $Result2 = "";
         }
         if (count($Result3) < 1) {
            $Result3 = "";
         }
         if (count($Result4) < 1) {
            $Result4 = "";
         }

         echo json_encode(array("RESULT" => "SUCCESS", "0" => $Result, "1" => $Result2, "2" => $Result3, "3" => $Result4));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Agregar Documentos
function ADD_DOC($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      if ($DB_DATA["WHERE"] != "") {
         $SQL = "UPDATE {$DB_DATA["DB_TABLE"]} SET {$DB_DATA["SET"]} WHERE {$DB_DATA["WHERE"]}";
      } else {
         $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . "(" . $DB_DATA["TABLE_KEYS"] . ") VALUES (" . $DB_DATA["VALUES"] . ");";
      }
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Obtener Documentos
function LOAD_DOCS($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "=" . $DB_DATA["WHERE_VALUE"]  . "ORDER BY 'FECHA' DESC LIMIT 50";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            echo json_encode(array("RESULT" => "SUCCESS", $Result[0]));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "ERROR", "", $DB_DATA));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Agregar Cita
function ADD_DATE($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      if ($DB_DATA['WHERE'] == "") {
         $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . "(" . $DB_DATA["TABLE_KEYS"] . ") VALUES (" . $DB_DATA["VALUES"] . ");";
      } else {
         $SQL = "UPDATE " . $DB_DATA["DB_TABLE"] . " SET " . $DB_DATA["SET"] . " WHERE " . $DB_DATA['WHERE'] . ";";
      }
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Obtener Citas
function LOAD_DATES($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA["WHERE_KEY"] . "='" . $DB_DATA["WHERE_VALUE"]  . "' ORDER BY 'FECHA' DESC LIMIT 125";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            echo json_encode(array("RESULT" => "SUCCESS", $Result));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "ERROR", ""));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Enviar Reporte
function SEND_REPORT($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . $DB_DATA["TABLE_KEYS"] . " VALUES " . $DB_DATA["VALUES"] . ";";
      try {
         $_DB_CONEXION->exec($SQL);
         echo json_encode(array("RESULT" => "SUCCESS"));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Actualizar Historial Clinico
// >>> Obtener Plantillas
function LOAD_TEMPLATES($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA['WHERE_1'] . ";";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);

         $SQL = "SELECT * FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA['WHERE_2'] . ";";
         $stmt = $_DB_CONEXION->prepare($SQL);
         $stmt->execute();

         $Result2 = $stmt->fetchAll(PDO::FETCH_ASSOC);

         if (count($Result) < 1) {
            $Result = [""];
         }
         if (count($Result2) < 1) {
            $Result2 = [""];
         }

         echo json_encode(array("RESULT" => "SUCCESS", $Result, $Result2));
         return "SUCCESS";
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}
// >>> Buscar
function SEARCH($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT " . $DB_DATA["KEYS"] . " FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA["WHERE_KEY"] . " LIKE '%" . $DB_DATA["WHERE_VALUE"]  . "%' ORDER BY 'FECHA' DESC LIMIT 50";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            if (array_key_exists('SET', $DB_DATA)) {
               $SQL = "UPDATE USER_DATA SET PACIENTES= concat(" . $DB_DATA["SET"] . ") WHERE ID='" . $DB_DATA["USER"] . "'";
               $_DB_CONEXION->exec($SQL);
            }
            echo json_encode(array("RESULT" => "SUCCESS", $Result));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "ERROR", ['undefined'], $DB_DATA));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}

function SEND_FILE($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      if (isset($_FILES['xfile'])) {
         $XBLOB = addslashes(file_get_contents($_FILES['xfile']['tmp_name']));
         $Type = $_FILES['xfile']['type'];

         $SQL = "INSERT INTO " . $DB_DATA["DB_TABLE"] . "(" . $DB_DATA["TABLE_KEYS"] . ") VALUES ('" . $DB_DATA['ID'] . "','" . $DB_DATA['FECHA'] . "','" . $DB_DATA['HORA'] . "','" . $DB_DATA['NOMBRE'] . "','" . $DB_DATA['ARCHIVO'] . "','{$XBLOB}','{$Type}');";
         try {
            $_DB_CONEXION->exec($SQL);
            echo json_encode(array("RESULT" => "SUCCESS"));
            return "SUCCESS";
         } catch (PDOException $e) {
            echo json_encode(array("RESULT" => "ERROR", $e));
            return "ERROR";
         }
      }
   }
}

function DOWNLOAD_FILE($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT DATA_BLOB,type_BLOB FROM " . $DB_DATA['DB_TABLE'] . " WHERE ID='" . $DB_DATA['ID'] . "' AND ARCHIVO='" . $DB_DATA['ARCHIVO'] . "'";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
      try {
         if (count($Result) > 0) {
            $Type = $Result[0]['type_BLOB'];
            header('Content-type: ' . $Type);
            echo $Result[0]['DATA_BLOB'];

            return "SUCCESS";
         } else {
            echo null;
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}

function DELETE_FILE($DB_DATA, $_DB_CONEXION)
{
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "";
      if ($DB_DATA['TYPE'] == "FILE") {
         $SQL = "DELETE FROM {$DB_DATA['DB_TABLE']} WHERE ID='{$DB_DATA["ID"]}' AND ARCHIVO='{$DB_DATA["ARCHIVO"]}'";
      }
      if ($DB_DATA['TYPE'] == "CARTA") {
         $SQL = "DELETE FROM {$DB_DATA['DB_TABLE']} WHERE ID='{$DB_DATA["ID"]}' AND NOMBRE='{$DB_DATA["ARCHIVO"]}' AND FECHA='{$DB_DATA["FECHA"]}' AND HORA='{$DB_DATA["HORA"]}'";
      }
      if ($DB_DATA['TYPE'] == "DATE") {
         $SQL = "DELETE FROM {$DB_DATA['DB_TABLE']} WHERE ID='{$DB_DATA["ID"]}' AND MOTIVO='{$DB_DATA["ARCHIVO"]}' AND FECHA='{$DB_DATA["FECHA"]}' AND HORA='{$DB_DATA["HORA"]}'";
      }
      if ($DB_DATA['TYPE'] == "NOTE") {
         $SQL = "DELETE FROM {$DB_DATA['DB_TABLE']} WHERE ID='{$DB_DATA["ID"]}' AND MOTIVO='{$DB_DATA["ARCHIVO"]}' AND FECHA='{$DB_DATA["FECHA"]}' AND HORA='{$DB_DATA["HORA"]}'";
      }

      if ($SQL != "") {
         try {
            $stmt = $_DB_CONEXION->prepare($SQL);
            $stmt->execute();

            echo json_encode(array("RESULT" => "SUCCESS", ""));
         } catch (PDOException $e) {
            echo json_encode(array("RESULT" => "ERROR", $e));
            return "ERROR";
         }
      } else {
         echo json_encode(array("RESULT" => "ERROR", "NONE"));
      }
   }
}

function DOCTOR_LIST($DB_DATA, $_DB_CONEXION){
   if ($DB_DATA == "ERROR") {
      echo json_encode(array("RESULT" => "ERROR"));
      return "ERROR";
   } else {
      $SQL = "SELECT " . $DB_DATA["KEYS"] . " FROM " . $DB_DATA["DB_TABLE"] . " WHERE " . $DB_DATA['WHERE'] .  " ORDER BY 'ID' ASC";
      $stmt = $_DB_CONEXION->prepare($SQL);
      $stmt->execute();
      try {
         $Result = $stmt->fetchAll(PDO::FETCH_ASSOC);
         if (count($Result) > 0) {
            echo json_encode(array("RESULT" => "SUCCESS", $Result));
            return "SUCCESS";
         } else {
            echo json_encode(array("RESULT" => "NO RESULT", ""));
            return "SUCCESS";
         }
      } catch (PDOException $e) {
         echo json_encode(array("RESULT" => "ERROR", $e));
         return "ERROR";
      }
   }
}