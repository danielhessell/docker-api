import { Request, Response } from "express";
import { DockerProvider } from "./docker.provider";

export class DockerImagesController {
  constructor(private dockerProvider: DockerProvider) {
    this.listImages = this.listImages.bind(this);
    this.searchImages = this.searchImages.bind(this);
  }

  async listImages(_: Request, response: Response) {
    const images = await this.dockerProvider.listImages();
    response.json({ images });
    return;
  }

  async searchImages(request: Request, response: Response) {
    const { name } = request.query;
    const images = await this.dockerProvider.searchImages(name as string);
    response.json({ images });
    return;
  }
}
