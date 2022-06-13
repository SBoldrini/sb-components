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
  color?: 'primary'|'secondary'|'tertiary'

  /**
   * Contenido de la etiqueta
   */
  label: string;

  /**
   * De qué tamaño será la etiqueta?
   */
  size?: 'normal'|'h1'|'h2'|'h3';


}


export const MyLabel = ({
  allCaps = false,
  color,
  fontColor = '',
  label = 'No Label',
  size = 'normal',
  ...props
}: MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{color: fontColor}}
      {...props}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
