/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Mensaje que tendrá la etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Todo mayúsculas
     */
    allCaps?: boolean;
    /**
     * Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de fuente personalizado
     */
    fontColor?: string;
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
