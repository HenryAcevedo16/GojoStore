Documentación de Proyecto - Gojo Store
Descripción
Gojo Store es una aplicación de comercio electrónico desarrollada en React que permite a los usuarios navegar por una amplia variedad de productos y realizar compras en línea. Esta documentación proporciona información sobre cómo configurar y utilizar la aplicación.

Configuración
Clonar el Repositorio
Para comenzar a trabajar con la aplicación, clona el repositorio desde GitHub:
git clone https://github.com/HenryAcevedo16/GojoStore

Instalación de Dependencias
Asegúrate de tener Node.js y npm instalado en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install

Iniciar la Aplicación
Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:
npm run dev

La aplicación estará disponible en http://localhost:3000.

Navegación
Página de Inicio: Al ingresar a la aplicación, verás una selección de productos disponibles para comprar.

Navegación por Categorías: Puedes utilizar el menú desplegable para seleccionar una categoría específica y ver solo los productos de esa categoría.

Detalles del Producto: Al hacer clic en un producto, serás redirigido a la página de detalles del producto, donde encontrarás información detallada sobre el producto, incluyendo una descripción, precio y opciones de compra.

Carrito de Compras: Puedes agregar productos al carrito de compras desde la página de detalles del producto. El carrito de compras muestra un resumen de los productos seleccionados y el precio total.

Proceso de Compra: Cuando estés listo para comprar, ve al carrito de compras y completa la información requerida, como nombre, apellido, teléfono y correo electrónico. Luego, haz clic en "Realizar Compra" para finalizar el pedido.

Estructura del Proyecto
src: Contiene el código fuente de la aplicación.
Components: Componentes de React utilizados en la aplicación.

Dependencias Externas:

Firebase: Plataforma de desarrollo de aplicaciones web.
React: Biblioteca de JavaScript para la construcción de interfaces de usuario.
Styled Components: Biblioteca para la creación de estilos en componentes React.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
