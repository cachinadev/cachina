import React, { useEffect, useState } from "react";

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

                if (componentCache[category]) {
                    setFieldsComponent(() => componentCache[category]);
                    setLoading(false);
                    return;
                }

                try {
                    console.log(`Loading fields for category: ${category}`);
                    const Component = await import(`../../CategoryFields/${category}Fields`);
                    componentCache[category] = Component.default;
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
