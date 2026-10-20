import { defineConfig } from "vite";
import { tinySpa } from "vite-plugin-tiny-spa";

export default defineConfig({
  plugins: [tinySpa()],
});


//import react from '@vitejs/plugin-react'
//import { defineConfig } from 'vite'
//
// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  base: './'
//})
