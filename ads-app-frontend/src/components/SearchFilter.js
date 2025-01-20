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
    return (
        <div className="mb-8 bg-gray-100 p-6 rounded-md shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Categories Dropdown */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">All Categories</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border rounded-md"
                    >
                        <option value="">All Categories</option>
                        {uniqueFilters.categories?.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Input */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title..."
                        className="w-full p-3 border rounded-md"
                    />
                </div>

                {/* Location Filters */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">All Regions</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <select
                            value={departamento}
                            onChange={(e) => setDepartamento(e.target.value)}
                            className="p-2 border rounded-md"
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
                            onChange={(e) => setProvincia(e.target.value)}
                            className="p-2 border rounded-md"
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
                            className="p-2 border rounded-md"
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
