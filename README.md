# ¿que es react?

---

es de codigo abierto es una biblioteca de javascript para interfaces de usuairos
Library - Bibliote, conjunto de implementaciones o subprogramas que se puede usar en nuestro codigo.

---

**ventajas de React**
1: facil de aprender y usar
2: Componentes reutilizables
3: Crear aplicaciones dinamicas
4: Buen desempeño

---

## Componente

parte de la interfaz de usuario que es independiente y rehusable. es como bloques de lego para crear una estructura en la programación

### Componentes Funcionales

Son mas faciles de escribir e implementar, funciona con ES6 que retorna un componente **JSX**
Debe retornar un elemento de React JSX
El componente debe comenzar con **mayuscula**
puede recibir argumentos, denominamos propiedades o **props**
Los PROPS son arguments que pueden recibir los componentes
los PROPS solo pueden ser enviados de padre a hijo , del contenedor al contenido.

### Componentes de clase

Eran y son utilizados anteriormente , es importante aprender para entender su sintaxis
Class ES6 retorna un elemento **JSX** extends de React, posteriormente se define un render() y se utiliza **this**
Debe extende React.Component.
**Debe tener un metodo render() para retornar un elemento JSX**
Puede recibir valores si es necesario | props

#### Estado | state

Representación en javascript del conjunto de propiedades de un componente y sus valores actuales.
En este concepto **propiedades** _NO_ se refiere a los props.
Sino a información que se presenta sobre el componente.

####¿Por que componentes funcionales y de clase?
Anteriormente, se usaba componentes de clase para poder trabajar con "estados" de los componentes.

## ¡Hooks!, conocidos como anzuelos o ganchos

Permiten agregar un cierto estado a los componentes funcionales. Gracias a los hooks ahora si se puede asignar y actualizar el estado de un componente funcional en React.
Es una función especial que permite trabajar con estados de los componentes funcioanles y otros aspectos de React.

Los Hook pueden utilizarce sin escribir un componente de clase. esto nos permite escribir código mucho más conciso y fácil de entender.

## Event Listener

Es una función de javascript que es ejecutada cuando ocurre un evento especifico.

**Conceptos Importantes**

1: Components
2: props
3: state
4: Hooks
5: Event Listener

---

#### JSX piler importante de React Native

Nos permite describir como se veran los componentes usando una estructura similar a HTML

**Ventajas de JSX**

1: Estructura más fácil de visualizar.
2: Errores y advertencias más útiles.

NOTA: JSX es opcional, pero si muy recomendado

### Element

Unidades pequeñas qee forman parte de un elemento, son las unidades mas basicas de la estructura. Se puede utilizar cualquier etiqueta de HTML para su construcción.
En JSX los **elementos** HTML se representan con letras **minúsculas**, en cambio los **componentes** definidos por convención deben empezar con **mayuscula**.

Se puede agregar **atributos** a tus elementos en JSX para especificar ciertas caracteristicas, Pero... algunos se escriben de forma distinta si los comparamos con HTML, especialmente **class** que se escribe **className**.
EJEMPLO: **for** de las label por **htmlFor**
**class** es una palabra reservada en javascript que podemos usar para crear una clase. Por eso necesitamos escribir este atributo de forma distinta en _JSX_

El atributo **style** acepta un objeto javascript con propiedades CSS pero deben estar escritas en **camelCase**. \*\*

Se puede agregar estilos mediante un objeto javascript, pero... lo recomendable es asignar estilos con un elemento externo.

Si se quiere asignar un estilo especifico en linea se debe usar llaves dobles _style{{color: '#000000'}}_

### Compoent

Los componentes en React están "hechos" de elementos son mas complejos de elaborar.

**React DOM**
Es un paquete que facilita la interacción y actualización del DOM en aplicaciones React.

### Estructura de un componente

Al igual que en HTML los elementos pueden ser **anidados** en _JSX_ para formar estructuras complejas de manejar.

#### Renderizar componentes

Se debe instalar e importar ReactDOM para ser utilizado.
para renderizar se utiliza ReactDOM.render() que contiene dos argumentos, el primero es el elemento, y el segundo es la etiqueta del DOM.

#### self-Closing Tags | etiquetas que se cierran solas

Elemento que solo posee una etiqueta de apertura ya que no contiente texto y otros elementos. ejemplos muy utilizados pueden ser: _img_ , _input_.

#### javaScript dentro JSX

Dentro del componente se puede incluir tambien javascript mediante el usa de _{}_ logrando implementar logica para su funcionalidad. Se puede escribir cualquier expresión válida de javascript entre llaves y su valor será reemplazado.
