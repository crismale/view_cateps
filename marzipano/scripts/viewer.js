async function fetchScenes() {
  const res = await fetch("http://localhost:3000/api/images");
  const scenes = await res.json();
  return scenes;
}

async function initViewer() {
  const scenes = await fetchScenes();
  if (!scenes.length) return alert("No hay imágenes en la BBDD");

  const viewerElement = document.getElementById("pano");
  const viewer = new Marzipano.Viewer(viewerElement);

  scenes.forEach((sceneData, index) => {
    const source = Marzipano.ImageUrlSource.fromString(sceneData.url);
    const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
    const view = new Marzipano.RectilinearView();

    const scene = viewer.createScene({ source, geometry, view });

    if (index === 0) scene.switchTo(); // mostrar primera escena
  });
}

initViewer();