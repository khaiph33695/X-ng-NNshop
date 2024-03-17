// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "./shop.html"),
        cart: resolve(__dirname, "./cart.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        product_details: resolve(__dirname, "./product_details.html"),
        taikhoan: resolve(__dirname, "./taikhoan.html"),
        
      },
    },
  },
});