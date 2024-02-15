// >>> [ Variables Generales ] >>>
var _Data_EMPY = {
  CONSULTORIO: {},
  USUARIO: {
    ID: "",
    PREFIJO: "",
    NOMBRE: "",
    APELLIDO_1: "",
    APELLIDO_2: "",
    CURP: "",
    GENERO: "",
    FECHA: "",
    SSA: "",
    ESPECIALIDAD: "",
    CEDULA: "",
    TELEFONO_1: "",
    CORREO: "",
    CONSULTORIO_ID: "",
    HORARIO: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
  },
  PACIENTES: {
    SELECTED: {
      ID: "",
      NOMBRE: "",
      APELLIDO_1: "",
      APELLIDO_2: "",
      CURP: "",
      FECHA: "",
      EDAD: "",
      GENERO: "",
      RH: "",
      OCUPACION: "",
      CORREO: "",
      TELEFONO_1: "",
      TELEFONO_2: "",
      DIRECCION: "",
      CIUDAD: "",
      ENTIDAD: "",
      RELIGION: "",
      DETALLES: "",
      PESO: "",
      ALTURA: "",
      RESPONSABLE: { NOMBRE: "", TELEFONO_1: "", TELEFONO_2: "", CORREO: "" },
      HISTORIAL_1: "",
      HISTORIAL_2: "",
      HISTORIAL_3: "",
      HISTORIAL_4: "",
      HISTORIAL_5: "",
      NOTAS: [],
      CITAS: [],
      ESTUDIOS: [],
      DOCUMENTOS: [],
      EDIT: "false",
      EDIT_INDEX: undefined,
    }
  },
  NOTAS: {
    TEMP: {},
  },
  DOCUMENTOS: {
    TEMP: {
      ARCHIVOS: {},
      CARTAS: {},
    },
  },
  HISTORIAL: {  },
  CITAS: {  },
  PLANTILLAS: {
    LINEA: {},
    LOCAL: {},
  },
  CALENDAR: {},
};
var _Data = { ..._Data_EMPY };
var _Config = {
  DATABASE: {
    USER: "",
    PASSWORD: "",
    HOST: "",
    NOMBRE: "",
    TABLA: {
      USER_DATA: "USER_DATA",
      CITAS: "CITAS",
      PACIENTES: "PACIENTES",
      NOTAS: "NOTAS",
      CARTAS: "CARTAS",
      ARCHIVOS: "ARCHIVOS",
      REPORT: "REPORTES",
    },
  },
  CONEXION: {
    METHOD: "SERVER",
    MODE: null,
    SEGURITY: null,
  },
  NOTIFICACIONES: { ACTIVE: "", EMAIL: "", SMS: "" },
  DATES: { LAST_LOAD: "", LAST_SAVE: "" },
};
var WEB_DATA = {
  DATE: {
    FULL: "",
    YY: 0,
    MM: [0,""],
    DD: [0,""],
    F_DD: 0
  },
  TIME: {
    FULL:"",
    HH:"",
    MM:"",
    SS:""
  },
  ALERTS: {},
  WEB_PRINT: {
    HEADER: "",
    STYLE_FONT: "",
    STYLE_FILE: "",
    TEMPLATES: {
      NOTE: {
        SIMPLE: "",
        EVOLUTION: "",
        COMPLETE: "",
        EGRESO: "",
        REFERENCE:""
      },
      CART: {
        DEF: ""
      },
      DATE: {
        SIMPLE: ""
      },
      PERFIL: {
        DOCTOR: "",
        PACIENT: "",
      },
    },
    SIZE: ""
  }
}


//! ===== >>> [ FUNCIONES -> CONTROL]
// >>> Cambiar de Pagina
function GOTO_MENU(Menu, Sub = 0) {
  let BLACKLIST = ["LOGIN","LOADING","RECUPERAR"];
  Menu = String(Menu).toUpperCase()
  Menu = (String(_Data["USUARIO"]?.["ID"]).length > 3 && !BLACKLIST.includes(Menu)) ? "LOGIN":Menu;
  if(Sub == 0){
    let DOMS = document.querySelectorAll('body > *');
    DOMS.forEach((Xtem) => {
      Xtem.classList.add('Hiden');
    })
  }

  let KEY = "";
  let DLIST = [];
  let EDOM = document.querySelector(`*[id="${Menu}"]`);
  do {
    try {
      KEY = String(EDOM.nodeName).toUpperCase()
      DLIST.push(EDOM);
      EDOM = EDOM.parentElement;
    } catch {
      break;
    }
  } while (KEY != "HTML" && KEY != "BODY");
  DLIST.reverse()

  if(Sub == 3){
    let PREDOM = document.querySelector(`*[id="${Menu}"]`).parentElement.querySelectorAll("*[id]")
    PREDOM.forEach((X)=>{
      X.classList.add("Hiden")
    })
  }

  DLIST.forEach((Xtem) => {
    let ToHide = Xtem.querySelectorAll("& > *[id]")
    ToHide.forEach((Ytem) => { if(Sub == 0) Ytem.classList.add("Hiden") })
    Xtem.classList.remove("Hiden");
  })

  if(!BLACKLIST.includes(Menu)) if(Menu != "ALERT") document.querySelector('#TOOLBAR').classList.remove('Hiden');
  else document.querySelector('#TOOLBAR').classList.add('Hiden');
  
  // ** // ######################################
  document.getElementById("TBar_Date").innerHTML = WEB_DATA['DATE']['FULL'][1];
  _Data["SEARCH"] = {};
  if (Menu == "Dates") {;
    Calendar_Update();
  } else if (Menu == "Camara") {
    CAMARA();
  }
  if (window.innerWidth < 860) {
    if (document.querySelector("html").getAttribute("style") == "--Toolbar_width: 200px;") {
      document.querySelector("#TOOLBAR > div.Cn_Toolbar > div.Toolbar_Buttons > div:nth-child(3) > button:nth-child(1)").click();
    }
  }
  // ** // ######################################
}

//! ===== >>> [ FUNCIONES -> DEV]
// OBTENER - FECHA Y HORA
function GET_TIME() {
  let DATE = new Date();
  let TEMP = String(DATE.toDateString().toUpperCase()).split(" ")
  
  WEB_DATA['DATE']['YY'] = TEMP[3];
  WEB_DATA['DATE']['MM'] = [DATE.getMonth() + 1, TEMP[1]];
  WEB_DATA['DATE']["DD"] = [TEMP[2],TEMP[0]];

  WEB_DATA['TIME']['HH'] = DATE.getHours();
  WEB_DATA['TIME']['MM'] = DATE.getMinutes();
  WEB_DATA['TIME']['SS'] = DATE.getSeconds();

  let DATE_START = new Date(TEMP[3], WEB_DATA['DATE']['MM'][0] - 1, 1);
  WEB_DATA["DATE"]['F_DD'] = DATE_START.getDay();
  WEB_DATA['DATE']['MM'][0] = (WEB_DATA['DATE']['MM'][0] < 10) ? `0${WEB_DATA['DATE']['MM'][0]}`:WEB_DATA['DATE']['MM'][0]; 
  
  if(WEB_DATA["DATE"]['FULL'] == []){
    WEB_DATA["DATE"]['FULL'] = [`${TEMP[3]}/${WEB_DATA['DATE']['MM'][0]}/${TEMP[2]}`,`${TEMP[2]}/${WEB_DATA['DATE']['MM'][0]}/${TEMP[3]}`];

    var DOM_TIME = setInterval(() => {
      WEB_DATA['TIME']['SS'] = Number(WEB_DATA['TIME']['SS']) + 1;
      WEB_DATA['TIME']['MM'] = Number(WEB_DATA['TIME']['MM']);

      if(WEB_DATA['TIME']['SS'] >= 60){
        WEB_DATA['TIME']['SS'] = WEB_DATA['TIME']['SS'] - 60;
        WEB_DATA['TIME']['MM'] = WEB_DATA['TIME']['MM'] + 1;
      }
      if(WEB_DATA['TIME']['MM'] >= 60){
        WEB_DATA['TIME']['MM'] = WEB_DATA['TIME']['MM'] - 60;
        WEB_DATA['TIME']['HH'] = Number(WEB_DATA['TIME']['HH']) + 1;
      }
      if(WEB_DATA['TIME']['HH'] >= 24){
        WEB_DATA['TIME']['HH'] = WEB_DATA['TIME']['HH'] - 24;
        clearInterval(DOM_TIME);
        setTimeout(() => {
          WEB_DATA["DATE"]['FULL'] == []
          GET_TIME()
        }, 50)
      }
      WEB_DATA['TIME']['SS'] = (WEB_DATA['TIME']['SS'] < 10) ? `0${WEB_DATA['TIME']['SS']}`:WEB_DATA['TIME']['SS'];
      WEB_DATA['TIME']['MM'] = (WEB_DATA['TIME']['MM'] < 10) ? `0${WEB_DATA['TIME']['MM']}`:WEB_DATA['TIME']['MM'];
      WEB_DATA['TIME']['FULL'] = `${WEB_DATA['TIME']['HH']}:${WEB_DATA['TIME']['MM']}:${WEB_DATA['TIME']['SS']}`
      document.getElementById("TBar_Hour").innerHTML = WEB_DATA['TIME']['FULL'];
    }, 1000)
  }
}

//! ===== >>> [ FUNCIONES -> CONFIGURACION]
//! ===== >>> [ FUNCIONES -> ALMACENAMIENTO -> CACHE]

//! ===== >>> [ FUNCIONES -> ALMACENAMIENTO -> BASE DE DATOS]
// >>> Enviar Comando a PHP
function SEND_TO_PHP(Funcion, Data, File = "") {
  Data = {
    ...Data, 
    DB_HOST: _Config["DATABASE"]["HOST"] ?? "",
    DB_USER: _Config["DATABASE"]["USER"] ?? "",
    DB_PASSWORD: _Config["DATABASE"]["PASSWORD"] ?? "",
    DB_NAME: _Config["DATABASE"]["NOMBRE"] ?? ""
  }
  let Send = { EXECUTE: Funcion, JSON: JSON.stringify(Data) };
  let Xheaders = "";
  let XBody = null;
  let CONFIG = {
    method: "POST",
  };

  if (Funcion == "SEND_FILE") {
    XBody = new FormData();
    XBody.append("JSON", JSON.stringify(Send));
    XBody.append("xfile", File);
  } else {
    XBody = JSON.stringify(Send);
    Xheaders = "application/json";
    CONFIG["headers"] = { "Content-Type": Xheaders };
  }
  CONFIG["body"] = XBody;

  if (Funcion != "DOWNLOAD_FILE") {
    fetch("./conexion.php", CONFIG)
      .then((Res) => {
        return Res.text();
      })
      .then((XRes) => {
        return JSON.parse(XRes);
      })
      .then((JRes) => {
        if (Funcion == "LOGIN") {
          _Data["USUARIO"] = JRes[0][0];
        } else if (Funcion == "IMPORT_PACIENT") {
          let KEYS = Object.keys(JRes[0]);
          KEYS.forEach((X)=>{
            _Data["PACIENTES"][JRes[0][X]['ID']] = JRes[0][X];
          })
        } else if (Funcion == "LOAD_PACIENT") {
          _Data["PACIENTES"]["SELECTED"] = JRes[0];
          _Data["CITAS"][JRes[0]["ID"]] = JRes[1];
          _Data["NOTAS"][JRes[0]["ID"]] = JRes[2];
          _Data["DOCUMENTOS"][JRes[0]["ID"]] = JRes[3];
        } else if (Funcion == "LOAD_PACIENT_LIST") {
          if (JRes[0] != "") _Data["PACIENTES"] = JRes[0];
        } else if (Funcion == "LOAD_DATES") {
          if (JRes[0] != "") _Data["CITAS"] = JRes[0];
        } else if (Funcion == "LOAD_TEMPLATES") {
          if (JRes[0] != "") _Data["PLANTILLAS"]["LINEA"] = JRes[0];
          if (JRes[1] != "") _Data["PLANTILLAS"]["LOCAL"] = JRes[1];
        } else if (Funcion == "SEARCH") {
          if (JRes[0] != "undefined") _Data["SEARCH"] = JRes[0];
          else _Data["SEARCH"] = undefined;
        } else if (Funcion == "LOAD_NOTES") {
          if (JRes[0] != "") {
            if (_Data["NOTAS"]?.["TEMP"] == undefined) _Data["NOTAS"]["TEMP"] = {};
            _Data["NOTAS"]["TEMP"] = JRes[0];
          } else _Data["NOTAS"]["TEMP"] = {};
          if (JRes[1] != "") {
            if (_Data["CITAS"]?.["TEMP"] == undefined) _Data["CITAS"]["TEMP"] = {};
            _Data["CITAS"]["TEMP"] = JRes[1];
          } else _Data["CITAS"]["TEMP"] = {};
          if (JRes[2] != "") {
            if (_Data["DOCUMENTOS"]?.["TEMP"] == undefined) _Data["DOCUMENTOS"]["TEMP"] = {};
            _Data["DOCUMENTOS"]["TEMP"]["CARTAS"] = JRes[2];
          } else _Data["DOCUMENTOS"]["TEMP"]["CARTAS"] = {};
          if (JRes[3] != "") {
            if (_Data["DOCUMENTOS"]?.["TEMP"] == undefined) _Data["DOCUMENTOS"]["TEMP"] = {};
            _Data["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = JRes[3];
          } else _Data["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = {};
        } else if (Funcion == "DOCTOR_LIST"){
          if(_Data?.['LIST'] == undefined) _Data['LIST'] = {};
          _Data['LIST']['DOCTORS'] = JRes[0];
        } else if (Funcion == "LOAD_CONSULTORIO"){
          _Data['CONSULTORIO'] = JRes[0][0];
        }
      })
      .catch((Err) => {
        console.error(Err);
        return "ERROR";
      });
  } else {
    fetch("conexion.php", CONFIG)
      .then((Res) => {
        return Res.blob();
      })
      .then((XRes) => {
        _Data["DOWNLOAD"] = XRes;
      })
      .catch((Err) => {
        console.error(Err);
        return "ERROR";
      });
  }
}

async function LOAD_JSON(Rute,Name){
  Rute = String(Rute).toUpperCase();
  Name = String(Name).toUpperCase() + ".json";

  let RESULT = undefined;
  await fetch(`${Rute}/${Name}`)
  .then((RES) => RES.json())
  .then((RESS) => {RESULT = RESS;})
  .catch((ERR) => {RESULT = {}; console.error(ERR);})

  return RESULT;
}

//! ===== >>> [ FUNCIONES -> ESPECIFICAS]
// >>> Mostrar Alerta
function APP_ALERT(Menu, N_Alet) {
  let APP_ALERT = document.querySelector("#ALERT");
  Menu = String(Menu).toUpperCase();
  if (Menu == 0) {
    APP_ALERT.classList.add("Hiden");
    return null;
  } else APP_ALERT.classList.remove("Hiden");  
  APP_ALERT.querySelector("img").src = WEB_DATA['ALERTS']?.['ICONS']?.[Menu] ?? WEB_DATA['ALERTS']['ICONS']['ERROR'];

  let Alert_Title = APP_ALERT.querySelector("#Alert_Title");
  Alert_Title.innerHTML = WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.["Title"] ?? "";

  let Alert_Text = APP_ALERT.querySelector("#Alert_Text");
  Alert_Text.innerHTML = WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.['Text'] ?? `#ERROR - Mensaje no encontrado [ ${Menu} => ${N_Alet} ]`;

  let Alert_Buttons = APP_ALERT.querySelectorAll("button");
  for (let x in Alert_Buttons) {
    if(WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.['Buttons']?.["Text"]?.[x] != undefined){
      Alert_Buttons[x].setAttribute('class',"");
      Alert_Buttons[x].innerText = WEB_DATA['ALERTS']['MESSAGE'][Menu][N_Alet]['Buttons']["Text"][x];
      if(WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.['Buttons']?.["Style"]?.[x] != undefined) Alert_Buttons[x].classList.add(`Btn_Stl_${WEB_DATA['ALERTS']['MESSAGE'][Menu][N_Alet]['Buttons']["Style"][x]}`);
      if(WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.['Buttons']?.["Function"]?.[x] != undefined) Alert_Buttons[x].setAttribute("onclick",`${WEB_DATA['ALERTS']['MESSAGE'][Menu][N_Alet]['Buttons']["Function"][x]}`);
      if(WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.['Buttons']?.["Icon"] != "") APP_ALERT.querySelector("img").src = WEB_DATA['ALERTS']?.['ICONS']?.[WEB_DATA['ALERTS']?.['MESSAGE']?.[Menu]?.[N_Alet]?.["Icon"]]  ?? WEB_DATA['ALERTS']['ICONS']['ERROR'];
      
    } else {
      if(x < 5) Alert_Buttons[x].setAttribute('class',"Hiden");
    }
  }
}

// >>> Iniciar Sesion (User)
function User_Login() {
  let DOMS = document.querySelectorAll('#LOGIN input[ITEM]');
  let DOM = {}
  let TEMP = {}
  DOMS.forEach((X) => {
    DOM[String(X.getAttribute('ITEM')).toUpperCase()] = X;
    TEMP[String(X.getAttribute('ITEM')).toUpperCase()] = (X.getAttribute('type') != 'checkbox') ? X.value:X.checked;
  })
  if (String(TEMP['USER']).length > 1 && String(TEMP['PASSWORD']).length > 1){
    GET_TIME()
    let ALERT = document.querySelector("#ALERT");
    ALERT.classList.add('Hiden');
    GOTO_MENU("Loading");

    let SEND = {
      WHERE: `ID='${TEMP['USER']}' AND USER_PASSWORD='${TEMP['PASSWORD']}'`,
      WHERE_2: `ID='${TEMP['USER']}'`,
    };
    SEND_TO_PHP("LOGIN", SEND);

    let DELAY = 200;
    let COUNT = 5 * (1000 / DELAY);
    let INTERVAL1 = setInterval(() => {
      if(_Data["USUARIO"] == null) COUNT = 0;
      if (_Data["USUARIO"]?.["ID"].length > 1 ) {
        clearInterval(INTERVAL1);
        if(_Data["USUARIO"]?.["ID"] == TEMP['USER']){
          if(TEMP['REMEMBER'] == true) localStorage.setItem('UDG_S_LOGIN',JSON.stringify(TEMP));
          DOM['USER'].classList.remove('ERROR');
          DOM['PASSWORD'].classList.remove('ERROR');
          Load_User_Data();
          let TB1 = document.querySelectorAll("#TABLE_Historial_1 tr");
          if (TB1.length < 2) Pacient_List_History();
          Load_Plantillas_List();
          Load_Calendar();
          setTimeout(() => { GOTO_MENU("Main") }, 1750)
        } else {
          DOM['USER'].classList.add('ERROR');
          DOM['PASSWORD'].classList.add('ERROR');
          GOTO_MENU("Login");
          APP_ALERT("LOGIN", 1);
        }
      } else {
        COUNT -= 1;
        if (COUNT < 0) {
          clearInterval(INTERVAL1);
          DOM['USER'].classList.add('ERROR');
          DOM['PASSWORD'].classList.add('ERROR');
          GOTO_MENU("Login");
          APP_ALERT("LOGIN", 1);
          _Data['USUARIO'] = _Data_EMPY['USUARIO'];
        }
      }
    }, DELAY)
  }
}

function End_Sesion() {
  let XPACIENTES = Object.keys(_Data['PACIENTES']);
  let XPACIENTES2 = "";

  XPACIENTES = new Set(XPACIENTES);
  XPACIENTES.forEach((Xtem) => {
    if (Xtem.length > 2) {
      if(Xtem != "SELECTED") XPACIENTES2 += (XPACIENTES2.length > 2)?  `,${Xtem}`:`${Xtem}`;
    }
  });

  let XSET = `PACIENTES='${XPACIENTES2}'`;
  let SEND = {
    DB_TABLE: _Config['DATABASE']['TABLA']['USER_DATA'],
    WHERE_KEY: "ID",
    WHERE_VALUE: `${_Data["USUARIO"]["ID"]}`,
    SET: XSET,
  };
  localStorage.removeItem('UDG_S_LOGIN');
  document.querySelector("#TOOLBAR").classList.add("Hiden");
  SEND_TO_PHP("END_SESION", SEND);
  GOTO_MENU("Login", 0);
  _Data = {..._Data_EMPY};
}

// >>> [ Funciones del Toolbar ] >>>
function TOOLBAR_ALT_SIZE() {
  let Root = document.querySelector(":root");
  let DOM = document.querySelector("#TOOLBAR");
  let Items = DOM.querySelectorAll("button");
  Items.forEach((Xtem) => {
    if (Xtem.style.fontSize != "0px") {
      Xtem.style.fontSize = "0px";
    } else {
      Xtem.style.fontSize = "1rem";
    }
  });
  if (Items[0].style.fontSize == "0px") {
    Root.style.setProperty("--Toolbar_width", "50px");
    DOM.style.fontSize = "12px";
    document.querySelector('.USER_DB_NAME').classList.add('Hiden');
  } else {
    Root.style.setProperty("--Toolbar_width", "200px");
    DOM.style.fontSize = "1rem";
    document.querySelector('.USER_DB_NAME').classList.remove('Hiden');
  }
}

function Load_Calendar() {
  let Mes = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  try {
    document.querySelector("#MM_Name").innerHTML = `${Mes[Number(WEB_DATA['DATE']['MM'][0])]} - ${WEB_DATA['DATE']['YY']}`;
    document.querySelector(`#DD_S_${Number(WEB_DATA['DATE']['DD'][0])}`).classList.add("DD_Actual");
    document.querySelector("#DD_S_1").style.gridColumnStart = WEB_DATA['DATE']['F_DD'];
  } catch { return false;}

  if (_Data["USUARIO"]["ID"] != "") {
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["CITAS"],
      WHERE: `DOCTOR_1='${_Data["USUARIO"]["ID"]}' OR DOCTOR_2='${_Data["USUARIO"]["ID"]}'`,
    };
    SEND_TO_PHP("LOAD_DATES", SEND);
  }

  setTimeout(() => {
    let Temp_C = { ..._Data["CITAS"] };
    let KEYS = Object.keys(_Data["CITAS"]);
    if (KEYS.includes("0")) {
      _Data["CITAS"] = {};
      KEYS.forEach((X) => {
        let ID = Temp_C[X]["ID"];
        if (_Data["CITAS"]?.[ID] == undefined) _Data["CITAS"][ID] = {};
        _Data["CITAS"][ID][Object.keys(_Data["CITAS"][ID]).length] = Temp_C[X];
      });
    }

    _Data["CALENDAR"] = {};
    let IDS = Object.keys(_Data["CITAS"]);

    let Today = Date.parse(WEB_DATA['DATE']['FULL'][0]);
    IDS.forEach((ID) => {
      let LAST = Object.keys(_Data["CITAS"][ID]);
      LAST.forEach((x)=> {
        let XDate = _Data["CITAS"][ID][x]["FECHA"]; 
        if(Date.parse(XDate) >= Today) {
          if (_Data["CALENDAR"]?.[XDate] == undefined) _Data["CALENDAR"][XDate] = {};
          _Data["CALENDAR"][XDate][Object.keys(_Data["CALENDAR"][XDate]).length] = _Data["CITAS"][ID][x];
        }
      })
    });

    IDS = Object.keys(_Data["CALENDAR"]);
    IDS = IDS.sort();

    let DOM2 = document.querySelector("#DATES .Dates_List ul");
    DOM2.innerHTML = "";
    let ACTDATE = "";
    let ACTDATE2 = [];
    IDS.forEach((XDate) => {
      let SubIDS = Object.keys(_Data["CALENDAR"][XDate]);
      let XTIME = String(XDate).split("-");
      let NTEM = ``;
      if(ACTDATE != XDate) {
        ACTDATE = XDate;
        ACTDATE2 = [];
      }

      SubIDS.forEach((Xtem) => {
        DOM2 = document.querySelector("#DATES .Dates_List ul");

        if (document.querySelector(`#DATES .Dates_List ul li details[date="${XDate}"]`) != null) {
          DOM2 = document.querySelector(`#DATES .Dates_List ul details[date="${XDate}"] ul`);
          NTEM = `<li><a href="#" onclick="load_date(this)">
          <p class="Hiden">${JSON.stringify(_Data["CALENDAR"][XDate][Xtem])}</p>
          <h4>${_Data["CALENDAR"][XDate][Xtem]["HORA"]}</h4>
          <div><p>#${_Data["CALENDAR"][XDate][Xtem]["ID"]}</p>
          <p>${String(_Data["CALENDAR"][XDate][Xtem]["MOTIVO"]).substring(0,15)}</p>
          </div></a></li>`;
          ACTDATE2.push(_Data["CALENDAR"][XDate][Xtem]["HORA"]);
        } else {
          NTEM = `<details date="${_Data["CALENDAR"][XDate][Xtem]["FECHA"]}">
          <summary>${XTIME[2]} de ${Mes[Number(XTIME[1])]} ${XTIME[0]}</summary>
          <ul><li><a href="#" onclick="load_date(this)">
          <p class="Hiden">${JSON.stringify( _Data["CALENDAR"][XDate][Xtem])}</p><h4>${_Data["CALENDAR"][XDate][Xtem]["HORA"]}</h4>
          <div><p>#${_Data["CALENDAR"][XDate][Xtem]["ID"]}</p><p>${String(_Data["CALENDAR"][XDate][Xtem]["MOTIVO"]).substring(0, 15)}</p>
          </div></a></li></ul></details>`;
        }

        let CITEM = document.createElement("li");
        CITEM.innerHTML = NTEM;
        DOM2.appendChild(CITEM);
      });
    });
  }, 3000);

  Calendar_Update()
  return true;
}

function Load_User_Data() {
  let ELEMENTS = document.querySelectorAll('#MAIN .User_Info *[ITEM]')
  let CON_KEYS = ["CON_NOMBRE", "CON_DIRECCION"];
  ELEMENTS.forEach((X)=>{
    try {
      let KEY = X.getAttribute('ITEM');
      let LANG = X.getAttribute('LG');
      LANG = (LANG == null) ? 0:LANG.length;
      if(!CON_KEYS.includes(KEY) && LANG == 0) X.innerHTML = _Data['USUARIO']?.[KEY];
    } catch (ERR) {
      console.error(ERR)
    }
  })

  let TOOLBAR = document.querySelectorAll('#TOOLBAR *[ITEM]');
  TOOLBAR.forEach((X)=>{
    if(X.getAttribute('ITEM') != "IMG"){
      X.innerHTML = _Data['USUARIO'][X.getAttribute('ITEM')];
    } else {
      if(_Data["USUARIO"]?.["IMG"] != undefined) {
        X.src = (_Data["USUARIO"]["IMG"].length > 128) ? _Data["USUARIO"]["IMG"]:"IMG/User_Img.jpg";
        document.querySelector('#MAIN .User_Info img').scr = X.src;
      }
    }
  })
  document.querySelector('#DATES_NEW input[ITEM="DOCTOR_1"]').value =_Data["USUARIO"]["ID"];
  document.querySelector("#Cn_Pacientes_List table").innerHTML = `<tr class="Table_Up"><td>ID</td><td>INFORMACION</td><td>ACCIONES</td></tr>`;
  document.getElementById("TABLE_PACIEENTS_COUNT_T").innerText = "0";
  document.getElementById("TABLE_PACIEENTS_COUNT_M").innerText = "0";
  document.getElementById("TABLE_PACIEENTS_COUNT_F").innerText = "0";

  ELEMENTS = document.querySelectorAll('#CONFIG #CONFIG_USER *[ITEM]')
  ELEMENTS.forEach((X)=> {
    let KEY = X.getAttribute('ITEM');
    if(_Data['USUARIO']?.[KEY] != undefined) X.value = _Data['USUARIO'][KEY];
  })

  ELEMENTS = document.querySelector('#CONFIG #CONFIG_TIME')
  let TEMP = (_Data['USUARIO']?.['HORARIO'] != undefined) ? String(_Data['USUARIO']['HORARIO']).replaceAll('\\','').replaceAll('\"','').split(','):[];
  TEMP.forEach((X)=>{
    X = X.replace(':',",");
    X = X.replaceAll(" ","").split(',');
    if(X[1].length > 2) ELEMENTS.querySelector(`*[ITEM="${X[0]}"]`).value = X[1] ?? "";
  })

  if(String(_Data['USUARIO']?.['DB']).length > 12){
    TEMP = "";
    ELEMENTS = document.querySelector('#CONFIG #CONFIG_DB')
    TEMP = String(_Data['USUARIO']['DB']).split(';')
    TEMP.forEach((X)=>{
      X = X.split(':');
      X[0] = String(X[0]).trim()
      X[1] = String(X[1]).trim()
      ELEMENTS.querySelector(`*[ITEM="${X[0]}"]`).value = X[1];
    })
    let TEMP_DB_SEL = String(document.querySelector('#CONFIG #CONFIG_DB *[ITEM="DB_SEL"]').value).toUpperCase()
    if(TEMP_DB_SEL == "MANUAL"){
      TEMP.forEach((X)=>{
        X = X.split(':');
        X[0] = String(X[0]).trim()
        X[1] = String(X[1]).trim()
        _Config['DATABASE'][X[0]] = X[1];
      })
    }
  }

  let XWHERE = ``;
  let SEND = {
    DB_TABLE: "CONSULTORIO",
    KEYS: `*`,
    WHERE: `ID='${_Data['USUARIO']['CONSULTORIO_ID']}'`
  }
  SEND_TO_PHP('LOAD_CONSULTORIO',SEND)
  
  XWHERE = ``;
  let LIST = String(_Data["USUARIO"]["PACIENTES"]).split(",");
  if (LIST.length > 0) {
    LIST.forEach((Xtem) => {
      Xtem = String(Xtem).trim();
      if(Xtem != "") XWHERE += (XWHERE.length > 2) ? ` OR ID='${Xtem}'`:`ID='${Xtem}'`;
    });
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
      WHERE: XWHERE,
    };
    SEND_TO_PHP("LOAD_PACIENT_LIST", SEND);
  }
  SEND = {
    DB_TABLE: "USER_DATA",
    KEYS: `ID,NOMBRE`,
    WHERE: `CONSULTORIO_ID='${_Data['USUARIO']['CONSULTORIO_ID']}'`
  }
  SEND_TO_PHP('DOCTOR_LIST', SEND);
  

  setTimeout(() => {
    if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
      let RAW_KEYS = Object.keys(_Data["PACIENTES"]);
      if (RAW_KEYS.includes("0")) {
        let Temp_P = { ..._Data["PACIENTES"] };
        _Data["PACIENTES"] = {};
        RAW_KEYS.forEach((X) => {
          let ID = Temp_P[X]["ID"];
          _Data["PACIENTES"][ID] = Temp_P[X];
        });
      }
    }
    let ID_KEYS = Object.keys(_Data["PACIENTES"])
    let TOTAL = ID_KEYS.length;
    if (TOTAL > 0) {
      let BLACKLIST = ["BLANK", "SELECTED"];
      let PREPARE = [];
      for (let x = 0; x < TOTAL; x++) {
        if (!BLACKLIST.includes(ID_KEYS[x])) PREPARE.push(String(ID_KEYS[x]).toUpperCase())
      }
      Import_Pacient(PREPARE);
    }
    if(_Data?.['LIST'] == undefined) _Data['LIST'] = {};
    _Data['LIST']['PACIENTES'] = ID_KEYS;

    setTimeout(() => {
      let ELEMENTS = document.querySelectorAll('#CONFIG #CONFIG_CONSULTORY *[ITEM]')
      ELEMENTS.forEach((X)=>{
        let KEY = X.getAttribute('ITEM');
        X.value = _Data['CONSULTORIO']?.[KEY] ?? "";
      })

      ELEMENTS = document.querySelectorAll('#MAIN .Consult_Info *[ITEM]')
      ELEMENTS.forEach((X)=>{
        try {
          let KEY = X.getAttribute('ITEM');
          let LANG = X.getAttribute('LG');
          LANG = (LANG == null) ? 0:LANG.length;
          if(!CON_KEYS.includes(KEY) && LANG == 0) X.innerHTML = _Data['CONSULTORIO']?.[KEY];
        } catch (ERR) {
          console.error(ERR)
        }
      })

      let TEMP = _Data['CONSULTORIO']?.['PLANTILLAS'] ?? "SIMPLE";

      ELEMENTS = document.querySelector('#CONFIG #CONFIG_GENERAL *[ITEM="PRINT_TEMPLATES"]')
      ELEMENTS.value = TEMP;

      LOAD_PRINT_TEMPLATES(TEMP)
    }, 500)
  }, 2550);
  return true;
}

function Load_Plantillas_List() {
  _Data["PLANTILLAS"]["LINEA"] = {};
  _Data["PLANTILLAS"]["LOCAL"] = {};

  let PREPARE1 = `DOCTOR = 'DEF' AND TIPO = 'PLANTILLA'`;
  let PREPARE2 = `DOCTOR = '${_Data["USUARIO"]["ID"]}' AND TIPO = 'PLANTILLA'`;
  let SEND = {
    DB_TABLE: _Config["DATABASE"]["TABLA"]["CARTAS"],
    WHERE_1: PREPARE1,
    WHERE_2: PREPARE2,
  };
  SEND_TO_PHP("LOAD_TEMPLATES", SEND);

  setTimeout(() => {
    PreLoad_Plantillas();
  }, 4500);
}

function Calendar_DD_Selected(DD = null) {
  let MES = (WEB_DATA['DATE']['MM'][0] < 10)? `0${WEB_DATA['DATE']['MM'][0]}`:WEB_DATA['DATE']['MM'][0];
  let IN_FECHA = document.querySelector("#DATES_NEW input[ITEM='FECHA']");
  let IN_ID = document.querySelector("#DATES_NEW input[ITEM='ID']");
  let IN_DOC = document.querySelector("#DATES_NEW input[ITEM='DOCTOR_1']");

  if (DD != null && DD != "NO") {
    IN_FECHA.value = `${WEB_DATA['DATE']['YY']}-${MES}-${DD}`;
  }
  if (_Data["PACIENTES"]["SELECTED"]?.["ID"]) {
    IN_ID.value = _Data["PACIENTES"]["SELECTED"]["ID"];
  }
  IN_DOC.value = _Data["USUARIO"]["ID"];
  if (DD == "NO") {
    document.querySelector("#DATES_NEW").classList.add("Hiden");
    IN_ID.value = "";
    IN_FECHA.value = "";
    document.querySelector("#DATES_NEW input[ITEM='MOTIVO']").value = "";

    if(_Data["PACIENTES"]?.["SELECTED"]){
      _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
      _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
    }
  } else {
    document.querySelector("#DATES_NEW").classList.remove("Hiden");
  }

  if (_Data["PACIENTES"]?.["SELECTED"]?.["ID"] && _Data["PACIENTES"]["SELECTED"]["EDIT"] == "false") _Data["PACIENTES"]["SELECTED"]["EDIT"] = "Add";
}

function Calendar_MM(Step = null) {
  if (Step == null) return false;
  if (Step == 1) {
    WEB_DATA['DATE']['MM'][0] = (Number(WEB_DATA['DATE']['MM'][0]) + 1 < 10) ? `0${Number(WEB_DATA['DATE']['MM'][0]) + 1}`:Number(WEB_DATA['DATE']['MM'][0]) + 1;
    if (Number(WEB_DATA['DATE']['MM'][0]) > 12) {
      WEB_DATA['DATE']['MM'][0] = '01';
      WEB_DATA['DATE']['YY'] = Number(WEB_DATA['DATE']['YY']) + 1;
    }
  } else if (Step == -1) {
    WEB_DATA['DATE']['MM'][0] = (Number(WEB_DATA['DATE']['MM'][0]) - 1 < 10) ? `0${Number(WEB_DATA['DATE']['MM'][0]) - 1}`:Number(WEB_DATA['DATE']['MM'][0]) - 1;
    if (Number(WEB_DATA['DATE']['MM'][0]) < 1) {
      WEB_DATA['DATE']['MM'][0] = '12';
      WEB_DATA['DATE']['YY'] = Number(WEB_DATA['DATE']['YY']) - 1;
    }
  }

  Calendar_Update();
}

function Calendar_Update() {
  try {
    let Mes = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    document.querySelector("#MM_Name").innerHTML = `${Mes[Number(WEB_DATA['DATE']['MM'][0])]} - ${WEB_DATA['DATE']['YY']}`;
    if (WEB_DATA['DATE']['FULL'][0] == `${WEB_DATA['DATE']['YY']}/${WEB_DATA['DATE']['MM'][0]}/${WEB_DATA['DATE']['DD'][0]}`) 
      document.querySelector(`#DD_S_${Number(WEB_DATA['DATE']['DD'][0])}`).classList.add("DD_Actual");
    else document.querySelector(`#DD_S_${Number(WEB_DATA['DATE']['DD'][0])}`).classList.remove("DD_Actual");
    
    let NTIME = new Date(WEB_DATA['DATE']['YY'],Number(WEB_DATA['DATE']['MM'][0]) - 1, 1).getDay();
    if(NTIME == 0) NTIME = 7;
    document.querySelector("#Calendar_DD #DD_S_1").style.gridColumnStart = NTIME;
    let DAYS = new Date(WEB_DATA['DATE']['YY'],Number(WEB_DATA['DATE']['MM'][0]),0).getDate();

    for (let x = 28; x <= 31; x++) {
      if (x > DAYS) document.querySelector(`#DD_S_${x}`).classList.add("Hiden");
      else document.querySelector(`#DD_S_${x}`).classList.remove("Hiden");
    }
  } catch (e) {
    console.error(e)
    return false;
  }
}

function Add_New_Date() {
  let DOM = document.querySelector("#DATES_NEW form");
  let ITEMS = DOM.querySelectorAll("input");
  let DATA_RAW = {};
  let DATA1 = "";
  let DATA2 = "";

  ITEMS.forEach((Xtem) => {
    let Name = String(Xtem.getAttribute("item")).toUpperCase();
    let Valor = String(Xtem.value).toUpperCase();
    DATA_RAW[Name] = Valor;
    DATA1 += `${Name},`;
    DATA2 += `'${Valor}',`;
  });
  DATA1 = DATA1.substring(0, DATA1.length - 1);
  DATA2 = DATA2.substring(0, DATA2.length - 1);

  let XWHERE = "";
  let SET = "";
  if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
    if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == 'true') {
      let DATA =
        _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
          _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
        ];
      XWHERE = `ID = '${DATA["ID"]}' AND FECHA = '${DATA["FECHA"]}' AND HORA = '${DATA["HORA"]}'`;
      SET = `FECHA='${DATA_RAW["FECHA"]}', HORA='${DATA_RAW["HORA"]}', MOTIVO='${DATA_RAW["MOTIVO"]}'`;
      _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
        _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
      ] = DATA_RAW;
      setTimeout(() => {
        Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
      }, 250);
    } else {
      if (_Data["CITAS"]?.[DATA_RAW["ID"]] == undefined) {
        _Data["CITAS"][DATA_RAW["ID"]] = {};
      }
      let NUM = Object.keys(_Data["CITAS"][DATA_RAW["ID"]]).length;
      Add_Notelist("Date", DATA_RAW, NUM);
    }
  }

  if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: _Config["DATABASE"]["HOST"],
      DB_USER: _Config["DATABASE"]["USER"],
      DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
      DB_NAME: _Config["DATABASE"]["NOMBRE"],
      DB_TABLE: _Config["DATABASE"]["TABLA"]["CITAS"],
      SET: SET,
      TABLE_KEYS: DATA1,
      VALUES: DATA2,
      WHERE: XWHERE,
    };
    SEND_TO_PHP("ADD_DATE", SEND);
  }

  if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "false" || _Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "Add") {
    let NUM = (_Data["CITAS"]?.[DATA_RAW["ID"]] != undefined) ? Object.keys(_Data["CITAS"][DATA_RAW["ID"]]).length:[];
    if(_Data["CITAS"]?.[DATA_RAW["ID"]] == undefined){
      _Data["CITAS"][DATA_RAW["ID"]] = {};
    }
    _Data["CITAS"][DATA_RAW["ID"]][NUM] = DATA_RAW;

    let DOM2 = document.querySelector("#DATES .Dates_List ul");
    let MES = [
      "",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let XTIME = String(DATA_RAW["FECHA"]).split("-");

    let TIPE = false;
    let NTEM = ``;
    if (
      document.querySelector(
        `#DATES .Dates_List ul li details[date="${DATA_RAW["FECHA"]}"]`
      ) != null
    ) {
      DOM2 = document.querySelector(
        `#DATES .Dates_List ul details[date="${DATA_RAW["FECHA"]}"] ul`
      );
      NTEM = `<li><a href="#" onclick="load_date(this)"><p class="Hiden">${JSON.stringify(
        DATA_RAW
      )}</p><h4>${DATA_RAW["HORA"]}</h4><div><p>#${
        DATA_RAW["ID"]
      }</p><p>${String(DATA_RAW["MOTIVO"]).substring(
        0,
        15
      )}</p></div></a></li>`;
      TIPE = true;
    } else {
      NTEM = `<details date="${DATA_RAW["FECHA"]}"><summary>${XTIME[2]} de ${
        MES[Number(XTIME[1])]
      } ${
        XTIME[0]
      }</summary><ul><li><a href="#" onclick="load_date(this)"><p class="Hiden">${JSON.stringify(
        DATA_RAW
      )}</p><h4>${DATA_RAW["HORA"]}</h4><div><p>#${
        DATA_RAW["ID"]
      }</p><p>${String(DATA_RAW["MOTIVO"]).substring(
        0,
        15
      )}</p></div></a></li></ul></details>`;
    }

    let CITEM = document.createElement("li");
    CITEM.innerHTML = NTEM;
    DOM2.appendChild(CITEM);

    if (TIPE == true) {
      let LIST = DOM2.querySelectorAll("li");
      let XHora = [];
      LIST.forEach((Xtem) => {
        let HORA = Xtem.querySelector("a h4").textContent;
        XHora.push(String(HORA));
      });
      XHora.sort();
    }
  }

  if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "false") {
    GOTO_MENU("Dates", 0);
  } else {
    Calendar_DD_Selected("NO");
  }
  ITEMS.forEach((Xtem) => {
    Xtem.value = "";
  });

  _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
  _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
}

function load_date(TEXT = "") {
  let DATA_RAW = TEXT.querySelector('p[class="Hiden"]').textContent;
  let DATA = JSON.parse(DATA_RAW);
  let DOM = document.querySelector("#DATES #Dates_Details");
  let ITEMS = DOM.querySelectorAll("p[item]");

  let KEYS = Object.keys(DATA);
  ITEMS.forEach((Xtem) => {
    let Xkey = Xtem.getAttribute("ITEM");
    if (KEYS.includes(Xkey)) {
      Xtem.textContent = DATA[Xkey];
    } else {
      if (Xkey == "NOMBRE") {
        let ID = document.querySelector(
          '#DATES #Dates_Details *[ITEM="ID"]'
        ).textContent;
        Xtem.textContent = _Data["PACIENTES"]?.[ID]
          ? _Data["PACIENTES"][ID]["NOMBRE"]
          : "#N/A";
      } else {
        Xtem.textContent = "#N/A";
      }
    }
  });
}

function Pacient_List_History() {
  let Elements1 = [
    "Cancer cervicouterino",
    "Cancer de mama",
    "Cardiopatias",
    "Diabetes",
    "Dislipidemia",
    "Distrofia Muscular",
    "Enfermedades cerebrovasculares",
    "Epilepsia",
    "Hipertension",
    "Insuficiencia renal",
    "Muerte cardiovascular",
    "Obesidad",
    "Osteoporosis",
    "Tabaquismo",
    "Tiroides",
    "Tuberculosis",
  ];
  let Elements2 = [
    "Obesidad",
    "Amigdalitis",
    "Artitis",
    "Cancer",
    "Cardiopatias",
    "Convulsiones",
    "Diabetes",
    "Dislipidemia",
    "Escarlatina",
    "Hepatitis",
    "Osteoporosis",
    "Rubeola",
    "Sarampion",
    "Tiroides",
    "Tosferia",
    "Tuberculosis",
    "Varicela",
  ];
  Elements1.sort();
  Elements2.sort();

  let TB1 = document.getElementById("TABLE_Historial_1");
  let TB2 = document.getElementById("TABLE_Historial_2");

  let T_newRow1 = TB1.insertRow(0);
  let T_Cell;
  let Num = 0;

  setTimeout(() => {
    Elements1.forEach((X)=>{
      if(Num > 3) {
        T_newRow1 = TB1.insertRow(-1);
        Num = 0;
      }
      T_Cell = T_newRow1.insertCell(Num);
      T_Cell.innerHTML = `<button type="button" class="NO_CHECKED" onclick="Btn_Togle(this,'Pacient_History')">${X}</button>`;
      Num += 1;
    })

    Num = 0;
    let T_newRow2 = TB2.insertRow(0);
    Elements2.forEach((X)=>{
      if (Num > 3) {
        T_newRow2 = TB2.insertRow(-1);
        Num = 0;
      }
      T_Cell = T_newRow2.insertCell(Num);
      T_Cell.innerHTML = `<button type="button" class="NO_CHECKED" onclick="Btn_Togle(this,'Pacient_History')">${X}</button>`;
      Num += 1;
    })
  }, 100);

  return true;
}

function Pacient_Register(TEXT = {}) {
  let DOM = document.querySelectorAll("#PACIENT_REGISTER .REGISTER_FORM *[item]");
  let IMAGE_DOM = document.querySelector("#CAMARA #CAM_IMG");
  let IMAGE = IMAGE_DOM.src;
  let TIMG = "";
  if (IMAGE.length < 128) {
    IMAGE = document.querySelector('#IMPORT_FILE_R input[item="ARCHIVO"]');

    if (IMAGE.files.length > 0) {
      IMAGE = IMAGE.files[0];
      let READER = new FileReader();
      READER.onloadend = () => {
        TIMG = READER.result;
      };
      READER.readAsDataURL(IMAGE);
    } else IMAGE = "";
    
  } else {
    TIMG = IMAGE;
  }

  let DATA = {};
  DOM.forEach((XItem) => {
    let KEY = XItem.getAttribute("ITEM");
    DATA[KEY] = String(XItem.value).toUpperCase();
  });

  setTimeout(() => {
    DATA["IMG"] = TIMG;
    DATA["ID"] = DATA["CURP"];
    _Data["PACIENTES"][DATA["CURP"]] = DATA;
    DATA["HISTORIAL_1"] = "";
    DATA["HISTORIAL_2"] = "";
    DATA["HISTORIAL_3"] = "";
    DATA["HISTORIAL_4"] = "";
    DATA["HISTORIAL_5"] = "";

    if (String(DATA["CURP"]).length < 3) return false;

    if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
      let KEYS_RAW = Object.keys(DATA);
      let KEYS = "";
      let VALUES = "";
      let XWHERE = "";

      if (TEXT?.MODE == "EDIT") {
        XWHERE = `ID = ${TEXT.ID}`;
      }

      KEYS_RAW.forEach((Xtem) => {
        KEYS += (KEYS.length > 2) ? `,${Xtem}`:`${Xtem}`;
        VALUES += (VALUES.length > 2) ? `,'${DATA[Xtem]}'`:`'${DATA[Xtem]}'`;
      });

      let SEND = {
        DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
        TABLE_KEYS: KEYS,
        VALUES: VALUES,
        WHERE: XWHERE,
      };
      SEND_TO_PHP("ADD_PACIENT", SEND);
    }

    _Data["PACIENTES"][DATA["ID"]] = { ...DATA };
    Import_Pacient([DATA["ID"]]);

    GOTO_MENU("Pacient_Select");

    DOM.forEach((Xtem) => {
      Xtem.value = "";
    });
    IMAGE_DOM.src = "";
  }, 150);
}

function Pacient_Load(Pacient, Force=false) {
  try {
    let Reset = document.querySelectorAll('#PACIENT_HISTORY button[class="CHECKED"]');
    Reset.forEach((X) => {X.setAttribute("class", "NO_CHECKED");});
  } catch (err) { console.warn(err);}
  if (_Data["PACIENTES"]?.[Pacient] == undefined || Force == true) {
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
      USER: `'${_Data["USUARIO"]["ID"]}'`,
      KEYS: "*",
      WHERE_KEY: "ID",
      WHERE_VALUE: Pacient,
    };
    SEND_TO_PHP("LOAD_PACIENT", SEND);
  } else {
    _Data["PACIENTES"]["SELECTED"] = _Data["PACIENTES"][Pacient];
  }
  
  let Count = 35 * (1000/250);
  let REPEAT = setInterval(() => {
    if (_Data["PACIENTES"]["SELECTED"]["ID"] != "") {
      clearInterval(REPEAT);
      let DOM = document.querySelectorAll("#PACIENT_INFO_A *[ITEM]");
      let RESP = ["R_NOMBRE", "R_TEL1", "R_TEL2", "R_CORREO"];
      let Respon = {};
      try {
        Respon = JSON.parse(_Data["PACIENTES"]["SELECTED"]["RESPONSABLE"]);
      } catch (err) { console.warn(err); }

      DOM.forEach((Xtem) => {
        let KEY = Xtem.getAttribute("ITEM");
        if (KEY == "NOMBRE") {
          Xtem.textContent = `${_Data["PACIENTES"]["SELECTED"]["NOMBRE"]} ${_Data["PACIENTES"]["SELECTED"]["APELLIDO_1"]} ${_Data["PACIENTES"]["SELECTED"]["APELLIDO_2"]}`.toUpperCase();
        } else if (KEY == "IMG") {
          if(_Data["PACIENTES"]["SELECTED"]["IMG"] != undefined){
            let XIMG = _Data["PACIENTES"]["SELECTED"]["IMG"]
            Xtem.src = (XIMG.length > 128)? XIMG:"IMG/User_Img.jpg";
          }
        } else {
          try {
            if (Xtem.nodeName == "INPUT") {
              if (_Data["PACIENTES"]["SELECTED"][KEY] != undefined) {
                Xtem.value = String(
                  _Data["PACIENTES"]["SELECTED"][KEY]
                ).toUpperCase();
              } else {
                if (RESP.includes(KEY)) {
                  try {
                    Xtem.value = Respon?.[KEY] ?? "";
                  } catch (err) {
                    console.warn(err);
                  }
                }
              }
            } else {
              Xtem.textContent = String(
                _Data["PACIENTES"]["SELECTED"][KEY]
              ).toUpperCase();
            }
          } catch (err) {
            console.warn(err);
          }
        }
      });

      if (_Data["PACIENTES"]["SELECTED"]["HISTORIAL_1"] != "") {
        let HIST = String(
          _Data["PACIENTES"]["SELECTED"]["HISTORIAL_1"]
        ).toUpperCase();
        HIST = HIST.split(",");
        HIST.sort();
        if (HIST.length > 0) {
          let Table = document.querySelector("#Info_History_1");
          let Rest = Table.querySelectorAll("p");
          Rest.forEach((Xtem) => {
            Xtem.remove();
          });
          HIST.forEach((Xtem) => {
            Xtem = String(Xtem).trim();
            let item = document.createElement("p");
            item.innerHTML = Xtem;
            Table.appendChild(item);
          });
          let Table2 = document.querySelectorAll("#TABLE_Historial_1 button");
          Table2.forEach((Xtem) => {
            let TEXT = String(Xtem.textContent).toUpperCase();
            if (HIST.includes(TEXT)) {
              Xtem.classList.replace("NO_CHECKED", "CHECKED");
            }
          });
        }
      }
      if (_Data["PACIENTES"]["SELECTED"]["HISTORIAL_2"] != "") {
        let HIST = String(
          _Data["PACIENTES"]["SELECTED"]["HISTORIAL_2"]
        ).toUpperCase();
        HIST = HIST.split(",");
        HIST.sort();
        if (HIST.length > 0) {
          let Table = document.querySelector("#Info_History_2");
          let Rest = Table.querySelectorAll("p");
          Rest.forEach((Xtem) => {
            Xtem.remove();
          });
          HIST.forEach((Xtem) => {
            Xtem = String(Xtem).trim();
            let item = document.createElement("p");
            item.innerHTML = Xtem;
            Table.appendChild(item);
          });
          let Table2 = document.querySelectorAll("#TABLE_Historial_2 button");
          Table2.forEach((Xtem) => {
            let TEXT = String(Xtem.textContent).toUpperCase();
            if (HIST.includes(TEXT)) {
              Xtem.classList.replace("NO_CHECKED", "CHECKED");
            }
          });
        }
      }
      if (_Data["PACIENTES"]["SELECTED"]["HISTORIAL_3"] != "") {
        let HIST = String(
          _Data["PACIENTES"]["SELECTED"]["HISTORIAL_3"]
        ).toUpperCase();
        HIST = HIST.split(",");
        let TABLES = document.querySelectorAll("#TABLE_Historial_3 table");
        if (HIST.length > 0) {
          let Rest = document.querySelector("#Info_History_3");
          let Del = Rest.querySelectorAll("p");
          Del.forEach((X) => {
            X.remove();
          });
          for (let x = 0; x < HIST.length; x++) {
            let item = document.createElement("p");
            item.innerHTML = HIST[x];
            Rest.appendChild(item);

            try {
              let Values = String(HIST[x]).split(":");
              Values[1] = String(Values[1]).toUpperCase();
              Values[0] = Values[0].trim();
              Values[1] = Values[1].trim();

              let Buttons = TABLES[x].querySelectorAll("button");
              if (Values[1].length > 1) {
                if(Values[0] == 'SERVICIOS' || Values[0] == 'FAUNA'){
                  let XLIST = String(Values[1]).split('-');
                  for(let x=0; x<XLIST.length; x++){
                    XLIST[x] = XLIST[x].trim();
                  }
                  Buttons.forEach((Xtem) => {  
                    let VAL = String(Xtem.textContent).toLocaleUpperCase();
                    VAL = VAL.trim();
                    if (XLIST.includes(VAL)){
                      Xtem.setAttribute("class", "CHECKED");
                      if(Values[0] == 'FAUNA'){
                        Values[1].replace(`${VAL} -`, '');
                      }
                    }
                  });
                  if(Values[0] == 'FAUNA'){
                    document.querySelector('#TABLE_Historial_3c_more').value = Values[1];
                  }
                } else if(Values[0] == 'ALERGIAS'){
                  document.querySelector('#TABLE_Historial_Alergias').value = Values[1];
                } else{  
                  Buttons.forEach((Xtem) => {
                    let VAL = String(Xtem.textContent).toLocaleUpperCase();
                    VAL = VAL.trim();
                    if (VAL == Values[1]) {
                      Xtem.setAttribute("class", "CHECKED");
                    }
                  });
                }
              }
            } catch (err) {}
          }
        }
      }
      if (_Data["PACIENTES"]["SELECTED"]["HISTORIAL_4"] != "") {
        let HIST = String(
          _Data["PACIENTES"]["SELECTED"]["HISTORIAL_4"]
        ).toUpperCase();
        HIST = HIST.split(",");

        let TABLES = document.querySelectorAll("#TABLE_Historial_4 input");
        if (HIST.length > 0) {
          for (let x = 0; x < HIST.length; x++) {
            let VALUES = String(HIST[x]).split(":");
            if (VALUES?.[1]) {
              TABLES[x].value = VALUES[1];
            }
          }
        }
      }
      if (_Data["PACIENTES"]["SELECTED"]["HISTORIAL_5"] != "") {
        let HIST = String(
          _Data["PACIENTES"]["SELECTED"]["HISTORIAL_5"]
        ).toUpperCase();
        HIST = HIST.split(",");

        let TABLES = document.querySelectorAll("#TABLE_Historial_5 table");
        if (HIST.length > 0) {
          let Rest = document.querySelector("#Info_History_5");
          let XP = Rest.querySelectorAll('p');
          XP.forEach((X) => {X.remove()})
          for (let x = 0; x < HIST.length; x++) {
            let Add = document.createElement("p");
            Add.innerHTML = String(HIST[x]).toLocaleUpperCase();
            Rest.appendChild(Add);
             try {
               let Buttons = TABLES[x].querySelectorAll("button");
               let Values = String(HIST[x]).split(":");
               if (Values[1] == "SI") {
                 Buttons[0].setAttribute("class", "CHECKED");
               } else {
                 Buttons[1].setAttribute("class", "CHECKED");
               }
             }  catch {}
          }
        }
      }
      if (_Data['PACIENTES']['SELECTED']['HISTORIAL_6'] != ""){
        let Rest = document.querySelector("#Info_History_6")
        let Add = document.createElement("p");
        Add.innerHTML = _Data['PACIENTES']?.['SELECTED']?.['HISTORIAL_6'] ?? "";
        Rest.appendChild(Add);
      }

      document.querySelector('#PACIENT_INFO .Banner button').setAttribute('onclick',`Pacient_Load('${_Data["PACIENTES"]["SELECTED"]["ID"]}',true)`);
      Load_NoteList(Pacient);
      GOTO_MENU("PACIENT_INFO", 0);
    } else {
      if (Count > 0) {
        Count -= 1;
      } else {
        clearInterval(REPEAT);
        APP_ALERT("ERROR", 2);
        return false;
      }
    }
    _Data["PACIENTES"]["SELECTED"]["EDIT"] = 'false';  
  }, 250);
}

function Import_Pacient(ID = [], Btn = null) {
  if (ID.length < 1) return false;
  if (Btn != null) {
    Btn.setAttribute("class", "");
    Btn.setAttribute('onclick','');
    Btn.textContent = "En propiedad";
  }
  
  let XWHERE = "";
  let SET = "";
  ID.forEach((X)=>{
    X = String(X).toUpperCase();
    XWHERE += (XWHERE.length > 2)? ` OR ID='${X}'`:`ID='${X}'`;
    if(_Data["PACIENTES"]?.[X] == undefined) SET += `${X},`;
  })

  let SEND = {
    DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
    KEYS: "ID,NOMBRE,APELLIDO_1,APELLIDO_2,CURP,FECHA,TELEFONO_1,TELEFONO_2,GENERO,RH,CORREO",
    WHERE: XWHERE,
    SET: SET,
    USER: _Data["USUARIO"]["ID"],
  }
  SEND_TO_PHP("IMPORT_PACIENT", SEND);
  let PList = document.querySelector(".Pacient_List");

  let DELAY = 250;
  let COUNT = 35 * (1000 / DELAY);
  let INTERVAL = setInterval(()=>{
    console.log(Object.keys(_Data['PACIENTES']))
    if(_Data['PACIENTES']?.[ID[0]] != undefined){
      clearInterval(INTERVAL);
      
      ID.forEach((X)=>{
        if(_Data['PACIENTES']?.[X]){
          let TRS = PList.querySelector(`a[onclick="Pacient_Load('${X}')"]`);
          if(TRS != undefined) {
            TRS = TRS.parentNode.parentNode;
            TRS.remove();
          }

          if(String(_Data['PACIENTES'][X]['IMG']).length < 128) _Data['PACIENTES'][X]['IMG'] =  "IMG/User_Img.jpg";
          let Element = `
            <td>
              <a href="#" onclick="Pacient_Load('${_Data['PACIENTES'][X].ID}')">
                <p ITEM="CURP">#${_Data['PACIENTES'][X].ID}</p>
              </a>
            </td>
            <td>
              <p class="Pacient_List_NAME">
                <strong ITEM="NAME">${_Data['PACIENTES'][X].NOMBRE} ${_Data['PACIENTES'][X].APELLIDO_1} ${_Data['PACIENTES'][X].APELLIDO_2}</strong>
              </p>
              <p class="Pacient_List_MORE">
                <span ITEM="GENDER">${_Data['PACIENTES'][X].GENERO}, </span>
                <span ITEM="DATE">${_Data['PACIENTES'][X].FECHA}, </span>
                <span ITEM="RH">${_Data['PACIENTES'][X].RH}, </span>
                <span ITEM="TEL_1">${_Data['PACIENTES'][X].TELEFONO_1}, </span>
                <span ITEM="EMAIL">${_Data['PACIENTES'][X].CORREO}</span>
              </p>
            </td>
            <td>
              <button type="button" class="Btn_Sty_2" onclick="Pacient_Load('${_Data['PACIENTES'][X].ID}')">Abrir</button>
            </td>
          `;
          Pacient_Elemen = document.createElement("tr");
          Pacient_Elemen.innerHTML = Element;
          PList.appendChild(Pacient_Elemen);
  
          if(!_Data["USUARIO"]?.["PACIENTES"]) _Data["USUARIO"]["PACIENTES"] = {}
          _Data["USUARIO"]["PACIENTES"] += `,${X}`; 
        
          let add = document.querySelector("#TABLE_PACIEENTS_COUNT_T");
          add.innerText = Number(add.innerText) + 1;
          let add2 = undefined;
          if (String(_Data['PACIENTES'][X]["GENERO"])[0] == "M") add2 = document.querySelector("#TABLE_PACIEENTS_COUNT_M");
          if (String(_Data['PACIENTES'][X]["GENERO"])[0] == "F") add2 = document.querySelector("TABLE_PACIEENTS_COUNT_F");
          if (add2 != undefined) add2.innerText = Number(add2.innerText) + 1;
        }
      })
    }
    COUNT -= 1;
    if(COUNT < 0) clearInterval(INTERVAL);
  }, DELAY)
}

function Search_Pacient(clear = false) {
  _Data["SEARCH"] = undefined;
  let DOM = document.querySelectorAll("#SEARCH *[ITEM]");
  if(clear != false){
    DOM.forEach((X)=>{
      if(X.nodeName == "INPUT") X.value = ""
    })
    return false;
  }
  let XWHERE = "";
  DOM.forEach((X)=>{
    let KEY = X.getAttribute('ITEM');
    let VALUE = X.value;
    if(VALUE == null) VALUE = "";
    if(VALUE != "") XWHERE += (XWHERE.length > 2) ? ` AND ${KEY} LIKE '%${VALUE}%'`:`${KEY} LIKE '%${VALUE}%'`;
  })

  if (XWHERE.length > 2) {
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
      KEYS: "ID,NOMBRE,APELLIDO_1,APELLIDO_2,FECHA",
      WHERE: XWHERE
    };
    SEND_TO_PHP("SEARCH", SEND);

    let TABLE = document.querySelector("#SEARCH table");
    let TD = TABLE.querySelectorAll("tr");
    for (let XTD = 0; XTD < TD.length; XTD++) {
      if (XTD > 0) TD[XTD].remove();
    }

    let Count = 24;
    let REPEAT = setInterval(() => {
      if (_Data["SEARCH"] != undefined) {
        if(_Data["SEARCH"][0] != null){
          clearInterval(REPEAT);
          let REF = []
          let REFX = []
          let KEYS = Object.keys(_Data["SEARCH"]);
          KEYS.forEach((X)=>{
            REF.push(_Data["SEARCH"][X]?.['ID']);
            REFX.push(_Data["SEARCH"][X]?.['ID']);
          })
          REF.sort()
          REF.forEach((Xtem)=>{
            let INDEX = REFX.indexOf(Xtem)
            let ROW = TABLE.insertRow(1);
            let Cell1 = ROW.insertCell(0);
            let Cell2 = ROW.insertCell(1);
            let Cell3 = ROW.insertCell(2);
            let Cell4 = ROW.insertCell(3);

            Cell1.innerHTML = `${_Data["SEARCH"][INDEX]["ID"]}`;
            Cell2.innerHTML = `${_Data["SEARCH"][INDEX]["NOMBRE"]} ${_Data["SEARCH"][INDEX]["APELLIDO_1"]} ${_Data["SEARCH"][INDEX]["APELLIDO_2"]}`;
            Cell3.innerHTML = `${_Data["SEARCH"][INDEX]["FECHA"]}`;

            if (_Data["PACIENTES"]?.[_Data["SEARCH"][INDEX]["ID"]] == undefined) Cell4.innerHTML = `<button type="button" class="Btn_Sty_1" onclick="Import_Pacient(['${_Data["SEARCH"][INDEX]["ID"]}'],this)"><img src="./IMG/Wifi_Cloud.svg" alt="">Importar</button>`;
            else Cell4.innerHTML = `<button type="button" class="Btn_Sty_1" onclick="Import_Pacient(['${_Data["SEARCH"][INDEX]["ID"]}'],this)"><img src="./IMG/Wifi_Cloud.svg" alt="">Restablecer</button>`;
          })
          
          _Data["SEARCH"] = undefined;
          return true;
        } else Count = 0;        
      } 
      if (Count > 0) {
        Count -= 1;
      } else {
        clearInterval(REPEAT);
        let ROW = TABLE.insertRow(1);
        let Cell1 = ROW.insertCell(0);
        Cell1.outerHTML = `<td colspan="4" style="background: #ddbbbb; text-align: center;"> SIN RESULTADOS <td>`;
        return false;
      }
    }, 250);
  }
  else return false; 
}

function Search_Note() {
  let TABLA = document.querySelector("#Mn_Pacientes_Notes table");
  let SEARCH = document.querySelector(
    '#Mn_Pacientes_Notes input[type="search"]'
  ).value;

  if (SEARCH.length > 1) {
    let TR = TABLA.querySelectorAll("tr");
    for (let XTD = 0; XTD < TR.length; XTD++) {
      if (XTD > 0) {
        TD[XTD].remove();
      }
    }

    let SEND = {
      DB_HOST: _Config["DATABASE"]["HOST"],
      DB_USER: _Config["DATABASE"]["USER"],
      DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
      DB_NAME: _Config["DATABASE"]["NOMBRE"],
      DB_TABLE: _Config["DATABASE"]["TABLA"]["NOTAS"],
      KEYS: "FECHA,HORA,MOTIVO,TIPO",
      WHERE_KEY: "ID",
      WHERE_VALUE: _Data["PACIENTES"]["SELECTED"]["ID"],
    };
    SEND_TO_PHP("SEARCH", SEND);

    let Count = 30 * (1000/250);
    let REPEAT = setInterval(() => {
      if (_Data["SEARCH"] != undefined) {
        if(_Data["SEARCH"][0] != null){
          clearInterval(REPEAT);
          let TOTAL = Object.keys(_Data["SEARCH"]).length;
          for (let Xtem = 0; Xtem < TOTAL; Xtem++) {
            let ROW = TABLA.insertRow(1);
            let Cell1 = ROW.insertCell(0);
            let Cell2 = ROW.insertCell(1);
            let Cell3 = ROW.insertCell(2);
            let Cell4 = ROW.insertCell(3);

            Cell1.innerHTML = `${_Data["SEARCH"][Xtem]["FECHA"]}`;
            Cell2.innerHTML = `${_Data["SEARCH"][Xtem]["MOTIVO"]}`;
            Cell3.innerHTML = ``;
            Cell4.innerHTML = `
            <button type="button" class="Btn_Sty_4" onclick="Open_Note('${_Data["SEARCH"][Xtem]["FECHA"]},${_Data["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/eye-solid.svg" alt="">Ver</button>
            <button type="button" class="Btn_Sty_1" onclick="Edit_Note('${_Data["SEARCH"][Xtem]["FECHA"]},${_Data["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Edit.svg" alt="">Editar</button>
            <button type="button" class="Btn_Sty_3" onclick="Delete_Note('${_Data["SEARCH"][Xtem]["FECHA"]},${_Data["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Delete.svg" alt=""></button>
            `;
          }
          return true;
        } else Count = 0;
      }
      if (Count > 0) {
        Count -= 1;
      } else {
        clearInterval(REPEAT);
        let ROW = TABLA.insertRow(1);
        let Cell1 = ROW.insertCell(0);
        Cell1.innerHTML = `<td colspan="4" style="color: #ff3333; background: #ddbbbb; text-align: center;"> SIN RESULTADOS <td>`;
        return false;
      }
    }, 250);
  }
  return true;
}

function Search_Doc(Menu = "") {
  let DOM = undefined;
  let Filter = undefined;
  let FilterIndex = undefined;
  let Search = undefined;
  let DeepSearch = undefined;

  Menu = String(Menu).toUpperCase()
  if(Menu == "PACIENT"){
    DOM = document.querySelector('#Cn_Pacientes_List table');
    Filter = document.querySelector('#Cn_Pacientes_List div.Search select').value;
    Search = document.querySelector('#Cn_Pacientes_List div.Search input[type="search"]').value;
    FilterIndex = (Filter == "CURP") ? 1:2;
  }
  else if(Menu == "NOTE"){
    DOM = document.querySelector('#TABLE_Notes');
    Filter = document.querySelector('#PACIENT_NOTES select').value;
    Search = document.querySelector('#PACIENT_NOTES input[type="search"]').value;
    let DIC = {"DATE":1,"MOTIVE":2,"TAGS":3}
    FilterIndex = DIC?.[Filter] ?? undefined;
    Menu = "Note";
  }
  else if(Menu == "DOC"){
    DOM = document.querySelector('#TABLE_Docs');
    Filter = document.querySelector('#PACIENT_DOCS details[submenu="Cartas"] select').value;
    Search = document.querySelector('#PACIENT_DOCS details[submenu="Cartas"] input[type="search"]').value;
    let DIC = {"DATE":1,"NAME":2,"MOTIVE":3}
    FilterIndex = DIC?.[Filter] ?? undefined;
    Menu = "Carta";
  }
  else if(Menu == "FILE"){
    DOM = document.querySelector('#TABLE_Files');
    Filter = document.querySelector('#PACIENT_DOCS details[submenu="Archivos"] select').value;
    Search = document.querySelector('#PACIENT_DOCS details[submenu="Archivos"] input[type="search"]').value;
    let DIC = {"DATE":1,"NAME":2,"TYPE":3}
    FilterIndex = DIC?.[Filter] ?? undefined;
    Menu = "Archivo";
  }
  if(DOM == undefined) return false;
  Search = String(Search).toLowerCase();

  let DELAY = 0;
  if(DeepSearch == true){
    DELAY = 3000;
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["CARTAS"],
      KEYS: "NOMBRE,TIPO,FECHA,HORA",
      WHERE_KEY: "ID",
      WHERE_VALUE: _Data["PACIENTES"]["SELECTED"]["ID"],
    };
    SEND_TO_PHP("SEARCH", SEND);
  }

  setTimeout(() => {
    if (DELAY > 0 && _Data["SEARCH"] != undefined && Menu != "PACIENT") {
      let TOTAL = Object.keys(_Data["SEARCH"]).length;
      let XMENU = undefined
      let Docs = undefined;
      if(Menu == "Archivo") XMENU = _Data['DOCUMENTOS'][_Data['PACIENTES']['SELECTED']['ID']]['ARCHIVOS']
      else if(Menu == "Carta") XMENU = _Data['DOCUMENTOS'][_Data['PACIENTES']['SELECTED']['ID']]['CARTAS']
      else if(Menu == "Note") XMENU = _Data['NOTAS'][_Data['PACIENTES']['SELECTED']['ID']]
      else if(Menu == "PACIENT") XMENU = _Data['PACIENTES']
      Docs = Object.keys(XMENU)

      TOTAL.forEach((X)=>{
        let PREPARE1 = `${_Data['SEARCH'][X]['FECHA']}-${_Data['SEARCH'][X]['HORA']}`;
        Docs.forEach((Y)=>{
            let PREPARE2 = `${XMENU[Y]['FECHA']}-${XMENU[Y]['HORA']}`;
            if(PREPARE1 == PREPARE2) _Data["SEARCH"][X] = undefined;
        })
      })
      TOTAL.forEach((X)=>{
        if(_Data["SEARCH"][X] != undefined){
          if(Menu != "PACIENT") Add_Notelist(Menu, _Data['SEARCH'][X]);
        }
      })
    }
      
    let TRS = DOM.querySelectorAll('tr');
    let TResult = 0;
    TRS.forEach((X)=>{
      let XDATA = "";
      if(FilterIndex != undefined && FilterIndex > 0) {
        try {
          if(Menu == "PACIENT") XDATA = X.querySelector(`td:nth-child(${FilterIndex}) *[ITEM="${Filter}"]`).innerText;
          else XDATA = X.querySelector(`td:nth-child(${FilterIndex})`).innerText;
        } catch {
          XDATA = "undefined";
        }
      }
      if(XDATA.length > 1) XDATA = String(XDATA).toLocaleLowerCase();
      if(XDATA.search(Search) < 0) X.classList.add('Hiden'); 
      else {
        X.classList.remove('Hiden'); 
        TResult += 1;
      }
    })
    TRS[0].classList.remove('Hiden');

    if(TResult == 0) setTimeout(() => {
      alert('>> 0 RESULT <<');
    }, 50);
  
  }, DELAY);
  
  return true;
}

function Save_Pacient() {
  let DATA = _Data["PACIENTES"]["SELECTED"];
  try{
    let N1 = document.querySelector('#PACIENT_INFO input[item="PESO"]').value;
    let N2 = Number(document.querySelector('#PACIENT_INFO input[item="ALTURA"]').value) / 100;
    let VAL = (Number(N1) / (N2 * N2)); 
    document.querySelector('#PACIENT_INFO input[item="IMC"]').value = VAL.toFixed(2);
  } catch(e){ console.log(e);}

  let INFO1 = document.querySelectorAll("#PACIENT_INFO input[item]");
  let PResp = ["R_NOMBRE", "R_TEL1", "R_TEL2", "R_CORREO"];
  DATA["RESPONSABLE"] = "";
  INFO1.forEach((Xtem) => {
    let KEY = Xtem.getAttribute("ITEM");
    if (PResp.includes(KEY) == false) {
      DATA[KEY] = Xtem.value;
    } else {
      DATA["RESPONSABLE"] += (DATA["RESPONSABLE"].length > 2) ? `,"${KEY}":"${Xtem.value}"`:`"${KEY}":"${Xtem.value}"`;
    }
  });
  DATA["RESPONSABLE"] = `{${DATA["RESPONSABLE"]}}`;

  try{
    let Ale = document.querySelectorAll('#Info_History_3 > p')[5];
    Ale.innerText = `ALERGIAS: ${document.querySelector('#TABLE_Historial_Alergias').value}`;
  } catch {}

  let Hist1 = document.querySelectorAll("#Info_History_1 p");
  let Hist2 = document.querySelectorAll("#Info_History_2 p");
  let Hist3 = document.querySelectorAll("#Info_History_3 p");
  let Hist4 = document.querySelectorAll("#Info_History_4 p");
  let Hist5 = document.querySelectorAll("#Info_History_5 p");

  DATA["HISTORIAL_1"] = "";
  DATA["HISTORIAL_2"] = "";
  DATA["HISTORIAL_3"] = "";
  DATA["HISTORIAL_4"] = "";
  DATA["HISTORIAL_5"] = "";
  DATA["HISTORIAL_6"] = document.querySelector('#Historial_6').value;

  Hist1.forEach((Xtem) => {
    DATA["HISTORIAL_1"] += `${String(Xtem.textContent).toLowerCase()},`.replace("\n", "").replace("\n", "").trim();
  });
  Hist2.forEach((Xtem) => {
    DATA["HISTORIAL_2"] += `${String(Xtem.textContent).toLowerCase()},`.replace("\n", "").replace("\n", "").trim();
  });
  Hist3.forEach((Xtem) => {
    DATA["HISTORIAL_3"] += `${String(Xtem.textContent).toLowerCase()},`.replace("\n", "").replace("\n", "").trim();
  });
  Hist4.forEach((Xtem) => {
    DATA["HISTORIAL_4"] += `${String(Xtem.textContent).toLowerCase()},`.replace("\n", "").replace("\n", "").trim();
  });
  Hist5.forEach((Xtem) => {
    DATA["HISTORIAL_5"] += `${String(Xtem.textContent).toLowerCase()},`.replace("\n", "").replace("\n", "").trim();
  });

  DATA["HISTORIAL_1"] =
    DATA["HISTORIAL_1"] != ""
      ? DATA["HISTORIAL_1"]
          .substring(0, DATA["HISTORIAL_1"].length - 1)
          .replaceAll("                      ", "")
          .replaceAll("                   ", "")
      : "";
  DATA["HISTORIAL_2"] =
    DATA["HISTORIAL_2"] != ""
      ? DATA["HISTORIAL_2"]
          .substring(0, DATA["HISTORIAL_2"].length - 1)
          .replaceAll("                      ", "")
          .replaceAll("                   ", "")
      : "";
  DATA["HISTORIAL_3"] =
    DATA["HISTORIAL_3"] != ""
      ? DATA["HISTORIAL_3"]
          .substring(0, DATA["HISTORIAL_3"].length - 1)
          .replaceAll("                      ", "")
          .replaceAll("                   ", "")
      : "";
  DATA["HISTORIAL_4"] =
    DATA["HISTORIAL_4"] != ""
      ? DATA["HISTORIAL_4"]
          .substring(0, DATA["HISTORIAL_4"].length - 1)
          .replaceAll(" ", "")
      : "";
  DATA["HISTORIAL_5"] =
    DATA["HISTORIAL_5"] != ""
      ? DATA["HISTORIAL_5"]
          .substring(0, DATA["HISTORIAL_5"].length - 1)
          .replaceAll(" ", "")
      : "";
  let WAIT = 150;
  let IMAGE_DOM = document.querySelector("#CAMARA #CAM_IMG");
  if (IMAGE_DOM.src.length < 128) {
    let IMAGE = document.querySelector(
      '#IMPORT_FILE_R input[item="ARCHIVO"]'
    );

    if (IMAGE.files.length > 0) {
      WAIT = 1750;
      IMAGE = IMAGE.files[0];
      let READER = new FileReader();
      READER.onloadend = () => {
        DATA["IMG"] = READER.result;
      };
      READER.readAsDataURL(IMAGE);
    }
  } else {
    DATA["IMG"] = IMAGE_DOM.src;
  }

  setTimeout(() => {
    if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
      let VALUES = ``;
      let KEYS = Object.keys(DATA);
      let BLACKLIST = ['EDIT','EDIT_INDEX'];
      KEYS.forEach((Xtem) => {
        if(BLACKLIST.includes(Xtem) == false) VALUES += `${Xtem}='${DATA[Xtem]}',`;
      });
      VALUES = VALUES.substring(0, VALUES.length - 1);

      let SEND = {
        DB_TABLE: _Config["DATABASE"]["TABLA"]["PACIENTES"],
        SET: VALUES,
        WHERE_KEY: "ID",
        WHERE_VALUE: _Data["PACIENTES"]["SELECTED"]["ID"],
      };
      SEND_TO_PHP("UPDATE_PACIENT", SEND);

      KEYS.forEach((Xtem) => {
        _Data["PACIENTES"][DATA["ID"]][Xtem] = DATA[Xtem];
      });
    } else {
      let KEYS = Object.keys(DATA);
      KEYS.forEach((Xtem) => {
        _Data["PACIENTES"][DATA["ID"]][Xtem] = DATA[Xtem];
      });
    }

    IMAGE_DOM.src = "";
    Mn_Doc(-1, "SELECT");
  }, WAIT);
}

function Add_Notelist(Type, DATA, sub = "") {
  if (DATA == undefined) return false;
  let TB = undefined;
  if (Type == "Note") TB = document.getElementById("TABLE_Notes");
  else if (Type == "Carta") TB = document.getElementById("TABLE_Docs");
  else if (Type == "Archivo") TB = document.getElementById("TABLE_Files");
  else if (Type == "Date") TB = document.getElementById("TABLE_Dates");
  else return false;
  
  let Row = TB.insertRow(1);
  let Cell1 = Row.insertCell();
  let Cell2 = Row.insertCell();
  let Cell3 = Row.insertCell();
  let Cell4 = Row.insertCell();

  let RET = "";
  if (Type == "Note") {
    let Temp = JSON.parse(DATA["OTROS"]);
    Cell1.innerHTML = DATA?.["FECHA"] ?? "";
    if (DATA?.["MOTIVO"] == "undefined" || DATA?.["MOTIVO"] == "UNDEFINED") {
      Cell2.innerHTML = Temp?.["TYPE"] ?? "";
    } else {
      Cell2.innerHTML = DATA?.["MOTIVO"] ?? "";
    }
    Cell3.innerHTML = Temp?.["TYPE"] ?? "";
    RET = Temp?.["TYPE"] ?? "";
  } else if (Type == "Carta") {
    Cell1.innerHTML = DATA?.["FECHA"] ?? "";
    Cell2.innerHTML = DATA?.["NOMBRE"] ?? "";
    Cell3.innerHTML = DATA?.["MOTIVO"] ?? "";
  } else if (Type == "Archivo") {
    Cell1.innerHTML = DATA?.["FECHA"] ?? "";
    Cell2.innerHTML = DATA?.["NOMBRE"] ?? "";
    Cell3.innerHTML = DATA?.["type_BLOB"] ?? "";
  } else if (Type == "Date") {
    Cell1.innerHTML = DATA?.["FECHA"];
    if (Date.parse(WEB_DATA['DATE']['FULL'][0]) > Date.parse(DATA?.["FECHA"])) {
      Cell2.innerHTML = "Completa";
    } else {
      Cell2.innerHTML = "Pendiente";
    }
    Cell3.innerHTML = DATA?.["MOTIVO"] ?? "";
  }
  if (Type != "Archivo") {
    let XPREP = "";
    let PREPARE = {Note: "NOTE", Carta: "CART", Date: "DATE"}
    Type = PREPARE?.[Type] ?? "";

    if(Type == "NOTE") XPREP = `['${Type}','${RET}']`;
    else if(Type == "DATE") XPREP = `['${Type}','SIMPLE']`;
    else if(Type == "CART") XPREP = `['${Type}','DEF']`;
    
    Cell4.innerHTML = `
    <div>
    <button type="button" class="Btn_Sty_2" onclick="TO_PRINT(${XPREP},${sub})"><img src="./IMG/Print.svg" alt=""></button>
    <button type="button" class="Btn_Sty_2" onclick="EDIT_TEXT('${Type}',${sub})"><img src="./IMG/Edit.svg" alt=""></button>
    <button type="button" class="Btn_Sty_3" onclick="DELETE_FILE(${sub}, '${Type.toUpperCase()}')"><img src="./IMG/Delete.svg" alt=""></button>
    </div>`;
  } else {
    Cell4.innerHTML = `
    <div>
    <button type="button" class="Btn_Sty_2" onclick="DOWNLOAD_FILE(${sub},'FILE',false)"><img src="./IMG/eye-solid.svg" alt=""></button>
    <button type="button" class="Btn_Sty_2" onclick="DOWNLOAD_FILE(${sub},'FILE',true)"><img src="./IMG/Download.svg" alt=""></button>
    <button type="button" class="Btn_Sty_3" onclick="DELETE_FILE(${sub}, 'FILE')"><img src="./IMG/Delete.svg" alt=""></button>
    </div>`;
  }
}

function Load_NoteList(ID, ReloadAll = true) {
  if (!_Data["PACIENTES"]?.[ID]) return false;
  if (ReloadAll == true) {
    if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
      let SEND = {
        DB_TABLE1: _Config["DATABASE"]["TABLA"]["NOTAS"],
        DB_TABLE2: _Config["DATABASE"]["TABLA"]["CITAS"],
        DB_TABLE3: _Config["DATABASE"]["TABLA"]["CARTAS"],
        DB_TABLE4: _Config["DATABASE"]["TABLA"]["ARCHIVOS"],
        USER: `'${_Data["USUARIO"]["ID"]}'`,
        KEYS: "*",
        WHERE_KEY: "ID",
        WHERE_VALUE: ID,
      };
      SEND_TO_PHP("LOAD_NOTES", SEND);
    }
  }

  setTimeout(() => {
    _Data["DOCUMENTOS"][ID] = _Data["DOCUMENTOS"]?.[ID]
      ? _Data["DOCUMENTOS"][ID]
      : {};

    if (_Data["NOTAS"]["TEMP"] != {}) {
      _Data["NOTAS"][ID] = _Data["NOTAS"]?.[ID]
        ? _Data["NOTAS"][ID]
        : { ..._Data["NOTAS"]["TEMP"] };
      _Data["NOTAS"]["TEMP"] = {};
    }
    if (_Data["CITAS"]["TEMP"] != {}) {
      _Data["CITAS"][ID] = _Data["CITAS"]?.[ID]
        ? _Data["CITAS"][ID]
        : { ..._Data["CITAS"]["TEMP"] };
      _Data["CITAS"]["TEMP"] = {};
    }
    if (_Data["DOCUMENTOS"]["TEMP"]["CARTAS"] != {}) {
      if (_Data["DOCUMENTOS"]?.[ID]?.["CARTAS"] == undefined) {
        _Data["DOCUMENTOS"][ID]["CARTAS"] = Object(
          _Data["DOCUMENTOS"]["TEMP"]["CARTAS"]
        );
      }
    }
    if (_Data["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] != {}) {
      if (_Data["DOCUMENTOS"]?.[ID]?.["ARCHIVOS"] == undefined) {
        _Data["DOCUMENTOS"][ID]["ARCHIVOS"] = Object(
          _Data["DOCUMENTOS"]["TEMP"]["ARCHIVOS"]
        );
      }
    }
    _Data["DOCUMENTOS"]["TEMP"]["CARTAS"] = {};
    _Data["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = {};

    if (_Data["NOTAS"]?.[ID] != undefined) {
      let TABLA = document.querySelectorAll("#TABLE_Notes tr");
      let KEYS = Object.keys(_Data["NOTAS"][ID]);
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      for (
        let Xtem = 0;
        Xtem < Object.keys(_Data["NOTAS"][ID]).length;
        Xtem++
      ) {
        Add_Notelist("Note", _Data["NOTAS"][ID][KEYS[Xtem]], KEYS[Xtem]);
      }
    }
    if (_Data["CITAS"]?.[ID] != undefined) {
      let TABLA = document.querySelectorAll("#TABLE_Dates tr");
      let KEYS = Object.keys(_Data["CITAS"][ID]);
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      for (
        let Xtem = 0;
        Xtem < Object.keys(_Data["CITAS"][ID]).length;
        Xtem++
      ) {
        Add_Notelist("Date", _Data["CITAS"][ID][KEYS[Xtem]], KEYS[Xtem]);
      }
    }
    if (_Data["DOCUMENTOS"]?.[ID] != undefined) {
      let TABLA = document.querySelectorAll("#TABLE_Docs tr");
      let Count_Start = 0;
      let Count_End = 0;
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      TABLA = document.querySelectorAll("#TABLE_Files tr");
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      let KEYS = Object.keys(_Data["DOCUMENTOS"][ID]["CARTAS"]);
      try {
        Count_End = Object.keys(_Data["DOCUMENTOS"][ID]["CARTAS"]).length;
        Count_Start = Count_Start < 50 ? 0 : Count_Start - 50;
        if (Count_End > 0) {
          for (let Xtem = Count_Start; Xtem < Count_End; Xtem++) {
            Add_Notelist(
              "Carta",
              _Data["DOCUMENTOS"][ID]["CARTAS"][KEYS[Xtem]],
              KEYS[Xtem]
            );
          }
        }
      } catch (err) {
        console.warn(err);
      }
      try {
        KEYS = Object.keys(_Data["DOCUMENTOS"][ID]["ARCHIVOS"]);
        Count_End = Object.keys(_Data["DOCUMENTOS"][ID]["ARCHIVOS"]).length;
        Count_Start = Count_Start < 50 ? 0 : Count_Start - 50;
        if (Count_End > 0) {
          for (let Xtem = Count_Start; Xtem < Count_End; Xtem++) {
            Add_Notelist(
              "Archivo",
              _Data["DOCUMENTOS"][ID]["ARCHIVOS"][KEYS[Xtem]],
              KEYS[Xtem]
            );
          }
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }, 2750);
}

function Btn_Togle(Btn, Menu = "") {
  let Btn_State = Btn.getAttribute("class");
  if (Btn_State == "NO_CHECKED") Btn.classList.replace("NO_CHECKED", "CHECKED");
   else Btn.classList.replace("CHECKED", "NO_CHECKED");
  let Elements = [];

  if (Menu == "Pacient_History") {
    let List = [
      "TABLE_Historial_1",
      "TABLE_Historial_2",
      "TABLE_Historial_3",
      "TABLE_Historial_30",
      "TABLE_Historial_3a",
      "TABLE_Historial_3b",
      "TABLE_Historial_3c",
      "TABLE_Historial_3d",
      "TABLE_Historial_3e",
      "TABLE_Historial_3f",
      "TABLE_Historial_3g",
      "TABLE_Historial_4",
      "TABLE_Historial_5",
    ];

    let Table = Btn.parentNode;
    let Table_Name = Table.getAttribute("id");
    for (let x = 0; x < 8; x++) {
      if (List.includes(Table_Name) == false) {
        Table = Table.parentNode;
        Table_Name = Table.getAttribute("id") ?? "";
      } else {
        Table_Name = Table.getAttribute("id");
        break;
      }
    }

    let History_1 = document.getElementById("Info_History_1");
    let History_2 = document.getElementById("Info_History_2");
    let History_3 = document.getElementById("Info_History_3");
    let History_4 = document.getElementById("Info_History_4");
    let History_5 = document.getElementById("Info_History_5");

    if (Table_Name == "TABLE_Historial_1") {
      let Text = String(Btn.innerHTML).toUpperCase();
      if (Btn_State == "NO_CHECKED") {
        let Item = document.createElement("p");
        Item.innerHTML = Text;
        History_1.appendChild(Item);
      } else {
        let Items = History_1.querySelectorAll("p");
        Items.forEach((x) => {
          if (x.innerHTML == Text) {
            x.remove();
          }
        });
      }
    } else if (Table_Name == "TABLE_Historial_2") {
      let Text = String(Btn.innerHTML).toUpperCase();
      if (Btn_State == "NO_CHECKED") {
        let Item = document.createElement("p");
        Item.innerHTML = Text;
        History_2.appendChild(Item);
      } else {
        let Items = History_2.querySelectorAll("p");
        Items.forEach((x) => {
          if (x.innerHTML == Text) {
            x.remove();
          }
        });
      }
    }
    let TH3 = History_3.querySelectorAll("p");
    if (TH3.length < 9) {
      for (let x = 0; x < 9; x++) {
        let XNew = document.createElement("p");
        History_3.appendChild(XNew);
      }
    } else if (Table_Name == "TABLE_Historial_30") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[0].innerHTML = "Vivienda: " + Btn.innerHTML;
    } else if (Table_Name == "TABLE_Historial_3a") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[1].innerHTML = "Calidad: " + Btn.innerHTML;
    } else if (Table_Name == "TABLE_Historial_3b") {
      let text = "";
      let Xtem = document.querySelectorAll(
        '#TABLE_Historial_3b button[class="CHECKED"]'
      ); 
      let Item = History_3.querySelectorAll("p");
      Xtem.forEach((x) => {
        text += `${x.textContent} - `;
      }); 
      text = text.substring(0, text.length - 2);
      Item[2].innerHTML = "SERVICIOS: " + text;
    } else if (Table_Name == "TABLE_Historial_3c") {
      let text = "";
      let Xtem = document.querySelectorAll(
        '#TABLE_Historial_3c button[class="CHECKED"]'
      );
      let Item = History_3.querySelectorAll("p");
      Xtem.forEach((x) => {
        text += `${x.textContent} - `;
      });
      let MORE = document.querySelector('#TABLE_Historial_3c_more').value;
      if(MORE.length > 1){
        text += `${MORE} - `;
      }
      text = text.substring(0, text.length - 2);
      Item[3].innerHTML = "FAUNA: " + text;
    } else if (Table_Name == "TABLE_Historial_3d") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[4].innerHTML = "Inmunizacion: " + Btn.innerHTML;
      Item[5].innerHTML =
        "Alergias: " +
        document.querySelector("#TABLE_Historial_Alergias").value;
    } else if (Table_Name == "TABLE_Historial_3e") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[6].innerHTML = "Tabaco: " + Btn.innerHTML;
    } else if (Table_Name == "TABLE_Historial_3f") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[7].innerHTML = "Alcohol: " + Btn.innerHTML;
    } else if (Table_Name == "TABLE_Historial_3g") {
      Elements = Table.querySelectorAll("button");
      let Item = History_3.querySelectorAll("p");
      Item[8].innerHTML = "Biomasa: " + Btn.innerHTML;
    }
    let TH4 = History_4.querySelectorAll("p");
    if (TH4.length < 6) {
      for (let x = 0; x < 6; x++) {
        let XNew = document.createElement("p");
        History_4.appendChild(XNew);
      }
    } else if (Table_Name == "TABLE_Historial_4") {
      let Item = History_4.querySelectorAll("p");
      let values = document
        .querySelector("#Mn_Pacientes_History > div > div:nth-child(7)")
        .querySelectorAll("input");
      let XDICT = [
        "Menarquia",
        "Embarazos",
        "Nacidos",
        "Pedidas",
        "Abortos",
        "Anticonseptivo",
      ];
      for (let x = 0; x < Item.length; x++) {
        Item[x].innerHTML = XDICT[x] + ": " + values[x].value;
      }
    }
    let TH5 = History_5.querySelectorAll("p");
    if (TH5.length < 5) {
      for (let x = 0; x < 5; x++) {
        let XNew = document.createElement("p");
        History_5.appendChild(XNew);
      }
    } else if (Table_Name == "TABLE_Historial_5") {
      let Item = History_5.querySelectorAll("p");
      let Reset =
        Btn.parentNode.parentNode.parentNode.parentNode.querySelectorAll(
          "button"
        );
      Reset.forEach((X) => {
        X.setAttribute("class", "NO_CHECKED");
      });
      Btn.setAttribute("class", "CHECKED");
      let values_0 = document.querySelectorAll("#TABLE_Historial_5 tr");
      let values_1 = [];
      for (let X = 0; X < values_0.length; X++) {
        let KEY = "";
        try {
          KEY = values_0[X].querySelector(
            'button[class="CHECKED"]'
          ).textContent;
        } catch {
          KEY = "";
        }
        values_1.push(KEY);
      }
      let XDICT = [
        "Priapismo",
        "Alteraciones",
        "Secrecion",
        "Alteraciones",
        "Enfermedades",
      ];
      for (let x = 0; x < Item.length; x++) {
        Item[x].innerHTML = XDICT[x] + ": " + values_1[x];
      }
    }
  }

  if (Menu == "Config") {
    let Nod = Btn.parentNode;
    let Nod_Name = Nod.getAttribute("class");

    if (Nod_Name == "Config_Menu") {
      Elements = Nod.querySelectorAll("button");
      let CMenus = document.querySelector("#CONFIG");
      let CMenus1 = CMenus.querySelectorAll('div[id]');
      CMenus1.forEach((x) => {
        x.classList.add("Hiden");
      });

      if (Btn.innerText == "Usuario") document.getElementById("CONFIG_USER").classList.remove("Hiden");
      if (Btn.innerText == "Consultorio") document.getElementById("CONFIG_CONSULTORY").classList.remove("Hiden");
      if (Btn.innerText == "Horario") document.getElementById("CONFIG_TIME").classList.remove("Hiden");
      if (Btn.innerText == "General") document.getElementById("CONFIG_GENERAL").classList.remove("Hiden");
      if (Btn.innerText == "DataBase") document.getElementById("CONFIG_DB").classList.remove("Hiden");
    }
    if (Nod_Name == "Config_User_Gender") Elements = Nod.querySelectorAll("button");
    
  }

  Elements.forEach((x) => {
    x.setAttribute("class", "NO_CHECKED");
  });
  if (Btn_State == "NO_CHECKED") {
    Btn.classList.replace("NO_CHECKED", "CHECKED");
  } else {
    Btn.classList.replace("CHECKED", "NO_CHECKED");
  }
  Btn_State = Btn.getAttribute("class");
}

function Mn_Note(ACCION, TIPO) {
  let NOTE = undefined;
  if (TIPO == "N_FAST") NOTE = document.querySelector("#FNOTE");
  else if (TIPO == "N_EVO") NOTE = document.querySelector("#ENOTE");
  else if (TIPO == "N_COMPLETE") NOTE = document.querySelector("#CNOTE");
  else if (TIPO == "N_REF") NOTE = document.querySelector("#TRNOTE");
  else if (TIPO == "N_EGRESO") NOTE = document.querySelector("#EGNOTE");
  else if (TIPO == "RECIPE") NOTE = document.querySelector("#RECIPE");
  else return false;
  
  let DOM = NOTE.querySelectorAll("*[ITEM]");

  if (ACCION == 0) {
    NOTE.classList.remove("Hiden");
    NOTE.querySelector("input[ITEM='DOCTOR']").value =
      _Data["USUARIO"]["ID"];
    NOTE.querySelector("input[ITEM='ID']").value =
      _Data["PACIENTES"]?.["SELECTED"]?.["ID"] ?? "";
  } else if (ACCION == -1) {
    DOM.forEach((Xtem) => {
      if (Xtem.getAttribute("type") == "checkbox") {
        Xtem.checked = false;
      } else {
        Xtem.value = "";
      }
    });
    NOTE.classList.add("Hiden");
    
    if(_Data["PACIENTES"]?.["SELECTED"] == undefined){ _Data["PACIENTES"]["SELECTED"] = {};}
    _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  } else if (ACCION == 1) {
    let DATA = {};
    let OTROS = {};
    let NOTROS = ["DOCTOR", "FECHA", "HORA", "TEXTO", "MOTIVO", "ID"];
    DOM.forEach((Xtem) => {
      let Key = String(Xtem.getAttribute("item")).toUpperCase();
      DATA[Key] = String(Xtem.value).toUpperCase();
      if (NOTROS.includes(Key) == false) {
        if (Xtem.getAttribute("type") != "checkbox") {
          if (Xtem.value != undefined && String(Xtem.value).trim() != "") {
            OTROS[Key] = String(Xtem.value).toUpperCase();
          }
        } else {
          if (Xtem.checked == true) OTROS[Key] = 1;
        }
      }
    })
    DATA["FECHA"] = WEB_DATA['DATE']['FULL'][0];
    DATA["HORA"] = WEB_DATA['TIME']['FULL'];
    OTROS = JSON.stringify(OTROS);
    OTROS.replace("{", "").replace("}", "");
    if (DATA?.["TEXTO"] == undefined) {
      DATA["TEXTO"] = " ";
    }

    if (DATA["TEXTO"].length < 1 || DATA["ID"].length < 1) {
      return false;
    }

    let XWHERE = "";
    let SET = "";
    let VALUES = ``;

    if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
      if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == 'true') {
        let XDATA =
          _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
            _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
          ];
        VALUES = "";
        XWHERE = `ID='${_Data["PACIENTES"]["SELECTED"]["ID"]}' AND HORA='${XDATA["HORA"]}' AND FECHA='${XDATA["FECHA"]}'`;
        SET = `ID='${DATA.ID}', FECHA='${DATA.FECHA}', HORA='${DATA.HORA}', DOCTOR='${DATA.DOCTOR}', MOTIVO='${DATA.MOTIVO}', TEXTO='${DATA.TEXTO}', OTROS='${OTROS}'`;
        _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
          _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
        ] = { ...DATA, OTROS: OTROS };
        setTimeout(() => {
          Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
        }, 250);
      }
      else {
        VALUES = `'${DATA.ID}','${DATA.FECHA}','${DATA.HORA}','${DATA.DOCTOR}','${DATA.MOTIVO}','${DATA.TEXTO}','${OTROS}'`;
        setTimeout(() => {
          Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
        }, 250);
      }
    } else {
      VALUES = `'${DATA.ID}','${DATA.FECHA}','${DATA.HORA}','${DATA.DOCTOR}','${DATA.MOTIVO}','${DATA.TEXTO}','${OTROS}'`;
      setTimeout(() => {
        Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
      }, 550);
    }

    if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
      let SEND = {
        DB_HOST: _Config["DATABASE"]["HOST"],
        DB_USER: _Config["DATABASE"]["USER"],
        DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
        DB_NAME: _Config["DATABASE"]["NOMBRE"],
        DB_TABLE: _Config["DATABASE"]["TABLA"]["NOTAS"],
        TABLE_KEYS: "ID,FECHA,HORA,DOCTOR,MOTIVO,TEXTO,OTROS",
        VALUES: VALUES,
        WHERE: XWHERE,
        SET: SET,
      };
      SEND_TO_PHP("ADD_NOTE", SEND);
    }
    if (_Data["PACIENTES"]["SELECTED"]["EDIT"] == "false") {
      if (_Data["NOTAS"]?.[DATA.ID] == undefined) {
        _Data["NOTAS"][DATA.ID] = {};
      }
      try {
        let NUM = Object.keys(_Data["NOTAS"][DATA.ID]).length;
        if (_Data["NOTAS"][DATA.ID][NUM] == undefined) {
          _Data["NOTAS"][DATA.ID][NUM] = {
            ID: DATA.ID,
            FECHA: DATA.FECHA,
            HORA: DATA.HORA,
            DOCTOR: DATA.DOCTOR,
            MOTIVO: DATA.MOTIVO,
            TEXTO: DATA.TEXTO,
            OTROS: OTROS,
          };
        } else {
          NUM += 1;
          while (true) {
            if (_Data["NOTAS"][DATA.ID][NUM] == undefined) {
              _Data["NOTAS"][DATA.ID][NUM] = {
                ID: DATA.ID,
                FECHA: DATA.FECHA,
                HORA: DATA.HORA,
                DOCTOR: DATA.DOCTOR,
                MOTIVO: DATA.MOTIVO,
                TEXTO: DATA.TEXTO,
                OTROS: OTROS,
              };
            }
          }
        }
        Add_Notelist("Note", _Data["NOTAS"][DATA.ID][NUM], NUM);
      } catch {
        _Data["NOTAS"][DATA.ID][0] = DATA;
      }
    }

    DOM.forEach((Xtem) => {
      if (Xtem.getAttribute("type") == "checkbox") {
        Xtem.checked = false;
      } else {
        Xtem.value = "";
      }
    });
    NOTE.classList.add("Hiden");

    _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  }
}

function Mn_Doc(ACCION, TIPO) {
  let DOC = undefined;
  if (TIPO == "CARTA")DOC = document.querySelector("#CART");
  else if (TIPO == "CARTA2"){
    DOC = document.querySelector("#CART");
    GOTO_MENU("Cart2", 1);
  }
  else if (TIPO == "PLANTILLA")DOC = document.querySelector("#CART2");
  else if (TIPO == "IMPORT")DOC = document.querySelector("#IMPORT_FILE");
  else if (TIPO == "SELECT")DOC = document.querySelector("#IMPORT_FILE_R");
  else if (TIPO == "JSON")DOC = document.querySelector("#IMPORT_JSON");
  else return false;


  let DOM = DOC.querySelectorAll("*[ITEM]");

  if (ACCION == 0) {
    DOC.classList.remove("Hiden");
    try {
      DOC.querySelector('input[ITEM="DOCTOR"]').value =
        _Data["USUARIO"]["ID"];
      DOC.querySelector('input[ITEM="ID"]').value =
        _Data["PACIENTES"]["SELECTED"]["ID"] ?? "";
    } catch (err) {}
  } else if (ACCION == -1) {
    DOC.classList.add("Hiden");
    DOM.forEach((Xtem) => {
      Xtem.value = "";
    });

    if (TIPO == "IMPORT") {
      let SELECT = DOC.querySelector('input[ITEM="ARCHIVO"]');
      Import_File(SELECT);
    } else if (TIPO == "SELECT") {
      let SELECT = DOC.querySelector('input[ITEM="ARCHIVO"]');
      Import_File(SELECT);
    }

    if(_Data["PACIENTES"]?.["SELECTED"] == undefined){ _Data["PACIENTES"]["SELECTED"] = {};}
    _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  } else if (ACCION == 1) {
    let DATA = {};
    DATA["DOCTOR"] = _Data["USUARIO"]["ID"];
    if (_Data["PACIENTES"]["SELECTED"]["ID"] != "") {
      DATA["ID"] = _Data["PACIENTES"]["SELECTED"]["ID"];
    } else {
      DATA["ID"] = _Data["USUARIO"]["ID"];
    }
    DATA["FECHA"] = WEB_DATA['DATE']['FULL'][0];
    DATA["HORA"] = WEB_DATA['TIME']['FULL'];
    if (TIPO == "CARTA") {
      DATA["TIPO"] = "CARTA";
    } else if (TIPO == "PLANTILLA") {
      DATA["TIPO"] = "P";
    } else if (TIPO == "IMPORT") {
      if (_Data["PACIENTES"]["SELECTED"]["ID"] == "") {
        Mn_Doc(-1, "IMPORT");
        return false;
      }
      DATA["TIPO"] = "FILE";
    } else if (TIPO == "JSON") {
      let TEXT = DOC.querySelector("textarea").value;
      if (TEXT.length < 3) {
        Mn_Doc(-1, "JSON");
        return false;
      }
    }

    DOM.forEach((Xtem) => {
      let KEY = Xtem.getAttribute("ITEM");
      DATA[KEY] = String(Xtem.value);
    });

    if (TIPO != "SELECT") {
      if (DATA["TEXTO"].length < 2 && DATA["NOMBRE"].length < 2) {
        return false;
      }
      let VALUES = "";
      let SET = "";
      let XWHERE = "";

      if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
        if (_Data["PACIENTES"]["SELECTED"]["EDIT"] == true) {
          let XDATA =
            _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
              "CARTAS"
            ][_Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]];
          XWHERE = `ID='${XDATA["ID"]}' AND FECHA='${XDATA["FECHA"]}' AND HORA='${XDATA["HORA"]}'`;
          SET = `ID='${DATA.ID}',DOCTOR='${DATA.DOCTOR}',NOMBRE='${DATA.NOMBRE}',FECHA='${DATA.FECHA}',HORA='${DATA.HORA}',TIPO='${DATA.TIPO}',MOTIVO='${DATA.MOTIVO}',TEXTO='${DATA.TEXTO}'`;
          _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
            "CARTAS"
          ][_Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"]] = DATA;
          setTimeout(() => {
            Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
          }, 250);
        } else {
          VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}'`;
          setTimeout(() => {
            Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
          }, 250);
        }
      } else {
        VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}'`;
        setTimeout(() => {
          Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
        }, 550);
      }

      if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
        let SEND = {
          DB_HOST: _Config["DATABASE"]["HOST"],
          DB_USER: _Config["DATABASE"]["USER"],
          DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
          DB_NAME: _Config["DATABASE"]["NOMBRE"],
          DB_TABLE: _Config["DATABASE"]["TABLA"]["CARTAS"],
          TABLE_KEYS: "ID,DOCTOR,NOMBRE,FECHA,HORA,TIPO,MOTIVO,TEXTO",
          EDIT: _Data["PACIENTES"]?.["SELECTED"]?.["EDIT"],
          VALUES: VALUES,
          WHERE: XWHERE,
          SET: SET,
        };
        SEND_TO_PHP("ADD_NOTE", SEND);
      }

      if (_Data["PACIENTES"]["SELECTED"]["EDIT"] == "false") {
        if (_Data["DOCUMENTOS"]?.[DATA.ID] == undefined) {
          _Data["DOCUMENTOS"][DATA.ID] = {};
        }
        if (_Data["DOCUMENTOS"]?.[DATA.ID]["CARTAS"] == undefined) {
          _Data["DOCUMENTOS"][DATA.ID]["CARTAS"] = {};
        }
        try {
          if (_Data["PACIENTES"]?.["SELECTED"]?.["EDIT"] == 'true') {
            _Data["DOCUMENTOS"][DATA.ID]["CARTAS"][
              _Data["PACIENTES"]["SELECTED"]["EDIT_ID"]
            ] = DATA;
          } else {
            let NUM = Object.keys(
              _Data["DOCUMENTOS"][DATA.ID]["CARTAS"]
            ).length;
            if (_Data["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] == undefined) {
              _Data["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] = DATA;
            } else {
              NUM += 1;
              while (true) {
                if (
                  _Data["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] == undefined
                ) {
                  _Data["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] = DATA;
                  break;
                }
              }
            }

            Add_Notelist("Carta", DATA, NUM);
          }
        } catch {
          _Data["DOCUMENTOS"][DATA.ID]["CARTAS"][0] = DATA;
        }
      }

      DOC.classList.add("Hiden");
      DOM.forEach((Xtem) => {
        Xtem.value = "";
      });
    } else {
      DOC.classList.add("Hiden");
    }

    _Data["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  }
}

function Import_File(self) {
  let FILES = self;
  //let TEXT = self.parentNode.parentNode.querySelector("label > span");

  if (FILES.files.length > 0) {
    //TEXT.textContent = `${FILES.files.length} Archivo seleccionado`;
  } else {
    //TEXT.textContent = `Seleccionar Archivo`;
  }
}

function PreLoad_Plantillas() {
  let TEMP = { ..._Data["PLANTILLAS"] };
  let KEYS = Object.keys(TEMP["LINEA"]);
  _Data["PLANTILLAS"]["LINEA"] = {};
  KEYS.forEach((Xtem) => {
    if (TEMP["LINEA"][Xtem] != "") {
      try {
        let DATA = JSON.parse(TEMP["LINEA"][Xtem]["OTROS"]);
        let XCategory = DATA?.["CATEGORY"] ? DATA["CATEGORY"] : "OTROS";
        if (_Data["PLANTILLAS"]["LINEA"]?.[XCategory] == undefined) _Data["PLANTILLAS"]["LINEA"][XCategory] = {};
        let LEN = Object.keys(_Data["PLANTILLAS"]["LINEA"][XCategory]).length;
        _Data["PLANTILLAS"]["LINEA"][XCategory][LEN] = TEMP["LINEA"][Xtem];
      } catch (err) {
        console.warn(err);
      }
    }
  });
  KEYS = Object.keys(TEMP["LOCAL"]);
  if (KEYS.includes("OTROS") == false) _Data["PLANTILLAS"]["LOCAL"] = {};
  KEYS.forEach((Xtem) => {
    if (TEMP["LOCAL"][Xtem] != "") {
      let DATA = JSON.parse(TEMP["LOCAL"][Xtem]["OTROS"]);
      let XCategory = DATA["CATEGORY"] ?? "OTROS";
      if (_Data["PLANTILLAS"]["LOCAL"]?.[XCategory] == undefined) _Data["PLANTILLAS"]["LOCAL"][XCategory] = {};
      let LEN = Object.keys(_Data["PLANTILLAS"]["LOCAL"][XCategory]).length;
      _Data["PLANTILLAS"]["LOCAL"][XCategory][LEN] = TEMP["LOCAL"][Xtem];
    }
  });
}
  
function Load_Plantilla(Type, Category, Index) {
  let DOM_1 = document.querySelector("#CART");
  let DOM_2 = document.querySelector("#CART2");
  let Menus = DOM_2.querySelector('ul[ITEM="OPTIONS"]');

  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let List = undefined;
  if (Type == 0) {
    List = _Data["PLANTILLAS"]?.["LINEA"]?.[XCategory[Category]];
  } else if (Type == 1) {
    List = _Data["PLANTILLAS"]?.["LOCAL"]?.[XCategory[Category]];
  }
  if (List == undefined) {
    List = {};
  }

  if (Index == 0) {
    Menus.innerHTML = "";
    let Number = Object.keys(List).length;
    for (let x = 0; x < Number; x++) {
      let ITEM = document.createElement("li");
      let TEXT = List[x]?.["NOMBRE"] ?? "...";
      let OPT = `<button type="button" class="Btn_Sty_0" onclick="Load_Plantilla(${Type},${Category},${
        x + 1
      })">${TEXT}</button>`;
      ITEM.innerHTML = OPT;
      Menus.appendChild(ITEM);
    }
    if (Type == 1) {
      let ITEM = document.createElement("li");
      let TEXT = `<button type="button" class="Btn_Sty_4" onclick="Save_Plantilla(${Type},${Category})"><img src="./IMG/Add.svg" alt="">Agregar Plantilla Actual</button>`;
      ITEM.innerHTML = TEXT;
      Menus.appendChild(ITEM);
    }
  } else {
    let ITEMS = DOM_1.querySelectorAll("*[ITEM]");
    let KEYS = Object.keys(List[Index - 1]);

    let BLACKLIST = ["ID", "DOCTOR"];
    ITEMS.forEach((Xtem) => {
      let KEY = Xtem.getAttribute("ITEM");
      if (KEYS.includes(KEY) && BLACKLIST.includes(KEY) == false) {
        Xtem.value = List[Index - 1][KEY];
      }
    });
  }
}

function Save_Plantilla(Type, Category) {
  let DOM_1 = document.querySelector("#CART .Cn_Note_Conset");
  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let ITEMS = DOM_1.querySelectorAll("*[ITEM]");
  let DATA = {};

  ITEMS.forEach((Xtem) => {
    let KEY = Xtem.getAttribute("ITEM");
    DATA[KEY] = Xtem.value;
  });

  DATA["OTROS"] = `{"CATEGORY": "${XCategory[Category]}"}`;
  DATA["TIPO"] = "PLANTILLA";

  if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
    DATA["FECHA"] = WEB_DATA['DATE']['FULL'][0];
    DATA["HORA"] = WEB_DATA['TIME']['FULL'];

    let VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}','${DATA.OTROS}'`;

    let SEND = {
      DB_HOST: _Config["DATABASE"]["HOST"],
      DB_USER: _Config["DATABASE"]["USER"],
      DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
      DB_NAME: _Config["DATABASE"]["NOMBRE"],
      DB_TABLE: _Config["DATABASE"]["TABLA"]["CARTAS"],
      TABLE_KEYS: "ID,DOCTOR,NOMBRE,FECHA,HORA,TIPO,MOTIVO,TEXTO,OTROS",
      VALUES: VALUES,
      WHERE: "",
      SET: "",
    };
    SEND_TO_PHP("ADD_NOTE", SEND);
  }

  DATA["ID"] = DATA?.["ID"] != undefined || DATA?.["ID"] != "" ? "" : "";
  DATA["DOCTOR"] =
    DATA?.["DOCTOR"] != undefined || DATA?.["DOCTOR"] != "" ? "" : "";
  _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]] = _Data[
    "PLANTILLAS"
  ]?.["LOCAL"]?.[XCategory[Category]]
    ? _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]]
    : {};
  if (_Data["PLANTILLAS"]["LOCAL"][XCategory[Category]] != {}) {
    let LEN = Object.keys(
      _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]]
    ).length;
    _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]][LEN] = DATA;
    Load_Plantilla(Type, Category, 0);
  }
}

function Delete_Plantilla(Type, Category, Index) {
  if (Type == 0) {
    return true;
  }
  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let Temp = _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]][Index];
  let KEYS = `ID,DOCTOR,NOMBRE,FECHA,HORA,TIPO,MOTIVO`;
  let DATA = `'${_Data["USUARIO"]["ID"]}','${Temp["NOMBRE"]}','${Temp["FECHA"]}','${Temp["HORA"]}','PLANTILLA','${Temp["HORA"]}','${Temp["MOTIVO"]}'`;

  _Data["PLANTILLAS"]["LOCAL"][XCategory[Category]] = {};

  if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: _Config["DATABASE"]["HOST"],
      DB_USER: _Config["DATABASE"]["USER"],
      DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
      DB_NAME: _Config["DATABASE"]["NOMBRE"],
      DB_TABLE: _Config["DATABASE"]["TABLA"]["CARTAS"],
      KEYS: KEYS,
      VALUES: DATA,
    };
    SEND_TO_PHP("DELETE_PLANTILLA", SEND);
  }
  Load_Plantilla(Type, Category, 0);
}

function READ_TEXT(Menu, ID) {
  let Mn = document.querySelector("#Mn_READER");
  if (Menu == 0) {
    Mn.classList.add("Hiden");
    return false;
  } else {
    Mn.classList.remove("Hiden");
  }

  let DOM = document.querySelector("#Mn_READER textarea");
  let TEXT = "";
  let Filter = {};

  if (Menu == "Note") {
    if(_Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false;
    }
    let SET = _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID];
    let KEYS = Object.keys(SET);

    KEYS.forEach((Xtem) => {
      if (Xtem == "OTROS") {
        let DATA = JSON.parse(SET[Xtem]);
        let KEYS2 = Object.keys(DATA);
        KEYS2.forEach((Temp) => {
          TEXT += `${Temp}: ${DATA[Temp]}\n`;
        });
      } else {
        TEXT += `${Xtem}: ${SET[Xtem]}\n`;
      }
    });
  } else if (Menu == "Date") {
    if(_Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false;
    }
    let SET = _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID];
    let KEYS = Object.keys(SET);

    KEYS.forEach((Xtem) => {
      if (Xtem == "OTROS") {
        let DATA = JSON.parse(SET[Xtem]);
        let KEYS2 = Object.keys(DATA);
        KEYS2.forEach((Temp) => {
          TEXT += `${Temp}: ${DATA[Temp]}\n`;
        });
      } else {
        TEXT += `${Xtem}: ${SET[Xtem]}\n`;
      }
    });
  } else if (Menu == "Carta" || Menu == "Archivo") {
    let XMENU = Menu == "Carta" ? "CARTAS" : "ARCHIVOS";
    if(_Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][XMENU][ID] == undefined){
      return false;
    }
    let SET = _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][XMENU][ID];
    let KEYS = Object.keys(SET);

    KEYS.forEach((Xtem) => {
      if (Xtem == "OTROS") {
        try {
          let DATA = JSON.parse(SET[Xtem]);
          let KEYS2 = Object.keys(DATA);
          KEYS2.forEach((Temp) => {
            TEXT += `${Temp}: ${DATA[Temp]}\n`;
          });
        } catch (err) {
          console.warn(err);
        }
      } else {
        TEXT += `${Xtem}: ${SET[Xtem]}\n`;
      }
    });
  }

  DOM.textContent = TEXT;
}

function EDIT_TEXT(Menu, ID) {
  _Data["PACIENTES"]["SELECTED"]["EDIT"] = 'true';
  _Data["PACIENTES"]["SELECTED"]["EDIT_ID"] = ID;
  let DOM = undefined;
  let ITEMS = undefined;
  let SET = {};
  let KEYS = [];
  let DATA = {};
  let SUBITEMS = [];
  let SUBKEYS = [];

  if (Menu == "Note") {
    SET = _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID];
    KEYS = Object.keys(SET);
    SUBITEMS = JSON.parse(SET["OTROS"]);
    SUBKEYS = Object.keys(SUBITEMS);
    if (SUBITEMS?.["TYPE"] != undefined) {
      let TYPE = String(SUBITEMS["TYPE"]).toUpperCase();
      if (TYPE == "SIMPLE") DOM = document.querySelector("#FNOTE");
      else if (TYPE == "EVOLUCION") DOM = document.querySelector("#ENOTE");
      else if (TYPE == "COMPLETA") DOM = document.querySelector("#CNOTE");
      else if (TYPE == "REFERENCIA") DOM = document.querySelector("#TRNOTE");
      else if (TYPE == "EGRESO") DOM = document.querySelector("#EGNOTE");
      else if (TYPE == "RECETA") DOM = document.querySelector("#RECIPE");
      
    } else DOM = document.querySelector("#ENOTE");
    
    ITEMS = DOM.querySelectorAll("*[ITEM]");

    _Data["PACIENTES"]["SELECTED"]["EDIT"] = 'true';
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
  } else if (Menu == "Carta") {
    DOM = document.querySelector("#CART");
    ITEMS = DOM.querySelectorAll("*[ITEM]");
    SET = _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][ID];
    KEYS = Object.keys(SET);

    _Data["PACIENTES"]["SELECTED"]["EDIT"] = 'true';
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
  } else if (Menu == "Date") {
    DOM = document.querySelector("#DATES_NEW");
    ITEMS = DOM.querySelectorAll("*[ITEM]");
    if(_Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false
    }
    SET = _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][ID];
    KEYS = Object.keys(SET);

    _Data["PACIENTES"]["SELECTED"]["EDIT"] = 'true';
    _Data["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
  }

  if (ITEMS != undefined) {
    let HAS_OTROS = SET?.["OTROS"] != undefined ? true : false;
    if (HAS_OTROS == true && SUBITEMS.length < 2) {
      try {
        SUBITEMS = JSON.parse(SET["OTROS"]);
        SUBKEYS = Object.keys(SUBITEMS);
      } catch {
        HAS_OTROS = false;
      }
    }

    ITEMS.forEach((Xtem) => {
      let KEY = Xtem.getAttribute("ITEM");
      if (KEYS.includes(KEY)) {
        if (Xtem.getAttribute("type") == "checkbox") {
          Xtem.checked = SET[KEY];
        } else {
          Xtem.value = SET[KEY];
        }
      } else {
        if (HAS_OTROS == true) {
          if (Xtem.getAttribute("type") == "checkbox") {
            if (SUBITEMS?.[String(KEY).toUpperCase()] == "1") {
              Xtem.checked = true;
            }
          } else {
            Xtem.value = SUBITEMS?.[String(KEY).toUpperCase()] ?? "";
          }
        }
      }
    });
    DOM.classList.remove("Hiden");
  }
}

function CAMARA() {
  let CAM = document.querySelector('#CAMARA');
  const video = CAM.querySelector("video");
  const canvas = CAM.querySelector("canvas");
  const snap = CAM.querySelector("#snap");
  const closesnap = CAM.querySelector("#closesnap");
  CAM.classList.remove('Hiden');
  const constraints = {
    audio: false,
    video: { width: 1280, height: 720 },
  };

  // Access webcam
  async function init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {}
  }

  // Success
  function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
  }

  // Load init
  init();

  // Draw image
  var context = canvas.getContext("2d");
  snap.addEventListener("click", function () {
    context.drawImage(video, 275, 0, 730, 720, 0, 0, 360, 360);

    let TIMG = canvas.toDataURL("image/png");
    CAM.querySelector("#CAM_IMG").src = TIMG;

    window.stream = null;
    video.srcObject = null;
    CAM.classList.add("Hiden");
  });

  closesnap.addEventListener("click", function () {
    window.stream = null;
    video.srcObject = null;
    CAM.classList.add("Hiden");
  });
}

function SEND_FILE() {
  if (_Data["PACIENTES"]["SELECTED"]["ID"].length < 3) return false;
  let DOM = document.querySelector("#IMPORT_FILE");
  let NOMBRE = DOM.querySelector('input[ITEM="NOMBRE"]').value;
  let ARCHIVO = DOM.querySelector('*[ITEM="ARCHIVO"]').files[0];
  if (ARCHIVO == undefined || NOMBRE.length < 1) return false;

  let DATE1 = `${WEB_DATA['DATE']['YY']}${WEB_DATA['DATE']['MM'][0]}${WEB_DATA['DATE']['DD'][0]}`;
  let DATE2 = `${WEB_DATA['TIME']['HH']}${WEB_DATA['TIME']['MM']}${WEB_DATA['TIME']['SS']}`;
  let EXTENCION = String(ARCHIVO["name"]).split(".");
  EXTENCION = `.${EXTENCION[EXTENCION.length - 1]}`;
  let ARCHIVO2 = `${_Data["PACIENTES"]["SELECTED"]["ID"]}_${DATE1}_${DATE2}_${NOMBRE}`;

  let SEND = {
    DB_TABLE: _Config["DATABASE"]["TABLA"]["ARCHIVOS"],
    TABLE_KEYS: `ID,FECHA,HORA,NOMBRE,ARCHIVO,DATA_BLOB,type_BLOB`,
    ID: _Data["PACIENTES"]["SELECTED"]["ID"],
    FECHA: WEB_DATA['DATE']['FULL'][0],
    HORA: WEB_DATA['TIME']['FULL'],
    NOMBRE: NOMBRE,
    EXTENCION: EXTENCION,
    ARCHIVO: ARCHIVO2,
  };
  SEND_TO_PHP("SEND_FILE", SEND, ARCHIVO);

  let TYPES = {
    ".aac":"audio/aac",
    ".abw":"application/x-abiword",
    ".arc":"application/x-freearc",
    ".avif":"image/avif",
    ".avi":"video/x-msvideo",
    ".azw":"application/vnd.amazon.ebook",
    ".bin":"application/octet-stream",
    ".bmp":"image/bmp",
    ".bz":"application/x-bzip",
    ".bz2":"application/x-bzip2",
    ".cda":"application/x-cdf",
    ".csh":"application/x-csh",
    ".css":"text/css",
    ".csv":"text/csv",
    ".doc":"application/msword",
    ".docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".eot":"application/vnd.ms-fontobject",
    ".epub":"application/epub+zip",
    ".gz":"application/gzip",
    ".gif":"image/gif",
    ".htm":"text/html",
    ".ico":"image/vnd.microsoft.icon",
    ".ics":"text/calendar",
    ".jar":"application/java-archive",
    ".jpeg":"image/jpeg",
    ".jpg":"image/jpeg",
    ".js":"text/javascript",
    ".json":"application/json",
    ".jsonld":"application/ld+json",
    ".mid":"audio/midi",
    ".mjs":"text/javascript",
    ".mp3":"audio/mpeg",
    ".mp4":"video/mp4",
    ".mpeg":"video/mpeg",
    ".mpkg":"application/vnd.apple.installer+xml",
    ".odp":"application/vnd.oasis.opendocument.presentation",
    ".ods":"application/vnd.oasis.opendocument.spreadsheet",
    ".odt":"application/vnd.oasis.opendocument.text",
    ".oga":"audio/ogg",
    ".ogv":"video/ogg",
    ".ogx":"application/ogg",
    ".opus":"audio/opus",
    ".otf":"font/otf",
    ".png":"image/png",
    ".pdf":"application/pdf",
    ".php":"application/x-httpd-php",
    ".ppt":"application/vnd.ms-powerpoint",
    ".pptx":"application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".rar":"application/vnd.rar",
    ".rtf":"application/rtf",
    ".sh":"application/x-sh",
    ".svg":"image/svg+xml",
    ".tar":"application/x-tar",
    ".tif":"image/tiff",
    ".ts":"video/mp2t",
    ".ttf":"font/ttf",
    ".txt":"text/plain",
    ".vsd":"application/vnd.visio",
    ".wav":"audio/wav",
    ".weba":"audio/webm",
    ".webm":"video/webm",
    ".webp":"image/webp",
    ".woff":"font/woff",
    ".woff2":"font/woff2",
    ".xhtml":"application/xhtml+xml",
    ".xls":"application/vnd.ms-excel",
    ".xlsx":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xml":"application/xml",
    ".xul":"application/vnd.mozilla.xul+xml",
    ".zip":"application/zip",
    ".3gp":"video/3gpp",
    ".3g2":"video/3gpp2",
    ".7z":"application/x-7z-compressed",  
  }
  console.log(EXTENCION)
  let DATA = {
    FECHA: WEB_DATA['DATE']['FULL'][0],
    HORA: WEB_DATA['TIME']['FULL'],
    NOMBRE: NOMBRE,
    EXTENCION: EXTENCION,
    ARCHIVO: ARCHIVO2,
    type_BLOB: TYPES?.[EXTENCION] ?? "",
  };
  let NUM = Object.keys(_Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["ARCHIVOS"]).length;
  Add_Notelist("Archivo", DATA, NUM);
  Mn_Doc(-1, "IMPORT");
}

function DOWNLOAD_FILE(Index, Type, ToDownload = false) {
  if (_Data["PACIENTES"]["SELECTED"]["ID"].length < 3) return false;
  let ARCHIVO = "";
  if (Type == "FILE") ARCHIVO = _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["ARCHIVOS"][Index]["ARCHIVO"];

  if (_Config["CONEXION"]["METHOD"] != "LOCAL" && ARCHIVO != "") {
    let SEND = {
      DB_TABLE: _Config["DATABASE"]["TABLA"]["ARCHIVOS"],
      ID: _Data["PACIENTES"]["SELECTED"]["ID"],
      ARCHIVO: ARCHIVO,
    };
    SEND_TO_PHP("DOWNLOAD_FILE", SEND);
  }

  let RESICLE = setInterval(() => {
    if (_Data["DOWNLOAD"] != undefined) {
      clearInterval(RESICLE);

      let file = URL.createObjectURL(_Data["DOWNLOAD"]);
      let a = document.createElement("a");
      a.target = "_blank";
      if (ToDownload == true) a.download = "";
      a.href = file;
      a.click();

      setTimeout(() => {
        _Data["DOWNLOAD"] = undefined;
        file = null;
        a = null;
      }, 500);
    }
  }, 250);
}

function DELETE_FILE(Index, Type) {
  if (_Data["PACIENTES"]["SELECTED"]["ID"].length < 3) {
    return false;
  }

  if (confirm("Esta seguro de eliminar este elemento?") != true) {
    return false;
  }

  let ARCHIVO = "";
  let DB_TABLE = "";
  let FECHA = "";
  let HORA = "";

  if (Type == "FILE") {
    ARCHIVO =
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
        "ARCHIVOS"
      ][Index]["ARCHIVO"];
    DB_TABLE = _Config["DATABASE"]["TABLA"]["ARCHIVOS"];
  } else if (Type == "CARTA") {
    ARCHIVO =
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["NOMBRE"];
    FECHA =
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["FECHA"];
    HORA =
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["HORA"];
    DB_TABLE = _Config["DATABASE"]["TABLA"]["CARTAS"];
  } else if (Type == "DATE") {
    if(_Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]]?.[Index]?.["MOTIVO"] == undefined){
      return false;
    }
    ARCHIVO = _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index]["MOTIVO"];
    FECHA =
      _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index][
        "FECHA"
      ];
    HORA =
      _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index]["HORA"];
    DB_TABLE = _Config["DATABASE"]["TABLA"]["CITAS"];
  } else if (Type == "NOTE") {
    ARCHIVO =
      _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index][
        "MOTIVO"
      ];
    FECHA =
      _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index][
        "FECHA"
      ];
    HORA =
      _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index]["HORA"];
    DB_TABLE = _Config["DATABASE"]["TABLA"]["NOTAS"];
  } else if (Type == "PLANTILLA") {
  }

  if (_Config["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: _Config["DATABASE"]["HOST"],
      DB_USER: _Config["DATABASE"]["USER"],
      DB_PASSWORD: _Config["DATABASE"]["PASSWORD"],
      DB_NAME: _Config["DATABASE"]["NOMBRE"],
      DB_TABLE: DB_TABLE,
      TYPE: Type,
      ID: _Data["PACIENTES"]["SELECTED"]["ID"],
      FECHA: FECHA,
      HORA: HORA,
      ARCHIVO: ARCHIVO,
    };
    SEND_TO_PHP("DELETE_FILE", SEND);
  }
  setTimeout(() => {
    if (Type == "FILE") {
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
        "ARCHIVOS"
      ][Index] = undefined;
    }
    if (Type == "CARTA") {
      _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ] = undefined;
    }
    if (Type == "DATE") {
      _Data["CITAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index] =
        undefined;
    }
    if (Type == "NOTE") {
      _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]][Index] =
        undefined;
    }
    if (Type == "PLANTILLA") {
    }
    Load_NoteList(_Data["PACIENTES"]["SELECTED"]["ID"], false);
  }, 100);
}

function SEARCH_FILE(Type, InLocal = true) {
  let SEARCH = undefined;

  if (Type == "FILE") {
    SEARCH = document.querySelector(
      "#Mn_Pacientes_Docs input[type=search]"
    ).value;
  } else if (Type == "NOTA") {
    SEARCH = document.querySelector(
      "#Mn_Pacientes_Notes .Cn_Pacientes_Notes input[type=search]"
    ).value;
  } else if (Type == "CARTA") {
    SEARCH = document.querySelector(
      "#Mn_Pacientes_Docs > div > details:nth-child(6) > div > input[type=search]"
    ).value;
  }

  if (InLocal == true) {
    let XDATA = undefined;
    let LEN = 0;
    let TABLE = undefined;

    if (Type == "FILE") {
      XDATA =
        _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
          "ARCHIVOS"
        ];
      LEN = Object.keys(XDATA).length;
      TABLE = document.querySelectorAll("#TABLE_Files tr");
    }
    if (Type == "NOTA") {
      XDATA = _Data["NOTAS"][_Data["PACIENTES"]["SELECTED"]["ID"]];
      LEN = Object.keys(XDATA).length;
      TABLE = document.querySelectorAll("#TABLE_Notes tr");
    }
    if (Type == "CARTA") {
      XDATA =
        _Data["DOCUMENTOS"][_Data["PACIENTES"]["SELECTED"]["ID"]][
          "CARTAS"
        ];
      LEN = Object.keys(XDATA).length;
      TABLE = document.querySelectorAll("#TABLE_Docs tr");
    }

    if (LEN > 1) {
      let XLIST = [];
      SEARCH = String(SEARCH).toUpperCase();

      for (let x = 0; x < LEN; x++) {
        let FECHA = String(XDATA[x]?.["FECHA"]).toUpperCase() ?? "";
        let MOTIVO = String(XDATA[x]?.["MOTIVO"]).toUpperCase() ?? "";
        let NOMBRE = String(XDATA[x]?.["NOMBRE"]).toUpperCase() ?? "";

        if (
          FECHA.match(SEARCH) ||
          MOTIVO.match(SEARCH) ||
          NOMBRE.match(SEARCH)
        ) {
          XLIST.push(LEN - x);
        }
      }
      XLIST.push(0);

      for (let x = 0; x < TABLE.length; x++) {
        if (SEARCH.length > 1) {
          if (XLIST.includes(x) == false) {
            TABLE[x].classList.add("Hiden");
          } else {
            TABLE[x].classList.remove("Hiden");
          }
        } else {
          TABLE[x].classList.remove("Hiden");
        }
      }
    }
  } else {
  }
}

function REPORT(type){
  if(type == 0){
    document.querySelector('#REPORT *[ITEM="TYPE"]').innerHTML = '0';
    document.querySelector('#REPORT *[ITEM="TYPE_TEXT"]').innerHTML = 'SUGERENCIA';
  } else if (type == 1){
    document.querySelector('#REPORT *[ITEM="TYPE"]').innerHTML = '1';
    document.querySelector('#REPORT *[ITEM="TYPE_TEXT"]').innerHTML = 'REPORTAR PROBLEMA';
  } else if (type == 2){
    document.querySelector('#REPORT *[ITEM="TYPE"]').innerHTML = '2';
    document.querySelector('#REPORT *[ITEM="TYPE_TEXT"]').innerHTML = 'REPORTAR ERROR';
  } else { 
    return false;
  }
  GOTO_MENU('Report', 1);
}

function SEND_REPORT(Close = false){
  if(Close == false){
    let TYPE = document.querySelector('#REPORT *[ITEM="TYPE"]').innerHTML;
    let TEXT = document.querySelector('#REPORT textarea').value;
    let DATA = {}; 
    
    if(TEXT.length > 2){
      if(TYPE == '0'){ DATA['TIPO'] = "SUGERENCIA";}
      if(TYPE == '1'){ DATA['TIPO'] = "PROBLEMA";}
      if(TYPE == '2'){ DATA['TIPO'] = "ERROR";}
  
      if(_Config['CONEXION']['METHOD'] != "LOCAL"){
        let VALUES = `'${_Data['USUARIO']['ID']}','${DATA['TIPO']}','${TEXT}'`;      
        let SEND = {
          DB_TABLE: _Config["DATABASE"]["TABLA"]["REPORT"],
          TABLE_KEYS: `DOCTOR,TIPO,TEXT`,
          VALUES: VALUES,
        };
        SEND_TO_PHP("ADD_NOTE", SEND);
  
        GOTO_MENU("Help",0);
        setTimeout(() => {
          document.querySelector('#REPORT textarea').value = "";
        },100)
      }
    }
  } else {
    document.querySelector('#REPORT textarea').value = "";
    GOTO_MENU("Help",0);
  }
}

function TO_PRINT(Menu = [], ID) {
  for(let X in Menu){
    Menu[X] = String(Menu[X]).toUpperCase()
  }

  let DATA = undefined;
  let PACIENT = _Data['PACIENTES']['SELECTED']

  if(Menu[0] == "DATE") DATA = {..._Data['CITAS'][PACIENT['ID']][ID]};
  else if(Menu[0] == "CART") DATA = {..._Data['DOCUMENTOS'][PACIENT['ID']]};
  else if(Menu[0] == "NOTE") {
    DATA = {..._Data['NOTAS'][PACIENT['ID']][ID]};
    DATA["OTROS"] = JSON.parse(DATA["OTROS"]);
    let KEYS = Object.keys(DATA["OTROS"]);
    KEYS.forEach((X)=>{ DATA[X] = DATA["OTROS"][X] })
  }
  else return false;

  let MY_HTML = "";
  MY_HTML += `
  <!DOCTYPE html> <html> <head>
    <link rel="stylesheet" href="${WEB_DATA['WEB_PRINT']['STYLE_FILE']}" media="all"/>
  </head> <body class="TO_PRINT ${WEB_DATA['WEB_PRINT']['STYLE_FONT']}">
  `;
  MY_HTML += WEB_DATA['WEB_PRINT']['HEADER'] ?? "";
  MY_HTML += WEB_DATA['WEB_PRINT']['TEMPLATES']?.[Menu[0]]?.[Menu[1]] ?? ""; 
  MY_HTML += `</body></html>`;

  let NWin = window.open("")
  NWin.document.write(MY_HTML)
  NWin.document.close()

  let ITEMS = NWin.document.querySelectorAll('*[ITEM]');
  let TYPE_TEXT = ["P","SPAN","STRONG","B"]
  let TYPE_INPUT = ["INPUT","TEXTAREA","SELECT"]

  ITEMS.forEach((X)=>{
    let TYPE = X.nodeName;
    let KEY = X.getAttribute('ITEM')
    if(TYPE_TEXT.includes(TYPE)) X.innerHTML = DATA?.[KEY] ?? "";
    else if(TYPE_INPUT.includes(TYPE)) X.value = DATA?.[KEY] ?? "";
  })

  NWin.print();
  //setTimeout(() =>{NWin.close();}, 350)

}

function DOCTOR_LIST(Menu, id){
  Menu = String(Menu).toUpperCase();
  let DOM = document.querySelector('#Mn_DoctorList');

  if(Menu == 'NO'){ DOM.classList.add('Hiden');}
  else { DOM.classList.remove('Hiden');}

  let XUL = DOM.querySelector('ul');
  let XLI = XUL.querySelectorAll('li');
  XLI.forEach((X) => {X.remove();})

  if(id == "NO"){
    let LIST = DOM.querySelector('ul')
    LIST.innerHTML = "";

    let XTEMS = undefined;
    let ITEMS = undefined;
    if(Menu == "DOC") {
      XTEMS = _Data['LIST']['DOCTORS'];
      ITEMS = Object.keys(_Data['LIST']['DOCTORS']);
    }
    if(Menu == "PAS"){
      XTEMS = _Data['PACIENTES'];
      ITEMS = Object.keys(_Data['PACIENTES']);
    } 
    if(ITEMS != undefined){
      ITEMS.forEach((X)=>{
        if(X != "SELECTED" && XTEMS[X]?.['ID'] != undefined){
          let PREPARE = document.createElement('li');
          PREPARE.innerHTML = `
          <div class="Flex">
            <div>
              <p><strong>#${XTEMS[X]?.['ID'] ?? "#ERROR"}</strong><p>
              <p>${XTEMS[X]?.['NOMBRE'] ?? "#ERROR"}</p>
            </div>
            <button type="button" onclick="DOCTOR_LIST('${Menu}','${X}')">Seleccionar</button>
          </div>
          `;
          LIST.appendChild(PREPARE);
        }
      })
    }
  } else {
    let IDS = undefined;
    let DOMS_DOC = ["#TRNOTE","#EGNOTE","#DATES_NEW"]
    let DOMS_PAS = ["#FNOTE","#ENOTE","#CNOTE","#TRNOTE","#EGNOTE","#RECIPE","#CART","#DATES_NEW"]
    if(Menu == "DOC") {
      DOMS_DOC.forEach((X)=>{
        IDS = document.querySelector(`${X} input[item="DOCTOR_2"]`) ?? null;
        if(IDS != null) IDS.value = id;
      })
    }
    if(Menu == "PAS"){
      DOMS_PAS.forEach((X)=>{
        IDS = document.querySelector(`${X} input[item="ID"]`) ?? null;
        if(IDS != null) IDS.value = id;
      })
    }

    DOM.classList.add('Hiden');
  }
}

function Send_Email() {
  GOTO_MENU("LOGIN");
  APP_ALERT("LOGIN",2);
  return false;

  let CODE = document.querySelector('#Mn_Recuperar #Forget_Email');
  let EMAIL = document.querySelector('#Mn_Recuperar #Forget_Email2');
  let WHERE = "";
  let KEY = "";
  let VALUE = "";
  if((CODE.value).length > 2){
    WHERE = `ID='${CODE.value}'`;
    KEY = "ID";
    VALUE = CODE.value;
  } else {
    if((EMAIL.value).length > 2){
      WHERE = `CORREO='${EMAIL.value}'`;
      KEY = "CORREO";
      VALUE = EMAIL.value;
    }
  }
  if(VALUE.length > 2){
    let SEND = {
      DB_TABLE: _Config['DATABASE']['TABLA']['LOGIN'],
      KEY: KEY,
      VALUE: VALUE
    }
    SEND_TO_PHP("SEND_MAIL",SEND);
    CODE.classList.remove("ERROR")
    EMAIL.classList.remove("ERROR")
  } else {
    CODE.classList.add("ERROR")
    EMAIL.classList.add("ERROR")
  }
}

function SAVE_CONFIG() {
  let DOM = document.querySelector('#CONFIG')
  let TEMP_USER = DOM.querySelectorAll('#CONFIG_USER *[ITEM]')
  let TEMP_CONS = DOM.querySelectorAll('#CONFIG_CONSULTORY *[ITEM]')
  let TEMP_TIME = DOM.querySelectorAll('#CONFIG_TIME *[ITEM]')
  let TEMP_DB = DOM.querySelectorAll('#CONFIG_DB *[ITEM]')

  let PREPARE = ""
  TEMP_USER.forEach((X)=>{
    let KEY = X.getAttribute('ITEM')
    let VALUE = X.value
    PREPARE += (PREPARE.length > 2) ? `, ${KEY}='${VALUE}'`:`${KEY}='${VALUE}'`
  })
  let SEND = {
    TABLE_NAME: _Config['DATABASE']['TABLA']['USER_DATA'],
    SET: PREPARE,
    WHERE: `ID='${_Data['USUARIO']['ID']}'`
  }
  SEND_TO_PHP('UPDATE_DATA',SEND)

  PREPARE = ""
  TEMP_TIME.forEach((X)=>{
    let KEY = X.getAttribute('ITEM')
    let VALUE = X.value
    PREPARE += (PREPARE.length > 2) ? `, ${KEY}:${VALUE}`:`${KEY}:${VALUE}`
  })
  SEND = {
    TABLE_NAME: _Config['DATABASE']['TABLA']['USER_DATA'],
    SET: `HORARIO='${JSON.stringify(PREPARE)}'`,
    WHERE: `ID='${_Data['USUARIO']['ID']}'`
  }
  SEND_TO_PHP('UPDATE_DATA',SEND)

  PREPARE = ""
  let KEYS = ['HOST','PASSWORD','USER','NOMBRE','DB_SEL']
  TEMP_DB.forEach((X)=>{
    let KEY = X.getAttribute('ITEM')
    let VALUE = String(X.value).trim()
    if(VALUE != "" && KEYS.includes(KEY)){
      //_Config['DATABASE'][KEY] = VALUE;
      PREPARE += (PREPARE.length > 2) ? `;${KEY}:${VALUE}`:`${KEY}:${VALUE}`
    } 
  })
  SEND = {
    TABLE_NAME: _Config['DATABASE']['TABLA']['USER_DATA'],
    SET: `DB='${PREPARE}'`,
    WHERE: `ID='${_Data['USUARIO']['ID']}'`
  }
  SEND_TO_PHP('UPDATE_DATA',SEND)


}

async function LOAD_LENGUAGE(){
  let LENG = document.querySelector('html').getAttribute('lang').toUpperCase()
  let RAWDATA = await LOAD_JSON("LANG",LENG)

  let KEYS = Object.keys(RAWDATA)
  KEYS.forEach((X)=>{
    let ITEMS = document.querySelectorAll(`${X} *[lg]`);
    ITEMS.forEach((Y)=>{
      let RUT = Y.getAttribute('LG');
      if(RUT != ""){
        try {
          if(Y.nodeName == "SPAN") Y.textContent = RAWDATA[X][RUT];
          else if(Y.nodeName == "INPUT") Y.placeholder = RAWDATA[X][RUT];
          else if(Y.nodeName == "TEXTAREA") Y.placeholder = RAWDATA[X][RUT];
          else if(Y.nodeName == "P") Y.textContent = RAWDATA[X][RUT];
          else if(Y.nodeName == "LABEL") Y.textContent = RAWDATA[X][RUT];
        } catch {}
      }
    })
  })

  let ALERTS = await LOAD_JSON(".","ALERTS");
  if(ALERTS != null) WEB_DATA['ALERTS'] = ALERTS;
}

async function LOAD_PRINT_TEMPLATES(Plantilla){
  WEB_DATA['WEB_PRINT'] = await LOAD_JSON("PRINT/TEMPLATES",Plantilla)
}

window.addEventListener("DOMContentLoaded", () => {
  GOTO_MENU("LOGIN");
  _Config["CONEXION"]["METHOD"] = "SERVER";
  if (_Config["DATABASE"]["HOST"] == null) {
    console.warn(
      "ALERTA -> No hay una base de datos definida en la configuracion."
    );
  }
  if (_Config["CONEXION"]["METHOD"] == "SERVER") {
    _Data = _Data_EMPY;
  } else if (_Config["CONEXION"]["METHOD"] == null) {
    _Config["CONEXION"] = {
      METHOD: "SERVER",
      MODE: "LOCAL",
      SEGURITY: "LOCAL",
    };
  }
  
  document.querySelector("#TOOLBAR").classList.add("Hiden");
  let REM = JSON.parse(localStorage.getItem('UDG_S_LOGIN'));
  if(REM != null){
    let DOM_1 = document.querySelectorAll("#LOGIN *[ITEM]")
    DOM_1.forEach((X)=>{
      let KEY = X.getAttribute('ITEM')
      let TYPE = X.getAttribute('type').toUpperCase()
      if(TYPE == "CHECKBOX") X.checked = true
      else X.value = REM[KEY];
      //document.querySelector('#LOGIN button[onclick="User_Login()"]').click()
    })
  } 

  setTimeout(() => {
    LOAD_LENGUAGE()
    let TB1 = document.querySelectorAll("#TABLE_Historial_1 tr");
    if (TB1.length < 2) Pacient_List_History();
  }, 1250);
});

