import Docker from "dockerode";

export class DockerClient {
  private dockerSockerPath: string;

  constructor() {
    this.dockerSockerPath =
      process.env.DOCKER_SOCKET_PATH || "/var/run/docker.sock";
  }

  connect() {
    try {
      const docker = new Docker({
        socketPath: this.dockerSockerPath,
      });
      console.log("Docker client connected!");
      return docker;
    } catch (error) {
      console.error("Error connecting to Docker client:", error);
      throw error;
    }
  }
}
