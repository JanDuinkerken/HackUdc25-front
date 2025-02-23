# Ofeelia
Este repositorio contiene el código del proyecto **Ofeelia**, desarrollado durante el hackathon HackUDC en 2025, el cual tuvo una duración de 36 horas.

El proyecto consiste de un chatbot el cual utiliza LLMs y contexto proporcionado por el usuario en la forma de un diario emocional para intentar mejorar el estado animico del usuario y proporcionarle rutinas y objetivos para conseguir esta mejora.

## Tecnologías
Este frontal fue desarrollado en Typescript utilizando ReactJS y la librería de componentes Mantine para ayuar en la estilización de la aplicación.

Consiste de las siguientes tres paginas principales (y una página de login):
- Chatbot: El usuario podra tener conversaciones con nuestra IA, la cual intentará ayudarlo y mejorar su estado anímico, pudiendo también proporcionarle objetivos y pautas a seguir para cumplir con esa mejoría
- Diario emocional: En esta página el usuario escribe como se sintió durante el día y nosotros le mostraremos cual fue la emoción más percibida durante ese día.
- Perfil emocional: Utilizando los datos proporcionados por el usuario en el Diario emocional computamos un radar-chart el cual muestra la pertenencia de dicho usuario en cada una de las categorías del Big Five. También proporcionamos una breve explicación de la significancia del nivel de pertenencia a cada categoría.

## Primeros pasos
Para clonar el repositorio se puede utilizar el siguiente comando:
```bash
git clone https://github.com/JanDuinkerken/HackUdc25-front.git
```

### Dependencias
Para lanzar el proyecto las siguientes dependiencias son necesarias:
- NodeJS v23.8.0
- NPM v11.1.0

### Como lanzar localmente
Para lanzar el frontend localmente se deben correr los siguientes comandos:
```bash
npm install
npm run dev
```

### Como realizar una la ¨build¨
Para crear una ¨build" del proyecto lanza el siguiente comando:
```bash
npm run build
```

### Como lanzar Dockerizado
Desde la raiz del proyecto corremos:
```bash
docker build . -t "hackudc25-front"
docker compose up
```