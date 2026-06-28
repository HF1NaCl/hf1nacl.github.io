// scripts/fetch-github.mjs
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.resolve('app/assets/github-cache.json');
const CACHE_DURATION = 60 * 60 * 1000; // 1 hora en milisegundos

// Lee el username de las variables de entorno o del .env
function getGithubUsername() {
  if (process.env.NUXT_PUBLIC_GITHUB_USERNAME) {
    return process.env.NUXT_PUBLIC_GITHUB_USERNAME;
  }
  try {
    const envPath = path.resolve('.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      const match = envContent.match(/NUXT_PUBLIC_GITHUB_USERNAME=['"]?([^'"\n]+)['"]?/);
      if (match) return match[1];
    }
  } catch (e) {
    console.error('Error leyendo .env:', e);
  }
  return 'HF1NaCl'; // Fallback por defecto
}

async function updateCache() {
  // Comprobar si la caché actual es reciente
  if (fs.existsSync(CACHE_FILE)) {
    const stats = fs.statSync(CACHE_FILE);
    const age = Date.now() - stats.mtimeMs;
    if (age < CACHE_DURATION) {
      console.log(`[GitHub Cache] Usando caché local (antigüedad: ${Math.round(age / 1000)}s).`);
      return;
    }
  }

  console.log('[GitHub Cache] Descargando datos actualizados de GitHub...');
  const username = getGithubUsername();
  const headers = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'Nuxt-Static-Builder'
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos`, { headers })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`Status error: User: ${userRes.status}, Repos: ${reposRes.status}`);
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify({ user, repos }, null, 2));
    console.log('[GitHub Cache] Datos guardados en local.');
  } catch (error) {
    console.error('[GitHub Cache] Error descargando de GitHub API:', error.message);
    if (!fs.existsSync(CACHE_FILE)) {
      // Si falla y no hay caché previa, creamos un archivo temporal vacío para evitar errores de compilación
      fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
      fs.writeFileSync(CACHE_FILE, JSON.stringify({ user: {}, repos: [] }, null, 2));
    }
  }
}

updateCache();
