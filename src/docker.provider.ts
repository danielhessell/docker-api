import Dockerode, { Container, ContainerInfo, ImageInfo } from "dockerode";
import { DockerClient } from "./docker";

export class DockerProvider {
  private client: Dockerode;

  constructor() {
    this.client = new DockerClient().connect();
  }

  listContainers(all: boolean): Promise<ContainerInfo[]> {
    return this.client.listContainers({ all });
  }

  listImages(): Promise<ImageInfo[]> {
    return this.client.listImages();
  }

  searchImages(name: string): Promise<ImageInfo[]> {
    return this.client.searchImages({ term: name });
  }

  startContainer(containerId: string): Promise<Container> {
    return this.client.getContainer(containerId).start();
  }

  stopContainer(containerId: string): Promise<Container> {
    return this.client.getContainer(containerId).stop();
  }

  deleteContainer(containerId: string): Promise<void> {
    return this.client.getContainer(containerId).remove();
  }

  createContainer(name: string): Promise<Container> {
    return this.client.createContainer({
      name,
    });
  }
}
