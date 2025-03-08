import React, { useEffect, useState } from "react";
const categoryFileMap = {
    
    // 🏠 Bienes Raíces y Alquiler
    "Inmobiliaria": "InmobiliariaFields",
    "Constructora": "ConstructoraFields",
    "Alquilo": "AlquiloFields",
    "Bienes Raíces": "BienesRaicesFields",
    "Garajes": "GarajesFields",
    "Local de Eventos": "LocalEventosFields",
    "Local Comercial": "LocalComercialFields",
    "Local Industrial": "LocalIndustrialFields",
    "Oficina": "OficinaFields",
    "Tienda": "TiendaFields",
    "Almacén": "AlmacenFields",
    "Restaurante": "RestauranteFields",

    // 🛍️ Compra y Venta
    "Compro": "ComproFields",
    "Venta": "VentaFields",
    "Remates": "RematesFields",
    "Ofertas": "OfertasFields",
    "Bodegas": "BodegasFields",
    "Minimarket": "MinimarketFields",
    "Mercados": "MercadosFields",

    // 👷‍♂️ Trabajo y Profesiones
    "Empleo": "EmpleoFields",
    "Servicios": "ServiciosFields",
    "Técnicos": "TecnicosFields",
    "Profesores": "ProfesoresFields",
    "Ingenieros": "IngenierosFields",
    "Electricista": "ElectricistaFields",
    "Plomero": "PlomeroFields",
    "Mecánico": "MecanicoFields",
    "Carpintero": "CarpinteroFields",
    "Pintor": "PintorFields",
    "Soldador": "SoldadorFields",
    "Taxista": "TaxistaFields",
    "Transportistas": "TransportistasFields",
    "Masajista": "MasajistaFields",
    "Abogados": "AbogadosFields",
    "Administradores": "AdministradoresFields",
    "Contador": "ContadorFields",
    "Economista": "EconomistaFields",
    "Periodista": "PeriodistaFields",
    "Psicoanalista": "PsicoanalistaFields",
    "Químico": "QuimicoFields",
    "Radiólogo": "RadiologoFields",
    "Técnico de sonido": "TecnicoSonidoFields",
    "Traductores": "TraductoresFields",
    "Desarrollador de Software": "DesarrolladorSoftwareFields",
    "Diseñador Gráfico": "DisenadorGraficoFields",
    "Analista de Datos": "AnalistaDatosFields",
    "Programador": "ProgramadorFields",

    // 🩺 Salud y Bienestar
    "Salud": "SaludFields",
    "Médico": "MedicoFields",
    "Enfermero": "EnfermeroFields",
    "Farmacólogo": "FarmacologoFields",
    "Paramédico": "ParamedicoFields",
    "Masajista": "MasajistaFields",
    "Fisioterapeuta": "FisioterapeutaFields",
    "Nutricionista": "NutricionistaFields",
    "Veterinaria": "VeterinariaFields",
    "Curanderos": "CuranderosFields",
    "Psicólogo": "PsicologoFields",
    "Psiquiatra": "PsiquiatraFields",
    "Terapeuta": "TerapeutaFields",
    "Entrenador Personal": "EntrenadorPersonalFields",
    "Cosmetólogo": "CosmetologoFields",
    "Estilista": "EstilistaFields",
    "Maquillador": "MaquilladorFields",
    "Peluquero": "PeluqueroFields",
    "Manicurista": "ManicuristaFields",
    "Podólogo": "PodologoFields",
    "Esteticista": "EsteticistaFields",

    // ⚽ Deporte y Entretenimiento
    "Deporte": "DeporteFields",
    "Cancha Deportiva": "CanchaDeportivaFields",
    "Instructor de Yoga": "InstructorYogaFields",
    "Entrenadores": "EntrenadoresFields",
    "Animadores": "AnimadoresFields",
    "Payasos": "PayasosFields",
    "Música": "MusicaFields",
    "Otros": "OtrosFields",

    // 🎨 Arte y Fotografía
    "Foto y Video": "FotoVideoFields",
    "Fotógrafo": "FotografoFields",
    "Escultor": "EscultorFields",
    "Artesano": "ArtesanoFields",
    "Artistas": "ArtistasFields",
    "Tejedoras": "TejedorasFields",
    "Diseñador de Moda": "DisenadorModaFields",
    "Bordados": "BordadosFields",

    // 🍽️ Comida y Gastronomía
    "Comida": "ComidaFields",
    "Carnicero": "CarniceroFields",
    "Cocinero": "CocineroFields",
    "Frutera": "FruteraFields",
    "Panadero": "PanaderoFields",
    "Repartidor de comida": "RepartidorComidaFields",
    "Barista": "BaristaFields",
    "Chef": "ChefFields",
    "Catering": "CateringFields",
    "Cafetería": "CafeteriaFields",
    "Pizzería": "PizzeriaFields",
    "Pollería": "PolleriaFields",
    "Chifa": "ChifaFields",
    "Comida Rápida": "ComidaRapidaFields",
    "Comida Saludable": "ComidaSaludableFields",
    "Comida Gourmet": "ComidaGourmetFields",
    "Comida Casera": "ComidaCaseraFields",
    "Comida Criolla": "ComidaCriollaFields",
    "Comida Internacional": "ComidaInternacionalFields",
    "Comida Vegetariana": "ComidaVegetarianaFields",
    "Comida Vegana": "ComidaVeganaFields",

    // 🚗 Movilidad y Transporte
    "Transporte": "TransporteFields",
    "Mudanzas": "MudanzasFields",
    "Maquinaria Pesada": "MaquinariaPesadaFields",
    "Transporte de carga": "TransporteCargaFields",
    "Chofer de camión": "ChoferCamionFields",
    "Expresos": "ExpresosFields",
    "Colectivos": "ColectivosFields",
    "Taxis": "TaxisFields",

    // 🌾 Agricultura y Ganadería
    "Agricultura": "AgriculturaFields",
    "Ganadería": "GanaderiaFields",
    "Acuicultura": "AcuiculturaFields",
    "Leñador": "LenadorFields",
    "Agricultor": "AgricultorFields",
    "Ganadero": "GanaderoFields",
    "Pescador": "PescadorFields",
    "Apicultor": "ApicultorFields",
    "Horticultor": "HorticultorFields",
    "Viverista": "ViveristaFields",
    "Floricultor": "FloricultorFields",
    "Fruticultor": "FruticultorFields",
    "Cafetalero": "CafetaleroFields",
    "Cacaotero": "CacaoteroFields",

    // 🎭 Eventos y Tradiciones
    "Eventos": "EventosFields",
    "Tradiciones": "TradicionesFields",
    "Maestro de Ceremonia": "MaestroCeremoniaFields",
    "Locutores": "LocutoresFields",
    "Organizador de Eventos": "OrganizadorEventosFields",
    "Decorador de Eventos": "DecoradorEventosFields",
    "Animador de Eventos": "AnimadorEventosFields",
    "Alquiler de Equipos de Sonido": "AlquilerSonidoFields",
    "Alquiler de Equipos de Iluminación": "AlquilerIluminacionFields",
    "Catering": "CateringFields",

    // 💻 Tecnología e Informática
    "Desarrollador de Software": "DesarrolladorSoftwareFields",
    "Programador": "ProgramadorFields",
    "Tecnología": "TecnologiaFields",

    // 👗 Ropa y Moda
    "Carnaval": "CarnavalFields",

    // 🛐 Otros
    "Necesito": "NecesitoFields",
    "Busco": "BuscoFields",
    "Donaciones": "DonacionesFields",
    "Espiritualidad": "EspiritualidadFields",
    "Turismo": "TurismoFields",
    "Otros": "OtrosFields"
};

const CategoryFields = ({ category, formData, handleChange, handleCheckboxChange }) => {
    const [FieldsComponent, setFieldsComponent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const componentCache = {}; // Cache imported components

    useEffect(() => {
        if (category) {
            const loadComponent = async () => {
                setLoading(true);
                setError("");

                const filename = categoryFileMap[category];

                if (!filename) {
                    setError(`No fields available for: "${category}"`);
                    setFieldsComponent(null);
                    setLoading(false);
                    return;
                }

                if (componentCache[filename]) {
                    setFieldsComponent(() => componentCache[filename]);
                    setLoading(false);
                    return;
                }

                try {
                    console.log(`Loading fields for category: ${category}`);
                    const Component = await import(`../../CategoryFields/${filename}`);
                    componentCache[filename] = Component.default;
                    setFieldsComponent(() => Component.default);
                } catch (err) {
                    console.error(`Failed to load fields for category: ${category}`, err);
                    setError(`Could not load fields for category: ${category}.`);
                    setFieldsComponent(null);
                } finally {
                    setLoading(false);
                }
            };

            loadComponent();
        } else {
            setFieldsComponent(null);
        }
    }, [category]);

    if (!category) {
        return <p className="text-gray-500">Seleccione una categoría para cargar sus campos específicos.</p>;
    }

    if (loading) {
        return <p className="text-gray-500">Loading fields for "{category}"...</p>;
    }

    if (error) {
        return (
            <div className="text-red-500">
                <p>{error}</p>
                <p>Please try again or contact support.</p>
            </div>
        );
    }

    if (!FieldsComponent) {
        return (
            <p className="text-gray-500">
                No additional fields are available for "{category}". Please try another category.
            </p>
        );
    }

    return (
        <FieldsComponent
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
        />
    );
};

export default CategoryFields;
