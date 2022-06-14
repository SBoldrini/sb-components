/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Capitalizar?
     */
    allCaps?: boolean;
    /**
     * Color personalizado de fuente
     */
    fontColor?: string;
    /**
    * Qué color de fuente utilizar?
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Contenido de la etiqueta
     */
    label: string;
    /**
     * De qué tamaño será la etiqueta?
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, ...props }: MyLabelProps) => JSX.Element;
