import dotenv from "dotenv";
import { renderBanner } from "./cli/banner.cli.ts";

dotenv.config();

async function main() {
renderBanner()
}

main();
