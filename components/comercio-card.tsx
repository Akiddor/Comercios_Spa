"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ComercioProps {
  nombre: string;
  descripcion: string;
  direccion: string;
  horario: string;
  telefono: string;
  imagenUrl: string;
  link: string; // Nuevo campo para el enlace
}

export function ComercioCard({ nombre, descripcion, direccion, horario, telefono, imagenUrl, link }: ComercioProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full overflow-hidden">
      <Link href={link} target="_blank" rel="noopener noreferrer"> {/* Enlace envolviendo la imagen */}
        <div className="relative h-48 cursor-pointer">
          <Image
            src={`/images/${imagenUrl}`} // Ruta de imagen
            alt={nombre}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <CardHeader className="text-white">
              <CardTitle className="text-2xl">{nombre}</CardTitle>
              <CardDescription className="text-gray-200">{descripcion}</CardDescription>
            </CardHeader>
          </div>
        </div>
      </Link>
      <CardContent className="mt-4">
        <p><strong>Dirección:</strong> {direccion}</p>
        {expanded && (
          <>
            <p className="mt-2"><strong>Horario:</strong> {horario}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          onClick={() => setExpanded(!expanded)}
          className="w-full"
        >
          {expanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" /> Menos información
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" /> Más información
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
