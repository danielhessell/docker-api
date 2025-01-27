import { Request, Response } from "express";
import { DockerProvider } from "./docker.provider";

export class DockerContainersController {
  constructor(private dockerProvider: DockerProvider) {
    this.listContainers = this.listContainers.bind(this);
    this.startContainer = this.startContainer.bind(this);
    this.stopContainer = this.stopContainer.bind(this);
    this.deleteContainer = this.deleteContainer.bind(this);
    this.createContainer = this.createContainer.bind(this);
  }

  async listContainers(request: Request, response: Response) {
    const { showAll } = request.query as { showAll: string };
    const showAllBoolean = showAll === "true";
    const containers = await this.dockerProvider.listContainers(showAllBoolean);
    response.json({ containers });
  }

  async startContainer(request: Request, response: Response) {
    const containerId = request.params.containerId;
    await this.dockerProvider.startContainer(containerId);
    response.sendStatus(201);
  }

  async stopContainer(request: Request, response: Response) {
    const containerId = request.params.containerId;
    await this.dockerProvider.stopContainer(containerId);
    response.sendStatus(204);
  }

  async deleteContainer(request: Request, response: Response) {
    const containerId = request.params.containerId;
    await this.dockerProvider.deleteContainer(containerId);
    response.sendStatus(204);
  }

  async createContainer(request: Request, response: Response) {
    const { name } = request.body as { name: string };
    const container = await this.dockerProvider.createContainer(name);
    response.json({ container });
  }
}
