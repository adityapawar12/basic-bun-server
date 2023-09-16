import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun!");
    console.log(Bun.version);

    return new Response(body);
    return new Response("Bun!");
  },
  port: 3000,
});
