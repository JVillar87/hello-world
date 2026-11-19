"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Al montar el componente, showModal() convierte el dialogo en una
    // ventana modal nativa y aplica el bloqueo del fondo automaticamente.
    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) {
            dialog.showModal();
        }
    }, []);

    // Cerrar el dialogo activa su evento onClose. El evento vuelve a la
    // ruta anterior, eliminando el modal y mostrando la pagina de origen.
    function closeModal() {
        const dialog = dialogRef.current;
        if (dialog?.open) {
            dialog.close();
        }
    }

    return (
        <dialog
            ref={dialogRef}
            onClose={() => router.back()}
            onClick={(event) => {
                // El fondo del dialogo tambien recibe clics. Si el elemento
                // pulsado es el propio dialogo, se considera un clic exterior.
                if (event.target === event.currentTarget) {
                    closeModal();
                }
            }}
            style={{
                width: "min(90vw, 800px)",
                maxHeight: "90vh",
                padding: 0,
                border: "none",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "relative",
                    padding: "1rem",
                    background: "white",
                }}
            >
                <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Cerrar modal"
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        zIndex: 1,
                        width: "2.25rem",
                        height: "2.25rem",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        background: "rgba(255, 255, 255, 0.9)",
                        fontSize: "1.25rem",
                    }}
                >
                    x
            </button>
                {children}
            </div>
        </dialog>
    );
}