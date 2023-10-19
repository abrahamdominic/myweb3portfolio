import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { AnimatePresence } from "framer-motion"
import { Layout } from './layouts';
import "aos/dist/aos.css"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence mode="popLayout">
    <Layout />
  </AnimatePresence>
)