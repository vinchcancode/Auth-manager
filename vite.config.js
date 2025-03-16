import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Auth-manager/", // ✅ Set this to your repo name (case-sensitive)
});
