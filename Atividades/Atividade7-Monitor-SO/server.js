const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Arquivos da interface ficam dentro da pasta public.
app.use(express.static(path.join(__dirname, 'public')));

// Retorna informações básicas da máquina onde o servidor está rodando.
app.get('/api/system', (req, res) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  const memoryGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2);

  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    system: os.type(),
    release: os.release(),
    architecture: os.arch(),
    cpuModel: os.cpus()[0] ? os.cpus()[0].model : 'Não identificado',
    cpuCount: os.cpus().length,
    totalMemory: memoryGB(totalMemory),
    freeMemory: memoryGB(freeMemory),
    usedMemory: memoryGB(usedMemory),
    memoryPercent: Math.round((usedMemory / totalMemory) * 100),
    uptime: Math.floor(os.uptime() / 60)
  });
});

app.listen(PORT, () => {
  console.log(`Monitor disponível em http://localhost:${PORT}`);
});
