# problema8damas
Todas las formas posibles de dar solución al problema de las 8 damas en un excel

El problema de las 8 damas:
https://es.wikipedia.org/wiki/Problema_de_las_ocho_reinas

Explicación de video:
https://www.youtube.com/watch?v=WOZ4wDt-iYA

Una vez comprendido y analizado el problema generé una solución automatizada en excel para ir navegando entre todas las opciones posibles. Se inxluyen las 92 soluciones posibles.

En el excel hay tres archivos
Hoja1:  Visualizar propuesta. En ella se puede analizar de manera gráfica los distintos resultados (desde el 1 al 40320) Al cambiar el número en la celda I1 cambiará el resultado de las celdas

Hoja2: Lista de respuestas correctas: En ella aparecen las respuestas correctas listadas en una tabla dinámica que ocupa como origen la hoja orden. En ella aparece el correlativo que muestra la solución al problema. Para poder visualizar podemos seleccionar la celda y presionar ctrl+q (una macro que copia el contenido y lo pega en la celda I1 de la hoja Visualizar propuesta

Hoja3: Orden. En ella se enlista todas las formas posibles de acomodar. Eso sí, se descarta de antemano las opciones en que las damas coincidan en columna, reduciendo considerablemente la cantidad de opciones.

Descarga el excel y prueba con distintas opciones. Dentro de el libro encontrarás funciones de baja complejidad que irán explicando el cómo llega a analizar y detectar un resultado correcto.
