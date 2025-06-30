// const input = document.getElementById("cli-input");
// const output = document.getElementById("output");

// const commands = {
//   whoami: "Aryaman M Singha - Azure Cloud L1 Engineer ☁️",
//   "aryaman m singha": "🧑‍💻 Welcome! That's me.<br>Try 'whoami' to know more or 'projects' to explore my work.",
//   experience: `> Azure Cloud L1 Engineer @ SISL Infotech.Pvt Ltd (Jun 2025 – Jul 2025)<br>> Assisted in Azure resource deployment & Terraform scripting.<br>> Configured VM scale sets, Storage accounts & Load Balancer.<br>> Hands-on with Azure CLI, Monitoring & IAM.`,
//   skills: `> Azure | Terraform | Git | Bash<br>> Monitoring | Networking | DevOps Tools`,
//   projects: `> Hybrid Cloud Storage 🔐<br>> Deployed Load-Balanced Multi-VM Web Server Architecture on Azure Using IIS and Apache2 💬<br>> Designed and deployed a secure Azure Virtual Network with three firewalls for force tunneling, integrated Load Balancer, Traffic Manager, and automated the entire infrastructure using Terraform (IaC).📊`,
//   certifications: `> Microsoft AZ-900 ✅<br>> Microsoft AZ-104 (In Progress)`,
//   contact: `> Email: aryaman@example.com<br>> GitHub: <a href="https://github.com/aryaman" target="_blank">github.com/aryaman</a><br>> LinkedIn: <a href="https://linkedin.com/in/aryaman" target="_blank">linkedin.com/in/aryaman</a>`,
//   resume: `> <a href="https://aryaman.cloud/resume.pdf" target="_blank">Click here to view/download my resume (PDF)</a>`,
//   help: `Available commands:<br>whoami, skills, projects, certifications, contact, resume, clear, help`,
//   clear: "clear"
// };

// input.addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     const command = input.value.trim();
//     handleCommand(command);
//     input.value = "";
//   }
// });

// function handleCommand(cmd) {
//   if (cmd === "") return;

//   const promptLine = `<div><span class="prompt">user@aryaman:~$</span> ${cmd}</div>`;
//   const normalizedCmd = cmd.toLowerCase();

//   if (commands[normalizedCmd]) {
//     if (normalizedCmd === "clear") {
//       output.innerHTML = "";
//       return;
//     }
//     const result = `<div>${commands[normalizedCmd]}</div>`;
//     output.innerHTML += promptLine + result;
//   } else {
//     const error = `<div>Command not found: ${cmd}. Type 'help' for a list of commands.</div>`;
//     output.innerHTML += promptLine + error;
//   }

//   output.scrollTop = output.scrollHeight;
// }
