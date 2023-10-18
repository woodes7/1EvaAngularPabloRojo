import { Pregunta } from "./pregunta"

export const LISTADO_PREGUNTAS: Pregunta[] = [

    {
        pregunta: "¿Cómo se define TypeScript?",
        respuesta: 'Lenguaje de programación libre y de código abierto',      
              
    },
    {
        pregunta: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?",
        respuesta: 'TypeScript dispone de una escritura estática, mientras que JavaScript es un lenguaje dinámico.', 
    
    },
    {
        pregunta: "Muestra la lista de tipos básicos de TypeScript.",
        respuesta: 'Cadenas de texto (strings), Números (number), Booleanos (true & false), Arrays., Void., Any., Tuplas., Enumerados (enum) ', 
    },
    {
        pregunta: "¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?",
        respuesta: 'Con Interfaz, tipo y tipos de unión (union types) ', 
    },
    {
        pregunta: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.",
        respuesta: 'Sí, porque TypeScript es un superset de JavaScript que agrega características de tipado estático a JavaScript. ', 
    },
    {
        pregunta: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?",
        respuesta: 'Se puede ver y depurar archivos TypeScript en las herramientas del navegador gracias a las fuentes originales (Source Maps) que TypeScript genera durante la compilación.', 
    },
    {
        pregunta: "¿Para qué sirve el archivo tsconfig.json?",
        respuesta: 'Sirve para configurar el comportamiento del compilador de TypeScript (tsc) y definir cómo se compilarán los archivos TypeScript en JavaScript.', 
    }
]