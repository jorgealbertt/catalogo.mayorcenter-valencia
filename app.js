// 1. CONFIGURACIÓN DE LA TASA BCV CENTRALIZADA
const TASA_BCV = 709.69; 

// 2. BASE DE DATOS LOCAL COMPLETA
const productos = [
  { "id": 1, "codigo": "6924372627723", "precio_detal": 7.8, "precio_mayor": 6.5, "descripcion": "Sombra Y Rubor Ushas Crush On You 15Clrs #Es4060-2 *6Pcs* X 1Caja", "marca": "Ushas", "variantes": 2 },
  { "id": 2, "codigo": "6924372604328", "precio_detal": 7.8, "precio_mayor": 6.6, "descripcion": "Paleta Sombra-Iluminador-Rubor Dolbe C/Espejo 15Clr Ushas #Ues012-4 *6Pcs* X 1Caja", "marca": "Ushas", "variantes": 2 },
  { "id": 3, "codigo": "6924372628027", "precio_detal": 2.8, "precio_mayor": 2.4, "descripcion": "Sombra Ojos Ombretto Eyeshadow Ushas #Es4144-4 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 4, "codigo": "6974482505206", "precio_detal": 2.6, "precio_mayor": 2.2, "descripcion": "Paleta Sombra 4Mdl Strawberry Blush-Eye 8Clr Hudavioji #Es-749 *24Pcs* X 1Caja", "marca": "Hudavioji" },
  { "id": 5, "codigo": "6924372618608", "precio_detal": 5.3, "precio_mayor": 5.3, "descripcion": "Paleta Sombra-Blush Blooming Your Own Beauty 18Clr #Uf076-4 *6Pcs* X 1Caja", "marca": "Otra" },
  { "id": 6, "codigo": "6924372629956", "precio_detal": 8.1, "precio_mayor": 6.8, "descripcion": "Sombra Showtime Ushas 32Clr Uf018-4 *6Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 7, "codigo": "6976289199718", "precio_detal": 8.8, "precio_mayor": 7.5, "descripcion": "Paleta Sombras Y Rubor Kevin Coco Eyeshadow Panda #01 Bear#02 #Kc1066 *12Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 2 },
  { "id": 8, "codigo": "6976289197981", "precio_detal": 8.0, "precio_mayor": 6.8, "descripcion": "Sombra Kevin Coco Cherry 19Clr #Kc247981 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 9, "codigo": "6976289197967", "precio_detal": 8.0, "precio_mayor": 6.8, "descripcion": "Sombra Kevin Coco Coconut 19Clr #Kc247967 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 10, "codigo": "6976289197974", "precio_detal": 8.0, "precio_mayor": 6.8, "descripcion": "Sombra Kevin Coco Peach 19Clr #Kc247974 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 11, "codigo": "6976289199138", "precio_detal": 11.6, "precio_mayor": 9.8, "descripcion": "Paleta Sombras Kevin Coco Eyeshadow 39 Colors #Kc249138 *6Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 12, "codigo": "6976289196069", "precio_detal": 7.5, "precio_mayor": 6.4, "descripcion": "Paleta Sombra Face Make-Up Pink Denim #Marron 33Clr Kevin Coco #Kc-9007-2 *6Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 13, "codigo": "6924372617779", "precio_detal": 2.9, "precio_mayor": 2.5, "descripcion": "Sombra Ojos Bloom Ushas 3Tonos Uf059-A *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 14, "codigo": "6976289198049", "precio_detal": 3.3, "precio_mayor": 3.3, "descripcion": "Paleta Contorno It Contouring Palette 3Clr Kevin Coco 2Mdl #Kc-248049 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 15, "codigo": "6974482504056", "precio_detal": 3.3, "precio_mayor": 2.8, "descripcion": "Paleta Sombra Sirena Meymar 10Clr Eye Shadow Hudavioji #Es-704 *12Pcs* X 1Caja", "marca": "Hudavioji" },
  { "id": 16, "codigo": "6924372603604", "precio_detal": 7.3, "precio_mayor": 6.2, "descripcion": "Palette Sombra Ojos Make Up Ushas Ombretto Eyeshadow 24Tonos #Ues007-4 *6Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 17, "codigo": "6976289198704", "precio_detal": 7.7, "precio_mayor": 7.7, "descripcion": "Sombra Kevin & Coco Sweet Girl 32Clr #Kc248704 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 18, "codigo": "6976289195499", "precio_detal": 6.0, "precio_mayor": 5.1, "descripcion": "Paleta Sombra Kevin-Coco Two Gato 18Clr Kc-245499 *10Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 19, "codigo": "6976289195949", "precio_detal": 4.9, "precio_mayor": 4.9, "descripcion": "Paleta Sombra Iluminador Beauty 10Clr Kc-245949 *6Pcs* X 1Caja", "marca": "Otra" },
  { "id": 20, "codigo": "30060124", "precio_detal": 2.0, "precio_mayor": 1.7, "descripcion": "Mini Paleta De Sombra De Ojos Meis Eyeshadow 4Clr 2Tonos #30060124 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 21, "codigo": "6924372616987", "precio_detal": 2.3, "precio_mayor": 1.72, "descripcion": "Sombra Ushas Variety Makeup 6Tono Uf-042-4 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 22, "codigo": "6924372602669", "precio_detal": 5.7, "precio_mayor": 4.8, "descripcion": "Sombras Ojos Ombretto + Rubor 2En1 Ushas #Uf051-4 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 23, "codigo": "6924372602751", "precio_detal": 3.1, "precio_mayor": 3.1, "descripcion": "Sombra Ojos Ombretto Sweetday Ushas #Ues001-4 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 24, "codigo": "6924372618790", "precio_detal": 6.2, "precio_mayor": 5.2, "descripcion": "Paleta Sombra 3En1 C\\Espejo Eyeshadow 19Clr Stay All Day 2Mdl Ushas #Uf080-4 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 25, "codigo": "6924372603918", "precio_detal": 2.8, "precio_mayor": 2.3, "descripcion": "Paleta Sombra Eyeshadow Beauty Glazed 12H Lasting 2Mdl Color Show 9Clr Ushas #Ues010-2 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 26, "codigo": "6924372617199", "precio_detal": 12.0, "precio_mayor": 10.2, "descripcion": "Paleta Sombra Sweet Ice Cream 3En1 Ushas #Uf-048 *6Pcs* X 1Caja", "marca": "Ushas", "variantes": 2 },
  { "id": 27, "codigo": "6924372617205", "precio_detal": 12.0, "precio_mayor": 10.2, "descripcion": "Paleta Sombra Sweet Cake 3En1 Ushas #Uf-049 *6Pcs* X 1Caja", "marca": "Ushas", "variantes": 2 },
  { "id": 28, "codigo": "6924372617212", "precio_detal": 9.4, "precio_mayor": 8.2, "descripcion": "Sombra Iluminador Y Corrector Sweet Donut Ushas #Uf050 *6Pcs* X 1Caja", "marca": "Ushas", "variantes": 2 },
  { "id": 29, "codigo": "6976289196526", "precio_detal": 6.3, "precio_mayor": 5.3, "descripcion": "Paleta Sombra C/Espejo Y Pincel 18Clr Fire Of Love Kevin Coco #Kc-9014 *6Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 1 },
  { "id": 30, "codigo": "6970265726264", "precio_detal": 4.5, "precio_mayor": 3.8, "descripcion": "Mini Paleta Sombra 26Clrs 6En1 Charmlook Ballet #726B-6 *12Pcs* X 1Caja", "marca": "Otra", "variantes": 1 },
  { "id": 31, "codigo": "6970265726264", "precio_detal": 4.5, "precio_mayor": 3.8, "descripcion": "Mini Paleta Sombra 26Clrs 6En1 Charmlook Ballet #726B-6 *12Pcs* X 1Caja", "marca": "Otra" },
  { "id": 32, "codigo": "6976289198858", "precio_detal": 11.0, "precio_mayor": 9.3, "descripcion": "Paleta Sombra-Iluminador C/Espejo Sirenita 36Clr Kevuin Coco #Kc-248858 *6Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 1 },
  { "id": 33, "codigo": "6976289194881", "precio_detal": 20.8, "precio_mayor": 17.6, "descripcion": "Sombras-Labial Kevin-Coco Face Chart 36Clr Kc-244881 X 1Und", "marca": "Kevin Coco", "variantes": 2 },
  { "id": 34, "codigo": "6976159954294", "precio_detal": 7.3, "precio_mayor": 6.2, "descripcion": "Serie Maquillaje Niñas 11Pcs Professional Makeup #Varied Queen #V6429 X 1Set", "marca": "Otra", "variantes": 1 },
  { "id": 35, "codigo": "6976289199824", "precio_detal": 12.7, "precio_mayor": 10.7, "descripcion": "Paletade Sombra 54 Colors Eye Shadow C/Espejo Kevin Coco #Kc-1023 *12Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 1 },
  { "id": 36, "codigo": "6976289199831", "precio_detal": 12.7, "precio_mayor": 10.7, "descripcion": "Paletade Sombra 54 Colors Eye Shadow C/Espejo Y Pincel Kevin Coco #Kc-1024 *12Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 1 },
  { "id": 37, "codigo": "6976289199817", "precio_detal": 12.7, "precio_mayor": 10.7, "descripcion": "Paletade Sombra 54 Colors Eye Shadow C/Espejo Y Pincel Kevin Coco #Kc-1022 *12Pcs* X 1Caja", "marca": "Kevin Coco", "variantes": 1 },
  { "id": 38, "codigo": "6970265728008", "precio_detal": 4.5, "precio_mayor": 3.8, "descripcion": "Mini Paleta Sombra 32Clrs 6En1 Charmlook Chica C/Unicornio #728A *12Pcs* X 1Caja", "marca": "Otra", "variantes": 1 },
  { "id": 39, "codigo": "6924372605288", "precio_detal": 9.7, "precio_mayor": 8.1, "descripcion": "Paleta Sombra Ojos Ushas 11Clrs+Espejo Eyeshadow Zootopia 2 #Uds006 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 40, "codigo": "6970265729012", "precio_detal": 4.5, "precio_mayor": 3.8, "descripcion": "Mini Paleta Sombra 21Clrs 6En1 Charmlook Mariposas #729D *12Pcs* X 1Caja", "marca": "Otra", "variantes": 1 },
  { "id": 41, "codigo": "6970265729012", "precio_detal": 4.5, "precio_mayor": 3.8, "descripcion": "Mini Paleta Sombra 21Clrs 6En1 Charmlook Mariposas #729D *12Pcs* X 1Caja", "marca": "Otra", "variantes": 1 },
  { "id": 42, "codigo": "6976159954386", "precio_detal": 9.0, "precio_mayor": 7.6, "descripcion": "Paleta Sombra 11En1 Nothing Is Impossible Variedad Queen #Unicornio Sentado Leyendo #V6438 X 1Und", "marca": "Otra" },
  { "id": 43, "codigo": "6976159954355", "precio_detal": 7.5, "precio_mayor": 6.4, "descripcion": "Paleta Sombra 9En1 Variedad Queen Love You Ponquesito #V6435 X 1Und", "marca": "Otra", "variantes": 1 },
  { "id": 44, "codigo": "6976159953990", "precio_detal": 9.0, "precio_mayor": 7.6, "descripcion": "Paleta Sombra Varied Queen 24En1 Makeup Gift Box #Muñeca C/Unicornio #V6399 X 1Und", "marca": "Otra" },
  { "id": 45, "codigo": "6974482523064", "precio_detal": 1.2, "precio_mayor": 1.0, "descripcion": "Rubor Liquido Blusher Me Up 15Ml Hudavioji #Bq-065 *24Pcs* X 1Caja", "marca": "Hudavioji" },
  { "id": 46, "codigo": "6974482503219", "precio_detal": 3.4, "precio_mayor": 2.9, "descripcion": "Rubor Hudavioji Blush Natural Flush #B-144 *12Pcs* X 1Caja", "marca": "Hudavioji" },
  { "id": 47, "codigo": "6903072463602", "precio_detal": 3.9, "precio_mayor": 3.3, "descripcion": "Rubor Blush Stick Jelly 3Tonos Forma De Corazon Kiss Beauty #51117-03 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 48, "codigo": "6924372603932", "precio_detal": 3.3, "precio_mayor": 2.8, "descripcion": "Labial Ushas Dual-Use Lip&Cheek 6Tonos #Ulg006B *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 49, "codigo": "6924372619674", "precio_detal": 3.0, "precio_mayor": 2.5, "descripcion": "Rubor En Barra Y Iluminador Stick Ushas 6Tono Uc-138 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 50, "codigo": "6924372602904", "precio_detal": 2.2, "precio_mayor": 1.8, "descripcion": "Rubor-Blusher En Barra Smile Vegan 6Tonos Ushas #Ubl004-A *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 51, "codigo": "6903072462636", "precio_detal": 2.3, "precio_mayor": 2.3, "descripcion": "Blush Liquido Karite 4Tonos #68784-47 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 52, "codigo": "6924372632888", "precio_detal": 1.6, "precio_mayor": 1.4, "descripcion": "Rubor Liquid Blush Sas 6Tonos 12Ml #Sac103 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 53, "codigo": "6924372602843", "precio_detal": 2.8, "precio_mayor": 2.4, "descripcion": "Blush Liquido C/Llavero De Estrella-Lazo Ushas Delicate 6Tonos #Ubl002 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 54, "codigo": "6974482580418", "precio_detal": 1.3, "precio_mayor": 1.1, "descripcion": "Rubor Hudavioji Liquid 6Tono B-041 *24Pcs* X Caja", "marca": "Hudavioji" },
  { "id": 55, "codigo": "6924372617878", "precio_detal": 2.1, "precio_mayor": 2.1, "descripcion": "Rubor En Barra Fast Blush 4Clr Ushas #Uc-079 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 56, "codigo": "6924372655269", "precio_detal": 2.1, "precio_mayor": 1.8, "descripcion": "Rubor En Barra Ushas Stick 4Color Fs-341 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 57, "codigo": "6924372618318", "precio_detal": 3.1, "precio_mayor": 2.7, "descripcion": "Rubor En Crema C/Lazo Ushas Mousse Blush 4Tonos #Uc094A *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 58, "codigo": "6924372603970", "precio_detal": 5.1, "precio_mayor": 4.3, "descripcion": "Blush Rubor Fard Ushas 3En1 C/Pines De Lentes De Sol #Ubl009-1 *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 59, "codigo": "6903072425204", "precio_detal": 1.7, "precio_mayor": 1.7, "descripcion": "Rubor Mini Blush Stick Color Kiss Beauty 4Color #51050-03 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 60, "codigo": "6903072472116", "precio_detal": 1.6, "precio_mayor": 1.4, "descripcion": "Brillo Jelly Linta Kiss Beauty Glossy Lasting Glaze Bouncing 6Tonos #71246-03 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 61, "codigo": "6924372602737", "precio_detal": 2.5, "precio_mayor": 2.0, "descripcion": "Rubor Liquido Ushas Blush Sweet Cheeks 6Tonos #Ubl001 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 62, "codigo": "6903072465170", "precio_detal": 2.4, "precio_mayor": 2.0, "descripcion": "Rubor Blush Liquid Soft Brush 4Clr Kiss Beauty #68684-03 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 63, "codigo": "6971867376697", "precio_detal": 3.6, "precio_mayor": 2.8, "descripcion": "Blush Rubor En Barra Huda Beauty 4Tonos #Cs0108 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 64, "codigo": "6903072464852", "precio_detal": 1.3, "precio_mayor": 1.2, "descripcion": "Rubor Y Balsamo Pretty Rose Karite Lip Y Cheek Balm #83522-47 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 65, "codigo": "6924372619735", "precio_detal": 2.9, "precio_mayor": 2.9, "descripcion": "Rubor En Crema Cream Blush 4Tonos Ushas #Uc143B *12Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 66, "codigo": "6924372633274", "precio_detal": 3.2, "precio_mayor": 2.7, "descripcion": "Rubor Sas Beautiful Garden Blush Colorete-Fard #Saf057-4 *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 67, "codigo": "6976289197752", "precio_detal": 3.5, "precio_mayor": 3.0, "descripcion": "Paleta De Rubor-Blush 2Mdl Forma De Corazon Heart 4Clr Kevin Coco #247752 *12Pcs* X 1Caja", "marca": "Kevin Coco" },
  { "id": 68, "codigo": "6985415467317", "precio_detal": 1.9, "precio_mayor": 1.6, "descripcion": "Rubor-Brush En Barra C/Esponja 2En1 High Quality 4Clr Magic Your Life #Ma31 *12Pcs* X Caja", "marca": "Otra" },
  { "id": 69, "codigo": "6951866603529", "precio_detal": 0.6, "precio_mayor": 0.51, "descripcion": "RUBOR POWDER COMPACTO B.PHILOSOPHY BLUSH VELVET 6T #PL-9001 *24PCS* X 1CAJA", "marca": "Otra" },
  { "id": 70, "codigo": "6924372602621", "precio_detal": 2.8, "precio_mayor": 2.3, "descripcion": "Paleta De Rubor Blush Ushas 2Tonos #Uf099A *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 71, "codigo": "6924372617885", "precio_detal": 3.1, "precio_mayor": 2.6, "descripcion": "Rubor Jelly Blusher 4Clr Ushas #Uf063-A *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 72, "codigo": "6950865405912", "precio_detal": 1.8, "precio_mayor": 1.5, "descripcion": "Rubor En Polvo Yuth Vitality Meis 6Tonos #Mso116B *24Pcs* X 1Caja", "marca": "Otra" },
  { "id": 73, "codigo": "6924372618707", "precio_detal": 1.84, "precio_mayor": 1.84, "descripcion": "Labial Y Blush En Gel Magic Aurora 3En1 4Tonos Ushas #Uc105 *24Pcs* X 1Caja", "marca": "Ushas" },
  { "id": 74, "codigo": "6976289198117", "precio_detal": 3.2, "precio_mayor": 2.7, "descripcion": "Rubor Mousse Blush Bake 4Tonos Kevin Coco #Kc-248117 *24Pcs* X Caja", "marca": "Kevin Coco" },
  { "id": 75, "codigo": "6924372629857", "precio_detal": 2.3, "precio_mayor": 2.3, "descripcion": "Rubor Cruch Blush Ushas 3Tono 4Clr Uf-012 *24Pcs* X 1Caja", "marca": "Ushas" }
];

let carrito = [];
let tipoPrecio = 'mayor'; 
const grid = document.getElementById("gridProductos");

// 3. INICIALIZACIÓN DE LA TASA
function inicializarTasa() {
    document.getElementById('tasaBCVDisplay').innerText = TASA_BCV.toFixed(2);
}

// 4. DISPLAY DE PRODUCTOS PREMIUM
function renderizarProductos(lista) {
    grid.innerHTML = "";
    if(lista.length === 0) {
        grid.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center; color: #a87b8b; padding: 40px;'>No encontramos coincidencias...</h3>";
        return;
    }

    lista.forEach(prod => {
        const imgPath = `img/${prod.id}.webp`;
        const cardHTML = `
            <div class="card">
                <div class="card-img-container" onclick="abrirQuickview(${prod.id})">
                    <span class="photo-id-badge">#${prod.id}</span>
                    <span class="brand-badge">${prod.marca}</span>
                    <img src="${imgPath}" alt="Item" loading="lazy" onerror="this.src='https://via.placeholder.com/400?text=Foto+${prod.id}'">
                </div>
                <div class="card-content">
                    <span class="card-code">CÓD: ${prod.codigo}</span>
                    <h3 class="card-title">${prod.descripcion}</h3>
                    <div class="prices">
                        <div class="price-col">
                            <span class="price-label">Al Mayor</span>
                            <span class="price-value">$${prod.precio_mayor.toFixed(2)}</span>
                        </div>
                        <div class="price-col" style="text-align: right;">
                            <span class="price-label">Al Detal</span>
                            <span class="price-value">$${prod.precio_detal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="btn-add" onclick="agregarAlCarrito(${prod.id})">Añadir al Pedido</button>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// 5. FILTRADO MULTI-CONTROL
function filtrarProductos() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const marca = document.getElementById("marcaSelect").value;
    const categoria = document.getElementById("categoriaSelect").value;

    const filtrados = productos.filter(p => {
        const matchText = p.codigo.toLowerCase().includes(query) || p.descripcion.toLowerCase().includes(query);
        const matchMarca = (marca === "todas") || (p.marca === marca);
        
        let lineaCalculada = p.id <= 44 ? "paletas" : "rubores";
        const matchCategoria = (categoria === "todas") || (lineaCalculada === categoria);

        return matchText && matchMarca && matchCategoria;
    });
    renderizarProductos(filtrados);
}

function analizarOpcionEnvio() {
    const opcion = document.getElementById("custEnvio").value;
    const groupUbicacion = document.getElementById("grupoUbicacion");
    if(opcion.includes("Sí")) {
        groupUbicacion.style.display = "flex";
    } else {
        groupUbicacion.style.display = "none";
    }
}

// 6. LÓGICA DE CARRITO
function agregarAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    const existe = carrito.find(item => item.id === id);

    if(existe) {
        existe.cantidad++;
    } else {
        carrito.push({...prod, cantidad: 1});
    }
    actualizarInterfazCarrito();
    
    const btn = document.querySelector('.cart-toggle');
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(i => i.id === id);
    if(!item) return;

    item.cantidad += cambio;
    if(item.cantidad <= 0) {
        carrito = carrito.filter(i => i.id !== id);
    }
    actualizarInterfazCarrito();
}

function setPriceType(tipo) {
    tipoPrecio = tipo;
    document.getElementById('btnTipoMayor').classList.toggle('active', tipo === 'mayor');
    document.getElementById('btnTipoDetal').classList.toggle('active', tipo === 'detal');
    
    const nota = document.querySelector('.cart-nota-mayor');
    nota.style.display = tipo === 'mayor' ? 'block' : 'none';

    actualizarInterfazCarrito();
}

function actualizarInterfazCarrito() {
    const listContainer = document.getElementById("cartItemsList");
    const countBadge = document.getElementById("cartCount");
    const totalLabel = document.getElementById("cartTotalValue");
    const totalBsLabel = document.getElementById("cartTotalBsValue");

    listContainer.innerHTML = "";
    let totalGeneral = 0;
    let totalUnidades = 0;

    carrito.forEach(item => {
        const precioUsado = tipoPrecio === 'mayor' ? item.precio_mayor : item.precio_detal;
        const subtotal = precioUsado * item.cantidad;
        totalGeneral += subtotal;
        totalUnidades += item.cantidad;

        const itemHTML = `
            <div class="cart-item">
                <img src="img/${item.id}.webp" loading="lazy" onerror="this.src='https://via.placeholder.com/60?text=${item.id}'">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.descripcion}</h4>
                    <div class="quantity-controls">
                        <button class="btn-qty" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span style="font-weight: bold; padding: 0 10px;">${item.cantidad}</span>
                        <button class="btn-qty" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    let totalBs = totalGeneral * TASA_BCV;

    countBadge.innerText = totalUnidades;
    totalLabel.innerText = `$${totalGeneral.toFixed(2)}`;
    totalBsLabel.innerText = `Bs. ${totalBs.toLocaleString('es-VE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("active");
    document.getElementById("cartOverlay").classList.toggle("active");
}

// 7. ENVÍO WHATSAPP
function enviarPedidoWhatsApp() {
    if(carrito.length === 0) {
        alert("Tu pedido está vacío. Añade productos antes de procesar.");
        return;
    }

    let totalGeneral = 0;
    let totalUnidades = 0;
    carrito.forEach(item => {
        const precioUsado = tipoPrecio === 'mayor' ? item.precio_mayor : item.precio_detal;
        totalGeneral += precioUsado * item.cantidad;
        totalUnidades += item.cantidad;
    });

    if (tipoPrecio === 'mayor') {
        if (totalGeneral < 25.00 || totalUnidades < 6) {
            alert(`⚠️ Tu pedido no califica para Precio al Mayor.\n\nRequisitos mínimos: Compra de $25.00 USD y un mínimo de 6 artículos combinados.`);
            let mensajeInformativo = `¡Hola! Estaba armando un pedido al mayor en el catálogo con un total de $${totalGeneral.toFixed(2)} USD y ${totalUnidades} artículos, pero no alcanzo los mínimos requeridos ($25 USD / 6 unds).`;
            const urlInfo = `https://wa.me/584244188558?text=${encodeURIComponent(mensajeInformativo)}`;
            window.open(urlInfo, '_blank');
            return;
        }
    }

    const nombre = document.getElementById("custNombre").value.trim();
    const apellido = document.getElementById("custApellido").value.trim();
    const telefono = document.getElementById("custTelefono").value.trim();
    const opcionEnvio = document.getElementById("custEnvio").value;
    const ubicacion = document.getElementById("custUbicacion").value.trim();
    const formaPago = document.getElementById("custPago").value;

    if(!nombre || !apellido || !telefono) {
        alert("Por favor, completa tus datos personales (Nombre, Apellido y Teléfono).");
        return;
    }

    let mensaje = `✨ *NUEVO PEDIDO GENERADO* ✨\n👤 *CLIENTE:* ${nombre} ${apellido}\n• *Teléfono:* ${telefono}\n• *Despacho:* ${opcionEnvio}\n${opcionEnvio.includes("Sí") ? `📍 *Dirección:* ${ubicacion}\n` : ""}`;
    mensaje += `\n🛍️ *PRODUCTOS (${tipoPrecio.toUpperCase()})*\n\n`;

    carrito.forEach((item, index) => {
        const precioUsado = tipoPrecio === 'mayor' ? item.precio_mayor : item.precio_detal;
        mensaje += `*#${index + 1}* ${item.descripcion} (x${item.cantidad}) - $${(precioUsado * item.cantidad).toFixed(2)}\n`;
    });

    let totalBs = (totalGeneral * TASA_BCV).toLocaleString('es-VE', {minimumFractionDigits: 2});
    mensaje += `\n💵 *TOTAL NETO:* $${totalGeneral.toFixed(2)}\n🇻🇪 *TOTAL BS:* Bs. ${totalBs}`;

    window.open(`https://wa.me/584244188558?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// 8. MODAL UI
const modalUi = document.getElementById('quickview-modal');
const modalUiImgPrincipal = document.getElementById('modalUiImgPrincipal');
const modalUiContenedorThumbs = document.getElementById('modalUiContenedorThumbs');

function abrirQuickview(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    document.getElementById('modalUiMarca').textContent = producto.marca || "Varios";
    document.getElementById('modalUiTitulo').textContent = producto.descripcion;
    document.getElementById('modalUiPrecioMayor').textContent = producto.precio_mayor.toFixed(2);
    document.getElementById('modalUiPrecioDetal').textContent = producto.precio_detal.toFixed(2);
    document.getElementById('modalUiCodigo').textContent = producto.codigo;
    document.getElementById('modalUiBtnAgregar').onclick = function() { agregarAlCarrito(producto.id); cerrarModalUI(); };

    modalUiImgPrincipal.src = `img/${producto.id}.webp`;
    modalUiContenedorThumbs.innerHTML = '';

    if (producto.variantes && producto.variantes > 0) {
        for (let i = 0; i <= producto.variantes; i++) {
            const ruta = i === 0 ? `img/${producto.id}.webp` : `img/${producto.id}.${i}.webp`;
            const img = document.createElement('img');
            img.src = ruta;
            img.className = 'thumb-item' + (i === 0 ? ' activa' : '');
            img.onclick = function() { modalUiImgPrincipal.src = ruta; modalUiContenedorThumbs.querySelectorAll('img').forEach(el=>el.classList.remove('activa')); img.classList.add('activa'); };
            modalUiContenedorThumbs.appendChild(img);
        }
    }
    modalUi.classList.remove('oculto');
}

function cerrarModalUI() { modalUi.classList.add('oculto'); }
document.getElementById('btnCerrarModalUI').addEventListener('click', cerrarModalUI);

// 9. INICIALIZACIÓN
inicializarTasa();
renderizarProductos(productos);