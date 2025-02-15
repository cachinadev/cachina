import React from "react";

const departamentosProvinciasDistritos = {
        Lima: {
            Lima: [
                "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos",
                "Cieneguilla", "Comas", "El Agustino", "Independencia", "Jesús María",
                "La Molina", "La Victoria", "Lince", "Los Olivos", "Lurigancho-Chosica",
                "Lurín", "Magdalena del Mar", "Miraflores", "Pachacámac", "Pucusana", 
                "Pueblo Libre", "Puente Piedra", "Punta Hermosa", "Punta Negra", 
                "Rímac", "San Bartolo", "San Borja", "San Isidro", "San Juan de Lurigancho",
                "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel",
                "Santa Anita", "Santa María del Mar", "Santa Rosa", "Santiago de Surco",
                "Surquillo", "Villa El Salvador", "Villa María del Triunfo"
            ],
            Barranca: ["Barranca", "Paramonga", "Pativilca", "Supe", "Supe Puerto"],
            Cajatambo: ["Cajatambo", "Copa", "Gorgor", "Huancapón", "Manás"],
            Canta: ["Canta", "Arahuay", "Huamantanga", "Huaros", "Lachaqui", "San Buenaventura", "Santa Rosa de Quives"],
            Cañete: [
                "San Vicente de Cañete", "Asia", "Calango", "Cerro Azul", "Chilca", 
                "Coayllo", "Imperial", "Lunahuaná", "Mala", "Nuevo Imperial", 
                "Pacarán", "Quilmaná", "San Antonio", "San Luis", "Santa Cruz de Flores", "Zúñiga"
            ],
            Huaral: ["Huaral", "Atavillos Alto", "Atavillos Bajo", "Aucallama", "Chancay", "Ihuarí", "Lampian", "Pacaraos", "San Miguel de Acos", "Santa Cruz de Andamarca", "Sumbilca", "Veintisiete de Noviembre"],
            Huarochirí: [
                "Matucana", "Antioquía", "Callahuanca", "Carampoma", "Chicla", "Cuenca", "Huachupampa",
                "Huanza", "Huarochirí", "Lahuaytambo", "Langa", "Laraos", "Mariatana", "Ricardo Palma",
                "San Andrés de Tupicocha", "San Antonio", "San Bartolomé", "San Damian", "San Juan de Iris",
                "San Juan de Tantaranche", "San Lorenzo de Quinti", "San Mateo", "San Mateo de Otao", 
                "San Pedro de Casta", "San Pedro de Huancayre", "Sangallaya", "Santa Cruz de Cocachacra", 
                "Santa Eulalia", "Santiago de Anchucaya", "Santiago de Tuna", "Santo Domingo de los Olleros", "Surco"
            ],
            Huaura: ["Huacho", "Ámbar", "Caleta de Carquín", "Checras", "Hualmay", "Huaura", "Leoncio Prado", "Paccho", "Santa Leonor", "Santa María", "Sayán", "Vegueta"],
            Oyón: ["Oyón", "Andajes", "Caujul", "Cochamarca", "Naván", "Pachangara"],
            Yauyos: [
                "Yauyos", "Alis", "Allauca", "Ayaviri", "Azángaro", "Cacra", "Carania",
                "Catahuasi", "Chocos", "Cochas", "Colonia", "Hongos", "Huampara", "Huancaya",
                "Huangáscar", "Huantán", "Huañec", "Laraos", "Lincha", "Madeán", "Miraflores",
                "Omas", "Putinza", "Quinches", "Quinocay", "San Joaquín", "San Pedro de Pilas",
                "Tanta", "Tauripampa", "Tomas", "Tupe", "Viñac", "Vitis"
            ]
        },
        Callao: {
            Callao: ["Bellavista", "Carmen de La Legua Reynoso", "La Perla", "La Punta", "Ventanilla", "Mi Perú"]
        },

        Piura: {
            Piura: [
                "Piura", "Castilla", "Catacaos", "Cura Mori", "El Tallán", 
                "La Arena", "La Unión", "Las Lomas", "Tambo Grande", "Veintiséis de Octubre"
            ],
            Ayabaca: [
                "Ayabaca", "Frias", "Jilili", "Lagunas", "Montero", "Pacaipampa", 
                "Paimas", "Sapillica", "Sicchez", "Suyo"
            ],
            Huancabamba: [
                "Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", 
                "Lalaquiz", "San Miguel de El Faique", "Sondor", "Sondorillo"
            ],
            Morropón: [
                "Chulucanas", "Buenos Aires", "Chalaco", "La Matanza", "Morropon", 
                "Salitral", "San Juan de Bigote", "Santa Catalina de Mossa", "Santo Domingo", 
                "Yamango"
            ],
            Paita: [
                "Paita", "Amotape", "Arenal", "Colán", "La Huaca", "Tamarindo", "Vichayal"
            ],
            Sullana: [
                "Sullana", "Bellavista", "Ignacio Escudero", "Lancones", 
                "Marcavelica", "Miguel Checa", "Querecotillo", "Salitral"
            ],
            Talara: [
                "Pariñas", "El Alto", "La Brea", "Lobitos", "Los Órganos", "Máncora"
            ],
            Sechura: [
                "Sechura", "Bellavista de la Unión", "Bernal", "Cristo Nos Valga", 
                "Vice", "Rinconada Llicuar"
            ]
        },

        "La Libertad": {
            Trujillo: [
                "Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", 
                "La Esperanza", "Laredo", "Moche", "Poroto", "Salaverry", 
                "Simbal", "Víctor Larco Herrera"
            ],
            Ascope: [
                "Ascope", "Casa Grande", "Chicama", "Chocope", "Magdalena de Cao", 
                "Paiján", "Razuri", "Santiago de Cao"
            ],
            Bolívar: [
                "Bolívar", "Bambamarca", "Condormarca", "Longotea", 
                "Uchumarca", "Ucuncha"
            ],
            Chepén: [
                "Chepén", "Pacanga", "Pueblo Nuevo"
            ],
            "Gran Chimú": [
                "Cascas", "Lucma", "Marmot", "Sayapullo"
            ],
            Julcán: [
                "Julcán", "Calamarca", "Carabamba", "Huaso"
            ],
            Otuzco: [
                "Otuzco", "Agallpampa", "Charat", "Huaranchal", 
                "La Cuesta", "Mache", "Paranday", "Salpo", "Sinsicap", "Usquil"
            ],
            Pacasmayo: [
                "San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San José"
            ],
            Pataz: [
                "Tayabamba", "Buldibuyo", "Chillia", "Huancaspata", 
                "Huayo", "Ongón", "Parcoy", "Pataz", "Pías", 
                "Santiago de Challas", "Taurija", "Urpay"
            ],
            "Sánchez Carrión": [
                "Huamachuco", "Chugay", "Cochorco", "Curgos", 
                "Marcabal", "Sanagorán", "Sarin", "Sartimbamba"
            ],
            "Santiago De Chuco": [
                "Santiago de Chuco", "Angasmarca", "Cachicadán", "Mollebamba", 
                "Mollepata", "Quiruvilca", "Santa Cruz de Chuca", "Sitabamba"
            ],
            Virú: [
                "Virú", "Chao", "Guadalupito"
            ]
        },

        Arequipa: {
            Arequipa: [
                "Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", 
                "Chiguata", "Jacobo Hunter", "La Joya", "Mariano Melgar", 
                "Miraflores", "Mollebaya", "Paucarpata", "Pocsi", 
                "Polobaya", "Quequeña", "Sabandía", "Sachaca", 
                "San Juan de Siguas", "San Juan de Tarucani", "Santa Isabel de Siguas", 
                "Santa Rita de Siguas", "Socabaya", "Tiabaya", "Uchumayo", 
                "Vítor", "Yanahuara", "Yarabamba", "Yura"
            ],
            Camaná: [
                "Camaná", "José María Quimper", "Mariano Nicolás Valcárcel", 
                "Mariscal Cáceres", "Nicolás de Piérola", "Ocoña", "Quilca", "Samuel Pastor"
            ],
            Caravelí: [
                "Caravelí", "Acarí", "Atico", "Atiquipa", "Bella Unión", 
                "Cahuacho", "Chala", "Chaparra", "Huanuhuanu", 
                "Jaqui", "Lomas", "Quicacha", "Yauca"
            ],
            Castilla: [
                "Aplao", "Andagua", "Ayo", "Chachas", "Chilcaymarca", 
                "Choco", "Huancarqui", "Machaguay", "Orcopampa", 
                "Pampacolca", "Tipan", "Uñón", "Uraca", "Viraco"
            ],
            Caylloma: [
                "Chivay", "Achoma", "Cabanaconde", "Callalli", "Caylloma", 
                "Coporaque", "Huambo", "Huanca", "Ichupampa", "Lari", 
                "Lluta", "Maca", "Madrigal", "San Antonio de Chuca", 
                "Sibayo", "Tapay", "Tisco", "Tuti", "Yanque"
            ],
            Condesuyos: [
                "Chuquibamba", "Andaray", "Cayarani", "Chichas", "Iray", 
                "Río Grande", "Salamanca", "Yanaquihua"
            ],
            Islay: [
                "Mollendo", "Cocachacra", "Dean Valdivia", "Islay", 
                "Mejía", "Punta de Bombón"
            ],
            LaUnión: [
                "Cotahuasi", "Alca", "Charcana", "Huaynacotas", "Pampamarca", 
                "Puyca", "Quechualla", "Sayla", "Tauria", "Tomepampa", "Toro"
            ]
        },

        Cajamarca: {
            Cajamarca: [
                "Cajamarca", "Asunción", "Chetilla", "Cospán", "Encañada", 
                "Jesús", "Llacanora", "Los Baños del Inca", "Magdalena", 
                "Matara", "Namora", "San Juan"
            ],
            Cajabamba: [
                "Cajabamba", "Cachachi", "Condebamba", "Sitacocha"
            ],
            Celendín: [
                "Celendín", "Chumuch", "Cortegana", "Huasmin", "Jorge Chávez", 
                "José Gálvez", "Miguel Iglesias", "Oxamarca", "Sorochuco", 
                "Sucre", "Utco", "La Libertad de Pallán"
            ],
            Chota: [
                "Chota", "Anguía", "Chadin", "Chalamarca", "Chiguirip", 
                "Chimban", "Choropampa", "Cochabamba", "Conchan", "Huambos", 
                "Lajas", "Llama", "Miracosta", "Paccha", "Pion", 
                "Querocoto", "San Juan de Licupis", "Tacabamba", "Tocmoche"
            ],
            Contumazá: [
                "Contumazá", "Chilete", "Cupisnique", "Guzmango", "San Benito", 
                "Santa Cruz de Toledo", "Tantarica", "Yonán"
            ],
            Cutervo: [
                "Cutervo", "Callayuc", "Choros", "Cujillo", "La Ramada", 
                "Pimpingos", "Querocotillo", "San Andrés de Cutervo", 
                "San Juan de Cutervo", "San Luis de Lucma", "Santa Cruz", 
                "Santo Domingo de la Capilla", "Santo Tomás", "Socota", 
                "Toribio Casanova"
            ],
            Hualgayoc: [
                "Bambamarca", "Chugur", "Hualgayoc"
            ],
            Jaén: [
                "Jaén", "Bellavista", "Chontali", "Colasay", "Huabal", 
                "Las Pirias", "Pomahuaca", "Pucará", "Sallique", 
                "San Felipe", "San José del Alto", "Santa Rosa"
            ],
            "San Ignacio": [
                "San Ignacio", "Chirinos", "Huarango", "La Coipa", 
                "Namballe", "San José de Lourdes", "Tabaconas"
            ],
            "San Marcos": [
                "San Marcos", "Chancay", "Eduardo Villanueva", "Gregorio Pita", 
                "Ichocán", "José Manuel Quiroz", "José Sabogal"
            ],
            "San Miguel": [
                "San Miguel", "Bolívar", "Calquis", "Catilluc", "El Prado", 
                "La Florida", "Llapa", "Nanchoc", "Niepos", 
                "San Gregorio", "San Silvestre de Cochan", "Tongod", "Unión Agua Blanca"
            ],
            "San Pablo": [
                "San Pablo", "San Bernardino", "San Luis", "Tumbaden"
            ],
            "Santa Cruz": [
                "Santa Cruz", "Andabamba", "Catache", "Chancaybaños", 
                "La Esperanza", "Ninabamba", "Pulan", "Saucepampa", 
                "Sexi", "Uticyacu", "Yauyucan"
            ]
        },

        Cusco: {
            Cusco: [
                "Cusco", "Ccorca", "Poroy", "San Jerónimo", 
                "San Sebastián", "Santiago", "Saylla", "Wanchaq"
            ],
            Acomayo: [
                "Acomayo", "Acopia", "Acos", "Mosoc Llacta", 
                "Pomacanchi", "Rondocan", "Sangarará"
            ],
            Anta: [
                "Anta", "Ancahuasi", "Cachimayo", "Chinchaypujio", 
                "Huarocondo", "Limatambo", "Mollepata", "Pucyura", 
                "Zurite"
            ],
            Calca: [
                "Calca", "Coya", "Lamay", "Lares", 
                "Pisac", "San Salvador", "Taray", "Yanatile"
            ],
            Canas: [
                "Yanaoca", "Checca", "Kunturkanki", "Langui", 
                "Layo", "Pampamarca", "Quehue", "Tupac Amaru"
            ],
            Canchis: [
                "Sicuani", "Checacupe", "Combapata", "Marangani", 
                "Pitumarca", "San Pablo", "San Pedro", "Tinta"
            ],
            Chumbivilcas: [
                "Santo Tomás", "Capacmarca", "Chamaca", "Colquemarca", 
                "Livitaca", "Llusco", "Quiñota", "Velille"
            ],
            Espinar: [
                "Espinar", "Condoroma", "Coporaque", "Ocoruro", 
                "Pallpata", "Pichigua", "Suykutambo", "Alto Pichigua"
            ],
            LaConvención: [
                "Quillabamba", "Echarate", "Huayopata", "Inkawasi", 
                "Kimbiri", "Maranura", "Megantoni", "Ocobamba", 
                "Pichari", "Santa Ana", "Santa Teresa", "Vilcabamba", 
                "Villa Virgen", "Villa Kintiarina"
            ],
            Paruro: [
                "Paruro", "Accha", "Ccapi", "Colcha", 
                "Huanoquite", "Omacha", "Paccaritambo", "Pillpinto", 
                "Yaurisque"
            ],
            Paucartambo: [
                "Paucartambo", "Caicay", "Challabamba", "Colquepata", 
                "Huancarani", "Kosñipata"
            ],
            Quispicanchi: [
                "Urcos", "Andahuaylillas", "Camanti", "Ccarhuayo", 
                "Ccatca", "Cusipata", "Huaro", "Lucre", 
                "Marcapata", "Ocongate", "Oropesa", "Quiquijana"
            ],
            Urubamba: [
                "Urubamba", "Chinchero", "Huayllabamba", "Machupicchu", 
                "Maras", "Ollantaytambo", "Yucay"
            ]
        },

        Junín: {
            Huancayo: [
                "Huancayo", "Carhuacallanga", "Chacapampa", "Chicche", 
                "Chilca", "Chongos Alto", "Chupuro", "Colca", 
                "Cullhuas", "El Tambo", "Huacrapuquio", "Hualhuas", 
                "Huancán", "Huasicancha", "Huayucachi", "Ingenio", 
                "Pariahuanca", "Pilcomayo", "Pucará", "Quichuay", 
                "Quilcas", "San Agustín", "San Jerónimo de Tunán", 
                "Saño", "Sapallanga", "Sicaya", "Viques"
            ],
            Concepción: [
                "Concepción", "Aco", "Andamarca", "Chambara", 
                "Cochas", "Comas", "Heroínas Toledo", "Manzanares", 
                "Mariscal Castilla", "Matahuasi", "Mito", "Nueve de Julio", 
                "Orcotuna", "San José de Quero", "Santa Rosa de Ocopa"
            ],
            Chanchamayo: [
                "Chanchamayo", "San Luis de Shuaro", "Perené", 
                "Pichanaqui", "San Ramón", "Vitoc"
            ],
            Jauja: [
                "Jauja", "Acolla", "Apata", "Ataura", "Canchayllo", 
                "Curicaca", "El Mantaro", "Huamalí", "Huaripampa", 
                "Huertas", "Janjaillo", "Julcán", "Leonor Ordóñez", 
                "Llocllapampa", "Marco", "Masma", "Masma Chicche", 
                "Molinos", "Monobamba", "Muqui", "Muquiyauyo", 
                "Paca", "Paccha", "Pancán", "Parco", "Pomacancha", 
                "Ricrán", "San Lorenzo", "San Pedro de Chunan", 
                "Sausa", "Sincos", "Tunan Marca", "Yauli", "Yauyos"
            ],
            Junín: [
                "Junín", "Carhuamayo", "Ondores", "Ulcumayo"
            ],
            Satipo: [
                "Satipo", "Coviriali", "Llaylla", "Mazamari", 
                "Pampa Hermosa", "Pangoa", "Río Negro", "Río Tambo"
            ],
            Tarma: [
                "Tarma", "Acobamba", "Huaricolca", "Huasahuasi", 
                "La Unión", "Palca", "Palcamayo", "San Pedro de Cajas", 
                "Tapo"
            ],
            Yauli: [
                "La Oroya", "Chacapalpa", "Huay-Huay", "Marcapomacocha", 
                "Morococha", "Paccha", "Santa Bárbara de Carhuacayán", 
                "Santa Rosa de Sacco", "Suitucancha", "Yauli"
            ],
            Chupaca: [
                "Chupaca", "Ahuac", "Chongos Bajo", "Huachac", 
                "Huamancaca Chico", "San Juan de Yscos", "San Juan de Jarpa", 
                "Tres de Diciembre", "Yanacancha"
            ]
        },

        Lambayeque: {
            Chiclayo: [
                "Chiclayo", "Cayaltí", "Chongoyape", "Eten", "Eten Puerto", 
                "José Leonardo Ortiz", "La Victoria", "Lagunas", "Monsefú", 
                "Nueva Arica", "Oyotún", "Picsi", "Pimentel", 
                "Reque", "Santa Rosa", "Saña", "Tumán"
            ],
            Ferreñafe: [
                "Ferreñafe", "Cañaris", "Incahuasi", "Manuel Antonio Mesones Muro", 
                "Pitipo", "Pueblo Nuevo"
            ],
            Lambayeque: [
                "Lambayeque", "Chochope", "Illimo", "Jayanca", 
                "Mochumí", "Mórrope", "Motupe", "Olmos", 
                "Pacora", "Salas", "San José", "Túcume"
            ]
        },

        Puno: {
            Azángaro: [
                "Azángaro", "Achaya", "Arapa", "Asillo", "Caminaca", "Chupa", "José Domingo Choquehuanca",
                "Muñani", "Potoni", "Samán", "San Antón", "San José", "San Juan de Salinas", "Santiago de Pupuja",
                "Tirapata"
            ],
            Carabaya: [
                "Macusani", "Ajoyani", "Ayapata", "Coasa", "Corani", "Crucero", "Ituata", 
                "Ollachea", "San Gabán", "Usicayos"
            ],
            Chucuito: [
                "Juli", "Desaguadero", "Huacullani", "Kelluyo", "Pisacoma", "Pomata", "Zepita"
            ],
            "El Collao": [
                "Ilave", "Capazo", "Pilcuyo", "Santa Rosa", "Conduriri"
            ],
            Huancané: [
                "Huancané", "Cojata", "Huatasani", "Inchupalla", "Pusi", "Rosaspata", 
                "Taraco", "Vilque Chico"
            ],
            Lampa: [
                "Lampa", "Cabanilla", "Calapuja", "Nicasio", "Ocuviri", "Palca", 
                "Paratía", "Pucará", "Santa Lucía", "Vilavila"
            ],
            Melgar: [
                "Ayaviri", "Antauta", "Cupi", "Llalli", "Macari", "Nuñoa", "Orurillo", "Santa Rosa", "Umachiri"
            ],
            Moho: [
                "Moho", "Conima", "Huayrapata", "Tilali"
            ],
            Puno: [
                "Puno", "Acora", "Amantani", "Atuncolla", "Capachica", "Chucuito", 
                "Coata", "Huata", "Mañazo", "Paucarcolla", "Pichacani", "Platería", 
                "San Antonio", "Tiquillaca", "Vilque"
            ],
            "San Antonio de Putina": [
                "Putina", "Ananea", "Pedro Vilca Apaza", "Quilcapuncu", "Sina"
            ],
            "San Román": [
                "Juliaca", "Cabana", "Cabanillas", "Caracoto", "San Miguel"
            ],
            Sandia: [
                "Sandia", "Cuyocuyo", "Limbani", "Patambuco", "Phara", "Quiaca", 
                "San Juan del Oro", "Yanahuaya", "Alto Inambari", "San Pedro de Putina Punco"
            ],
            Yunguyo: [
                "Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", "Tinicachi", "Unicachi"
            ]
    },
    Áncash: {
        Huaraz: [
            "Huaraz", "Cochabamba", "Colcabamba", "Huanchay", "Independencia", 
            "Jangas", "La Libertad", "Olleros", "Pampas Grande", 
            "Pariacoto", "Pira", "Tarica"
        ],
        Aija: [
            "Aija", "Coris", "Huacllán", "La Merced", "Succha"
        ],
        AntonioRaymondi: [
            "Llamellín", "Aczo", "Chaccho", "Chingas", "Mirgas", "San Juan de Rontoy"
        ],
        Asunción: [
            "Chacas", "Acochaca"
        ],
        Bolognesi: [
            "Chiquián", "Abelardo Pardo Lezameta", "Antonio Raymondi", 
            "Aquia", "Cajacay", "Canis", "Colquioc", 
            "Huallanca", "Huasta", "Huayllacayán", "La Primavera", 
            "Mangas", "Pacllón", "San Miguel de Corpanqui", 
            "Ticllos"
        ],
        Carhuaz: [
            "Carhuaz", "Acopampa", "Amashca", "Anta", "Ataquero", 
            "Marcara", "Pariahuanca", "San Miguel de Aco", 
            "Shilla", "Tinco", "Yungar"
        ],
        CarlosFermínFitzcarrald: [
            "San Luis", "San Nicolás", "Yauya"
        ],
        Casma: [
            "Casma", "Buena Vista Alta", "Comandante Noel", "Yaután"
        ],
        Corongo: [
            "Corongo", "Aco", "Bambas", "Cusca", "La Pampa", 
            "Yanac", "Yupan"
        ],
        Huari: [
            "Huari", "Anra", "Cajay", "Chavín de Huantar", "Huacachi", 
            "Huacchis", "Huachis", "Huantar", "Masin", 
            "Paucas", "Ponto", "Rahuapampa", "Rapayán", 
            "San Marcos", "San Pedro de Chaná", "Uco"
        ],
        Huarmey: [
            "Huarmey", "Cochapeti", "Culebras", "Huayan", "Malvas"
        ],
        MariscalLuzuriaga: [
            "Piscobamba", "Casca", "Eleazar Guzmán Barrón", 
            "Fidel Olivas Escudero", "Llama", "Llumpa", 
            "Lucma", "Musga"
        ],
        Ocros: [
            "Ocros", "Acas", "Cajamarquilla", "Carhuapampa", 
            "Cochas", "Congas", "Llipa", "San Cristóbal de Rajan", 
            "San Pedro", "Santiago de Chilcas"
        ],
        Pallasca: [
            "Cabana", "Bolognesi", "Conchucos", "Huacaschuque", 
            "Huandoval", "Lacabamba", "Llapo", "Pallasca", 
            "Pampas", "Santa Rosa", "Tauca"
        ],
        Pomabamba: [
            "Pomabamba", "Huayllán", "Parobamba", "Quinuabamba"
        ],
        Recuay: [
            "Recuay", "Catac", "Cotaparaco", "Huayllapampa", 
            "Llacllín", "Marca", "Pampas Chico", "Pararín", 
            "Tapacocha", "Ticapampa"
        ],
        Santa: [
            "Chimbote", "Cáceres del Perú", "Coishco", "Macate", 
            "Moro", "Nepeña", "Samanco", "Santa"
        ],
        Sihuas: [
            "Sihuas", "Acobamba", "Alfonso Ugarte", "Cashapampa", 
            "Chingalpo", "Huayllabamba", "Quiches", "Ragash", 
            "San Juan", "Sicsibamba"
        ],
        Yungay: [
            "Yungay", "Cascapara", "Mancos", "Matacoto", 
            "Quillo", "Ranrahirca", "Shupluy", "Yanama"
        ]
    },

    Loreto: {
        Maynas: [
            "Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", "Las Amazonas", 
            "Mazan", "Napo", "Punchana", "Putumayo", "San Juan Bautista", "Torres Causana", 
            "Belén"
        ],
        MariscalRamónCastilla: [
            "Ramón Castilla", "Pebas", "San Pablo", "Yavarí"
        ],
        Requena: [
            "Requena", "Alto Tapiche", "Capelo", "Emilio San Martín", 
            "Maquía", "Puinahua", "Saquena", "Soplin", 
            "Tapiche", "Jenaro Herrera", "Yaquerana"
        ],
        Ucayali: [
            "Contamana", "Inahuaya", "Padre Márquez", "Pampa Hermosa", 
            "Sarayacu", "Alfredo Vargas Guerra"
        ],
        DatemDelMarañón: [
            "Barranca", "Cahuapanas", "Manseriche", "Morona", 
            "Pastaza", "Andoas"
        ],
        AltoAmazonas: [
            "Yurimaguas", "Balsapuerto", "Jeberos", "Lagunas", 
            "Santa Cruz", "Teniente César López Rojas"
        ],
        Putumayo: [
            "Teniente Manuel Clavero", "Yaguas", "Rosa Panduro", "El Estrecho"
        ]
    },

    Ica: {
        Ica: [
            "Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", 
            "Pachacutec", "Parcona", "Pueblo Nuevo", "Salas", 
            "San José de Los Molinos", "San Juan Bautista", 
            "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario"
        ],
        Chincha: [
            "Chincha Alta", "Alto Larán", "Chavín", "Chincha Baja", 
            "El Carmen", "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", 
            "San Pedro de Huacarpana", "Sunampe", "Tambo de Mora"
        ],
        Nasca: [
            "Nasca", "Changuillo", "El Ingenio", "Marcona", 
            "Vista Alegre"
        ],
        Palpa: [
            "Palpa", "Llipata", "Río Grande", "Santa Cruz", 
            "Tibillo"
        ],
        Pisco: [
            "Pisco", "Huancano", "Humay", "Independencia", 
            "Paracas", "San Andrés", "San Clemente", "Túpac Amaru Inca"
        ]
    },

    "San Martín": {
        Moyobamba: [
            "Moyobamba", "Calzada", "Habana", "Jepelacio", 
            "Soritor", "Yantalo"
        ],
        Bellavista: [
            "Bellavista", "Alto Biavo", "Bajo Biavo", "Huallaga", 
            "San Pablo", "San Rafael"
        ],
        ElDorado: [
            "San José de Sisa", "Agua Blanca", "San Martín", 
            "Santa Rosa", "Shatoja"
        ],
        Huallaga: [
            "Saposoa", "Alto Saposoa", "El Eslabón", "Piscoyacu", 
            "Sacanche", "Tingo de Saposoa"
        ],
        Lamas: [
            "Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi", 
            "Cuñumbuqui", "Pinto Recodo", "Rumisapa", "San Roque de Cumbaza", 
            "Shanao", "Tabalosos", "Zapatero"
        ],
        "Mariscal Cáceres": [
            "Juanjuí", "Campanilla", "Huicungo", "Pachiza", 
            "Pajarillo"
        ],
        Picota: [
            "Picota", "Buenos Aires", "Caspisapa", "Pilluana", 
            "Pucacaca", "San Cristóbal", "San Hilarión", 
            "Shamboyacu", "Tingo de Ponasa", "Tres Unidos"
        ],
        Rioja: [
            "Rioja", "Awajún", "Elías Soplin Vargas", "Nueva Cajamarca", 
            "Pardo Miguel", "Posic", "San Fernando", "Yorongos", 
            "Yuracyacu"
        ],
        "San Martín": [
            "Tarapoto", "Alberto Leveau", "Cacatachi", "Chazuta", 
            "Chipurana", "El Porvenir", "Huimbayoc", "Juan Guerra", 
            "La Banda de Shilcayo", "Morales", "Papaplaya", 
            "San Antonio", "Sauce", "Shapaja"
        ],
        Tocache: [
            "Tocache", "Nuevo Progreso", "Pólvora", "Shunte", 
            "Uchiza"
        ]
    },

    Huánuco: {
        Huánuco: [
            "Huánuco", "Amarilis", "Chinchao", "Churubamba", "Margos", 
            "Pillco Marca", "Quisqui (Kichki)", "San Francisco de Cayrán", 
            "San Pedro de Chaulán", "Santa María del Valle", "Yarumayo"
        ],
        Ambo: [
            "Ambo", "Cayna", "Colpas", "Conchamarca", 
            "Huacar", "San Francisco", "San Rafael", "Tomay Kichwa"
        ],
        DosDeMayo: [
            "La Unión", "Chuquis", "Marías", "Pachas", 
            "Quivilla", "Ripan", "Shunqui", "Sillapata", 
            "Yanas"
        ],
        Huacaybamba: [
            "Huacaybamba", "Canchabamba", "Cochabamba", "Pinra"
        ],
        Huamalíes: [
            "Llata", "Arancay", "Chavín de Pariarca", "Jacas Grande", 
            "Jircan", "Miraflores", "Monzón", "Punchao", 
            "Puños", "Singa", "Tantamayo"
        ],
        LeoncioPrado: [
            "Tingo María", "Castillo Grande", "Daniel Alomía Robles", 
            "Hermilio Valdizán", "José Crespo y Castillo", "Luyando", 
            "Mariano Dámaso Beraún", "Rupa-Rupa"
        ],
        Marañón: [
            "Huacrachuco", "Cholon", "San Buenaventura", "La Morada", 
            "Santa Rosa de Alto Yanajanca"
        ],
        Pachitea: [
            "Panao", "Chaglla", "Molino", "Umari"
        ],
        PuertoInca: [
            "Puerto Inca", "Codo del Pozuzo", "Honoria", 
            "Tournavista", "Yuyapichis"
        ],
        Lauricocha: [
            "Jesús", "Baños", "Jivia", "Queropalca", 
            "Rondos", "San Francisco de Asís", "San Miguel de Cauri"
        ],
        Yarowilca: [
            "Chavinillo", "Cahuac", "Chacabamba", "Aparicio Pomares (Chupán)", 
            "Jacas Chico", "Obas", "Pampamarca"
        ]
    },

    Ayacucho: {
        Huamanga: [
            "Ayacucho", "Acocro", "Acos Vinchos", "Carmen Alto", 
            "Chiara", "Jesús Nazareno", "Ocros", "Pacaycasa", 
            "Quinua", "San José de Ticllas", "San Juan Bautista", 
            "Santiago de Pischa", "Socos", "Tambillo", "Vinchos"
        ],
        Cangallo: [
            "Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", 
            "Paras", "Totos"
        ],
        HuancaSancos: [
            "Sancos", "Carapo", "Sacsamarca", "Santiago de Lucanamarca"
        ],
        Huanta: [
            "Huanta", "Ayahuanco", "Huamanguilla", "Iguain", 
            "Luricocha", "Santillana", "Sivia", "Canayre", 
            "Uchuraccay", "Pucacolpa", "Chaca"
        ],
        LaMar: [
            "San Miguel", "Anco", "Ayna", "Chilcas", 
            "Chungui", "Luis Carranza", "Santa Rosa", "Tambo", 
            "Samugari", "Anchihuay", "Oronccoy"
        ],
        Lucanas: [
            "Puquio", "Aucara", "Cabana", "Carmen Salcedo", 
            "Chaviña", "Chipao", "Huac-Huas", "Laramate", 
            "Leoncio Prado", "Llauta", "Lucanas", "Ocaña", 
            "Otoca", "Saisa", "San Cristóbal", "San Juan", 
            "San Pedro", "San Pedro de Palco", "Sancos", "Santa Ana de Huaycahuacho", 
            "Santa Lucía"
        ],
        Parinacochas: [
            "Coracora", "Chumpi", "Coronel Castañeda", "Pacapausa", 
            "Pullo", "Puyusca", "San Francisco de Ravacayco", "Upahuacho"
        ],
        PáucarDelSaraSara: [
            "Pausa", "Colta", "Corculla", "Lampa", 
            "Marcabamba", "Oyolo", "Pararca", "San Javier de Alpabamba", 
            "San José de Ushua", "Sara Sara"
        ],
        Sucre: [
            "Querobamba", "Belén", "Chalcos", "Chilcayoc", 
            "Huacaña", "Morcolla", "Paico", "San Pedro de Larcay", 
            "San Salvador de Quije", "Santiago de Paucaray", "Soras"
        ],
        VíctorFajardo: [
            "Huancapi", "Alcamenca", "Apongo", "Asquipata", 
            "Canaria", "Cayara", "Colca", "Huamanquiquia", 
            "Huancaraylla", "Huaya", "Sarhua", "Vilcanchos"
        ],
        VilcasHuamán: [
            "Vilcas Huamán", "Accomarca", "Carhuanca", "Concepción", 
            "Huambalpa", "Independencia", "Saurama", "Vischongo"
        ]
    },

    Ucayali: {
        CoronelPortillo: [
            "Pucallpa", "Callería", "Campoverde", "Iparía", 
            "Manantay", "Masisea", "Yarinacocha", "Nueva Requena"
        ],
        Atalaya: [
            "Atalaya", "Raymondi", "Sepahua", "Tahuanía", 
            "Yurúa"
        ],
        PadreAbad: [
            "Aguaytía", "Alexander Von Humboldt", "Curimaná", "Irazola", 
            "Neshuya"
        ],
        Purús: [
            "Purús"
        ]
    },

    Apurímac: {
        Abancay: [
            "Abancay", "Chacoche", "Circa", "Curahuasi", 
            "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", 
            "Tamburco"
        ],
        Andahuaylas: [
            "Andahuaylas", "Andarapa", "Chiara", "Huancarama", 
            "Huancaray", "Huayana", "Kishuara", "Pacobamba", 
            "Pacucha", "Pampachiri", "Pomacocha", "San Antonio de Cachi", 
            "San Jerónimo", "San Miguel de Chaccrampa", "Santa María de Chicmo", 
            "Talavera", "Tumay Huaraca", "Turpo"
        ],
        Antabamba: [
            "Antabamba", "El Oro", "Huaquirca", "Juan Espinoza Medrano", 
            "Oropesa", "Pachaconas", "Sabaino"
        ],
        Aymaraes: [
            "Chalhuanca", "Capaya", "Caraybamba", "Chalhuanca", 
            "Chapimarca", "Colcabamba", "Cotaruse", "Ihuayllo", 
            "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", 
            "San Juan de Chacña", "Sañayca", "Soraya", "Tapairihua", 
            "Tintay", "Toraya", "Yanaca"
        ],
        Cotabambas: [
            "Tambobamba", "Cotabambas", "Coyllurqui", "Challhuahuacho", 
            "Haquira", "Mara"
        ],
        Chincheros: [
            "Chincheros", "Anco-Huallo", "Cocharcas", "Huaccana", 
            "Ocobamba", "Ongoy", "Ranracancha", "Uranmarca"
        ],
        Grau: [
            "Chuquibambilla", "Curpahuasi", "Gamarra", "Huayllati", 
            "Mamara", "Micaela Bastidas", "Pataypampa", "Progreso", 
            "San Antonio", "Santa Rosa", "Turpay", "Vilcabamba", 
            "Virundo", "Curasco"
        ]
    },

    Amazonas: {
        Chachapoyas: [
            "Chachapoyas", "Asunción", "Balsas", "Cheto", 
            "Chiliquín", "Chuquibamba", "Granada", "Huancas", 
            "La Jalca", "Leimebamba", "Levanto", "Magdalena", 
            "Mariscal Castilla", "Molinopampa", "Montevideo", 
            "Olleros", "Quinjalca", "San Francisco de Daguas", 
            "San Isidro de Maino", "Soloco", "Sonche"
        ],
        Bagua: [
            "Bagua", "Aramango", "Copallín", "El Parco", 
            "Imaza", "La Peca"
        ],
        Bongará: [
            "Jumbilla", "Chisquilla", "Churuja", "Corosha", 
            "Cuispes", "Florida", "Jazán", "Recta", 
            "San Carlos", "Shipasbamba", "Valera", "Yambrasbamba"
        ],
        Condorcanqui: [
            "Santa María de Nieva", "El Cenepa", "Río Santiago"
        ],
        Luya: [
            "Lamud", "Camporredondo", "Cocabamba", "Colcamar", 
            "Conila", "Inguilpata", "Longuita", "Lonya Chico", 
            "Luya", "Luya Viejo", "María", "Ocallí", 
            "Ocumal", "Pisuquia", "Providencia", "San Cristóbal", 
            "San Francisco del Yeso", "San Jerónimo", "San Juan de Lopecancha", 
            "Santa Catalina", "Santo Tomás", "Tingo", "Trita"
        ],
        RodríguezDeMendoza: [
            "San Nicolás", "Chirimoto", "Cochamal", "Huambo", 
            "Limabamba", "Longar", "Mariscal Benavides", 
            "Milpuc", "Omia", "Santa Rosa", "Totora", "Vista Alegre"
        ],
        Utcubamba: [
            "Bagua Grande", "Cajaruro", "Cumba", "El Milagro", 
            "Jamalca", "Lonya Grande", "Yamón"
        ]
    },

    Tacna: {
        Tacna: [
            "Tacna", "Alto de la Alianza", "Ciudad Nueva", "Inclán", 
            "Pachía", "Palca", "Sama", "Coronel Gregorio Albarracín Lanchipa"
        ],
        Candarave: [
            "Candarave", "Cairani", "Camilaca", "Curibaya", 
            "Huanuara", "Quilahuani"
        ],
        JorgeBasadre: [
            "Locumba", "Ilabaya", "Ite"
        ],
        Tarata: [
            "Tarata", "Héroes Albarracín", "Estique", "Estique-Pampa", 
            "Sitajara", "Susapaya", "Tarucachi", "Ticaco"
        ]
    },

    Huancavelica: {
        Huancavelica: [
            "Huancavelica", "Acobambilla", "Acoria", "Conayca", 
            "Cuenca", "Huachocolpa", "Huayllahuara", "Izcuchaca", 
            "Laria", "Manta", "Mariscal Cáceres", "Moya", 
            "Nuevo Occoro", "Palca", "Pilchaca", "Vilca", 
            "Yauli", "Ascensión"
        ],
        Acobamba: [
            "Acobamba", "Andabamba", "Anta", "Caja", 
            "Marcas", "Paucara", "Pomacocha", "Rosario"
        ],
        Angaraes: [
            "Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", 
            "Chincho", "Congalla", "Huanca-Huanca", "Huayllay Grande", 
            "Julcamarca", "San Antonio de Antaparco", "Santo Tomas de Pata", 
            "Secclla"
        ],
        Castrovirreyna: [
            "Castrovirreyna", "Arma", "Aurahua", "Capillas", 
            "Chupamarca", "Cocas", "Huachos", "Huamatambo", 
            "Mollepampa", "San Juan", "Santa Ana", "Tantara", 
            "Ticrapo"
        ],
        Churcampa: [
            "Churcampa", "Anco", "Chinchihuasi", "El Carmen", 
            "La Merced", "Locroja", "Paucarbamba", "San Miguel de Mayocc", 
            "San Pedro de Coris", "Pachamarca", "Cosme"
        ],
        Huaytará: [
            "Huaytará", "Ayavi", "Córdova", "Huayacundo Arma", 
            "Laramarca", "Ocoyo", "Pilpichaca", "Querco", 
            "Quito-Arma", "San Antonio de Cusicancha", "San Francisco de Sangayaico", 
            "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", 
            "Santo Domingo de Capillas", "Tambo"
        ],
        Tayacaja: [
            "Pampas", "Acostambo", "Acraquia", "Ahuaycha", 
            "Colcabamba", "Daniel Hernández", "Huachocolpa", "Huaribamba", 
            "Ñahuimpuquio", "Pazos", "Quishuar", "Salcabamba", 
            "Salcahuasi", "San Marcos de Rocchac", "Surcubamba", 
            "Tintay Puncu"
        ]
    },

    Pasco: {
        Pasco: [
            "Cerro de Pasco", "Chaupimarca", "Huachón", "Huariaca", 
            "Huayllay", "Ninacaca", "Pallanchacra", "Paucartambo", 
            "San Francisco de Asís de Yarusyacán", "Simón Bolívar", 
            "Ticlacayán", "Tinyahuarco", "Vicco", "Yanacancha"
        ],
        DanielAlcidesCarrión: [
            "Yanahuanca", "Chacayan", "Goyllarisquizga", "Paucar", 
            "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", 
            "Vilcabamba"
        ],
        Oxapampa: [
            "Oxapampa", "Chontabamba", "Huancabamba", "Palcazú", 
            "Pozuzo", "Puerto Bermúdez", "Villa Rica", "Constitución"
        ]
    },

    Tumbes: {
        Tumbes: [
            "Tumbes", "Corrales", "La Cruz", "Pampas de Hospital", 
            "San Jacinto", "San Juan de la Virgen"
        ],
        ContralmiranteVillar: [
            "Zorritos", "Casitas", "Canoas de Punta Sal"
        ],
        Zarumilla: [
            "Zarumilla", "Aguas Verdes", "Matapalo", "Papayal"
        ]
    },

    Moquegua: {
        MariscalNieto: [
            "Moquegua", "Carumas", "Cuchumbaya", "Samegua", 
            "San Cristóbal", "Torata"
        ],
        GeneralSánchezCerro: [
            "Omate", "Chojata", "Coalaque", "Ichuña", 
            "La Capilla", "Lloque", "Matalaque", "Puquina", 
            "Quinistaquillas", "Ubinas", "Yunga"
        ],
        Ilo: [
            "Ilo", "El Algarrobal", "Pacocha"
        ]
    },

    "Madre De Dios": {
        Tambopata: [
            "Puerto Maldonado", "Inambari", "Las Piedras", "Laberinto"
        ],
        Manu: [
            "Manu", "Fitzcarrald", "Madre de Dios", "Huepetuhe"
        ],
        Tahuamanu: [
            "Iñapari", "Iberia", "Tahuamanu"
        ]
    }
       
};


const RenderLocationFields = ({ formData, handleChange }) => {
    return (
        <>
            <label htmlFor="departamento" className="block text-gray-700">
                Departamento:
            </label>
            <select
                name="departamento"
                value={formData.departamento || ""}
                onChange={(e) => {
                    handleChange({
                        target: {
                            name: "departamento",
                            value: e.target.value,
                        },
                    });
                    handleChange({ target: { name: "provincia", value: "" } });
                    handleChange({ target: { name: "distrito", value: "" } });
                }}
                className="w-full border p-2 mb-4 rounded"
                required
            >
                <option value="">Select Departamento</option>
                {Object.keys(departamentosProvinciasDistritos).map((dep) => (
                    <option key={dep} value={dep}>
                        {dep}
                    </option>
                ))}
            </select>

            <label htmlFor="provincia" className="block text-gray-700">
                Provincia:
            </label>
            <select
                name="provincia"
                value={formData.provincia || ""}
                onChange={(e) => {
                    handleChange({
                        target: {
                            name: "provincia",
                            value: e.target.value,
                        },
                    });
                    handleChange({ target: { name: "distrito", value: "" } });
                }}
                className="w-full border p-2 mb-4 rounded"
                disabled={!formData.departamento}
                required
            >
                <option value="">Select Provincia</option>
                {formData.departamento &&
                    Object.keys(departamentosProvinciasDistritos[formData.departamento] || {}).map(
                        (prov) => (
                            <option key={prov} value={prov}>
                                {prov}
                            </option>
                        )
                    )}
            </select>

            <label htmlFor="distrito" className="block text-gray-700">
                Distrito:
            </label>
            <select
                name="distrito"
                value={formData.distrito || ""}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded"
                disabled={!formData.provincia}
                required
            >
                <option value="">Select Distrito</option>
                {formData.provincia &&
                    (departamentosProvinciasDistritos[formData.departamento]?.[formData.provincia] || []).map(
                        (dist) => (
                            <option key={dist} value={dist}>
                                {dist}
                            </option>
                        )
                    )}
            </select>

            <label htmlFor="direccion" className="block text-gray-700">
                Dirección:
            </label>
            <textarea
                name="direccion"
                value={formData.direccion || ""}
                onChange={handleChange}
                maxLength="200"
                className="w-full border p-2 mb-4 rounded"
                placeholder="Ingrese su dirección (máximo 200 caracteres)"
                required
            ></textarea>
            <p className="text-sm text-gray-500">
                {formData.direccion ? formData.direccion.length : 0}/200 caracteres
            </p>

            <label htmlFor="googleLink" className="block text-gray-700">
                Localización:
            </label>
            <input
                type="url"
                name="googleLink"
                value={formData.googleLink || ""}
                onChange={handleChange}
                maxLength="350"
                className="w-full border p-2 mb-4 rounded"
                placeholder="Ingrese su link de localización (máximo 350 caracteres)"
            />
        </>
    );
};

export default RenderLocationFields;
