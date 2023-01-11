import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15m
});

const api = axios.create();

export default api;
