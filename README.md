# DAPPS # Solidity #Truffle

Aqui se realizara una conexion entre Ganache y Metamask mediante una aplicacion web de React y el Solidity con el que ya contamos del ejercicio anterior. 

NOTA: link para descargar Ganache https://www.trufflesuite.com/ganache

PASO - 1

Una vez instalado y abierto Ganache seleccionamos cualquier address, la copiamos y pegamos dentro de nuestro deploy y guardamos.

![](img/migracion_03.png)

Ahora pasamos a nuestro cmd y ejecutamos el comando "truffle migrate --network genache --reset" con lo que se compilaran, ejecutaran y transferiran a Ganache nuestros contratos que tenemos creados, mostrandonos su informacion correspondiente, siendo esto importante observar y anotar en algun lado la "contact address".

![](img/migracion_00.png)![](img/migracion_01.png)![](img/migracion_02.png)

