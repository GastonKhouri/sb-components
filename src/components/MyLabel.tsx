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
}

const MyLabel = ( {
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps ) => {
    return (
        <span
            className={ `label ${ size } text-${ color }` }
            style={ { color: fontColor } }
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    );
};

export default MyLabel;
