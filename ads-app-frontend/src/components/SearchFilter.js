const SearchFilter = ({
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    departamento,
    setDepartamento,
    provincia,
    setProvincia,
    distrito,
    setDistrito,
    uniqueFilters
}) => {
    const handleReset = () => {
        setSearchTerm("");
        setCategory("");
        setDepartamento("");
        setProvincia("");
        setDistrito("");
    };

    const handleDepartamentoChange = (e) => {
        setDepartamento(e.target.value);
        setProvincia(""); // Reset Provincia
        setDistrito(""); // Reset Distrito
    };

    const handleProvinciaChange = (e) => {
        setProvincia(e.target.value);
        setDistrito(""); // Reset Distrito
    };

    return (
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Categories Dropdown */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Categoría</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg text-gray-700"
                    >
                        <option value="">Todas las categorías</option>
                        {uniqueFilters.categories?.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Input */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Buscar</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar por título o descripción..."
                        className="w-full p-2 border rounded-lg text-gray-700"
                    />
                </div>

                {/* Location Filters */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Ubicación</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <select
                            value={departamento}
                            onChange={handleDepartamentoChange}
                            className="p-2 border rounded-lg text-gray-700"
                        >
                            <option value="">Departamento</option>
                            {uniqueFilters.departamentos?.map((dep, idx) => (
                                <option key={idx} value={dep}>
                                    {dep}
                                </option>
                            ))}
                        </select>
                        <select
                            value={provincia}
                            onChange={handleProvinciaChange}
                            className="p-2 border rounded-lg text-gray-700"
                            disabled={!departamento}
                        >
                            <option value="">Provincia</option>
                            {uniqueFilters.provincias?.map((prov, idx) => (
                                <option key={idx} value={prov}>
                                    {prov}
                                </option>
                            ))}
                        </select>
                        <select
                            value={distrito}
                            onChange={(e) => setDistrito(e.target.value)}
                            className="p-2 border rounded-lg text-gray-700"
                            disabled={!provincia}
                        >
                            <option value="">Distrito</option>
                            {uniqueFilters.distritos?.map((dis, idx) => (
                                <option key={idx} value={dis}>
                                    {dis}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchFilter;
