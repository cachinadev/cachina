import React, { useCallback } from "react";

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
    // Handle changes efficiently with automatic resets
    const handleChange = useCallback((setter, resetters = []) => (e) => {
        setter(e.target.value);
        resetters.forEach(reset => reset(""));
    }, []);

    // Generate dropdown options dynamically
    const generateOptions = useCallback((items = []) => (
        items.map((item, idx) => <option key={idx} value={item}>{item}</option>)
    ), []);

    return (
        <div className="mb-8 bg-gray-200 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* 📌 Categories Dropdown */}
                <div className="lg:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Categoría</label>
                    <select
                        value={category}
                        onChange={handleChange(setCategory)}
                        className="w-full p-2 border rounded-lg text-gray-700"
                    >
                        <option value="">Todas</option>
                        {generateOptions(uniqueFilters.categories)}
                    </select>
                </div>

                {/* 🔍 Search Input */}
                <div className="lg:col-span-5">
                    <label className="block text-gray-700 font-semibold mb-2">Buscar</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange(setSearchTerm)}
                        placeholder="Buscar por título o descripción..."
                        className="w-full p-2 border rounded-lg text-gray-700"
                    />
                </div>

                {/* 📍 Location Filters */}
                <div className="lg:col-span-5">
                    <label className="block text-gray-700 font-semibold mb-2">Ubicación</label>
                    <div className="grid grid-cols-3 gap-2">
                        <select
                            value={departamento}
                            onChange={handleChange(setDepartamento, [setProvincia, setDistrito])}
                            className="p-2 border rounded-lg text-gray-700"
                        >
                            <option value="">Departamento</option>
                            {generateOptions(uniqueFilters.departamentos)}
                        </select>
                        <select
                            value={provincia}
                            onChange={handleChange(setProvincia, [setDistrito])}
                            className="p-2 border rounded-lg text-gray-700"
                            disabled={!departamento}
                        >
                            <option value="">Provincia</option>
                            {generateOptions(uniqueFilters.provincias)}
                        </select>
                        <select
                            value={distrito}
                            onChange={handleChange(setDistrito)}
                            className="p-2 border rounded-lg text-gray-700"
                            disabled={!provincia}
                        >
                            <option value="">Distrito</option>
                            {generateOptions(uniqueFilters.distritos)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
