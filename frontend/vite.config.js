import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const deploymentUrls = {
	frontend: "https://e-commerce-drab-zeta-45.vercel.app",
	backend: "https://e-commerce-g9x5.onrender.com",
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: deploymentUrls.backend,
				changeOrigin: true,
				secure: true,
			},
		},
	},
});
