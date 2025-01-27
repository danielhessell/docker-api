import { Router } from "express";
import { DockerContainersController } from "./docker-containers.controller";
import { DockerImagesController } from "./docker-images.controller";
import { DockerProvider } from "./docker.provider";

export const routes: Router = Router();

const dockerProvider = new DockerProvider();
const dockerImagesController = new DockerImagesController(dockerProvider);
const dockerContainersController = new DockerContainersController(
  dockerProvider
);

routes.get("/api/images", dockerImagesController.listImages);
routes.get("/api/images/filter", dockerImagesController.searchImages);

routes.get("/api/containers", dockerContainersController.listContainers);
routes.post("/api/containers", dockerContainersController.createContainer);
routes.post(
  "/api/containers/:containerId/start",
  dockerContainersController.startContainer
);
routes.post(
  "/api/containers/:containerId/stop",
  dockerContainersController.stopContainer
);
routes.delete(
  "/api/containers/:containerId",
  dockerContainersController.deleteContainer
);
