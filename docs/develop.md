# Prerequisite
 - Install Vscode
 - Install nodejs

# Install plugin Vscode
 - Editorconfig
 - Prettier
 - shell-format

# Coding rule
 - When import using @path instead of dot
 - Define datatype for function and variable

# Vscode setting
```bash
{
  // Start ruler
  "editor.rulers": [80],
  "workbench.colorCustomizations": {
    "editorRuler.foreground": "#ff4081"
  },
  // End ruler
  // Start show space
  "editor.renderWhitespace": "all",
  // End show space
  // Start theme
  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "Abyss",
  // End theme
  // Start auto save
  "files.autoSave": "afterDelay",
  // End auto save
  // Start setup terminal
  "terminal.integrated.shell.windows": "path\\to\\bash.exe",
  // End setup terminal
  // Start docker
  "docker.containers.groupBy": "Registry",
  "docker.images.groupBy": "RepositoryName",
  "docker.volumes.groupBy": "VolumeName",
  // End docker
  // Start format code
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[dockerfile]": {
    "editor.defaultFormatter": "ms-azuretools.vscode-docker"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  // End format code
}
```
