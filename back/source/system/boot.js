import app from "./app.js";

export function demarrerServer(port = process.env.PORT || 3000) {
  const server = app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });

  return server;
}

export function arreterServer(server) {
  return new Promise((resolve, reject) => {
    if (!server) {
      resolve();
      return;
    }

    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      console.log("Serveur arrêté");
      resolve();
    });
  });
}

export default app;
