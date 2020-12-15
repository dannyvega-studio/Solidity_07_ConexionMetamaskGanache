# DAPPS # Solidity #Truffle

Aqui se realizara una conexion entre Ganache y Metamask mediante una aplicacion web de React y el Solidity con el que ya contamos del ejercicio anterior. 

NOTA: link para descargar Ganache https://www.trufflesuite.com/ganache

PASO - 1

Una vez instalado y abierto Ganache seleccionamos cualquier address, la copiamos y pegamos dentro de nuestro deploy y guardamos.

![](img/migracion_03.png)

Ahora pasamos a nuestro cmd y ejecutamos el comando "truffle migrate --network genache --reset" con lo que se compilaran, ejecutaran y transferiran a Ganache nuestros contratos que tenemos creados, mostrandonos su informacion correspondiente, siendo esto importante observar y anotar en algun lado la "contact address".

![](img/migracion_00.png)![](img/migracion_01.png)![](img/migracion_02.png)

Una vez que los ejecutamos, veremos como en Ganache nos descuenta el Eth correspondiente para la creacion de los contratos, si no desconto nada, habria que revisar los contratos.

![](img/migracion_04.png)

Ahora nos dirigimos a Transacciones y buscamos la transaccion que tenga la contact address de nuestro deploy.

![](img/migracion_05.png)

Tambien vincularemos nuestro contrato de ganache con metamask, por lo que crearemos un RPC personalizado, para esto en ganache seleccionamos la frase que se encuentra en mnemonic (son 12 palabras), las copiamos y una vez en metamask damos clic en  "importar usando la frase semilla de la cuenta", una vez ahi simplemente pegamos lo que tenemos copiado del mnemonic de ganache, asignamos una contraseña cual sea y listo.

![](img/migracion_07.png)![](img/migracion_06.png)![](img/migracion_08.png)

Ahora pasamos a configurar y crear nuestra propia RPC privada de ganache, entramos a RPC Custom y nos pedira que llenemos la informacion de rpc, chainid y nombre de la red, para el caso del rpc lo copiamos directamente de ganache donde dice "rpc server", en el caso de la chainid usaremos la id que se maneja por default para las redes privadas (mas informacion de ChainID aqui: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md) y el nombre de la red que nos mostro el cmd (de igual manera puede ser el nombre que nosotros deseemos) y finalizamos dando clic en guardar.

![](img/migracion_10.png)![](img/migracion_09.png)![](img/migracion_11.png)

Verificamos la  migracion exitosa como se muestra a continuacion, ya que aparecera la misma cantidad de eth que tenemos en nuestra cuenta de ganache.

![](img/migracion_12.png)

Ahora comenzaremos a implementar lo necesario para nuestra aplicacion web, por lo que instalamos el siguiente comando "npm install -g  create-react-app" y una vez instalado, nos dirigimos al directorio donde tenemos nuestro proyecto y crearemos la carpeta que contendra nuestra app de react con el comando "create-react-app nombreRandomDeLaCarpeta" (aqui ustedes pueden poner que nombre quieren que tenga la carpeta, en este caso sera module-7).

![](img/migracion_13.png)![](img/migracion_14.png)

Una vez creada nuestra app por default de React, la ejecutaremos desde la direccion de nuestra carpeta que acabamos de crear mediante el comando "npm start", lo que nos mostrara en nuestro navegador la aplicacion con su frontend por default.

![](img/migracion_15.png)![](img/migracion_16.png)![](img/migracion_17.png)

Posteriormente trabajamos en nuestros archivos de frontend al gusto, en este ejercicio pueden observar todos los archivos del frontend, el cual para nuestro ejemplo nos da la siguiente ventana al ejecutar nuevamente el comando "npm start"

![](img/migracion_18.png)![](img/migracion_19.png)

Una vez en nuestra aplicacion pegamos el contact address de nuestro deploy en ganache, y nos mostrara la informacion que contiene ese contrato como se observa a continuacion:

![](img/migracion_20.png)![](img/migracion_21.png)

Para finalizar solamente agregamos la cantidad en ETH que quedemos colectar, y al presionar OK veremos como nos muestra que la recoleccion ha finalizado, mientras que en ganache nos mostrara la informacion que contiene dicha transaccion.

![](img/migracion_23.png)