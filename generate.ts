import * as mod from "https://deno.land/std@0.160.0/fs/copy.ts";
import './server.ts'

const index = await fetch('http://localhost:3000/').then((response) => response.text())

await Deno.mkdir("./dist/");
await mod.copy('./assets', './dist/assets')
await mod.copy('./style', './dist/style')
await Deno.writeTextFile("./dist/index.html", index);
Deno.exit(0);