import { useEffect, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useActionData } from "react-router-dom";   
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    const location = useLocation()
    console.log(location.pathname);
    {/*Así sabemos por dónde está navegando el usuario*/ }
const isHome = useMemo(() => location.pathname === "/", [location.pathname]);
    console.log(isHome);
    {/*Así sabemos si está en la página de inicio*/ }
   
    const fetchCategories = useAppStore((state) => state.fetchCategories);
   
    useEffect(() => {
fetchCategories();
    },[])

    return (
        <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800" }>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/logo.svg" alt="logo" className="w-32" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>Inicio</NavLink>
                        <NavLink to="/favoritos" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>favoritos</NavLink>

                    </nav>
                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o Ingredientes</label>
                            <input id="ingredient" type="text" name="ingredient" className="p-3 w-full rounded-lg focus:outline-none" placeholder="Nombre o ingrediente. Ej: Vodka, Tequila" />
                        </div>
                         <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Categoría</label>
                            <select id="ingredient" name="ingredient" className="p-3 w-full rounded-lg focus:outline-none" placeholder="Nombre o ingrediente. Ej: Vodka, Tequila">
                            <option value="">-- Seleccione --</option>
                            </select>
                        </div>
                        <input type="submit"  value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"/>
                    </form>
                )}
            </div>
        </header>
    );

}