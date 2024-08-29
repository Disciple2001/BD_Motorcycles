"use strict";
const { app, BrowserWindow, ipcMain, dialog } = require("electron/main");
const path = require("node:path");
require("./database");
const { getConnection } = require("./database");
process.env.APP_ROOT = path.join(__dirname);
process.env.VITE_PUBLIC = path.join(process.env.APP_ROOT, "public");
async function getMarcas() {
  try {
    const conn = getConnection();
    const marcas = await conn`
        SELECT
        *
        FROM "Marca"
        ORDER BY id_marca DESC
        `;
    return marcas;
  } catch (err) {
    console.log(err);
  }
}
async function getMarca(event, id) {
  try {
    const conn = getConnection();
    const marca = await conn`
        SELECT
        *
        FROM "Marca"
        WHERE id_marca = ${id}
        `;
    console.log(marca);
    console.log(marca[0].nom_marca);
    return marca;
  } catch (err) {
    console.log(err);
  }
}
async function updateMarca(event, id, marca) {
  try {
    const conn = getConnection();
    const marcaa = await conn`
        UPDATE "Marca"
        SET nom_marca = ${marca.nom_marca}
        WHERE id_marca = ${id} 
        RETURNING nom_marca
        `;
    return marcaa;
  } catch (err) {
    console.log(err);
  }
}
async function deleteMarca(event, id) {
  try {
    const conn = getConnection();
    const marca = await conn`
        DELETE FROM "Marca"
        WHERE id_marca = ${id} 
        returning nom_marca
        `;
    return marca;
  } catch (err) {
    console.log(err);
  }
}
async function createMarca(event, marca) {
  console.log("SI llego");
  try {
    const conn = getConnection();
    const marcaa = await conn`INSERT INTO "Marca" ("nom_marca") VALUES(${marca.nom_marca}) RETURNING nom_marca`;
    console.log(marcaa);
  } catch (err) {
    console.log(err);
  }
}
async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (!canceled) {
    return filePaths[0];
  }
}
function hello() {
  console.log("hello world");
}
function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}
async function getRoles() {
  try {
    const conn = getConnection();
    const roles = await conn`
        SELECT
        *
        FROM "Rol"
        ORDER BY id_rol DESC
        `;
    return roles;
  } catch (err) {
    console.log(err);
  }
}
async function getRol(event, id) {
  try {
    const conn = getConnection();
    const rol = await conn`
        SELECT
        *
        FROM "Rol"
        WHERE id_rol = ${id}
        `;
    console.log(rol);
    console.log(rol[0].nom_marca);
    return rol;
  } catch (err) {
    console.log(err);
  }
}
async function updateRol(event, id, rol) {
  try {
    const conn = getConnection();
    const rolAA = await conn`
        UPDATE "Rol"
        SET nom_rol = ${rol.nom_rol}
        WHERE id_rol = ${id} 
        RETURNING nom_rol
        `;
    return rolAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteRol(event, id) {
  try {
    const conn = getConnection();
    const rol = await conn`
        DELETE FROM "Rol"
        WHERE id_rol = ${id} 
        returning nom_rol
        `;
    return rol;
  } catch (err) {
    console.log(err);
  }
}
async function createRol(event, rol) {
  console.log("SI llego");
  try {
    const conn = getConnection();
    const rolAA = await conn`INSERT INTO "Rol" ("nom_rol") VALUES(${rol.nom_rol}) RETURNING nom_rol`;
    console.log(rolAA);
  } catch (err) {
    console.log(err);
  }
}
async function getMunicipios() {
  try {
    const conn = getConnection();
    const municipios = await conn`
        SELECT
        *
        FROM "Municipio"
        ORDER BY "id_mun" DESC
        `;
    return municipios;
  } catch (err) {
    console.log(err);
  }
}
async function getMunicipio(event, id) {
  try {
    const conn = getConnection();
    const municipio = await conn`
        select
        *
        from "Municipio"
        where "id_mun" = ${id}
        `;
    return municipio;
  } catch (err) {
    console.log(err);
  }
}
async function updateMunicipio(event, id, municipio) {
  try {
    const conn = getConnection();
    const municipioAA = await conn`
        UPDATE "Municipio"
        SET "nom_mun" = ${municipio.name}
        WHERE "id_mun" = ${id} 
        returning "nom_mun"
        `;
    return municipioAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteMunicipio(event, id) {
  try {
    const conn = getConnection();
    const municipio = await conn`
        DELETE from "Municipio"
        WHERE "id_mun" = ${id} 
        returning "nom_mun"
        `;
    return municipio;
  } catch (err) {
    console.log(err);
  }
}
async function createMunicipio(event, municipio) {
  try {
    const conn = getConnection();
    const municipioAA = await conn`INSERT INTO "Municipio" ("nom_mun") VALUES(${municipio.name}) returning nom_mun`;
    console.log(municipioAA);
  } catch (err) {
    console.log(err);
  }
}
async function getModelos() {
  try {
    const conn = getConnection();
    const modelos = await conn`
        SELECT
        *
        FROM "Modelo"
        ORDER BY "id_modelo" DESC
        `;
    return modelos;
  } catch (err) {
    console.log(err);
  }
}
async function getModelosMarca(event, id) {
  try {
    console.log(id, typeof id);
    const conn = getConnection();
    const modelos = await conn`
        SELECT * 
        FROM "Modelo"  
        WHERE "Modelo"."id_marca" = ${id}
        ORDER BY "id_modelo" ASC
        `;
    return modelos;
  } catch (err) {
    console.log(err);
  }
}
async function getModelo(event, id) {
  try {
    const conn = getConnection();
    const modelo = await conn`
        select
        *
        from "Modelo"
        where "id_modelo" = ${id}
        `;
    return modelo;
  } catch (err) {
    console.log(err);
  }
}
async function updateModelo(event, id, modelo) {
  try {
    const conn = getConnection();
    const modeloAA = await conn`
        UPDATE "Modelo"
        SET "nom_modelo" = ${modelo.nom_modelo}
        WHERE "id_modelo" = ${id} 
        returning "nom_modelo"
        `;
    return modeloAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteModelo(event, id) {
  try {
    const conn = getConnection();
    const modelo = await conn`
        DELETE from "Modelo"
        WHERE "id_modelo" = ${id} 
        returning "nom_modelo"
        `;
    return modelo;
  } catch (err) {
    console.log(err);
  }
}
async function createModelo(event, modelo) {
  try {
    const conn = getConnection();
    const modeloAA = await conn`INSERT INTO "Modelo" ("nom_modelo", "id_marca") VALUES(${modelo.nom_modelo}, ${modelo.id_marca}) returning nom_modelo`;
    return modeloAA;
    console.log(modeloAA);
  } catch (err) {
    console.log(err);
  }
}
async function getMotos() {
  try {
    const conn = getConnection();
    const motos = await conn`
        SELECT
        *
        FROM "Moto"
        ORDER BY "id_moto" DESC
        `;
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getMotosDisponibles() {
  try {
    const conn = getConnection();
    const motos = await conn`
        SELECT * 
        FROM public."Moto"
        WHERE id_situa = 3
        ORDER BY id_moto ASC 
        `;
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getMoto(event, id) {
  try {
    const conn = getConnection();
    const moto = await conn`
        select
        *
        from "Moto"
        where "id_moto" = ${id}
        `;
    return moto;
  } catch (err) {
    console.log(err);
  }
}
async function updateMoto(event, id, moto) {
  try {
    const conn = getConnection();
    const motoAA = await conn`
        UPDATE "Moto"
        SET "color" = ${moto.color}, "km" = ${moto.km}, "id_situa" = ${moto.id_situa}
        "matricula" =  ${moto.matricula}
        WHERE "id_moto" = ${id} 
        returning "matricula"
        `;
    return motoAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteMoto(event, id) {
  try {
    const conn = getConnection();
    const moto = await conn`
        DELETE from "Moto"
        WHERE "id_moto" = ${id} 
        returning "matricula"
        `;
    return moto;
  } catch (err) {
    console.log(err);
  }
}
async function createMoto(event, moto) {
  try {
    const conn = getConnection();
    const motoAA = await conn`
        INSERT INTO "Moto" ("color", "km","id_marca", "id_modelo", "id_situa", "matricula")
        VALUES (${moto.color}, 0, ${moto.id_marca}, ${moto.id_modelo}, 3, ${moto.matricula})`;
    return motoAA;
    console.log(motoAA);
  } catch (err) {
    console.log(err);
  }
}
async function getUsuarios() {
  try {
    const conn = getConnection();
    const usuarios = await conn`
        SELECT
        *
        FROM "Usuario"
        ORDER BY "id_usuario" DESC
        `;
    return usuarios;
  } catch (err) {
    console.log(err);
  }
}
async function getUsuario(event, id) {
  try {
    const conn = getConnection();
    const usuario2 = await conn`
        select
        *
        from "Usuario"
        where "id_usuario" = ${id}
        `;
    return usuario2;
  } catch (err) {
    console.log(err);
  }
}
async function confirmUsuario(event, usuario2) {
  try {
    const conn = getConnection();
    const usuarioAA = await conn`
        select * 
        from "Usuario"
        where "nom_usuario" = ${usuario2.nom_usuario} AND "password" = ${usuario2.password}
        `;
    return usuarioAA;
  } catch (err) {
    console.log(err);
  }
}
async function updateUsuario(event, id, usuario2) {
  try {
    const conn = getConnection();
    const usuarioAA = await conn`
        UPDATE "Usuario"
        SET "nom_usuario" = ${usuario2.nom_usuario}, "edad" = ${usuario2.edad}, "sexo" = ${usuario2.sexo},
        "num_tel" = ${usuario2.num_tel}, "id_mun" = ${usuario2.id_mun}
        WHERE "id_usuario" = ${id} 
        returning "nom_usuario"
        `;
    return usuarioAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteUsuario(event, id) {
  try {
    const conn = getConnection();
    const usuario2 = await conn`
        DELETE from "Usuario"
        WHERE "id_usuario" = ${id} 
        returning "nom_usuario"
        `;
    return usuario2;
  } catch (err) {
    console.log(err);
  }
}
async function createUsuario(event, cliente) {
  try {
    const conn = getConnection();
    const usuarioAA = await conn`INSERT INTO "Usuario" ("nom_usuario", "edad", "sexo", "num_tel", "id_mun") VALUES(${usuario.nom_usuario}, ${usuario.edad},
        ${usuario.sexo}, ${usuario.num_tel}, ${usuario.id_mun}) 
        RETURNING "nom_usuario"`;
    return usuarioAA;
    console.log(usuarioAA);
  } catch (err) {
    console.log(err);
  }
}
async function getContratos() {
  try {
    const conn = getConnection();
    const contratos = await conn`
        SELECT
        *
        FROM "Contrato"
        ORDER BY "id_contrato" DESC
        `;
    return contratos;
  } catch (err) {
    console.log(err);
  }
}
async function getContrato(event, id) {
  try {
    const conn = getConnection();
    const contrato = await conn`
        select
        *
        from "Contrato"
        where "id_contrato" = ${id}
        `;
    return contrato;
  } catch (err) {
    console.log(err);
  }
}
async function updateContrato(event, id, contrato) {
  try {
    const conn = getConnection();
    const contratoAA = await conn`
        UPDATE "Contrato"
        SET "fecha_fin" = ${contrato.fecha_fin}, "dias_prorro" = ${contrato.dias_prorro}, 
        WHERE "id_contrato" = ${id} 
        returning "id_contrato"
        `;
    return contratoAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteContrato(event, id) {
  try {
    const conn = getConnection();
    const contrato = await conn`
        DELETE from "Contrato"
        WHERE "id_contrato" = ${id} 
        returning "id_contrato"
        `;
    return contrato;
  } catch (err) {
    console.log(err);
  }
}
async function createContrato(event, contrato) {
  try {
    console.log(contrato);
    const conn = getConnection();
    const contratoAA = await conn`
        INSERT INTO "Contrato" ("fecha_ini", "fecha_fin", "dias_prorro", "seguro", 
	    "id_formaPago", "id_usuario", "id_moto", "precio")
        VALUES (${contrato.fecha_ini}, ${contrato.fecha_fin}, 0, ${contrato.seguro}, 
        ${contrato.id_formaPago}, ${contrato.id_usuario}, ${contrato.id_moto}, ${contrato.precio})
        `;
    return contratoAA;
    console.log(contratoAA);
  } catch (err) {
    console.log(err);
  }
}
async function getFormasPago() {
  try {
    const conn = getConnection();
    const formasDePago = await conn`
        SELECT
        *
        FROM "FormaPago"
        ORDER BY "id_formaPago" DESC
        `;
    return formasDePago;
  } catch (err) {
    console.log(err);
  }
}
async function getFormaPago(event, id) {
  try {
    const conn = getConnection();
    const formaPago = await conn`
        select
        *
        from "FormaPago"
        where "id_formaPago" = ${id}
        `;
    return formaPago;
  } catch (err) {
    console.log(err);
  }
}
async function updateFormaPago(event, id, formaPago) {
  try {
    const conn = getConnection();
    const formaPagoAA = await conn`
        UPDATE "FormaPago"
        SET "nom_formaPago" = ${formaPago.nom_formaPago} 
        WHERE "id_formaPago" = ${id} 
        returning "id_formaPago"
        `;
    return formaPagoAA;
  } catch (err) {
    console.log(err);
  }
}
async function deleteFormaPago(event, id) {
  try {
    const conn = getConnection();
    const formaPago = await conn`
        DELETE from "FormaPago"
        WHERE "id_formaPago" = ${id} 
        returning "id_formaPago"
        `;
    return formaPago;
  } catch (err) {
    console.log(err);
  }
}
async function createFormaPago(event, formaPago) {
  try {
    const conn = getConnection();
    const formaPagoAA = await conn`
        INSERT INTO "FormaPago" ("nom_formaPago")
        VALUES (${formaPago.nom_formaPago})
        `;
    return formaPagoAA;
    console.log(formaPagoAA);
  } catch (err) {
    console.log(err);
  }
}
async function getClientesResumen() {
  try {
    const conn = getConnection();
    console.log("llego aqui");
    const clientes = await conn`
        SELECT * FROM obtener_resumen_clientes();
        `;
    return clientes;
  } catch (err) {
    console.log(err);
  }
}
async function getMotosResumen() {
  try {
    const conn = getConnection();
    console.log("llego aqui");
    const motos = await conn`
        SELECT * FROM obtener_resumen_motos();
        `;
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getContratosResumen() {
  try {
    const conn = getConnection();
    console.log("llego aqui");
    const contratos = await conn`
        SELECT * FROM obtener_resumen_contratos();
        `;
    return contratos;
  } catch (err) {
    console.log(err);
  }
}
async function getSituacionMotos() {
  try {
    const conn = getConnection();
    console.log("llego aqui");
    const motos = await conn`
        SELECT * FROM public.obtener_situacion_motos();
        `;
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getResumenMarcasModelos() {
  try {
    const conn = getConnection();
    const motos = await conn`
        SELECT * FROM public.obtener_resumen_marcas_modelos();
        `;
    console.log(motos);
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getResumenMarcasModelosMunicipio() {
  try {
    const conn = getConnection();
    console.log("Entro aqqui");
    const motos = await conn`
        SELECT * FROM obtener_resumen_marcas_modelos_municipios()
        `;
    console.log(motos);
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getResumenAnual() {
  try {
    const conn = getConnection();
    console.log("Entro aqqui");
    const motos = await conn`
        SELECT * FROM obtener_resumen_anno()
        `;
    console.log(motos);
    return motos;
  } catch (err) {
    console.log(err);
  }
}
async function getContratosDeCliente(event, id_usuario) {
  try {
    const conn = getConnection();
    console.log("Entro aqqui");
    const contratos = await conn`
        SELECT *, TO_CHAR(c.fecha_ini, 'DD-MM-YYYY') as "fecha_ini", TO_CHAR(c.fecha_fin, 'DD-MM-YYYY') as "fecha_fin"
        FROM public."Contrato" as c
        WHERE c.id_usuario = ${id_usuario}
        `;
    return contratos;
  } catch (err) {
    console.log(err);
  }
}
async function getClientesIncumplidores() {
  try {
    const conn = getConnection();
    console.log("Entro aqqui");
    const clientes = await conn`
        SELECT * FROM public.obtener_clientes_incumplidores()
        `;
    return clientes;
  } catch (err) {
    console.log(err);
  }
}
function createWindow() {
  const win = new BrowserWindow({
    resizable: false,
    center: true,
    width: 1080,
    height: 650,
    title: "MotorCicles",
    icon: path.join(process.env.VITE_PUBLIC, "favicon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true
    }
  });
  win.loadURL("http://localhost:5173");
}
app.whenReady().then(() => {
  ipcMain.on("set-title", handleSetTitle);
  ipcMain.on("print-hello", hello);
  ipcMain.handle("dialog:openFile", handleFileOpen);
  ipcMain.handle("get:Marcas", getMarcas);
  ipcMain.handle("get:Marca", getMarca);
  ipcMain.handle("update:Marca", updateMarca);
  ipcMain.handle("create:Marca", createMarca);
  ipcMain.handle("delete:Marca", deleteMarca);
  ipcMain.handle("get:Roles", getRoles);
  ipcMain.handle("get:Rol", getRol);
  ipcMain.handle("update:Rol", updateRol);
  ipcMain.handle("create:Rol", createRol);
  ipcMain.handle("delete:Rol", deleteRol);
  ipcMain.handle("get:Usuarios", getUsuarios);
  ipcMain.handle("get:Usuario", getUsuario);
  ipcMain.handle("confirm:Usuario", confirmUsuario);
  ipcMain.handle("update:Usuario", updateUsuario);
  ipcMain.handle("create:Usuario", createUsuario);
  ipcMain.handle("delete:Usuario", deleteUsuario);
  ipcMain.handle("get:Municipios", getMunicipios);
  ipcMain.handle("get:Municipio", getMunicipio);
  ipcMain.handle("update:Municipio", updateMunicipio);
  ipcMain.handle("create:Municipio", createMunicipio);
  ipcMain.handle("delete:Municipio", deleteMunicipio);
  ipcMain.handle("get:Modelos", getModelos);
  ipcMain.handle("get:ModelosMarca", getModelosMarca);
  ipcMain.handle("get:Modelo", getModelo);
  ipcMain.handle("update:Modelo", updateModelo);
  ipcMain.handle("create:Modelo", createModelo);
  ipcMain.handle("delete:Modelo", deleteModelo);
  ipcMain.handle("get:Motos", getMotos);
  ipcMain.handle("get:MotosDisponibles", getMotosDisponibles);
  ipcMain.handle("get:Moto", getMoto);
  ipcMain.handle("update:Moto", updateMoto);
  ipcMain.handle("create:Moto", createMoto);
  ipcMain.handle("delete:Moto", deleteMoto);
  ipcMain.handle("get:Contratos", getContratos);
  ipcMain.handle("get:ContratosDeCliente", getContratosDeCliente);
  ipcMain.handle("get:Contrato", getContrato);
  ipcMain.handle("update:Contrato", updateContrato);
  ipcMain.handle("create:Contrato", createContrato);
  ipcMain.handle("delete:Contrato", deleteContrato);
  ipcMain.handle("get:FormasPago", getFormasPago);
  ipcMain.handle("get:FormaPago", getFormaPago);
  ipcMain.handle("update:FormaPago", updateFormaPago);
  ipcMain.handle("create:FormaPago", createFormaPago);
  ipcMain.handle("delete:FormaPago", deleteFormaPago);
  ipcMain.handle("get:ClientesResumen", getClientesResumen);
  ipcMain.handle("get:MotosResumen", getMotosResumen);
  ipcMain.handle("get:ContratosResumen", getContratosResumen);
  ipcMain.handle("get:SituacionMotos", getSituacionMotos);
  ipcMain.handle("get:ClientesIncumplidores", getClientesIncumplidores);
  ipcMain.handle("get:ResumenMarcasModelos", getResumenMarcasModelos);
  ipcMain.handle("get:ResumenMarcasModelosMunicipio", getResumenMarcasModelosMunicipio);
  ipcMain.handle("get:ResumenAnual", getResumenAnual);
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
//# sourceMappingURL=main.js.map
