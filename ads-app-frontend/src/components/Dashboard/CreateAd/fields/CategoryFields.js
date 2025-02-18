import React, { useEffect, useState } from "react";

const categoryFileMap = {
    // 🏠 Bienes Raíces y Alquiler
    "Alquilo": "AlquiloFields",
    "Bienes Raíces": "BienesRaicesFields",
    "Lugares": "LugaresFields",
    "Garajes": "GarajesFields",
    "Local de eventos": "LocalEventosFields",
    "Alquiler de Ropa de Baile": "AlquilerRopadebaileFields",
    "Alquiler de Ternos/Vestidos": "AlquilerTernoVestidosFields",

    // 🛍️ Compra y Venta
    "Venta": "VentaFields",
    "Remates": "RematesFields",
    "Comida": "ComidaFields",
    "Bodegas": "BodegasFields",
    "Minimarket": "MinimarketFields",
    "Restaurante": "RestauranteFields",

    // 👷‍♂️ Trabajo y Profesiones
    "Empleo": "EmpleoFields",
    "Negocio": "NegocioFields",
    "Servicios": "ServiciosFields",
    "Profesores": "ProfesoresFields",
    "Ingenieros": "IngenierosFields",
    "Médico Cirujano": "MedicoCirujanoFields",
    "Psicólogo": "PsicologoFields",
    "Electricista": "ElectricistaFields",
    "Plomero": "PlomeroFields",
    "Mecánico": "MecanicoFields",
    "Carpintero": "CarpinteroFields",
    "Pintores": "PintoresFields",
    "Soldador": "SoldadorFields",
    "Taxista": "TaxistaFields",
    "Transportistas": "TransportistasFields",
    "Masajista": "MasajistaFields",
    "Abogados": "AbogadosFields",
    "Administradores": "AdministradoresFields",
    "Antropólogo": "AntropologoFields",
    "Archivólogo": "ArchivologoFields",
    "Arquitecto": "ArquitectoFields",
    "Bibliotecólogo": "BibliotecologoFields",
    "Biólogo": "BiologoFields",
    "Botánico": "BotanicoFields",
    "Científicos": "CientificosFields",
    "Computista": "ComputistaFields",
    "Contador": "ContadorFields",
    "Ecólogo": "EcologoFields",
    "Economista": "EconomistaFields",
    "Editor": "EditorFields",
    "Filólogos": "FilologosFields",
    "Físico": "FisicoFields",
    "Geógrafo": "GeografoFields",
    "Impresor": "ImpresorFields",
    "Jornalero": "JornaleroFields",
    "Matemático": "MatematicoFields",
    "Metalúrgico": "MetalurgicoFields",
    "Obrero": "ObreroFields",
    "Paleontólogo": "PaleontologoFields",
    "Periodista": "PeriodistaFields",
    "Politólogo": "PolitologoFields",
    "Psicoanalista": "PsicoanalistaFields",
    "Químico": "QuimicoFields",
    "Radiólogo": "RadiologoFields",
    "Sociólogo": "SociologoFields",
    "Técnico de sonido": "TecnicoSonidoFields",
    "Traductores": "TraductoresFields",
    "Desarrollador de Software": "DesarrolladorSoftwareFields",
    "Diseñador Gráfico": "DisenadorGraficoFields",
    "Analista de Datos": "AnalistaDatosFields",
    "Programador": "ProgramadorFields",
    "Profesional": "ProfesionalFields",

    // 🩺 Salud y Bienestar
    "Salud": "SaludFields",
    "Médico": "MedicoFields",
    "Enfermero": "EnfermeroFields",
    "Farmacólogo": "FarmacologoFields",
    "Paramédico": "ParamedicoFields",
    "Fisioterapeuta": "FisioterapeutaFields",
    "Nutricionista": "NutricionistaFields",
    "Veterinaria": "VeterinariaFields",
    "Curanderos": "CuranderosFields",

    // ⚽ Deporte y Entretenimiento
    "Deporte": "DeporteFields",
    "Entretenimiento": "EntretenimientoFields",
    "Cancha Deportiva": "CanchaDeportivaFields",
    "Música": "MusicaFields",
    "Animadores": "AnimadoresFields",
    "Entrenadores": "EntrenadoresFields",
    "Payasos": "PayasosFields",
    "Instructor de Yoga": "InstructorYogaFields",

    // 🎨 Arte y Fotografía
    "Foto y Video": "FotoVideoFields",
    "Fotógrafo": "FotografoFields",
    "Escultor": "EscultorFields",
    "Artesano": "ArtesanoFields",
    "Artistas": "ArtistasFields",
    "Tejedoras": "TejedorasFields",
    "Diseñador de Moda": "DisenadorModaFields",
    "Bordados": "BordadosFields",

    // 🚗 Movilidad y Transporte
    "Transporte": "TransporteFields",
    "Mudanzas": "MudanzasFields",
    "Transporte de carga": "TransporteCargaFields",
    "Chofer de camión": "ChoferCamionFields",
    "Expresos": "ExpresosFields",
    "Colectivos": "ColectivosFields",

    // 🌾 Agricultura y Ganadería
    "Agricultura": "AgriculturaFields",
    "Acuicultura": "AcuiculturaFields",
    "Ganadería": "GanaderiaFields",
    "Pastor ganadero": "PastorGanaderoFields",
    "Peón de campo": "PeonCampoFields",
    "Lechero": "LecheroFields",
    "Leñador": "LenadorFields",

    // 🎭 Eventos y Tradiciones
    "Eventos": "EventosFields",
    "Tradición": "TradicionFields",
    "Maestro de Ceremonia": "MaestroCeremoniaFields",
    "Locutores": "LocutoresFields",
    "Organizador de Eventos": "OrganizadorEventosFields",

    // 🛠️ Servicios Generales
    "Aseadora": "AseadoraFields",
    "Barbero": "BarberoFields",
    "Barrendero": "BarrenderoFields",
    "Cerrajero": "CerrajeroFields",
    "Electrónico": "ElectronicoFields",
    "Fontanero": "FontaneroFields",
    "Lavanderas": "LavanderasFields",
    "Limpiavidrios": "LimpiavidriosFields",
    "Peluquero": "PeluqueroFields",
    "Repartidor": "RepartidorFields",
    "Sastre": "SastreFields",
    "Secretaria": "SecretariaFields",
    "Seguridad": "SeguridadFields",
    "Sonido": "SonidoFields",
    "Tornero": "TorneroFields",
    "Vigilante": "VigilanteFields",
    "Jardinero": "JardineroFields",
    "Instalador de Paneles Solares": "InstaladorPanelesSolaresFields",
    "Peluquería": "PeluqueriaFields",

    // 💼 Negocios y Finanzas
    "Negocio": "NegocioFields",
    "Abastecimiento": "AbastecimientoFields",
    "Finanzas": "FinanzasFields",

    // 💻 Tecnología e Informática
    "Desarrollador de Software": "DesarrolladorSoftwareFields",
    "Tecnología": "TecnologiaFiedls",
    "Programador": "ProgramadorFields",

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
