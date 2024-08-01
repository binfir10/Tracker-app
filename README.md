# Finanzas App

Finanzas App es una aplicación para el control de finanzas personales. Permite a los usuarios agregar gastos e ingresos, visualizar un balance actualizado y gestionar sus finanzas de manera eficiente. La aplicación está desarrollada con Next.js, TypeScript, Tailwind CSS, ShadCN, React Query, Zod, Clerk, Prisma y Vercel Postgres (PostgreSQL).

## Características

- **Registro y Autenticación:** Seguridad de usuario con Clerk para el manejo de autenticación y autorización.
- **Gestión de Finanzas:** Agrega, edita y elimina gastos e ingresos.
- **Balance en Tiempo Real:** Calcula y muestra el balance actual basado en los ingresos y gastos registrados.
- **Interfaz Moderna y Responsiva:** Diseño atractivo con Tailwind CSS y ShadCN.
- **Validación de Datos:** Usa Zod para la validación de formularios y datos de entrada.
- **Consulta Eficiente:** Maneja datos y sincronización con React Query.
- **Base de Datos Relacional:** PostgreSQL a través de Vercel Postgres y Prisma para el manejo de datos.

## Tecnologías Utilizadas

- **Next.js:** Framework para aplicaciones React con renderizado del lado del servidor y generación de sitios estáticos.
- **TypeScript:** Superset de JavaScript para un desarrollo más robusto y tipado estático.
- **Tailwind CSS:** Framework de CSS para un diseño personalizado y responsivo.
- **ShadCN:** Biblioteca para componentes UI de alto nivel.
- **React Query:** Para la gestión de datos y sincronización en el cliente.
- **Zod:** Biblioteca para la validación de esquemas y datos.
- **Clerk:** Solución de autenticación y manejo de usuarios.
- **Prisma:** ORM para trabajar con bases de datos SQL.
- **Vercel Postgres (PostgreSQL):** Base de datos relacional utilizada para almacenar los datos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/brianfigueroa10/Tracker-app.git
    ```

2. **Instalar las dependencias:**

    ```bash
    cd Tracker-app
    npm install
    ```

3. **Iniciar la aplicación:**

    ```bash
    npm run dev
    ```

4. **Configuración del Entorno

Crea un archivo `.env.local` en la raíz del proyecto y agrega tus variables de entorno necesarias, como las credenciales de la base de datos y claves de Clerk.

## Ejecuta las Migraciones de la Base de Datos

```bash
npx prisma migrate dev
```
5. **Ejecuta las migraciones de la base de datos:**

    ```bash
    npx prisma migrate dev
    ```
6. **Abrir en tu navegador:** Abre `http://localhost:3000` en tu navegador web favorito.

## Ejemplo de Uso

1. **Explorar el catálogo:** Navega por la lista de productos disponibles y consulta sus detalles.
2. **Agregar al carrito:** Haz clic en el botón "Agregar al carrito" para añadir productos al carrito de compras.
3. **Gestionar el carrito:** Ve al carrito de compras para ajustar las cantidades de los productos seleccionados.

## Captura de Pantalla

![Captura de Pantalla](https://res.cloudinary.com/dv4ukplcm/image/upload/f_auto,q_auto/v1/proyects/jcbjiy8ac9haveh2zgoj)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Fork este repositorio.**
2. **Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`).**
3. **Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`).**
4. **Push a la rama (`git push origin feature/nueva-caracteristica`).**
5. **Abre un Pull Request.**
