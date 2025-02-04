## Funcionamiento:
- Necesario tener python instalado
- Abrir el archivo llamado `INICIAR.bat`
  - En caso de que el archivo no funcione, abrir una terminal en la carpeta donde están los archivos y ejecutar: `python -m http.server 8000`
- Dentro de tu navegador, entrar en esta URL `http://localhost:8000/TABLA.html`

## Usuarios por defecto:
- Admin:
  - Usuario: admin
  - Contraseña: admin
  - Permisos: Permiso nivel 3, permiso total (puede ver todas las columnas)
- Profe:
  - Usuario: profe
  - Contraseña: profe
  - Permisos: Permiso nivel 2 (puede ver todas las columnas excepto el correo y teléfono)
- Alumno:
  - Usuario: alumno
  - Contraseña: alumno
  - Permiso: Permiso nivel 1, básico (puede ver todas las columnas menos el nombre, correo y teléfono. Tiene acceso a la columna ID que es la que determina cada uno de los ex-alumnos)
 
## Configuración
### Modificación de la Tabla
Los datos de la tabla pueden ser modificados en el archivo `datos.xlsx` (abrir con excel). Cuando se actualice el archivo, recargar la página y ya se debería de actualizar la tabla, en caso de que no se actualice, cerrar la terminal y volver a abrirla (o con el `INICIAR.bat`
### Modificación de los Usuarios
Los usuarios y permisos de cada uno se pueden modificar en el archivo `config.js` (abrir con notepad++ o con el visualizador txt)

Una vez en este archivo, estará la zona de usuarios y la zona de permisos
- En la zona de usuarios, podremos crear más usuarios o modificar los permisos de cada uno.
  - **Hay que poner una , al final de cada línea de usuario excepto en el último**
- En la zona de permisos, podremos elegir qué columnas ve cada permiso, en caso de querer añadir más hay que poner una coma al final de la anterior columna y poner el nombre entre ""
