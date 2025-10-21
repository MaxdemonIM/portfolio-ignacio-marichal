const sistema = new System();

let ultimoId = 0;

class Proyect {
    constructor(img, description, technology, link){
        this.id = ultimoId++
        this.img = img;
        this.description = description;
        this.technology = technology;
        this.link = link;
    }
}

class Technology{
    constructor(img, nombre){
        this.img = img;
        this.nombre = nombre;
    }
}


// Crear tecnologías
const html = new Technology("img/html.webp", "HTML");
const css = new Technology("img/css.webp", "CSS");
const js = new Technology("img/javascript.webp", "JavaScript");
const bootstrap = new Technology("img/bootstrap.webp", "Bootstrap");
const csharp = new Technology("img/asp-net.webp", "C#");
const sql = new Technology("img/sql.webp", "sql");


// Agregarlas al sistema (mapa)
sistema.technologies.set("HTML", html);
sistema.technologies.set("CSS", css);
sistema.technologies.set("JavaScript", js);
sistema.technologies.set("Bootstrap", bootstrap);
sistema.technologies.set("C#", csharp);
sistema.technologies.set("SQL", sql);


// Agregar proyectos reales
sistema.proyects.push(
  new Proyect("img/controlDePagos.png", "Proyecto MVC Clean Arquitecture y API code-first con Entity Framework", [csharp], [sql], "https://github.com/Prog-P3-2025-2/M3C_IMEM"),

  new Proyect("img/Altavia.png", "Proyecto académico MVC de aerolinea ficticia Altavia desplegado en Azure", [csharp], [bootstrap], [css], "#https://github.com/MaxdemonIM/obligatorio-programacion-2"),
);