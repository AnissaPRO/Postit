class Postit {
    id;
    largeur;
    hauteur;
    couleur;
    x;
    y;
    texte;


constructor(id){
    this.id = id;
    this.largeur = 100;
    this.hauteur = 100;
    this.couleur = "red";
    this.x = 200;
    this.y = 200;
    this.texte = "";
}

affiche(){
    let element = document.getElementById(this.id);
    if(element === null){
        element = document.createElement("div");
        element.id = this.id;
        document.body.appendChild(element);
    }
    element.style.position = "fixed";
    element.style.backgroundColor = this.couleur;
    element.style.width = this.largeur + "px";
    element.style.height = this.hauteur + "px";
    element.style.top = this.y + "px";
    element.style.left = this.x + "px";
    element.innerHTML = this.texte;

}

    bouge(x, y){
        this.x = x;
        this.y = y;
    }

    change(largeur, hauteur){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    changeColor(color){
        this.couleur = color;
    }

    InsertText(texte){
        this.texte = texte;
    }

}
