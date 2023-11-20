/* eslint-disable prettier/prettier */
import clsx from 'clsx'
import './App.css'
const GlassPane = ({ children, className }) => {
    return (
        <div
            className={clsx(
                'glass rounded-2xl border-2 border-solid border-gray-200',
                className
            )}
        >
            {children}
        </div>
    )
}

export default GlassPane
