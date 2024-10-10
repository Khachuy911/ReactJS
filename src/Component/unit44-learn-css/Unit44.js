import clsx from 'clsx';

import style from './unit.module.scss';

function Button ({ primary, danger, warning, disable }){

    const classes = clsx(style.btn, { 
        [style.primary]: primary,
        [style.danger]: danger,
        [style.warning]: warning,
        [style.disable]: disable,

    });

    return (
        <div>
            <button className={classes}>Click me !</button>
        </div>
    )
}

export default Button;