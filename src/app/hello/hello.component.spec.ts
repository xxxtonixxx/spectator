import { HelloComponent } from "./hello.component";
import { SpectatorWithHost } from "../../lib/src";
import { createHostComponentFactory } from "../../lib/src/host";

describe("HelloComponent", () => {
  let host: SpectatorWithHost<HelloComponent>;

  const createHost = createHostComponentFactory(HelloComponent);

  it("should display the title", () => {
    host = createHost(
      `
      <hello [title]="title" [widthRaw]="widthRaw"></hello>
    `,
      true,
      {
        title: "some title",
        widthRaw: 20
      }
    );

    expect((host.query("div") as HTMLElement).style.width).toBe("20px");
  });
});
