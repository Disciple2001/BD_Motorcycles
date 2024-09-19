const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    get_marcas: () => ipcRenderer.invoke('get:Marcas'),
    get_marca: (id) => ipcRenderer.invoke('get:Marca', id),
    update_marca: (id, marca) => ipcRenderer.invoke('update:Marca', id, marca),
    create_marca: (marca) => ipcRenderer.invoke('create:Marca', marca),
    delete_marca: (id) => ipcRenderer.invoke('delete:Marca', id),

    get_roles: () => ipcRenderer.invoke('get:Roles'),
    get_rol: (id) => ipcRenderer.invoke('get:Rol', id),
    update_rol: (id, rol) => ipcRenderer.invoke('update:Rol', id, rol),
    create_rol: (rol) => ipcRenderer.invoke('create:Rol', rol),
    delete_rol: (id) => ipcRenderer.invoke('delete:Rol', id),

    get_usuarios: () => ipcRenderer.invoke('get:Usuarios'),
    get_usuario: (id) => ipcRenderer.invoke('get:Usuario', id),
    confirm_usuario: ( usuario ) => ipcRenderer.invoke('confirm:Usuario', usuario),
    update_usuario: (id, usuario) => ipcRenderer.invoke('update:Usuario', id, usuario),
    create_usuario: (usuario) => ipcRenderer.invoke('create:Usuario', usuario),
    delete_usuario: (id) => ipcRenderer.invoke('delete:Usuario', id),

    get_municipios: () => ipcRenderer.invoke('get:Municipios'),
    get_municipio: (id) => ipcRenderer.invoke('get:Municipio', id),
    update_municipio: (id, municipio) => ipcRenderer.invoke('update:Municipio', id, municipio),
    create_municipio: (municipio) => ipcRenderer.invoke('create:Municipio', municipio),
    delete_municipio: (id) => ipcRenderer.invoke('delete:Municipio', id),

    get_modelos: () => ipcRenderer.invoke('get:Modelos'),
    get_modelos_marca: (id) => ipcRenderer.invoke('get:ModelosMarca', id),
    get_modelo: (id) => ipcRenderer.invoke('get:Modelo', id),
    update_modelo: (id, modelo) => ipcRenderer.invoke('update:Modelo', id, modelo),
    create_modelo: (modelo) => ipcRenderer.invoke('create:Modelo', modelo),
    delete_modelo: (id) => ipcRenderer.invoke('delete:Modelo', id),

    get_motos: () => ipcRenderer.invoke('get:Motos'),
    get_motosDisponibles: () => ipcRenderer.invoke('get:MotosDisponibles'),
    get_moto: (id) => ipcRenderer.invoke('get:Moto', id),
    update_moto: (id, moto) => ipcRenderer.invoke('update:Moto', id, moto),
    create_moto: (moto) => ipcRenderer.invoke('create:Moto', moto),
    delete_moto: (id) => ipcRenderer.invoke('delete:Moto', id),

    get_contratos: () => ipcRenderer.invoke('get:Contratos'),
    get_contrato: (id) => ipcRenderer.invoke('get:Contrato', id),
    get_contratosDeCliente: (id) => ipcRenderer.invoke('get:ContratosDeCliente', id),
    update_contrato: (id, contrato) => ipcRenderer.invoke('update:Contrato', id, contrato),
    create_contrato: (contrato) => ipcRenderer.invoke('create:Contrato', contrato),
    delete_contrato: (id) => ipcRenderer.invoke('delete:Contrato', id),
    finalizar_contrato: (id) => ipcRenderer.invoke('finalizar:Contrato', id),


    get_formasPago: () => ipcRenderer.invoke('get:FormasPago'),
    get_formaPago: (id) => ipcRenderer.invoke('get:Contrato', id),
    update_formaPago: (id, formaPago) => ipcRenderer.invoke('update:Contrato', id, formaPago),
    create_formaPago: (formaPago) => ipcRenderer.invoke('create:Contrato', formaPago),
    delete_formaPago: (id) => ipcRenderer.invoke('delete:Contrato', id),

    get_clientesResumen: () => ipcRenderer.invoke('get:ClientesResumen'),
    get_motosResumen: () => ipcRenderer.invoke('get:MotosResumen'),
    get_contratosResumen: () => ipcRenderer.invoke('get:ContratosResumen'),
    get_situacionMotos: () => ipcRenderer.invoke('get:SituacionMotos'),
    get_clientesIncumplidores: () => ipcRenderer.invoke('get:ClientesIncumplidores'),
    get_resumenMarcasModelos: () => ipcRenderer.invoke('get:ResumenMarcasModelos'),
    get_resumenMarcasModelosMunicipio: () => ipcRenderer.invoke('get:ResumenMarcasModelosMunicipio'),
    get_resumenAnual: () => ipcRenderer.invoke('get:ResumenAnual'),

    printHello: () => ipcRenderer.send('print-hello'),
    openFile: () => ipcRenderer.invoke('dialog:openFile'),
    say_hello: (hola) => ipcRenderer.invoke('say:hello', hola),
    // say_hello: (hola) => ipcRenderer.send('say:hello', hola),

})

contextBridge.exposeInMainWorld("nodeApi", "Prueba")
contextBridge.exposeInMainWorld("nodeApi2", {
    foo: "eres gay"
})

// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron
//     // we can also expose variables, not just functions
// })

// const { contextBridge } = require('electron')
//
// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron
//     // we can also expose variables, not just functions
// })


// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//         const element = document.getElementById(selector)
//         if (element) element.innerText = text
//     }
//
//     for (const type of ['chrome', 'node', 'electron']) {
//         replaceText(`${type}-version`, process.versions[type])
//     }
// })