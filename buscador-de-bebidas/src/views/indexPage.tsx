import { use } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
    useAppStore((state) => state.categories);
    return (
        <div>
           <h1>Inicio</h1>
        </div>
    );
}