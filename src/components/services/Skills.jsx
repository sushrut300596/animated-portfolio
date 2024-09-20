import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          My Key <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> That Drive Success
        </p>
        <hr />
      </motion.div>

      {/* Skills Section */}
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="skillBox"
          whileHover={{ background: "linear-gradient(45deg, #28a745, #1c7430)", color: "white" }}
        >
          <h2>Python</h2>
          <p>
            Expertise in writing efficient, scalable, and maintainable code. Strong knowledge of frameworks like Django and Flask.
          </p>
        </motion.div>
        <motion.div
          className="skillBox"
          whileHover={{ background: "linear-gradient(45deg, #2496ed, #005f9e)", color: "white" }}
        >
          <h2>Docker</h2>
          <p>
            Experienced in containerizing applications, creating and managing Docker environments, and orchestration using Docker Compose.
          </p>
        </motion.div>
        <motion.div
          className="skillBox"
          whileHover={{ background: "linear-gradient(45deg, #f0db4f, #4d4d4d)", color: "white" }}
        >
          <h2>Linux</h2>
          <p>
            Proficient in Linux systems, managing server environments, shell scripting, and troubleshooting.
          </p>
        </motion.div>

        {/* Flask API Section */}
        <motion.div
          className="skillBox"
          whileHover={{ background: "linear-gradient(45deg, #4CAF50, #087F23)", color: "white" }}
        >
          <h2>Flask API</h2>
          <p>
            Experienced in building lightweight, fast, and secure RESTful APIs using Flask, focusing on microservices architecture.
          </p>
        </motion.div>

        {/* FastAPI Section */}
        <motion.div
          className="skillBox"
          whileHover={{ background: "linear-gradient(45deg, #0F9D58, #00796B)", color: "white" }}
        >
          <h2>FastAPI</h2>
          <p>
            Proficient in creating high-performance APIs with FastAPI, leveraging asynchronous programming and data validation.
          </p>
        </motion.div>
      </motion.div>

      {/* AWS Services Section */}
      <motion.div className="awsServices" variants={variants}>
        <h2>AWS Services I Use</h2>
        <motion.div className="awsListContainer">
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS48VeIElXRoqXfCQ4uD0Ct9D5i9jDNLvbw&s" alt="EC2" />
            <p>EC2</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://seeklogo.com/images/A/amazon-s3-simple-storage-service-logo-9A3F37976E-seeklogo.com.png" alt="S3" />
            <p>S3</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Amazon_Lambda_architecture_logo.png" alt="Lambda" />
            <p>Lambda</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://seeklogo.com/images/A/aws-cloudformation-logo-11F173F931-seeklogo.com.png" alt="CloudFormation" />
            <p>CloudFormation</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Management-Governance/64/Arch_Amazon-CloudWatch_64@5x.png" alt="CloudWatch" />
            <p>CloudWatch</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://miro.medium.com/v2/resize:fit:300/1*-hvyCPbri_bBxaVMDfLCVw.png" alt="DynamoDB" />
            <p>DynamoDB</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-n24kz_EAKoUWsi6EqsVxCeOgppNBQHKvTg&s" alt="RDS" />
            <p>RDS</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Networking-Content-Delivery/64/Arch_Amazon-Route-53_64@5x.png" alt="Route 53" />
            <p>Route 53</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://seeklogo.com/images/A/aws-certificate-manager-logo-2639B06BF4-seeklogo.com.png" alt="ACM" />
            <p>ACM</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEvg1IKOYgigghNxZVCeQD5xTpKm4qkWDsQ&s" alt="IoT" />
            <p>IoT</p>
          </motion.div>
          <motion.div className="awsBox" whileHover={{ scale: 1.1 }}>
            <img src="https://seeklogo.com/images/A/aws-cloudfront-logo-D475098A98-seeklogo.com.png" alt="CloudFront" />
            <p>CloudFront</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
