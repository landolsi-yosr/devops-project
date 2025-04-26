# Fournisseur Docker (met à jour la source)
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 2.0"
    }
  }
}

provider "docker" {}

# Création de l'image Docker
resource "docker_image" "express_guessing_game" {
  name = "express-guessing-game"
  build {
    context = "${path.module}"
  }
}

# Création du conteneur Docker
resource "docker_container" "express_guessing_game" {
  name  = "express-guessing-game"
  image = docker_image.express_guessing_game.latest
  ports {
    internal = 3000
    external = 3000
  }
}
