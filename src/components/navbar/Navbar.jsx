import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          {/* GitHub */}
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-zra4hqic.png"
              alt="GitHub"
            />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          {/* Naukri */}
          <a href="https://www.naukri.com/mnjuser/profile?id=your-naukri-id" target="_blank" rel="noopener noreferrer">
            <img
              src="https://play-lh.googleusercontent.com/76gEFhQto5xMHr2Qf8nWLvm1s0O60clhkwHvxQDSeI3hthf7Zs05JJQeyg5H347DGQ"
              alt="Naukri"
            />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/9420234754" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
