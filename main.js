// >>> [ Variables Generales ] >>>
var WEB_DATA_EMPY = {
  CONSULTORIO: {
    ID: "",
    CONSULTORIO: "",
    CLUES: "",
    DIRECCION: "",
    COLONIA: "",
    NUMERO: "",
    HORARIO: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
  },
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
    },
    BLANK: {
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
    },
  },
  NOTAS: {
    BLANK: { ID: "", MOTIVO: "", DOCTOR: "", INFORMACION: { TEXTO: "" } },
    TEMP: {},
  },
  DOCUMENTOS: {
    BLANK: { ID: "", DOCTOR: "", NOMBRE: "", INFORMACION: {} },
    TEMP: {
      ARCHIVOS: {},
      CARTAS: {},
    },
  },
  HISTORIAL: {
    BLANK: { TOTAL: 0 },
  },
  CITAS: {
    BLANK: {},
  },
  PLANTILLAS: {
    LINEA: {},
    LOCAL: {},
  },
  CALENDAR: {},
};
var WEB_DATA = { ...WEB_DATA_EMPY };
var WEB_CONFIG = {
  DATABASE: {
    USER: "root",
    PASSWORD: "",
    HOST: "127.0.0.1",
    NOMBRE: "UDG_SALUD",
    TABLA: {
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
var WEB_USERS = {
  USERS: {
    BLANK: { PASSWORD: "" },
  },
  DATA: {
    BLANK: {
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
      PACIENTES: [],
    },
  },
  CONSULTORIO: {
    BLANK: {
      CONSULTORIO: "",
      CLUES: "",
      DIRECCION: "",
      COLONIA: "",
      NUMERO: "",
      HORARIO: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    },
  },
};
const All_Menus = {
  All: [
    "Mn_Camara",
    "Mn_Loading",
    "Mn_Login",
    "Mn_Import_Json",
    "Mn_Import_File",
    "Mn_Import_File_R",
    "Mn_Note_Egreso",
    "Mn_Recipe",
    "Mn_Note_Traslado",
    "Mn_Pacientes_Index",
    "Mn_Pacientes_Register",
    "Mn_Banner_Pacient_Estudies",
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Info",
    "Mn_Pacientes_Note_Simple",
    "Mn_Pacientes_Notes",
    "Mn_Pacientes_Dates",
    "Mn_Pacientes_Estudies",
    "Mn_Pacientes_Recipes",
    "Mn_Pacientes_Docs",
    "Mn_Dates",
    "Mn_Notes",
    "Mn_Main",
    "Mn_Help",
    "Mn_Terminos",
    "Mn_LegalInfo",
    "Mn_Report",
    "Mn_Recuperar",
    "Mn_Adv_Search",
    "New_Date",
    "Mn_Banner_Pacient",
    "Mn_Banner_Pacient_Data",
    "Mn_Search_Filter",
    "Mn_Banner_Main",
    "Mn_Banner_Help",
    "Mn_Banner_Adv_Search",
    "Mn_Pacientes_History",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Dates",
    "Mn_Banner_Pacient_History",
    "Mn_Banner_Pacient_Notes",
    "Mn_Banner_Pacient_Dates",
    "Mn_Banner_Pacient_Docs",
    "Mn_FNote",
    "Mn_NotesDocs",
    "Mn_UpDoc",
    "Mn_Note_Consent",
    "Mn_Note_Consent_Templates",
    "Mn_Banner_NotesDocs",
    "Mn_NotesEv",
    "Mn_Config_App",
    "NEW_DATE",
    "Mn_Search",
    "Mn_Banner_SEARCH",
    "Mn_Banner_PAGEINFO",
  ],
  Keys: [
    "Loading",
    "Login",
    "Import_File",
    "Import_File_R",
    "Import_Json",
    "Mn_Import_Json",
    "TrNote",
    "EgNote",
    "Recuperar",
    "Main",
    "Pacient_Select",
    "Pacient_Register",
    "Pacient_Data",
    "Pacient_Notes",
    "Pacient_History",
    "Pacient_Dates",
    "Pacient_Estudies",
    "Pacient_Recipes ",
    "Pacient_Docs",
    "Notes",
    "Search",
    "Dates",
    "Dates_New",
    "Help",
    "FNote",
    "Dates_New2",
    "Cart",
    "Cart2",
    "UpDoc",
    "Help",
    "CNote",
    "ENote",
    "Config",
    "Camara",
    "Recipe",
    "Terminos",
    "LegalInfo",
    "Report",
  ],

  Loading: ["Mn_Loading"],
  Login: ["Mn_Login"],
  Recuperar: ["Mn_Recuperar"],
  Main: ["Mn_Main", "Mn_Banner_Main"],
  Pacient_Select: [
    "Mn_Pacientes_Index",
    "Mn_Banner_Pacient",
    "Mn_Search_Filter",
  ],
  Pacient_Register: [
    "Mn_Pacientes_Register",
    "Mn_Pacientes_Index",
    "Mn_Banner_Pacient",
    "Mn_Search_Filter",
  ],
  Pacient_Data: [
    "Mn_Pacientes_Data",
    "Mn_Banner_Pacient_Data",
    "Mn_Banner_Pacientes_Data",
    "Mn_Pacientes_Info",
  ],
  Pacient_Notes: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Notes",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Pacient_Notes",
  ],
  Pacient_History: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_History",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Pacient_History",
  ],
  Pacient_Dates: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Dates",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Pacient_Dates",
  ],
  Pacient_Estudies: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Estudies",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Pacient_Estudies",
  ],
  Pacient_Recipes: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Recipes",
    "Mn_Banner_Pacientes_Data",
  ],
  Pacient_Docs: [
    "Mn_Pacientes_Data",
    "Mn_Pacientes_Docs",
    "Mn_Banner_Pacientes_Data",
    "Mn_Banner_Pacient_Docs",
  ],
  Notes: ["Mn_NotesDocs", "Mn_Banner_NotesDocs"],
  Search: ["Mn_Search", "Mn_Banner_SEARCH"],
  Cart: ["Mn_Note_Consent"],
  Cart2: ["Mn_Note_Consent_Templates"],
  Dates: ["Mn_Dates", "Mn_Banner_Dates"],
  Dates_New: ["Mn_Dates", "Mn_Banner_Dates", "NEW_DATE"],
  Dates_New2: ["NEW_DATE"],
  UpDoc: ["Mn_UpDoc"],
  Help: ["Mn_Help", "Mn_Banner_PAGEINFO"],
  FNote: ["Mn_FNote"],
  ENote: ["Mn_NotesEv"],
  CNote: ["Mn_Notes"],
  TrNote: ["Mn_Note_Traslado"],
  EgNote: ["Mn_Note_Egreso"],
  Import_File: ["Mn_Import_File"],
  Import_File_R: ["Mn_Import_File_R"],
  Import_Json: ["Mn_Import_Json"],
  Config: ["Mn_Config_App"],
  Camara: ["Mn_Camara"],
  Recipe: ["Mn_Recipe"],
  Terminos: ["Mn_Terminos", "Mn_Banner_PAGEINFO"],
  LegalInfo: ["Mn_LegalInfo", "Mn_Banner_PAGEINFO"],
  Report: ["Mn_Report"],
};

//! ===== >>> [ FUNCIONES -> CONTROL]
// >>> Cambiar de Pagina
function GOTO_MENU(Menu, Sub = 0) {
  if (WEB_DATA["USUARIO"]["ID"] == "" && Menu != "Loading") {
    Menu = "Login";
  }
  if (Sub == 0) {
    for (let x of All_Menus.All) {
      try {
        document.getElementById(x).classList.add("Hiden");
      } catch (err) {}
    }
  }
  for (let x of All_Menus.Keys) {
    if (Menu == x) {
      for (let y of All_Menus[Menu]) {
        try {
          document.getElementById(y).classList.remove("Hiden");
        } catch (err) {}
      }
      if (Menu != "Login" && Menu != "Recuperar" && Menu != "Loading") {
        document.getElementById("Mn_Toolbar").classList.remove("Hiden");
      } else {
        document.getElementById("Mn_Toolbar").classList.add("Hiden");
      }
    }
  }
  let TIME = GET_TIME();
  document.getElementById("TBar_Date").innerHTML = TIME["DATE"];
  document.getElementById("TBar_Hour").innerHTML = TIME["TIME"];
  WEB_DATA["SEARCH"] = {};
  if (Menu == "Dates") {
    WEB_DATA["FECHA"]["DIA"] = Number(TIME["DAY"]);
    WEB_DATA["FECHA"]["MES"] = Number(TIME["MOUNT"]) - 1;
    WEB_DATA["FECHA"]["AÑO"] = Number(TIME["YEAR"]);
    Calendar_Update();
  } else if (Menu == "Camara") {
    CAMARA();
  }

  if (window.innerWidth < 860) {
    if (
      document.querySelector("html").getAttribute("style") ==
      "--Toolbar_width: 200px;"
    ) {
      document
        .querySelector(
          "#Mn_Toolbar > div.Cn_Toolbar > div.Toolbar_Buttons > div:nth-child(3) > button:nth-child(1)"
        )
        .click();
    }
  }
}

//! ===== >>> [ FUNCIONES -> DEV]
// OBTENER - FECHA Y HORA
function GET_TIME() {
  let DATE = new Date();
  let TIME = {
    DATE: "",
    TIME: "",
    DAY_ONE: 0,
    YEAR: DATE.getFullYear(),
    MOUNT: DATE.getMonth() + 1,
    DAY: DATE.getDate(),
    HOUR: DATE.getHours(),
    MINUT: DATE.getMinutes(),
    SECOND: DATE.getSeconds(),
  };

  if (TIME["MOUNT"] < 10) {
    TIME["MOUNT"] = `0${TIME["MOUNT"]}`;
  }
  if (TIME["DAY"] < 10) {
    TIME["DAY"] = `0${TIME["DAY"]}`;
  }

  if (TIME["HOUR"] < 10) {
    TIME["HOUR"] = `0${TIME["HOUR"]}`;
  }
  if (TIME["MINUT"] < 10) {
    TIME["MINUT"] = `0${TIME["MINUT"]}`;
  }
  if (TIME["SECOND"] < 10) {
    TIME["SECOND"] = `0${TIME["SECOND"]}`;
  }

  let DATE_START = new Date(TIME["YEAR"], TIME["MOUNT"] - 1, 1);
  TIME["DAY_ONE"] = DATE_START.getDay();
  TIME["TIME"] = `${TIME["HOUR"]}:${TIME["MINUT"]}:${TIME["SECOND"]}`;
  TIME["DATE"] = `${TIME["YEAR"]}-${TIME["MOUNT"]}-${TIME["DAY"]}`;
  return TIME;
}

//! ===== >>> [ FUNCIONES -> CONFIGURACION]
// >>> REMOVER -> LOCAL JSON
function REMOVE_LOCAL_JSON(Name) {
  Name = String(Name).toUpperCase();
  if (Name == "ALL" || Name == "CONFIG") {
    localStorage.removeItem("UDG_CONFIG_S");
  }
  if (Name == "ALL" || Name == "DATA") {
    localStorage.removeItem("UDG_DATA_S");
  } else {
    console.log(`'${Name}' No es una Configuracion.`);
  }
}

// >>> Cargar Configuracion DB
function LOAD_LOCAL() {
  let Config_JSON1 = localStorage.getItem("UDG_CONFIG_S");
  let DATA_CONFIG1 = JSON.parse(Config_JSON1);
  if (DATA_CONFIG1 != null) {
    WEB_CONFIG = DATA_CONFIG1;
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
    let Config_JSON2 = localStorage.getItem("UDG_DATABASE_S");
    let DATA_CONFIG2 = JSON.parse(Config_JSON2);
    if (DATA_CONFIG2 != null) {
      WEB_USERS = DATA_CONFIG2;
    }
  }

  if (
    WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL" ||
    WEB_CONFIG["CONEXION"]["SEGURITY"] != "REALTIME"
  ) {
    let Data_JSON3 = localStorage.getItem("UDG_DATA_S");
    let DATA_DATA3 = JSON.parse(Data_JSON3);
    if (DATA_DATA3 != null) {
      WEB_DATA = DATA_DATA3;
    }
  }

  let TIME = GET_TIME();
  WEB_CONFIG["DATES"]["LAST_LOAD"] = TIME["DATE"];

  return true;
}

function SAVE_LOCAL_ALL() {
  let TIME = GET_TIME();
  WEB_CONFIG["DATES"]["LAST_SAVE"] = TIME["DATE"];

  if (
    WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL" ||
    WEB_CONFIG["CONEXION"]["MODE"] != "REALTIME"
  ) {
    localStorage.setItem("UDG_DATABASE_S", JSON.stringify(WEB_USERS));
    localStorage.setItem("UDG_DATA_S", JSON.stringify(WEB_DATA));
  }
  localStorage.setItem("UDG_CONFIG_S", JSON.stringify(WEB_CONFIG));
}

function SAVE_LOCAL_CONFIG() {
  let IMAGE_DOM = document.querySelector("#Mn_Camara #CAM_IMG");
  if (IMAGE_DOM.src.length > 128) {
    WEB_DATA["USUARIO"]["IMG"] = String(IMAGE_DOM.src);
    setTimeout(() => {
      IMAGE_DOM.src = "";
    }, 500);
  }

  try {
    let DOM = document.querySelector("#Mn_Config_App #Config_User");
    let ITEMS = DOM.querySelectorAll("*[ITEM]");
    ITEMS.forEach((Xtem) => {
      let KEY = Xtem.getAttribute("ITEM");
      if (Xtem.nodeName == "BUTTON") {
        if (Xtem.getAttribute("class") == "CHECKED") {
          WEB_DATA["USUARIO"][KEY] = String(Xtem.textContent).toUpperCase();
        }
      } else {
        WEB_DATA["USUARIO"][KEY] = String(Xtem.value).toUpperCase();
      }
    });
  } catch (err) {
    console.warn(err);
  }

  try {
    DOM = document.querySelector("#Mn_Config_App #Config_Consultory");
    ITEMS = DOM.querySelectorAll("*[ITEM]");
    ITEMS.forEach((Xtem) => {
      let KEY = Xtem.getAttribute("ITEM");
      if (Xtem.nodeName == "BUTTON") {
        if (Xtem.getAttribute("class") == "CHECKED") {
          WEB_DATA["CONSULTORIO"][KEY] = String(Xtem.textContent).toUpperCase();
        }
      } else {
        WEB_DATA["CONSULTORIO"][KEY] = String(Xtem.value).toUpperCase();
      }
    });
  } catch (err) {
    console.warn(err);
  }

  try {
    DOM = document.querySelector("#Mn_Config_App #Config_Time");
    ITEMS = DOM.querySelectorAll("div");

    for (let Xtem = 0; Xtem < ITEMS.length; Xtem++) {
      let HOURS = Xtem.querySelectorAll("input");
      WEB_DATA["CONSULTORIO"]["HORARIO"][Xtem] = [
        HOURS[0].value,
        HOURS[1].value,
      ];
    }
  } catch (err) {
    console.warn(err);
  }

  try {
    DOM = document.querySelector("#Mn_Config_App #Config_DB");
    WEB_CONFIG["DATABASE"] = {
      HOST: DOM.querySelector('*[ITEM="HOST"]').value,
      USER: DOM.querySelector('*[ITEM="USER"]').value,
      NOMBRE: DOM.querySelector('*[ITEM="NOMBRE"]').value,
      PASSWORD: DOM.querySelector('*[ITEM="PASSWORD"]').value,
    };
    WEB_CONFIG["CONEXION"]["TIPO"] = DOM.querySelector(
      '#Config_DB_Type *[class="CHECKED"]'
    );
    WEB_CONFIG["CONEXION"]["MODE"] = DOM.querySelector(
      '#Config_DB_Storage *[class="CHECKED"]'
    );
  } catch (err) {
    console.warn(err);
  }
}

//! ===== >>> [ FUNCIONES -> ALMACENAMIENTO -> CACHE]

//! ===== >>> [ FUNCIONES -> ALMACENAMIENTO -> BASE DE DATOS]
// >>> Enviar Comando a PHP
function SEND_TO_PHP(Funcion, Data, File = "") {
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
    CONFIG["body"] = XBody;
  } else {
    XBody = JSON.stringify(Send);
    Xheaders = "application/json";
    CONFIG["headers"] = { "Content-Type": Xheaders };
    CONFIG["body"] = XBody;
  }

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
          WEB_DATA["USUARIO"] = JRes[0];
        } else if (Funcion == "IMPORT_PACIENT") {
          WEB_DATA["PACIENTES"][JRes[0][0]["ID"]] = JRes[0][0];
        } else if (Funcion == "LOAD_PACIENT") {
          WEB_DATA["PACIENTES"]["SELECTED"] = JRes[0];
          WEB_DATA["CITAS"][JRes[0]["ID"]] = JRes[1];
          WEB_DATA["NOTAS"][JRes[0]["ID"]] = JRes[2];
          WEB_DATA["DOCUMENTOS"][JRes[0]["ID"]] = JRes[3];
        } else if (Funcion == "LOAD_PACIENT_LIST") {
          if (JRes[0] != "") {
            WEB_DATA["PACIENTES"] = JRes[0];
          }
        } else if (Funcion == "LOAD_DATES") {
          if (JRes[0] != "") {
            WEB_DATA["CITAS"] = JRes[0];
          }
        } else if (Funcion == "LOAD_TEMPLATES") {
          if (JRes[0] != "") {
            WEB_DATA["PLANTILLAS"]["LINEA"] = JRes[0];
          }
          if (JRes[1] != "") {
            WEB_DATA["PLANTILLAS"]["LOCAL"] = JRes[1];
          }
        } else if (Funcion == "SEARCH") {
          if (JRes[0] != "undefined") {
            WEB_DATA["SEARCH"] = JRes[0];
          } else {
            WEB_DATA["SEARCH"] = undefined;
          }
        } else if (Funcion == "LOAD_NOTES") {
          if (JRes[0] != "") {
            if (WEB_DATA["NOTAS"]?.["TEMP"] == undefined) {
              WEB_DATA["NOTAS"]["TEMP"] = {};
            }
            WEB_DATA["NOTAS"]["TEMP"] = JRes[0];
          } else {
            WEB_DATA["NOTAS"]["TEMP"] = {};
          }
          if (JRes[1] != "") {
            if (WEB_DATA["CITAS"]?.["TEMP"] == undefined) {
              WEB_DATA["CITAS"]["TEMP"] = {};
            }
            WEB_DATA["CITAS"]["TEMP"] = JRes[1];
          } else {
            WEB_DATA["CITAS"]["TEMP"] = {};
          }
          if (JRes[2] != "") {
            if (WEB_DATA["DOCUMENTOS"]?.["TEMP"] == undefined) {
              WEB_DATA["DOCUMENTOS"]["TEMP"] = {};
            }
            WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"] = JRes[2];
          } else {
            WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"] = {};
          }
          if (JRes[3] != "") {
            if (WEB_DATA["DOCUMENTOS"]?.["TEMP"] == undefined) {
              WEB_DATA["DOCUMENTOS"]["TEMP"] = {};
            }
            WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = JRes[3];
          } else {
            WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = {};
          }
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
        WEB_DATA["DOWNLOAD"] = XRes;
      })
      .catch((Err) => {
        console.error(Err);
        return "ERROR";
      });
  }
}

//! ===== >>> [ FUNCIONES -> ESPECIFICAS]
// >>> Mostrar Alerta
function APP_ALERT(Menu, N_Alet) {
  Menu = String(Menu).toUpperCase();
  let APP_ALERT = document.getElementById("Mn_Alert");
  if (Menu == 0) {
    APP_ALERT.classList.add("Hiden");
    return null;
  } else {
    APP_ALERT.classList.remove("Hiden");
  }

  let Alert_Icon = {
    NO_ADS: "./IMG/Ads_No.svg",
    CALENDAR: "./IMG/Calendar.svg",
    CALENDAR_ALERT: "./IMG/Calendar_Alert.svg",
    COMPUTER: "./IMG/Computer.svg",
    CONFIG: "./IMG/Config.svg",
    CURSOR: "./IMG/cursor.svg",
    DATA_TRANSFER: "./IMG/Data_Transfer.svg",
    DOC_IMPORT: "./IMG/Document_Import.svg",
    DOWLOAD: "./IMG/Download.svg",
    ESTETOSCOPIE: "./IMG/Estetoscopio.svg",
    HELP: "./IMG/Help.svg",
    HISTORY: "./IMG/History.svg",
    INFO: "./IMG/Info.svg",
    MICROPHONE: "./IMG/Microphone.svg",
    ERROR: "./IMG/No_select.svg",
    RESICLE: "./IMG/Resicle.svg",
    DELETE: "./IMG/Delete.svg",
    SHARE: "./IMG/Share.svg",
    SHIELD: "./IMG/Shield.svg",
    SHIELD_ACCEPT: "./IMG/Shield_Accept.svg",
    SHIELD_ALERT: "./IMG/Shield_Alert.svg",
    UPDATE: "./IMG/Update.svg",
    USER_NONE: "./IMG/User_None.svg",
    USER_WAIT: "./IMG/User_Time.svg",
    WIFI_CLOUD: "./IMG/Wifi_Cloud.svg",
    WIFI_NO: "./IMG/Wifi_No.svg",
  };
  let Alert_Message = {
    LOCAL: {
      0: {
        Icon: Alert_Icon["COMPUTER"],
        Title: "¡¡¡ Importante !!!",
        Text: "Esta opcion utiliza como almacenamiento el cache del propio navegador, por lo que este puede ser borrado por aplicaciones externas o el porpio navegador, se recomienda precaucion.</p><p>(La informacion puede sincronizarse con una base de datos en la configuracion.)",
      },
      1: {
        Icon: Alert_Icon["USER_NONE"],
        Title: "Advertencia",
        Text: 'No se ha detectado ningun usuario local existente.</p><p class="Text_Sty_1">Desea configurar un nuevo usaurio?',
      },
    },
    LOGIN: {
      0: {
        Title: "Usuario no encontrado",
        Icon: "",
        Text: "El usuario no esta registrado.",
      },
      1: {
        Title: "Contraseña incorrecta",
        Icon: "",
        Text: "El usuario no coinside con la contraseña.",
      },
    },
    INFO: {
      0: { Title: "", Icon: "", Text: "" },
    },
    ALERT: {
      0: { Title: "", Icon: "", Text: "" },
    },
    CRITIC: {
      0: { Title: "", Icon: "", Text: "" },
    },
    ERROR: {
      0: { Title: "", Icon: "", Text: "" },
      1: { Title: "ERROR - PACIENTE", Icon: "", Text: "No se ha podido cargar correctamente la informacion del paciente, porfavor reinicie la pagina y vuelva a intenrarlo." },
      2: { Title: "ERROR - PACIENTE", Icon: "", Text: "No se ha podido cargar correctamente la informacion del paciente, porfavor reinicie la pagina y vuelva a intenrarlo." },

    },
  };

  try {
    let New_Icon = document.createElement("img");
    if (Alert_Message[Menu][N_Alet]["Icon"] != null) {
      New_Icon.src = Alert_Message[Menu][N_Alet]["Icon"];
    } else {
      New_Icon.src = Alert_Icon["ERROR"];
    }
    APP_ALERT.querySelector("img").replaceWith(New_Icon);
  } catch {
    let New_Icon = document.createElement("img");
    New_Icon.src = Alert_Icon["ERROR"];
    APP_ALERT.querySelector("img").replaceWith(New_Icon);
  }

  let Alert_Title = APP_ALERT.querySelector("#Alert_Title");
  try {
    if (Alert_Message[Menu][N_Alet]["Title"] != null) {
      Alert_Title.innerHTML = Alert_Message[Menu][N_Alet]["Title"];
    } else {
      Alert_Title.innerHTML = "";
    }
  } catch (err) {
    console.warn(err);
  }

  let Alert_Text = APP_ALERT.querySelector("#Alert_Text");
  try {
    Alert_Text.innerHTML = Alert_Message[Menu][N_Alet]["Text"];
    if (Alert_Message[Menu][N_Alet]["Text"] == null) {
      Alert_Text.innerHTML = `#ERROR - Mensaje no encontrado [ ${Menu} => ${N_Alet} ]`;
    }
  } catch {
    Alert_Text.innerHTML = `#ERROR - Mensaje no encontrado [ ${Menu} => ${N_Alet} ]`;
  }

  let Alert_Buttons =
    APP_ALERT.querySelector("#Alert_Buttons").querySelectorAll("button");
  for (let x = 0; x < 5; x++) {
    Alert_Buttons[x].setAttribute("class", "Hiden");
  }
  if (Menu == "LOCAL") {
    let Btn_Show = 0;
    let Btn_Text = [];
    let Btn_Sty = [];
    let Btn_Actions = [];

    if (N_Alet == 0) {
      Btn_Show = 3;
      Btn_Text = ["X Cancelar", ">> No volver a Mostrar", ">> Continuar"];
      Btn_Sty = [4, 3, 2];
      Btn_Actions = ["", "", "User_Login('LOCAL')"];
    }

    if (N_Alet == 1) {
      Btn_Show = 2;
      Btn_Text = ["Autogenerar", ">> Si"];
      Btn_Sty = [4, 2];
      Btn_Actions = ["APP_ALERT(0,0)", ""];
    }

    for (let x = 0; x < Btn_Show; x++) {
      Alert_Buttons[x].classList.remove("Hiden");
      Alert_Buttons[x].innerText = Btn_Text[x];
      Alert_Buttons[x].classList.add(`Btn_Sty_${Btn_Sty[x]}`);
      Alert_Buttons[x].setAttribute("onclick", Btn_Actions[x]);
    }
  }
}

// >>> Iniciar Sesion (User)
function User_Login(Local = null) {
  let USER = document.getElementById("LOGIN_USER");
  let PASSWORD = document.getElementById("LOGIN_PASSWORD");

  let Loading_Bar = document.getElementById("Loading_Bar");
  let Loading_Text = document.getElementById("Loading_Text");
  document.getElementById("Mn_Alert").classList.add("Hiden");

  if (Local == "LOCAL") {
    GOTO_MENU("Loading");

    if (LOAD_LOCAL() == true) {
      WEB_CONFIG["CONEXION"] = {
        METHOD: "LOCAL",
        MODE: "LOCAL",
        SEGURITY: false,
      };

      WEB_DATA["USUARIO"] =
        WEB_DATA["USUARIO"]["ID"] == "LOCAL"
          ? WEB_DATA["USUARIO"]
          : {
              ID: "LOCAL",
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
            };
      if (Load_User_Data() == true) {
        Load_Calendar();
        GOTO_MENU("Main");

        setTimeout(() => {
          let CONFIG_1 = document.querySelectorAll("#Config_User *[ITEM]");
          let CONFIG_2 = document.querySelectorAll(
            "#Config_Consultory *[ITEM]"
          );
          let CONFIG_3 = document.querySelectorAll("#Config_Time div");
          let CONFIG_4 = document.querySelectorAll("#Config_DB *[ITEM]");

          CONFIG_1.forEach((Xtem) => {
            let KEY = Xtem.getAttribute("ITEM");
            try {
              Xtem.value = WEB_DATA["USUARIO"]?.[KEY];
            } catch (err) {
              console.warn(err);
            }
          });
          CONFIG_2.forEach((Xtem) => {
            let KEY = Xtem.getAttribute("ITEM");
            try {
              Xtem.value = WEB_DATA["CONSULTORIO"]?.[KEY];
            } catch (err) {
              console.warn(err);
            }
          });
          for (let Xtem = 0; Xtem < CONFIG_3.length; Xtem++) {
            let HOURS = CONFIG_3[Xtem].querySelectorAll("input");
            try {
              WEB_DATA["CONSULTORIO"]["HORARIO"][Xtem] = [
                HOURS[0].value,
                HOURS[1].value,
              ];
            } catch (err) {
              console.warn(err);
            }
          }
        }, 1250);
        setTimeout(() => {
          Load_Plantillas_List();
        }, 1400);
      }
    }
    return true;
  } else {
    if (USER.value != "" && PASSWORD.value != "") {
      if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
        if (String(USER.value) in WEB_USERS["USERS"]) {
          if (
            WEB_USERS["USERS"][String(USER.value)]["PASSWORD"] ==
            String(PASSWORD.value)
          ) {
            WEB_DATA["USUARIO"] = WEB_USERS["DATA"][String(USER.value)];
            USER.classList.remove("ERROR");
            PASSWORD.classList.remove("ERROR");
            GOTO_MENU("Loading");
            Loading_Text.innerText = "Informacion del usuario.";
            Loading_Bar.style.width = "30%";
            if (Load_User_Data() == true) {
              Loading_Text.innerText = "Calendario del usuario.";
              Loading_Bar.style.width = "60%";
              if (Load_Calendar() == true) {
                Loading_Text.innerText = "Lista de pacientes.";
                Loading_Bar.style.width = "80%";
                let TB1 = document
                  .getElementById("TABLE_Historial_1")
                  .querySelectorAll("tr");
                if (TB1.length() < 2) {
                  Pacient_List_History();
                }
                Loading_Text.innerText = "Iniciando.";
                Loading_Bar.style.width = "100%";
                Load_Plantillas_List();
                GOTO_MENU("Main");
              }
            }
          } else {
            USER.classList.add("ERROR");
            PASSWORD.classList.add("ERROR");
            APP_ALERT("LOGIN", 1);
          }
        } else {
          USER.classList.add("ERROR");
          PASSWORD.classList.add("ERROR");
          APP_ALERT("LOGIN", 0);
        }
      } else if (WEB_CONFIG["CONEXION"]["METHOD"] == "SERVER") {
        GOTO_MENU("Loading");
        let SEND = {
          DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
          DB_USER: WEB_CONFIG["DATABASE"]["USER"],
          DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
          DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
          WHERE_KEY: "ID",
          WHERE_VALUE: `'${String(USER.value)}'`,
          USER_ID: String(USER.value),
          USER_PASSWORD: PASSWORD.value,
          LIMIT: 1,
        };
        SEND_TO_PHP("LOGIN", SEND);
        setTimeout(() => {
          if (WEB_DATA["USUARIO"]["ID"] == String(USER.value)) {
            USER.classList.remove("ERROR");
            PASSWORD.classList.remove("ERROR");
            Load_User_Data();
            Load_Calendar();
            let TB1 = document
              .getElementById("TABLE_Historial_1")
              .querySelectorAll("tr");
            if (TB1.length < 2) {
              Pacient_List_History();
            }
            setTimeout(() => {
              Load_Plantillas_List();
              GOTO_MENU("Main");
            }, 200);
          } else {
            USER.classList.add("ERROR");
            PASSWORD.classList.add("ERROR");
            GOTO_MENU("Login");
            APP_ALERT("LOGIN", 1);
          }
        }, 1350);
      }
    }
  }
}

function End_Sesion() {
  if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
    WEB_CONFIG["CONEXION"]["METHOD"] = "SERVER";
    SAVE_LOCAL_ALL();
  } else {
    let XPACIENTES = String(WEB_DATA["USUARIO"]["PACIENTES"]).split(",");
    let XPACIENTES2 = "";

    XPACIENTES = new Set(XPACIENTES);
    XPACIENTES.forEach((Xtem) => {
      if (Xtem.length > 2) {
        if (XPACIENTES2.length > 2) {
          XPACIENTES2 += `,`;
        }
        XPACIENTES2 += `${Xtem}`;
      }
    });

    let XSET = `PACIENTES='${XPACIENTES2}'`;

    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: "USER_DATA",
      WHERE_KEY: "ID",
      WHERE_VALUE: `${WEB_DATA["USUARIO"]["ID"]}`,
      SET: XSET,
    };
    SEND_TO_PHP("END_SESION", SEND);
  }
  GOTO_MENU("Login", 0);
}

// >>> [ Funciones del Toolbar ] >>>
function TOOLBAR_ALT_SIZE() {
  let Root = document.querySelector(":root");
  let DOM = document.querySelector("#Mn_Toolbar .Cn_Toolbar");
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
  } else {
    Root.style.setProperty("--Toolbar_width", "200px");
    DOM.style.fontSize = "1rem";
  }
}

function Load_Calendar() {
  let TIME = GET_TIME();
  try {
    let Mes = [
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
    document.getElementById("MM_Name").innerHTML =
      Mes[Number(TIME["MOUNT"]) - 1];
    document
      .getElementById(`DD_S_${Number(TIME["DAY"])}`)
      .classList.add("DD_Actual");
    document.getElementById("DD_S_1").style.gridColumnStart = Number(
      TIME["DAY_ONE"]
    );
    WEB_DATA["FECHA"] = {};
    WEB_DATA["FECHA"]["DIA"] = Number(TIME["DAY"]);
    WEB_DATA["FECHA"]["MES"] = Number(TIME["MOUNT"]) - 1;
    WEB_DATA["FECHA"]["AÑO"] = Number(TIME["YEAR"]);

    document.querySelector("#Calendar_YY").innerHTML = WEB_DATA["FECHA"]["AÑO"];
  } catch {
    return false;
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    if (WEB_DATA["USUARIO"]["ID"] != "") {
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CITAS"],
        WHERE_KEY: "DOCTOR_1",
        WHERE_VALUE: WEB_DATA["USUARIO"]["ID"],
      };
      SEND_TO_PHP("LOAD_DATES", SEND);
    }
  }

  setTimeout(() => {
    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let Temp_C = { ...WEB_DATA["CITAS"] };
      let KEYS = Object.keys(WEB_DATA["CITAS"]);
      if (KEYS.includes("0")) {
        WEB_DATA["CITAS"] = {};
        KEYS.forEach((X) => {
          let ID = Temp_C[X]["ID"];
          if (WEB_DATA["CITAS"]?.[ID] == undefined) {
            WEB_DATA["CITAS"][ID] = {};
          }
          WEB_DATA["CITAS"][ID][Object.keys(WEB_DATA["CITAS"][ID]).length] =
            Temp_C[X];
        });
      }
    }

    WEB_DATA["CALENDAR"] = {};
    let IDS = Object.keys(WEB_DATA["CITAS"]);

    IDS.forEach((ID) => {
      let LAST = Object.keys(WEB_DATA["CITAS"][ID]).length - 1;
      if (LAST >= 0) {
        for (let x = LAST; x >= 0; x--) {
          let XDate = WEB_DATA["CITAS"][ID][x]["FECHA"];
          if (Date.parse(XDate) >= Date.parse(TIME["DATE"])) {
            if (WEB_DATA["CALENDAR"]?.[XDate] == undefined) {
              WEB_DATA["CALENDAR"][XDate] = {};
            }
            WEB_DATA["CALENDAR"][XDate][
              Object.keys(WEB_DATA["CALENDAR"][XDate]).length
            ] = WEB_DATA["CITAS"][ID][x];
          } else {
          }
        }
      }
    });

    IDS = Object.keys(WEB_DATA["CALENDAR"]);
    IDS = IDS.sort();

    let DOM2 = document.querySelector("#Mn_Dates .Dates_List ul");
    DOM2.innerHTML = "";
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

    IDS.forEach((XDate) => {
      let SubIDS = Object.keys(WEB_DATA["CALENDAR"][XDate]);
      let XTIME = String(XDate).split("-");
      let NTEM = ``;

      SubIDS.forEach((Xtem) => {
        DOM2 = document.querySelector("#Mn_Dates .Dates_List ul");

        if (
          document.querySelector(
            `#Mn_Dates .Dates_List ul li details[date="${XDate}"]`
          ) != null
        ) {
          DOM2 = document.querySelector(
            `#Mn_Dates .Dates_List ul details[date="${XDate}"] ul`
          );
          NTEM = `<li><a href="#" onclick="load_date(this)">
          <p class="Hiden">${JSON.stringify(
            WEB_DATA["CALENDAR"][XDate][Xtem]
          )}</p>
          <h4>${WEB_DATA["CALENDAR"][XDate][Xtem]["HORA"]}</h4>
          <div><p>#${WEB_DATA["CALENDAR"][XDate][Xtem]["ID"]}</p>
          <p>${String(WEB_DATA["CALENDAR"][XDate][Xtem]["MOTIVO"]).substring(
            0,
            15
          )}</p>
          </div></a></li>`;
        } else {
          NTEM = `<details date="${WEB_DATA["CALENDAR"][XDate][Xtem]["FECHA"]}">
          <summary>${XTIME[2]} de ${MES[Number(XTIME[1])]} ${XTIME[0]}</summary>
          <ul><li><a href="#" onclick="load_date(this)">
          <p class="Hiden">${JSON.stringify(
            WEB_DATA["CALENDAR"][XDate][Xtem]
          )}</p><h4>${WEB_DATA["CALENDAR"][XDate][Xtem]["HORA"]}</h4>
          <div><p>#${WEB_DATA["CALENDAR"][XDate][Xtem]["ID"]}</p><p>${String(
            WEB_DATA["CALENDAR"][XDate][Xtem]["MOTIVO"]
          ).substring(0, 15)}</p>
          </div></a></li></ul></details>`;
        }

        let CITEM = document.createElement("li");
        CITEM.innerHTML = NTEM;
        DOM2.appendChild(CITEM);
      });
    });
  }, 2500);

  return true;
}

function Load_User_Data() {
  let Elements = document.querySelectorAll("#Mn_Main .Cn_Box_Sty_1 *[ITEM]");

  let Consultorio_Keys = ["CON_NOMBRE", "CON_DIRECCION"];
  Elements.forEach((Xtem) => {
    let KEY = Xtem.getAttribute("ITEM");
    try {
      if (Consultorio_Keys.includes(KEY)) {
        KEY = String(KEY).substring(4);
        if (WEB_DATA["CONSULTORIO"]?.[KEY]) {
          Xtem.innerHTML =
            "<b>" + KEY + ":</b> " + WEB_DATA["CONSULTORIO"][KEY];
        } else {
          Xtem.innerHTML = "<b>" + KEY + ":</b> ";
        }
      } else {
        if (WEB_DATA["USUARIO"]?.[KEY]) {
          Xtem.innerHTML = "<b>" + KEY + ":</b> " + WEB_DATA["USUARIO"][KEY];
        } else {
          Xtem.innerHTML = "<b>" + KEY + ":</b> ";
        }
      }
    } catch (err) {
      console.warn(err);
    }
  });

  if (WEB_DATA["USUARIO"]?.["IMG"] != undefined) {
    document.querySelector("#Mn_Main > div > div.Cn_Box_Sty_1 > img").src =
      WEB_DATA["USUARIO"]["IMG"];
    document.querySelector(
      "#Mn_Toolbar > div.Cn_Toolbar > div:nth-child(1) > div > img"
    ).src = WEB_DATA["USUARIO"]["IMG"];
  }

  document.querySelector('#NEW_DATE input[ITEM="DOCTOR_1"]').value =
    WEB_DATA["USUARIO"]["ID"];
  document.querySelector("#Cn_Pacientes_List ul").innerHTML = "";
  document.getElementById("TABLE_PACIEENTS_COUNT_T").innerText = "0";
  document.getElementById("TABLE_PACIEENTS_COUNT_M").innerText = "0";
  document.getElementById("TABLE_PACIEENTS_COUNT_F").innerText = "0";

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    document
      .querySelector("#Mn_Main > div > div.Menu > button:nth-child(6)")
      .classList.add("Hiden");

    let XWHERE = ``;
    let LIST = String(WEB_DATA["USUARIO"]["PACIENTES"]).split(",");
    if (LIST.length > 0 && LIST[0].length > 3) {
      LIST.forEach((Xtem) => {
        if (Xtem != "") {
          Xtem = String(Xtem).trim();
          if(XWHERE.length > 2){ 
            XWHERE += " OR ";
          }
          XWHERE += `ID='${Xtem}'`;
        }
      });
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
        WHERE: XWHERE,
      };
      SEND_TO_PHP("LOAD_PACIENT_LIST", SEND);
    }
  }

  setTimeout(() => {
    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let RAW_KEYS = Object.keys(WEB_DATA["PACIENTES"]);
      if (RAW_KEYS.includes("0")) {
        let Temp_P = { ...WEB_DATA["PACIENTES"] };
        WEB_DATA["PACIENTES"] = {};
        RAW_KEYS.forEach((X) => {
          let ID = Temp_P[X]["ID"];
          WEB_DATA["PACIENTES"][ID] = Temp_P[X];
        });
      }
    }
    let TOTAL = Object.keys(WEB_DATA["PACIENTES"]).length;
    if (TOTAL > 0) {
      let KEYS = Object.keys(WEB_DATA["PACIENTES"]);
      let BLACKLIST = ["BLANK", "SELECTED"];
      for (let x = 0; x < TOTAL; x++) {
        if (BLACKLIST.includes(KEYS[x]) == false) {
          Import_Pacient(String(KEYS[x]).toUpperCase());
        }
      }
    }
  }, 1550);
  return true;
}

function Load_Plantillas_List() {
  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    WEB_DATA["PLANTILLAS"]["LINEA"] = {};
    WEB_DATA["PLANTILLAS"]["LOCAL"] = {};

    let PREPARE1 = `DOCTOR = 'DEF' AND TIPO = 'PLANTILLA'`;
    let PREPARE2 = `DOCTOR = '${WEB_DATA["USUARIO"]["ID"]}' AND TIPO = 'PLANTILLA'`;
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
      WHERE_1: PREPARE1,
      WHERE_2: PREPARE2,
    };
    SEND_TO_PHP("LOAD_TEMPLATES", SEND);
  } else {
  }

  setTimeout(() => {
    PreLoad_Plantillas();
  }, 3500);
}

function Calendar_DD_Selected(DD = null) {
  let TIME = GET_TIME();
  let MES = WEB_DATA["FECHA"]["MES"] + 1;
  if (MES < 10) {
    MES = `0${MES}`;
  }

  let IN_FECHA = document.querySelector("#NEW_DATE input[ITEM='FECHA']");
  let IN_ID = document.querySelector("#NEW_DATE input[ITEM='ID']");
  let IN_DOC = document.querySelector("#NEW_DATE input[ITEM='DOCTOR_1']");

  if (DD != null && DD != "NO") {
    IN_FECHA.value = `${WEB_DATA["FECHA"]["AÑO"]}-${MES}-${DD}`;
  }
  if (WEB_DATA["PACIENTES"]["SELECTED"]?.["ID"]) {
    IN_ID.value = WEB_DATA["PACIENTES"]["SELECTED"]["ID"];
  }
  IN_DOC.value = WEB_DATA["USUARIO"]["ID"];
  if (DD == "NO") {
    document.querySelector("#NEW_DATE").classList.add("Hiden");
    IN_ID.value = "";
    IN_FECHA.value = "";
    document.querySelector("#NEW_DATE input[ITEM='MOTIVO']").value = "";
    
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  } else {
    document.querySelector("#NEW_DATE").classList.remove("Hiden");
  }

  if (
    String(WEB_DATA["PACIENTES"]["SELECTED"]["ID"]).length > 3 &&
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] == "false"
  ) {
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "Add";
  }
}

function Calendar_MM(Step = null) {
  if (Step == null) {
    return false;
  }
  WEB_DATA["FECHA"]["MES"] = Number(WEB_DATA["FECHA"]["MES"]);

  if (Step == 1) {
    WEB_DATA["FECHA"]["MES"] += 1;
    if (WEB_DATA["FECHA"]["MES"] > 11) {
      WEB_DATA["FECHA"]["MES"] = 0;
      WEB_DATA["FECHA"]["AÑO"] += 1;
      document.querySelector("#Calendar_YY").innerHTML =
        WEB_DATA["FECHA"]["AÑO"];
    }
  } else if (Step == -1) {
    WEB_DATA["FECHA"]["MES"] -= 1;
    if (WEB_DATA["FECHA"]["MES"] < 0) {
      WEB_DATA["FECHA"]["MES"] = 11;
      WEB_DATA["FECHA"]["AÑO"] -= 1;
      document.querySelector("#Calendar_YY").innerHTML =
        WEB_DATA["FECHA"]["AÑO"];
    }
  } else {
  }

  Calendar_Update();
}

function Calendar_Update() {
  let TIME = GET_TIME();
  try {
    let Mes = [
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

    document.querySelector("#MM_Name").innerHTML =
      Mes[WEB_DATA["FECHA"]["MES"]];
    if (
      TIME["YEAR"] == WEB_DATA["FECHA"]["AÑO"] &&
      TIME["MOUNT"] == WEB_DATA["FECHA"]["MES"] + 1
    ) {
      document
        .getElementById(`DD_S_${Number(TIME["DAY"])}`)
        .classList.add("DD_Actual");
    } else {
      document
        .getElementById(`DD_S_${Number(TIME["DAY"])}`)
        .classList.remove("DD_Actual");
    }

    let NTIME = new Date(
      WEB_DATA["FECHA"]["AÑO"],
      WEB_DATA["FECHA"]["MES"],
      1
    ).getDay();
    if (NTIME == 0) {
      NTIME = 7;
    }
    document.getElementById("DD_S_1").style.gridColumnStart = NTIME;

    let DAYS = new Date(
      WEB_DATA["FECHA"]["AÑO"],
      WEB_DATA["FECHA"]["MES"] + 1,
      0
    ).getDate();

    for (let x = 28; x <= 31; x++) {
      if (x > DAYS) {
        document.querySelector(`#DD_S_${x}`).classList.add("Hiden");
      } else {
        document.querySelector(`#DD_S_${x}`).classList.remove("Hiden");
      }
    }
  } catch {
    return false;
  }
}

function Add_New_Date() {
  let DOM = document.querySelector("#NEW_DATE form");
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
  if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
    if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] == true) {
      let DATA =
        WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
          WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
        ];
      XWHERE = `ID = '${DATA["ID"]}' AND FECHA = '${DATA["FECHA"]}' AND HORA = '${DATA["HORA"]}'`;
      SET = `FECHA='${DATA_RAW["FECHA"]}', HORA='${DATA_RAW["HORA"]}', MOTIVO='${DATA_RAW["MOTIVO"]}'`;
      WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
        WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
      ] = DATA_RAW;
      setTimeout(() => {
        Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
      }, 250);
    } else {
      if (WEB_DATA["CITAS"]?.[DATA_RAW["ID"]] == undefined) {
        WEB_DATA["CITAS"][DATA_RAW["ID"]] = {};
      }
      let NUM = Object.keys(WEB_DATA["CITAS"][DATA_RAW["ID"]]).length;
      Add_Notelist("Date", DATA_RAW, NUM);
    }
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CITAS"],
      SET: SET,
      TABLE_KEYS: DATA1,
      VALUES: DATA2,
      WHERE: XWHERE,
    };
    SEND_TO_PHP("ADD_DATE", SEND);
  }

  if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "false" || WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "Add") {
    let NUM = Object.keys(WEB_DATA["CITAS"][DATA_RAW["ID"]]).length;
    if(WEB_DATA["CITAS"]?.[DATA_RAW["ID"]] == undefined){
      WEB_DATA["CITAS"][DATA_RAW["ID"]] = {};
    }
    WEB_DATA["CITAS"][DATA_RAW["ID"]][NUM] = DATA_RAW;

    let DOM2 = document.querySelector("#Mn_Dates .Dates_List ul");
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
        `#Mn_Dates .Dates_List ul li details[date="${DATA_RAW["FECHA"]}"]`
      ) != null
    ) {
      DOM2 = document.querySelector(
        `#Mn_Dates .Dates_List ul details[date="${DATA_RAW["FECHA"]}"] ul`
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

  if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] == "false") {
    GOTO_MENU("Dates", 0);
  } else {
    Calendar_DD_Selected("NO");
  }
  ITEMS.forEach((Xtem) => {
    Xtem.value = "";
  });

  WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
  WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
}

function load_date(TEXT = "") {
  let DATA_RAW = TEXT.querySelector('p[class="Hiden"]').textContent;
  let DATA = JSON.parse(DATA_RAW);
  let DOM = document.querySelector("#Mn_Dates .Dates_Details");
  let ITEMS = DOM.querySelectorAll("p[item]");

  let KEYS = Object.keys(DATA);
  ITEMS.forEach((Xtem) => {
    let Xkey = Xtem.getAttribute("ITEM");
    if (KEYS.includes(Xkey)) {
      Xtem.textContent = DATA[Xkey];
    } else {
      if (Xkey == "NOMBRE") {
        let ID = document.querySelector(
          '#Mn_Dates .Dates_Details *[ITEM="ID"]'
        ).textContent;
        Xtem.textContent = WEB_DATA["PACIENTES"]?.[ID]
          ? WEB_DATA["PACIENTES"][ID]["NOMBRE"]
          : "#N/A";
      } else {
        Xtem.textContent = "#N/A";
      }
    }
  });
}

function Pacient_List_History() {
  let Elements1 = [
    "Diabetes",
    "Hipertension",
    "Cardiopatias",
    "Osteoporosis",
    "Tuberculusis",
    "Cacer cervicouterino",
    "Cancer de mama",
    "Obesisdad",
    "Dislipidemia",
    "Insuficiencia renal",
    "Muerte cardiovascular",
    "Enfermedades cerebrovasculares",
    "Tabaquismo",
    "Tiroides",
    "Epilepsia",
    "Distrofia Muscular",
  ];
  let Elements2 = [
    "Obesidad",
    "Tuberculosis",
    "Diabetes",
    "Sarampion",
    "Rubeola",
    "Tosferia",
    "Varicela",
    "Escarlatina",
    "Amigdalitis",
    "Hepatitis",
    "Convulsiones",
    "Cardiopatias",
    "Osteoporosis",
    "Dislipidemia",
    "Cancer",
    "Artitis",
    "Tiroides",
  ];
  Elements1.sort();
  Elements2.sort();

  let TB1 = document.getElementById("TABLE_Historial_1");
  let TB2 = document.getElementById("TABLE_Historial_2");

  let T_newRow1 = TB1.insertRow(0);
  let T_Cell;
  let Num = 0;

  setTimeout(() => {
    for (let a in Elements1) {
      setTimeout(() => {
        if (Num > 3) {
          T_newRow1 = TB1.insertRow(-1);
          Num = 0;
        }
        T_Cell = T_newRow1.insertCell(Num);
        T_Cell.innerHTML = `<button type="button" class="NO_CHECKED" onclick="Btn_Togle(this,'Pacient_History')">${Elements1[a]}</button>`;
        Num += 1;
      }, 10 * a);
    }
    setTimeout(() => {
      Num = 0;
      let T_newRow2 = TB2.insertRow(0);
      for (let a in Elements2) {
        setTimeout(() => {
          if (Num > 3) {
            T_newRow2 = TB2.insertRow(-1);
            Num = 0;
          }
          T_Cell = T_newRow2.insertCell(Num);
          T_Cell.innerHTML = `<button type="button" class="NO_CHECKED" onclick="Btn_Togle(this,'Pacient_History')">${Elements2[a]}</button>`;
          Num += 1;
        }, 10 * a);
      }
    }, 500);
  }, 100);

  return true;
}

function Pacient_Register(TEXT = {}) {
  let DOM = document.querySelectorAll("#REGISTER_FORM *[item]");
  let IMAGE_DOM = document.querySelector("#Mn_Camara #CAM_IMG");
  let IMAGE = IMAGE_DOM.src;
  let TIMG = "";
  if (IMAGE.length < 128) {
    IMAGE = document.querySelector('#Mn_Import_File_R input[item="ARCHIVO"]');

    if (IMAGE.files.length > 0) {
      IMAGE = IMAGE.files[0];
      let READER = new FileReader();
      READER.onloadend = () => {
        TIMG = READER.result;
      };
      READER.readAsDataURL(IMAGE);
    } else {
      IMAGE = "";
    }
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
    WEB_DATA["PACIENTES"][DATA["CURP"]] = DATA;
    DATA["HISTORIAL_1"] = "";
    DATA["HISTORIAL_2"] = "";
    DATA["HISTORIAL_3"] = "";
    DATA["HISTORIAL_4"] = "";
    DATA["HISTORIAL_5"] = "";

    if (DATA["CURP"].length < 3) {
      return false;
    }

    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let KEYS_RAW = Object.keys(DATA);
      let KEYS = "";
      let VALUES = "";
      let XWHERE = "";

      if (TEXT?.MODE == "EDIT") {
        XWHERE = `ID = ${TEXT.ID}`;
      }

      KEYS_RAW.forEach((Xtem) => {
        KEYS += `${Xtem},`;
        VALUES += `'${DATA[Xtem]}',`;
      });
      KEYS = KEYS.substring(0, KEYS.length - 1);
      VALUES = VALUES.substring(0, VALUES.length - 1);

      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
        TABLE_KEYS: KEYS,
        VALUES: VALUES,
        WHERE: XWHERE,
      };
      SEND_TO_PHP("ADD_PACIENT", SEND);
    }

    WEB_DATA["PACIENTES"][DATA["ID"]] = { ...DATA };
    Import_Pacient(DATA["ID"]);

    GOTO_MENU("Pacient_Select");

    DOM.forEach((Xtem) => {
      Xtem.value = "";
    });
    IMAGE_DOM.src = "";
  }, 150);
}

function Pacient_Load(Pacient, Force=false) {
  try {
    let Reset = document.querySelectorAll(
      '#Mn_Pacientes_History button[class="CHECKED"]'
    );
    Reset.forEach((X) => {
      X.setAttribute("class", "NO_CHECKED");
    });
  } catch (err) {
    console.warn(err);
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
    if (WEB_DATA["PACIENTES"]?.[Pacient] != null) {
      WEB_DATA["PACIENTES"]["SELECTED"] = WEB_DATA["PACIENTES"][Pacient];
    } else {
      GOTO_MENU("Main", 0);
      APP_ALERT("ERROR", 1);
      return false;
    }
  } else {
    if (WEB_DATA["PACIENTES"]?.[Pacient] == undefined || Force == true) {
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
        USER: `'${WEB_DATA["USUARIO"]["ID"]}'`,
        KEYS: "*",
        WHERE_KEY: "ID",
        WHERE_VALUE: Pacient,
      };
      SEND_TO_PHP("LOAD_PACIENT", SEND);
    } else {
      WEB_DATA["PACIENTES"]["SELECTED"] = WEB_DATA["PACIENTES"][Pacient];
    }
  }

  let Count = 35;
  let REPEAT = setInterval(() => {
    if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"] != "") {
      clearInterval(REPEAT);
      let DOM = document.querySelectorAll("#PACIENTE_INFO *[ITEM]");
      let RESP = ["R_NOMBRE", "R_TEL", "R_CORREO"];
      let Respon = {};
      try {
        Respon = JSON.parse(WEB_DATA["PACIENTES"]["SELECTED"]["RESPONSABLE"]);
      } catch (err) {
      }

      DOM.forEach((Xtem) => {
        let KEY = Xtem.getAttribute("ITEM");
        if (KEY == "NOMBRE") {
          Xtem.textContent =
            `${WEB_DATA["PACIENTES"]["SELECTED"]["NOMBRE"]} ${WEB_DATA["PACIENTES"]["SELECTED"]["APELLIDO_1"]} ${WEB_DATA["PACIENTES"]["SELECTED"]["APELLIDO_2"]}`.toUpperCase();
        } else if (KEY == "IMG") {
          if(WEB_DATA["PACIENTES"]["SELECTED"]["IMG"] != undefined){
            let XIMG = WEB_DATA["PACIENTES"]["SELECTED"]["IMG"]
            Xtem.src = (XIMG.length > 128)? XIMG:"IMG/User_Img.jpg";
          }
        } else {
          try {
            if (Xtem.nodeName == "INPUT") {
              if (WEB_DATA["PACIENTES"]["SELECTED"][KEY] != undefined) {
                Xtem.value = String(
                  WEB_DATA["PACIENTES"]["SELECTED"][KEY]
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
                WEB_DATA["PACIENTES"]["SELECTED"][KEY]
              ).toUpperCase();
            }
          } catch (err) {
            console.warn(err);
          }
        }
      });

      if (WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_1"] != "") {
        let HIST = String(
          WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_1"]
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
      if (WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_2"] != "") {
        let HIST = String(
          WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_2"]
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
      if (WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_3"] != "") {
        let HIST = String(
          WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_3"]
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
              Values[1] = Values[1].trim();

              let Buttons = TABLES[x].querySelectorAll("button");
              if (Values[1].length > 1) {
                Buttons.forEach((Xtem) => {
                  let VAL = String(Xtem.textContent).toLocaleUpperCase();
                  VAL = VAL.trim();
                  if (VAL == Values[1]) {
                    Xtem.setAttribute("class", "CHECKED");
                  }
                });
              }
            } catch (err) {}
          }
        }
      }
      if (WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_4"] != "") {
        let HIST = String(
          WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_4"]
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
      if (WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_5"] != "") {
        let HIST = String(
          WEB_DATA["PACIENTES"]["SELECTED"]["HISTORIAL_5"]
        ).toUpperCase();
        HIST = HIST.split(",");

        let TABLES = document.querySelectorAll("#TABLE_Historial_5 table");
        if (HIST.length > 0) {
          let Rest = document.querySelector("#Info_History_5");
          for (let x = 0; x < HIST.length; x++) {
            let Add = document.createElement("p");
            Add.innerHTML = HIST[x];
            Rest.appendChild(Add);

            let Values = String(HIST[x]).split(":");
            let Buttons = TABLES[x].querySelectorAll("button");
            if (Values[1] == "SI") {
              Buttons[0].setAttribute("class", "CHECKED");
            } else {
              Buttons[1].setAttribute("class", "CHECKED");
            }
          }
        }
      }

      document.querySelector('#Mn_Banner_Pacient_Data > div:nth-child(2) > button.Btn_Sty_3')
      .setAttribute('onclick',`Pacient_Load('${WEB_DATA["PACIENTES"]["SELECTED"]["ID"]}',true)`);
      Load_NoteList(Pacient);
      GOTO_MENU("Pacient_Data", 0);
    } else {
      if (Count > 0) {
        Count -= 1;
      } else {
        clearInterval(REPEAT);
        APP_ALERT("ERROR", 2);
        return false;
      }
    }
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = 'false';  
  }, 250);
}

function Import_Pacient(ID, Btn = null) {
  if (ID.length < 3) {
    return false;
  }
  ID = String(ID).toUpperCase();
  if (Btn != null) {
    Btn.setAttribute("class", "Btn_Sty_4");
    Btn.textContent = "En propiedad";
    Btn.setAttribute('onclick','');
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    if (WEB_DATA["PACIENTES"]?.[ID] == undefined) {
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
        KEYS: "*",
        WHERE_KEY: "ID",
        WHERE_VALUE: `${ID}`,
        SET: `'${ID},',PACIENTES`,
        USER: WEB_DATA["USUARIO"]["ID"],
      };
      SEND_TO_PHP("IMPORT_PACIENT", SEND);
    }
  }

  let Count = 25;
  let RESICLE = setInterval(() => {
    if(WEB_DATA['PACIENTES']?.[ID] != undefined){
      clearInterval(RESICLE);

      let DATA = WEB_DATA["PACIENTES"]?.[ID];
      if (DATA == undefined) {
        return false;
      }
      var PList = document.querySelector(".Pacient_List");
      if(DATA?.["IMG"] != undefined){
        DATA["IMG"] = (DATA["IMG"].length > 128) ? DATA["IMG"]:"IMG/User_Img.jpg";
      }
      let IMAGE = DATA?.["IMG"] ?? "IMG/User_Img.jpg";
      let Element = `
      <a href="#" class="Element_Pacient" onclick="Pacient_Load('${DATA.ID}')">
      <img src="${IMAGE}" alt=""><span>
      <p class="Pacient_List_ID">#${DATA.ID}</p>
      <p class="Pacient_List_NAME">${DATA.NOMBRE} ${DATA.APELLIDO_1} ${DATA.APELLIDO_2}</p>
      <p class="Pacient_List_MORE">${DATA.GENERO}, ${DATA.FECHA}, ${DATA.RH}, ${DATA.TELEFONO_1}, ${DATA.CORREO}</p>
      </span></a>`;

      Pacient_Elemen = document.createElement("li");
      Pacient_Elemen.classList.add("Element_Pacient_Li");
      Pacient_Elemen.innerHTML = Element;
      PList.appendChild(Pacient_Elemen);

      if(WEB_DATA["USUARIO"]?.["PACIENTES"] == undefined){
        WEB_DATA["USUARIO"]["PACIENTES"] = {}
      }
      WEB_DATA["USUARIO"]["PACIENTES"][ID] = DATA;

      let add = document.querySelector("#TABLE_PACIEENTS_COUNT_T");
      add.innerText = Number(add.innerText) + 1;
      let add2 = undefined;
      if (String(DATA["GENERO"])[0] == "M") {
        add2 = document.querySelector("#TABLE_PACIEENTS_COUNT_M");
      }
      if (String(DATA["GENERO"])[0] == "F") {
        add2 = document.querySelector("TABLE_PACIEENTS_COUNT_F");
      }
      if (add2 != undefined) {
        add2.innerText = Number(add2.innerText) + 1;
      }
   }
  
   if(Count < 0){
    clearInterval(RESICLE);
    console.log(`Paciente no importado = ${ID}`)
   }
   Count -= 1;

  }, 200)
  
}

function Search_Pacient() {
  if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
    return false;
  }
  let DOM = document.querySelector("#Mn_Search");
  let TEXT = String(
    DOM.querySelector('input[type="search"]').value
  ).toUpperCase();
  let KEY = String(
    DOM.querySelector('input[name="Search_Category"]:checked + label')
      .textContent
  ).toUpperCase();

  if (TEXT.length < 2) {
    return false;
  } else {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
      KEYS: "ID,NOMBRE,APELLIDO_1,APELLIDO_2,FECHA",
      WHERE_KEY: KEY,
      WHERE_VALUE: TEXT,
    };

    SEND_TO_PHP("SEARCH", SEND);

    let TABLE = DOM.querySelector("table");
    let TD = TABLE.querySelectorAll("tr");
    for (let XTD = 0; XTD < TD.length; XTD++) {
      if (XTD > 0) {
        TD[XTD].remove();
      }
    }

    let Count = 12;
    let REPEAT = setInterval(() => {
      if (WEB_DATA["SEARCH"] != undefined) {
        clearInterval(REPEAT);
        let TOTAL = Object.keys(WEB_DATA["SEARCH"]).length;
        for (let Xtem = 0; Xtem < TOTAL; Xtem++) {
          let ROW = TABLE.insertRow(1);
          let Cell1 = ROW.insertCell(0);
          let Cell2 = ROW.insertCell(1);
          let Cell3 = ROW.insertCell(2);
          let Cell4 = ROW.insertCell(3);

          Cell1.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["ID"]}`;
          Cell2.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["NOMBRE"]} ${WEB_DATA["SEARCH"][Xtem]["APELLIDO_1"]} ${WEB_DATA["SEARCH"][Xtem]["APELLIDO_2"]}`;
          Cell3.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["FECHA"]}`;
          if (
            WEB_DATA["PACIENTES"]?.[WEB_DATA["SEARCH"][Xtem]["ID"]] == undefined
          ) {
            Cell4.innerHTML = `<button type="button" class="Btn_Sty_1" onclick="Import_Pacient('${WEB_DATA["SEARCH"][Xtem]["ID"]}',this)"><img src="./IMG/Wifi_Cloud.svg" alt="">Importar</button>`;
          } else {
            Cell4.innerHTML = `<button type="button" class="Btn_Sty_1" onclick="Import_Pacient('${WEB_DATA["SEARCH"][Xtem]["ID"]}',this)"><img src="./IMG/Wifi_Cloud.svg" alt="">Restablecer</button>`;
          }
        }

        clearInterval(REPEAT);
        return true;
      } else {
        if (Count > 0) {
          Count -= 1;
        } else {
          clearInterval(REPEAT);

          let ROW = TABLE.insertRow(1);
          let Cell1 = ROW.insertCell(0);

          Cell1.innerHTML = `<td colspan="4" style="color: #ff3333; background: #ddbbbb; text-align: center;"> SIN RESULTADOS <td>`;

          return false;
        }
      }
    }, 250);
  }
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
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["NOTAS"],
      KEYS: "FECHA,HORA,MOTIVO,TIPO",
      WHERE_KEY: "ID",
      WHERE_VALUE: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
    };
    SEND_TO_PHP("SEARCH", SEND);

    let Count = 16;
    let REPEAT = setInterval(() => {
      if (WEB_DATA["SEARCH"] != undefined) {
        clearInterval(REPEAT);
        let TOTAL = Object.keys(WEB_DATA["SEARCH"]).length;
        for (let Xtem = 0; Xtem < TOTAL; Xtem++) {
          let ROW = TABLA.insertRow(1);
          let Cell1 = ROW.insertCell(0);
          let Cell2 = ROW.insertCell(1);
          let Cell3 = ROW.insertCell(2);
          let Cell4 = ROW.insertCell(3);

          Cell1.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["FECHA"]}`;
          Cell2.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["MOTIVO"]}`;
          Cell3.innerHTML = ``;
          Cell4.innerHTML = `
          <button type="button" class="Btn_Sty_4" onclick="Open_Note('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/eye-solid.svg" alt="">Ver</button>
          <button type="button" class="Btn_Sty_1" onclick="Edit_Note('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Edit.svg" alt="">Editar</button>
          <button type="button" class="Btn_Sty_3" onclick="Delete_Note('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Delete.svg" alt=""></button>
          `;
        }
        return true;
      } else {
        if (Count > 0) {
          Count -= 1;
        } else {
          clearInterval(REPEAT);
          let ROW = TABLA.insertRow(1);
          let Cell1 = ROW.insertCell(0);
          Cell1.innerHTML = `<td colspan="4" style="color: #ff3333; background: #ddbbbb; text-align: center;"> SIN RESULTADOS <td>`;
          return false;
        }
      }
    }, 250);
  }
  return true;
}

function Search_Doc() {
  let TABLA = document.querySelector("#Mn_Pacientes_Docs table");
  let SEARCH = document.querySelector(
    '#Mn_Pacientes_Docs table input[type="search"]'
  ).value;

  if (SEARCH.length > 1) {
    let TR = TABLA.querySelectorAll("tr");
    for (let XTD = 0; XTD < TR.length; XTD++) {
      if (XTD > 0) {
        TD[XTD].remove();
      }
    }

    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
      KEYS: "NOMBRE,TIPO,FECHA,HORA",
      WHERE_KEY: "ID",
      WHERE_VALUE: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
    };
    SEND_TO_PHP("SEARCH", SEND);

    let Count = 16;
    let REPEAT = setInterval(() => {
      if (WEB_DATA["SEARCH"] != undefined) {
        clearInterval(REPEAT);
        let TOTAL = Object.keys(WEB_DATA["SEARCH"]).length;
        for (let Xtem = 0; Xtem < TOTAL; Xtem++) {
          let ROW = TABLA.insertRow(1);
          let Cell1 = ROW.insertCell(0);
          let Cell2 = ROW.insertCell(1);
          let Cell3 = ROW.insertCell(2);
          let Cell4 = ROW.insertCell(3);

          Cell1.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["FECHA"]}`;
          Cell2.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["NOMBRE"]}`;
          Cell3.innerHTML = `${WEB_DATA["SEARCH"][Xtem]["TIPO"]}`;
          Cell4.innerHTML = `
          <button type="button" class="Btn_Sty_4" onclick="Open_Doc('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/eye-solid.svg" alt="">Ver</button>
          <button type="button" class="Btn_Sty_1" onclick="Edit_Doc('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Edit.svg" alt="">Editar</button>
          <button type="button" class="Btn_Sty_3" onclick="Delete_Doc('${WEB_DATA["SEARCH"][Xtem]["FECHA"]},${WEB_DATA["SEARCH"][Xtem]["HORA"]}')"><img src="./IMG/Delete.svg" alt=""></button>
          `;
        }
        return true;
      } else {
        if (Count > 0) {
          Count -= 1;
        } else {
          clearInterval(REPEAT);
          let ROW = TABLA.insertRow(1);
          let Cell1 = ROW.insertCell(0);
          Cell1.innerHTML = `<td colspan="4" style="color: #ff3333; background: #ddbbbb; text-align: center;"> SIN RESULTADOS <td>`;
          return false;
        }
      }
    }, 250);
  }
  return true;
}

function Save_Pacient() {
  let DATA = WEB_DATA["PACIENTES"]["SELECTED"];

  let INFO1 = document.querySelectorAll("#PACIENTE_INFO input[item]");
  let PResp = ["R_NOMBRE", "R_TEL", "R_CORREO"];
  DATA["RESPONSABLE"] = "";
  INFO1.forEach((Xtem) => {
    let KEY = Xtem.getAttribute("ITEM");
    if (PResp.includes(KEY) == false) {
      DATA[KEY] = Xtem.value;
    } else {
      if (DATA["RESPONSABLE"].length > 2) {
        DATA["RESPONSABLE"] += `,`;
      }
      DATA["RESPONSABLE"] += `"${KEY}":"${Xtem.value}"`;
    }
  });
  DATA["RESPONSABLE"] = `{${DATA["RESPONSABLE"]}}`;

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

  Hist1.forEach((Xtem) => {
    DATA["HISTORIAL_1"] += `${String(Xtem.textContent).toLowerCase()},`
      .replace("\n", "")
      .replace("\n", "")
      .trim();
  });
  Hist2.forEach((Xtem) => {
    DATA["HISTORIAL_2"] += `${String(Xtem.textContent).toLowerCase()},`
      .replace("\n", "")
      .replace("\n", "")
      .trim();
  });
  Hist3.forEach((Xtem) => {
    DATA["HISTORIAL_3"] += `${String(Xtem.textContent).toLowerCase()},`
      .replace("\n", "")
      .replace("\n", "")
      .trim();
  });
  Hist4.forEach((Xtem) => {
    DATA["HISTORIAL_4"] += `${String(Xtem.textContent).toLowerCase()},`
      .replace("\n", "")
      .replace("\n", "")
      .trim();
  });
  Hist5.forEach((Xtem) => {
    DATA["HISTORIAL_5"] += `${String(Xtem.textContent).toLowerCase()},`
      .replace("\n", "")
      .replace("\n", "")
      .trim();
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
  let IMAGE_DOM = document.querySelector("#Mn_Camara #CAM_IMG");
  if (IMAGE_DOM.src.length < 128) {
    let IMAGE = document.querySelector(
      '#Mn_Import_File_R input[item="ARCHIVO"]'
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
    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let VALUES = ``;
      let KEYS = Object.keys(DATA);
      let BLACKLIST = ['EDIT','EDIT_INDEX'];
      KEYS.forEach((Xtem) => {
        if(BLACKLIST.includes(Xtem) == false){
          VALUES += `${Xtem}='${DATA[Xtem]}',`;
        }
      });
      VALUES = VALUES.substring(0, VALUES.length - 1);

      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["PACIENTES"],
        SET: VALUES,
        WHERE_KEY: "ID",
        WHERE_VALUE: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
      };
      SEND_TO_PHP("UPDATE_PACIENT", SEND);

      KEYS.forEach((Xtem) => {
        WEB_DATA["PACIENTES"][DATA["ID"]][Xtem] = DATA[Xtem];
      });
    } else {
      let KEYS = Object.keys(DATA);
      KEYS.forEach((Xtem) => {
        WEB_DATA["PACIENTES"][DATA["ID"]][Xtem] = DATA[Xtem];
      });
    }

    IMAGE_DOM.src = "";
    Mn_Doc(-1, "SELECT");
  }, WAIT);
}

function Add_Notelist(Type, DATA, sub = "") {
  if (DATA == undefined) {
    return false;
  }
  var TB = undefined;
  if (Type == "Note") {
    TB = document.getElementById("TABLE_Notes");
  } else if (Type == "Carta") {
    TB = document.getElementById("TABLE_Docs");
  } else if (Type == "Archivo") {
    TB = document.getElementById("TABLE_Files");
  } else if (Type == "Date") {
    TB = document.getElementById("TABLE_Dates");
  } else {
    return false;
  }

  let TIME = GET_TIME();
  let Row = TB.insertRow(1);
  let Cell1 = Row.insertCell();
  let Cell2 = Row.insertCell();
  let Cell3 = Row.insertCell();
  let Cell4 = Row.insertCell();

  if (Type == "Note") {
    let Temp = JSON.parse(DATA["OTROS"]);
    Cell1.innerHTML = DATA?.["FECHA"] ?? "";
    if (DATA?.["MOTIVO"] == "undefined" || DATA?.["MOTIVO"] == "UNDEFINED") {
      Cell2.innerHTML = Temp?.["TYPE"] ?? "";
    } else {
      Cell2.innerHTML = DATA?.["MOTIVO"] ?? "";
    }
    Cell3.innerHTML = Temp?.["TYPE"] ?? "";
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
    if (Date.parse(TIME["DATE"]) > Date.parse(DATA?.["FECHA"])) {
      Cell2.innerHTML = "Completa";
    } else {
      Cell2.innerHTML = "Pendiente";
    }
    Cell3.innerHTML = DATA?.["MOTIVO"] ?? "";
  }
  if (Type != "Archivo") {
    Cell4.innerHTML = `
    <div>
    <button type="button" class="Btn_Sty_4" onclick="READ_TEXT('${Type}',${sub})"><img src="./IMG/eye-solid.svg" alt=""></button>
    <button type="button" class="Btn_Sty_4" onclick="EDIT_TEXT('${Type}',${sub})"><img src="./IMG/Edit.svg" alt=""></button>
    <button type="button" class="Btn_Sty_3" onclick="DELETE_FILE(${sub}, '${Type.toUpperCase()}')"><img src="./IMG/Delete.svg" alt=""></button>
    </div>`;
  } else {
    Cell4.innerHTML = `
    <div>
    <button type="button" class="Btn_Sty_4" onclick="DOWNLOAD_FILE(${sub},'FILE',false)"><img src="./IMG/eye-solid.svg" alt=""></button>
    <button type="button" class="Btn_Sty_4" onclick="DOWNLOAD_FILE(${sub},'FILE',true)"><img src="./IMG/Download.svg" alt=""></button>
    <button type="button" class="Btn_Sty_3" onclick="DELETE_FILE(${sub}, 'FILE')"><img src="./IMG/Delete.svg" alt=""></button>
    </div>`;
  }
}

function Load_NoteList(ID, ReloadAll = true) {
  if (WEB_DATA["PACIENTES"]?.[ID] == undefined) {
    return false;
  }
  if (ReloadAll == true) {
    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE1: WEB_CONFIG["DATABASE"]["TABLA"]["NOTAS"],
        DB_TABLE2: WEB_CONFIG["DATABASE"]["TABLA"]["CITAS"],
        DB_TABLE3: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
        DB_TABLE4: WEB_CONFIG["DATABASE"]["TABLA"]["ARCHIVOS"],
        USER: `'${WEB_DATA["USUARIO"]["ID"]}'`,
        KEYS: "*",
        WHERE_KEY: "ID",
        WHERE_VALUE: ID,
      };
      SEND_TO_PHP("LOAD_NOTES", SEND);
    }
  }

  if(WEB_CONFIG['CONEXION']['METHOD'] == "LOCAL"){
    WEB_DATA["NOTAS"]["TEMP"] = {};
    WEB_DATA["CITAS"]["TEMP"] = {};
    WEB_DATA["DOCUMENTOS"]["TEMP"] = WEB_DATA["DOCUMENTOS"]?.["TEMP"] ?? {};
    WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"] = {};
    WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = {};
  }

  setTimeout(() => {
    WEB_DATA["DOCUMENTOS"][ID] = WEB_DATA["DOCUMENTOS"]?.[ID]
      ? WEB_DATA["DOCUMENTOS"][ID]
      : {};

    if (WEB_DATA["NOTAS"]["TEMP"] != {}) {
      WEB_DATA["NOTAS"][ID] = WEB_DATA["NOTAS"]?.[ID]
        ? WEB_DATA["NOTAS"][ID]
        : { ...WEB_DATA["NOTAS"]["TEMP"] };
      WEB_DATA["NOTAS"]["TEMP"] = {};
    }
    if (WEB_DATA["CITAS"]["TEMP"] != {}) {
      WEB_DATA["CITAS"][ID] = WEB_DATA["CITAS"]?.[ID]
        ? WEB_DATA["CITAS"][ID]
        : { ...WEB_DATA["CITAS"]["TEMP"] };
      WEB_DATA["CITAS"]["TEMP"] = {};
    }
    if (WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"] != {}) {
      if (WEB_DATA["DOCUMENTOS"]?.[ID]?.["CARTAS"] == undefined) {
        WEB_DATA["DOCUMENTOS"][ID]["CARTAS"] = Object(
          WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"]
        );
      }
    }
    if (WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] != {}) {
      if (WEB_DATA["DOCUMENTOS"]?.[ID]?.["ARCHIVOS"] == undefined) {
        WEB_DATA["DOCUMENTOS"][ID]["ARCHIVOS"] = Object(
          WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"]
        );
      }
    }
    WEB_DATA["DOCUMENTOS"]["TEMP"]["CARTAS"] = {};
    WEB_DATA["DOCUMENTOS"]["TEMP"]["ARCHIVOS"] = {};

    if (WEB_DATA["NOTAS"]?.[ID] != undefined) {
      let TABLA = document.querySelectorAll("#TABLE_Notes tr");
      let KEYS = Object.keys(WEB_DATA["NOTAS"][ID]);
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      for (
        let Xtem = 0;
        Xtem < Object.keys(WEB_DATA["NOTAS"][ID]).length;
        Xtem++
      ) {
        Add_Notelist("Note", WEB_DATA["NOTAS"][ID][KEYS[Xtem]], KEYS[Xtem]);
      }
    }
    if (WEB_DATA["CITAS"]?.[ID] != undefined) {
      let TABLA = document.querySelectorAll("#TABLE_Dates tr");
      let KEYS = Object.keys(WEB_DATA["CITAS"][ID]);
      for (let x = 1; x < TABLA.length; x++) {
        TABLA[x].remove();
      }
      for (
        let Xtem = 0;
        Xtem < Object.keys(WEB_DATA["CITAS"][ID]).length;
        Xtem++
      ) {
        Add_Notelist("Date", WEB_DATA["CITAS"][ID][KEYS[Xtem]], KEYS[Xtem]);
      }
    }
    if (WEB_DATA["DOCUMENTOS"]?.[ID] != undefined) {
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
      let KEYS = Object.keys(WEB_DATA["DOCUMENTOS"][ID]["CARTAS"]);
      try {
        Count_End = Object.keys(WEB_DATA["DOCUMENTOS"][ID]["CARTAS"]).length;
        Count_Start = Count_Start < 50 ? 0 : Count_Start - 50;
        if (Count_End > 0) {
          for (let Xtem = Count_Start; Xtem < Count_End; Xtem++) {
            Add_Notelist(
              "Carta",
              WEB_DATA["DOCUMENTOS"][ID]["CARTAS"][KEYS[Xtem]],
              KEYS[Xtem]
            );
          }
        }
      } catch (err) {
        console.warn(err);
      }
      try {
        KEYS = Object.keys(WEB_DATA["DOCUMENTOS"][ID]["ARCHIVOS"]);
        Count_End = Object.keys(WEB_DATA["DOCUMENTOS"][ID]["ARCHIVOS"]).length;
        Count_Start = Count_Start < 50 ? 0 : Count_Start - 50;
        if (Count_End > 0) {
          for (let Xtem = Count_Start; Xtem < Count_End; Xtem++) {
            Add_Notelist(
              "Archivo",
              WEB_DATA["DOCUMENTOS"][ID]["ARCHIVOS"][KEYS[Xtem]],
              KEYS[Xtem]
            );
          }
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }, 1500);
}

function Btn_Togle(Btn, Menu = "") {
  let Btn_State = Btn.getAttribute("class");
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
      text = text.substring(0, -2);
      Item[2].innerHTML = "Servicios: " + text;
    } else if (Table_Name == "TABLE_Historial_3c") {
      let text = "";
      let Xtem = document.querySelectorAll(
        '#TABLE_Historial_3b button[class="CHECKED"]'
      );
      let Item = History_3.querySelectorAll("p");
      Xtem.forEach((x) => {
        text += `${x.textContent} - `;
      });
      text = text.substring(0, -2);
      Item[3].innerHTML = "Fauna: " + text;
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
    let Nod_Name = Nod.getAttribute("id");

    if (Nod_Name == "Config_Menu") {
      Elements = Nod.querySelectorAll("button");
      let CMenus = document.getElementById("Mn_Config_App");
      let CMenus1 = CMenus.querySelectorAll('div[class="Cn_Box_Sty_0"]');
      CMenus1.forEach((x) => {
        x.classList.add("Hiden");
      });

      if (Btn.innerText == "Usuario") {
        document.getElementById("Config_User").classList.remove("Hiden");
      }
      if (Btn.innerText == "Consultorio") {
        document.getElementById("Config_Consultory").classList.remove("Hiden");
      }
      if (Btn.innerText == "Horario") {
        document.getElementById("Config_Time").classList.remove("Hiden");
      }
      if (Btn.innerText == "DataBase") {
        document.getElementById("Config_DB").classList.remove("Hiden");
      }
    }
    if (Nod_Name == "Config_User_Gender") {
      Elements = Nod.querySelectorAll("button");
    }
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
  if (TIPO == "N_FAST") {
    NOTE = document.querySelector("#Mn_FNote");
  } else if (TIPO == "N_EVO") {
    NOTE = document.querySelector("#Mn_NotesEv");
  } else if (TIPO == "N_COMPLETE") {
    NOTE = document.querySelector("#Mn_Notes");
  } else if (TIPO == "N_REF") {
    NOTE = document.querySelector("#Mn_Note_Traslado");
  } else if (TIPO == "N_EGRESO") {
    NOTE = document.querySelector("#Mn_Note_Egreso");
  } else if (TIPO == "RECIPE") {
    NOTE = document.querySelector("#Mn_Recipe");
  } else {
    return false;
  }

  let DOM = NOTE.querySelectorAll("*[ITEM]");

  if (ACCION == 0) {
    NOTE.classList.remove("Hiden");
    NOTE.querySelector("input[ITEM='DOCTOR']").value =
      WEB_DATA["USUARIO"]["ID"];
    NOTE.querySelector("input[ITEM='ID']").value =
      WEB_DATA["PACIENTES"]["SELECTED"]["ID"] ?? "";
  } else if (ACCION == -1) {
    DOM.forEach((Xtem) => {
      if (Xtem.getAttribute("type") == "checkbox") {
        Xtem.checked = false;
      } else {
        Xtem.value = "";
      }
    });
    NOTE.classList.add("Hiden");

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  } else if (ACCION == 1) {
    let TIME = GET_TIME();
    let DATA = {};
    let OTROS = {};
    let NOTROS = ["DOCTOR", "FECHA", "HORA", "TEXTO", "MOTIVO", "ID"];
    DOM.forEach((Xtem) => {
      let Key = String(Xtem.getAttribute("item")).toUpperCase();
      DATA[Key] = String(Xtem.value).toUpperCase();
      if (NOTROS.includes(Key) == false) {
        if (Xtem.getAttribute("type") == "text") {
          if (Xtem.value != undefined && String(Xtem.value).trim() != "") {
            OTROS[Key] = String(Xtem.value).toUpperCase();
          }
        } else if (Xtem.getAttribute("type") == "checkbox") {
          if (Xtem.checked == true) {
            OTROS[Key] = 1;
          }
        }
      }
    });
    DATA["FECHA"] = TIME["DATE"];
    DATA["HORA"] = TIME["TIME"];
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

    if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
      if (WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] == true) {
        let XDATA =
          WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
            WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
          ];
        VALUES = "";
        XWHERE = `ID='${WEB_DATA["PACIENTES"]["SELECTED"]["ID"]}' AND HORA='${XDATA["HORA"]}' AND FECHA='${XDATA["FECHA"]}'`;
        SET = `ID='${DATA.ID}', FECHA='${DATA.FECHA}', HORA='${DATA.HORA}', DOCTOR='${DATA.DOCTOR}', MOTIVO='${DATA.MOTIVO}', TEXTO='${DATA.TEXTO}', OTROS='${OTROS}'`;
        WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
          WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]
        ] = { ...DATA, OTROS: OTROS };
        setTimeout(() => {
          Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
        }, 250);
      }
      else {
        VALUES = `'${DATA.ID}','${DATA.FECHA}','${DATA.HORA}','${DATA.DOCTOR}','${DATA.MOTIVO}','${DATA.TEXTO}','${OTROS}'`;
        setTimeout(() => {
          Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
        }, 250);
      }
    } else {
      VALUES = `'${DATA.ID}','${DATA.FECHA}','${DATA.HORA}','${DATA.DOCTOR}','${DATA.MOTIVO}','${DATA.TEXTO}','${OTROS}'`;
      setTimeout(() => {
        Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
      }, 550);
    }

    if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
      let SEND = {
        DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
        DB_USER: WEB_CONFIG["DATABASE"]["USER"],
        DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
        DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
        DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["NOTAS"],
        TABLE_KEYS: "ID,FECHA,HORA,DOCTOR,MOTIVO,TEXTO,OTROS",
        VALUES: VALUES,
        WHERE: XWHERE,
        SET: SET,
      };
      SEND_TO_PHP("ADD_NOTE", SEND);
    }
    if (WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] == "false") {
      if (WEB_DATA["NOTAS"]?.[DATA.ID] == undefined) {
        WEB_DATA["NOTAS"][DATA.ID] = {};
      }
      try {
        let NUM = Object.keys(WEB_DATA["NOTAS"][DATA.ID]).length;
        if (WEB_DATA["NOTAS"][DATA.ID][NUM] == undefined) {
          WEB_DATA["NOTAS"][DATA.ID][NUM] = {
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
            if (WEB_DATA["NOTAS"][DATA.ID][NUM] == undefined) {
              WEB_DATA["NOTAS"][DATA.ID][NUM] = {
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
        Add_Notelist("Note", WEB_DATA["NOTAS"][DATA.ID][NUM], NUM);
      } catch {
        WEB_DATA["NOTAS"][DATA.ID][0] = DATA;
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

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  }
}

function Mn_Doc(ACCION, TIPO) {
  let DOC = undefined;
  if (TIPO == "CARTA") {
    DOC = document.querySelector("#Mn_Note_Consent");
  } else if (TIPO == "CARTA2") {
    DOC = document.querySelector("#Mn_Note_Consent");
    GOTO_MENU("Cart2", 1);
  } else if (TIPO == "PLANTILLA") {
    DOC = document.querySelector("#Mn_Note_Consent_Templates");
  } else if (TIPO == "IMPORT") {
    DOC = document.querySelector("#Mn_Import_File");
  } else if (TIPO == "SELECT") {
    DOC = document.querySelector("#Mn_Import_File_R");
  } else if (TIPO == "JSON") {
    DOC = document.querySelector("#Mn_Import_Json");
  } else {
    return false;
  }

  let DOM = DOC.querySelectorAll("*[ITEM]");

  if (ACCION == 0) {
    DOC.classList.remove("Hiden");
    try {
      DOC.querySelector('input[ITEM="DOCTOR"]').value =
        WEB_DATA["USUARIO"]["ID"];
      DOC.querySelector('input[ITEM="ID"]').value =
        WEB_DATA["PACIENTES"]["SELECTED"]["ID"] ?? "";
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

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  } else if (ACCION == 1) {
    let TIME = GET_TIME();
    let DATA = {};
    DATA["DOCTOR"] = WEB_DATA["USUARIO"]["ID"];
    if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"] != "") {
      DATA["ID"] = WEB_DATA["PACIENTES"]["SELECTED"]["ID"];
    } else {
      DATA["ID"] = WEB_DATA["USUARIO"]["ID"];
    }
    DATA["FECHA"] = TIME["DATE"];
    DATA["HORA"] = TIME["TIME"];
    if (TIPO == "CARTA") {
      DATA["TIPO"] = "CARTA";
    } else if (TIPO == "PLANTILLA") {
      DATA["TIPO"] = "P";
    } else if (TIPO == "IMPORT") {
      if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"] == "") {
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

      if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] != "false") {
        if (WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] == true) {
          let XDATA =
            WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
              "CARTAS"
            ][WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]];
          XWHERE = `ID='${XDATA["ID"]}' AND FECHA='${XDATA["FECHA"]}' AND HORA='${XDATA["HORA"]}'`;
          SET = `ID='${DATA.ID}',DOCTOR='${DATA.DOCTOR}',NOMBRE='${DATA.NOMBRE}',FECHA='${DATA.FECHA}',HORA='${DATA.HORA}',TIPO='${DATA.TIPO}',MOTIVO='${DATA.MOTIVO}',TEXTO='${DATA.TEXTO}'`;
          WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
            "CARTAS"
          ][WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"]] = DATA;
          setTimeout(() => {
            Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
          }, 250);
        } else {
          VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}'`;
          setTimeout(() => {
            Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
          }, 250);
        }
      } else {
        VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}'`;
        setTimeout(() => {
          Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
        }, 550);
      }

      if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
        let SEND = {
          DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
          DB_USER: WEB_CONFIG["DATABASE"]["USER"],
          DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
          DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
          DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
          TABLE_KEYS: "ID,DOCTOR,NOMBRE,FECHA,HORA,TIPO,MOTIVO,TEXTO",
          EDIT: WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"],
          VALUES: VALUES,
          WHERE: XWHERE,
          SET: SET,
        };
        SEND_TO_PHP("ADD_NOTE", SEND);
      }

      if (WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] == "false") {
        if (WEB_DATA["DOCUMENTOS"]?.[DATA.ID] == undefined) {
          WEB_DATA["DOCUMENTOS"][DATA.ID] = {};
        }
        if (WEB_DATA["DOCUMENTOS"]?.[DATA.ID]["CARTAS"] == undefined) {
          WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"] = {};
        }
        try {
          if (WEB_DATA["PACIENTES"]?.["SELECTED"]?.["EDIT"] == true) {
            WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][
              WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_ID"]
            ] = DATA;
          } else {
            let NUM = Object.keys(
              WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"]
            ).length;
            if (WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] == undefined) {
              WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] = DATA;
            } else {
              NUM += 1;
              while (true) {
                if (
                  WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] == undefined
                ) {
                  WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][NUM] = DATA;
                  break;
                }
              }
            }

            Add_Notelist("Carta", DATA, NUM);
          }
        } catch {
          WEB_DATA["DOCUMENTOS"][DATA.ID]["CARTAS"][0] = DATA;
        }
      }

      DOC.classList.add("Hiden");
      DOM.forEach((Xtem) => {
        Xtem.value = "";
      });
    } else {
      DOC.classList.add("Hiden");
    }

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = "false";
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = undefined;
  }
}

function Import_File(self) {
  let FILES = self;
  let TEXT = self.parentNode.parentNode.querySelector("label > span");

  if (FILES.files.length > 0) {
    TEXT.textContent = `${FILES.files.length} Archivo seleccionado`;
  } else {
    TEXT.textContent = `Seleccionar Archivo`;
  }
}

function Mn_NoteSub(Mn) {
  let Menus = document.querySelectorAll("#Mn_Notes .CNote_3 > div");
  Menus.forEach((Xtem) => {
    Xtem.classList.add("Hiden");
  });
  try {
    Menus[Mn].classList.remove("Hiden");
  } catch (err) {
    console.warn(err);
  }
}

function PreLoad_Plantillas() {
  if(WEB_CONFIG['CONEXION']['METHOD'] != "LOCAL"){
    let TEMP = { ...WEB_DATA["PLANTILLAS"] };
    let KEYS = Object.keys(TEMP["LINEA"]);
    WEB_DATA["PLANTILLAS"]["LINEA"] = {};
    KEYS.forEach((Xtem) => {
      if (TEMP["LINEA"][Xtem] != "") {
        try {
          let DATA = JSON.parse(TEMP["LINEA"][Xtem]["OTROS"]);
          let XCategory = DATA?.["CATEGORY"] ? DATA["CATEGORY"] : "OTROS";
          if (WEB_DATA["PLANTILLAS"]["LINEA"]?.[XCategory] == undefined) {
            WEB_DATA["PLANTILLAS"]["LINEA"][XCategory] = {};
          }
          let LEN = Object.keys(
            WEB_DATA["PLANTILLAS"]["LINEA"][XCategory]
          ).length;
          WEB_DATA["PLANTILLAS"]["LINEA"][XCategory][LEN] = TEMP["LINEA"][Xtem];
        } catch (err) {
          console.warn(err);
        }
      }
    });
    
    KEYS = Object.keys(TEMP["LOCAL"]);
    
    if (KEYS.includes("OTROS") == false) WEB_DATA["PLANTILLAS"]["LOCAL"] = {};
    KEYS.forEach((Xtem) => {
      if (TEMP["LOCAL"][Xtem] != "") {
        let DATA = JSON.parse(TEMP["LOCAL"][Xtem]["OTROS"]);
        let XCategory = DATA["CATEGORY"] ?? "OTROS";
        if (WEB_DATA["PLANTILLAS"]["LOCAL"]?.[XCategory] == undefined) {
          WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory] = {};
        }
        let LEN = Object.keys(WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory]).length;
        WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory][LEN] = TEMP["LOCAL"][Xtem];
      }
    });
  }
}
  
function Load_Plantilla(Type, Category, Index) {
    let DOM_1 = document.querySelector("#Mn_Note_Consent .Cn_Note_Conset");
  let DOM_2 = document.querySelector("#Mn_Note_Consent_Templates");
  let Menus = DOM_2.querySelector('ul[ITEM="OPTIONS"]');

  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let List = undefined;
  if (Type == 0) {
    List = WEB_DATA["PLANTILLAS"]?.["LINEA"]?.[XCategory[Category]];
  } else if (Type == 1) {
    List = WEB_DATA["PLANTILLAS"]?.["LOCAL"]?.[XCategory[Category]];
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
  let DOM_1 = document.querySelector("#Mn_Note_Consent .Cn_Note_Conset");
  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let ITEMS = DOM_1.querySelectorAll("*[ITEM]");
  let DATA = {};

  ITEMS.forEach((Xtem) => {
    let KEY = Xtem.getAttribute("ITEM");
    DATA[KEY] = Xtem.value;
  });

  DATA["OTROS"] = `{"CATEGORY": "${XCategory[Category]}"}`;
  DATA["TIPO"] = "PLANTILLA";

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    let TIME = GET_TIME();
    DATA["FECHA"] = TIME["DATE"];
    DATA["HORA"] = TIME["TIME"];

    let VALUES = `'${DATA.ID}','${DATA.DOCTOR}','${DATA.NOMBRE}','${DATA.FECHA}','${DATA.HORA}','${DATA.TIPO}','${DATA.MOTIVO}','${DATA.TEXTO}','${DATA.OTROS}'`;

    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
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
  WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]] = WEB_DATA[
    "PLANTILLAS"
  ]?.["LOCAL"]?.[XCategory[Category]]
    ? WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]]
    : {};
  if (WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]] != {}) {
    let LEN = Object.keys(
      WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]]
    ).length;
    WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]][LEN] = DATA;
    Load_Plantilla(Type, Category, 0);
  }
}

function Delete_Plantilla(Type, Category, Index) {
  if (Type == 0) {
    return true;
  }
  let XCategory = ["BLANK", "CONSENTIMIENTO", "ESTUDIO", "INFORMATIVA", "OTRO"];
  let Temp = WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]][Index];
  let KEYS = `ID,DOCTOR,NOMBRE,FECHA,HORA,TIPO,MOTIVO`;
  let DATA = `'${WEB_DATA["USUARIO"]["ID"]}','${Temp["NOMBRE"]}','${Temp["FECHA"]}','${Temp["HORA"]}','PLANTILLA','${Temp["HORA"]}','${Temp["MOTIVO"]}'`;

  WEB_DATA["PLANTILLAS"]["LOCAL"][XCategory[Category]] = {};

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"],
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
    if(WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false;
    }
    let SET = WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID];
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
    if(WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false;
    }
    let SET = WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID];
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
    if(WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][XMENU][ID] == undefined){
      return false;
    }
    let SET = WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][XMENU][ID];
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
  WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = true;
  WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_ID"] = ID;
  let DOM = undefined;
  let ITEMS = undefined;
  let SET = {};
  let KEYS = [];
  let DATA = {};
  let SUBITEMS = [];
  let SUBKEYS = [];

  if (Menu == "Note") {
    SET = WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID];
    KEYS = Object.keys(SET);
    SUBITEMS = JSON.parse(SET["OTROS"]);
    SUBKEYS = Object.keys(SUBITEMS);
    if (SUBITEMS?.["TYPE"] != undefined) {
      let TYPE = String(SUBITEMS["TYPE"]).toUpperCase();
      if (TYPE == "SIMPLE") {
        DOM = document.querySelector("#Mn_FNote");
      } else if (TYPE == "EVOLUCION") {
        DOM = document.querySelector("#Mn_NotesEv");
      } else if (TYPE == "COMPLETA") {
        DOM = document.querySelector("#Mn_Notes");
      } else if (TYPE == "REFERENCIA") {
        DOM = document.querySelector("#Mn_Note_Traslado");
      } else if (TYPE == "EGRESO") {
        DOM = document.querySelector("#Mn_Note_Egreso");
      } else if (TYPE == "RECETA") {
        DOM = document.querySelector("#Mn_Recipe");
      }
    } else {
      DOM = document.querySelector("#Mn_NotesEv");
    }
    ITEMS = DOM.querySelectorAll("*[ITEM]");

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = true;
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
  } else if (Menu == "Carta") {
    DOM = document.querySelector("#Mn_Note_Consent");
    ITEMS = DOM.querySelectorAll("*[ITEM]");
    SET =
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        ID
      ];
    KEYS = Object.keys(SET);

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = true;
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
  } else if (Menu == "Date") {
    DOM = document.querySelector("#NEW_DATE");
    ITEMS = DOM.querySelectorAll("*[ITEM]");
    if(WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID] == undefined){
      return false
    }
    SET = WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][ID];
    KEYS = Object.keys(SET);

    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT"] = true;
    WEB_DATA["PACIENTES"]["SELECTED"]["EDIT_INDEX"] = ID;
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

function CAMARA(Close = 0) {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const snap = document.getElementById("snap");
  const closesnap = document.getElementById("closesnap");

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
    context.drawImage(video, 0, 0, 640, 480);

    let CAN = document.querySelector("#Mn_Camara #canvas");
    let TIMG = CAN.toDataURL("image/png");
    document.querySelector("#Mn_Camara #CAM_IMG").src = TIMG;

    window.stream = null;
    video.srcObject = null;
    document.querySelector("#Mn_Camara").classList.add("Hiden");
  });

  closesnap.addEventListener("click", function () {
    window.stream = null;
    video.srcObject = null;
    document.querySelector("#Mn_Camara").classList.add("Hiden");
  });
}

function SEND_FILE() {
  if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"].length < 3) {
    return false;
  }
  let DOM = document.querySelector("#Mn_Import_File");
  let TIME = GET_TIME();

  let NOMBRE = DOM.querySelector('input[ITEM="NOMBRE"]').value;
  let ARCHIVO = DOM.querySelector('*[ITEM="ARCHIVO"]').files[0];
  if (ARCHIVO == undefined || NOMBRE.length < 1) {
    return false;
  }

  let DATE1 = `${TIME["YEAR"]}${TIME["MOUNT"]}${TIME["DAY"]}`;
  let DATE2 = `${TIME["HOUR"]}${TIME["MINUT"]}${TIME["SECOND"]}`;
  let EXTENCION = String(ARCHIVO["name"]).split(".");
  EXTENCION = `.${EXTENCION[EXTENCION.length - 1]}`;
  let ARCHIVO2 = `${WEB_DATA["PACIENTES"]["SELECTED"]["ID"]}_${DATE1}_${DATE2}_${NOMBRE}`;

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["ARCHIVOS"],
      TABLE_KEYS: `ID,FECHA,HORA,NOMBRE,ARCHIVO,DATA_BLOB,type_BLOB`,
      ID: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
      FECHA: TIME["DATE"],
      HORA: TIME["TIME"],
      NOMBRE: NOMBRE,
      EXTENCION: EXTENCION,
      ARCHIVO: ARCHIVO2,
    };
    SEND_TO_PHP("SEND_FILE", SEND, ARCHIVO);
  }

  let DATA = {
    FECHA: TIME["DATE"],
    HORA: TIME["TIME"],
    NOMBRE: NOMBRE,
    EXTENCION: EXTENCION,
    ARCHIVO: ARCHIVO2,
    type_BLOB: "",
  };
  let NUM = Object.keys(
    WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["ARCHIVOS"]
  ).length;
  Add_Notelist("Archivo", DATA, NUM);

  Mn_Doc(-1, "IMPORT");
}

function DOWNLOAD_FILE(Index, Type, ToDownload = false) {
  if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"].length < 3) {
    return false;
  }
  let ARCHIVO = "";

  if (Type == "FILE") {
    ARCHIVO =
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
        "ARCHIVOS"
      ][Index]["ARCHIVO"];
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL" && ARCHIVO != "") {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["ARCHIVOS"],
      ID: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
      ARCHIVO: ARCHIVO,
    };
    SEND_TO_PHP("DOWNLOAD_FILE", SEND);
  }

  let RESICLE = setInterval(() => {
    if (WEB_DATA["DOWNLOAD"] != undefined) {
      clearInterval(RESICLE);

      let file = URL.createObjectURL(WEB_DATA["DOWNLOAD"]);
      let a = document.createElement("a");
      a.target = "_blank";
      if (ToDownload == true) {
        a.download = "";
      }
      a.href = file;
      a.click();

      setTimeout(() => {
        WEB_DATA["DOWNLOAD"] = undefined;
        file = null;
        a = null;
      }, 500);
    }
  }, 250);
}

function DELETE_FILE(Index, Type) {
  if (WEB_DATA["PACIENTES"]["SELECTED"]["ID"].length < 3) {
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
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
        "ARCHIVOS"
      ][Index]["ARCHIVO"];
    DB_TABLE = WEB_CONFIG["DATABASE"]["TABLA"]["ARCHIVOS"];
  } else if (Type == "CARTA") {
    ARCHIVO =
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["NOMBRE"];
    FECHA =
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["FECHA"];
    HORA =
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ]["HORA"];
    DB_TABLE = WEB_CONFIG["DATABASE"]["TABLA"]["CARTAS"];
  } else if (Type == "DATE") {
    if(WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]?.[Index]?.["MOTIVO"] == undefined){
      return false;
    }
    ARCHIVO = WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index]["MOTIVO"];
    FECHA =
      WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index][
        "FECHA"
      ];
    HORA =
      WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index]["HORA"];
    DB_TABLE = WEB_CONFIG["DATABASE"]["TABLA"]["CITAS"];
  } else if (Type == "NOTE") {
    ARCHIVO =
      WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index][
        "MOTIVO"
      ];
    FECHA =
      WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index][
        "FECHA"
      ];
    HORA =
      WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index]["HORA"];
    DB_TABLE = WEB_CONFIG["DATABASE"]["TABLA"]["NOTAS"];
  } else if (Type == "PLANTILLA") {
  }

  if (WEB_CONFIG["CONEXION"]["METHOD"] != "LOCAL") {
    let SEND = {
      DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
      DB_USER: WEB_CONFIG["DATABASE"]["USER"],
      DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
      DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
      DB_TABLE: DB_TABLE,
      TYPE: Type,
      ID: WEB_DATA["PACIENTES"]["SELECTED"]["ID"],
      FECHA: FECHA,
      HORA: HORA,
      ARCHIVO: ARCHIVO,
    };
    SEND_TO_PHP("DELETE_FILE", SEND);
  }
  setTimeout(() => {
    if (Type == "FILE") {
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
        "ARCHIVOS"
      ][Index] = undefined;
    }
    if (Type == "CARTA") {
      WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]]["CARTAS"][
        Index
      ] = undefined;
    }
    if (Type == "DATE") {
      WEB_DATA["CITAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index] =
        undefined;
    }
    if (Type == "NOTE") {
      WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][Index] =
        undefined;
    }
    if (Type == "PLANTILLA") {
    }
    Load_NoteList(WEB_DATA["PACIENTES"]["SELECTED"]["ID"], false);
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
        WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
          "ARCHIVOS"
        ];
      LEN = Object.keys(XDATA).length;
      TABLE = document.querySelectorAll("#TABLE_Files tr");
    }
    if (Type == "NOTA") {
      XDATA = WEB_DATA["NOTAS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]];
      LEN = Object.keys(XDATA).length;
      TABLE = document.querySelectorAll("#TABLE_Notes tr");
    }
    if (Type == "CARTA") {
      XDATA =
        WEB_DATA["DOCUMENTOS"][WEB_DATA["PACIENTES"]["SELECTED"]["ID"]][
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
    document.querySelector('#Mn_Report *[ITEM="TYPE"]').innerHTML = '0';
    document.querySelector('#Mn_Report *[ITEM="TYPE_TEXT"]').innerHTML = 'SUGERENCIA';
  } else if (type == 1){
    document.querySelector('#Mn_Report *[ITEM="TYPE"]').innerHTML = '1';
    document.querySelector('#Mn_Report *[ITEM="TYPE_TEXT"]').innerHTML = 'REPORTAR PROBLEMA';
  } else if (type == 2){
    document.querySelector('#Mn_Report *[ITEM="TYPE"]').innerHTML = '2';
    document.querySelector('#Mn_Report *[ITEM="TYPE_TEXT"]').innerHTML = 'REPORTAR ERROR';
  } else { 
    return false;
  }
  GOTO_MENU('Report', 0);
}

function SEND_REPORT(Close = false){
  if(Close == false){
    let TYPE = document.querySelector('#Mn_Report *[ITEM="TYPE"]').innerHTML;
    let TEXT = document.querySelector('#Mn_Report textarea').value;
    let DATA = {}; 
    
    if(TEXT.length > 2){
      if(TYPE == '0'){ DATA['TIPO'] = "SUGERENCIA";}
      if(TYPE == '1'){ DATA['TIPO'] = "PROBLEMA";}
      if(TYPE == '2'){ DATA['TIPO'] = "ERROR";}
  
      if(WEB_CONFIG['CONEXION']['METHOD'] != "LOCAL"){
        let VALUES = `'${WEB_DATA['USUARIO']['ID']}','${DATA['TIPO']}','${TEXT}'`;      
        let SEND = {
          DB_HOST: WEB_CONFIG["DATABASE"]["HOST"],
          DB_USER: WEB_CONFIG["DATABASE"]["USER"],
          DB_PASSWORD: WEB_CONFIG["DATABASE"]["PASSWORD"],
          DB_NAME: WEB_CONFIG["DATABASE"]["NOMBRE"],
          DB_TABLE: WEB_CONFIG["DATABASE"]["TABLA"]["REPORT"],
          TABLE_KEYS: `DOCTOR,TIPO,TEXT`,
          VALUES: VALUES,
        };
        SEND_TO_PHP("ADD_NOTE", SEND);
  
        GOTO_MENU("Help",0);
        setTimeout(() => {
          document.querySelector('#Mn_Report textarea').value = "";
        },100)
      }
    }
  } else {
    document.querySelector('#Mn_Report textarea').value = "";
    GOTO_MENU("Help",0);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  GOTO_MENU("Login");

  let Config = LOAD_LOCAL();
  if (Config == true) {
    WEB_CONFIG["CONEXION"]["METHOD"] = "SERVER";
    if (WEB_CONFIG["DATABASE"]["HOST"] == null) {
      console.warn(
        "ALERTA -> No hay una base de datos definida en la configuracion."
      );
    }
    if (WEB_CONFIG["CONEXION"]["METHOD"] == "LOCAL") {
    } else if (WEB_CONFIG["CONEXION"]["METHOD"] == "SERVER") {
      WEB_DATA = WEB_DATA_EMPY;
    } else if (WEB_CONFIG["CONEXION"]["METHOD"] == null) {
      WEB_CONFIG["CONEXION"] = {
        METHOD: "SERVER",
        MODE: "LOCAL",
        SEGURITY: "LOCAL",
      };
    }
  } else {
    console.error("ERROR -> Ocurrio un problema al cargar la configuracion.");
  }

  document.getElementById("Mn_Toolbar").classList.add("Hiden");
  setTimeout(() => {
    let TB1 = document
      .getElementById("TABLE_Historial_1")
      .querySelectorAll("tr");
    if (TB1.length < 2) {
      Pacient_List_History();
    }
  }, 1250);
});
