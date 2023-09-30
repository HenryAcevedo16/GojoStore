const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

// Directorio de origen y archivo de salida
const sourceDirectory = 'src/Components'; // Cambia esto según la ubicación de tus archivos JSX
const outputFile = 'output.min.js';

// Función para minificar un archivo JSX
async function minifyFile(filePath) {
  try {
    const code = await fs.promises.readFile(filePath, 'utf8');
    const result = await minify(code, {
      compress: true,
      mangle: true,
    });
    return result.code;
  } catch (error) {
    console.error(`Error al minificar el archivo ${filePath}:`, error);
    return '';
  }
}

// Función para minificar todos los archivos JSX en un directorio
async function minifyJSXFiles(directoryPath, outputPath) {
  const files = await fs.promises.readdir(directoryPath);

  const minifiedCode = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      if (file.endsWith('.jsx')) {
        return minifyFile(filePath);
      }
      return '';
    })
  );

  await fs.promises.writeFile(outputPath, minifiedCode.join('\n'));
}

// Ejecuta la minificación
minifyJSXFiles(sourceDirectory, outputFile)
  .then(() => {
    console.log('Minificación completada con éxito.');
  })
  .catch((error) => {
    console.error('Error al minificar los archivos JSX:', error);
  });
